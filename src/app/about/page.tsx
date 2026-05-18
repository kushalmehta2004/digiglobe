"use client";
import { motion } from "framer-motion";

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

export default function AboutPage() {
  return (
    <main className="w-full relative bg-[#050B1A] min-h-screen pt-[160px] pb-32">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-16">
        
        {/* ═══ HERO ═══ */}
        <section className="mb-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[1px] h-[32px] bg-[#3461FF]" />
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#3461FF] font-medium">
                The Digiglobe Story
              </span>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-8">
              Your Personal<br />
              <span className="font-light text-[rgba(230,236,248,0.3)]">Digital Concierge.</span>
            </h1>
            <p className="text-[1.1rem] leading-[1.8] text-[rgba(230,236,248,0.5)] max-w-[600px]">
              We operate at the intersection of high-end creative production and data-driven performance marketing. Turning bold ideas into brands people remember.
            </p>
          </Reveal>
        </section>

        {/* ═══ 360 APPROACH ═══ */}
        <section className="py-24 border-t border-[rgba(230,236,248,0.07)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-white leading-[1] tracking-[-0.02em]">
                A 360° Approach<br/>to Scaling.
              </h2>
            </Reveal>
            
            <div className="space-y-8">
              <Reveal delay={0.1}>
                <p className="text-[0.9rem] leading-[1.9] text-[rgba(230,236,248,0.5)]">
                  Digiglobe isn't just an agency; we are your dedicated digital concierge. We believe in a white-glove service model where we manage all the digital complexities so you can focus on building your business.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[0.9rem] leading-[1.9] text-[rgba(230,236,248,0.5)]">
                  Our expertise spans across full-stack production—from high-end advertising photography (jewellery, automotive, hospitality) to sophisticated AI-driven growth strategies and performance marketing.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <Reveal delay={0.3}>
                  <div className="text-[1.5rem] tracking-widest mb-2">🇮🇳</div>
                  <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(230,236,248,0.4)]">India</div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="text-[1.5rem] tracking-widest mb-2">🇦🇪</div>
                  <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(230,236,248,0.4)]">UAE</div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EXPERTISE ═══ */}
        <section className="py-24 border-t border-[rgba(230,236,248,0.07)]">
          <Reveal>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#3461FF] font-medium mb-12">
              Our Capabilities
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { t: "Production", d: "High-end advertising photography, professional shoots (Jewellery, F&B, Sports), and cinematic video content creation." },
              { t: "Digital Strategy", d: "AI-driven growth strategies, performance marketing (ads), and comprehensive online visibility optimization." },
              { t: "Creative", d: "Logo design, full brand identity development, and sophisticated social media management." },
              { t: "Web Engineering", d: "Custom website development focusing on conversion optimization and premium aesthetic delivery." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-[1px] w-full bg-[rgba(230,236,248,0.07)] mb-6" />
                <h3 className="text-[1.1rem] font-bold text-white mb-4">{item.t}</h3>
                <p className="text-[0.8rem] leading-[1.8] text-[rgba(230,236,248,0.4)]">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══ KEY PORTFOLIO HIGHLIGHTS ═══ */}
        <section className="py-24 border-t border-[rgba(230,236,248,0.07)]">
          <Reveal>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#3461FF] font-medium mb-12">
              Portfolio Highlights
            </div>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-white leading-[1] tracking-[-0.02em] mb-16">
              Brands we've<br/>collaborated with.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-y border-l border-[rgba(230,236,248,0.07)]">
            {["Coca Cola", "Tuborg", "Bisleri", "Jaguar Land Rover", "Asics", "JSW"].map((brand, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="aspect-square flex items-center justify-center text-center p-6 border-r border-[rgba(230,236,248,0.07)] bg-[rgba(5,11,26,0.5)] transition-colors duration-400 hover:bg-[#080F22] cursor-none group">
                  <span className="text-[0.85rem] font-bold tracking-wider text-[rgba(255,255,255,0.4)] group-hover:text-white transition-colors duration-400">
                    {brand}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
