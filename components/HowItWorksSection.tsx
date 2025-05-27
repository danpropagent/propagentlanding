
import React from 'react';
import { HowItWorksStep, SectionId } from '../types';

interface HowItWorksSectionProps {
  id: SectionId;
}

const steps: HowItWorksStep[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-brand-light-blue mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    title: '1. Ingest & Understand',
    description: 'Securely connect your data sources: RFPs, past proposals, company knowledge bases. Propagent AI learns your voice, style, and successful content patterns.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-brand-purple mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: '2. AI Agents Collaborate',
    description: 'Specialized AI agents (Research, Draft, Edit, Pricing Ops, QA) work in concert. Our Orchestrator manages tasks, ensuring efficient and accurate proposal development.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-brand-teal mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: '3. Generate & Win',
    description: 'Receive high-quality, compliant, and persuasive proposals. Review AI-generated drafts, make final touches, and submit with confidence, well ahead of deadlines.',
  },
];

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-brand-deep-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Effortless Proposals in <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-light-blue via-brand-purple to-brand-pink">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how Propagent transforms your proposal workflow from a burden into a strategic advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting lines - simplified for now */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-light-blue/30 via-brand-purple/30 to-brand-teal/30 transform -translate-y-1/2 -mt-8 -z-10"></div>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-slate-800/50 p-8 rounded-xl shadow-2xl text-center border border-slate-700 hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.2}s forwards`, opacity: 0 }}
            >
              {step.icon}
              <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 text-md">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
