import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Vikram Sethi",
    role: "CEO, TechVision India",
    content: "UNICORN BMS transformed our digital infrastructure. Their IT solutions are world-class and their strategic advisory is unparalleled.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Ananya Iyer",
    role: "Founder, Wellness Hub",
    content: "The Health & Wealth vertical is a game-changer. I've never seen such a comprehensive approach to both personal and professional growth.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Rahul Sharma",
    role: "Director, Logistics Pro",
    content: "Their B2B consultation helped us scale from a local warehouse to a national web presence. Truly the visionaries they claim to be.",
    rating: 5,
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter"
          >
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">VISIONARIES.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="glossy-card p-10 rounded-[2.5rem] relative group border-white/5 hover:border-brand-primary/30 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary backdrop-blur-xl border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-primary transition-colors">{t.name}</h4>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
