
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';
import { SEOHead } from './components/SEO';
import { softwareApplicationSchema, faqSchema } from './components/JsonLd';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DemoCall } from './components/DemoCall';
import { TrustedBy } from './components/TrustedBy';
import { Problem } from './components/Problem';
import { ProductDemo } from './components/ProductDemo';
import { Capabilities } from './components/Capabilities';
import { Solution } from './components/Solution';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { ROI } from './components/ROI';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SetupWizard } from './components/SetupWizard';
import { OGGenerator } from './components/OGGenerator';
import { TrustCenter } from './components/TrustCenter';
import { AboutPage, IntegrationsPage, PrivacyPage, TermsPage, LegalPage, AcceptableUsePage, AIDisclosurePage } from './components/StaticPages';
import { PlumbersPage } from './components/industries/PlumbersPage';
import { HVACPage } from './components/industries/HVACPage';
import { ElectriciansPage } from './components/industries/ElectriciansPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { PricingPage } from './components/PricingPage';
import { AfterHoursPage } from './components/use-cases/AfterHoursPage';
import { MissedCallRecoveryPage } from './components/use-cases/MissedCallRecoveryPage';
import { VsAnsweringServicePage } from './components/vs/VsAnsweringServicePage';
import { VsHiringReceptionistPage } from './components/vs/VsHiringReceptionistPage';
import { MissedCallCalculator } from './components/MissedCallCalculator';
import { ContactPage } from './components/ContactPage';
import { RoofingPage } from './components/industries/RoofingPage';
import { GarageDoorPage } from './components/industries/GarageDoorPage';
import { PestControlPage } from './components/industries/PestControlPage';
import { LandscapingPage } from './components/industries/LandscapingPage';
import { GeneralContractorsPage } from './components/industries/GeneralContractorsPage';
import {
  TampaBayPage, TampaPage, StPetersburgPage, ClearwaterPage, LargoPage,
  SeminolePage, TreasureIslandPage, PinellasParkPage, DunedinPage,
  PalmHarborPage, SafetyHarborPage,
} from './components/locations';

function HomePage() {
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'canceled' | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('success')) {
      setPaymentStatus('success');
      window.history.replaceState({}, '', location.pathname);
    } else if (params.get('canceled')) {
      setPaymentStatus('canceled');
      window.history.replaceState({}, '', location.pathname);
    }
  }, [location]);

  const homepageFaqs = [
    { question: 'What is an AI voice receptionist?', answer: 'An AI voice receptionist is an intelligent phone answering system that uses artificial intelligence to answer calls, book appointments, qualify leads, and dispatch jobs 24/7 — just like a human receptionist, but available around the clock.' },
    { question: 'How does Jevus AI work for home service businesses?', answer: 'Jevus AI connects to your business phone line and answers every call instantly. It understands service requests, qualifies the lead, books appointments into your calendar, and sends you real-time notifications — all while you focus on the job at hand.' },
    { question: 'How much do missed calls cost home service businesses?', answer: 'The average missed call costs home service businesses $1,200 in lost revenue. With 27% of calls going unanswered and 85% of callers never leaving voicemail, contractors can lose $45,000 to $120,000 per year to missed calls.' },
    { question: 'Can Jevus AI handle emergency calls?', answer: 'Yes. Jevus AI detects emergency keywords like burst pipes, no heat, or electrical hazards and immediately escalates with urgent notifications, ensuring critical calls never get lost.' },
    { question: 'How long does it take to set up Jevus AI?', answer: 'Most businesses are live in under 5 minutes. Simply forward your business line to Jevus, customize your greeting and business rules, and start capturing every call immediately.' },
  ];

  return (
    <>
      <SEOHead
        title="AI Voice Receptionist for Home Services | Never Miss a Call | Jevus AI"
        description="Jevus AI answers every call 24/7 for plumbers, HVAC, and electricians. Stop losing $1,200 per missed call. AI voice receptionist built for home service businesses."
        canonical="/"
        keywords="AI voice receptionist, AI answering service, AI receptionist for small business, home service AI, plumber answering service, HVAC answering service"
        schema={[softwareApplicationSchema(), faqSchema(homepageFaqs)]}
      />
      <AnimatePresence>
        {paymentStatus && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md"
          >
            <div className={`p-4 rounded-2xl border shadow-2xl flex items-start gap-4 ${
              paymentStatus === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
            } backdrop-blur-xl`}>
              <div className="mt-0.5">
                {paymentStatus === 'success' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">
                  {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Canceled'}
                </h3>
                <p className="text-sm opacity-80 mt-1">
                  {paymentStatus === 'success' 
                    ? "Welcome to Jevus.ai! We're setting up your account now. You'll receive an email shortly."
                    : "No worries! Your account hasn't been charged. Feel free to reach out if you have questions."}
                </p>
              </div>
              <button 
                onClick={() => setPaymentStatus(null)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <main>
        <Hero />
        <DemoCall />
        <TrustedBy />
        <Problem />
        <ProductDemo />
        <Capabilities />
        <Solution />
        <UseCases />
        <HowItWorks />
        <ROI />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-brand-dark text-gray-300 font-sans antialiased overflow-x-hidden selection:bg-brand-blue/30">
        {/* Global Background Glows */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] animate-subtle-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-violet/5 rounded-full blur-[120px] animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding" element={<SetupWizard />} />
          <Route path="/setup" element={<SetupWizard />} />
          <Route path="/og" element={<OGGenerator />} />
          <Route path="/trust" element={<TrustCenter />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/acceptable-use" element={<AcceptableUsePage />} />
          <Route path="/ai-disclosure" element={<AIDisclosurePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/industries/plumbers" element={<PlumbersPage />} />
          <Route path="/industries/hvac" element={<HVACPage />} />
          <Route path="/industries/electricians" element={<ElectriciansPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/use-cases/after-hours-answering" element={<AfterHoursPage />} />
          <Route path="/use-cases/missed-call-recovery" element={<MissedCallRecoveryPage />} />
          <Route path="/vs/answering-service" element={<VsAnsweringServicePage />} />
          <Route path="/vs/hiring-receptionist" element={<VsHiringReceptionistPage />} />
          <Route path="/resources/missed-call-calculator" element={<MissedCallCalculator />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Additional Industries */}
          <Route path="/industries/roofing" element={<RoofingPage />} />
          <Route path="/industries/garage-door" element={<GarageDoorPage />} />
          <Route path="/industries/pest-control" element={<PestControlPage />} />
          <Route path="/industries/landscaping" element={<LandscapingPage />} />
          <Route path="/industries/general-contractors" element={<GeneralContractorsPage />} />
          {/* Location Pages — Tampa Bay Area */}
          <Route path="/locations/tampa-bay" element={<TampaBayPage />} />
          <Route path="/locations/tampa" element={<TampaPage />} />
          <Route path="/locations/st-petersburg" element={<StPetersburgPage />} />
          <Route path="/locations/clearwater" element={<ClearwaterPage />} />
          <Route path="/locations/largo" element={<LargoPage />} />
          <Route path="/locations/seminole" element={<SeminolePage />} />
          <Route path="/locations/treasure-island" element={<TreasureIslandPage />} />
          <Route path="/locations/pinellas-park" element={<PinellasParkPage />} />
          <Route path="/locations/dunedin" element={<DunedinPage />} />
          <Route path="/locations/palm-harbor" element={<PalmHarborPage />} />
          <Route path="/locations/safety-harbor" element={<SafetyHarborPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

