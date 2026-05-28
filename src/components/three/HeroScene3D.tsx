import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

function FloatingGeometry({ position, color, size, type = 'icosahedron' }: {
  position: [number, number, number];
  color: string;
  size: number;
  type?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePos = useMousePosition();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1 + mousePos.normalizedY * 0.05;
    meshRef.current.rotation.y = t * 0.15 + mousePos.normalizedX * 0.05;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.15;
    meshRef.current.position.x = position[0] + mousePos.normalizedX * 0.1;
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'torus': return new THREE.TorusGeometry(size, size * 0.4, 16, 32);
      case 'octahedron': return new THREE.OctahedronGeometry(size);
      case 'dodecahedron': return new THREE.DodecahedronGeometry(size);
      case 'sphere': return new THREE.SphereGeometry(size, 32, 32);
      default: return new THREE.IcosahedronGeometry(size, 0);
    }
  }, [size, type]);

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.2}
        radius={1}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.05;
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.z = t * 0.03;
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function ParticleRing() {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.3;
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  const mousePos = useMousePosition();

  useFrame(({ camera }) => {
    camera.position.x += (mousePos.normalizedX * 0.3 - camera.position.x) * 0.02;
    camera.position.y += (-mousePos.normalizedY * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, -3, -3]} intensity={0.3} color="#38bdf8" />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#0ea5e9" />
      <spotLight position={[0, 5, 5]} intensity={0.5} color="#38bdf8" angle={0.5} penumbra={1} />

      <CentralCore />
      <ParticleRing />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <FloatingGeometry position={[-2.5, 1.5, -1]} color="#0ea5e9" size={0.4} type="torus" />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <FloatingGeometry position={[2.2, -1.8, -1.5]} color="#ff0080" size={0.35} type="octahedron" />
      </Float>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
        <FloatingGeometry position={[-1.8, -2, 0.5]} color="#38bdf8" size={0.3} type="dodecahedron" />
      </Float>
      <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.3}>
        <FloatingGeometry position={[2.8, 1.2, 0]} color="#0ea5e9" size={0.25} type="sphere" />
      </Float>

      <Environment preset="night" />
    </>
  );
}

export default function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
