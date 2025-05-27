
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-center text-gray-400">
      <div className="container mx-auto px-6">
        <p className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-light-blue via-brand-purple to-brand-pink">
          Propagent
        </p>
        <p className="mb-4">
          Write Less. Win More.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-brand-light-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-light-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-light-blue transition-colors">Contact Us</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Propagent. All rights reserved.
        </p>
        <p className="text-xs mt-1">Inspired by future-forward proposal solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
