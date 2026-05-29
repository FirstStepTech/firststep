import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/Button';
import FirstStepLogo from '@/components/branding/FirstStepLogo';

type InquiryType = 'consultation' | 'proposal';

interface InquiryFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  preferredDate: string;
  businessTime: string;
  freeTime: string;
  projectDetails: string;
}

const INITIAL_FORM: InquiryFormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  serviceNeeded: 'Company Website',
  preferredDate: '',
  businessTime: '',
  freeTime: '',
  projectDetails: '',
};

const TARGET_EMAIL = 'firststepwebtech@gmail.com';
const SERVICES = [
  'Company Website',
  'Landing Page',
  'Business Website',
  'Custom Web Project',
  'Website Redesign',
  'Support & Maintenance',
];

export default function InquiryModal({
  open,
  type,
  onClose,
}: {
  open: boolean;
  type: InquiryType;
  onClose: () => void;
}) {
  const [form, setForm] = useState<InquiryFormData>({ ...INITIAL_FORM });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [open]);

  const title = useMemo(
    () => (type === 'consultation' ? 'Book consultancy' : 'Request proposal'),
    [type]
  );

  const subtitle = 'Tell us what website you need. Add your contact details, business time, free time, and project requirement. Our team will contact you via phone.';

  const updateField = (key: keyof InquiryFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!form.company.trim()) {
      toast.error('Please enter your company / business name.');
      return;
    }
    if (!form.phone.trim()) {
      toast.error('Please enter your phone number.');
      return;
    }
    if (!form.serviceNeeded) {
      toast.error('Please select a service.');
      return;
    }

    setSending(true);

    try {
      const payload = {
        _subject: `${title} — ${form.company || form.name}`,
        _template: 'table',
        _captcha: 'false',
        inquiry_type: title,
        name: form.name,
        company_or_business: form.company,
        phone: form.phone,
        email: form.email || 'Not provided',
        service_needed: form.serviceNeeded,
        preferred_date: form.preferredDate || 'Not provided',
        business_time: form.businessTime || 'Not provided',
        free_time: form.freeTime || 'Not provided',
        project_details: form.projectDetails || 'Not provided',
      };

      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Email service request failed');
      }

      toast.success('Message received! Our team will contact you via phone within 24 hours.', { duration: 5000 });
      setForm({ ...INITIAL_FORM });
      setTimeout(() => onClose(), 1200);
    } catch (error) {
      toast.error('Could not send right now. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] overflow-y-auto bg-black/45 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-8"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              className="modal-scroll relative my-auto w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border sm:rounded-[1.8rem]"
              style={{
                maxHeight: '88vh',
                borderColor: 'var(--card-border)',
                background: 'var(--surface-solid)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
              }}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
                style={{
                  border: '1px solid var(--card-border)',
                  color: 'var(--muted-foreground)',
                  background: 'var(--surface-solid)',
                }}
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="px-5 py-5 sm:px-6 md:px-8">
                <div className="flex items-center justify-center mb-6">
                  <FirstStepLogo compact />
                </div>
                <div className="max-w-2xl pr-12">
                  <div className="inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                    Inquiry form
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl" style={{ color: 'var(--foreground)' }}>
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7" style={{ color: 'var(--muted-foreground)' }}>
                    {subtitle}
                  </p>
                  <div className="mt-4 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                    <div style={{ color: 'var(--muted-foreground)' }}>Email destination</div>
                    <div className="mt-1 font-medium" style={{ color: 'var(--foreground)' }}>{TARGET_EMAIL}</div>
                  </div>
                  <div className="mt-3 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                    <div style={{ color: 'var(--muted-foreground)' }}>Best for</div>
                    <div className="mt-1 font-medium" style={{ color: 'var(--foreground)' }}>Business websites, redesigns, inquiry forms, and support</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Field label="Your Name" required>
                    <input value={form.name} onChange={(e) => updateField('name', e.target.value)} className="input-premium" placeholder="Enter your name" required />
                  </Field>
                  <Field label="Company / Business" required>
                    <input value={form.company} onChange={(e) => updateField('company', e.target.value)} className="input-premium" placeholder="Enter company name" required />
                  </Field>
                  <Field label="Phone Number" required>
                    <input value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-premium" placeholder="Enter phone number" type="tel" required />
                  </Field>
                  <Field label="Email Address">
                    <input value={form.email} onChange={(e) => updateField('email', e.target.value)} className="input-premium" placeholder="you@business.com" type="email" />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Service Needed" required>
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service) => {
                          const active = form.serviceNeeded === service;
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => updateField('serviceNeeded', service)}
                              className="rounded-2xl px-4 py-3 text-left text-sm font-medium transition"
                              style={{
                                background: active ? 'var(--accent-soft)' : 'var(--surface)',
                                color: active ? 'var(--accent-text)' : 'var(--foreground)',
                                border: active ? '1px solid var(--accent-border)' : '1px solid var(--card-border)',
                              }}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </Field>
                  </div>
                  <Field label="Preferred Date">
                    <input value={form.preferredDate} onChange={(e) => updateField('preferredDate', e.target.value)} className="input-premium" type="date" />
                  </Field>
                  <Field label="Your Business Time">
                    <input value={form.businessTime} onChange={(e) => updateField('businessTime', e.target.value)} className="input-premium" placeholder="Example: 10 AM - 7 PM" />
                  </Field>
                  <Field label="Your Free Time">
                    <input value={form.freeTime} onChange={(e) => updateField('freeTime', e.target.value)} className="input-premium" placeholder="Example: Tomorrow 5 PM" />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Project / Business Details">
                      <textarea
                        value={form.projectDetails}
                        onChange={(e) => updateField('projectDetails', e.target.value)}
                        className="input-premium min-h-32 resize-y sm:min-h-36"
                        placeholder="Tell us about your business, website pages needed, budget range, and goals."
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end" style={{ borderColor: 'var(--card-border)' }}>
                  <Button variant="secondary" onClick={onClose}>Close</Button>
                  <Button variant="primary" loading={sending} onClick={handleSubmit}>Send Inquiry Directly</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </div>
      {children}
    </label>
  );
}
