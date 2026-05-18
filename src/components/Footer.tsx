import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080F22] border-t border-[rgba(230,236,248,0.07)] px-6 lg:px-16 pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-20 border-b border-[rgba(230,236,248,0.07)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" className="w-[160px] lg:w-[180px] h-auto object-contain translate-y-[2px] lg:translate-y-[4px]" alt="DigiGlobe Logo" />
            </div>
            <p className="text-[0.82rem] text-[rgba(230,236,248,0.5)] leading-[1.8] max-w-[240px] mt-6">
              Strategy, design, and performance — under one roof. Digital, but elevated.
            </p>
            <div className="mt-6 text-[1.4rem] tracking-widest">🇮🇳 🇦🇪</div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.5)] mb-6">
              Services
            </h5>
            <ul className="list-none space-y-3">
              {["Web Design", "Performance Ads", "Content Creation", "Branding", "AI Marketing", "Social Media"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.5)] mb-6">
              Company
            </h5>
            <ul className="list-none space-y-3">
              <li>
                <Link href="/about" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">About</Link>
              </li>
              <li>
                <Link href="/work" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Portfolio</Link>
              </li>
              <li>
                <Link href="/process" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Process</Link>
              </li>
              <li>
                <Link href="/#clients" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Clients</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[rgba(230,236,248,0.5)] mb-6">
              Connect
            </h5>
            <ul className="list-none space-y-3">
              <li>
                <a href="https://wa.me/919104668367" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">WhatsApp</a>
              </li>
              <li>
                <a href="https://www.instagram.com/digiglobe.co.in/" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/digiglobe" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:info@digiglobe.co.in" className="text-[0.82rem] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 gap-6 text-center lg:text-left">
          <p className="text-[0.7rem] text-[rgba(230,236,248,0.5)]">
            © {new Date().getFullYear()} Digiglobe. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/digiglobe.co.in/" target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">Instagram</a>
            <a href="https://www.linkedin.com/company/digiglobe" target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">LinkedIn</a>
            <a href="https://wa.me/919104668367" target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-250">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
