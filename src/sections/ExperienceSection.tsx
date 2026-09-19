import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/8', hover: 'bg-gold/15', text: 'text-gold-soft', border: 'border-gold/20' },
  cosmic: { bg: 'bg-cosmic-blue/8', hover: 'bg-cosmic-blue/15', text: 'text-cosmic-blue', border: 'border-cosmic-blue/20' },
  purple: { bg: 'bg-nebula-purple/8', hover: 'bg-nebula-purple/15', text: 'text-nebula-purple', border: 'border-nebula-purple/20' },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>('ncra');

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
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Research & Training
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Research <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-2">
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
                <div className={`border rounded-lg overflow-hidden transition-all duration-300 bg-white/[0.015] ${
                  isExpanded ? colors.border : 'border-white/[0.06] hover:border-white/[0.1]'
                }`}>
                  {/* Card Header */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left"
                  >
                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                      <exp.icon className={`w-4 h-4 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-space text-[13px] font-semibold text-white/90 truncate">
                          {exp.role}
                        </h3>
                        {exp.period.includes('Present') && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-white/40 mt-0.5">
                        {exp.organization} · {exp.location}
                      </p>
                    </div>

                    {/* Period & Chevron */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden md:block font-mono text-[9px] text-white/25 tracking-wider">
                        {exp.period}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-white/25" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Tags row */}
                  <div className="px-4 pb-2 -mt-1 flex flex-wrap gap-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[9px] font-mono text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1">
                      <div className="border-t border-white/[0.04] pt-3 ml-11">
                        <p className="text-[11px] text-white/45 mb-2">{exp.description}</p>
                        <ul className="space-y-1.5">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-white/50 leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-gold/40 mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 font-mono text-[9px] text-white/20 md:hidden">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
