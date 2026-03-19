import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function Contact() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            Contact
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9]">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">TOUCH.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-light">
            Have a question or ready to start your journey with Unicorn BMS? Our consultants are here to help.
          </p>
        </div>

        <div className="glossy-card rounded-[3rem] p-8 md:p-16 border-white/20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl font-display font-bold tracking-tight">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">Call Us</p>
                      <p className="text-2xl font-medium">+91 (800) UNICORN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-500">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">Email</p>
                      <p className="text-2xl font-medium">contact@unicornbms.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">Location</p>
                      <p className="text-2xl font-medium">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10">
                  <h4 className="text-3xl font-display font-bold mb-4">Business Hours</h4>
                  <div className="space-y-3 font-medium text-lg opacity-90">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Interested Vertical</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all appearance-none text-lg">
                  <option className="bg-brand-surface">Health & Wealth Management</option>
                  <option className="bg-brand-surface">IT & SAAS Solutions</option>
                  <option className="bg-brand-surface">Business & Marketing Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-6 py-6 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full glossy-button py-6 rounded-full font-bold text-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-4">
                Send Inquiry <Send size={28} />
              </button>
            </form>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
