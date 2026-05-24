import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What if I want to answer the call myself?",
    answer: "You always get first dibs. We ring your phone first. If you pick up, the AI stays quiet. If you're busy or on a job, the AI picks up instantly so you never miss the lead."
  },
  {
    question: "Do I need to install anything?",
    answer: "No. We handle everything. We set up the phone number and link it to your calendar. You just keep using your phone like normal."
  },
  {
    question: "What happens after I sign up?",
    answer: "We schedule a 30-minute onboarding call to learn your business, pricing, and schedule. Then we build your AI and you're live within 48 hours."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. We don't believe in locking you into long contracts. If we don't make you money, you shouldn't pay us. Cancel whenever you want."
  },
  {
    question: "Will it work with my existing phone number?",
    answer: "Yes. You can forward your missed calls to your dedicated Jevus number, or we can port your number over. We'll help you set it up."
  },
  {
    question: "How fast does the AI call them back?",
    answer: "Instantly. As soon as the missed call hangs up, our system triggers a callback within seconds. Speed to lead is everything."
  }
];

const FaqRow: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none gap-6"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen
          ? <Minus size={20} className="text-brand-blue flex-shrink-0" />
          : <Plus size={20} className="text-gray-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <p className="pb-6 pr-10 text-base text-gray-400 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export const HomepageFaq: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <FaqRow key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
