
import React from 'react';
import { BenefitItem, SectionId } from '../types';

interface BenefitsSectionProps {
  id: SectionId;
}

const benefits: BenefitItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Boost Win Rates by 15-25%',
    description: 'Craft more targeted, compliant, and persuasive proposals that demonstrably shift the odds in your favor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Slash Response Time by 30-50%',
    description: 'Accelerate your entire proposal lifecycle, respond to more opportunities, and gain a crucial competitive advantage.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Empower Your Team',
    description: 'Free up your valuable human talent from tedious tasks to focus on high-impact strategy and client relationships.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Enhance Quality & Consistency',
    description: 'Maintain brand voice, ensure accuracy, and meet all compliance requirements with AI-driven precision.',
  },
];

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-brand-deep-blue relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-purple/10 rounded-full filter blur-3xl opacity-70 animate-subtle-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-light-blue/10 rounded-full filter blur-3xl opacity-70 animate-subtle-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Propagent Advantage: <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-light-blue via-brand-purple to-brand-pink">Tangible Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience measurable improvements in your proposal process and business outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="flex items-start space-x-6 p-6 bg-slate-800/40 rounded-lg shadow-xl border border-slate-700 hover:border-brand-teal transition-colors"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.15 + 0.3}s forwards`, opacity: 0 }}
            >
              <div className="flex-shrink-0 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
