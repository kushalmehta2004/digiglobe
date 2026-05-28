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
  post: { id: string; name: string; type: string; link: string }[]; 
  postIndex: number;
  brandName: string;
  brandLogo?: string;
  brandUrl?: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

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
    return `https://lh3.googleusercontent.com/d/${id}=w600`;
  };


  return (
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
      <div className="relative aspect-square w-full bg-black/40 rounded-md overflow-hidden border border-[rgba(230,236,248,0.02)] group">
        {/* Click to open in drive */}
        <a href={activeMedia.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          <img 
            src={getThumbnailUrl(activeMedia.id)} 
            alt={activeMedia.name}
            className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {activeMedia.type === 'video' && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-[#3461FF]/90 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </a>

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

  // Reset tab on open
  useEffect(() => {
    if (isOpen && project) {
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
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col p-5 lg:p-6 overflow-y-auto lg:overflow-y-hidden custom-scrollbar relative">
              <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .custom-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between h-full"
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

                  {/* SOCIAL TAB */}
                  {(activeTab.toLowerCase().includes("social") || activeTab === "social") && (
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

                  {/* SHOOT TAB */}
                  {(activeTab.toLowerCase().includes("shoot") || activeTab === "shoot") && (
                    project.smmPosts ? (
                      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar flex flex-col gap-6 justify-between">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.smmPosts.slice(0, 3).map((post, i) => (
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
                          <div className="flex justify-center mt-2 mb-4">
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
                          <div className="text-[0.45rem] tracking-[0.2em] uppercase text-[rgba(230,236,248,0.4)] mt-0.5">Beyond Experience</div>
                          
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
                          <div className="text-[0.55rem] font-bold tracking-[0.05em] text-[rgba(230,236,248,0.4)]">Montserrat · Body</div>
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
                  )}

                  {/* MAGAZINE TAB */}
                  {activeTab.toLowerCase().includes("magazine") && project.magazines && (
                    <div className="flex-1 flex flex-col justify-center h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto w-full">
                        {project.magazines.map((mag, i) => (
                          <div 
                            key={i} 
                            className="bg-[#0C1530] border border-[rgba(230,236,248,0.06)] rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-[#005F54] hover:shadow-[0_0_20px_rgba(0,95,84,0.15)]"
                          >
                            {/* Magazine Cover Thumbnail */}
                            <div className="relative aspect-[3/4] w-full bg-black/40 overflow-hidden">
                              <img 
                                src={`https://lh3.googleusercontent.com/d/${mag.id}=w600`}
                                alt={mag.name}
                                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1530] via-[#0C1530]/40 to-transparent opacity-80" />
                              
                              {/* Glowing Accent */}
                              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#005F54]/85 border border-[#005F54] text-[0.55rem] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-sm">
                                Editorial
                              </div>
                            </div>
                            
                            {/* Card Footer */}
                            <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                              <div>
                                <h4 className="text-[0.88rem] font-bold text-white tracking-tight leading-snug group-hover:text-[#005F54] transition-colors">
                                  {mag.name}
                                </h4>
                                <p className="text-[0.68rem] text-[rgba(230,236,248,0.4)] mt-1.5 leading-relaxed font-medium">
                                  Flip through our curated travel publication and explore the art of visual storytelling.
                                </p>
                              </div>
                              
                              <a 
                                href={mag.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 bg-[#005F54] hover:bg-[#007C6E] text-white text-[0.68rem] font-bold tracking-[0.1em] uppercase rounded transition-colors text-center flex items-center justify-center gap-1.5"
                              >
                                Read Magazine
                                <ExternalLink size={11} />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CUSTOM TABS FALLBACK */}
                  {!["website", "social", "branding", "shoot", "insta posts", "insta reels", "reel concept", "concept", "theme", "magazine", "campaign"].some(std => activeTab.toLowerCase().includes(std.substring(0, 5))) && (
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
