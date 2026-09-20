import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { communityItems } from '@/data/portfolio';

const colorMap = {
  gold: { bg: 'bg-gold/15', hover: 'group-hover:bg-gold/25', text: 'text-gold-soft', accent: 'border-l-gold' },
  cosmic: { bg: 'bg-cosmic-blue/15', hover: 'group-hover:bg-cosmic-blue/25', text: 'text-cosmic-blue', accent: 'border-l-cosmic-blue' },
  purple: { bg: 'bg-nebula-purple/15', hover: 'group-hover:bg-nebula-purple/25', text: 'text-nebula-purple', accent: 'border-l-nebula-purple' },
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
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Community & Outreach
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Beyond <span className="text-gradient">Research</span>
          </h2>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {communityItems.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`group border border-white/15 rounded-xl p-5 hover:border-gold/30 transition-all duration-300 bg-white/[0.03] backdrop-blur-sm border-l-4 ${colors.accent}`}
              >
                <div className="flex items-start gap-3.5">
                  {/* Thematic Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.bg} ${colors.hover} transition-colors duration-300`}>
                    <item.icon className={`w-4.5 h-4.5 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-rozha text-sm md:text-base font-normal text-white group-hover:text-gold-soft transition-colors duration-300">
                        {item.organization}
                      </h3>
                      {item.period.includes('Present') && (
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      )}
                    </div>

                    {item.role && (
                      <p className="text-xs text-gold-soft/90 font-mono font-medium mb-1">{item.role}</p>
                    )}

                    {item.note && (
                      <p className="text-xs text-nebula-crimson/90 italic mb-2 flex items-center gap-1 font-medium">
                        <Heart className="w-3 h-3 text-nebula-crimson fill-nebula-crimson/30" />
                        {item.note}
                      </p>
                    )}

                    <p className="text-xs md:text-sm text-white/85 leading-relaxed mb-3">{item.description}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cosmic-blue" />
                          {item.location}
                        </span>
                      )}
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
