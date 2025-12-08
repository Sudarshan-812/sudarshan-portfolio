import React from 'react';
import { USER_DATA } from '../../data';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black py-8 border-t border-black/5 dark:border-white/10 relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright &copy; {new Date().getFullYear()} {USER_DATA.name}.</p>
      </div>
    </footer>
  );
};

export default Footer;