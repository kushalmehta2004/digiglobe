"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, ProjectData } from "@/lib/constants";
import ProjectModal from "@/components/ProjectModal";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

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
            Growth Stories.
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(PROJECTS).map(([key, p], i) => {
            const isPlainLogoBrand = p.brand.name.toLowerCase() === 'vinnin' || 
                                     p.brand.name.toLowerCase() === 'bunkout' ||
                                     p.brand.name.toLowerCase() === 'utopian villas' ||
                                     p.brand.name.toLowerCase().includes('dressing room') || 
                                     p.brand.name.toLowerCase().includes('avec amour') ||
                                     p.brand.name.toLowerCase() === 'bayroute' ||
                                     p.brand.name.toLowerCase().includes('coca-cola') ||
                                     p.brand.name.toLowerCase().includes('hyro') ||
                                     p.brand.name.toLowerCase().includes('etnica') ||
                                     p.brand.name.toLowerCase() === 'soup';
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                onClick={() => setSelectedProject(p)}
                className="relative aspect-[4/3] bg-[#080F22] overflow-hidden cursor-none group"
              >
                {/* Background Layer / Full Cover Logo */}
                <div 
                  className="absolute inset-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.02]"
                  style={{ 
                    background: isPlainLogoBrand
                      ? '#FFFFFF'
                      : (p.web?.gradient || `radial-gradient(ellipse at 50% 50%, ${p.brand.colors[0]}26 0%, #050B1A 70%)`) 
                  }}
                >
                  {p.brand.logo && (
                    <img 
                      src={p.brand.logo} 
                      alt={p.brand.name} 
                      className={`w-full h-full transition-all duration-500 ${
                        isPlainLogoBrand
                          ? 'object-contain p-8 lg:p-12 opacity-100'
                          : (p.brand.name.toLowerCase() === 'the travel library' || p.brand.name.toLowerCase() === 'durfshan' || p.brand.name.toLowerCase() === 'nogah' || p.brand.name.toLowerCase() === 'the green carat' || p.brand.name.toLowerCase() === 'antariksh' || p.brand.name.toLowerCase() === 'redefine')
                            ? 'object-cover opacity-100 group-hover:opacity-90'
                            : `opacity-40 group-hover:opacity-70 ${
                                p.brand.name.toLowerCase() === 'coca-cola' 
                                  ? 'object-contain p-12 lg:p-16' 
                                  : 'object-cover'
                              }`
                      }`} 
                    />
                  )}
                </div>
                
                {/* Dark Overlay */}
                {!isPlainLogoBrand && p.brand.name.toLowerCase() !== 'the travel library' && p.brand.name.toLowerCase() !== 'durfshan' && p.brand.name.toLowerCase() !== 'nogah' && p.brand.name.toLowerCase() !== 'the green carat' && p.brand.name.toLowerCase() !== 'antariksh' && p.brand.name.toLowerCase() !== 'redefine' && (
                  <div className="absolute inset-0 bg-[rgba(5,11,26,0.3)] transition-colors duration-[400ms] group-hover:bg-[rgba(5,11,26,0.5)] z-10" />
                )}

                {/* Centered Brand Name / Fake Logo (Only if no actual logo image) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  {!p.brand.logo && (
                    <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white tracking-widest uppercase opacity-80 mix-blend-overlay">
                      {p.brand.name}
                    </span>
                  )}
                </div>
                
                {/* Bottom Strip */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 flex flex-col items-start">
                  <div className={`text-[0.62rem] font-semibold tracking-[0.1em] uppercase mb-1 ${
                    isPlainLogoBrand ? 'text-[#050B1A]/60' : 'text-[rgba(230,236,248,0.5)]'
                  }`}>
                    {p.category}
                  </div>
                  <div className={`text-[1rem] font-bold mb-2 ${
                    isPlainLogoBrand ? 'text-[#050B1A]' : 'text-white'
                  }`}>
                    {p.brand.name}
                  </div>
                  <div className={`text-[0.72rem] font-semibold tracking-[0.1em] uppercase relative inline-block transition-colors duration-[400ms] ${
                    isPlainLogoBrand ? 'text-[#3461FF] group-hover:text-[#050B1A]' : 'text-[#3461FF] group-hover:text-white'
                  }`}>
                    View Case Study →
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-[400ms] group-hover:scale-x-100" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  );
}
