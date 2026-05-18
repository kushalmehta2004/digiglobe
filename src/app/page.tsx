"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HolographicGrid from "@/components/HolographicGrid";

import ParticleCanvas from "@/components/ParticleCanvas";

const Reveal = ({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const wordsList = ["Position.", "Scale.", "Elevate.", "Grow."];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % wordsList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full relative bg-[#050B1A]">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 lg:px-16 overflow-hidden">
        <ParticleCanvas />
        <div className="max-w-[1200px] w-full mx-auto relative z-10 pt-[120px] lg:pt-[150px] pb-24 flex flex-col h-full flex-1">
          
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-[1px] bg-[#3461FF]"
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.3)] font-medium"
            >
              Full-Service Digital Partner · India & UAE
            </motion.span>
          </div>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-[clamp(4rem,9vw,9rem)] leading-[0.92] tracking-[-0.04em]"
            >
              <span className="font-bold text-white block">We</span>
              <span className="font-bold text-[#5B82FF] block relative h-[1.05em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    exit={{ clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 top-0 whitespace-nowrap"
                  >
                    {wordsList[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="font-light text-[rgba(230,236,248,0.3)] block mt-2 text-[clamp(2.4rem,6vw,5.5rem)] leading-none">
                Your Brand.
              </span>
            </motion.h1>
            
            {/* Background Outline Text */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-[-1]">
              <span 
                className="text-[clamp(8rem,18vw,18rem)] font-bold tracking-tighter"
                style={{ 
                  WebkitTextStroke: "1px rgba(52,97,255,0.08)", 
                  WebkitTextFillColor: "transparent" 
                }}
              >
                250+
              </span>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="text-[0.9rem] leading-[1.9] text-[rgba(230,236,248,0.45)] max-w-[480px] mt-8 mb-10"
          >
            A 360° creative and performance agency turning bold ideas into brands people remember. Strategy · Design · Ads · Content · AI.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/919104668367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3461FF] text-[0.75rem] font-semibold tracking-[0.08em] text-white rounded-full transition-transform hover:-translate-y-0.5">
              Start a Project →
            </a>
            <Link href="/work" className="inline-flex items-center justify-center px-8 py-3.5 border border-[rgba(255,255,255,0.2)] text-[0.75rem] font-semibold tracking-[0.08em] text-white rounded-full transition-colors hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.4)]">
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Hero Bottom Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="max-w-[1200px] w-full mx-auto pb-8 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-12 lg:gap-24"
        >
          <div>
            <div className="text-xl font-bold text-white mb-1">250+</div>
            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[rgba(230,236,248,0.3)]">Projects</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white mb-1">7+</div>
            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[rgba(230,236,248,0.3)]">Years</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white mb-1">IN & AE</div>
            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[rgba(230,236,248,0.3)]">Markets</div>
          </div>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="overflow-hidden border-t border-[rgba(255,255,255,0.05)] py-5 bg-[#080F22]">
        <div className="flex whitespace-nowrap animate-[mq_40s_linear_infinite]">
          {Array(6).fill("").map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)] px-6 shrink-0">Web Design</span>
              <span className="text-[#3461FF] text-[1.2rem] leading-none mb-1 shrink-0">·</span>
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)] px-6 shrink-0">Performance Ads</span>
              <span className="text-[#3461FF] text-[1.2rem] leading-none mb-1 shrink-0">·</span>
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)] px-6 shrink-0">Brand Identity</span>
              <span className="text-[#3461FF] text-[1.2rem] leading-none mb-1 shrink-0">·</span>
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)] px-6 shrink-0">Social Media</span>
              <span className="text-[#3461FF] text-[1.2rem] leading-none mb-1 shrink-0">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <Reveal>
              <div className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-[#3461FF] mb-6">
                The Origin
              </div>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-12">
                Where Strategy<br/>Meets Craft.
              </h2>
              <div className="flex gap-4 items-stretch">
                <div className="w-[1px] h-[40px] bg-[#3461FF]" />
                <div className="text-[0.75rem] text-[rgba(230,236,248,0.3)] uppercase tracking-[0.15em] flex flex-col justify-center">
                  <span>7+ years · 100+ brands</span>
                  <span>Mumbai → Global</span>
                </div>
              </div>
            </Reveal>
            
            <div className="space-y-6 lg:pt-16">
              <Reveal delay={0.1}>
                <p className="text-[0.88rem] leading-[1.95] text-[rgba(230,236,248,0.5)]">
                  Digiglobe was founded on a simple premise: great design is meaningless if it doesn't perform. We bridge the gap between high-end aesthetic and hard-hitting performance.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-[0.88rem] leading-[1.95] text-[rgba(230,236,248,0.5)]">
                  Whether you need a flagship website, a new brand identity, or a full-funnel marketing campaign, we bring a level of strategic thinking that transforms ordinary touchpoints into growth engines.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <blockquote className="border-l-2 border-[#3461FF] pl-6 py-1 italic text-[0.88rem] leading-[1.95] text-[rgba(255,255,255,0.7)] mt-8">
                  "Growth doesn't happen by accident. It's engineered through meticulous design and relentless optimization."
                </blockquote>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-[rgba(255,255,255,0.07)]">
            {[
              { l: "01 / Strategy", t: "Insight-Led", d: "We don't guess. Every decision is rooted in market research, user behavior, and brand positioning." },
              { l: "02 / Creativity", t: "Design Excellence", d: "Aesthetics matter. We craft visual identities and interfaces that command premium positioning." },
              { l: "03 / Performance", t: "Data-Driven", d: "Beautiful work should drive revenue. We measure, iterate, and optimize for tangible ROI." }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1 + 0.3}>
                <div className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#3461FF] mb-4">{card.l}</div>
                <div className="text-[0.95rem] font-bold text-white mb-3">{card.t}</div>
                <div className="text-[0.8rem] text-[rgba(230,236,248,0.4)] leading-[1.8]">{card.d}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-[#3461FF] mb-6">
              Our Story
            </div>
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-20">
              By Numbers.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(255,255,255,0.07)]">
            {[
              { n: "20", s: "+", l: "Team Members" },
              { n: "250", s: "+", l: "Projects Delivered" },
              { n: "7", s: "+", l: "Years of Excellence" },
              { emoji: "🇮🇳 🇦🇪", l: "India & UAE" }
            ].map((stat, i) => (
              <div key={i} className="py-12 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.07)] last:border-r-0 pl-0 lg:pl-10 first:pl-0">
                <Reveal delay={i * 0.08}>
                  {stat.emoji ? (
                    <div className="flex items-baseline gap-[0.1rem] leading-none mb-4 text-[2rem]">
                      {stat.emoji}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-[0.1rem] leading-none mb-3">
                      <span className="text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-[-0.04em] text-white">{stat.n}</span>
                      <span className="text-[#3461FF] text-[clamp(2rem,4vw,3.5rem)] font-bold">{stat.s}</span>
                    </div>
                  )}
                  <span className="text-[0.62rem] font-medium tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)]">{stat.l}</span>
                </Reveal>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex flex-col items-center justify-center text-center">
            <Reveal delay={0.4}>
              <div className="text-3xl mb-3">☕</div>
              <div className="text-2xl font-bold text-white mb-1">10,000+</div>
              <div className="text-[0.62rem] font-medium tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)]">Cups of Coffee Consumed</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section id="clients" className="py-24 lg:py-32 px-6 lg:px-16 border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-16 text-white">
              Trusted by Bold Brands.
            </h2>
          </Reveal>
          
          <HolographicGrid />
        </div>
      </section>

      {/* ═══ CREATIVE STRIP ═══ */}
      <section className="bg-[#080F22] border-y border-[rgba(255,255,255,0.06)] py-12 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Reveal>
            <div className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#3461FF] mb-2">What we create</div>
            <div className="text-[1rem] font-semibold text-white tracking-wide">
              Brand Identities · Websites · Campaigns · Reels · Photoshoots · Positioning
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/work" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3461FF] text-[0.75rem] font-semibold tracking-[0.08em] text-white rounded-full transition-transform hover:-translate-y-0.5">
              Work With Us →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="cta" className="min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden py-24 px-6 lg:px-16">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_60%,rgba(52,97,255,0.15),transparent)]" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
          <Reveal>
            <div className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-[#3461FF] mb-6">
              Your Digital Concierge
            </div>
            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-8">
              <span className="text-white block">Let's Build</span>
              <span className="text-[rgba(230,236,248,0.3)] font-light block">Something Remarkable.</span>
            </h2>
            <p className="text-[0.9rem] text-[rgba(230,236,248,0.45)] max-w-[340px] mx-auto leading-[1.8] mb-12">
              Book a strategy call to discuss your objectives. No commitment, just value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => {
                  // @ts-ignore
                  if(typeof window !== "undefined" && window.Calendly) window.Calendly.initPopupWidget({url: 'https://calendly.com/digiglobeconsulting/30min'});
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#3461FF] text-[0.75rem] font-semibold tracking-[0.08em] uppercase rounded-full text-white transition-transform hover:-translate-y-0.5"
              >
                Book a Meeting
              </button>
              <a 
                href="https://wa.me/919104668367" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[rgba(255,255,255,0.2)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase rounded-full text-white transition-colors hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.4)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Start on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx global>{`
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}
