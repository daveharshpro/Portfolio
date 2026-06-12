"use client";
import { motion, Variants } from "framer-motion";

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
    icon: "🏆",
    highlight: true,
  },
  {
    type: "Course",
    title: "Cypress — Modern Automation Testing + Frameworks",
    institution: "Online Course",
    year: "2022",
    icon: "🎯",
    highlight: false,
  },
  {
    type: "Course",
    title: "End-to-End Playwright on JavaScript",
    institution: "Online Course",
    year: "2023",
    icon: "🤖",
    highlight: false,
  },
  {
    type: "Degree",
    title: "BE — Mechanical Engineering",
    institution: "G K Bharad Institute Of Engineering",
    year: "2012 — 2016",
    icon: "🎓",
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
                <span style={{ fontSize: "2rem" }}>{edu.icon}</span>
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
