import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { communityItems } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/8', hover: 'group-hover:bg-gold/15', text: 'text-gold-soft', accent: 'border-l-gold/40' },
  cosmic: { bg: 'bg-cosmic-blue/8', hover: 'group-hover:bg-cosmic-blue/15', text: 'text-cosmic-blue', accent: 'border-l-cosmic-blue/40' },
  purple: { bg: 'bg-nebula-purple/8', hover: 'group-hover:bg-nebula-purple/15', text: 'text-nebula-purple', accent: 'border-l-nebula-purple/40' },
};

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Community
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Beyond <span className="text-gradient">Research</span>
          </h2>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-2 gap-3">
          {communityItems.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group border border-white/[0.06] rounded-lg p-4 hover:border-gold/10 transition-all duration-300 bg-white/[0.015] border-l-2 ${colors.accent}`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${colors.bg} ${colors.hover} transition-colors duration-300`}>
                    <item.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-space text-[13px] font-semibold text-white/90 group-hover:text-gold-soft transition-colors duration-300">
                        {item.role}
                      </h3>
                      {item.period.includes('Present') && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      )}
                    </div>

                    <p className="text-[11px] text-white/50 mb-2 font-mono">{item.organization}</p>
                    <p className="text-xs text-white/40 leading-relaxed mb-3">{item.description}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1 text-[10px] font-mono text-white/30">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-white/30">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
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
