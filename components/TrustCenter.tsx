import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Cpu, Mic, Activity, CheckCircle2, Mail, Globe, Zap, Phone, Info } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

const SecurityBadge = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-white font-bold mb-1">{title}</h3>
    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{description}</p>
  </div>
);

const TrustSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{title}</h2>
    </div>
    <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-6">
      {children}
    </div>
  </div>
);

export const TrustCenter: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-6"
            >
              <Shield size={14} />
              <span>TRUST & SECURITY</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
            >
              Built on <span className="text-brand-blue">Trust.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Jevus.ai is committed to platform security, responsible AI usage, and protecting customer data. 
              Our platform is built on secure cloud infrastructure and trusted AI technology providers to ensure 
              your business and customer information remains protected.
            </motion.p>
          </div>

          {/* Security Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            <SecurityBadge icon={Shield} title="SOC-2 Grade" description="Infrastructure" />
            <SecurityBadge icon={Phone} title="Secure" description="Telephony" />
            <SecurityBadge icon={Zap} title="<50ms" description="Response Times" />
            <SecurityBadge icon={Lock} title="Encrypted" description="Communications" />
          </div>

          <div className="max-w-4xl mx-auto">
            <TrustSection title="Platform Security" icon={Lock}>
              <p>
                Jevus uses modern security practices to protect our platform and your data. Our architecture is designed with security at every layer, from the way we handle API requests to how we manage internal access.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                  <span>Encrypted communications (TLS 1.2+)</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                  <span>Secure API architecture</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                  <span>Protected cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                  <span>Strict authentication controls</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                  <span>Restricted internal access</span>
                </li>
              </ul>
              <p>
                All customer data is protected using industry-standard security practices, ensuring that your business operations remain confidential and secure.
              </p>
            </TrustSection>

            <TrustSection title="Data Protection" icon={Shield}>
              <p>
                We understand the sensitivity of the business and customer information you entrust to us. Jevus employs rigorous data protection measures to prevent unauthorized access or disclosure.
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">Secure Storage & Transmission</h4>
                  <p className="text-sm">All data is encrypted at rest using AES-256 and encrypted in transit using industry-standard protocols. We utilize secure data centers with 24/7 monitoring.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">Access Controls</h4>
                  <p className="text-sm">We implement strict internal access controls. Only authorized Jevus personnel have access to customer data, and only when necessary to provide support or maintain the platform.</p>
                </div>
              </div>
              <p className="font-bold text-white">
                Jevus does not sell or share personal data with third parties for marketing purposes.
              </p>
            </TrustSection>

            <TrustSection title="AI Systems" icon={Cpu}>
              <p>
                Jevus uses advanced artificial intelligence to communicate with callers and automate scheduling workflows. Our AI is trained to provide professional, helpful, and accurate responses based on your business settings.
              </p>
              <p>
                While our AI is highly capable, it is designed to assist businesses with customer interactions and does not replace human oversight. Businesses are responsible for managing their own service offerings, pricing, and customer agreements.
              </p>
            </TrustSection>

            <TrustSection title="Call Recordings & Transcripts" icon={Mic}>
              <p>
                To provide the best possible service, calls handled by Jevus may be recorded and transcribed. This data is used for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quality assurance and training</li>
                <li>Appointment automation and CRM logging</li>
                <li>System improvements and AI model refinement</li>
                <li>Customer service logs for your business records</li>
              </ul>
              <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-6 mt-6">
                <div className="flex gap-4">
                  <Info className="text-brand-blue shrink-0" />
                  <p className="text-sm text-white font-medium">
                    Important: Businesses using Jevus are responsible for complying with local, state, and federal call recording laws, including providing any necessary notifications to callers.
                  </p>
                </div>
              </div>
            </TrustSection>

            <TrustSection title="Infrastructure & Reliability" icon={Server}>
              <p>
                Jevus operates on reliable cloud infrastructure designed for high availability and fast response times. We leverage a world-class technology ecosystem to ensure stable operations:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['OpenAI', 'Twilio', 'Google Cloud', 'Zapier', 'n8n'].map((tech) => (
                  <div key={tech} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white font-bold">
                    {tech}
                  </div>
                ))}
              </div>
              <p>
                Our platform is designed to maintain high uptime and consistent call handling. We continuously monitor system performance to ensure fast response times and stable operation for all our customers.
              </p>
            </TrustSection>

            <TrustSection title="Responsible AI Use" icon={Activity}>
              <p>
                Jevus promotes and enforces responsible AI usage. Our platform is built to help legitimate businesses grow, and we have a zero-tolerance policy for misuse. The platform may not be used for:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
                <li>Scams or fraudulent activity</li>
                <li>Robocalling campaigns</li>
                <li>Harassment or spam</li>
                <li>Impersonation or deceptive practices</li>
              </ul>
              <p className="mt-4">
                Accounts found violating these rules or engaging in unethical practices may be suspended or terminated immediately.
              </p>
            </TrustSection>

            <TrustSection title="Customer Responsibility" icon={Globe}>
              <p>
                Jevus provides powerful automation tools, but the ultimate responsibility for business operations lies with the customer. Businesses using Jevus are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The quality and delivery of the services they provide</li>
                <li>Setting and maintaining their own pricing</li>
                <li>Managing their own customer agreements and contracts</li>
                <li>Compliance with all local laws and regulations</li>
                <li>All direct communications with their customers</li>
              </ul>
            </TrustSection>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-black text-white mb-6">Contact Support</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Have questions about our security practices or need legal assistance? Our team is here to help.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:security@jevus.ai" className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold transition-all">
                  <Mail size={18} className="text-brand-blue" />
                  Security Inquiries
                </a>
                <a href="mailto:legal@jevus.ai" className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold transition-all">
                  <Shield size={18} className="text-brand-blue" />
                  Legal Requests
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
