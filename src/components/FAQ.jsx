import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-white/5 last:border-none">
    <button
      onClick={onClick}
      className="w-full py-8 flex justify-between items-center text-left group"
    >
      <span className={`text-xl md:text-2xl font-semibold tracking-tight leading-tight pr-8 transition-colors ${isOpen ? 'text-accent-cyan' : 'text-white'}`}>
        {question}
      </span>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isOpen ? 'bg-accent-cyan border-accent-cyan text-black' : 'border-white/10 text-white/20 group-hover:text-white'}`}>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-8 text-lg text-slate-text leading-relaxed max-w-3xl font-medium">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites take between 1 to 2 weeks. Larger projects with more features can take up to 4 weeks. We always work fast to get you online quickly."
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes! We can look after your website after it's finished to make sure it stays fast and secure."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Definitely. Every website we build is designed to look and work perfectly on smartphones, tablets, and computers."
    },
    {
      question: "Can you help me show up on Google?",
      answer: "Yes, we build every site with basic SEO. This helps more people find your business when they search on Google."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-black-bg relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-4">Common Questions</p>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
            Help & <span className="text-accent-cyan">Support.</span>
          </h2>
        </div>

        <div className="bg-surface-dark rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
