import React from 'react';
import { motion } from 'motion/react';
import { Globe, Rocket, Newspaper, BarChart3, ArrowUpRight } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function BusinessMarketing() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            Vertical 03
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9]">
            BUSINESS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">MARKETING SERVICES.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-3xl leading-relaxed font-light">
            From B2B consultation to high-impact social publishing, we provide the strategic marketing services needed to scale your brand across industry verticals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="relative group rounded-[3rem] overflow-hidden border border-white/10 aspect-video lg:aspect-auto shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000&h=800" 
              alt="Strategic Business Meeting" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl font-display font-bold mb-2">B2B Consultation</h3>
              <p className="text-white/50 text-xl font-light">Warehouse to Web Strategy</p>
            </div>
          </div>
          <div className="grid gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(245,158,11,0.1)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 glossy-card rounded-[2.5rem] flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Newspaper className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors">News Agency Services</h3>
                <p className="text-white/40 leading-relaxed text-lg font-light">Social publishing and industry vertical news dissemination to build authority.</p>
              </div>
              <button className="flex items-center gap-4 text-brand-primary font-bold mt-8 hover:gap-6 transition-all text-lg relative z-10">
                Learn More <ArrowUpRight size={24} />
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(245,158,11,0.1)" }}
              className="p-10 glossy-card rounded-[2.5rem] flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Rocket className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors">Automation & CRM</h3>
                <p className="text-white/40 leading-relaxed text-lg font-light">Streamline your marketing workflows with advanced CRM and automation tools.</p>
              </div>
              <button className="flex items-center gap-4 text-brand-primary font-bold mt-8 hover:gap-6 transition-all text-lg relative z-10">
                Learn More <ArrowUpRight size={24} />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-24">
          <h2 className="text-5xl font-display font-bold mb-12 tracking-tight">Industry Verticals We Serve</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['E-commerce', 'Real Estate', 'Healthcare', 'Technology', 'Finance', 'Logistics'].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white/50 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all cursor-default backdrop-blur-md text-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
