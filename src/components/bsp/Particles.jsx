import React, { useEffect, useRef } from "react";

/**
 * Animated particle field — one consistent visual language with different
 * motion behaviors per "mode". Each mode abstractly evokes its category:
 *
 *   drift     — Hero. Random ambient haze, atmospheric.
 *   cluster   — Home & Lifestyle. Particles settle toward 3 soft centers.
 *   float     — Family & Childcare. Gentle upward drift with sway, like seeds.
 *   linear    — Personal Accessories. Sharp parallel diagonal stream.
 *   orbit     — Premium Everyday Goods. Concentric rotating rings.
 *
 * Pure canvas, no deps. Each instance is independent.
 */

const MODES = {
  drift: {
    init: (p) => {
      p.vx = (Math.random() - 0.5) * 0.20;
      p.vy = (Math.random() - 0.5) * 0.20;
    },
    update: (p, w, h) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = w + 10;
      else if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      else if (p.y > h + 10) p.y = -10;
    },
  },

  // Home & Lifestyle — settled clusters around 3 soft centers
  cluster: {
    init: (p, w, h, ctx) => {
      p.attractor = ctx.attractors[Math.floor(Math.random() * ctx.attractors.length)];
      p.vx = (Math.random() - 0.5) * 0.08;
      p.vy = (Math.random() - 0.5) * 0.08;
    },
    update: (p, w, h) => {
      const dx = p.attractor.x - p.x;
      const dy = p.attractor.y - p.y;
      const dist = Math.hypot(dx, dy) || 0.01;
      // Weak attraction; falls off near attractor so particles orbit, not collapse
      const pull = Math.min(0.012, dist * 0.0008);
      p.vx += (dx / dist) * pull;
      p.vy += (dy / dist) * pull;
      // Damping
      p.vx *= 0.965;
      p.vy *= 0.965;
      // Tiny brownian jitter so it doesn't fully freeze
      p.vx += (Math.random() - 0.5) * 0.01;
      p.vy += (Math.random() - 0.5) * 0.01;
      p.x += p.vx;
      p.y += p.vy;
    },
  },

  // Family & Childcare — gentle upward float with horizontal sway
  float: {
    init: (p, w, h) => {
      p.vx = (Math.random() - 0.5) * 0.04;
      p.vy = -(0.15 + Math.random() * 0.35);
      p.swayPhase = Math.random() * Math.PI * 2;
      p.swaySpeed = 0.008 + Math.random() * 0.018;
      p.swayAmp = 0.10 + Math.random() * 0.18;
    },
    update: (p, w, h) => {
      p.swayPhase += p.swaySpeed;
      p.x += p.vx + Math.sin(p.swayPhase) * p.swayAmp;
      p.y += p.vy;
      if (p.y < -20) {
        p.y = h + 10 + Math.random() * 20;
        p.x = Math.random() * w;
      }
      if (p.x < -20) p.x = w + 20;
      else if (p.x > w + 20) p.x = -20;
    },
  },

  // Personal Accessories — sharp parallel diagonal stream
  linear: {
    init: (p, w, h) => {
      const angle = -Math.PI / 7; // about -25°, gentle upward right
      const speed = 0.45 + Math.random() * 0.35;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
    },
    update: (p, w, h) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x > w + 20) {
        p.x = -20;
        p.y = Math.random() * (h + 40) - 20;
      } else if (p.x < -20) {
        p.x = w + 20;
        p.y = Math.random() * (h + 40) - 20;
      }
      if (p.y < -20) {
        p.y = h + 20;
        p.x = Math.random() * (w + 40) - 20;
      } else if (p.y > h + 20) {
        p.y = -20;
        p.x = Math.random() * (w + 40) - 20;
      }
    },
  },

  // Premium Everyday Goods — concentric orbital rings
  orbit: {
    init: (p, w, h, ctx) => {
      const cx = w / 2;
      const cy = h / 2;
      const ringCount = ctx.ringCount;
      const ring = Math.floor(Math.random() * ringCount);
      const ringStep = Math.min(w, h) * 0.42 / ringCount;
      const radius = (ring + 0.5) * ringStep + (Math.random() - 0.5) * ringStep * 0.4;
      const angle = Math.random() * Math.PI * 2;
      p.cx = cx;
      p.cy = cy;
      p.angle = angle;
      p.radius = radius;
      p.angularSpeed = (0.0014 + Math.random() * 0.0012) * (ring % 2 === 1 ? -1 : 1);
      p.x = cx + Math.cos(angle) * radius;
      p.y = cy + Math.sin(angle) * radius;
    },
    update: (p, w, h) => {
      p.cx = w / 2;
      p.cy = h / 2;
      p.angle += p.angularSpeed;
      p.x = p.cx + Math.cos(p.angle) * p.radius;
      p.y = p.cy + Math.sin(p.angle) * p.radius;
    },
  },
};

