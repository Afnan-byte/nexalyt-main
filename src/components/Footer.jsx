import React from 'react';
import { Share2, Link2, MessageCircle, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    {/* Space for uploaded logo image */}
    <div className="h-10 w-40  rounded-lg flex items-center justify-center overflow-hidden">
      <img
        src="/logo.png"
        alt="Nexalyt Logo"
        className="h-full w-auto object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = '<span class="text-xs font-bold text-slate-text uppercase tracking-widest">Logo Space</span>';
        }}
      />
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black-bg pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-text leading-relaxed text-lg font-medium">
              We build beautiful, fast, and modern websites for businesses.
            </p>
            <div className="flex gap-4">
              {[Share2, Link2, MessageCircle, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-center text-slate-text hover:text-accent-cyan hover:border-accent-cyan transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-semibold text-white mb-8 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4 text-slate-text font-semibold text-sm">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Online Stores</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">SEO & Growth</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-semibold text-white mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-slate-text font-semibold text-sm">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-semibold text-white mb-8 uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-6 text-slate-text font-semibold text-sm">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Mail size={18} />
                </div>
                <span>nexalyt.official@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Phone size={18} />
                </div>
                <span>+91 80896 85278</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-text font-semibold text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} NEXALYT. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
