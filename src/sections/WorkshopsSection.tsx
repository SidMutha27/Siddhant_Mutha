import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { workshops } from '@/data/portfolio';

export default function WorkshopsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Workshops & Conferences
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white">
            Continuous <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>

        {/* Compact workshop rows */}
        <div className="border border-white/[0.06] rounded-lg overflow-hidden bg-white/[0.01]">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group px-4 py-3 flex items-start gap-3 hover:bg-white/[0.02] transition-colors duration-200 ${
                index < workshops.length - 1 ? 'border-b border-white/[0.04]' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-7 h-7 rounded-md bg-gold/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <workshop.icon className="w-3.5 h-3.5 text-gold-soft/70" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
                  <h3 className="font-space text-[12px] font-semibold text-white/85 group-hover:text-gold-soft transition-colors duration-200 truncate">
                    {workshop.title}
                  </h3>
                  <span className="text-[10px] text-white/25 font-mono flex-shrink-0">
                    {workshop.organization}
                  </span>
                </div>
                <p className="text-[10px] text-white/35 mt-0.5 line-clamp-1">{workshop.description}</p>
              </div>

              {/* Metadata */}
              <div className="hidden md:flex items-center gap-3 flex-shrink-0 text-[9px] text-white/25 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {workshop.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {workshop.location}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[8px]">
                  {workshop.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
