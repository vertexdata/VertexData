
import React, { useEffect, useState, Suspense, lazy } from 'react';
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
import { blogPosts } from './components/blog/blogData';
import { getAllIndustryLocationPages } from './components/seo/seoData';
import { IndustryLocationPage } from './components/seo/IndustryLocationPage';

// Lazy load all non-homepage pages for code splitting
const SetupWizard = lazy(() => import('./components/SetupWizard').then(m => ({ default: m.SetupWizard })));
const OGGenerator = lazy(() => import('./components/OGGenerator').then(m => ({ default: m.OGGenerator })));
const TrustCenter = lazy(() => import('./components/TrustCenter').then(m => ({ default: m.TrustCenter })));
const StaticPages = lazy(() => import('./components/StaticPages'));
const HowItWorksPage = lazy(() => import('./components/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const PricingPage = lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const MissedCallCalculator = lazy(() => import('./components/MissedCallCalculator').then(m => ({ default: m.MissedCallCalculator })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const BlogIndex = lazy(() => import('./components/blog/BlogIndex').then(m => ({ default: m.BlogIndex })));
const BlogArticle = lazy(() => import('./components/blog/BlogArticle').then(m => ({ default: m.BlogArticle })));

// Industry pages
const PlumbersPage = lazy(() => import('./components/industries/PlumbersPage').then(m => ({ default: m.PlumbersPage })));
const HVACPage = lazy(() => import('./components/industries/HVACPage').then(m => ({ default: m.HVACPage })));
const ElectriciansPage = lazy(() => import('./components/industries/ElectriciansPage').then(m => ({ default: m.ElectriciansPage })));
const RoofingPage = lazy(() => import('./components/industries/RoofingPage').then(m => ({ default: m.RoofingPage })));
const GarageDoorPage = lazy(() => import('./components/industries/GarageDoorPage').then(m => ({ default: m.GarageDoorPage })));
const PestControlPage = lazy(() => import('./components/industries/PestControlPage').then(m => ({ default: m.PestControlPage })));
const LandscapingPage = lazy(() => import('./components/industries/LandscapingPage').then(m => ({ default: m.LandscapingPage })));
const GeneralContractorsPage = lazy(() => import('./components/industries/GeneralContractorsPage').then(m => ({ default: m.GeneralContractorsPage })));

// Use case pages
const AfterHoursPage = lazy(() => import('./components/use-cases/AfterHoursPage').then(m => ({ default: m.AfterHoursPage })));
const MissedCallRecoveryPage = lazy(() => import('./components/use-cases/MissedCallRecoveryPage').then(m => ({ default: m.MissedCallRecoveryPage })));
const EmergencyDispatchPage = lazy(() => import('./components/use-cases/EmergencyDispatchPage').then(m => ({ default: m.EmergencyDispatchPage })));
const AppointmentBookingPage = lazy(() => import('./components/use-cases/AppointmentBookingPage').then(m => ({ default: m.AppointmentBookingPage })));
const LeadQualificationPage = lazy(() => import('./components/use-cases/LeadQualificationPage').then(m => ({ default: m.LeadQualificationPage })));

// Comparison pages
const VsAnsweringServicePage = lazy(() => import('./components/vs/VsAnsweringServicePage').then(m => ({ default: m.VsAnsweringServicePage })));
const VsHiringReceptionistPage = lazy(() => import('./components/vs/VsHiringReceptionistPage').then(m => ({ default: m.VsHiringReceptionistPage })));
const VsSmithAiPage = lazy(() => import('./components/vs/VsSmithAiPage').then(m => ({ default: m.VsSmithAiPage })));
const VsGoodcallPage = lazy(() => import('./components/vs/VsGoodcallPage').then(m => ({ default: m.VsGoodcallPage })));
const VsRubyPage = lazy(() => import('./components/vs/VsRubyPage').then(m => ({ default: m.VsRubyPage })));
const VsNewoPage = lazy(() => import('./components/vs/VsNewoPage').then(m => ({ default: m.VsNewoPage })));
const VsDialzaraPage = lazy(() => import('./components/vs/VsDialzaraPage').then(m => ({ default: m.VsDialzaraPage })));

// Location pages
import {
  TampaBayPage, TampaPage, StPetersburgPage, ClearwaterPage, LargoPage,
  SeminolePage, TreasureIslandPage, PinellasParkPage, DunedinPage,
  PalmHarborPage, SafetyHarborPage,
} from './components/locations';

// Pre-compute all programmatic industry x location pages
const industryLocationPages = getAllIndustryLocationPages();

// Loading spinner for lazy routes
const PageLoader = () => (
  <div className="min-h-screen bg-brand-dark flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

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
              <button onClick={() => setPaymentStatus(null)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
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
      <ScrollToTop />
      <div className="bg-brand-dark text-gray-300 font-sans antialiased overflow-x-hidden selection:bg-brand-blue/30">
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] animate-subtle-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-violet/5 rounded-full blur-[120px] animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Core pages */}
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources/missed-call-calculator" element={<MissedCallCalculator />} />

            {/* Industry hub pages */}
            <Route path="/industries/plumbers" element={<PlumbersPage />} />
            <Route path="/industries/hvac" element={<HVACPage />} />
            <Route path="/industries/electricians" element={<ElectriciansPage />} />
            <Route path="/industries/roofing" element={<RoofingPage />} />
            <Route path="/industries/garage-door" element={<GarageDoorPage />} />
            <Route path="/industries/pest-control" element={<PestControlPage />} />
            <Route path="/industries/landscaping" element={<LandscapingPage />} />
            <Route path="/industries/general-contractors" element={<GeneralContractorsPage />} />

            {/* Programmatic Industry x Location pages (336 pages) */}
            {industryLocationPages.map(({ industry, city, slug, path }) => (
              <Route key={slug} path={path} element={<IndustryLocationPage industry={industry} city={city} />} />
            ))}

            {/* Use case pages */}
            <Route path="/use-cases/after-hours-answering" element={<AfterHoursPage />} />
            <Route path="/use-cases/missed-call-recovery" element={<MissedCallRecoveryPage />} />
            <Route path="/use-cases/emergency-dispatch" element={<EmergencyDispatchPage />} />
            <Route path="/use-cases/appointment-booking" element={<AppointmentBookingPage />} />
            <Route path="/use-cases/lead-qualification" element={<LeadQualificationPage />} />

            {/* Comparison pages */}
            <Route path="/vs/answering-service" element={<VsAnsweringServicePage />} />
            <Route path="/vs/hiring-receptionist" element={<VsHiringReceptionistPage />} />
            <Route path="/vs/smith-ai" element={<VsSmithAiPage />} />
            <Route path="/vs/goodcall" element={<VsGoodcallPage />} />
            <Route path="/vs/ruby-receptionists" element={<VsRubyPage />} />
            <Route path="/vs/newo-ai" element={<VsNewoPage />} />
            <Route path="/vs/dialzara" element={<VsDialzaraPage />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            {blogPosts.map(post => (
              <Route key={post.slug} path={`/blog/${post.slug}`} element={<BlogArticle post={post} />} />
            ))}

            {/* Location hub pages */}
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

            {/* Static / legal pages */}
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><LazyAbout /></Suspense>} />
            <Route path="/integrations" element={<Suspense fallback={<PageLoader />}><LazyIntegrations /></Suspense>} />
            <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><LazyPrivacy /></Suspense>} />
            <Route path="/terms" element={<Suspense fallback={<PageLoader />}><LazyTerms /></Suspense>} />
            <Route path="/acceptable-use" element={<Suspense fallback={<PageLoader />}><LazyAcceptableUse /></Suspense>} />
            <Route path="/ai-disclosure" element={<Suspense fallback={<PageLoader />}><LazyAIDisclosure /></Suspense>} />
            <Route path="/legal" element={<Suspense fallback={<PageLoader />}><LazyLegal /></Suspense>} />
            <Route path="/trust" element={<TrustCenter />} />
            <Route path="/onboarding" element={<SetupWizard />} />
            <Route path="/setup" element={<SetupWizard />} />
            <Route path="/og" element={<OGGenerator />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

// Lazy static page wrappers
const LazyAbout = lazy(() => import('./components/StaticPages').then(m => ({ default: m.AboutPage })));
const LazyIntegrations = lazy(() => import('./components/StaticPages').then(m => ({ default: m.IntegrationsPage })));
const LazyPrivacy = lazy(() => import('./components/StaticPages').then(m => ({ default: m.PrivacyPage })));
const LazyTerms = lazy(() => import('./components/StaticPages').then(m => ({ default: m.TermsPage })));
const LazyAcceptableUse = lazy(() => import('./components/StaticPages').then(m => ({ default: m.AcceptableUsePage })));
const LazyAIDisclosure = lazy(() => import('./components/StaticPages').then(m => ({ default: m.AIDisclosurePage })));
const LazyLegal = lazy(() => import('./components/StaticPages').then(m => ({ default: m.LegalPage })));

export default App;
