"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const brandsRow1 = [
  "THE DRESSING ROOM", "DURFSHAN", "BAYROUTE", "UTOPIAN VILLAS"
];

const brandsRow2 = [
  "CEPA COUNCIL", "COCA-COLA", "HYRO", "ANTARIKSH"
];

function SpotlightCard({ brand, index }: { brand: string, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Soft internal spotlight
  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(52,97,255,0.08), transparent 80%)`;
  // Border spotlight
  const borderBackground = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(52,97,255,0.6), transparent 80%)`;

  return (
    <motion.div
      whileHover="hover"
      onMouseMove={handleMouseMove}
      className={`relative flex-shrink-0 flex items-center justify-center px-12 py-10 group cursor-none
        border border-[rgba(230,236,248,0.07)] overflow-hidden bg-[#050B1A]
        min-w-[300px] lg:min-w-[400px]
      `}
    >
      {/* Animated Border Glow Layer */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: borderBackground }}
      />

      {/* Main Background Layer - Creates the 1px border effect by hiding the inner part of the border glow */}
      <div className="absolute inset-[1px] bg-[#050B1A] z-0 pointer-events-none transition-colors duration-500 group-hover:bg-[#060D1E]" />

      {/* Internal Spotlight Glow Layer */}
      <motion.div
        className="absolute inset-[1px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
        style={{ background }}
      />

      {/* Content - Magnetic/Flip text effect */}
      <div className="relative z-10 font-semibold tracking-wider flex">
        {brand.split("").map((char, idx) => (
          <span 
            key={idx} 
            className="relative inline-block h-[1.2em] overflow-hidden" 
            style={{ width: char === " " ? "0.3em" : "auto" }}
          >
            <motion.span 
              className="block text-[0.85rem] text-[rgba(255,255,255,0.4)] transition-colors duration-500 group-hover:text-transparent"
              variants={{ hover: { y: "-100%" } }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: idx * 0.015 }}
            >
              {char}
            </motion.span>
            <motion.span 
              className="block absolute top-full text-[0.85rem] text-white drop-shadow-[0_0_8px_rgba(52,97,255,0.4)]"
              variants={{ hover: { y: "-100%" } }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: idx * 0.015 }}
            >
              {char}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function HolographicGrid() {
  return (
    <div className="relative z-10 py-10 w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden flex flex-col gap-6 mask-gradient">
      
      {/* Row 1 - Left to Right */}
      <div className="flex gap-6 w-max animate-[marqueeRight_40s_linear_infinite] hover:[animation-play-state:paused]">
        {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, i) => (
          <SpotlightCard key={`r1-${i}`} brand={brand} index={i} />
        ))}
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex gap-6 w-max animate-[marqueeLeft_40s_linear_infinite] hover:[animation-play-state:paused]">
        {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
          <SpotlightCard key={`r2-${i}`} brand={brand} index={i} />
        ))}
      </div>

      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes marqueeRight {
          from { transform: translateX(-33.33%); }
          to { transform: translateX(0%); }
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0%); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
