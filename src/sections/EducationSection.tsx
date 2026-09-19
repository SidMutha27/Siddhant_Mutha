import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '@/data/portfolio';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Education
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold/30 via-white/10 to-transparent" />

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-8 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-1.5 z-10">
                  <div className={`w-[15px] h-[15px] rounded-full border-2 ${
                    edu.current
                      ? 'bg-gold/80 border-gold shadow-glow'
                      : 'bg-space-grey border-white/25'
                  }`} />
                </div>

                {/* Content */}
                <div className="border border-white/[0.06] rounded-lg p-4 hover:border-gold/10 transition-all duration-300 bg-white/[0.015]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-space text-sm font-semibold text-white/90 group-hover:text-gold-soft transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-white/55 mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gold/10 border border-gold/20">
                          <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
                          <span className="text-[9px] font-mono text-gold-soft tracking-wider uppercase">Active</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-white/35 mb-2">
                    <span className="flex items-center gap-1 font-mono">
                      <GraduationCap className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-[11px] text-white/40 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
