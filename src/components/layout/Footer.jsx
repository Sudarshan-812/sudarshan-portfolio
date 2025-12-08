import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-black border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Sudarshan K · Built with <span className="text-neutral-900 dark:text-white">React.js</span> & <span className="text-neutral-900 dark:text-white">Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;