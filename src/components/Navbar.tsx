"use client";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const navItems = ["About", "Services", "Experience", "Skills", "Education", "Contact"];

const navVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const linkVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <a href="#hero" className="nav-logo">
          HD<span>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <motion.nav
            className="nav-links"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                variants={linkVariants}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
          <motion.a 
            href="mailto:daveharsh09@gmail.com" 
            className="nav-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
