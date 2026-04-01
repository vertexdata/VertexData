import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Settings, 
  Calendar, 
  Mic2, 
  Rocket,
  Check
} from 'lucide-react';

// Form Data Interface
interface FormData {
  businessName: string;
  businessType: string;
  serviceArea: string;
  businessPhone: string;
  businessHours: string;
  callRouting: string;
  enableMissedCallText: boolean;
  bookAppointments: boolean;
  collectLeadInfo: boolean;
  sendSmsQuote: boolean;
  transferUrgent: boolean;
  calendarIntegration: string;
  voicePersonality: string;
  greetingMessage: string;
}

const initialFormData: FormData = {
  businessName: '',
  businessType: '',
  serviceArea: '',
  businessPhone: '',
  businessHours: '',
  callRouting: 'dispatch',
  enableMissedCallText: true,
  bookAppointments: true,
  collectLeadInfo: true,
  sendSmsQuote: false,
  transferUrgent: true,
  calendarIntegration: 'manual',
  voicePersonality: 'friendly',
  greetingMessage: "Thanks for calling, how can I help today?"
};

const steps = [
  { id: 1, title: 'Business Info', icon: Building2 },
  { id: 2, title: 'Phone Setup', icon: Phone },
  { id: 3, title: 'Call Handling', icon: Settings },
  { id: 4, title: 'Calendar', icon: Calendar },
  { id: 5, title: 'Voice AI', icon: Mic2 },
];

