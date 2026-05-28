"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HolographicGrid from "@/components/HolographicGrid";
import ParticleCanvas from "@/components/ParticleCanvas";
import { PROJECTS, ProjectData } from "@/lib/constants";
import ProjectModal from "@/components/ProjectModal";

const Reveal = ({ children, delay = 0, y = 20, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SERVICES_DATA = [
  {
    idx: "01",
    name: "Websites & Digital Experiences",
    keywords: ["UI/UX Design", "WordPress", "Shopify", "Custom Dev"],
    desc: "A website isn't just built — it's experienced. We design and develop beautiful, high-converting digital platforms that command attention and build trust from the very first click."
  },
  {
    idx: "02",
    name: "Performance Marketing",
    keywords: ["Meta Ads", "Google Ads", "Retargeting", "Lead Generation"],
    desc: "Ads that actually work. We run outcome-first campaigns across Meta and Google — combining sharp creative with data-driven targeting to deliver consistent, measurable growth."
  },
  {
    idx: "03",
    name: "Social Media & Content Creation",
    keywords: ["Reels & Video", "Copywriting", "Creatives", "Strategy"],
    desc: "Scroll-stopping content that builds real communities. We manage your social presence end-to-end — from creative strategy and copywriting to reels, graphics, and monthly content calendars."
  },
  {
    idx: "04",
    name: "Brand Identity & Logo Design",
    keywords: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    desc: "We craft brand identities that say something. Logos, colour systems, typography, and brand guidelines — built with intention so your brand looks and feels unmistakably yours, everywhere."
  },
  {
    idx: "05",
    name: "Photography & Visual Production",
    keywords: ["Commercial Shoots", "Product Photography", "Reels", "Video"],
    desc: "Visuals that make people stop and look twice. From commercial photoshoots and product photography to brand films and social reels — every frame crafted to reflect the premium your brand deserves."
  },
  {
    idx: "06",
    name: "AI-Powered Marketing",
    keywords: ["AI Automation", "Smart Chatbots", "AI Content", "Workflows"],
    desc: "We build smart marketing systems that scale your brand's output without multiplying your headcount. AI-powered workflows, automated campaigns, and intelligent content — built for brands thinking ahead."
  }
];

export default function Home() {
  const wordsList = ["People Remember.", "That Scale.", "That Convert.", "That Win."];
  const [currentWord, setCurrentWord] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [randomProjects, setRandomProjects] = useState<[string, ProjectData][]>([]);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % wordsList.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Hydration safe randomized select of 6 projects
    const entries = Object.entries(PROJECTS);
    const shuffled = [...entries].sort(() => 0.5 - Math.random());
    setRandomProjects(shuffled.slice(0, 6));
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if(typeof window !== "undefined" && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({url: 'https://calendly.com/digiglobeconsulting/30min'});
    } else {
      window.open('https://calendly.com/digiglobeconsulting/30min', '_blank');
    }
  };

  return (
    <main className="w-full relative bg-[#050B1A]">
      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <ParticleCanvas />
        <div className="hero-blob blob1"></div>
        <div className="hero-blob blob2"></div>
        <div className="hero-blob blob3"></div>
        <div className="hero-grid"></div>

        <div className="hero-content">
          <h1 className="hero-h1">
            <span className="static">We Build Brands</span><br />
            <div className="cycle-wrap" id="cycleWrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: "105%", opacity: 0, x: "-50%" }}
                  animate={{ y: "0%", opacity: 1, x: "-50%" }}
                  exit={{ y: "-105%", opacity: 0, x: "-50%" }}
                  transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                  className="cycle-word active"
                >
                  {wordsList[currentWord]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="hero-p">
            Brand strategy, content, websites and marketing designed to help ambitious businesses stand out and scale.
          </p>

          {/* Trust pills */}
          <div className="hero-trust">
            <div className="htrust-pill"><span className="htrust-num">250+</span><span className="htrust-label">Brands Served</span></div>
            <div className="htrust-div"></div>
            <div className="htrust-pill"><span className="htrust-num">7+</span><span className="htrust-label">Years Experience</span></div>
            <div className="htrust-div"></div>
            <div className="htrust-pill"><span className="htrust-num">🇮🇳 🇦🇪</span><span className="htrust-label">India &amp; UAE Offices</span></div>
            <div className="htrust-div"></div>
            <div className="htrust-pill"><span className="htrust-num">🌍</span><span className="htrust-label">Clients Worldwide</span></div>
          </div>

          <div className="hero-btns">
            <button 
              onClick={openCalendly}
              className="btn-main"
            >
              📅 Book a Free Growth Call
            </button>
            <Link href="#work" className="btn-outline-hero">
              View Case Studies →
            </Link>
          </div>
        </div>

        <div className="scroll-h">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="overflow-hidden border-y border-[rgba(255,255,255,0.05)] py-5 bg-white">
        <div className="flex whitespace-nowrap animate-[mq_30s_linear_infinite]">
          {Array(4).fill("").map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Engineered for Growth</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Luxury in Execution</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Built to Scale</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Positioned to Win</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Digital, But Elevated</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
              <span className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-[#9BA3BB] px-8 shrink-0">Where Strategy Meets Scale</span>
              <span className="text-[#3461FF] text-[0.5rem] shrink-0">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="sec lt py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="about-g mb-24">
            <Reveal>
              <div className="stag">The Origin</div>
              <h2 className="sh text-[var(--lt-text)]">
                Where Strategy<br/><span className="dim text-[var(--lt-muted)]">Meets Craft.</span>
              </h2>
              <p style={{ fontSize: ".82rem", color: "var(--lt-muted)", lineHeight: "1.9", marginTop: "1.6rem", maxWidth: "260px", fontWeight: 400 }}>
                7+ years · 100+ brands<br />
                Mumbai to global markets.
              </p>
            </Reveal>
            
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <p className="text-[var(--lt-muted)] text-[0.92rem] leading-[1.9]">
                  In a crowded digital world, attention is easy to buy. Trust is not.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-[var(--lt-muted)] text-[0.92rem] leading-[1.9]">
                  At Digiglobe, we combine strategy, creativity and marketing to help brands build meaningful visibility and sustainable growth. From brand identity and content creation to websites and performance campaigns, we create experiences that people remember and businesses benefit from.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <blockquote className="border-l-2 border-[#3461FF] pl-6 py-1 italic text-[var(--lt-text)] font-medium mt-8 leading-[1.7]">
                  We work with startups, growing businesses and established brands across industries — helping them communicate clearly, look exceptional and grow consistently.
                </blockquote>
              </Reveal>
            </div>
          </div>

          <div className="philo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--lt-line)", border: "1px solid var(--lt-line)", borderRadius: "8px", overflow: "hidden" }}>
            {[
              { t: "Strategy", h: <>Understanding your market<br/>before making your move.</>, d: "We start with clarity — who you are, who you serve, and how you win. Then we build from there." },
              { t: "Creativity", h: <>Ideas and visuals designed<br/>to earn attention and build recall.</>, d: "Design and content that stops the scroll, holds the gaze and stays in the memory." },
              { t: "Performance", h: <>Meaningful growth measured by<br/>outcomes, not vanity metrics.</>, d: "Every campaign, every rupee — tracked against real business goals. No fluff, no filler." }
            ].map((card, i) => (
              <div key={i} className="philo-card" style={{ padding: "2rem", background: "var(--lt-bg2)" }}>
                <Reveal delay={i * 0.1 + 0.3}>
                  <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--glow)", marginBottom: ".9rem" }}>{card.t}</div>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--lt-text)", lineHeight: 1.35, marginBottom: ".5rem" }}>{card.h}</p>
                  <p style={{ fontSize: ".8rem", color: "var(--lt-muted)", lineHeight: 1.65 }}>{card.d}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO (SERVICES ACCORDION) ═══ */}
      <section className="sec srv-bg py-24 lg:py-32 px-6 lg:px-16" id="services">
        <div className="max-w-[1200px] mx-auto">
          <div className="srv-top flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div>
              <Reveal>
                <div className="stag">What We Do</div>
                <h2 className="sh text-white">Creative work,<br /><span className="dim text-[rgba(230,236,248,0.3)]">built to perform.</span></h2>
              </Reveal>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Reveal delay={0.1}>
                <p className="srv-note text-[rgba(230,236,248,0.5)] max-w-[260px] leading-relaxed">We combine creativity, strategy, marketing and modern technology to help brands grow smarter.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/services" className="btn-main mt-3">
                  Know More →
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="srv-list border-t border-[rgba(230,236,248,0.08)]">
            {SERVICES_DATA.map((service) => {
              const isOpen = activeService === service.idx;
              return (
                <div key={service.idx} className="sitem border-b border-[rgba(230,236,248,0.08)]">
                  <div 
                    onClick={() => setActiveService(isOpen ? null : service.idx)}
                    className="srow grid grid-cols-[72px_1fr_auto] items-center gap-8 py-7 cursor-pointer hover:px-5 transition-all duration-300"
                  >
                    <span className="sidx text-[0.85rem] font-light tracking-widest text-[rgba(230,236,248,0.18)] tabular-nums">{service.idx}</span>
                    <div className="sname-w flex flex-col gap-1">
                      <span className="sname text-[clamp(1.3rem,2.5vw,2rem)] font-bold tracking-tight text-white transition-colors duration-300">{service.name}</span>
                      <div className="skws flex gap-1.5 flex-wrap mt-1">
                        {service.keywords.map((kw, kIdx) => (
                          <span key={kIdx} className="skw text-[0.6rem] font-semibold tracking-wider uppercase px-2 py-0.5 border border-[rgba(230,236,248,0.08)] rounded-full text-[rgba(230,236,248,0.18)]">{kw}</span>
                        ))}
                      </div>
                    </div>
                    <div className={`sarrow w-9 h-9 rounded-full border border-[rgba(230,236,248,0.08)] flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#3461FF] border-[#3461FF] rotate-45" : "hover:bg-[#3461FF] hover:border-[#3461FF] hover:rotate-45"}`}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <div className={`sbody overflow-hidden transition-all duration-500 ease-out pl-[72px] ${isOpen ? "max-h-[200px]" : "max-h-0"}`}>
                    <p className="text-[0.85rem] text-[rgba(230,236,248,0.45)] leading-relaxed pb-7 max-w-[520px]">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="sec-md stats-bg py-24 lg:py-32 px-6 lg:px-16" id="numbers">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <div className="text-[0.62rem] font-medium tracking-[0.22em] uppercase text-[#3461FF] mb-3">Our Story</div>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold tracking-[-0.03em] text-white">By <span className="text-[var(--soft)]">Numbers.</span></h2>
            </Reveal>
          </div>

          <div className="stats-g mb-[1px]">
            {[
              { n: "20", s: "+", l: "Team Members" },
              { n: "250", s: "+", l: "Projects Delivered" },
              { n: "7", s: "+", l: "Years of Excellence" }
            ].map((stat, i) => (
              <div key={i} className="si">
                <Reveal delay={i * 0.08}>
                  <div className="num-wrap">
                    <span className="n">{stat.n}</span>
                    <span className="suf">{stat.s}</span>
                  </div>
                  <span className="l">{stat.l}</span>
                </Reveal>
              </div>
            ))}
            <div className="si">
              <Reveal delay={0.24}>
                <div style={{ fontSize: "1.6rem", marginBottom: ".3rem", lineHeight: 1 }}>🇮🇳&nbsp;🇦🇪</div>
                <span className="l">India &amp; UAE</span>
              </Reveal>
            </div>
          </div>

          {/* Coffee stat + Partners */}
          <div className="stats-bottom-grid">
            {/* Coffee fun card */}
            <div className="si" style={{ background: "var(--n3)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: ".5rem", padding: "2.5rem" }}>
              <Reveal delay={0.32}>
                <div style={{ fontSize: "2.8rem", lineHeight: 1, animation: "wiggle 2.5s ease-in-out infinite" }}>☕</div>
                <div style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 700, color: "var(--white)", letterSpacing: "-.03em", lineHeight: 1 }}>43,782</div>
                <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>Coffees Drank</div>
                <div style={{ fontSize: ".72rem", color: "var(--dim)", marginTop: ".2rem", fontStyle: "italic" }}>and counting...</div>
              </Reveal>
            </div>

            {/* Partner badges */}
            <div className="si" style={{ background: "var(--n3)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem", padding: "2.5rem" }}>
              <Reveal delay={0.4}>
                <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "-.5rem" }}>Official Partners</div>
                
                {/* Shopify Partner */}
                <div style={{ display: "flex", alignItems: "center", gap: ".8rem", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "10px", padding: ".8rem 1.4rem" }}>
                  <svg width="22" height="22" viewBox="0 0 50 50" fill="none"><path d="M34.5 7.5c-.2 0-.4.1-.6.3-.1.1-2.9.8-2.9.8C29.5 5.9 28 5 26.4 5c-.1 0-.2 0-.3 0-.5-.6-1.1-.9-1.7-.9-4.2 0-6.2 5.3-6.8 7.9-1.6.5-2.8.9-2.9.9-.9.3-1 .3-1.1 1.2L12 36.8l18.8 3.2 10.2-2.2L39 8.5c0-.5-.2-.9-.5-1zM28.5 9.2c-1.2.4-2.6.8-4 1.2.4-1.6 1.1-3.2 2.4-4.2.5 1 1.1 2.2 1.6 3zM26.4 5.7c.2 0 .4 0 .6.1-.1.1-2.2.2-.3.3-1.4 1.2-2.4 3.1-2.8 5l-5.2 1.6C19.4 9.5 21.2 5.7 26.4 5.7z" fill="#96BF48"></path><path d="M41 14.1c-.2 0-2.5-.3-2.5-.3s-1.7-1.7-1.9-1.9c-.1-.1-.2-.1-.3-.1l-1.1 22.5 8.9-1.9-3.1-18.3z" fill="#5E8E3E"></path><path d="M28 18.5l-1.1 3.3s-1-.5-2.2-.5c-1.8 0-1.9 1.1-1.9 1.4 0 1.5 4 2.1 4 5.6 0 2.8-1.8 4.6-4.1 4.6-2.8 0-4.3-1.8-4.3-1.8l.8-2.5s1.5 1.3 2.7 1.3c.8 0 1.1-.6 1.1-1.1 0-1.9-3.3-2-3.3-5.2 0-2.7 1.9-5.2 5.8-5.2 1.5 0 2.5.4 2.5.4z" fill="#fff"></path></svg>
                  <div className="text-left">
                    <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--white)", letterSpacing: ".02em" }}>Shopify Partner</div>
                    <div style={{ fontSize: ".58rem", color: "var(--muted)", letterSpacing: ".06em" }}>Certified Developer</div>
                  </div>
                </div>

                {/* Google Partner */}
                <div style={{ display: "flex", alignItems: "center", gap: ".8rem", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "10px", padding: ".8rem 1.4rem" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                  <div className="text-left">
                    <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--white)", letterSpacing: ".02em" }}>Google Partner</div>
                    <div style={{ fontSize: ".58rem", color: "var(--muted)", letterSpacing: ".06em" }}>Ads Certified</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS (How We Work) ═══ */}
      <section className="sec lt proc-bg py-24 lg:py-32 px-6 lg:px-16" id="process">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="stag">How We Work</div>
            <h2 className="sh text-[var(--lt-text)]">Fast. Strategic.<br/><span className="dim text-[var(--lt-muted)]">Detail-obsessed.</span></h2>
          </Reveal>
          <div className="proc-g">
            {[
              { n: "01", t: "Understand", d: "We start by listening. Understanding your brand, your market, and your audience — before a single pixel is designed or a word is written. Strategy before everything." },
              { n: "02", t: "Plan & Create", d: "Strategy meets craft. We map out the full picture — then bring it to life with design, content, and creative work that genuinely reflects your brand's character." },
              { n: "03", t: "Launch & Activate", d: "Everything goes live with precision. Websites, campaigns, social content — delivered on time, on brief, and to a standard we're proud to put our name on." },
              { n: "04", t: "Grow & Scale", d: "We measure, learn, and build on what works. Growth that compounds — not a one-time push, but a sustained system that keeps your brand moving forward." }
            ].map((step, i) => (
              <div key={i} className="pc">
                <Reveal delay={i * 0.1 + 0.1}>
                  <div className="pc-n">{step.n}</div>
                  <div className="pc-t">{step.t}</div>
                  <p className="pc-d">{step.d}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO (Growth Stories) ═══ */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 border-t border-[rgba(255,255,255,0.07)]" id="work">
        <div className="max-w-[1200px] mx-auto">
          <div className="port-top flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <Reveal>
              <div className="stag">The Work</div>
              <h2 className="sh text-white">Growth <span className="dim text-[rgba(230,236,248,0.3)]">Stories.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/work" className="btn-main shrink-0">
                View All Work →
              </Link>
            </Reveal>
          </div>

          <div className="port-grid">
            {randomProjects.map(([key, p], i) => (
              <div 
                key={key} 
                onClick={() => setSelectedProject(p)}
                className="pcard group"
              >
                {/* Background Layer / Full Cover Logo */}
                <div 
                  className="pcard-bg absolute inset-0"
                  style={{ 
                    background: p.web?.gradient || `radial-gradient(ellipse at 50% 50%, ${p.brand.colors[0]}26 0%, #050B1A 70%)` 
                  }}
                >
                  {p.brand.logo && (
                    <img 
                      src={p.brand.logo} 
                      alt={p.brand.name} 
                      className={`w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-75 ${
                        p.brand.name.toLowerCase() === 'coca-cola' 
                           ? 'object-contain p-12 lg:p-16' 
                          : 'object-cover'
                      }`} 
                    />
                  )}
                </div>

                <span className="pcard-num">0{i + 1}</span>

                <div className="pcard-inner">
                  <div className="pcard-cat">
                    {p.category}
                  </div>
                  <div className="pcard-name">
                    {p.brand.name}
                  </div>
                  <div className="pcard-open">
                    View Case Study →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section id="clients" className="sec lt py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="stag">The Brands We've Grown</div>
            <h2 className="sh text-[var(--lt-text)] mb-16">
              Trusted by <span className="dim text-[var(--lt-muted)]">Bold Brands.</span>
            </h2>
          </Reveal>
          
          <HolographicGrid />
        </div>
      </section>

      {/* ═══ PROVEN IMPACT ═══ */}
      <section className="sec bg-[#050B1A] py-24 lg:py-32 px-6 lg:px-16" id="results">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <div className="stag justify-center">Proven Impact</div>
              <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-tight text-white mb-4">Numbers That<br /><span className="text-[rgba(230,236,248,0.25)] font-light">Actually Matter</span></h2>
              <p className="text-[0.9rem] text-[rgba(230,236,248,0.45)] max-w-[480px] mx-auto leading-relaxed">We measure every campaign against one metric: growth for your business.</p>
            </Reveal>
          </div>

          <div className="results-grid grid grid-cols-4 gap-[1px] bg-[rgba(230,236,248,0.08)]">
            <div className="bg-[#080F22] py-11 px-8 text-center">
              <Reveal delay={0.05}>
                <div className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#3461FF] leading-none mb-2">12Cr+</div>
                <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[rgba(230,236,248,0.45)]">Revenue Influenced</div>
                <div className="text-[0.72rem] text-[rgba(230,236,248,0.18)] mt-1.5">Across client campaigns</div>
              </Reveal>
            </div>
            <div className="bg-[#080F22] py-11 px-8 text-center">
              <Reveal delay={0.1}>
                <div className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#3461FF] leading-none mb-2">50M+</div>
                <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[rgba(230,236,248,0.45)]">Impressions Generated</div>
                <div className="text-[0.72rem] text-[rgba(230,236,248,0.18)] mt-1.5">Organic + paid reach</div>
              </Reveal>
            </div>
            <div className="bg-[#080F22] py-11 px-8 text-center">
              <Reveal delay={0.15}>
                <div className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#3461FF] leading-none mb-2">3.8x</div>
                <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[rgba(230,236,248,0.45)]">Avg. ROAS Delivered</div>
                <div className="text-[0.72rem] text-[rgba(230,236,248,0.18)] mt-1.5">META and Google campaigns</div>
              </Reveal>
            </div>
            <div className="bg-[#080F22] py-11 px-8 text-center">
              <Reveal delay={0.2}>
                <div className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#3461FF] leading-none mb-2">15K+</div>
                <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[rgba(230,236,248,0.45)]">Qualified Leads Generated</div>
                <div className="text-[0.72rem] text-[rgba(230,236,248,0.18)] mt-1.5">For clients across India and UAE</div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.25}>
            <p className="text-center mt-8 text-[0.7rem] text-[rgba(230,236,248,0.2)] italic">Indicative figures across our portfolio. Specifics shared on request.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY DIGIGLOBE ═══ */}
      <section className="sec bg-[#050B1A]" id="why">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="stag justify-center">Why Digiglobe</div>
              <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-tight text-white mb-4">One Partner.<br /><span className="text-[rgba(230,236,248,0.25)] font-light">Everything Handled.</span></h2>
              <p className="text-[0.9rem] text-[rgba(230,236,248,0.45)] max-w-[480px] mx-auto leading-relaxed">Most brands juggle 3–5 agencies. We handle strategy, creative, ads, and tech under one roof — with zero version drift.</p>
            </Reveal>
          </div>

          <div className="why-grid grid grid-cols-4 gap-[1px] bg-[rgba(230,236,248,0.08)]">
            <div className="why-card">
              <Reveal delay={0.05}>
                <div className="why-icon">🎯</div>
                <div className="why-title">Strategy First</div>
                <div className="why-desc">Positioning before pixels. Every campaign rooted in market research and a clear growth thesis.</div>
              </Reveal>
            </div>
            <div className="why-card">
              <Reveal delay={0.1}>
                <div className="why-icon">✦</div>
                <div className="why-title">Creative Excellence</div>
                <div className="why-desc">Premium design, content, and production that makes your brand impossible to ignore.</div>
              </Reveal>
            </div>
            <div className="why-card">
              <Reveal delay={0.15}>
                <div className="why-icon">📈</div>
                <div className="why-title">Performance Driven</div>
                <div className="why-desc">Every rupee tracked. Every campaign measured against real business outcomes — not vanity metrics.</div>
              </Reveal>
            </div>
            <div className="why-card">
              <Reveal delay={0.2}>
                <div className="why-icon">🤖</div>
                <div className="why-title">AI Powered</div>
                <div className="why-desc">Modern automation, AI workflows, and smart systems built to scale your brand faster.</div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="sec lt2 py-24 lg:py-32 px-6 lg:px-16" id="testimonials">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <div className="stag justify-center">Client Stories</div>
              <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-tight text-[var(--lt-text)] mb-4">What Our Clients<br /><span className="text-[rgba(10,16,32,0.2)] font-light">Say About Us</span></h2>
              <p className="text-[0.9rem] text-[var(--lt-muted)] max-w-[480px] mx-auto">Real founders. Real results. Real words.</p>
            </Reveal>
          </div>

          <div className="testi-grid">
            <div className="tcard">
              <Reveal delay={0.05} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">Digiglobe completely transformed how our brand is perceived. From logo to launch, they handled everything — and the results exceeded our expectations. Our social media engagement is up 4x since we started working together.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">RS</div>
                  <div>
                    <div className="tcard-name">Riddhi Doshi</div>
                    <div className="tcard-role">Founder, Redefine by Riddhi Doshi</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="tcard">
              <Reveal delay={0.1} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">We needed a partner who understood the jewellery market and could build a brand that stood for something. Digiglobe nailed it — our identity is now consistent, elegant, and truly reflects who we are as a brand.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">HJ</div>
                  <div>
                    <div className="tcard-name">Hema Jain</div>
                    <div className="tcard-role">Founder, Hema Jewels</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="tcard">
              <Reveal delay={0.15} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">The META ad campaigns Digiglobe ran for us were exceptional. We saw a 3.8x return on ad spend in the first month. Their creative team understands performance — not just aesthetics. Highly recommend.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">SK</div>
                  <div>
                    <div className="tcard-name">Sahil Kumar</div>
                    <div className="tcard-role">Founder, Bunkout</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="tcard">
              <Reveal delay={0.05} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">What sets Digiglobe apart is they actually think like business owners. They didn't just build us a beautiful website — they challenged our thinking and helped us position The Green Carat in a way that resonates with our audience.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">TG</div>
                  <div>
                    <div className="tcard-name">Priya Mehta</div>
                    <div className="tcard-role">Co-Founder, The Green Carat</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="tcard">
              <Reveal delay={0.1} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">From day one, the team at Digiglobe was proactive, creative, and genuinely invested in our brand. Our Instagram following has grown 280% in 6 months and we're consistently generating quality leads through social media.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">NJ</div>
                  <div>
                    <div className="tcard-name">Neha Agarwal</div>
                    <div className="tcard-role">Director, Nogah Jewels</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="tcard">
              <Reveal delay={0.15} className="h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="tcard-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="tcard-star">★</span>
                    ))}
                  </div>
                  <p className="tcard-quote">Working with Digiglobe was the best investment we made for our brand launch. They handled our entire digital presence — website, branding, social media, photography — and everything came together seamlessly. Truly a one-stop shop.</p>
                </div>
                <div className="tcard-person mt-auto">
                  <div className="tcard-avatar">TL</div>
                  <div>
                    <div className="tcard-name">Arjun Sharma</div>
                    <div className="tcard-role">Founder, The Travel Library</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <p className="text-center mt-10 text-[0.72rem] text-[rgba(10,16,32,0.4)] italic">* Testimonials shown with client permission. Photos will be added once provided.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sec srv-bg py-24 lg:py-32 px-6 lg:px-16" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <div className="stag justify-center">Frequently Asked</div>
              <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-tight text-white mb-4">Got Questions?<br /><span className="text-[rgba(230,236,248,0.25)] font-light">We've Got Answers.</span></h2>
            </Reveal>
          </div>

          <div className="max-w-[720px] mx-auto flex flex-col gap-[1px] bg-[rgba(230,236,248,0.08)] border border-[rgba(230,236,248,0.08)] rounded-lg overflow-hidden">
            {[
              {
                q: "How much do your services cost?",
                a: "Every engagement is scoped to your specific needs. Branding projects typically start at ₹75,000, websites from ₹1,20,000, and monthly retainers from ₹50,000. We'll share a detailed proposal after a discovery call — no surprises."
              },
              {
                q: "Do you work on retainers?",
                a: "Yes — most of our clients are on monthly retainers covering social media, performance ads, content, and ongoing brand management. Retainers start at ₹50,000/month and scale based on scope."
              },
              {
                q: "Do you work with startups?",
                a: "Absolutely. Many of our best-performing projects were with early-stage founders. If you have a clear product and ambition, we'll help you build the brand and the growth system around it."
              },
              {
                q: "How long does a branding project take?",
                a: "A full brand identity (logo, guidelines, collateral) typically takes 4–6 weeks. Websites take 6–10 weeks depending on complexity. We stick to timelines — no endless revision loops."
              },
              {
                q: "Do you manage ad accounts and budgets?",
                a: "Yes. We manage Meta Ads (Facebook & Instagram) and Google Ads campaigns end-to-end — strategy, creative, targeting, A/B testing, and weekly reporting. We're a certified Google Partner and Meta Business Partner."
              },
              {
                q: "Do you work with international / global brands?",
                a: "Yes. While we are based in India and UAE, we work with brands across the globe — UK, USA, Southeast Asia, and beyond. Digital marketing has no borders, and neither do we. We're comfortable working across time zones and currencies."
              },
              {
                q: "What makes Digiglobe different from other agencies?",
                a: "Three things: we think like business owners (not just marketers), we handle everything under one roof (no coordination chaos), and we don't use templates — every strategy is built from scratch for your brand. We only take clients we can genuinely impact."
              },
              {
                q: "Do you work with brands in UAE?",
                a: "Yes — we have a presence in Dubai and work with brands across the UAE. We understand both the Indian and Middle Eastern markets, and can localise strategy and creative accordingly."
              }
            ].map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-item">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`faq-q flex items-center justify-between w-full py-5 px-6 bg-transparent border-none text-left cursor-pointer transition-colors duration-300 ${isOpen ? "open text-[#3461FF]" : "text-white"}`}
                  >
                    <span>{item.q}</span>
                    <svg 
                      className={`faq-arrow w-4 h-4 transition-transform duration-300 text-[rgba(230,236,248,0.4)] ${isOpen ? "open" : ""}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  <div className={`faq-a ${isOpen ? "open" : ""}`}>
                    <p className="text-[0.82rem] text-[rgba(230,236,248,0.55)] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
            <button 
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3461FF] text-[0.75rem] font-semibold tracking-[0.08em] text-white rounded-full transition-transform hover:-translate-y-0.5"
            >
              Work With Us →
            </button>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA (Ready to grow) ═══ */}
      <section className="cta-sec" id="cta">
        <div className="cta-glow"></div>
        <div className="cta-dots"></div>
        <Reveal>
          <div className="stag justify-center">Ready to Grow?</div>
          <h2 className="cta-title">Let's Build<br /><span className="dim">Something Worth<br />Remembering.</span></h2>
          <p className="cta-sub">Whether you're launching a new brand, improving an existing one or looking for a long-term growth partner — we'd love to hear your story.</p>
        </Reveal>
        <Reveal delay={0.1} className="cta-btns">
          <button 
            onClick={openCalendly}
            className="btn-main"
          >
            📅 Book a Free Growth Call
          </button>
          <a href="https://wa.me/919104668367" className="btn-wa" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>
        </Reveal>
      </section>

      {/* ═══ SCHEDULE A MEETING BANNER ═══ */}
      <section style={{ background: "var(--navy)", padding: "0 4rem 5rem" }} className="px-6 lg:px-16">
        <div style={{ background: "linear-gradient(135deg,#0C1A4A 0%,#0A1235 50%,#050B1A 100%)", border: "1px solid rgba(52,97,255,.2)", padding: "4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "320px", height: "320px", background: "radial-gradient(circle,rgba(52,97,255,.2) 0%,transparent 70%)", pointerEvents: "none" }}></div>
          <div className="meet-banner-inner relative z-10 grid grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div style={{ fontSize: ".58rem", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--glow,#3461FF)", marginBottom: "1rem" }}>Prefer a live conversation?</div>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold tracking-tight text-white mb-3">Book a Free <span style={{ color: "var(--glow,#3461FF)" }}>30-Minute</span> Strategy Call</h2>
              <p style={{ fontSize: ".88rem", color: "rgba(230,236,248,.5)", lineHeight: "1.8", maxWidth: "520px" }}>No pitch, no pressure. We'll listen to your brand's goals, share honest insights, and explore if we're the right fit — all in 30 minutes.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "1.5rem", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: ".75rem", color: "rgba(230,236,248,.5)" }}><span style={{ color: "var(--glow,#3461FF)" }}>✓</span> Free consultation</div>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: ".75rem", color: "rgba(230,236,248,.5)" }}><span style={{ color: "var(--glow,#3461FF)" }}>✓</span> No obligation</div>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: ".75rem", color: "rgba(230,236,248,.5)" }}><span style={{ color: "var(--glow,#3461FF)" }}>✓</span> We come prepared</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center shrink-0">
              <button 
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4.5 bg-[#3461FF] text-white text-[0.7rem] font-bold tracking-widest uppercase rounded-full whitespace-nowrap shadow-[0_12px_40px_rgba(52,97,255,0.35)] transition-all duration-300 hover:bg-[#1535C8] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(52,97,255,0.45)]"
              >
                📅 Schedule a Meeting
              </button>
              <span style={{ fontSize: ".65rem", color: "rgba(230,236,248,0.3)", textAlign: "center" }}>Pick a time that works for you</span>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style jsx global>{`
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}
