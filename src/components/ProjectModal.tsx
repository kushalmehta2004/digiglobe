"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { ProjectData } from "@/lib/constants";

type TabType = "website" | "social" | "branding";

export default function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: ProjectData | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const [activeTab, setActiveTab] = useState<TabType>("website");

  // Reset tab on open
  useEffect(() => {
    if (isOpen) setActiveTab("website");
  }, [isOpen]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lenis-stopped");
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[rgba(5,11,26,0.96)]"
            onClick={onClose}
          />
          
          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[1000px] h-[90vh] bg-[#080F22] border border-[rgba(230,236,248,0.07)] rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex-none z-20 bg-[rgba(8,15,34,0.95)] border-b border-[rgba(230,236,248,0.07)] p-6 lg:p-8 flex items-start justify-between">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white tracking-[-0.02em] leading-tight mb-2 flex flex-wrap items-center gap-4">
                  {project.brand.logo ? (
                    <img src={project.brand.logo} alt={project.brand.name} className="max-h-[40px] w-auto object-contain" />
                  ) : (
                    project.brand.name
                  )}
                  {project.brand.logoLink && (
                    <a href={project.brand.logoLink} target="_blank" rel="noopener noreferrer" className="text-[0.75rem] font-medium tracking-[0.05em] text-[#3461FF] hover:text-white transition-colors border border-[rgba(52,97,255,0.3)] rounded-full px-3 py-1 flex items-center gap-2">
                      <ExternalLink size={14} /> Brand Assets
                    </a>
                  )}
                </h2>
                <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(230,236,248,0.4)]">
                  {project.category}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center border border-[rgba(230,236,248,0.1)] hover:border-[#3461FF] rounded hover:text-[#3461FF] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex-none px-6 lg:px-8 pt-6 pb-2 flex flex-wrap gap-2">
              {(["website", "social", "branding"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-[0.72rem] font-semibold tracking-[0.1em] uppercase rounded border transition-colors ${
                    activeTab === tab
                      ? "bg-[#3461FF] border-[#3461FF] text-white"
                      : "bg-transparent border-[rgba(230,236,248,0.1)] text-[rgba(230,236,248,0.5)] hover:border-[rgba(230,236,248,0.3)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto custom-scrollbar relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* WEBSITE TAB */}
                  {activeTab === "website" && project.web !== null && (
                    <div className="space-y-4">
                      {/* Browser mock container */}
                      <div className="border border-[rgba(230,236,248,0.07)] rounded-lg overflow-hidden flex flex-col mb-4">
                        {/* Browser Bar */}
                        <div className="flex items-center px-4 py-3 bg-[#0C1530] border-b border-[rgba(230,236,248,0.07)]">
                          <div className="flex gap-2 w-1/4">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                          </div>
                          <div className="flex-1 text-center flex justify-center">
                            <div className="bg-[#111D3E] rounded px-4 py-1.5 text-[0.65rem] text-[rgba(230,236,248,0.4)] font-medium tracking-[0.02em] w-full max-w-[400px] text-left">
                              https://{project.web.url || "example.com"}
                            </div>
                          </div>
                          <div className="w-1/4 flex justify-end">
                            {project.web.url && (
                              <a href={`https://${project.web.url}`} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] font-bold tracking-[0.02em] text-[#3461FF] hover:text-white transition-colors flex items-center gap-1">
                                Visit Live &rarr;
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Browser Screen */}
                        <div 
                          className="w-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 lg:p-12 relative"
                          style={{ background: `linear-gradient(160deg, ${project.brand.colors[0]} 0%, ${project.brand.colors[1] || '#050B1A'} 100%)` }}
                        >
                          <div className="relative z-10 flex flex-col items-center justify-center">
                            {/* Logo Box */}
                            {project.brand.logo ? (
                              <img src={project.brand.logo} alt={project.brand.name} className="max-w-[48px] max-h-[48px] object-contain drop-shadow-lg mb-5" />
                            ) : (
                              <div className="w-[48px] h-[48px] rounded-[10px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center mb-5">
                                <span className="text-[1.1rem] font-serif text-[rgba(255,255,255,0.9)]">{project.brand.name.substring(0, 2).toUpperCase()}</span>
                              </div>
                            )}

                            <h3 
                              className="text-[1.6rem] mb-1"
                              style={{ color: project.brand.colors[1] || '#E6ECF8', fontFamily: project.brand.font || "Georgia, serif" }}
                            >
                              {project.web.title || project.brand.name}
                            </h3>
                            
                            <div className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase mt-1 mb-5" style={{ color: 'rgba(230,236,248,0.4)' }}>
                              BEYOND EXPERIENCE
                            </div>

                            <div className="w-[30px] h-[1px] opacity-20 my-4" style={{ background: '#E6ECF8' }} />

                            <p className="text-[0.8rem] max-w-[440px] leading-[1.7] text-[rgba(230,236,248,0.6)] mt-2 font-medium">
                              {project.web.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.web.meta.map((m, i) => (
                          <div key={i} className="bg-[#0A1128] border border-[rgba(230,236,248,0.04)] rounded-lg p-5 flex flex-col justify-center">
                            <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-2">{m.l}</div>
                            <div className="text-[0.85rem] text-white font-bold">{m.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SOCIAL TAB */}
                  {activeTab === "social" && (
                    <div className="space-y-4">
                      {project.social[0]?.link && (
                        <div className="mb-2">
                          <a href={project.social[0].link} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] font-bold tracking-[0.1em] text-[#3461FF] uppercase hover:text-white transition-colors">
                            VIEW LIVE INSTAGRAM &rarr;
                          </a>
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.social.map((post, i) => {
                          const isLink = !!post.link;
                          const CardWrapper = isLink ? "a" : "div";
                          const wrapperProps = isLink ? { href: post.link, target: "_blank", rel: "noopener noreferrer" } : {};
                          
                          return (
                            <CardWrapper 
                              key={i} 
                              {...wrapperProps as any}
                              className={`group relative aspect-[4/5] border border-[rgba(230,236,248,0.07)] rounded-xl flex flex-col overflow-hidden text-left transition-colors duration-300 hover:border-white/20 p-6 ${isLink ? 'cursor-pointer' : ''}`}
                              style={{ background: post.bg }}
                            >
                              {/* Top Right Initial Badge */}
                              <div className="absolute top-5 right-5 w-7 h-7 rounded border border-[rgba(255,255,255,0.3)] flex items-center justify-center opacity-70 z-20">
                                <span className="text-[0.5rem] font-serif text-[rgba(255,255,255,0.8)] tracking-widest">{project.brand.name.substring(0, 2).toUpperCase()}</span>
                              </div>

                              {(post.image || post.video) && (
                                <>
                                  {post.video ? (
                                    <video src={post.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 transition-transform duration-[600ms] group-hover:scale-105" />
                                  ) : (
                                    <img src={post.image} alt={post.type} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 transition-transform duration-[600ms] group-hover:scale-105" />
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,26,0.95)] via-[rgba(5,11,26,0.5)] to-transparent z-10 transition-opacity duration-[600ms]" />
                                </>
                              )}
                              
                              <div className={`relative z-20 flex flex-col justify-end h-full w-full`}>
                                <div className="text-[0.55rem] font-bold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.4)] mb-2">{post.type}</div>
                                <p className="text-[0.85rem] font-serif leading-[1.5] text-white drop-shadow-md" style={{ fontFamily: project.brand.font }}>{post.copy}</p>
                                <div className="w-[20px] h-[1px] bg-[rgba(255,255,255,0.3)] mt-4"></div>
                              </div>
                            </CardWrapper>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* BRANDING TAB */}
                  {activeTab === "branding" && (
                    <div className="space-y-4">
                      {project.brand.details && (
                        <div 
                          className="p-8 rounded-xl border relative overflow-hidden mb-2"
                          style={{ background: '#0C1530', borderColor: `rgba(230,236,248,0.05)` }}
                        >
                          <h4 className="text-[0.55rem] font-bold text-[rgba(230,236,248,0.3)] uppercase tracking-[0.15em] mb-4 text-center">Brand Concept & Details</h4>
                          <p className="text-[0.85rem] leading-[1.7] text-[rgba(230,236,248,0.8)] whitespace-pre-line relative z-10 text-center max-w-[700px] mx-auto">
                            {project.brand.details}
                          </p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Logo & Identity */}
                        <div 
                          className="p-8 rounded-xl flex flex-col items-center justify-center gap-2 text-center min-h-[260px] border border-[rgba(230,236,248,0.05)]"
                          style={{ background: '#0C1530' }}
                        >
                          <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-4">Logo & Identity</div>
                          {project.brand.logo ? (
                            <img src={project.brand.logo} alt="Logo" className="max-w-[70px] max-h-[70px] object-contain mb-2" />
                          ) : (
                            <div className="w-[60px] h-[60px] rounded-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center mb-2">
                              <span className="text-[1.2rem] font-serif text-[rgba(255,255,255,0.8)]">{project.brand.name.substring(0, 2).toUpperCase()}</span>
                            </div>
                          )}
                          <div className="text-[1.1rem] mt-2 font-serif" style={{ color: project.brand.colors[1] || '#E6ECF8', fontFamily: project.brand.font }}>{project.brand.name}</div>
                          <div className="text-[0.5rem] tracking-[0.2em] uppercase text-[rgba(230,236,248,0.4)] mt-1">Beyond Experience</div>
                          
                          <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mt-6">
                            {project.brand.style.split('·').map(s => s.trim()).join(' · ')}
                          </div>
                        </div>

                        {/* Brand Colours */}
                        <div 
                          className="p-8 rounded-xl flex flex-col items-center justify-center text-center min-h-[260px] border border-[rgba(230,236,248,0.05)]"
                          style={{ background: '#0C1530' }}
                        >
                          <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-8">Brand Colours</div>
                          <div className="flex justify-center gap-6">
                            {project.brand.colors.map((c, i) => (
                              <div key={i} className="flex flex-col items-center gap-2">
                                <div className="w-[45px] h-[45px] rounded-[10px] border border-[rgba(255,255,255,0.1)] shadow-sm" style={{ backgroundColor: c }} />
                                <div className="flex flex-col items-center mt-1">
                                  <span className="text-[0.55rem] font-bold tracking-[0.05em] text-[rgba(230,236,248,0.5)]">{project.brand.colorNames[i]}</span>
                                  <span className="text-[0.5rem] font-mono text-[rgba(230,236,248,0.25)] mt-0.5 uppercase">{c}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Brand Typography */}
                        <div 
                          className="p-8 rounded-xl flex flex-col items-center justify-center text-center min-h-[260px] border border-[rgba(230,236,248,0.05)]"
                          style={{ background: '#0C1530' }}
                        >
                          <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-6">Brand Typography</div>
                          <div className="text-[0.9rem] font-bold text-white tracking-[-0.01em] mb-6">{project.brand.font}</div>
                          <div className="text-[1.8rem] mb-4" style={{ fontFamily: project.brand.font, color: project.brand.colors[1] || '#E6ECF8' }}>Aa Bb Cc</div>
                          <div className="text-[0.6rem] font-bold tracking-[0.05em] text-[rgba(230,236,248,0.4)]">Montserrat · Body</div>
                        </div>

                        {/* Brand Personality */}
                        <div 
                          className="p-8 rounded-xl flex flex-col items-center justify-center text-center min-h-[260px] border border-[rgba(230,236,248,0.05)]"
                          style={{ background: '#0C1530' }}
                        >
                          <div className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-6">Brand Personality</div>
                          <div className="flex flex-col gap-3">
                            {project.brand.style.split('·').map((s, i) => (
                              <span key={i} className="text-[0.8rem] font-medium text-[rgba(230,236,248,0.5)]">{s.trim()}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