export default function Particles({
  mode = "drift",
  density = 0.6,
  particleColor = "#FAFAFA",
  maxSize = 1.6,
  style,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const modeConfig = MODES[mode] || MODES.drift;

    let particles = [];
    let raf = 0;
    let resizeObs = null;
    const modeCtx = { attractors: [], ringCount: 5 };

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (mode === "cluster") {
        modeCtx.attractors = [
          { x: rect.width * 0.28, y: rect.height * 0.35 },
          { x: rect.width * 0.72, y: rect.height * 0.30 },
          { x: rect.width * 0.50, y: rect.height * 0.75 },
        ];
      }

      const target = Math.max(60, Math.floor((rect.width * rect.height) / 10000 * density));
      particles = new Array(target);
      for (let i = 0; i < target; i++) {
        const p = {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * maxSize + 0.3,
          baseOpacity: Math.random() * 0.55 + 0.15,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.003 + Math.random() * 0.005,
        };
        modeConfig.init(p, rect.width, rect.height, modeCtx);
        particles[i] = p;
      }
    };

    const frame = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx2d.clearRect(0, 0, w, h);

      // Bucket-by-opacity batching: groups particles into 8 alpha buckets so
      // we issue 8 fill() calls instead of one per particle.
      const buckets = [[], [], [], [], [], [], [], []];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduced) {
          modeConfig.update(p, w, h);
          p.pulsePhase += p.pulseSpeed;
        }

        let edgeFade = 1;
        if (mode !== "orbit") {
          const ex = Math.min(p.x, w - p.x) / Math.max(40, w * 0.15);
          const ey = Math.min(p.y, h - p.y) / Math.max(40, h * 0.15);
          edgeFade = Math.max(0, Math.min(1, Math.min(ex, ey) * 1.6 + 0.25));
        }
        const pulseFactor = 0.7 + 0.3 * Math.sin(p.pulsePhase);
        const opacity = p.baseOpacity * pulseFactor * edgeFade;
        if (opacity < 0.02) continue;

        const b = Math.min(7, Math.max(0, Math.floor(opacity * 8)));
        buckets[b].push(p);
      }

      ctx2d.fillStyle = particleColor;
      for (let b = 0; b < 8; b++) {
        const list = buckets[b];
        if (list.length === 0) continue;
        ctx2d.globalAlpha = (b + 0.5) / 8;
        ctx2d.beginPath();
        for (let j = 0; j < list.length; j++) {
          const p = list[j];
          ctx2d.moveTo(p.x + p.size, p.y);
          ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        ctx2d.fill();
      }
      ctx2d.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    };

    setup();
    raf = requestAnimationFrame(frame);

    if ("ResizeObserver" in window) {
      resizeObs = new ResizeObserver(() => setup());
      resizeObs.observe(canvas);
    } else {
      window.addEventListener("resize", setup);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (resizeObs) resizeObs.disconnect();
      else window.removeEventListener("resize", setup);
    };
  }, [mode, density, particleColor, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        display: "block",
        ...style,
      }}
    />
  );
}
