import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SolarSystemLoaderProps {
  onComplete: () => void;
}

const loadingMessages = [
  'Initializing Observation...',
  'Receiving Signal...',
  'Calibrating Instruments...',
  'Aligning Telescope...',
  'Acquiring Data...',
  'Signal Locked',
];

const planets = [
  { name: 'Mercury', distance: 40, size: 4, speed: 4, type: 'mercury' as const },
  { name: 'Venus', distance: 60, size: 6, speed: 3, type: 'venus' as const },
  { name: 'Earth', distance: 85, size: 6, speed: 2.5, type: 'earth' as const },
  { name: 'Mars', distance: 110, size: 5, speed: 2, type: 'mars' as const },
  { name: 'Jupiter', distance: 150, size: 14, speed: 1.2, type: 'jupiter' as const },
  { name: 'Saturn', distance: 190, size: 12, speed: 0.9, type: 'saturn' as const },
];

// Procedural planet styles — CSS-only realistic rendering
function getPlanetStyle(type: string, size: number): React.CSSProperties {
  const base: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    position: 'absolute' as const,
    top: -size / 2,
    left: '50%',
    marginLeft: -size / 2,
  };

  switch (type) {
    case 'mercury':
      return {
        ...base,
        background: `
          radial-gradient(circle at 35% 35%, #c4b59a 0%, #8b7355 40%, #6b5a3e 70%, #4a3f2c 100%)
        `,
        boxShadow: `
          inset -${size * 0.15}px -${size * 0.1}px ${size * 0.3}px rgba(0,0,0,0.6),
          inset ${size * 0.05}px ${size * 0.05}px ${size * 0.15}px rgba(255,255,255,0.15),
          0 0 ${size * 0.5}px rgba(139,115,85,0.3)
        `,
      };

    case 'venus':
      return {
        ...base,
        background: `
          radial-gradient(circle at 40% 35%, #f0d4a8 0%, #e8a87c 35%, #d4956a 60%, #b87a55 100%)
        `,
        boxShadow: `
          inset -${size * 0.15}px -${size * 0.1}px ${size * 0.3}px rgba(0,0,0,0.4),
          inset ${size * 0.05}px ${size * 0.05}px ${size * 0.2}px rgba(255,255,255,0.2),
          0 0 ${size * 0.8}px rgba(232,168,124,0.25),
          0 0 ${size * 1.5}px rgba(232,168,124,0.1)
        `,
      };

    case 'earth':
      return {
        ...base,
        background: `
          radial-gradient(circle at 65% 30%, rgba(255,255,255,0.15) 0%, transparent 30%),
          radial-gradient(ellipse at 30% 50%, #2d6b3f 0%, transparent 25%),
          radial-gradient(ellipse at 55% 35%, #5a8a4a 0%, transparent 20%),
          radial-gradient(ellipse at 70% 60%, #3d7a4f 0%, transparent 18%),
          radial-gradient(ellipse at 20% 70%, #6b8f5e 0%, transparent 15%),
          radial-gradient(circle at 40% 35%, #4a90d9 0%, #3a7bc8 30%, #2d6bb5 50%, #1a4a8a 80%, #0d2f5c 100%)
        `,
        boxShadow: `
          inset -${size * 0.15}px -${size * 0.1}px ${size * 0.3}px rgba(0,0,0,0.5),
          inset ${size * 0.05}px ${size * 0.05}px ${size * 0.15}px rgba(255,255,255,0.15),
          0 0 ${size * 0.3}px rgba(74,144,217,0.4),
          0 0 ${size}px rgba(74,144,217,0.15),
          0 0 ${size * 0.1}px rgba(100,180,255,0.6)
        `,
      };

    case 'mars':
      return {
        ...base,
        background: `
          radial-gradient(circle at 35% 40%, #e8a070 0%, #c1440e 30%, #a83a0c 55%, #7a2808 80%, #4a1805 100%)
        `,
        boxShadow: `
          inset -${size * 0.15}px -${size * 0.1}px ${size * 0.3}px rgba(0,0,0,0.5),
          inset ${size * 0.05}px ${size * 0.05}px ${size * 0.15}px rgba(255,200,150,0.15),
          0 0 ${size * 0.5}px rgba(193,68,14,0.3)
        `,
      };

    case 'jupiter':
      return {
        ...base,
        background: `
          radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08) 0%, transparent 40%),
          linear-gradient(
            180deg,
            #c4956a 0%,
            #e8c49a 8%,
            #d4a574 15%,
            #b8855a 22%,
            #e8d5a3 28%,
            #d4a574 35%,
            #a07050 42%,
            #c48a5a 48%,
            #e8c49a 55%,
            #d4a574 62%,
            #b87a50 68%,
            #c4956a 75%,
            #e8d5a3 82%,
            #d4a574 90%,
            #a87050 100%
          )
        `,
        boxShadow: `
          inset -${size * 0.2}px -${size * 0.1}px ${size * 0.4}px rgba(0,0,0,0.4),
          inset ${size * 0.08}px ${size * 0.05}px ${size * 0.2}px rgba(255,255,255,0.1),
          0 0 ${size * 0.5}px rgba(212,165,116,0.3),
          0 0 ${size}px rgba(212,165,116,0.1)
        `,
      };

    case 'saturn':
      return {
        ...base,
        background: `
          radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08) 0%, transparent 40%),
          linear-gradient(
            180deg,
            #e8d5a3 0%,
            #d4c490 12%,
            #c4b080 25%,
            #e8d5a3 37%,
            #d4c490 50%,
            #b8a070 62%,
            #d4c490 75%,
            #e8d5a3 87%,
            #c4b080 100%
          )
        `,
        boxShadow: `
          inset -${size * 0.2}px -${size * 0.1}px ${size * 0.4}px rgba(0,0,0,0.35),
          inset ${size * 0.08}px ${size * 0.05}px ${size * 0.2}px rgba(255,255,255,0.12),
          0 0 ${size * 0.5}px rgba(232,213,163,0.25),
          0 0 ${size}px rgba(232,213,163,0.08)
        `,
      };

    default:
      return base;
  }
}

