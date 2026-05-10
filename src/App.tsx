/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Mail,
  Globe,
  Star,
  Shield,
  CreditCard,
  TrendingUp,
  Award,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// --- EASY CONFIGURATION ---
const CONFIG = {
  domain: "OpenSquilla.com",
  price: "$30,000",
  monthly: "$913/mo",
  buyUrl: "https://afternic.com/domain/opensquilla.com", // Replace with actual link
  offerUrl: "#offer",
  description: "Acquire a premium digital asset with strong branding potential. OpenSquilla.com is short, memorable, and authoritative.",
  sellerName: "Premium Domain Portfolio",
  inquiriesThisWeek: 12,
  phone: "+1 781-281-9475",
  whatsapp: "https://wa.me/17812819475", // Replace with actual WhatsApp link
};

export default function App() {
  const [showInquiryCount, setShowInquiryCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInquiryCount(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Secure Escrow",
      desc: "Your funds are held safely until the transfer is complete."
    },
    {
      title: "Fast Transfer",
      desc: "Most domains are transferred within 24 hours of purchase."
    },
    {
      title: "Trusted Brokerage",
      desc: "Partnered with leading registrars worldwide."
    },
    {
      title: "Flexible Lease",
      desc: "Interest-free payment plans available for premium assets."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020408] text-slate-100 font-sans relative overflow-hidden flex flex-col selection:bg-blue-500/30">
      {/* Background Atmospheric Glows */}
      <div className="atmospheric-glow-1"></div>
      <div className="atmospheric-glow-2"></div>
      
      {/* Top Navigation */}
      <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-12 py-8 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-110">
            {CONFIG.domain.charAt(0).toUpperCase()}
          </div>
          <span className="text-2xl font-bold tracking-tight">Domain<span className="text-blue-500">Assets</span></span>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <AnimatePresence>
            {showInquiryCount && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  {CONFIG.inquiriesThisWeek} Inquiries this week
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-slate-900/50 border border-white/5 p-2.5 rounded-xl backdrop-blur-xl shadow-2xl"
          >
            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 shadow-inner">
               <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase font-black tracking-widest text-slate-500">Call or text our experts</span>
              <span className="text-xs font-bold text-white tabular-nums tracking-wide">{CONFIG.phone}</span>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-whatsapp rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </motion.a>

      {/* Main Content Grid */}
      <main className="relative z-10 flex-grow max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 px-12 items-center py-8">
        
        {/* Left Section: Domain Showcase */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mb-4"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Premium Digital Asset</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base font-medium mb-1 tracking-wide uppercase"
          >
            The domain name
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter glow-text-luxury leading-none">
              {CONFIG.domain}
            </h1>
            <div className="absolute -bottom-1.5 left-0 h-[2px] w-32 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 leading-relaxed max-w-lg mb-10"
          >
            {CONFIG.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={() => window.open(CONFIG.buyUrl, '_blank')}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3 active:scale-95 group"
            >
              Buy Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold backdrop-blur-sm transition-all active:scale-95"
            >
              Make an Offer
            </button>
          </motion.div>
        </div>

        {/* Right Section: Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="glass-immersive p-8 md:p-10 rounded-[40px] shadow-2xl relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-16 h-16 text-white" />
            </div>
            
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">Investment Details</h3>
            
            <div className="mb-10">
              <span className="text-6xl font-black text-white tracking-tight">{CONFIG.price}</span>
              <p className="text-slate-500 mt-3 flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Or as low as <span className="text-slate-200 font-bold">{CONFIG.monthly}</span>
              </p>
            </div>

            <div className="space-y-5 mb-10">
              {[
                "Instant Domain Transfer via Escrow",
                "Full Ownership Rights Included",
                "Secure Payment Verification"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-lg text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0c10] bg-slate-800 flex items-center justify-center text-[10px] font-bold shadow-lg">
                    {String.fromCharCode(64 + i)}{String.fromCharCode(64 + i + 19)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Verified Traces</span>
                <span className="text-[11px] text-blue-400/80 font-bold">Escrow Protected</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Section 2: Trust & Features */}
      <section className="relative z-10 px-12 py-24 bg-gradient-to-b from-transparent to-[#05070a]">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8 text-blue-400" />, title: "Buy With Confidence", badge: "Secure" },
              { icon: <TrendingUp className="w-8 h-8 text-blue-400" />, title: "Instant Domain Transfer", badge: "Fast" },
              { icon: <Lock className="w-8 h-8 text-blue-400" />, title: "Powered by Secure Exchange", badge: "Protected" },
              { icon: <CreditCard className="w-8 h-8 text-blue-400" />, title: "Convenient Payment Options", badge: "Flexible" }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    {f.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-blue-600 rounded text-[8px] font-black uppercase tracking-widest text-white shadow-lg">
                    {f.badge}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors">
                  {f.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Trustpilot-style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-immersive rounded-3xl p-8 md:p-12 border-white/5 relative group"
          >
            <div className="grid lg:grid-cols-4 gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
                <h4 className="text-4xl font-display font-black text-white">Excellent</h4>
                <div className="flex justify-center lg:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-green-500 flex items-center justify-center rounded">
                      <Star className="w-5 h-5 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-400 font-medium">Based on <span className="text-white underline decoration-blue-500/50 underline-offset-4 font-bold">367 reviews</span></p>
                  <p className="text-2xl font-display font-black text-white tracking-tight flex items-center justify-center lg:justify-start gap-2">
                    <Star className="w-6 h-6 fill-green-500 text-green-500" /> Trustpilot
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { 
                        name: "Marcus T.", 
                        time: "2 hours ago", 
                        text: "Acquiring a premium domain has never been easier. The transfer process was incredibly fast and secure.",
                        verified: true
                      },
                      { 
                        name: "Sarah J.", 
                        time: "1 day ago", 
                        text: "Professional service and excellent communication throughout. Highly recommend this portfolio for high-value assets.",
                        verified: true
                      }
                    ].map((review, i) => (
                      <div key={i} className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-green-500 text-green-500" />
                          ))}
                          {review.verified && (
                            <span className="ml-2 text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium line-clamp-3 italic">"{review.text}"</p>
                        <div className="pt-2">
                          <p className="text-xs font-bold text-white">{review.name}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest">{review.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
