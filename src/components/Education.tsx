"use client";
import { motion, Variants } from "framer-motion";

// SVG icon components for Education cards
const AwardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const AutomationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const education = [
  {
    type: "Certification",
    title: "ISTQB Foundation Level",
    institution: "ISTQB — ITB",
    year: "2023",
    icon: <AwardIcon />,
    highlight: true,
  },
  {
    type: "Course",
    title: "Cypress — Modern Automation Testing + Frameworks",
    institution: "Online Course",
    year: "2022",
    icon: <TargetIcon />,
    highlight: false,
  },
  {
    type: "Course",
    title: "End-to-End Playwright on JavaScript",
    institution: "Online Course",
    year: "2023",
    icon: <AutomationIcon />,
    highlight: false,
  },
  {
    type: "Degree",
    title: "BE — Mechanical Engineering",
    institution: "G K Bharad Institute Of Engineering",
    year: "2012 — 2016",
    icon: <GradCapIcon />,
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "transparent" }}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <div className="section-label">
            <span className="section-label-num">05</span>
            <span className="section-label-line" />
            <span className="section-label-text">Learning</span>
          </div>
          <h2 className="section-title">Education &amp;<br /><span style={{ color: "var(--accent)" }}>Certifications</span></h2>
        </motion.div>

        <motion.div
          className="education-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ background: "var(--bg-card-hover)" } as never}
              style={{
                background: edu.highlight ? "var(--accent-dim)" : "var(--bg-card)",
                padding: "2.25rem",
                borderLeft: edu.highlight ? "2px solid var(--accent)" : "none",
                transition: "background 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "52px", height: "52px", borderRadius: "12px", flexShrink: 0,
                  background: edu.highlight ? "rgba(249,115,22,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${edu.highlight ? "var(--accent-secondary)" : "var(--border)"}`,
                  color: edu.highlight ? "var(--accent)" : "var(--text-secondary)",
                }}>{edu.icon}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: edu.highlight ? "var(--accent)" : "var(--text-muted)",
                  border: `1px solid ${edu.highlight ? "var(--accent-secondary)" : "var(--border)"}`,
                  borderRadius: "100px",
                  padding: "0.2rem 0.65rem",
                  letterSpacing: "0.06em",
                }}>
                  {edu.type}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", lineHeight: 1.3 }}>{edu.title}</h3>
              <p style={{ color: edu.highlight ? "var(--accent)" : "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "0.3rem" }}>{edu.institution}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
