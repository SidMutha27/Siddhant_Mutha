import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutIntro } from '@/data/portfolio';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.25em] uppercase mb-3">
            // About Me
          </p>
          {/* <h2 className="font-rozha text-3xl md:text-4xl font-normal text-white mb-6 leading-tight">
            Journey & <span className="text-gradient">Vision</span>
          </h2> */}
          <div className="p-6 rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur-sm border-l-4 border-l-gold">
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal">
              {aboutIntro}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
