import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
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
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Workshops & Programs
          </p>
          <h2 className="font-rozha text-2xl md:text-3xl font-normal text-white">
            Continuously <span className="text-gradient">Learning new Things</span>
          </h2>
        </motion.div>

        {/* Workshop rows */}
        <div className="border border-white/15 rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-sm divide-y divide-white/10">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group px-5 py-4 flex items-start gap-4 hover:bg-white/[0.04] transition-colors duration-200"
            >
              {/* Thematic Icon */}
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <workshop.icon className="w-4 h-4 text-gold-soft" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-rozha text-sm md:text-base font-normal text-white group-hover:text-gold-soft transition-colors duration-200">
                    {workshop.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/70 flex-shrink-0">
                    <span className="text-gold-soft/90">{workshop.organization}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" />
                      {workshop.date}
                    </span>
                    {workshop.location && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-cosmic-blue" />
                          {workshop.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-white/80 leading-relaxed mt-1">
                  {workshop.description}
                </p>

                {workshop.details && (
                  <ul className="mt-2 pl-4 space-y-1 text-xs text-white/75 list-disc">
                    {workshop.details.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                )}

                {workshop.linkText && (
                  workshop.linkUrl ? (
                    <a
                      href={workshop.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-soft hover:text-gold hover:underline mt-2 transition-colors group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      <span>{workshop.linkText}</span>
                    </a>
                  ) : (
                    <p className="text-xs font-mono text-gold-soft mt-1.5 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {workshop.linkText}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
