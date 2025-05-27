
import React from 'react';
import { SectionId } from '../types';

interface CallToActionBannerProps {
  id: SectionId;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-gradient-to-br from-brand-purple/80 via-brand-light-blue/70 to-brand-teal/80 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-deep-blue drop-shadow-lg">
          Ready to Revolutionize Your Proposal Process?
        </h2>
        <p className="text-xl md:text-2xl text-slate-800 mb-10 max-w-3xl mx-auto drop-shadow-sm">
          Stop leaving money on the table. Discover how Propagent can transform your bids into wins. Explore our flexible plans designed for businesses of all sizes, from startups to enterprises.
        </p>
        <a
          href="mailto:sales@propagent.example.com?subject=Demo Request for Propagent" // Replace with actual link or form
          className="bg-brand-deep-blue text-white hover:bg-opacity-90 font-semibold text-lg px-12 py-5 rounded-xl shadow-2xl hover:shadow-brand-deep-blue/50 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Request a Personalized Demo
        </a>
        <p className="mt-8 text-sm text-slate-700">Or learn more about our <a href="#pricing-placeholder" className="underline hover:text-brand-deep-blue">flexible pricing options</a>.</p>
      </div>
    </section>
  );
};

export default CallToActionBanner;
