import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative pl-12 pb-12 last:pb-0 group"
  >
    {/* Line */}
    <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-white/5 group-last:hidden" />
    
    {/* Circle */}
    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-dark border-2 border-white/10 flex items-center justify-center font-bold text-white z-10 group-hover:border-accent-cyan group-hover:shadow-[0_0_15px_rgba(0,209,255,0.3)] transition-all">
      {number}
    </div>

    <div className="pt-2">
      <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors">{title}</h4>
      <p className="text-slate-text leading-relaxed max-w-lg font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const Process = () => {
  const steps = [
    {
      title: "1. Planning",
      description: "We talk about your goals and create a simple plan to build exactly what you need."
    },
    {
      title: "2. Designing",
      description: "Our designers create a beautiful look for your website that matches your brand."
    },
    {
      title: "3. Launching",
      description: "We build your site quickly and make sure everything is perfect before we go live."
    }
  ];

  return (
    <section id="process" className="section-padding bg-black-bg relative">
      {/* Background visual */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-4">Our Simple Process</p>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1] mb-8">
            How we bring <br /> your <span className="text-accent-cyan">Ideas</span> to <br /> Life.
          </h2>
          <p className="text-lg text-slate-text mb-12 max-w-md font-medium">
            Building a website shouldn't be complicated. We keep it simple and keep you updated every step of the way.
          </p>
          <a 
            href="https://wa.me/918089685278?text=Hi%20Nexalyt,%20I'd%20like%20to%20talk%20about%20your%20simple%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-professional !font-semibold inline-flex"
          >
            Talk to Us Today
          </a>
        </div>

        <div className="bg-surface-dark p-12 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="4" strokeDasharray="12 12" />
            </svg>
          </div>
          {steps.map((step, i) => (
            <Step key={i} number={i + 1} {...step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
