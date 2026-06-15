"use client";
import { motion, useMotionValue, useTransform, useSpring, Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "5+",   label: "Years Experience" },
  { value: "20+",  label: "Projects Delivered" },
  { value: "4",    label: "Companies Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const infoRows = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    text: "Ahmedabad, India",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    text: "Momentum91 (DevX Company)",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    text: "Playwright · Cypress · API Testing",
  },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 180, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 180, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "6rem" }}>
      <div className="container" style={{ position: "relative" }}>
        {/* Diagonal decorative glow line */}
        <div style={{ position: "absolute", top: "0%", right: "-10%", width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-secondary), transparent)", transform: "rotate(-25deg)", opacity: 0.5, pointerEvents: "none" }} />

        <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>

          {/* Left — Text */}
          <motion.div className="hero-grid-left" variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 12px var(--accent)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Available for work
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
              Hello, I&apos;m<br />
              <span className="text-gradient">Harsh Dave</span><span style={{ color: "var(--text-muted)" }}>.</span>
            </motion.h1>

            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <span style={{ height: "1px", width: "40px", background: "var(--accent)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                QA ENGINEER · ISTQB CERTIFIED
              </span>
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "520px", marginBottom: "2.5rem" }}>
              Quality Assurance Engineer with <strong style={{ color: "var(--text-primary)" }}>5+ years of experience</strong> delivering
              high-quality web and mobile applications across SaaS, WordPress, Travel, and Real Estate domains.
            </motion.p>

            <motion.div className="btn-group" variants={fadeUp} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#experience" className="btn btn-primary">View Experience →</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </motion.div>
          </motion.div>

          {/* Right — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ perspective: "1200px" }}
          >
            {/* Rotating gradient border wrapper */}
            <div style={{ position: "relative", borderRadius: "22px", padding: "2px", overflow: "hidden" }}>

              {/* Spinning conic-gradient acting as the border */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  width: "220%", height: "220%",
                  marginTop: "-110%", marginLeft: "-110%",
                  background: "conic-gradient(from 0deg, #b500ff 0%, #00e5ff 35%, #ff0055 65%, #b500ff 100%)",
                  opacity: 0.85,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* 3D-tilt card */}
              <motion.div
                ref={cardRef}
                style={{
                  position: "relative",
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                  willChange: "transform",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* ── Photo area ─────────────────────────────────────── */}
                <div style={{ height: "340px", position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
                  {/* Ambient glow behind image */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }} />

                  {/* Decorative circles */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "320px", height: "320px", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "50%", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "1px", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1px", height: "100%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

                  {/* Photo */}
                  <img
                    src="/avatar-neon.jpg"
                    alt="Harsh Dave"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center center",
                      filter: "contrast(1.05) brightness(0.95)",
                      transition: "transform 0.5s ease-out, filter 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.filter = "contrast(1.1) brightness(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.filter = "contrast(1.05) brightness(0.95)";
                    }}
                  />

                  {/* Bottom fade to card */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, var(--bg-card) 100%)", pointerEvents: "none" }} />


                </div>

                {/* ── Info section ─────────────────────────────────── */}
                <div style={{ padding: "1.4rem 1.75rem 1.75rem" }}>
                  {/* Name + status */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.45rem", fontWeight: 800 }}>
                      Harsh Dave
                    </h2>
                    {/* Live green dot */}
                    <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }}
                      />
                      Active
                    </span>
                  </div>

                  {/* Gradient role text */}
                  <p className="text-gradient" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.09em", marginBottom: "1.1rem" }}>
                    QA ENGINEER · ISTQB CERTIFIED
                  </p>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "linear-gradient(90deg, var(--accent), var(--accent-secondary), transparent)", marginBottom: "1.1rem", opacity: 0.4 }} />

                  {/* Info rows */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
                    {infoRows.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent)", display: "flex", alignItems: "center", flexShrink: 0 }}>{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>


                </div>

                {/* Subtle inner glow overlay (3D sheen) */}
                <motion.div
                  style={{
                    position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "20px",
                    background: useTransform(
                      [mouseX, mouseY] as never,
                      ([x, y]: number[]) =>
                        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.05) 0%, transparent 60%)`
                    ),
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ marginTop: "5rem" }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ background: "var(--bg-card)", padding: "1.75rem", textAlign: "center" }}>
              <div className="text-gradient" style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.4rem", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
