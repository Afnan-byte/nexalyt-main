import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Search, Palette, CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  const points = [
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'We optimize every kilobyte to ensure your site loads in under a second.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Your website will look and function perfectly on every screen size.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in best practices to help you rank higher on search engines.'
    },
    {
      icon: Palette,
      title: 'Modern UI/UX',
      description: 'Stunning designs that keep your visitors engaged and converting.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 tracking-tight">
              Why Choose <span className="text-primary">Nexalyt?</span>
            </h2>
            <p className="text-lg text-secondary/60 mb-12 leading-relaxed">
              We don't just build websites; we build growth engines. Our focus is on delivering measurable results for your business through cutting-edge technology and design.
            </p>
            
            <div className="space-y-6">
              {['24/7 Support', 'Custom Solutions', 'Cutting-edge Tech'].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="font-bold text-secondary">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-surface border border-secondary/5 hover:border-primary/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <point.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{point.title}</h4>
                <p className="text-secondary/50 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
