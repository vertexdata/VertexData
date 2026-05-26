import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.jevus.ai/webhook/get-started-form';

const PLATFORMS = [
  'ServiceTitan',
  'Housecall Pro',
  'Jobber',
  'FieldEdge',
  'Service Fusion',
  'Google Calendar',
  'None',
  'Other',
];

const SOURCES = ['Google Search', 'Social Media', 'Referral', 'Cold Call', 'Other'];

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  locations: string;
  platform: string;
  platformOther: string;
  challenge: string;
  source: string;
  sourceOther: string;
};

const initialData: FormData = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  locations: '',
  platform: '',
  platformOther: '',
  challenge: '',
  source: '',
  sourceOther: '',
};

const inputClass =
  'w-full bg-white/5 border border-white/10 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-colors outline-none appearance-none';

type Props = { open: boolean; onClose: () => void };

export const GetStartedModal: React.FC<Props> = ({ open, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setData(initialData);
      setSubmitting(false);
      setDone(false);
      setError(null);
    }, 300);
  };

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((prev) => ({ ...prev, [k]: v }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());

  const canProceed =
    step === 1
      ? emailValid
      : step === 2
      ? !!(data.firstName && data.lastName && data.company && data.phone && data.locations)
      : !!data.platform &&
        (data.platform !== 'Other' || !!data.platformOther.trim()) &&
        !!data.source &&
        (data.source !== 'Other' || !!data.sourceOther.trim());

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        email: data.email.trim(),
        first_name: data.firstName.trim(),
        last_name: data.lastName.trim(),
        company: data.company.trim(),
        phone: data.phone.trim(),
        locations: Number(data.locations) || data.locations,
        platform: data.platform === 'Other' ? data.platformOther.trim() : data.platform,
        challenge: data.challenge.trim(),
        source: data.source === 'Other' ? data.sourceOther.trim() : data.source,
        submitted_at: new Date().toISOString(),
        page: typeof window !== 'undefined' ? window.location.href : '',
      };
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone(true);
    } catch (err) {
      setError("Something went wrong sending your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-lg bg-brand-dark border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden max-h-[92vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Get started"
          >
            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Progress bar */}
            {!done && (
              <div className="h-1 bg-white/5 shrink-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-violet"
                  initial={false}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            )}

            <div className="p-7 sm:p-10 overflow-y-auto">
              {done ? (
                <SuccessView onClose={handleClose} />
              ) : (
                <>
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
                    Step {step} of 3
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <StepView key="step-1" title="Let's get started">
                        <Field label="Work Email" required>
                          <input
                            type="email"
                            autoFocus
                            value={data.email}
                            onChange={(e) => update('email', e.target.value)}
                            placeholder="you@yourbusiness.com"
                            className={inputClass}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && canProceed) setStep(2);
                            }}
                          />
                        </Field>
                      </StepView>
                    )}

                    {step === 2 && (
                      <StepView key="step-2" title="Tell us about yourself">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label="First Name" required>
                            <input
                              type="text"
                              value={data.firstName}
                              onChange={(e) => update('firstName', e.target.value)}
                              className={inputClass}
                              autoFocus
                            />
                          </Field>
                          <Field label="Last Name" required>
                            <input
                              type="text"
                              value={data.lastName}
                              onChange={(e) => update('lastName', e.target.value)}
                              className={inputClass}
                            />
                          </Field>
                        </div>
                        <Field label="Company Name" required>
                          <input
                            type="text"
                            value={data.company}
                            onChange={(e) => update('company', e.target.value)}
                            className={inputClass}
                          />
                        </Field>
                        <Field label="Phone Number" required>
                          <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                            className={inputClass}
                          />
                        </Field>
                        <Field label="Number of Locations" required>
                          <input
                            type="number"
                            min={1}
                            value={data.locations}
                            onChange={(e) => update('locations', e.target.value)}
                            className={inputClass}
                          />
                        </Field>
                      </StepView>
                    )}

                    {step === 3 && (
                      <StepView key="step-3" title="Almost there">
                        <Field label="What platform do you currently use?" required>
                          <Select
                            value={data.platform}
                            onChange={(v) => update('platform', v)}
                            options={PLATFORMS}
                            placeholder="Select a platform..."
                          />
                          {data.platform === 'Other' && (
                            <input
                              type="text"
                              value={data.platformOther}
                              onChange={(e) => update('platformOther', e.target.value)}
                              placeholder="Which platform?"
                              className={`${inputClass} mt-2`}
                              autoFocus
                            />
                          )}
                        </Field>

                        <Field label="What's your biggest challenge right now?">
                          <textarea
                            value={data.challenge}
                            onChange={(e) => update('challenge', e.target.value)}
                            rows={3}
                            placeholder="Optional"
                            className={`${inputClass} resize-none`}
                          />
                        </Field>

                        <Field label="How did you hear about us?" required>
                          <Select
                            value={data.source}
                            onChange={(v) => update('source', v)}
                            options={SOURCES}
                            placeholder="Select..."
                          />
                          {data.source === 'Other' && (
                            <input
                              type="text"
                              value={data.sourceOther}
                              onChange={(e) => update('sourceOther', e.target.value)}
                              placeholder="How did you hear about us?"
                              className={`${inputClass} mt-2`}
                              autoFocus
                            />
                          )}
                        </Field>
                      </StepView>
                    )}
                  </AnimatePresence>

                  {error && (
                    <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between gap-3">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        disabled={!canProceed}
                        className="bg-brand-blue hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-7 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-blue/25"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submit}
                        disabled={!canProceed || submitting}
                        className="bg-brand-blue hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-7 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-blue/25"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" /> Submitting…
                          </>
                        ) : (
                          <>
                            Submit <Check size={16} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StepView: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, x: 16 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -16 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">{title}</h2>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({
  label,
  required,
  children,
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">
      {label}
      {required && <span className="text-rose-400 ml-1">*</span>}
    </label>
    {children}
  </div>
);

const Select: React.FC<{
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}> = ({ value, onChange, options, placeholder }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputClass} pr-10 cursor-pointer`}
      style={{ colorScheme: 'dark' }}
    >
      <option value="" className="bg-brand-dark text-gray-400">
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-brand-dark text-white">
          {opt}
        </option>
      ))}
    </select>
    <svg
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
);

const SuccessView: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
    className="text-center py-10"
  >
    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
      <Check size={32} className="text-emerald-400" strokeWidth={3} />
    </div>
    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
      You're all set.
    </h2>
    <p className="text-gray-400 mb-8 max-w-sm mx-auto">
      We'll be in touch within 24 hours.
    </p>
    <button
      type="button"
      onClick={onClose}
      className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand-blue/25"
    >
      Close
    </button>
  </motion.div>
);
