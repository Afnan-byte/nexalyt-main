import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Globe, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-black-bg overflow-hidden relative">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-black-bg" alt="Client" />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-text flex items-center gap-1">
                <Star size={14} className="fill-accent-cyan text-accent-cyan" />
                Trusted by business owners worldwide
              </p>
            </div> */}

            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1] mb-8 tracking-tighter">
              Performance <br />
              <span className="text-accent-cyan font-semibold">Engineering</span> <br />
              for Brands.
            </h1>

            <p className="text-xl text-slate-text mb-10 max-w-lg leading-relaxed font-medium">
              We create fast, modern, and high-converting websites for your brand. Professional design that simple for everyone to use.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/918089685278?text=Hi%20Nexalyt,%20I'd%20like%20to%20start%20a%20new%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-professional text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] !font-semibold flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 rounded-2xl border-2 border-white/10 font-semibold text-white hover:bg-white/5 hover:border-accent-cyan transition-all">
                View Portfolio
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-cyan" size={24} />
                <span className="font-semibold text-white">Super Fast Speed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-cyan" size={24} />
                <span className="font-semibold text-white">Mobile Friendly</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Bento Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bento-card col-span-2 !p-8 bg-surface-dark border-white/5 text-white flex justify-between items-center overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-2">Live Status</p>
                <h4 className="text-5xl font-bold">99.9%</h4>
                <p className="text-slate-text text-sm font-medium">Your website is always online</p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-cyan/5 flex items-center justify-center">
                <Globe size={100} className="text-accent-cyan/10" />
              </div>
            </div>

            <div className="bento-card !p-6 flex flex-col justify-between border-white/5">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-white">Secure</h5>
                <p className="text-xs text-slate-text font-medium">Safe and protected</p>
              </div>
            </div>

            <div className="bento-card !p-6 flex flex-col justify-between !bg-accent-cyan text-black border-none shadow-[0_0_30px_rgba(0,209,255,0.2)]">
              <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center text-black mb-4">
                <Zap size={20} />
              </div>
              <div>
                <h5 className="font-bold">Fast Load</h5>
                <p className="text-xs text-black/70 font-semibold">Loads in seconds</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
