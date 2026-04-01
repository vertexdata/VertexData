import React from 'react';
import { SimplePage } from './SimplePage';

export const AboutPage = () => (
  <SimplePage 
    title="About Jevus" 
    subtitle="We're on a mission to help home service businesses capture every opportunity with human-grade AI."
    content={
      <div className="space-y-8">
        <p>
          Jevus.ai was founded with a simple observation: in the home services industry, a missed call is a missed job. 
          Plumbers, electricians, and HVAC technicians are often too busy in the field to answer the phone, 
          and customers are too impatient to leave a voicemail.
        </p>
        <p>
          We built Jevus to bridge that gap. Our AI doesn't just answer the phone—it understands the nuances of 
          service requests, qualifies leads, and books appointments directly into your calendar.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-4">Our Vision</h3>
            <p className="text-sm">To become the invisible front office for every service business in the world.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-4">Our Technology</h3>
            <p className="text-sm">We combine state-of-the-art LLMs with low-latency voice processing to create seamless conversations.</p>
          </div>
        </div>
      </div>
    }
  />
);

export const IntegrationsPage = () => (
  <SimplePage 
    title="Integrations" 
    subtitle="Jevus plays nice with the tools you already use."
    content={
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {['ServiceTitan', 'Housecall Pro', 'Jobber', 'Google Calendar', 'Outlook', 'Zapier', 'n8n', 'Slack', 'GoHighLevel'].map(tool => (
          <div key={tool} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center text-center">
            <span className="text-white font-bold">{tool}</span>
          </div>
        ))}
      </div>
    }
  />
);

export const PrivacyPage = () => (
  <SimplePage 
    title="Privacy Policy" 
    subtitle="Last Updated: March 2026"
    content={
      <div className="space-y-6">
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our AI services, or contact support.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">2. How We Use Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, including training our AI models to better serve your business.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">3. Data Sharing</h2>
          <p>We do not sell your personal data. We share data only with trusted service providers necessary for our operations (e.g., cloud hosting, telephony providers).</p>
        </section>
      </div>
    }
  />
);

export const TermsPage = () => (
  <SimplePage 
    title="Terms of Service" 
    subtitle="Please read these terms carefully before using Jevus.ai."
    content={
      <div className="space-y-6">
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using Jevus.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">2. Use License</h2>
          <p>Permission is granted to use Jevus.ai for your business operations according to your selected plan.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">3. Service Limitations</h2>
          <p>Jevus is an AI-powered tool. While we strive for 100% accuracy, we do not guarantee that the AI will always perform without error.</p>
        </section>
      </div>
    }
  />
);

export const LegalPage = () => (
  <SimplePage 
    title="Legal Information" 
    subtitle="Corporate and regulatory information."
    content={
      <div className="space-y-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-4">Entity Information</h3>
          <p>Jevus.ai is a registered trademark of Jevus Technologies Inc.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-4">Regulatory Compliance</h3>
          <p>We comply with TCPA and other relevant telecommunications regulations. Users are responsible for their own compliance when using our automation tools.</p>
        </div>
      </div>
    }
  />
);

export const AcceptableUsePage = () => (
  <SimplePage 
    title="Acceptable Use Policy" 
    subtitle="Guidelines for the responsible use of Jevus.ai."
    content={
      <div className="space-y-6">
        <p>This Acceptable Use Policy outlines the rules for using Jevus.ai to ensure a safe and professional environment for all users and their callers.</p>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Prohibited Activities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal acts or promotion of illegal activities.</li>
            <li>Fraudulent, deceptive, or misleading practices.</li>
            <li>Harassment, threats, or abusive behavior.</li>
            <li>Spamming or unauthorized robocalling.</li>
            <li>Impersonating any person or entity.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Enforcement</h2>
          <p>Violation of this policy may result in immediate suspension or termination of your account without notice.</p>
        </section>
      </div>
    }
  />
);

export const AIDisclosurePage = () => (
  <SimplePage 
    title="AI Disclosure" 
    subtitle="Information about how we use Artificial Intelligence."
    content={
      <div className="space-y-6">
        <p>Jevus.ai utilizes advanced Large Language Models (LLMs) and voice synthesis technology to provide automated receptionist services.</p>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Nature of the AI</h2>
          <p>Our AI is designed to simulate human-like conversation to assist with scheduling and lead qualification. While highly advanced, it is an automated system and not a human being.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Transparency</h2>
          <p>We believe in transparency. Depending on your configuration and local laws, you may be required to disclose to callers that they are speaking with an AI assistant.</p>
        </section>
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Data Usage for Training</h2>
          <p>Anonymized transcripts may be used to improve our AI models and provide a better experience for all users.</p>
        </section>
      </div>
    }
  />
);
