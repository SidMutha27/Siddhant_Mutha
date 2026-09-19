import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories, languages } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/8', text: 'text-gold-soft' },
  cosmic: { bg: 'bg-cosmic-blue/8', text: 'text-cosmic-blue' },
  purple: { bg: 'bg-nebula-purple/8', text: 'text-nebula-purple' },
};

const levelStyle = (level: string) => {
  switch (level) {
    case 'advanced':
      return 'bg-gold/10 border-gold/25 text-gold-soft/80';
    case 'intermediate':
      return 'bg-cosmic-blue/8 border-cosmic-blue/20 text-cosmic-blue/70';
    default:
      return 'bg-white/[0.03] border-white/10 text-white/35';
  }
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
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Skills
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Technical <span className="text-gradient">Toolkit</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border border-white/[0.06] rounded-lg p-4 hover:border-gold/8 transition-all duration-300 bg-white/[0.015]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center ${colors.bg}`}>
                    <category.icon className={`w-3.5 h-3.5 ${colors.text}`} />
                  </div>
                  <h3 className="font-space text-xs font-semibold text-white/85">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2 py-0.5 rounded border text-[10px] font-medium ${levelStyle(skill.level)}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-4 border border-white/[0.06] rounded-lg p-4 bg-white/[0.015]"
        >
          <h3 className="font-space text-xs font-semibold text-white/70 mb-2.5">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/50"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
