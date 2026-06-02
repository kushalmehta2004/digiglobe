"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";
import { ProjectData } from "@/lib/constants";

type TabType = "website" | "social" | "branding" | "shoot" | "insta posts" | "insta reels" | "reel concept" | "concept" | "theme";

function SMMPostCard({ 
  post, 
  postIndex,
  brandName,
  brandLogo,
  brandUrl
}: { 
  post: { id: string; name: string; type: string; link: string; videoUrl?: string }[]; 
  postIndex: number;
  brandName: string;
  brandLogo?: string;
  brandUrl?: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? post.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === post.length - 1 ? 0 : prev + 1));
  };

  const activeMedia = post[currentIdx];
  if (!activeMedia) return null;

  const getThumbnailUrl = (id: string) => {
    if (id.startsWith('/') || id.startsWith('http')) {
      return id;
    }
    return `https://lh3.googleusercontent.com/d/${id}=w600`;
  };


  return (
    <>
      <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.04)] rounded-lg overflow-hidden flex flex-col p-2 select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#1B274A] border border-[rgba(230,236,248,0.08)] flex items-center justify-center overflow-hidden">
              {brandLogo ? (
                <img src={brandLogo} alt={brandName} className="w-3.5 h-3.5 object-contain" />
              ) : (
                <div className="w-3.5 h-3.5 rounded bg-blue-500/20 text-[0.4rem] flex items-center justify-center font-bold text-white uppercase">
                  {brandName.substring(0, 2)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[0.58rem] font-bold text-white leading-none mb-0.5">{brandUrl || brandName.toLowerCase()}</span>
              <span className="text-[0.45rem] text-[rgba(230,236,248,0.35)] leading-none font-medium">Post {postIndex + 1}</span>
            </div>
          </div>
          <a 
            href={activeMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 rounded-full bg-[rgba(230,236,248,0.02)] hover:bg-[#3461FF] flex items-center justify-center text-[rgba(230,236,248,0.4)] hover:text-white transition-colors"
          >
            <ExternalLink size={9} />
          </a>
        </div>

        {/* Media Box */}
        <div className="relative aspect-[4/5] w-full bg-black/40 rounded-md overflow-hidden border border-[rgba(230,236,248,0.02)] group">
          {activeMedia.type === 'video' && activeMedia.videoUrl ? (
            <video 
              src={activeMedia.videoUrl}
              controls
              playsInline
              muted
              loop
              className="w-full h-full object-contain bg-black"
            />
          ) : activeMedia.type === 'video' ? (
            /* Click to open popup video player */
            <button 
              onClick={() => setShowVideoPopup(true)} 
              className="block w-full h-full relative cursor-pointer text-left focus:outline-none"
            >
              <img 
                src={getThumbnailUrl(activeMedia.id)} 
                alt={activeMedia.name}
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#3461FF]/90 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            /* Click to open in drive */
            <a href={activeMedia.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img 
                src={getThumbnailUrl(activeMedia.id)} 
                alt={activeMedia.name}
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </a>
          )}

          {/* Carousel Navigation */}
          {post.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-10"
              >
                <ChevronLeft size={12} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-10"
              >
                <ChevronRight size={12} />
              </button>
              
              {/* Carousel Dot Indicators */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5 bg-black/40 px-1 py-0.5 rounded-full backdrop-blur-[1px]">
                {post.map((_, dotIdx) => (
                  <div 
                    key={dotIdx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      dotIdx === currentIdx ? "bg-[#3461FF] scale-110" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Info / Action Row */}
        <div className="mt-2 flex items-center justify-between text-[rgba(230,236,248,0.35)]">
          <div className="flex gap-2">
            <button className="hover:text-red-500 transition-colors">
              <Heart size={12} />
            </button>
            <button className="hover:text-white transition-colors">
              <MessageCircle size={12} />
            </button>
            <button className="hover:text-white transition-colors">
              <Send size={11} />
            </button>
          </div>
          <a 
            href={activeMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.52rem] font-bold text-[#3461FF] hover:underline"
          >
            View file &rarr;
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showVideoPopup && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            {/* Backdrop Click to Close */}
            <div className="absolute inset-0" onClick={() => setShowVideoPopup(false)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[420px] aspect-[4/5] bg-black border border-[rgba(230,236,248,0.1)] rounded-xl overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Close Button */}
              <div className="absolute top-3 right-3 z-50">
                <button 
                  onClick={() => setShowVideoPopup(false)}
                  className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:border-white/30 transition-all focus:outline-none"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Video Content */}
              <div className="flex-1 w-full h-full bg-black flex items-center justify-center">
                {activeMedia.videoUrl ? (
                  <video 
                    src={activeMedia.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe 
                    src={`https://drive.google.com/file/d/${activeMedia.id}/preview`} 
                    className="w-full h-full border-none"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: ProjectData | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const [activeTab, setActiveTab] = useState<string>("website");
  const [ttlBgTheme, setTtlBgTheme] = useState<"dark" | "light">("dark");
  const [nogahTheme, setNogahTheme] = useState<"gold-teal" | "gold-terracotta" | "white-gold" | "teal-ivory">("gold-teal");
  const [ttlLogoView, setTtlLogoView] = useState<"primary" | "submark" | "wordmark">("primary");

  const getLogoFilter = (theme: string) => {
    if (theme.startsWith("white")) {
      return "brightness(0) invert(1)";
    }
    if (theme.startsWith("teal")) {
      return "brightness(0) saturate(100%) invert(15%) sepia(36%) saturate(632%) hue-rotate(126deg) brightness(94%) contrast(92%)";
    }
    return "none";
  };

  // Reset tab on open
  useEffect(() => {
    if (isOpen && project) {
      setTtlBgTheme("dark");
      setTtlLogoView("primary");
      setNogahTheme("gold-teal");
      if (project.tabs && project.tabs.length > 0) {
        setActiveTab(project.tabs[0]);
        return;
      }
      const isHyro = project.brand.name.toLowerCase().includes("hyro");
      const isCoke = project.brand.name.toLowerCase().includes("coca-cola");
      
      if (isHyro) {
        setActiveTab("insta posts");
      } else if (isCoke) {
        setActiveTab("concept");
      } else if (project.brand.name.toLowerCase() === "bayroute") {
        setActiveTab("shoot");
      } else if (project.web !== null) {
        setActiveTab("website");
      } else if (project.social && project.social.length > 0) {
        setActiveTab("social");
      } else {
        setActiveTab("branding");
      }
    }
  }, [isOpen, project]);

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
              {(project.tabs || ["website", "social", "branding", "shoot", "insta posts", "insta reels", "reel concept", "concept", "theme"])
                .filter(tab => {
                  if (project.tabs) return true;
                  const isBayroute = project.brand.name.toLowerCase() === "bayroute";
                  const isHyro = project.brand.name.toLowerCase().includes("hyro");
                  const isCoke = project.brand.name.toLowerCase().includes("coca-cola");
                  const isBunkout = project.brand.name.toLowerCase() === "bunkout";
                  
                  if (isBunkout) {
                    if (tab === "branding") return false;
                  }
                  
                  if (isBayroute) {
                    return tab === "shoot";
                  }
                  
                  if (isHyro) {
                    return tab === "insta posts" || tab === "insta reels" || tab === "reel concept";
                  }

                  if (isCoke) {
                    return tab === "concept" || tab === "theme";
                  }
                  
                  if (tab === "shoot") return (project.shoot !== undefined && project.shoot.length > 0) || (project.smmPosts !== undefined && project.smmPosts.length > 0);
                  if (["insta posts", "insta reels", "reel concept", "concept", "theme"].includes(tab)) return false;
                  if (tab === "website") return project.web !== null;
                  if (tab === "social") return project.social && project.social.length > 0;
                  return true;
                })
                .map((tab) => (
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

              {project.smmDriveLink && (
                project.brand.name.toLowerCase().includes("avec amour") || 
                project.brand.name.toLowerCase().includes("vinnin") || 
                (project.brand.name.toLowerCase().includes("dressing room") && activeTab.toLowerCase().includes("social")) ||
                (project.brand.name.toLowerCase().includes("bayroute") && activeTab.toLowerCase().includes("shoot")) ||
                (project.brand.name.toLowerCase().includes("hyro") && activeTab.toLowerCase().includes("shoot")) ||
                (project.brand.name.toLowerCase().includes("etnica") && activeTab.toLowerCase().includes("shoot")) ||
                (project.brand.name.toLowerCase().includes("soup") && activeTab.toLowerCase().includes("social"))
              ) && (
                <a
                  href={project.smmDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-[0.72rem] font-semibold tracking-[0.1em] uppercase rounded border bg-transparent border-[rgba(230,236,248,0.12)] hover:border-[#3461FF] hover:bg-[#3461FF] text-[rgba(230,236,248,0.75)] hover:text-white transition-all flex items-center gap-1.5"
                >
                  {(project.brand.name.toLowerCase().includes("etnica") || project.brand.name.toLowerCase().includes("soup")) ? "View All Of Our Work" : "View More Work"}
                  <ExternalLink size={11} className="opacity-80" />
                </a>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col p-5 lg:p-6 overflow-y-auto custom-scrollbar relative">
              <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(230, 236, 248, 0.12);
                  border-radius: 9999px;
                  transition: background 0.3s;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #3461FF;
                }
              `}</style>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between min-h-full"
                >
                  {/* WEBSITE TAB */}
                  {(activeTab.toLowerCase().includes("web") || activeTab === "website") && project.web !== null && (
                    <div className="flex-1 flex flex-col justify-between gap-3 h-full">
                      {/* Browser mock container */}
                      <div className="border border-[rgba(230,236,248,0.07)] rounded-lg overflow-hidden flex flex-col flex-1">
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
                          className="w-full flex-1 flex flex-col items-center justify-center text-center p-6 lg:p-8 relative"
                          style={{ background: `linear-gradient(160deg, ${project.brand.colors[0]} 0%, ${project.brand.colors[1] || '#050B1A'} 100%)` }}
                        >
                          <div className="relative z-10 flex flex-col items-center justify-center">
                            {/* Logo Box */}
                            {project.brand.logo ? (
                              <img src={project.brand.logo} alt={project.brand.name} className="max-w-[36px] max-h-[36px] object-contain drop-shadow-lg mb-4" />
                            ) : (
                              <div className="w-[36px] h-[36px] rounded-[8px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center mb-4">
                                <span className="text-[0.9rem] font-serif text-[rgba(255,255,255,0.9)]">{project.brand.name.substring(0, 2).toUpperCase()}</span>
                              </div>
                            )}

                            <h3 
                              className="text-[1.3rem] mb-0.5"
                              style={{ color: project.brand.colors[1] || '#E6ECF8', fontFamily: project.brand.font || "Georgia, serif" }}
                            >
                              {project.web.title || project.brand.name}
                            </h3>
                            
                            <div className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase mt-0.5 mb-3" style={{ color: 'rgba(230,236,248,0.4)' }}>
                              BEYOND EXPERIENCE
                            </div>

                            <div className="w-[24px] h-[1px] opacity-20 my-3" style={{ background: '#E6ECF8' }} />

                            <p className="text-[0.72rem] max-w-[420px] leading-[1.6] text-[rgba(230,236,248,0.6)] mt-1 font-medium">
                              {project.web.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.web.meta.map((m, i) => (
                          <div key={i} className="bg-[#0A1128] border border-[rgba(230,236,248,0.04)] rounded-lg p-3.5 flex flex-col justify-center">
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-1.5">{m.l}</div>
                            <div className="text-[0.78rem] text-white font-bold">{m.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AIRBNB LISTING TAB */}
                  {activeTab.toLowerCase().includes("airbnb") && project.airbnb && (
                    <div className="flex-1 flex flex-col justify-between gap-3 h-full">
                      {/* Browser mock container */}
                      <div className="border border-[rgba(230,236,248,0.07)] rounded-lg overflow-hidden flex flex-col flex-1">
                        {/* Browser Bar */}
                        <div className="flex items-center px-4 py-3 bg-[#0C1530] border-b border-[rgba(230,236,248,0.07)]">
                          <div className="flex gap-2 w-1/4">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                          </div>
                          <div className="flex-1 text-center flex justify-center">
                            <div className="bg-[#111D3E] rounded px-4 py-1.5 text-[0.65rem] text-[rgba(230,236,248,0.4)] font-medium tracking-[0.02em] w-full max-w-[400px] text-left overflow-hidden text-ellipsis whitespace-nowrap">
                              airbnb.co.in/users/profile/1469222464763297439
                            </div>
                          </div>
                          <div className="w-1/4 flex justify-end">
                            <a href={project.airbnb.url} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] font-bold tracking-[0.02em] text-[#FF385C] hover:text-white transition-colors flex items-center gap-1">
                              Visit Live &rarr;
                            </a>
                          </div>
                        </div>

                        {/* Browser Screen */}
                        <div 
                          className="w-full flex-1 flex flex-col items-center justify-center text-center p-6 lg:p-8 relative"
                          style={{ background: 'linear-gradient(160deg, #FF385C 0%, #050B1A 100%)' }}
                        >
                          <div className="relative z-10 flex flex-col items-center justify-center">
                            {/* Airbnb Logo */}
                            <svg viewBox="0 0 32 32" className="w-9 h-9 fill-current text-white drop-shadow-lg mb-4">
                              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836 1.458 3.402 1.353 6.282-.312 8.423C26.544 30.569 23.79 31 20.5 31c-1.848 0-3.327-.272-4.5-1-1.173.728-2.652 1-4.5 1-3.29 0-6.044-.431-7.571-2.472-1.665-2.141-1.77-5.021-.312-8.423 1.01-2.366 5.215-11.127 7.103-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.286 0-2.18.59-3.056 2.148l-.49 1.002C10.51 10.024 6.275 18.847 5.251 21.23c-1.157 2.698-1.096 4.75.05 6.223C6.39 28.91 8.56 29 11.5 29c1.603 0 2.871-.247 3.86-.8a1 1 0 0 1 1.28.163l.08.09c.642.793 1.83 1.285 3.398 1.488L20.5 29c2.94 0 5.11-.09 6.198-1.547 1.147-1.473 1.208-3.525.05-6.223-.974-2.274-5.207-11.085-7.192-15.067l-.49-1.002C18.18 3.59 17.286 3 16 3zm0 9a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>

                            <h3 
                              className="text-[1.3rem] mb-0.5 text-white font-bold tracking-tight"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              {project.airbnb.title}
                            </h3>
                            
                            <div className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase mt-0.5 mb-3 text-white/50">
                              EXPERIENCE LUXURY STAYS
                            </div>

                            <div className="w-[24px] h-[1px] bg-white/20 my-3" />

                            <p className="text-[0.72rem] max-w-[420px] leading-[1.6] text-white/70 mt-1 font-medium">
                              {project.airbnb.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.airbnb.meta.map((m, i) => (
                          <div key={i} className="bg-[#0A1128] border border-[rgba(230,236,248,0.04)] rounded-lg p-3.5 flex flex-col justify-center">
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-1.5">{m.l}</div>
                            <div className="text-[0.78rem] text-white font-bold">{m.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SOCIAL TAB */}
                  {(activeTab.toLowerCase().includes("social") || activeTab === "social") && (
                    project.social && project.social.length > 0 ? (
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
                    ) : project.smmPosts ? (
                      <div className="w-full pr-1 flex flex-col gap-6 pb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {(project.brand.name.toLowerCase() === 'bunkout' 
                            ? project.smmPosts.slice(0, 3) 
                            : project.smmPosts
                          ).map((post, i) => (
                            <SMMPostCard 
                              key={i} 
                              post={post} 
                              postIndex={i} 
                              brandName={project.brand.name}
                              brandLogo={project.brand.logo}
                              brandUrl={project.web?.url}
                            />
                          ))}
                        </div>
                        {project.smmDriveLink && (
                          <div className="flex justify-center mt-6 mb-4">
                            <a
                              href={project.brand.name.toLowerCase() === 'bunkout' ? "https://drive.google.com/drive/folders/1jxXsVWq1FnyegBhdZQLNTS37a-3Gjvez?usp=sharing" : project.smmDriveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2.5 bg-[rgba(230,236,248,0.02)] hover:bg-[#3461FF] text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase rounded border border-[rgba(230,236,248,0.1)] hover:border-[#3461FF] transition-all flex items-center gap-2 group"
                            >
                              {project.brand.name.toLowerCase() === 'bunkout' ? 'view more of our brand work' : 'view more of our work'}
                              <ExternalLink size={12} className="text-[rgba(230,236,248,0.5)] group-hover:text-white transition-colors" />
                            </a>
                          </div>
                        )}
                      </div>
                    ) : null
                  )}

                  {/* SHOOT TAB */}
                  {(activeTab.toLowerCase().includes("shoot") || activeTab === "shoot") && (
                    project.smmPosts ? (
                      <div className="w-full pr-1 flex flex-col gap-6 pb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.smmPosts.map((post, i) => (
                            <SMMPostCard 
                              key={i} 
                              post={post} 
                              postIndex={i} 
                              brandName={project.brand.name}
                              brandLogo={project.brand.logo}
                              brandUrl={project.web?.url}
                            />
                          ))}
                        </div>
                        {project.smmDriveLink && project.brand.name.toLowerCase() !== 'bunkout' && (
                          <div className="flex justify-center mt-6 mb-4">
                            <a
                              href={project.smmDriveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2.5 bg-[rgba(230,236,248,0.02)] hover:bg-[#3461FF] text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase rounded border border-[rgba(230,236,248,0.1)] hover:border-[#3461FF] transition-all flex items-center gap-2 group"
                            >
                              view more of our work
                              <ExternalLink size={12} className="text-[rgba(230,236,248,0.5)] group-hover:text-white transition-colors" />
                            </a>
                          </div>
                        )}
                      </div>
                    ) : project.shoot ? (
                      <div className="flex-1 flex flex-col h-full">
                        <div className="grid grid-cols-3 grid-rows-2 gap-3 flex-1 h-full">
                          {project.shoot.slice(0, 6).map((img, i) => (
                            <div key={i} className="relative rounded-lg overflow-hidden border border-[rgba(230,236,248,0.07)] group h-full">
                              <img 
                                src={img} 
                                alt={`Shoot ${i + 1}`} 
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105" 
                              />
                              <div className="absolute inset-0 bg-[rgba(5,11,26,0.1)] transition-colors duration-300 group-hover:bg-transparent" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : project.instaReels ? (
                      <div className="space-y-4">
                        <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-[rgba(230,236,248,0.05)] text-center min-h-[260px]" style={{ background: '#0C1530' }}>
                          <div className="w-12 h-12 rounded-full bg-[#3461FF] bg-opacity-20 flex items-center justify-center mb-4">
                            <ExternalLink size={20} className="text-[#3461FF]" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1.5">View Campaign Shoot</h3>
                          <p className="text-[rgba(230,236,248,0.6)] text-[0.75rem] mb-6 max-w-[360px]">Access the complete library of high-quality campaign reel and shoot content we produced on Google Drive.</p>
                          <a 
                            href={project.instaReels} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-6 py-2.5 bg-[#3461FF] hover:bg-[#204af5] text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase rounded transition-colors"
                          >
                            Open Drive Folder
                          </a>
                        </div>
                      </div>
                    ) : null
                  )}

                  {/* PACKAGING TAB */}
                  {(activeTab.toLowerCase().includes("packag") || activeTab === "packaging") && project.packaging && (
                    <div className="flex-1 flex flex-col h-full pb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 h-full">
                        {project.packaging.map((img, i) => (
                          <div key={i} className="relative rounded-xl overflow-hidden border border-[rgba(230,236,248,0.07)] group aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                            <img 
                              src={img} 
                              alt={`Packaging ${i + 1}`} 
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-[rgba(5,11,26,0.1)] transition-colors duration-300 group-hover:bg-transparent" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* INSTA POSTS TAB (Hyro) */}
                  {activeTab === "insta posts" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.social.map((post, i) => (
                          <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            key={i} 
                            className="group relative aspect-[4/5] border border-[rgba(230,236,248,0.07)] rounded-xl flex flex-col overflow-hidden text-left transition-colors duration-300 hover:border-white/20 p-6"
                            style={{ background: post.bg }}
                          >
                            {post.image && (
                              <>
                                <img src={post.image} alt={post.type} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 transition-transform duration-[600ms] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,26,0.95)] via-[rgba(5,11,26,0.5)] to-transparent z-10 transition-opacity duration-[600ms]" />
                              </>
                            )}
                            <div className="relative z-20 flex flex-col justify-end h-full w-full">
                              <div className="text-[0.55rem] font-bold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.4)] mb-2">{post.type}</div>
                              <p className="text-[0.85rem] font-serif leading-[1.5] text-white drop-shadow-md" style={{ fontFamily: project.brand.font }}>{post.copy}</p>
                              <div className="w-[20px] h-[1px] bg-[rgba(255,255,255,0.3)] mt-4"></div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* INSTA REELS TAB (Hyro) */}
                  {activeTab === "insta reels" && (
                    <div className="space-y-4">
                      <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-[rgba(230,236,248,0.05)] text-center min-h-[260px]" style={{ background: '#0C1530' }}>
                        <div className="w-12 h-12 rounded-full bg-[#3461FF] bg-opacity-20 flex items-center justify-center mb-4">
                          <ExternalLink size={20} className="text-[#3461FF]" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1.5">View All Reels</h3>
                        <p className="text-[rgba(230,236,248,0.6)] text-[0.75rem] mb-6 max-w-[360px]">Access the complete library of high-quality reel content we produced for Hyro on Google Drive.</p>
                        <a 
                          href={project.instaReels} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-6 py-2.5 bg-[#3461FF] hover:bg-[#204af5] text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase rounded transition-colors"
                        >
                          Open Drive Folder
                        </a>
                      </div>
                    </div>
                  )}

                  {/* REEL CONCEPT TAB (Hyro) */}
                  {activeTab === "reel concept" && (
                    <div className="space-y-4">
                      <div className="p-6 lg:p-8 rounded-xl border border-[rgba(230,236,248,0.05)] relative overflow-hidden" style={{ background: '#0C1530' }}>
                        <h4 className="text-[0.6rem] font-bold text-[#3461FF] uppercase tracking-[0.15em] mb-4 text-center">The Concept</h4>
                        <div className="text-[0.82rem] leading-[1.6] text-[rgba(230,236,248,0.8)] whitespace-pre-line relative z-10 max-w-[800px] mx-auto text-center font-medium">
                          {project.brand.details}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONCEPT TAB */}
                  {(activeTab.toLowerCase() === "concept" || activeTab.toLowerCase().includes("campaign")) && (
                    project.campaign ? (
                      <div className="flex-1 flex flex-col h-full">
                        <div className="p-5 lg:p-6 rounded-xl border border-[rgba(230,236,248,0.05)] text-center flex-1 flex flex-col justify-between h-full" style={{ background: '#0C1530' }}>
                          <div>
                            <h4 className="text-[0.6rem] font-bold text-[#FF5555] uppercase tracking-[0.15em] mb-1.5">Campaign Name</h4>
                            <h3 className="text-[1.1rem] lg:text-[1.3rem] font-bold text-white tracking-[-0.02em] leading-tight mb-3">
                              {project.campaign.name}
                            </h3>
                          </div>
                          
                          <div className="flex-1 w-full max-w-[680px] mx-auto relative rounded-lg overflow-hidden border border-[rgba(230,236,248,0.1)] shadow-2xl min-h-[220px]">
                            <video 
                              src={project.campaign.video} 
                              controls 
                              playsInline 
                              autoPlay
                              muted
                              loop
                              className="absolute inset-0 w-full h-full object-contain bg-black/40"
                            />
                          </div>
                        </div>
                      </div>
                    ) : project.conceptText ? (
                      <div className="space-y-4 h-full flex flex-col justify-center">
                        <div className="p-6 lg:p-8 rounded-xl border border-[rgba(230,236,248,0.05)] min-h-[260px] flex flex-col items-center justify-center relative overflow-hidden" style={{ background: '#0C1530' }}>
                          {/* Decorative Background Element */}
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full blur-[100px] opacity-10 pointer-events-none" 
                            style={{ backgroundColor: project.brand.colors[0] || '#3461FF' }}
                          />
                          
                          <h4 
                            className="text-[0.6rem] font-bold uppercase tracking-[0.15em] mb-4 relative z-10"
                            style={{ color: project.brand.colors[3] || project.brand.colors[0] || '#3461FF' }}
                          >
                            The Concept
                          </h4>
                          <div 
                            className="text-[0.95rem] lg:text-[1.1rem] leading-[1.7] text-[rgba(230,236,248,0.9)] relative z-10 max-w-[800px] text-center font-medium whitespace-pre-line"
                            style={{ fontFamily: project.brand.font || 'Inter' }}
                          >
                            {project.conceptText}
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}

                  {/* THEME TAB (Coca-Cola) */}
                  {activeTab === "theme" && project.campaign && (
                    <div className="space-y-4 h-full">
                      <div className="p-6 lg:p-8 rounded-xl border border-[rgba(230,236,248,0.05)] min-h-[260px] flex flex-col items-center justify-center relative overflow-hidden" style={{ background: '#0C1530' }}>
                        {/* Decorative Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#E31837] rounded-full blur-[100px] opacity-10 pointer-events-none" />
                        
                        <h4 className="text-[0.6rem] font-bold text-[#FF5555] uppercase tracking-[0.15em] mb-4 relative z-10">The Theme</h4>
                        <div className="text-[0.95rem] lg:text-[1.1rem] leading-[1.7] text-[rgba(230,236,248,0.9)] relative z-10 max-w-[800px] text-center font-medium">
                          {project.campaign.theme}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BRANDING TAB */}
                  {(activeTab.toLowerCase().includes("brand") || activeTab.toLowerCase().includes("logo") || activeTab === "branding") && (
                    project.brand.name.toLowerCase() === "bunkout" ? (
                      <div className="flex-1 flex flex-col gap-4 pr-1 h-full">
                        {/* Row 1: Logos (Submark & Wordmark beside each other) */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Submark Card */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-4 flex flex-col items-center justify-center h-full">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">SUBMARK</span>
                            <div className="w-[80px] h-[80px] bg-white rounded-lg flex items-center justify-center p-2 shadow-inner">
                              <img src="/brand-logos/bunkout-submark.png" alt="Submark" className="max-w-full max-h-full object-contain" />
                            </div>
                          </div>

                          {/* Wordmark Card */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-4 flex flex-col items-center justify-center h-full">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">WORDMARK</span>
                            <div className="w-full max-w-[200px] h-[80px] bg-white rounded-lg flex items-center justify-center p-2 shadow-inner">
                              <img src="/brand-logos/bunkout-wordmark.png" alt="Wordmark" className="max-w-full max-h-full object-contain" />
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Typography & Colour Palette */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Primary Font: Kiona */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-4 flex flex-col justify-center h-full">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-2.5">PRIMARY FONT: KIONA</span>
                            <div style={{ fontFamily: 'Kiona' }} className="text-white">
                              <div className="text-[1.05rem] tracking-wider leading-none mb-1.5">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[0.9rem] tracking-wider leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>

                          {/* Paragraph Font: Montserrat */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-4 flex flex-col justify-center h-full">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-2.5">PARAGRAPH FONT: MONTSERRAT</span>
                            <div style={{ fontFamily: 'Montserrat' }} className="text-white font-medium">
                              <div className="text-[0.95rem] tracking-normal leading-none mb-1.5">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[0.8rem] tracking-normal leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>

                          {/* Colour Palette */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-4 flex flex-col justify-center items-center h-full">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-4">COLOUR PALETTE</span>
                            <div className="grid grid-cols-3 gap-3 w-full justify-center">
                              {/* Green Block */}
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-full aspect-[2/1] rounded border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#123E3F' }} />
                                <div className="text-center">
                                  <div className="text-[0.6rem] font-bold text-white tracking-[0.05em] uppercase">GREEN</div>
                                  <div className="text-[0.5rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#123E3F</div>
                                </div>
                              </div>

                              {/* Beige Block */}
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-full aspect-[2/1] rounded border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#C4A56F' }} />
                                <div className="text-center">
                                  <div className="text-[0.6rem] font-bold text-white tracking-[0.05em] uppercase">BEIGE</div>
                                  <div className="text-[0.5rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#C4A56F</div>
                                </div>
                              </div>

                              {/* Ivory Block */}
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-full aspect-[2/1] rounded border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#F7F8F8' }} />
                                <div className="text-center">
                                  <div className="text-[0.6rem] font-bold text-white tracking-[0.05em] uppercase">IVORY</div>
                                  <div className="text-[0.5rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#F7F8F8</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.brand.name.toLowerCase().includes("dressing room") ? (
                      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar flex flex-col gap-6 h-full">
                        {/* Top Row: Submark and Logo spec */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Brand Logo Card */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-4">PRIMARY LOGO</span>
                            <div className="w-[140px] h-[140px] bg-white rounded-lg flex items-center justify-center p-4 shadow-inner">
                              <img src="/brand-logos/Tdr.png" alt="Primary Logo" className="max-w-full max-h-full object-contain" />
                            </div>
                          </div>

                          {/* Brand Details / Style Card */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[220px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">BRAND IDENTIFIER</span>
                            <h3 className="text-xl font-serif text-[#B29C8A] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>The Dressing Room</h3>
                            <p className="text-[0.72rem] leading-relaxed text-[rgba(230,236,248,0.6)] font-medium">
                              A premium fashion brand focusing on chic, contemporary wear for women. The branding reflects elegance, sophisticated curation, and modern aesthetics.
                            </p>
                          </div>
                        </div>

                        {/* Middle Row: Typography */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Primary Font Specimen: Cinzel */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">PRIMARY FONT: CINZEL</span>
                            <div style={{ fontFamily: 'Cinzel, serif' }} className="text-white">
                              <div className="text-[1.3rem] tracking-wider leading-none mb-2">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[1.1rem] tracking-wider leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>

                          {/* Paragraph Font Specimen: Montserrat */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">PARAGRAPH FONT: MONTSERRAT</span>
                            <div style={{ fontFamily: 'Montserrat' }} className="text-white font-medium">
                              <div className="text-[1.2rem] tracking-normal leading-none mb-2">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[1rem] tracking-normal leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Row: Colour Palette */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col items-center">
                          <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-6">COLOUR PALETTE</span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[600px] justify-center">
                            {/* Ivory */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#FFF6EE' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">IVORY</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#FFF6EE</div>
                              </div>
                            </div>

                            {/* Taupe Brown */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#8E776B' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">TAUPE BROWN</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#8E776B</div>
                              </div>
                            </div>

                            {/* Beige */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#B29C8A' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">BEIGE</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#B29C8A</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.brand.name.toLowerCase().includes("vinnin") ? (
                      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar flex flex-col gap-6 h-full">
                        {/* Top Row: Logo and Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Brand Logo Card */}
                          <div className="bg-[#05050A] border border-[rgba(138,43,226,0.15)] rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] shadow-[0_0_20px_rgba(138,43,226,0.05)]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-4">PRIMARY LOGO</span>
                            <div className="w-[140px] h-[140px] bg-[#05050A] border border-[rgba(230,236,248,0.05)] rounded-lg flex items-center justify-center p-4">
                              <img src="/brand-logos/Logo (4).png" alt="Primary Logo" className="max-w-full max-h-full object-contain" />
                            </div>
                          </div>

                          {/* Brand Details / Style Card */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[220px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">BRAND IDENTIFIER</span>
                            <h3 className="text-xl font-extrabold text-[#8A2BE2] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>Vinnin</h3>
                            <p className="text-[0.72rem] leading-relaxed text-[rgba(230,236,248,0.6)] font-medium">
                              Vinnin is a contemporary streetwear fashion brand. The visual identity emphasizes high-contrast purple hues, heavy typography, and underground culture vibes.
                            </p>
                          </div>
                        </div>

                        {/* Middle Row: Typography */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Primary Font Specimen: Outfit */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">PRIMARY FONT: OUTFIT</span>
                            <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-white">
                              <div className="text-[1.4rem] font-black tracking-wide leading-none mb-2">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[1.1rem] font-bold tracking-wide leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>

                          {/* Paragraph Font Specimen: Montserrat */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                            <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-3">PARAGRAPH FONT: MONTSERRAT</span>
                            <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-white font-medium">
                              <div className="text-[1.2rem] tracking-normal leading-none mb-2">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                              <div className="text-[1rem] tracking-normal leading-none">0 1 2 3 4 5 6 7 8 9</div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Row: Colour Palette */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col items-center">
                          <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-6">COLOUR PALETTE</span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[640px] justify-center">
                            {/* Electric Purple */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#8A2BE2' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.65rem] font-bold text-white tracking-[0.1em] uppercase">ELECTRIC PURPLE</div>
                                <div className="text-[0.58rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#8A2BE2</div>
                              </div>
                            </div>

                            {/* Void Black */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#05050A' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.65rem] font-bold text-white tracking-[0.1em] uppercase">VOID BLACK</div>
                                <div className="text-[0.58rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#05050A</div>
                              </div>
                            </div>

                            {/* White */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#FFFFFF' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.65rem] font-bold text-white tracking-[0.1em] uppercase">WHITE</div>
                                <div className="text-[0.58rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#FFFFFF</div>
                              </div>
                            </div>

                            {/* Soft Purple */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#F0E6FA' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.65rem] font-bold text-white tracking-[0.1em] uppercase">SOFT PURPLE</div>
                                <div className="text-[0.58rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#F0E6FA</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.brand.name.toLowerCase().includes("travel library") ? (
                      <div className="flex-1 flex flex-col gap-6 pr-1">
                        {/* Interactive Logo Showcase */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full">
                          {/* Left: Selector / Description buttons */}
                          <div className="lg:col-span-5 flex flex-col gap-3">
                            <button
                              onClick={() => setTtlLogoView("primary")}
                              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                                ttlLogoView === "primary"
                                  ? "bg-[#0C1530] border-[#D2BB95]/40 shadow-[0_0_15px_rgba(210,187,149,0.05)]"
                                  : "bg-transparent border-[rgba(230,236,248,0.05)] hover:border-[rgba(230,236,248,0.15)]"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[0.55rem] font-mono tracking-wider text-[#D2BB95]">01.</span>
                                <span className="text-[0.8rem] font-bold text-white uppercase tracking-wider">Primary Logo</span>
                              </div>
                              <p className="text-[0.68rem] text-[rgba(230,236,248,0.5)] leading-relaxed font-medium">
                                This is the main logo unit that comprises of both the brand submark and the brand wordmark.
                              </p>
                            </button>

                            <button
                              onClick={() => setTtlLogoView("submark")}
                              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                                ttlLogoView === "submark"
                                  ? "bg-[#0C1530] border-[#D2BB95]/40 shadow-[0_0_15px_rgba(210,187,149,0.05)]"
                                  : "bg-transparent border-[rgba(230,236,248,0.05)] hover:border-[rgba(230,236,248,0.15)]"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[0.55rem] font-mono tracking-wider text-[#D2BB95]">02.</span>
                                <span className="text-[0.8rem] font-bold text-white uppercase tracking-wider">Brand Submark</span>
                              </div>
                              <p className="text-[0.68rem] text-[rgba(230,236,248,0.5)] leading-relaxed font-medium">
                                The logo submark, a simplified version of primary logo unit, is a graphical symbol that represents the brand. Intended for use in smaller spaces.
                              </p>
                            </button>

                            <button
                              onClick={() => setTtlLogoView("wordmark")}
                              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                                ttlLogoView === "wordmark"
                                  ? "bg-[#0C1530] border-[#D2BB95]/40 shadow-[0_0_15px_rgba(210,187,149,0.05)]"
                                  : "bg-transparent border-[rgba(230,236,248,0.05)] hover:border-[rgba(230,236,248,0.15)]"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[0.55rem] font-mono tracking-wider text-[#D2BB95]">03.</span>
                                <span className="text-[0.8rem] font-bold text-white uppercase tracking-wider">Brand Wordmark</span>
                              </div>
                              <p className="text-[0.68rem] text-[rgba(230,236,248,0.5)] leading-relaxed font-medium">
                                The brand wordmark, also called logotype, is a variation of the logo that includes only the brand name — no symbols, icons, or shapes.
                              </p>
                            </button>
                          </div>

                          {/* Right: Live Preview Box */}
                          <div className="lg:col-span-7 border border-[rgba(230,236,248,0.07)] rounded-xl overflow-hidden flex flex-col min-h-[300px]">
                            {/* Control Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#0C1530] border-b border-[rgba(230,236,248,0.07)]">
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                              </div>
                              <div className="flex items-center gap-1.5 bg-[#111D3E] p-0.5 rounded-md">
                                <button
                                  onClick={() => setTtlBgTheme("dark")}
                                  className={`px-3 py-1 rounded text-[0.55rem] font-bold uppercase transition-all ${
                                    ttlBgTheme === "dark"
                                      ? "bg-[#3461FF] text-white shadow-sm"
                                      : "text-[rgba(230,236,248,0.4)] hover:text-white"
                                  }`}
                                >
                                  Dark Navy
                                </button>
                                <button
                                  onClick={() => setTtlBgTheme("light")}
                                  className={`px-3 py-1 rounded text-[0.55rem] font-bold uppercase transition-all ${
                                    ttlBgTheme === "light"
                                      ? "bg-[#E6ECF8] text-[#0A1020] shadow-sm"
                                      : "text-[rgba(230,236,248,0.4)] hover:text-white"
                                  }`}
                                >
                                  Ivory Light
                                </button>
                              </div>
                              <div className="text-[0.55rem] font-mono text-[rgba(230,236,248,0.3)] uppercase">
                                Live Render
                              </div>
                            </div>

                            {/* Render Container */}
                            <div 
                              className="flex-1 flex flex-col items-center justify-center p-8 transition-colors duration-500 relative min-h-[220px]"
                              style={{ backgroundColor: ttlBgTheme === "dark" ? "#1D2439" : "#F4F2F0" }}
                            >
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={`${ttlLogoView}-${ttlBgTheme}`}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.25 }}
                                  className="flex flex-col items-center select-none"
                                >
                                  {ttlLogoView === "primary" && (
                                    <div className="flex flex-col items-center gap-5 py-4 select-none">
                                      {/* Submark */}
                                      <div 
                                        className="flex items-center justify-center border rounded-[14px] w-[56px] h-[72px] transition-all duration-300"
                                        style={{ 
                                          borderColor: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439",
                                          color: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439",
                                          borderWidth: '1.2px'
                                        }}
                                      >
                                        <span className="text-[2.0rem] font-normal leading-none" style={{ fontFamily: 'Butler', letterSpacing: '-0.06em', marginLeft: '-0.04em' }}>
                                          TL
                                        </span>
                                      </div>
                                      {/* Wordmark */}
                                      <div className="flex flex-col items-center text-center">
                                        <h2 
                                          className="text-[1.45rem] font-normal leading-tight transition-colors duration-300" 
                                          style={{ 
                                            fontFamily: 'Butler',
                                            color: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439"
                                          }}
                                        >
                                          The Travel Library<sup className="text-[0.55em] ml-0.5" style={{ top: '-0.2em' }}>®</sup>
                                        </h2>
                                        <div 
                                          className="text-[0.44rem] font-semibold tracking-[0.35em] mt-1 transition-colors duration-300" 
                                          style={{ 
                                            fontFamily: 'Montserrat',
                                            color: ttlBgTheme === "dark" ? "rgba(244, 242, 240, 0.6)" : "rgba(29, 36, 57, 0.6)"
                                          }}
                                        >
                                          BEYOND EXPERIENCE
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {ttlLogoView === "submark" && (
                                    <div className="flex flex-col items-center py-4 select-none">
                                      <div 
                                        className="flex items-center justify-center border rounded-[18px] w-[86px] h-[110px] transition-all duration-300"
                                        style={{ 
                                          borderColor: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439",
                                          color: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439",
                                          borderWidth: '1.5px'
                                        }}
                                      >
                                        <span className="text-[3.2rem] font-normal leading-none" style={{ fontFamily: 'Butler', letterSpacing: '-0.06em', marginLeft: '-0.04em' }}>
                                          TL
                                        </span>
                                      </div>
                                    </div>
                                  )}

                                  {ttlLogoView === "wordmark" && (
                                    <div className="flex flex-col items-center text-center py-4 select-none">
                                      <h1 
                                        className="text-[1.9rem] font-normal leading-tight transition-colors duration-300" 
                                        style={{ 
                                          fontFamily: 'Butler',
                                          color: ttlBgTheme === "dark" ? "#D2BB95" : "#1D2439"
                                        }}
                                      >
                                        The Travel Library<sup className="text-[0.55em] ml-0.5" style={{ top: '-0.2em' }}>®</sup>
                                      </h1>
                                      <div 
                                        className="text-[0.48rem] font-semibold tracking-[0.35em] mt-1.5 transition-colors duration-300" 
                                        style={{ 
                                          fontFamily: 'Montserrat',
                                          color: ttlBgTheme === "dark" ? "rgba(244, 242, 240, 0.6)" : "rgba(29, 36, 57, 0.6)"
                                        }}
                                      >
                                        BEYOND EXPERIENCE
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                        {/* Middle Row: Typography */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                          {/* Header Font */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex items-start gap-6 min-h-[160px]">
                            <div style={{ fontFamily: 'Butler' }} className="text-[#D2BB95] text-[4rem] leading-none select-none">
                              Aa
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <span className="text-[0.5rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-1">HEADER FONT</span>
                              <h3 style={{ fontFamily: 'Butler' }} className="text-[1.2rem] font-normal text-white mb-2 leading-none">Butler</h3>
                              <div style={{ fontFamily: 'Butler' }} className="text-[0.65rem] text-[rgba(230,236,248,0.6)] leading-relaxed tracking-wider break-all">
                                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                                <div className="mt-0.5">abcdefghijklmnopqrstuvwxyz</div>
                                <div className="mt-0.5">0123456789</div>
                              </div>
                            </div>
                          </div>

                          {/* Body Font */}
                          <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex items-start gap-6 min-h-[160px]">
                            <div style={{ fontFamily: 'Montserrat' }} className="text-[#D2BB95] text-[3.2rem] leading-none select-none font-medium mt-1">
                              Aa
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <span className="text-[0.5rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-1">BODY & PARAGRAPH FONT</span>
                              <h3 style={{ fontFamily: 'Montserrat' }} className="text-[1.1rem] font-bold text-white mb-2 leading-none">Montserrat</h3>
                              <div style={{ fontFamily: 'Montserrat' }} className="text-[0.62rem] text-[rgba(230,236,248,0.6)] leading-relaxed tracking-normal font-medium break-all">
                                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                                <div className="mt-0.5">abcdefghijklmnopqrstuvwxyz</div>
                                <div className="mt-0.5">0123456789</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Row: Colour Palette */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-6 flex flex-col items-center">
                          <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.3)] mb-6">COLOUR PALETTE</span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[700px] justify-center">
                            {/* Blue Block */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#1D2439' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">BLUE</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#1D2439</div>
                              </div>
                            </div>

                            {/* Gold Block */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#D2BB95' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">GOLD</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#D2BB95 + #A88F71</div>
                              </div>
                            </div>

                            {/* Ivory Block */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-full aspect-[2/1] rounded-lg shadow-sm border border-[rgba(255,255,255,0.05)]" style={{ backgroundColor: '#F4F2F0' }} />
                              <div className="text-center mt-1">
                                <div className="text-[0.7rem] font-bold text-white tracking-[0.1em] uppercase">IVORY</div>
                                <div className="text-[0.62rem] font-mono text-[rgba(230,236,248,0.4)] mt-0.5">#F4F2F0</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.brand.name.toLowerCase().includes("nogah") ? (
                      <div className="flex-1 grid grid-cols-2 gap-4 pr-1 h-full min-h-0 items-center overflow-y-auto custom-scrollbar">
                        {/* 1. Brand Submark */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-3.5 flex flex-col justify-between aspect-[3/2] relative group overflow-hidden w-full">
                          <div className="flex-none mb-1.5">
                            <span className="text-[0.52rem] font-bold tracking-[0.2em] uppercase text-[#E5D1A3] block leading-none mb-1">01. Identity</span>
                            <h3 className="text-[0.72rem] font-extrabold text-white uppercase tracking-wider leading-none">Brand Submark</h3>
                          </div>
                          
                          {/* Logo container bg is #173331 matching the image background for a seamless look */}
                          <div className="flex-1 w-full bg-[#173331] rounded-lg flex items-center justify-center overflow-hidden relative min-h-0">
                            <img 
                              src="/brands/nogah/nogah-submark.png" 
                              alt="Nogah Submark" 
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Hover description overlay so no scroll is needed */}
                            <div className="absolute inset-0 bg-[#0C1530]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-3 text-center">
                              <span className="text-[0.62rem] text-[#E5D1A3] font-bold uppercase tracking-wider mb-1">Brand Submark</span>
                              <p className="text-[0.52rem] text-[rgba(230,236,248,0.75)] leading-relaxed">
                                A simplified emblem optimized for smaller spaces, packaging stamps, and digital icons.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 2. Brand Wordmark */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-3.5 flex flex-col justify-between aspect-[3/2] relative group overflow-hidden w-full">
                          <div className="flex-none mb-1.5">
                            <span className="text-[0.52rem] font-bold tracking-[0.2em] uppercase text-[#E5D1A3] block leading-none mb-1">02. Logotype</span>
                            <h3 className="text-[0.72rem] font-extrabold text-white uppercase tracking-wider leading-none">Brand Wordmark</h3>
                          </div>
                          
                          {/* Logo container bg is #173331 matching the image background for a seamless look */}
                          <div className="flex-1 w-full bg-[#173331] rounded-lg flex items-center justify-center overflow-hidden relative min-h-0">
                            <img 
                              src="/brands/nogah/nogah-wordmark.png" 
                              alt="Nogah Wordmark" 
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Hover description overlay so no scroll is needed */}
                            <div className="absolute inset-0 bg-[#0C1530]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-3 text-center">
                              <span className="text-[0.62rem] text-[#E5D1A3] font-bold uppercase tracking-wider mb-1">Brand Wordmark</span>
                              <p className="text-[0.52rem] text-[rgba(230,236,248,0.75)] leading-relaxed">
                                Clean typographic representation containing only the brand name. Used on official stationery and signage.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 3. Brand Colours */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-3.5 flex flex-col justify-between aspect-[3/2] relative w-full">
                          <div className="flex-none mb-1">
                            <span className="text-[0.52rem] font-bold tracking-[0.2em] uppercase text-[#E5D1A3] block leading-none mb-1">03. Palette</span>
                            <h3 className="text-[0.72rem] font-extrabold text-white uppercase tracking-wider leading-none">Brand Colours</h3>
                          </div>

                          {/* 5 color blocks taking up all available space */}
                          <div className="flex-1 w-full grid grid-cols-5 gap-1.5 my-2 min-h-0 rounded-lg overflow-hidden">
                            {/* Teal */}
                            <div className="h-full flex flex-col justify-between p-2 text-left relative transition-all duration-300 hover:scale-[1.02] shadow-inner" style={{ backgroundColor: '#173331' }}>
                              <span className="text-[0.48rem] font-bold text-white uppercase tracking-wider">Teal</span>
                              <span className="text-[0.4rem] font-mono text-white/70">#173331</span>
                            </div>
                            {/* Gold */}
                            <div className="h-full flex flex-col justify-between p-2 text-left relative transition-all duration-300 hover:scale-[1.02] shadow-inner" style={{ background: 'linear-gradient(180deg, #E5D1A3 0%, #917D46 100%)' }}>
                              <span className="text-[0.48rem] font-bold text-[#0A1020] uppercase tracking-wider">Gold</span>
                              <span className="text-[0.4rem] font-mono text-[#0A1020]/80">#E5D1A3</span>
                            </div>
                            {/* Terracotta */}
                            <div className="h-full flex flex-col justify-between p-2 text-left relative transition-all duration-300 hover:scale-[1.02] shadow-inner" style={{ backgroundColor: '#A46850' }}>
                              <span className="text-[0.48rem] font-bold text-white uppercase tracking-wider">Terra</span>
                              <span className="text-[0.4rem] font-mono text-white/70">#A46850</span>
                            </div>
                            {/* Beige */}
                            <div className="h-full flex flex-col justify-between p-2 text-left relative transition-all duration-300 hover:scale-[1.02] shadow-inner" style={{ backgroundColor: '#DAD3C5' }}>
                              <span className="text-[0.48rem] font-bold text-[#0A1020] uppercase tracking-wider">Beige</span>
                              <span className="text-[0.4rem] font-mono text-[#0A1020]/80">#DAD3C5</span>
                            </div>
                            {/* Ivory */}
                            <div className="h-full flex flex-col justify-between p-2 text-left relative transition-all duration-300 hover:scale-[1.02] shadow-inner" style={{ backgroundColor: '#EEEBE6' }}>
                              <span className="text-[0.48rem] font-bold text-[#0A1020] uppercase tracking-wider">Ivory</span>
                              <span className="text-[0.4rem] font-mono text-[#0A1020]/80">#EEEBE6</span>
                            </div>
                          </div>
                          
                          <p className="text-[0.52rem] text-[rgba(230,236,248,0.45)] leading-tight flex-none">
                            Luxury color harmony reflecting metalwork and earthy tones.
                          </p>
                        </div>

                        {/* 4. Brand Typography */}
                        <div className="bg-[#0C1530] border border-[rgba(230,236,248,0.05)] rounded-xl p-3.5 flex flex-col justify-between aspect-[3/2] relative w-full">
                          <div className="flex-none mb-1">
                            <span className="text-[0.52rem] font-bold tracking-[0.2em] uppercase text-[#E5D1A3] block leading-none mb-1">04. Typefaces</span>
                            <h3 className="text-[0.72rem] font-extrabold text-white uppercase tracking-wider leading-none">Brand Typography</h3>
                          </div>

                          {/* Specimen image taking up the rest of the card space */}
                          <div className="flex-1 my-2 bg-white rounded-lg flex items-center justify-center p-2.5 overflow-hidden min-h-0">
                            <img 
                              src="/brands/nogah/nogah-typography.png" 
                              alt="Nogah Typography" 
                              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                          </div>

                          <p className="text-[0.52rem] text-[rgba(230,236,248,0.45)] leading-tight flex-none">
                            Futura Light BT (Header) paired with Avenir (Body).
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col justify-between gap-3 h-full">
                        {project.brand.details && (
                          <div 
                            className="p-5 rounded-xl border relative overflow-hidden flex-1 flex flex-col justify-center"
                            style={{ background: '#0C1530', borderColor: `rgba(230,236,248,0.05)` }}
                          >
                            <h4 className="text-[0.5rem] font-bold text-[rgba(230,236,248,0.3)] uppercase tracking-[0.15em] mb-2.5 text-center">Brand Concept & Details</h4>
                            <p className="text-[0.78rem] leading-[1.6] text-[rgba(230,236,248,0.8)] whitespace-pre-line relative z-10 text-center max-w-[700px] mx-auto">
                              {project.brand.details}
                            </p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                          {/* Logo & Identity */}
                          <div 
                            className="p-5 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center border border-[rgba(230,236,248,0.05)] flex-1 h-full"
                            style={{ background: '#0C1530' }}
                          >
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-2">Logo & Identity</div>
                            {project.brand.logo ? (
                              <img src={project.brand.logo} alt="Logo" className="w-[80%] max-w-[160px] h-auto max-h-[60px] object-contain mb-1" />
                            ) : (
                              <div className="w-[45px] h-[45px] rounded-lg border border-[rgba(255,255,255,0.2)] flex items-center justify-center mb-1">
                                <span className="text-[1rem] font-serif text-[rgba(255,255,255,0.8)]">{project.brand.name.substring(0, 2).toUpperCase()}</span>
                              </div>
                            )}
                            <div className="text-[0.95rem] mt-1 font-serif" style={{ color: project.brand.colors[1] || '#E6ECF8', fontFamily: project.brand.font }}>{project.brand.name}</div>
                            <div className="text-[0.45rem] tracking-[0.2em] uppercase text-[rgba(230,236,248,0.4)] mt-0.5">{project.brand.tagline || "Beyond Experience"}</div>
                            
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mt-3">
                              {project.brand.style.split('·').map(s => s.trim()).join(' · ')}
                            </div>
                          </div>

                          {/* Brand Colours */}
                          <div 
                            className="p-5 rounded-xl flex flex-col items-center justify-center text-center border border-[rgba(230,236,248,0.05)] flex-1 h-full"
                            style={{ background: '#0C1530' }}
                          >
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-4">Brand Colours</div>
                            <div className="flex justify-center gap-3">
                              {project.brand.colors.slice(0, 4).map((c, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5">
                                  <div className="w-[30px] h-[30px] rounded-md border border-[rgba(255,255,255,0.1)] shadow-sm" style={{ backgroundColor: c }} />
                                  <div className="flex flex-col items-center mt-0.5">
                                    <span className="text-[0.45rem] font-bold tracking-[0.05em] text-[rgba(230,236,248,0.5)]">{project.brand.colorNames[i] || 'Colour'}</span>
                                    <span className="text-[0.4rem] font-mono text-[rgba(230,236,248,0.25)] mt-0.5 uppercase">{c}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Brand Typography */}
                          <div 
                            className="p-5 rounded-xl flex flex-col items-center justify-center text-center border border-[rgba(230,236,248,0.05)] flex-1 h-full"
                            style={{ background: '#0C1530' }}
                          >
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-3">Brand Typography</div>
                            <div className="text-[0.8rem] font-bold text-white tracking-[-0.01em] mb-3">{project.brand.font}</div>
                            <div className="text-[1.4rem] mb-2.5" style={{ fontFamily: project.brand.font, color: project.brand.colors[1] || '#E6ECF8' }}>Aa Bb Cc</div>
                            <div className="text-[0.55rem] font-bold tracking-[0.05em] text-[rgba(230,236,248,0.4)]">{project.brand.bodyFont || "Montserrat"} · Body</div>
                          </div>

                          {/* Brand Personality */}
                          <div 
                            className="p-5 rounded-xl flex flex-col items-center justify-center text-center border border-[rgba(230,236,248,0.05)] flex-1 h-full"
                            style={{ background: '#0C1530' }}
                          >
                            <div className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-[rgba(230,236,248,0.3)] mb-4">Brand Personality</div>
                            <div className="flex flex-col gap-2">
                              {project.brand.style.split('·').map((s, i) => (
                                <span key={i} className="text-[0.72rem] font-medium text-[rgba(230,236,248,0.5)]">{s.trim()}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}

                  {/* MAGAZINE TAB */}
                  {activeTab.toLowerCase().includes("magazine") && project.magazines && (
                    <div className="flex-1 flex flex-col justify-center h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto w-full">
                        {project.magazines.map((mag, i) => (
                          <div 
                            key={i} 
                            className="bg-[#0C1530] border border-[rgba(230,236,248,0.06)] rounded-xl overflow-hidden flex flex-row group transition-all duration-300 hover:border-[#D2BB95]/60 hover:shadow-[0_0_20px_rgba(210,187,149,0.1)] h-[160px]"
                          >
                            {/* Magazine Cover Thumbnail */}
                            <div className="relative w-[120px] h-full bg-black/40 overflow-hidden flex-shrink-0">
                              <img 
                                src={`https://lh3.googleusercontent.com/d/${mag.id}=w600`}
                                alt={mag.name}
                                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1530] via-[#0C1530]/40 to-transparent opacity-80" />
                              
                              {/* Glowing Accent */}
                              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#D2BB95]/90 border border-[#D2BB95] text-[0.45rem] font-bold tracking-[0.1em] text-[#050B1A] uppercase backdrop-blur-sm font-medium">
                                Editorial
                              </div>
                            </div>
                            
                            {/* Card Details/Button (Right Side) */}
                            <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                              <div className="flex flex-col gap-1.5">
                                <h4 className="text-[0.78rem] font-bold text-white tracking-tight leading-snug group-hover:text-[#D2BB95] transition-colors truncate">
                                  {mag.name}
                                </h4>
                                <p className="text-[0.6rem] text-[rgba(230,236,248,0.4)] leading-relaxed font-medium line-clamp-3">
                                  Flip through our curated travel publication and explore the art of visual storytelling.
                                </p>
                              </div>
                              
                              <a 
                                href={mag.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-1.5 bg-[#D2BB95] hover:bg-[#c0a57b] text-[#050B1A] text-[0.62rem] font-bold tracking-[0.1em] uppercase rounded transition-colors text-center flex items-center justify-center gap-1"
                              >
                                Read Magazine
                                <ExternalLink size={10} />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CUSTOM TABS FALLBACK */}
                  {!["website", "social", "branding", "shoot", "insta posts", "insta reels", "reel concept", "concept", "theme", "magazine", "campaign", "airbnb", "packaging"].some(std => activeTab.toLowerCase().includes(std.substring(0, 5))) && (
                    <div className="flex-1 flex flex-col h-full items-center justify-center p-8 text-center rounded-xl border border-[rgba(230,236,248,0.05)] relative overflow-hidden" style={{ background: '#0C1530' }}>
                      {/* Decorative gradient blur background */}
                      <div 
                        className="absolute w-[240px] h-[240px] rounded-full blur-[100px] opacity-10 pointer-events-none" 
                        style={{ backgroundColor: project.brand.colors[0] || '#3461FF' }}
                      />
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border"
                        style={{ borderColor: `rgba(230,236,248,0.1)`, backgroundColor: 'rgba(230,236,248,0.02)' }}
                      >
                        <span className="text-xl text-[rgba(230,236,248,0.8)] font-serif">{activeTab.substring(0, 1).toUpperCase()}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{activeTab}</h3>
                      <p className="text-[rgba(230,236,248,0.5)] text-[0.8rem] max-w-[420px] leading-[1.7] font-medium">
                        Case study details, design assets, and content for the <strong className="text-white font-semibold">{activeTab}</strong> showcase of {project.brand.name} will be added here soon.
                      </p>
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
