import { Radio } from 'lucide-react';
import { Link } from 'react-router';
import { navItems } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 border-t border-white/10 bg-space-black/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
              <Radio className="w-4 h-4 text-gold-soft" />
            </div>
            <div>
              <p className="font-rozha text-base text-white">
                Siddhant <span className="text-gold-soft">Mutha</span>
              </p>
              <p className="font-mono text-[11px] text-white/60 tracking-wider">
                Physics · Electronics · Radio Astronomy
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-mono text-white/60 hover:text-gold-soft transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright (Built with removed) */}
          <div className="text-xs text-white/50 font-mono">
            <span>© {currentYear} Siddhant Mutha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
