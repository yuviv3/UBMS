import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function About() {
  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            About Us
          </span>
          <h1 className="text-5xl md:text-9xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
            THE VISION BEHIND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">UNICORN BMS.</span>
          </h1>
          <p className="text-2xl text-white/40 max-w-4xl mx-auto leading-relaxed font-light">
            Founded on the principles of integrity, innovation, and excellence, Unicorn BMS is a premier brand management firm dedicated to empowering businesses and individuals through a holistic suite of services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-48">
          <div className="rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Our Collaborative Vision" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
          </div>
          <div className="space-y-12">
            <h2 className="text-6xl font-display font-bold tracking-tight">Our Mission</h2>
            <p className="text-white/50 text-2xl leading-relaxed font-light">
              To provide a seamless bridge between complex business requirements and efficient, automated solutions. We strive to be the single point of contact for our clients' Health, Wealth, IT, and Marketing needs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 glossy-card rounded-[2.5rem] border border-white/5 group hover:border-brand-primary/30 transition-all">
                <Shield className="text-brand-primary mb-8 group-hover:scale-110 transition-transform" size={48} />
                <h4 className="font-bold mb-4 text-xl">Integrity</h4>
                <p className="text-base text-white/40 leading-relaxed">Transparent and ethical practices in every vertical.</p>
              </div>
              <div className="p-10 glossy-card rounded-[2.5rem] border border-white/5 group hover:border-brand-primary/30 transition-all">
                <Award className="text-brand-primary mb-8 group-hover:scale-110 transition-transform" size={48} />
                <h4 className="font-bold mb-4 text-xl">Excellence</h4>
                <p className="text-base text-white/40 leading-relaxed">Delivering superior quality in all our services.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Target, title: "Strategic Focus", desc: "We focus on long-term growth and sustainable brand value." },
            { icon: Users, title: "Expert Team", desc: "Our consultants are industry veterans with deep expertise." },
            { icon: Award, title: "Certified Excellence", desc: "Licensed and certified across all operational sectors." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: "0 20px 40px rgba(0,210,255,0.1)" }}
              className="p-10 glossy-card rounded-[2.5rem] text-center group hover:border-brand-primary/40 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8 shadow-lg shadow-brand-primary/5 group-hover:scale-110 transition-transform">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
