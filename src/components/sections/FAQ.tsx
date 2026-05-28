import { useState } from 'react';
import type { ReactNode } from 'react';

const faqs: Array<{ id: string; q: ReactNode; a: string }> = [
  {
    id: 'firststep-sites',
    q: (
      <>
        What type of websites does <span className="brand-script">FirstStep</span> build?
      </>
    ),
    a: 'Business websites, landing pages, portfolios, and custom sites.',
  },
  { id: 'responsive', q: 'Are sites mobile responsive?', a: 'Yes — every project is responsive by default.' },
  { id: 'redesign', q: 'Can you redesign an existing site?', a: 'Yes — we can refresh your design and improve performance.' },
  { id: 'quote', q: 'How do I get a quote?', a: 'Use Request Proposal or Book Consultation to send project details.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container" style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <div className="section-kicker">Frequently asked</div>
          <h2 style={{ marginTop: 8 }}>Answers about our services</h2>
          <p className="small-muted" style={{ marginTop: 8 }}>We keep the process clear and easy to follow.</p>
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((f, i) => (
              <div key={f.id} style={{ border: '1px solid var(--card-border)', borderRadius: 10, padding: 12 }}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 600 }}>{f.q}</div>
                    <div className="small-muted">{openIndex === i ? '−' : '+'}</div>
                  </div>
                </button>
                {openIndex === i && <div className="small-muted" style={{ marginTop: 8 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
