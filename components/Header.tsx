
import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'Problem', href: `#${SectionId.ProblemSolution}` },
  { label: 'How It Works', href: `#${SectionId.HowItWorks}` },
  { label: 'Features', href: `#${SectionId.Features}` },
  { label: 'Benefits', href: `#${SectionId.Benefits}` },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-deep-blue/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href={`#${SectionId.Hero}`} className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-light-blue via-brand-purple to-brand-pink">
          Propagent
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-300 hover:text-brand-light-blue transition-colors duration-200">
              {item.label}
            </a>
          ))}
          <a
            href={`#${SectionId.CTA}`}
            className="bg-gradient-to-r from-brand-light-blue to-brand-purple hover:from-brand-purple hover:to-brand-light-blue text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Request Demo
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-deep-blue/95 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light-blue transition-colors duration-200 py-2">
                {item.label}
              </a>
            ))}
            <a
              href={`#${SectionId.CTA}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-3/4 text-center bg-gradient-to-r from-brand-light-blue to-brand-purple hover:from-brand-purple hover:to-brand-light-blue text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
