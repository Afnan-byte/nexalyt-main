import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ image, title, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-premium"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
        <span className="text-sm font-medium text-primary mb-2">{category}</span>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <button className="flex items-center gap-2 font-bold text-sm bg-primary text-white w-fit px-6 py-3 rounded-full hover:bg-white hover:text-secondary transition-colors">
          View Project <ExternalLink size={16} />
        </button>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: '/assets/project-1.png',
      title: 'Corporate Insight',
      category: 'Business Website',
    },
    {
      image: '/assets/project-2.png',
      title: 'Vivid Studio',
      category: 'Creative Portfolio',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'TechFlow SaaS',
      category: 'Landing Page',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight"
            >
              Recent <span className="text-primary">Work</span>
            </motion.h2>
            <p className="text-lg text-secondary/50">
              A selection of our latest projects that helped our clients achieve their business goals.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
