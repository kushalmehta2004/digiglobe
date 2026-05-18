"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lenis-stopped");
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] flex items-center z-[100] transition-all duration-400 border-b ${scrolled
        ? "bg-[rgba(5,11,26,0.9)] backdrop-blur-[20px] border-[rgba(255,255,255,0.06)]"
        : "bg-transparent border-transparent"
        }`}
      style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <div className="flex items-center justify-between w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-[101]">
          {/* Using translate-y to visually adjust for any empty space in the logo PNG so it aligns perfectly with the text */}
          <img src="/logo.png" className="w-[160px] lg:w-[180px] h-auto object-contain translate-y-[2px] lg:translate-y-[4px]" alt="DigiGlobe Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-[#3461FF] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => {
              // @ts-ignore
              if (typeof window !== "undefined" && window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/digiglobeconsulting/30min' });
            }}
            className="px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.2)] text-[0.72rem] font-medium tracking-[0.12em] uppercase text-white hover:bg-[#3461FF] hover:border-[#3461FF] transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[101] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 bg-[#050B1A] z-[100] flex flex-col items-center justify-center min-h-[100svh]"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[2.5rem] font-bold text-white hover:text-[#3461FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 + 0.2 }}
                className="mt-8"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    // @ts-ignore
                    if (typeof window !== "undefined" && window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/digiglobeconsulting/30min' });
                  }}
                  className="px-8 py-3 rounded-full border border-[rgba(255,255,255,0.2)] text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white hover:bg-[#3461FF] hover:border-[#3461FF] transition-all duration-300"
                >
                  Let's Talk
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
