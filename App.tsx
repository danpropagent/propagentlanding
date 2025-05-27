
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import { SectionId } from './types'; // Import SectionId


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-deep-blue overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection id={SectionId.Hero} />
        <ProblemSolutionSection id={SectionId.ProblemSolution} />
        <HowItWorksSection id={SectionId.HowItWorks} />
        <KeyFeaturesSection id={SectionId.Features} />
        <BenefitsSection id={SectionId.Benefits} />
        <CallToActionBanner id={SectionId.CTA} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
