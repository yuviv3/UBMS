import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  TrendingUp, 
  Home as HomeIcon, 
  Cpu, 
  Globe, 
  BarChart3, 
  Rocket, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Zap,
  Layers,
  Newspaper,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { Chatbot } from './components/Chatbot';
import { cn } from './lib/utils';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import HealthWealth from './pages/HealthWealth';
import ITSolutions from './pages/ITSolutions';
import BusinessMarketing from './pages/BusinessMarketing';
import Contact from './pages/Contact';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Health & Wealth', href: '/services/health-wealth', icon: TrendingUp },
    { name: 'IT Solutions', href: '/services/it-solutions', icon: Cpu },
    { name: 'Business & Marketing', href: '/services/business-marketing', icon: Globe },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl",
      isScrolled ? "top-4" : "top-6"
    )}>
      <div className={cn(
        "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border border-white/10 shadow-2xl backdrop-blur-xl",
        isScrolled ? "bg-brand-dark/80 py-2" : "bg-white/5"
      )}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.4)] group-hover:scale-110 transition-transform">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">UNICORN <span className="text-brand-primary">BMS</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-brand-primary", location.pathname === '/' ? "text-brand-primary" : "text-white/70")}>Home</Link>
          <Link to="/about" className={cn("text-sm font-medium transition-colors hover:text-brand-primary", location.pathname === '/about' ? "text-brand-primary" : "text-white/70")}>About Us</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-primary py-2", location.pathname.startsWith('/services') ? "text-brand-primary" : "text-white/70")}>
              Services <ChevronRight size={14} className={cn("transition-transform", isServicesOpen ? "rotate-90" : "")} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
                   className="absolute top-full left-0 w-64 bg-brand-surface/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 mt-2"
                >
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link 
                        key={service.name} 
                        to={service.href}
                        className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors group/item"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                          <service.icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-white/80 group-hover/item:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className={cn("text-sm font-medium transition-colors hover:text-brand-primary", location.pathname === '/contact' ? "text-brand-primary" : "text-white/70")}>Contact</Link>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all active:scale-95">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 bg-brand-surface/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 mt-4 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <Link to="/" className="text-lg font-medium text-white/80" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-lg font-medium text-white/80" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/50 px-1">Services</p>
              <div className="grid gap-2 pl-2">
                {services.map((service) => (
                  <Link 
                    key={service.name} 
                    to={service.href} 
                    className="flex items-center gap-3 text-white/70 hover:text-brand-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <service.icon size={18} className="text-brand-primary" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-lg font-medium text-white/80" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <Link to="/contact" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white w-full py-4 rounded-full font-bold mt-4 text-center shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              Consult Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-brand-surface/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.3)]">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">UNICORN <span className="text-brand-primary">BMS</span></span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed mb-8 text-base">
            A premium, multi-vertical brand management platform covering Health & Wealth, IT, and Business Marketing services.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-8 text-white/90">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-8 text-white/90">Services</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/services/health-wealth" className="hover:text-brand-primary transition-colors">Health & Wealth</Link></li>
            <li><Link to="/services/it-solutions" className="hover:text-brand-primary transition-colors">IT Solutions</Link></li>
            <li><Link to="/services/business-marketing" className="hover:text-brand-primary transition-colors">Business & Marketing</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
        <div className="flex gap-8 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm text-white/20">
          © 2026 Unicorn BMS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-primary selection:text-white bg-brand-dark text-white font-sans antialiased">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/health-wealth" element={<HealthWealth />} />
            <Route path="/services/it-solutions" element={<ITSolutions />} />
            <Route path="/services/business-marketing" element={<BusinessMarketing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