export const SetupWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col font-sans text-gray-300">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Welcome to <span className="text-brand-blue">Jevus.ai</span>
            </h1>
            <p className="text-lg text-gray-400">
              Let's get your AI receptionist configured.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Progress Header */}
            {!isSubmitted && (
              <div className="px-8 pt-8 pb-6 border-b border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-400">Step {currentStep} of {steps.length}</span>
                  <span className="text-sm font-medium text-brand-blue">{steps[currentStep - 1].title}</span>
                </div>
                {/* Progress Bar Track */}
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-violet"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-10 min-h-[400px] flex flex-col">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <SuccessScreen formData={formData} />
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow"
                  >
                    {currentStep === 1 && (
                      <StepBusinessInfo formData={formData} updateField={updateField} />
                    )}
                    {currentStep === 2 && (
                      <StepPhoneSetup formData={formData} updateField={updateField} />
                    )}
                    {currentStep === 3 && (
                      <StepCallHandling formData={formData} updateField={updateField} />
                    )}
                    {currentStep === 4 && (
                      <StepCalendar formData={formData} updateField={updateField} />
                    )}
                    {currentStep === 5 && (
                      <StepVoicePersonality formData={formData} updateField={updateField} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {!isSubmitted && (
                <div className="mt-10 flex justify-between pt-6 border-t border-white/5">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      currentStep === 1 
                        ? 'text-gray-600 cursor-not-allowed' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <ChevronLeft size={16} className="mr-2" />
                    Back
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="flex items-center px-8 py-2.5 bg-brand-blue hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 transition-all transform hover:scale-105"
                  >
                    {currentStep === steps.length ? 'Finish Setup' : 'Next Step'}
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- Step Components ---

const StepBusinessInfo: React.FC<{ formData: FormData, updateField: (field: keyof FormData, value: any) => void }> = ({ formData, updateField }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Business Information</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Business Name</label>
        <input 
          type="text" 
          value={formData.businessName}
          onChange={(e) => updateField('businessName', e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          placeholder="e.g. Acme Plumbing"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Business Type</label>
        <select 
          value={formData.businessType}
          onChange={(e) => updateField('businessType', e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none"
        >
          <option value="" disabled>Select a type...</option>
          <option value="plumbing">Plumbing</option>
          <option value="hvac">HVAC</option>
          <option value="electrical">Electrical</option>
          <option value="contractor">General Contractor</option>
          <option value="roofing">Roofing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Service Area</label>
        <input 
          type="text" 
          value={formData.serviceArea}
          onChange={(e) => updateField('serviceArea', e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          placeholder="e.g. Austin, TX Area"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Business Phone</label>
        <input 
          type="tel" 
          value={formData.businessPhone}
          onChange={(e) => updateField('businessPhone', e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          placeholder="(555) 123-4567"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">Business Hours</label>
      <input 
        type="text" 
        value={formData.businessHours}
        onChange={(e) => updateField('businessHours', e.target.value)}
        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
        placeholder="e.g. Mon-Fri 8am-5pm"
      />
    </div>
  </div>
);

const StepPhoneSetup: React.FC<{ formData: FormData, updateField: (field: keyof FormData, value: any) => void }> = ({ formData, updateField }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-white mb-2">Phone Setup</h2>
    <p className="text-gray-400 text-sm mb-6">Configure how calls are routed when the AI cannot handle a request.</p>

    <div className="space-y-4">
      <label className="text-sm font-medium text-gray-300 block">Where should calls route if AI can't help?</label>
      <div className="grid md:grid-cols-3 gap-4">
        {['dispatch', 'voicemail', 'mobile'].map((option) => (
          <div 
            key={option}
            onClick={() => updateField('callRouting', option)}
            className={`cursor-pointer rounded-xl border p-4 transition-all ${
              formData.callRouting === option 
                ? 'bg-brand-blue/10 border-brand-blue ring-1 ring-brand-blue' 
                : 'bg-black/20 border-white/10 hover:border-white/20 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                formData.callRouting === option ? 'border-brand-blue' : 'border-gray-500'
              }`}>
                {formData.callRouting === option && <div className="w-2 h-2 rounded-full bg-brand-blue" />}
              </div>
            </div>
            <span className="font-medium text-white capitalize">
              {option === 'dispatch' ? 'Dispatch Team' : option === 'mobile' ? 'Forward to Mobile' : 'Voicemail'}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="pt-6 border-t border-white/5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">Enable missed call text back</h3>
          <p className="text-sm text-gray-400 mt-1">Automatically text callers if you miss a call.</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={formData.enableMissedCallText}
            onChange={(e) => updateField('enableMissedCallText', e.target.checked)}
            className="sr-only peer" 
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
        </label>
      </div>
    </div>
  </div>
);

const StepCallHandling: React.FC<{ formData: FormData, updateField: (field: keyof FormData, value: any) => void }> = ({ formData, updateField }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-white mb-2">Call Handling</h2>
    <p className="text-gray-400 text-sm mb-6">Select the capabilities you want your AI receptionist to have.</p>

    <div className="space-y-3">
      {[
        { id: 'bookAppointments', label: 'Book appointments', desc: 'Allow AI to schedule directly on your calendar' },
        { id: 'collectLeadInfo', label: 'Collect lead information', desc: 'Gather name, address, and job details' },
        { id: 'sendSmsQuote', label: 'Send SMS quote links', desc: 'Text pricing or estimate forms to callers' },
        { id: 'transferUrgent', label: 'Transfer urgent calls', desc: 'Immediately route emergencies to you' },
      ].map((item) => (
        <label key={item.id} className="flex items-start p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-white/5 cursor-pointer transition-colors">
          <div className="flex items-center h-5 mt-1">
            <input 
              type="checkbox" 
              checked={(formData as any)[item.id]}
              onChange={(e) => updateField(item.id as keyof FormData, e.target.checked)}
              className="w-5 h-5 rounded border-gray-600 text-brand-blue focus:ring-brand-blue bg-gray-700"
            />
          </div>
          <div className="ml-4">
            <span className="block text-white font-medium">{item.label}</span>
            <span className="block text-sm text-gray-400 mt-0.5">{item.desc}</span>
          </div>
        </label>
      ))}
    </div>
  </div>
);

const StepCalendar: React.FC<{ formData: FormData, updateField: (field: keyof FormData, value: any) => void }> = ({ formData, updateField }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-white mb-2">Calendar Integration</h2>
    <p className="text-gray-400 text-sm mb-6">Connect your calendar to enable real-time booking.</p>

    <div className="grid gap-4">
      {[
        { id: 'calendly', label: 'Connect Calendly', icon: '📅' },
        { id: 'google', label: 'Connect Google Calendar', icon: '🇬' },
        { id: 'manual', label: 'Manual Booking (Email Notification)', icon: '✉️' },
      ].map((option) => (
        <div 
          key={option.id}
          onClick={() => updateField('calendarIntegration', option.id)}
          className={`cursor-pointer rounded-xl border p-5 flex items-center justify-between transition-all ${
            formData.calendarIntegration === option.id 
              ? 'bg-brand-blue/10 border-brand-blue ring-1 ring-brand-blue' 
              : 'bg-black/20 border-white/10 hover:border-white/20 hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
              {option.icon}
            </div>
            <span className="font-medium text-white text-lg">{option.label}</span>
          </div>
          {formData.calendarIntegration === option.id && (
            <CheckCircle2 className="text-brand-blue" size={24} />
          )}
        </div>
      ))}
    </div>
  </div>
);

const StepVoicePersonality: React.FC<{ formData: FormData, updateField: (field: keyof FormData, value: any) => void }> = ({ formData, updateField }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-white mb-2">AI Voice Personality</h2>
    <p className="text-gray-400 text-sm mb-6">Customize how your AI sounds to your customers.</p>

    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Voice Tone</label>
        <div className="grid grid-cols-3 gap-3">
          {['friendly', 'professional', 'energetic'].map((tone) => (
            <button
              key={tone}
              onClick={() => updateField('voicePersonality', tone)}
              className={`py-3 px-4 rounded-lg text-sm font-medium capitalize transition-all ${
                formData.voicePersonality === tone
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                  : 'bg-black/20 text-gray-400 border border-white/10 hover:bg-white/5'
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Greeting Message</label>
        <textarea 
          value={formData.greetingMessage}
          onChange={(e) => updateField('greetingMessage', e.target.value)}
          rows={4}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
          placeholder="e.g. Thanks for calling Acme Plumbing, how can I help today?"
        />
        <p className="text-xs text-gray-500 text-right">This is the first thing the AI will say.</p>
      </div>
    </div>
  </div>
);

const SuccessScreen: React.FC<{ formData: FormData }> = ({ formData }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-10"
  >
    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
      <Rocket className="text-emerald-500 w-10 h-10" />
    </div>
    
    <h2 className="text-3xl font-bold text-white mb-4">Your AI Receptionist is Ready!</h2>
    <p className="text-gray-400 mb-8 max-w-md mx-auto">
      We've configured your agent based on your preferences. You can now access your dashboard to test calls.
    </p>

    <div className="bg-black/30 border border-white/10 rounded-xl p-6 max-w-sm mx-auto mb-8 text-left">
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
        <span className="text-gray-400 text-sm">Assigned Number</span>
        <span className="text-white font-mono font-bold">+1 (512) 555-0198</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Status</span>
        <span className="flex items-center text-emerald-400 text-sm font-bold bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
          Active
        </span>
      </div>
    </div>

    <button className="px-8 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-brand-blue/20 transition-all transform hover:scale-105 w-full max-w-sm">
      Launch Dashboard
    </button>
  </motion.div>
);
