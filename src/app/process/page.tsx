"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your brand, competitors, and market positioning. No assumptions, just data-driven insights that form the foundation of our creative approach.",
  },
  {
    num: "02",
    title: "Conceptualization",
    desc: "Our creative team develops multiple directions. We explore visual identities, user experiences, and campaign angles that align with the strategy.",
  },
  {
    num: "03",
    title: "Design & Architecture",
    desc: "We craft the wireframes, stylescapes, and UI/UX flows. Every pixel is scrutinized. This is where the aesthetic meets the functional.",
  },
  {
    num: "04",
    title: "Development & Build",
    desc: "Our engineering team brings the designs to life using modern tech stacks. We ensure lightning-fast performance, pixel-perfect accuracy, and robust scalability.",
  },
  {
    num: "05",
    title: "Launch & Optimize",
    desc: "Going live is just the beginning. We monitor user behavior, run A/B tests, and continuously optimize the digital experience to maximize ROI.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-[160px] pb-32 px-6 lg:px-16 bg-[#050B1A]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24"
        >
          <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-4">
            Fast. Strategic.<br/>Detail-obsessed.
          </h1>
          <p className="text-[1.1rem] font-light text-[rgba(230,236,248,0.4)] max-w-[500px]">
            We don't believe in drawn-out timelines. We believe in momentum. Here's how we take your project from concept to launch.
          </p>
        </motion.div>

        <div className="relative border-l border-[rgba(52,97,255,0.2)] ml-8 lg:ml-24">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative pl-12 lg:pl-24 py-12 border-b border-[rgba(255,255,255,0.07)] last:border-b-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-16 w-[9px] h-[9px] bg-[#3461FF] rounded-full" />
              
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
                <div className="lg:w-[120px] shrink-0">
                  <span 
                    className="text-[clamp(4rem,6vw,6rem)] font-bold leading-none tracking-tighter"
                    style={{ 
                      WebkitTextStroke: "1px rgba(52,97,255,0.1)", 
                      WebkitTextFillColor: "transparent" 
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                
                <div className="flex-1 pt-2 lg:pt-4">
                  <h3 className="text-[1.1rem] font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[0.85rem] leading-[1.8] text-[rgba(230,236,248,0.5)] max-w-[500px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
