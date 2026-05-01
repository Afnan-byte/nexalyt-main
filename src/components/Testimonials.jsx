import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tight mb-8">
            Words of Appreciation
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Thousands of businesses, from startups to enterprises, use Nexalyt to handle their online presence.
          </p>
        </div>

        <div className="relative w-full max-w-lg">
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-accent rounded-[2rem] transform rotate-3 scale-105" />
          
          {/* Testimonial Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative bg-white rounded-[2rem] p-12 shadow-hover z-10 border border-black/5"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-premium border-4 border-white">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Mitchell" />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-1">Sarah Mitchell</h4>
              <p className="text-muted text-sm font-bold mb-6">Marketing Director at Nexa Solutions</p>
              
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="#FFC107" stroke="#FFC107" />
                ))}
                <span className="ml-2 font-black text-secondary">5.0</span>
              </div>

              <p className="text-lg text-secondary/80 leading-relaxed italic">
                "Nexalyt has streamlined our project delivery, making tasks like onboarding and performance tracking more efficient than ever. It's truly a game changer for our team."
              </p>
            </div>
          </motion.div>

          {/* Envelope Front (Triangle Overlay) */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none rounded-b-[2rem]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
