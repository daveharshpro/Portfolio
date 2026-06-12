"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    num: "01",
    title: "Test Automation",
    desc: "Building scalable Playwright & Cypress automation frameworks for cross-browser web testing. Reducing manual effort and increasing test coverage significantly.",
    tags: ["Playwright", "Cypress", "JavaScript"],
  },
  {
    num: "02",
    title: "API Testing",
    desc: "End-to-end API validation using Postman & Swagger — verifying business logic, data integrity, and contract testing across all endpoints.",
    tags: ["Postman", "Swagger", "REST"],
  },
  {
    num: "03",
    title: "Manual & Exploratory QA",
    desc: "Functional, regression, smoke, UAT, and production validation testing across Web, Android, and iOS applications with meticulous attention to detail.",
    tags: ["Functional", "UAT", "Exploratory"],
  },
  {
    num: "04",
    title: "QA Strategy & Consulting",
    desc: "Designing QA processes, test plans, and STLC frameworks. Mentoring QA teams and establishing best practices for agile development environments.",
    tags: ["STLC", "Agile Scrum", "Mentoring"],
  },
  {
    num: "05",
    title: "Domain Testing",
    desc: "Specialized testing for Real Estate, ERP, CRM, SaaS, WordPress, and Travel & Booking platforms — complex workflows and business rule validation.",
    tags: ["Real Estate", "ERP", "CRM"],
  },
  {
    num: "06",
    title: "Performance Testing",
    desc: "Load, stress, and performance testing using JMeter to identify bottlenecks and ensure application scalability under production-level traffic.",
    tags: ["JMeter", "Load Testing", "Performance"],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-label">
            <span className="section-label-num">02</span>
            <span className="section-label-line" />
            <span className="section-label-text">What I Do</span>
          </div>
          <h2 className="section-title">Services &amp;<br /><span style={{ color: "var(--accent)" }}>Expertise</span></h2>
          <p className="section-subtitle" style={{ marginBottom: "3.5rem" }}>
            End-to-end quality assurance from strategy to execution — ensuring every product ships with confidence.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", borderRadius: "16px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{
                background: "var(--bg-card)",
                padding: "2.25rem",
                transition: "background 0.3s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ background: "var(--bg-card-hover)" } as never}
            >
              {/* Big faded number */}
              <div style={{
                position: "absolute", top: "1rem", right: "1.5rem",
                fontFamily: "var(--font-heading)", fontSize: "4rem", fontWeight: 900,
                color: "rgba(249,115,22,0.06)", lineHeight: 1, pointerEvents: "none",
              }}>
                {s.num}
              </div>

              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "var(--accent-dim)", border: "1px solid rgba(249,115,22,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
              }}>
                <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600 }}>{s.num}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {s.tags.map((tag, ti) => (
                  <span key={ti} className="tag" style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
