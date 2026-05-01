import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    {/* Space for uploaded logo image */}
    <div className="h-10 w-40  rounded-lg flex items-center justify-center overflow-hidden">
      <img
        src="/logo.png"
        alt="Nexalyt Logo"
        className="h-full w-auto object-contain "
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = '<span class="text-xs font-bold text-slate-text uppercase tracking-widest">Logo Space</span>';
        }}
      />
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    // { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const contactLink = "https://wa.me/918089685278?text=Hi%20Nexalyt,%20I'd%20like%20to%20inquire%20about%20your%20services.";

  return (
    <nav className="fixed w-full z-50 pt-6 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-500 rounded-2xl border ${scrolled ? 'bg-black/80 border-white/10 py-3 px-8 backdrop-blur-md shadow-2xl' : 'bg-transparent border-transparent py-4 px-10'}`}>
        <div className="flex justify-between items-center">
          {/* Logo Space */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-text hover:text-accent-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* <button className="text-sm font-semibold text-slate-text hover:text-white">Client Login</button> */}
            <a 
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-professional !py-3 !px-6 !rounded-xl text-sm !font-semibold flex items-center gap-2"
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 bg-surface-dark rounded-2xl p-8 shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              {/* <button className="text-lg font-semibold text-slate-text">Client Login</button> */}
              <a 
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-professional w-full justify-center !font-semibold flex items-center gap-2"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
