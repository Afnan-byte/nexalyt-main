import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Search, Palette, Code2, Rocket, BarChart3, Lock } from 'lucide-react';

const BentoBox = ({ title, description, icon: Icon, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`bento-card flex flex-col justify-between border-white/5 ${className}`}
  >
    <div>
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan mb-6 shadow-[0_0_15px_rgba(0,209,255,0.1)]">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-slate-text leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding bg-black-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1]">
              Everything You Need <br /> for Your <span className="text-white/20 font-medium">Website.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-text max-w-sm font-medium">
            We provide all the tools and designs you need to build a successful online business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BentoBox 
            title="Business Sites" 
            description="Professional websites built to showcase your business and services."
            icon={Rocket}
            className="md:col-span-2"
          />
          <BentoBox 
            title="Modern Design" 
            description="Beautiful and clean designs that make your brand stand out."
            icon={Palette}
          />
          <BentoBox 
            title="Mobile Ready" 
            description="Your website will look perfect on phones, tablets, and computers."
            icon={Smartphone}
          />
          
          <BentoBox 
            title="Get Found (SEO)" 
            description="We optimize your site so more people can find you on Google."
            icon={Search}
          />
          <BentoBox 
            title="Visitor Tracking" 
            description="See how many people visit your site and what they are looking for."
            icon={BarChart3}
            className="md:col-span-2"
          />
          <BentoBox 
            title="Fully Secure" 
            description="We keep your data and your visitors' information safe and private."
            icon={Lock}
          />

          <BentoBox 
            title="High Quality Build" 
            description="Every website we build is fast, reliable, and easy for you to manage."
            icon={Code2}
            className="md:col-span-4 !flex-row items-center gap-10 bg-gradient-to-r from-accent-cyan/10 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
