import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Home, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function HealthWealth() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            Vertical 01
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9]">
            HEALTH & WEALTH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">MANAGEMENT.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-3xl leading-relaxed font-light">
            A holistic approach to personal and financial well-being. We provide the tools and advisory services needed to secure your future and optimize your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(0,210,255,0.1)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glossy-card p-10 rounded-[3rem] border border-white/10 group hover:border-brand-primary/30 transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <HeartPulse className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={56} />
              <h2 className="text-4xl font-display font-bold mb-4">Health Services</h2>
              <p className="text-white/40 mb-6 text-lg leading-relaxed font-light">
                We partner with Dynace Global to bring you premium health optimization products designed for longevity and vitality.
              </p>
              <ul className="space-y-4">
                {['Dynace Global Products', 'Health Insurance (Niva Bupa)', 'Wellness Consultation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60 group-hover:text-white/80 transition-colors">
                    <CheckCircle2 className="text-brand-primary" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(0,210,255,0.1)" }}
            className="glossy-card p-10 rounded-[3rem] border border-white/10 group hover:border-brand-primary/30 transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <TrendingUp className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={56} />
              <h2 className="text-4xl font-display font-bold mb-4">Wealth Services</h2>
              <p className="text-white/40 mb-6 text-lg leading-relaxed font-light">
                Strategic financial planning through licensed insurance and real estate advisory.
              </p>
              <ul className="space-y-4">
                {['Axis Max Life Insurance', 'Real Estate (TN / RERA)', 'MFs & SIPs Management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60 group-hover:text-white/80 transition-colors">
                    <CheckCircle2 className="text-brand-primary" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl mb-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">Secure Your Legacy Today.</h2>
              <p className="text-xl font-light opacity-80 mb-8 leading-relaxed">
                Our IRDAI and RERA certified consultants are ready to build a personalized roadmap for your wealth and health.
              </p>
              <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all shadow-xl">
                Schedule a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 group hover:bg-white/20 transition-all">
                <Shield size={40} className="mb-4 text-white" />
                <h4 className="text-3xl font-display font-bold mb-1">88.1%</h4>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Success Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 group hover:bg-white/20 transition-all">
                <Home size={40} className="mb-4 text-white" />
                <h4 className="text-3xl font-display font-bold mb-1">Licensed</h4>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">TN / RERA</p>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
}
