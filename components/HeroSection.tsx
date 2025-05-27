
import React from 'react';
import { SectionId } from '../types';

interface HeroSectionProps {
  id: SectionId;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-hero-gradient bg-400% animate-gradient-shift">
       <div className="absolute inset-0 bg-bubble-gradient opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
          <span className="block">Transform Your Proposals.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-light-blue via-brand-purple to-brand-pink mt-2">
            Amplify Your Wins.
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Propagent leverages AI agent teams to slash proposal creation time by <strong className="text-brand-teal">50%</strong> and boost win rates by up to <strong className="text-brand-teal">25%</strong>. Write less, win more.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={`#${SectionId.Features}`}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-light-blue to-brand-purple hover:from-brand-purple hover:to-brand-light-blue text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Discover the Future
          </a>
          <a
            href={`#${SectionId.HowItWorks}`}
            className="w-full sm:w-auto border-2 border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue hover:text-brand-deep-blue font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            How It Works
          </a>
        </div>
         <div className="mt-20 animate-bounce text-brand-light-blue"> {/* Adjusted classes: removed absolute, added margin-top */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto"> {/* Added mx-auto for centering inline-block/block SVG container if text-center is not enough*/}
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5M4.5 11.25l7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
