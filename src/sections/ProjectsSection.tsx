import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/15', hover: 'group-hover:bg-gold/25', text: 'text-gold-soft', accent: 'border-l-gold' },
  cosmic: { bg: 'bg-cosmic-blue/15', hover: 'group-hover:bg-cosmic-blue/25', text: 'text-cosmic-blue', accent: 'border-l-cosmic-blue' },
  purple: { bg: 'bg-nebula-purple/15', hover: 'group-hover:bg-nebula-purple/25', text: 'text-nebula-purple', accent: 'border-l-nebula-purple' },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Projects
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Engineering <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group border border-white/15 rounded-xl p-5 hover:border-gold/30 transition-all duration-300 bg-white/[0.03] backdrop-blur-sm border-l-4 ${colors.accent}`}
              >
                <div className="flex items-start gap-3.5 mb-3">
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.bg} ${colors.hover} transition-colors duration-300`}>
                    <project.icon className={`w-4.5 h-4.5 ${colors.text}`} />
                  </div>

                  {/* Title & meta */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-rozha text-sm md:text-base font-normal text-white group-hover:text-gold-soft transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gold-soft/80 font-mono">{project.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Details / Exact Word Document bullet points */}
                <div className="space-y-2 mb-3.5">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-white/85 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0" />
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.06] text-[10px] font-mono text-white/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
