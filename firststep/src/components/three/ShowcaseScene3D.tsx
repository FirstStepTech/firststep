import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCard({ position, color, delay }: {
  position: [number, number, number];
  color: string;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + delay;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    meshRef.current.rotation.y = Math.cos(t * 0.2) * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.2;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 0.6, 0.05]} />
        <MeshDistortMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
          distort={0.1}
          speed={1}
        />
      </mesh>
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, 2, -3]} intensity={0.4} color="#38bdf8" />
      <pointLight position={[3, -2, 3]} intensity={0.4} color="#0ea5e9" />

      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <FloatingCard position={[-2, 0.5, 0]} color="#38bdf8" delay={0} />
      </Float>
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <FloatingCard position={[0, -0.3, 0]} color="#0ea5e9" delay={0.5} />
      </Float>
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <FloatingCard position={[2, 0.5, 0]} color="#ff0080" delay={1} />
      </Float>

      <Environment preset="city" />
    </>
  );
}

export default function ShowcaseScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ height: '400px' }}
    >
      <SceneContent />
    </Canvas>
  );
}