export default function SolarSystemLoader({ onComplete }: SolarSystemLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev >= loadingMessages.length - 1) {
          clearInterval(msgInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 350);

    return () => clearInterval(msgInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-space-black flex flex-col items-center justify-center"
        >
          {/* Star background */}
          <div className="absolute inset-0 star-field opacity-30" />

          {/* SVG Filters for Sun glow */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <filter id="sun-turbulence">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="2" />
                <feDisplacementMap in="SourceGraphic" scale="3" />
              </filter>
              <filter id="sun-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Solar System */}
          <div className="relative w-[440px] h-[440px] mb-12">
            {/* Sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Sun corona / outer glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  width: 56,
                  height: 56,
                  marginLeft: -8,
                  marginTop: -8,
                  background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.1) 40%, transparent 70%)',
                }}
              />
              {/* Sun body */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.25), 0 0 100px rgba(245, 158, 11, 0.1)',
                    '0 0 50px rgba(245, 158, 11, 0.7), 0 0 100px rgba(245, 158, 11, 0.35), 0 0 150px rgba(245, 158, 11, 0.15)',
                    '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.25), 0 0 100px rgba(245, 158, 11, 0.1)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 35% 35%, #fff8e0 0%, #ffd54f 15%, #ffb300 30%, #f59e0b 50%, #e68a00 70%, #cc7a00 90%),
                    radial-gradient(circle at 60% 60%, rgba(255,200,50,0.8) 0%, transparent 50%)
                  `,
                  filter: 'url(#sun-turbulence)',
                }}
              />
            </div>

            {/* Orbits and Planets */}
            {planets.map((planet) => (
              <motion.div
                key={planet.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: planet.distance * 2,
                  height: planet.distance * 2,
                  marginLeft: -planet.distance,
                  marginTop: -planet.distance,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: planet.speed * 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Orbit ring */}
                <div
                  className="absolute inset-0 rounded-full border border-white/[0.06]"
                />
                {/* Planet body */}
                <div style={getPlanetStyle(planet.type, planet.size)} />

                {/* Saturn's rings */}
                {planet.type === 'saturn' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -planet.size / 2,
                      left: '50%',
                      marginLeft: -planet.size * 1.1,
                      width: planet.size * 2.2,
                      height: planet.size * 0.7,
                      borderRadius: '50%',
                      border: '1.5px solid rgba(232,213,163,0.35)',
                      borderTopColor: 'transparent',
                      borderLeftColor: 'rgba(232,213,163,0.2)',
                      transform: 'rotateX(70deg)',
                      boxShadow: '0 0 3px rgba(232,213,163,0.15)',
                    }}
                  />
                )}

                {/* Earth's atmosphere glow */}
                {planet.type === 'earth' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -planet.size / 2 - 1,
                      left: '50%',
                      marginLeft: -planet.size / 2 - 1,
                      width: planet.size + 2,
                      height: planet.size + 2,
                      borderRadius: '50%',
                      boxShadow: '0 0 4px rgba(100,180,255,0.4), 0 0 8px rgba(100,180,255,0.15)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Loading Text */}
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="loading-text text-sm text-white/60 tracking-widest uppercase">
              {loadingMessages[messageIndex]}
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-6 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-soft"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress percentage */}
          <p className="mt-3 font-mono text-xs text-white/30">
            {progress.toString().padStart(3, '0')}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
