
import React from 'react';
import { SectionId } from '../types';

interface ProblemSolutionSectionProps {
  id: SectionId;
}

const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-slate-800/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-pink via-brand-purple to-brand-light-blue">
          Tired of the Proposal Grind?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          U.S. companies spend over <strong className="text-brand-teal">1 billion hours</strong> annually writing proposals. It's time-intensive, complex, and fiercely competitive, draining your most valuable resources.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left p-8 bg-slate-700/50 rounded-xl shadow-2xl border border-slate-600">
            <h3 className="text-3xl font-semibold mb-4 text-brand-light-blue">The Old Way: A Losing Battle</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Endless hours on manual research and repetitive drafting.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Inconsistent quality and missed compliance details.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Valuable talent bogged down in low-impact tasks.
              </li>
              <li className="flex items-start">
                 <svg className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Losing bids due to slow responses or generic content.
              </li>
            </ul>
          </div>

          <div className="text-left p-8 bg-gradient-to-br from-brand-purple/30 to-brand-light-blue/30 rounded-xl shadow-2xl border border-brand-purple">
             <h3 className="text-3xl font-semibold mb-4 text-brand-teal">Propagent: Your AI Co-Pilot</h3>
            <p className="text-gray-200 text-lg mb-4">
              Propagent revolutionizes proposal creation. Our AI agents act as your dedicated, intelligent team, ingesting your data, researching, drafting, and refining compelling proposals in record time.
            </p>
            <ul className="space-y-3 text-gray-200 text-lg">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Automate up to 80% of proposal groundwork.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Ensure accuracy, compliance, and brand consistency.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Empower your team to focus on strategy and winning.
              </li>
               <li className="flex items-start">
                 <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Craft persuasive, data-driven proposals that win.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
