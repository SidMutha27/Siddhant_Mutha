import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight, Rocket, Sparkles } from 'lucide-react';
import { experiences, solidRocketNote } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/15', hover: 'bg-gold/25', text: 'text-gold-soft', border: 'border-gold/40' },
  cosmic: { bg: 'bg-cosmic-blue/15', hover: 'bg-cosmic-blue/25', text: 'text-cosmic-blue', border: 'border-cosmic-blue/40' },
  purple: { bg: 'bg-nebula-purple/15', hover: 'bg-nebula-purple/25', text: 'text-nebula-purple', border: 'border-nebula-purple/40' },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>('spotlight');

  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Research Experience
          </p> */}
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Research <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-3">
          {experiences.map((exp, index) => {
            const colors = colorMap[exp.color];
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className={`border rounded-xl overflow-hidden transition-all duration-300 bg-white/[0.03] backdrop-blur-sm ${isExpanded ? `${colors.border} shadow-sm` : 'border-white/10 hover:border-white/20'
                  }`}>
                  {/* Card Header */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="w-full px-5 py-4 flex items-center gap-4 text-left"
                  >
                    {/* Thematic Icon */}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                      <exp.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-rozha text-sm md:text-base font-normal text-white tracking-wide">
                          {exp.role}
                        </h3>
                        {exp.period.includes('Present') && (
                          <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-gold-soft/90 font-mono mt-0.5">
                        {exp.organization} · {exp.location}
                      </p>
                    </div>

                    {/* Period & Chevron */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden md:block font-mono text-xs text-white/70 tracking-wider">
                        {exp.period}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-white/50" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Tags row */}
                  <div className="px-5 pb-3 -mt-1 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.06] text-[10px] font-mono text-white/70 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 pt-2 border-t border-white/5 space-y-2.5"
                    >
                      {exp.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/85 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                          <p>{detail}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Popping callout as requested in Word document line 51 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-4 rounded-xl border border-gold/40 bg-gradient-to-r from-gold/10 via-nebula-crimson/10 to-cosmic-blue/10 flex items-center gap-3.5 shadow-glow"
        >
          <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
            <Rocket className="w-5 h-5 text-gold-soft animate-bounce" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-gold-soft uppercase tracking-widest font-bold">
              <Sparkles className="w-3 h-3 text-gold" /> Currently Experimenting:
            </span>
            <p className="text-xs md:text-sm text-white font-medium">
              {solidRocketNote.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
