import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).catch(() => { });
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
            // Transmission & Contact
          </p>
          <h2 className="font-rozha text-3xl md:text-4xl font-normal text-white mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            Have a signal? Send it my way.....<br />
            Ideas, experiments, research, hardware, or anything interesting enough to disturb the noise.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-3.5">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group border border-white/15 rounded-xl p-4 flex items-center gap-3.5 hover:border-gold/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-gold-soft" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-gold-soft uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs md:text-sm text-white/90 group-hover:text-gold-soft transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(item.value, index);
                    }}
                    title="Copy to clipboard"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/50 group-hover:text-white/80" />
                    )}
                  </button>
                </a>
              ) : (
                <div className="border border-white/15 rounded-xl p-4 flex items-center gap-3.5 bg-white/[0.03]">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-gold-soft uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs md:text-sm text-white/90 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Status Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/30">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-xs text-gold-soft tracking-wider font-medium">
              Research × Electronics × Astronomy × ML = let’s build something that works.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
