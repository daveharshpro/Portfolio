"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "5+",  label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "4",   label: "Companies Served" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "6rem" }}>
      <div className="container">
        <div className="hero-grid">

          {/* Left — Text */}
          <motion.div className="hero-grid-left" variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 12px var(--accent)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Available for work
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
              Harsh<br />
              <span style={{ color: "var(--accent)" }}>Dave</span><span style={{ color: "var(--text-muted)" }}>.</span>
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
          >
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Avatar Photo */}
              <div style={{
                height: "340px",
                position: "relative",
                overflow: "hidden",
                background: "#0a0a0a"
              }}>
                {/* Ambient glow behind image */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)" }} />
                
                {/* Image with matching theme filters */}
                <img 
                  src="/profile.png" 
                  alt="Harsh Dave" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 10%",
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
                
                {/* Overlay gradient to blend into the card */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 60%, var(--bg-card) 100%)",
                  pointerEvents: "none"
                }} />
              </div>

              {/* Info */}
              <div style={{ padding: "1.75rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Harsh Dave</h2>
                <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>QA ENGINEER · ISTQB CERTIFIED</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { icon: "📍", text: "Ahmedabad, India" },
                    { icon: "🏢", text: "Momentum91 (DevX Company)" },
                    { icon: "🎯", text: "Playwright · Cypress · API Testing" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                      <span>{item.icon}</span><span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.4rem", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
