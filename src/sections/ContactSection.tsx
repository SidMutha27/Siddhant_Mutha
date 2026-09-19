import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).catch(() => {});
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
          <p className="font-mono text-[10px] text-gold-soft/60 tracking-[0.2em] uppercase mb-2">
            // Transmission & Contact
          </p>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/40 text-xs max-w-md mx-auto">
            Open to research collaborations, instrumentation projects, and discussions in astrophysics & signal processing.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-2.5">
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
                  className="group border border-white/[0.06] rounded-lg p-3 flex items-center gap-3 hover:border-gold/20 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-md bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-200">
                    <item.icon className="w-4 h-4 text-gold-soft" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors truncate">
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
                    className="p-1.5 rounded hover:bg-white/5 transition-colors flex-shrink-0"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                    )}
                  </button>
                </a>
              ) : (
                <div className="border border-white/[0.06] rounded-lg p-3 flex items-center gap-3 bg-white/[0.015]">
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/70 truncate">
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
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/5 border border-gold/15">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[11px] text-gold-soft/80 tracking-wider">
              Available for Research Collaborations & Technical Consulting
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
