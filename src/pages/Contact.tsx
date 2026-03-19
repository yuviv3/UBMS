import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    vertical: 'Health & Wealth Management',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', vertical: 'Health & Wealth Management', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send enquiry.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };
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
            Have a question or ready to start your journey with UNICORN BMS? Our consultants are here to help.
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
                      <p className="text-2xl font-medium">+91 75501 02730</p>
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

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-md">
              {status === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-4 rounded-2xl flex items-center gap-3 mb-6">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">Enquiry sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl flex items-center gap-3 mb-6">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Interested Vertical</label>
                <select 
                  name="vertical"
                  value={formData.vertical}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all appearance-none text-lg"
                >
                  <option className="bg-brand-surface">Health & Wealth Management</option>
                  <option className="bg-brand-surface">IT & SAAS Solutions</option>
                  <option className="bg-brand-surface">Business & Marketing Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/30 ml-4 tracking-widest">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-6 py-6 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all text-lg resize-none" 
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full glossy-button py-6 rounded-full font-bold text-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 size={28} className="animate-spin" /></>
                ) : (
                  <>Send Inquiry <Send size={28} /></>
                )}
              </button>
            </form>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
