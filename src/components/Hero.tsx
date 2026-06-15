"use client";
import { motion, useMotionValue, useTransform, useSpring, Variants, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

/* ── Live test data ────────────────────────────────────────────────── */
const TESTS = [
  { suite: "homepage.spec.ts",  name: "page title is correct",           time: "28ms"  },
  { suite: "homepage.spec.ts",  name: "loads within 2 seconds",          time: "312ms" },
  { suite: "auth.spec.ts",      name: "login with valid credentials",     time: "1.2s"  },
  { suite: "auth.spec.ts",      name: "invalid password shows error",     time: "234ms" },
  { suite: "api.spec.ts",       name: "GET /users returns 200",           time: "45ms"  },
  { suite: "api.spec.ts",       name: "POST /auth validates payload",     time: "67ms"  },
  { suite: "checkout.spec.ts",  name: "cart totals are accurate",         time: "890ms" },
  { suite: "checkout.spec.ts",  name: "payment gateway integration",      time: "2.1s"  },
  { suite: "mobile.spec.ts",    name: "responsive layout at 375px",       time: "156ms" },
  { suite: "mobile.spec.ts",    name: "touch gestures fire correctly",    time: "89ms"  },
];

const DURATION_MS = 380; // ms per test reveal

/* ── Tiny stat chip ────────────────────────────────────────────────── */
function StatChip({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "0.9rem 1.2rem",
      borderRadius: "14px",
      background: "rgba(8,8,20,0.8)",
      backdropFilter: "blur(12px)",
      border: `1px solid ${accent}33`,
      boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 12px ${accent}18`,
      flex: 1,
      minWidth: 0,
    }}>
      <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 800, background: `linear-gradient(135deg, ${accent}, #ffffff88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {value}
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginTop: "0.2rem", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  /* ── Terminal animation state ────── */
  const [testCount, setTestCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) {
      const t = setTimeout(() => { setTestCount(0); setIsDone(false); }, 3200);
      return () => clearTimeout(t);
    }
    if (testCount < TESTS.length) {
      const t = setTimeout(() => setTestCount(c => c + 1), DURATION_MS);
      return () => clearTimeout(t);
    } else {
      setIsDone(true);
    }
  }, [testCount, isDone]);

  const progress = Math.round((testCount / TESTS.length) * 100);

  /* ── Scroll-to-reveal ─────────────────────────────────────────────── */
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "6rem", paddingBottom: "4rem", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", marginTop: "auto", marginBottom: "auto", width: "100%" }}>
        {/* Decorative glow line */}
        <div style={{ position: "absolute", top: "0%", right: "-10%", width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-secondary), transparent)", transform: "rotate(-25deg)", opacity: 0.5, pointerEvents: "none" }} />

        <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>

          {/* ── Left — Text (unchanged) ─────────────────────────────── */}
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

          {/* ── Right — Live Test Terminal ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0, width: "100%" }}
          >
            {/* Terminal window */}
            <div style={{
              borderRadius: "18px",
              background: "rgba(6,6,16,0.95)",
              border: "1px solid rgba(0,229,255,0.18)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
              maxWidth: "100%",
              minWidth: 0,
            }}>

              {/* ── Title bar ─── */}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                padding: "clamp(0.6rem, 2vw, 0.85rem) clamp(0.8rem, 3vw, 1.25rem)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.03)",
              }}>
                {/* macOS traffic lights */}
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "block", flexShrink: 0 }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "block", flexShrink: 0 }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "block", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: "0.5rem", opacity: 0.7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1, minWidth: 0 }}>
                  playwright run --project=chromium
                </span>
                {/* Live pulsing dot */}
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.35rem", flexShrink: 0 }}>
                  <motion.span
                    animate={{ opacity: isDone ? 0 : [1, 0.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ width: 6, height: 6, borderRadius: "50%", background: isDone ? "#22c55e" : "#00e5ff", display: "block" }}
                  />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: isDone ? "#22c55e" : "#00e5ff" }}>
                    {isDone ? "DONE" : "RUNNING"}
                  </span>
                </span>
              </div>

              {/* ── Terminal body ─── */}
              <div style={{ padding: "clamp(0.8rem, 3vw, 1.1rem) clamp(0.8rem, 4vw, 1.4rem)", height: "400px", overflow: "hidden", fontFamily: "var(--font-mono)", fontSize: "0.75rem", display: "flex", flexDirection: "column" }}>

                {/* Prompt header */}
                <div style={{ color: "#00e5ff", marginBottom: "0.85rem", opacity: 0.7, wordBreak: "break-word", whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
                  <span style={{ color: "#b500ff" }}>harsh@qa</span>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>:</span>
                  <span style={{ color: "#00e5ff" }}>~/portfolio</span>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>$ </span>
                  <span style={{ color: "rgba(255,255,255,0.85)" }}>npx playwright test</span>
                </div>

                {/* Running banner */}
                <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem", fontSize: "0.68rem" }}>
                  Running {TESTS.length} tests using {Math.min(testCount + 1, 4)} workers
                </div>

                {/* Tests — revealed one by one */}
                <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: "0.18rem", marginBottom: "0.6rem" }}>
                  <AnimatePresence>
                    {TESTS.slice(0, testCount).map((test, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ display: "flex", alignItems: "center", gap: "0.55rem", minWidth: 0 }}
                      >
                        {/* Check */}
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {/* Suite name */}
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "35%", flexShrink: 1, minWidth: 0 }}>{test.suite}</span>
                        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem", flexShrink: 0 }}>›</span>
                        {/* Test name */}
                        <span style={{ color: "rgba(255,255,255,0.82)", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{test.name}</span>
                        {/* Time */}
                        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.65rem", marginLeft: "auto", flexShrink: 0 }}>{test.time}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Cursor blink while running */}
                  {!isDone && testCount < TESTS.length && (
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}
                    >
                      <span style={{ width: 11, height: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <motion.span
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e5ff", display: "block" }}
                        />
                      </span>
                      <span style={{ color: "rgba(0,229,255,0.5)", fontSize: "0.68rem" }}>running test…</span>
                    </motion.div>
                  )}
                </div>

                {/* Progress bar — always pinned to bottom */}
                <div style={{ flexShrink: 0, marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem" }}>Progress</span>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem" }}>{progress}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 100, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                    <motion.div
                      style={{
                        height: "100%", borderRadius: 100,
                        background: "linear-gradient(90deg, #00e5ff, #b500ff)",
                        boxShadow: "0 0 8px rgba(0,229,255,0.6)",
                      }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Summary — shown when all done */}
                <AnimatePresence>
                  {isDone && (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                        paddingTop: "0.85rem",
                        display: "flex", flexDirection: "column", gap: "0.3rem",
                      }}
                    >
                      <div style={{ display: "flex", gap: "1.5rem" }}>
                        <span style={{ color: "#22c55e" }}>✓ {TESTS.length} passed</span>
                        <span style={{ color: "rgba(255,255,255,0.3)" }}>0 failed</span>
                        <span style={{ color: "rgba(255,255,255,0.3)" }}>0 skipped</span>
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem" }}>
                        Duration: 4.8s · {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Stat chips ─── */}
            <motion.div
              style={{ display: "flex", gap: "0.75rem", minWidth: 0, width: "100%" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <StatChip label="Pass Rate" value="100%" accent="#22c55e" />
              <StatChip label="Bugs Found" value="0" accent="#b500ff" />
              <StatChip label="API Coverage" value="98%" accent="#00e5ff" />
            </motion.div>
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
