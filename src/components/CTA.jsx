import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-black-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-dark rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden border border-white/5"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-cyan/10 via-transparent to-transparent" />
          </div>

          <div className="relative z-10">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-semibold mb-8 uppercase tracking-widest">
              <Zap size={16} fill="currentColor" />
              We are ready to help
            </div> */}

            <h2 className="text-4xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">
              Ready to start your <br />
              <span className="text-accent-cyan">Next Project?</span>
            </h2>
            <p className="text-xl text-slate-text mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Join hundreds of happy business owners who have built their websites with us. Let's create something great together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="https://wa.me/918089685278?text=Hi%20Nexalyt,%20I'd%20like%20to%20chat%20about%20a%20website%20project."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-cyan text-black px-12 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,209,255,0.3)] hover:bg-white transition-all"
              >
                <MessageCircle size={24} />
                Contact on WhatsApp
              </motion.a>
              <motion.a
                href="https://wa.me/918089685278?text=Hi%20Nexalyt,%20I'd%20like%20to%20schedule%20a%20free%20consultation%20call."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 text-white px-12 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 hover:border-accent-cyan"
              >
                Schedule a Free Call
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
