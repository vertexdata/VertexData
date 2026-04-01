
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';
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

  return (
    <>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

