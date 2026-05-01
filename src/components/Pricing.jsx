import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features, featured = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-10 rounded-[2.5rem] flex flex-col h-full border transition-all duration-500 ${featured ? 'bg-accent-cyan text-black border-accent-cyan shadow-[0_0_50px_rgba(0,209,255,0.2)] scale-105 z-10' : 'bg-surface-dark text-white border-white/5 shadow-bento hover:border-white/20'}`}
  >
    <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
    <p className={`text-sm mb-8 font-medium ${featured ? 'text-black/60' : 'text-slate-text'}`}>{description}</p>
    
    <div className="mb-8">
      <span className="text-5xl font-bold tracking-tighter">${price}</span>
      <span className={`font-semibold ${featured ? 'text-black/60' : 'text-slate-text'}`}> / project</span>
    </div>

    <ul className="space-y-4 mb-10 flex-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${featured ? 'bg-black/10' : 'bg-accent-cyan/10'}`}>
            <Check size={12} className={featured ? 'text-black' : 'text-accent-cyan'} />
          </div>
          <span className="text-sm font-semibold">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-2xl font-semibold transition-all ${featured ? 'bg-black text-white hover:bg-black/80' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-cyan'}`}>
      Choose {title}
    </button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "1,499",
      description: "Perfect for startups and small business landing pages.",
      features: [
        "1 Page Design",
        "Mobile Friendly",
        "Basic SEO",
        "Fast Delivery",
        "1 Year Support"
      ]
    },
    {
      title: "Professional Plan",
      price: "2,999",
      description: "The best choice for growing brands and businesses.",
      features: [
        "Up to 5 Pages",
        "Premium Design",
        "SEO & Fast Loading",
        "Content Manager",
        "Priority Support",
        "Social Media Links"
      ],
      featured: true
    },
    {
      title: "Custom Plan",
      price: "5,499",
      description: "Custom solutions for complex business needs.",
      features: [
        "Unlimited Pages",
        "Full Online Store",
        "Custom Tools",
        "Advanced Security",
        "Performance Monitoring",
        "24/7 Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-black-bg relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-4">Simple Pricing</p>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Affordable <span className="text-accent-cyan">Plans.</span>
          </h2>
          <p className="text-lg text-slate-text max-w-2xl mx-auto font-medium">
            Choose the plan that fits your budget. No hidden fees, just simple and clear pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
