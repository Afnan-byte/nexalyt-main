import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Mail, Calendar, MessageSquare, Globe, Cpu } from 'lucide-react';

const IntegrationIcon = ({ icon: Icon, color, rotation, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    style={{ transform: `rotate(${rotation}deg) translate(240px) rotate(-${rotation}deg)` }}
    className="absolute w-20 h-20 bg-white rounded-[1.5rem] shadow-deep flex items-center justify-center border border-black/5"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
      <Icon size={24} />
    </div>
  </motion.div>
);

const Integrations = () => {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 relative z-10">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center text-primary mx-auto mb-8">
            <Settings size={24} />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tight mb-8">
            Integrate with your <br /> existing tools in seconds
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Nexalyt seamlessly connects with the apps you already use to automate your workflow and keep your data in sync.
          </p>
        </div>

        <div className="relative w-full h-[400px] flex justify-center">
          {/* Semi-circular icons */}
          <IntegrationIcon icon={Mail} color="bg-red-400" rotation={210} delay={0.1} />
          <IntegrationIcon icon={Calendar} color="bg-blue-500" rotation={240} delay={0.2} />
          <IntegrationIcon icon={MessageSquare} color="bg-purple-500" rotation={270} delay={0.3} />
          <IntegrationIcon icon={Globe} color="bg-green-500" rotation={300} delay={0.4} />
          <IntegrationIcon icon={Cpu} color="bg-orange-500" rotation={330} delay={0.5} />

          {/* Central text under the arc */}
          <div className="absolute top-[280px] text-center">
             <h4 className="text-2xl font-bold text-secondary mb-2">Google Workspace</h4>
             <p className="text-muted text-sm">Videos, team video meetings, and more.</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary mt-12 bg-accent"
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
};

export default Integrations;
