import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '@/data/portfolio';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Education
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-gold/60 via-cosmic-blue/40 to-transparent" />

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
                  <div className={`w-[16px] h-[16px] rounded-full border-2 ${
                    edu.current
                      ? 'bg-gold border-gold shadow-glow'
                      : 'bg-space-grey border-white/50'
                  }`} />
                </div>

                {/* Content Card */}
                <div className="border border-white/15 rounded-xl p-5 hover:border-gold/30 transition-all duration-300 bg-white/[0.03] backdrop-blur-sm shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-rozha text-base md:text-lg font-normal text-white group-hover:text-gold-soft transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-xs md:text-sm text-gold-soft/90 font-medium mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {edu.current && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gold/15 border border-gold/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                          <span className="text-[10px] font-mono text-gold-soft tracking-wider uppercase font-semibold">Active</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 mb-3">
                    <span className="flex items-center gap-1.5 font-mono text-white/80">
                      <GraduationCap className="w-3.5 h-3.5 text-gold" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70">
                      <MapPin className="w-3.5 h-3.5 text-cosmic-blue" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-white/80 leading-relaxed font-normal">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
