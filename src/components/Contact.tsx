"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardSlide: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ── Shared gradient ID used across all icons ──────────────────────────── */
const GRAD_ID = "icon-brand-gradient";

const GradDef = () => (
  <defs>
    <linearGradient id={GRAD_ID} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00e5ff" />
      <stop offset="100%" stopColor="#b500ff" />
    </linearGradient>
  </defs>
);

/* ── Real brand / pixel-perfect SVG icons ─────────────────────────────── */

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradDef />
    <rect x="2" y="4" width="20" height="16" rx="3"
      stroke={`url(#${GRAD_ID})`} strokeWidth="1.7" />
    <path d="M2 8l8.172 5.743a3 3 0 0 0 3.656 0L22 8"
      stroke={`url(#${GRAD_ID})`} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <GradDef />
    {/* Official LinkedIn logo — rounded square with 'in' letterform */}
    <path
      fill={`url(#${GRAD_ID})`}
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={`url(#${GRAD_ID})`} xmlns="http://www.w3.org/2000/svg">
    <GradDef />
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradDef />
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke={`url(#${GRAD_ID})`} strokeWidth="1.7" strokeLinejoin="round"
      fill={`url(#${GRAD_ID})`} fillOpacity="0.12"
    />
    <circle cx="12" cy="9" r="2.5" fill={`url(#${GRAD_ID})`} />
  </svg>
);

const contactLinks = [
  { label: "Email",    value: "daveharsh09@gmail.com",               href: "mailto:daveharsh09@gmail.com",                    icon: <EmailIcon />    },
  { label: "LinkedIn", value: "linkedin.com/in/harsh-dave-52b44688", href: "https://www.linkedin.com/in/harsh-dave-52b44688/", icon: <LinkedInIcon /> },
  { label: "GitHub",   value: "github.com/daveharshpro",             href: "https://github.com/daveharshpro",                 icon: <GitHubIcon />   },
  { label: "Location", value: "Ahmedabad, India",                    href: "#",                                               icon: <LocationIcon /> },
];

export default function Contact() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
  return (
    <section id="contact" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="contact-grid">

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
            <h2 className="section-title" style={{ marginBottom: "1.25rem", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.1 }}>
              <span className="text-gradient">Say Hi!</span><br />
              and tell me about<br />your idea
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "400px" }}>
              Looking for a dedicated QA Engineer? I&apos;m open to new opportunities: full-time, part-time, or consulting.
              Let&apos;s ship your product with confidence.
            </p>
            <a href="mailto:daveharsh09@gmail.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
              Send Me an Email →
            </a>
          </motion.div>

          {/* Right — contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "16px", overflow: "hidden" }}>
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                custom={i}
                variants={cardSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ background: "var(--bg-card-hover)", x: 5 } as never}
                transition={{ duration: 0.22 }}
              >
                {/* Bare icon — no background, subtle 3D drop-shadow on hover */}
                <motion.span
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "32px", flexShrink: 0,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                  }}
                  whileHover={{
                    filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.7)) drop-shadow(0 0 6px rgba(0,229,255,0.18))",
                    y: -2,
                    transition: { duration: 0.2 },
                  } as never}
                >
                  {link.icon}
                </motion.span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {link.value}
                  </p>
                </div>

                {/* Diagonal arrow */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0, opacity: 0.6 }}>
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700 }}>
            HD<span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            © {year} Harsh Dave. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
