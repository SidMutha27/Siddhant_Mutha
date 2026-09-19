import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { highlights } from '@/data/portfolio';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-3">
              // About
            </p>
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              Researcher, Engineer,<br />
              <span className="text-gradient">Observer</span>
            </h2>
            <div className="space-y-3 text-white/55 text-[13px] leading-relaxed">
              <p>
                Working at the intersection of physics and electronics engineering,
                I build instruments that listen to the cosmos. My research focuses on
                fast radio transient detection using the GMRT, where machine learning
                meets interferometric data processing.
              </p>
              <p>
                Currently pursuing dual degrees in Physics and Electronic Systems,
                I bridge theoretical understanding with hands-on instrumentation —
                from Langmuir probe circuits to radio telescope arrays.
              </p>
              <p className="text-white/40 italic text-xs border-l-2 border-gold/20 pl-3">
                Every signal carries a story; my work is about building the tools to hear it.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group p-4 border border-white/[0.06] rounded-lg hover:border-gold/15 transition-all duration-300 bg-white/[0.02]"
              >
                <div className="w-8 h-8 rounded-md bg-gold/8 flex items-center justify-center mb-2.5 group-hover:bg-gold/15 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-gold-soft/80" />
                </div>
                <h3 className="font-space text-xs font-semibold text-white/85 mb-0.5">
                  {item.label}
                </h3>
                <p className="text-[10px] text-white/35 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
