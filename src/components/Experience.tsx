"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const experiences = [
  {
    role: "QA Engineer",
    company: "Momentum91 (A DevX Company)",
    period: "Sept 2025 — Present",
    type: "Full-time · Office",
    location: "Ahmedabad, India",
    points: [
      "Led end-to-end QA for a real estate property management platform.",
      "Built a scalable Playwright automation framework for cross-browser testing.",
      "Managed parallel QA during deployments, validating live production data.",
    ],
    tags: ["Playwright", "Real Estate", "Production Testing"],
    current: true,
  },
  {
    role: "QA Consultant",
    company: "Freelancer",
    period: "Feb 2025 — Aug 2025",
    type: "Part-time · Remote",
    location: "Remote",
    points: [
      "Streamlined QA processes for a startup travel organization.",
      "Designed and implemented efficient Playwright automation architecture.",
      "Provided hands-on mentorship to fresher QA team members.",
    ],
    tags: ["Playwright", "Travel Domain", "Mentoring"],
    current: false,
  },
  {
    role: "QA Engineer",
    company: "Multidots Inc.",
    period: "Oct 2023 — Jan 2025",
    type: "Full-time · Remote",
    location: "Remote · USA",
    points: [
      "Playwright automation with extensive WordPress backend operations.",
      "Managed and tested the Multicollab plugin for six months.",
      "Evaluated newly developed plugins across the Multidots product suite.",
    ],
    tags: ["Playwright", "WordPress", "Plugin Testing"],
    current: false,
  },
  {
    role: "Quality Assurance Engineer",
    company: "Oneclick IT Consultancy",
    period: "Dec 2021 — July 2023",
    type: "Full-time · Office",
    location: "Ahmedabad, India",
    points: [
      "Built Cypress automated test scripts — 30% reduction in testing time.",
      "Collaborated to resolve critical bugs, ensuring seamless user experience.",
      "Contributed to comprehensive test suite creation using Mocha and Chai.",
    ],
    tags: ["Cypress", "Mocha", "Chai"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg)" }}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <div className="section-label">
            <span className="section-label-num">03</span>
            <span className="section-label-line" />
            <span className="section-label-text">Work History</span>
          </div>
          <h2 className="section-title">Where I&apos;ve<br /><span style={{ color: "var(--accent)" }}>Worked</span></h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "16px", overflow: "hidden" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="experience-grid"
              style={{
                background: "var(--bg-card)",
                transition: "background 0.3s",
              }}
              whileHover={{ background: "var(--bg-card-hover)" } as never}
            >
              {/* Left column */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  {exp.current && (
                    <span style={{
                      padding: "0.2rem 0.6rem", borderRadius: "100px",
                      background: "var(--accent-dim)", border: "1px solid var(--accent-secondary)",
                      fontSize: "0.7rem", color: "var(--text-primary)", fontWeight: 600, letterSpacing: "0.05em"
                    }}>CURRENT</span>
                  )}
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.35rem" }}>{exp.period}</p>
                <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)" }}>{exp.type}</p>
                <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: "0.2rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--accent)" }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {exp.location}
                </p>
              </div>

              {/* Right column */}
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.25rem" }}>{exp.role}</h3>
                <p style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 500, marginBottom: "1.1rem" }}>{exp.company}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {exp.points.map((p, pi) => (
                    <li key={pi} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", gap: "0.6rem" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.tags.map((tag, ti) => (
                    <span key={ti} className="tag" style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
