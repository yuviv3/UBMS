import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Zap, ShieldCheck, Code } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function ITSolutions() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            Vertical 02
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9]">
            IT SOLUTIONS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">INFRASTRUCTURE.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-3xl leading-relaxed font-light">
            Empowering your digital presence with cutting-edge SAAS solutions, infrastructure support, and strategic technology advisory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Layers, title: "SAAS Reselling", desc: "Access premium software suites with full GST compliance and local support." },
            { icon: ShieldCheck, title: "GST Compliance", desc: "Integrated IT services for seamless tax and regulatory compliance." },
            { icon: Code, title: "Digital Services", desc: "Custom content strategy and digital asset management for your brand." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(245,158,11,0.1)" }}
              className="p-8 glossy-card rounded-[2.5rem] hover:border-brand-primary/40 transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-lg shadow-brand-primary/5 group-hover:scale-110 transition-transform">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-display font-bold tracking-tight">Strategic Tech Advisory</h2>
            <p className="text-white/50 text-xl leading-relaxed font-light">
              We don't just provide tools; we provide the strategy to use them effectively. Our IT vertical covers everything from computer hardware procurement to enterprise automation.
            </p>
            <div className="space-y-4">
              {['Enterprise Automation', 'CRM Implementation', 'Cloud Infrastructure', 'Digital Content Strategy'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glossy-card rounded-[1.5rem] border border-white/5 group hover:border-brand-primary/30 transition-all">
                  <Zap className="text-brand-primary group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Advanced Technology Infrastructure" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
}
