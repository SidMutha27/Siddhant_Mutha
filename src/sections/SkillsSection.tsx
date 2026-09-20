import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/15', text: 'text-gold-soft', border: 'border-gold/30', badge: 'bg-gold/10 text-gold-soft border-gold/30' },
  cosmic: { bg: 'bg-cosmic-blue/15', text: 'text-cosmic-blue', border: 'border-cosmic-blue/30', badge: 'bg-cosmic-blue/10 text-cosmic-blue border-cosmic-blue/30' },
  purple: { bg: 'bg-nebula-purple/15', text: 'text-nebula-purple', border: 'border-nebula-purple/30', badge: 'bg-nebula-purple/10 text-nebula-purple border-nebula-purple/30' },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Skills
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Technical <span className="text-gradient">Toolkit</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="border border-white/15 rounded-xl p-4 hover:border-gold/30 transition-all duration-300 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors.bg}`}>
                      <category.icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <h3 className="font-rozha text-xs md:text-sm font-normal text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md border text-xs font-mono font-medium ${colors.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
