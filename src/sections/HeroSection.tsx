import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Radio, Microscope, Mail } from 'lucide-react';
import { Link } from 'react-router';

interface HeroSectionProps {
  isLoaded: boolean;
  heroVideoPlayed: boolean;
  onHeroVideoPlayed: () => void;
}

export default function HeroSection({ isLoaded, heroVideoPlayed, onHeroVideoPlayed }: HeroSectionProps) {
  const [videoPhase, setVideoPhase] = useState<'playing' | 'flash' | 'fading' | 'complete'>(() =>
    heroVideoPlayed ? 'complete' : 'playing'
  );
  const [showContent, setShowContent] = useState(heroVideoPlayed);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If hero video already played this session, skip the whole video sequence
    if (heroVideoPlayed) return;
    if (!isLoaded) return;

    const video = videoRef.current;
    if (!video) return;

    // Speed up playback so full video fits in shorter hero duration
    video.playbackRate = 2.5;

    video.play().catch(() => {
      // If autoplay fails, skip video
      setVideoPhase('complete');
      setShowContent(true);
      onHeroVideoPlayed();
    });

    // Let the video play to natural completion
    const handleEnded = () => {
      // Flash phase — white GRB flash
      setVideoPhase('flash');
      setTimeout(() => {
        setVideoPhase('fading');
        setTimeout(() => {
          setVideoPhase('complete');
          setTimeout(() => {
            setShowContent(true);
            onHeroVideoPlayed();
          }, 200);
        }, 600);
      }, 300);
    };

    video.addEventListener('ended', handleEnded);

    // Fallback timer — adjusted for 2.5x speed
    const fallbackTimer = setTimeout(() => {
      if (videoPhase === 'playing') {
        setVideoPhase('flash');
        setTimeout(() => {
          setVideoPhase('complete');
          setShowContent(true);
          onHeroVideoPlayed();
        }, 500);
      }
    }, 12000);

    return () => {
      video.removeEventListener('ended', handleEnded);
      clearTimeout(fallbackTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, heroVideoPlayed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Layer — only shown when video hasn't been played yet this session */}
      {!heroVideoPlayed && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: videoPhase === 'complete' ? 0 : videoPhase === 'fading' ? 0.3 : 1,
            scale: videoPhase === 'complete' ? 1.1 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="./assets/hero-video.mp4"
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      )}

      {/* GRB Flash overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: videoPhase === 'flash' ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="absolute inset-0 z-[15] bg-white pointer-events-none"
      />

      {/* Galaxy Background Layer */}
      <motion.div
        initial={{ opacity: heroVideoPlayed ? 1 : 0 }}
        animate={{
          opacity: videoPhase === 'complete' ? 1 : 0,
        }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="./assets/deep-space.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/60 via-transparent to-space-black" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Profile Photo with Orbital Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-36 h-36 mx-auto mb-8"
        >
          {/* Outer orbital ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-gold/20"
          >
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-gold/60" />
          </motion.div>

          {/* Inner orbital ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-white/5"
          >
            <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-cosmic-cyan/40" />
          </motion.div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-nebula-purple/10 to-transparent blur-xl" />

          {/* Profile image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-glow">
            <img
              src="./assets/profile.jpg"
              alt="Siddhant Mutha"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-rozha text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-4 tracking-tight"
        >
          Siddhant <span className="text-gradient">Mutha</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-mono text-sm md:text-base text-gold-soft tracking-widest uppercase mb-6 font-medium"
        >
          Physics &amp; Electronics Researcher
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-relaxed mb-10"
        >
          Exploring the universe through radio astronomy, instrumentation, and scientific computing.
          Currently researching Fast Radio Bursts at NCRA-TIFR while pursuing degrees in Physics and Electronic Systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link
            to="/research"
            className="group px-6 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold-soft font-medium text-sm hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 flex items-center gap-2"
          >
            <Radio className="w-4 h-4" />
            Research
            <span className="inline-block group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </Link>
          <Link
            to="/projects"
            className="group px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Microscope className="w-4 h-4" />
            Projects
          </Link>
          <Link
            to="/contact"
            className="group px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact
          </Link>
        </motion.div>

        {/* Navigation Nodes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="hidden md:flex items-center justify-center gap-8 relative"
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <defs>
              <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
                <stop offset="50%" stopColor="rgba(245, 158, 11, 0.3)" />
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="20%"
              y1="50%"
              x2="80%"
              y2="50%"
              stroke="url(#signalGradient)"
              strokeWidth="1"
              strokeDasharray="4 6"
              animate={{ strokeDashoffset: [20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {[
            { label: 'About', path: '/about' },
            { label: 'Research', path: '/research' },
            { label: 'Projects', path: '/projects' },
            { label: 'Skills', path: '/skills' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={showContent ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
            >
              <Link
                to={item.path}
                className="group relative px-4 py-2 block"
              >
                <span className="relative z-10 text-xs font-mono text-white/50 group-hover:text-gold-soft transition-colors duration-200 tracking-wider uppercase">
                  {item.label}
                </span>
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Explore</span>
            <ArrowDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
