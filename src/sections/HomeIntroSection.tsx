import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { homeIntro } from '@/data/portfolio';

export default function HomeIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 md:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.25em] uppercase mb-3">
            // Observer Log
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl lg:text-4xl text-white font-normal leading-snug text-gradient">
            {homeIntro.tagline}
          </h2>
        </motion.div>

        {/* Continuous single statement container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-6 md:p-8 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-sm border-l-4 border-l-gold shadow-lg"
        >
          <p className="whitespace-pre-line text-white/90 text-sm md:text-base lg:text-[17px] leading-relaxed font-normal">
            {homeIntro.statement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
