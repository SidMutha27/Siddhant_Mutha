import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/8', hover: 'group-hover:bg-gold/15', text: 'text-gold-soft', accent: 'border-l-gold/40' },
  cosmic: { bg: 'bg-cosmic-blue/8', hover: 'group-hover:bg-cosmic-blue/15', text: 'text-cosmic-blue', accent: 'border-l-cosmic-blue/40' },
  purple: { bg: 'bg-nebula-purple/8', hover: 'group-hover:bg-nebula-purple/15', text: 'text-nebula-purple', accent: 'border-l-nebula-purple/40' },
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
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Projects
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Engineering <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group border border-white/[0.06] rounded-lg p-4 hover:border-gold/10 transition-all duration-300 bg-white/[0.015] border-l-2 ${colors.accent}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${colors.bg} ${colors.hover} transition-colors duration-300`}>
                    <project.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>

                  {/* Title & meta */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-space text-[13px] font-semibold text-white/90 group-hover:text-gold-soft transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-white/35">{project.subtitle}</span>
                      {project.year && (
                        <>
                          <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                          <span className="font-mono text-[9px] text-white/25">{project.year}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] text-white/45 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[9px] font-mono text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3 mt-3 pt-2 border-t border-white/[0.04]">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-gold-soft/60 hover:text-gold-soft transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
