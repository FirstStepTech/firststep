import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What type of websites does FirstStep build?',
    a: 'We design and develop business websites, startup websites, landing pages, portfolio sites, service company websites, and other custom website experiences.',
  },
  {
    q: 'Do you create mobile responsive websites?',
    a: 'Yes. Every website is designed to work smoothly across mobile, tablet, laptop, and desktop screens with responsive layout adjustments.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely. We can refresh your current website with improved layout, stronger UI, better responsiveness, and a more premium brand presence.',
  },
  {
    q: 'How do I get a quote for my website project?',
    a: 'You can use the Request Proposal or Book Consultation form and send your details directly to our email through the pre-filled inquiry flow.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-premium grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
            Frequently asked questions
          </div>
          <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] leading-tight sm:text-[2.6rem]" style={{ color: 'var(--foreground)' }}>
            Answers about our website services.
          </h2>
          <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8" style={{ color: 'var(--muted-foreground)' }}>
            We keep our process clear, responsive, and easy to understand from the very beginning.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-[1.5rem] border" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-[15px] font-medium sm:text-base" style={{ color: 'var(--foreground)' }}>{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="h-5 w-5" style={{ color: 'var(--muted-foreground)' }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-6 text-sm leading-7 sm:px-6 sm:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
