"use client";
import { motion } from "framer-motion";

const servicesData = [
  {
    idx: "01",
    name: "Web & Interface Design",
    keywords: ["Next.js", "React", "UI / UX", "Performance"],
    desc: "High-performance websites built to convert. From immersive landing pages to full-scale corporate portals, we build digital homes that reflect your premium positioning."
  },
  {
    idx: "02",
    name: "Performance Marketing & Ads",
    keywords: ["Meta Ads", "Google Ads", "Funnels", "ROI focus"],
    desc: "No vanity metrics. We run data-driven Meta and Google ad campaigns designed to lower acquisition costs, increase ROAS, and drive measurable growth."
  },
  {
    idx: "03",
    name: "Social Media & Content Creation",
    keywords: ["Reels & Video", "Copywriting", "Creatives", "Strategy"],
    desc: "Scroll-stopping content that builds real communities. We manage your social presence end-to-end - from creative strategy and copywriting to reels, graphics, and monthly content calendars."
  },
  {
    idx: "04",
    name: "Brand Identity & Logo Design",
    keywords: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    desc: "We craft brand identities that say something. Logos, colour systems, typography, and brand guidelines - built with intention so your brand looks and feels unmistakably yours, everywhere."
  },
  {
    idx: "05",
    name: "Photography & Visual Production",
    keywords: ["Commercial Shoots", "Product Photography", "Reels", "Video"],
    desc: "Visuals that make people stop and look twice. From commercial photoshoots and product photography to brand films and social reels - every frame crafted to reflect the premium your brand deserves."
  },
  {
    idx: "06",
    name: "AI-Powered Marketing",
    keywords: ["AI Automation", "Smart Chatbots", "AI Content", "Workflows"],
    desc: "We build smart marketing systems that scale your brand's output without multiplying your headcount. AI-powered workflows, automated campaigns, and intelligent content - built for brands thinking ahead."
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-[160px] pb-32 px-6 lg:px-16 bg-[#050B1A]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24"
        >
          <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-2">
            What We Do
          </h1>
          <p className="text-[clamp(1.5rem,3vw,3rem)] font-light text-[rgba(230,236,248,0.3)] tracking-tight">
            Creative work, built to perform.
          </p>
        </motion.div>

        <div className="border-t border-[rgba(255,255,255,0.07)]">
          {servicesData.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="group border-b border-[rgba(255,255,255,0.07)] hover:bg-[rgba(52,97,255,0.04)] transition-colors duration-400 py-10 lg:py-14 px-4 lg:px-8 flex flex-col lg:flex-row items-start cursor-none relative overflow-hidden">
                
                {/* Index Column */}
                <div className="lg:w-[15%] mb-4 lg:mb-0 shrink-0 flex items-start">
                  <span 
                    className="text-[clamp(3rem,5vw,5rem)] font-bold tracking-tighter leading-none"
                    style={{ 
                      WebkitTextStroke: "1px rgba(230,236,248,0.15)", 
                      WebkitTextFillColor: "transparent" 
                    }}
                  >
                    {s.idx}
                  </span>
                </div>
                
                {/* Name & Desc Container */}
                <div className="flex-1 lg:max-w-[500px] flex flex-col relative pt-2">
                  <div className="flex items-center gap-4 relative mb-4">
                    <span className="text-[1.2rem] font-bold text-[rgba(230,236,248,0.8)] group-hover:text-white transition-colors duration-400 z-10 group-hover:translate-x-6">
                      {s.name}
                    </span>
                    {/* Sliding Arrow */}
                    <span className="absolute left-0 text-[#3461FF] opacity-0 -translate-x-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                  
                  {/* Service Description */}
                  <p className="text-[0.85rem] leading-[1.8] text-[rgba(230,236,248,0.45)] lg:pr-8 group-hover:text-[rgba(230,236,248,0.6)] transition-colors duration-400">
                    {s.desc}
                  </p>
                </div>
                
                {/* Tags Column */}
                <div className="flex flex-wrap gap-2 mt-8 lg:mt-0 lg:flex-1 lg:justify-end pt-2">
                  {s.keywords.map((kw, j) => (
                    <span key={j} className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-full text-[rgba(230,236,248,0.5)] group-hover:bg-[rgba(52,97,255,0.1)] group-hover:border-[rgba(52,97,255,0.2)] group-hover:text-[#5B82FF] transition-all duration-400">
                      {kw}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
