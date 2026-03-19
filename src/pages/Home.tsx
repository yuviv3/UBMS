import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Cpu, Globe, Zap, ArrowRight, Shield, Home as HomeIcon, CheckCircle2, Rocket, Users, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { Logo } from '../components/Logo';

const SectionHeading = ({ title, subtitle, badge, centered = false }: { title: string, subtitle?: string, badge?: string, centered?: boolean }) => (
  <div className={cn("mb-12", centered ? "text-center mx-auto max-w-3xl" : "")}>
    {badge && (
      <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
        {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-white/50 text-xl leading-relaxed font-light">
        {subtitle}
      </p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, items, color = "blue", index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      y: -15, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(245,158,11,0.15)"
    }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] 
    }}
    className="glossy-card p-10 rounded-[2.5rem] group hover:border-brand-primary/40 transition-all duration-700 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className={cn(
      "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-lg",
      color === "blue" ? "bg-brand-primary/10 text-brand-primary shadow-brand-primary/10" : "bg-emerald-500/10 text-emerald-500 shadow-emerald-500/10"
    )}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">{title}</h3>
    <p className="text-white/40 mb-8 leading-relaxed text-base">{description}</p>
    <ul className="space-y-4">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors">
          <Zap className="text-brand-primary shrink-0 mt-0.5" size={16} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
            >
              <Logo className="w-5 h-5" /> Brand Management Services
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-6"
            >
              ELEVATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">LEGACY.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 mb-8 max-w-lg leading-relaxed font-light"
            >
              UNICORN BMS provides a powerful ecosystem of Health, Wealth, IT, and Marketing solutions designed for the modern visionary.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="glossy-button px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 group">
                Explore Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all backdrop-blur-md">
                Our Vision
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Modern Corporate Architecture" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 glossy-card p-8 rounded-3xl z-20 hidden lg:block">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary shadow-lg shadow-brand-primary/10">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Success Rate</p>
                  <p className="text-3xl font-display font-bold">88.1%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Partners Section */}
      <section className="py-12 border-y border-white/5 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            {['AXIS MAX', 'NIVA BUPA', 'DYNACE', 'RERA', 'IRDAI'].map((partner) => (
              <span key={partner} className="text-xl md:text-2xl font-display font-black tracking-tighter">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Verticals */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Our Verticals"
            title="A Multi-Dimensional Approach"
            subtitle="We integrate specialized services to manage every aspect of your professional and personal growth."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              index={0}
              icon={TrendingUp}
              title="Health & Wealth"
              description="Comprehensive financial planning and health optimization products."
              items={["Dynace Global Products", "Real Estate Advisory", "Insurance Solutions"]}
            />
            <ServiceCard 
              index={1}
              icon={Cpu}
              title="IT Solutions"
              description="Strategic technology services and SAAS implementations."
              items={["SAAS Reselling", "Digital Strategy", "Enterprise Automation"]}
            />
            <ServiceCard 
              index={2}
              icon={Globe}
              title="Business & Marketing"
              description="B2B consultation and high-impact marketing services."
              items={["Warehouse to Web", "CRM Automation", "Industry Advisory"]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Active Clients", value: "500+" },
              { label: "Service Verticals", value: "03" },
              { label: "Success Rate", value: "88%" },
              { label: "Expert Advisors", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Our Process"
            title="How We Build Your Brand"
            subtitle="A systematic approach to ensuring your personal and professional legacy is secured."
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Consultation", desc: "Understanding your unique goals and requirements.", icon: Users },
              { step: "02", title: "Strategy", desc: "Developing a multi-vertical roadmap for success.", icon: Shield },
              { step: "03", title: "Execution", desc: "Implementing solutions across Health, Wealth, and IT.", icon: Rocket },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and scaling of your brand.", icon: Award }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="relative z-10 glossy-card p-10 rounded-[2.5rem] text-center group hover:border-brand-primary/50 transition-all duration-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-8 text-xl shadow-lg shadow-brand-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto glossy-card rounded-[3rem] p-12 md:p-20 text-center relative z-10 border-white/20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter leading-tight">
            READY TO START YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">TRANSFORMATION?</span>
          </h2>
          <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Join hundreds of visionaries who have secured their future with UNICORN BMS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="glossy-button px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get Started Now
            </Link>
            <Link to="/about" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
