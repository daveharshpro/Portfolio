"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillGroups = [
  {
    category: "Automation",
    skills: ["Playwright", "Cypress", "Mocha & Chai", "JMeter"],
  },
  {
    category: "API & Backend",
    skills: ["Postman", "Swagger", "API Testing", "WordPress Backend"],
  },
  {
    category: "Cloud & Browsers",
    skills: ["BrowserStack", "TestMu AI (LambdaTest)", "Cross-Browser Testing", "AWS Services"],
  },
  {
    category: "Project Management",
    skills: ["Jira", "TestRail", "ClickUp", "Trello", "Redmine"],
  },
  {
    category: "Languages & Tools",
    skills: ["JavaScript", "GitHub", "Database & SQL", "ServiceNow"],
  },
  {
    category: "Testing Types",
    skills: ["Functional", "Regression", "Smoke", "Exploratory", "UAT", "Production Validation", "Android Testing", "iOS Testing"],
  },
  {
    category: "Domains",
    skills: ["Real Estate", "ERP", "CRM", "SaaS", "WordPress", "Travel & Booking"],
  },
  {
    category: "Methodologies",
    skills: ["Agile Scrum", "STLC", "SDLC", "Defect Management"],
  },
  {
    category: "AI Tools",
    skills: ["Claude Code", "Cursor", "Antigravity", "Codex", "Copilot"],
  },
];

const badgeAnim: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <div className="section-label">
            <span className="section-label-num">04</span>
            <span className="section-label-line" />
            <span className="section-label-text">Tech Stack</span>
          </div>
          <h2 className="section-title">Skills &amp;<br /><span style={{ color: "var(--accent)" }}>Tools</span></h2>
          <p className="section-subtitle">
            A comprehensive toolkit built over 5+ years of hands-on QA engineering across diverse technology stacks.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.06, ease: "easeOut" }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "2rem",
                alignItems: "flex-start",
                paddingBottom: "2rem",
                borderBottom: gi < skillGroups.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  paddingTop: "0.4rem",
                }}>
                  {group.category}
                </p>
                <motion.div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      className="tag"
                      variants={badgeAnim}
                      style={{ fontSize: "0.85rem", padding: "0.45rem 1rem" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
