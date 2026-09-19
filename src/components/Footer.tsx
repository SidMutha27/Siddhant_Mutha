import { Radio, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { navItems } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 bg-space-black/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Radio className="w-4 h-4 text-gold-soft" />
            </div>
            <div>
              <p className="font-space text-sm font-semibold text-white/80">
                Siddhant <span className="text-gold-soft">Mutha</span>
              </p>
              <p className="font-mono text-[10px] text-white/30 tracking-wider">
                Physics · Electronics · Radio Astronomy
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-mono text-white/35 hover:text-gold-soft transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-white/25 font-mono">
            <span>{currentYear}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-nebula-crimson/60" /> & Science
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
