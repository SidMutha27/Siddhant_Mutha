import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: [number, number, number]; // RGB
  layer: 'dim' | 'medium' | 'bright';
}

interface NebulaBlob {
  x: number;
  y: number;
  radius: number;
  color: [number, number, number];
  opacity: number;
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

// Star color palette — mimics real stellar colors
const starColors: [number, number, number][] = [
  [248, 250, 252],  // cool white
  [255, 248, 240],  // warm white
  [220, 235, 255],  // blue-white
  [255, 240, 220],  // yellow-white
  [200, 220, 255],  // blue
  [245, 200, 150],  // faint gold
];

export default function ParticleField({
  className = '',
  particleCount = 180,
  interactive = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nebulaRef = useRef<NebulaBlob[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with layered distribution
    const particles: Particle[] = [];

    // Dim background stars — many, small, clearly visible
    const dimCount = Math.floor(particleCount * 0.65);
    for (let i = 0; i < dimCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.9 + 0.4,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.35 + 0.25,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        layer: 'dim',
      });
    }

    // Medium stars
    const medCount = Math.floor(particleCount * 0.25);
    for (let i = 0; i < medCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.3 + 0.8,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        opacity: Math.random() * 0.35 + 0.45,
        twinkleSpeed: Math.random() * 0.015 + 0.006,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        layer: 'medium',
      });
    }

    // Bright foreground stars — few, larger, prominent JWST-like glow
    const brightCount = particleCount - dimCount - medCount;
    for (let i = 0; i < brightCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 1.2,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.25 + 0.72,
        twinkleSpeed: Math.random() * 0.025 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        layer: 'bright',
      });
    }
    particlesRef.current = particles;

    // Initialize nebula blobs — moderately visible cosmic dust clouds
    const nebulae: NebulaBlob[] = [
      { x: canvas.width * 0.15, y: canvas.height * 0.25, radius: 240, color: [110, 60, 200], opacity: 0.035 },
      { x: canvas.width * 0.75, y: canvas.height * 0.6, radius: 280, color: [50, 95, 180], opacity: 0.03 },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 220, color: [180, 70, 95], opacity: 0.025 },
      { x: canvas.width * 0.85, y: canvas.height * 0.15, radius: 180, color: [70, 145, 160], opacity: 0.025 },
    ];
    nebulaRef.current = nebulae;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const animate = (_time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula blobs first (background layer)
      nebulae.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `rgba(${nebula.color[0]}, ${nebula.color[1]}, ${nebula.color[2]}, ${nebula.opacity})`);
        gradient.addColorStop(0.5, `rgba(${nebula.color[0]}, ${nebula.color[1]}, ${nebula.color[2]}, ${nebula.opacity * 0.4})`);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Twinkle effect
        particle.twinklePhase += particle.twinkleSpeed;
        const twinkle = Math.sin(particle.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = particle.opacity * twinkle;

        // Mouse interaction — particles near cursor get brighter
        let mouseInfluence = 0;
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            mouseInfluence = (1 - dist / 150) * 0.4;
          }
        }

        const [r, g, b] = particle.color;
        const alpha = Math.min(currentOpacity + mouseInfluence, 1);

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();

        // Glow for bright stars
        if (particle.layer === 'bright' && particle.size > 1.1) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.12})`;
          ctx.fill();

          // Cross-spike effect for the brightest stars (JWST signature diffraction)
          if (particle.size > 1.5) {
            ctx.globalAlpha = alpha * 0.22;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
            ctx.lineWidth = 0.6;
            const spikeLen = particle.size * 3.5;
            ctx.beginPath();
            ctx.moveTo(particle.x - spikeLen, particle.y);
            ctx.lineTo(particle.x + spikeLen, particle.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y - spikeLen);
            ctx.lineTo(particle.x, particle.y + spikeLen);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // Subtle warm glow for medium+
        if (particle.layer !== 'dim' && particle.size > 0.9) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.05})`;
          ctx.fill();
        }
      });

      // Connection lines — only between medium/bright stars, reduced distance
      const connectStars = particles.filter(p => p.layer !== 'dim');
      for (let i = 0; i < connectStars.length; i++) {
        for (let j = i + 1; j < connectStars.length; j++) {
          const dx = connectStars[i].x - connectStars[j].x;
          const dy = connectStars[i].y - connectStars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.04;
            ctx.beginPath();
            ctx.moveTo(connectStars[i].x, connectStars[i].y);
            ctx.lineTo(connectStars[j].x, connectStars[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
