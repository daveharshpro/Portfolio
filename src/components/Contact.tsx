"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactLinks = [
  { label: "Email", value: "daveharsh09@gmail.com", href: "mailto:daveharsh09@gmail.com", icon: "✉️" },
  { label: "LinkedIn", value: "linkedin.com/in/harsh-dave-52b44688", href: "https://www.linkedin.com/in/harsh-dave-52b44688/", icon: "💼" },
  { label: "GitHub", value: "github.com/daveharshpro", href: "https://github.com/daveharshpro", icon: "🐙" },
  { label: "Location", value: "Ahmedabad, India", href: "#", icon: "📍" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-label">
              <span className="section-label-num">06</span>
              <span className="section-label-line" />
              <span className="section-label-text">Get In Touch</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
              Let&apos;s Work<br /><span style={{ color: "var(--accent)" }}>Together</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Looking for a dedicated QA Engineer? I&apos;m open to new opportunities — full-time, part-time, or consulting.
              Let&apos;s talk about how I can help ship your product with confidence.
            </p>
            <a href="mailto:daveharsh09@gmail.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
              Send Me an Email →
            </a>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "16px", overflow: "hidden" }}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  transition: "background 0.3s",
                  textDecoration: "none",
                  color: "inherit",
                }}
                whileHover={{ background: "var(--bg-card-hover)", x: 6 } as never}
                transition={{ duration: 0.2 }}
              >
                <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{link.label}</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>{link.value}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--accent)", fontSize: "1.1rem" }}>↗</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700 }}>
            HD<span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Harsh Dave. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
