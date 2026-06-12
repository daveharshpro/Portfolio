import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import CursorFollower from "../components/CursorFollower";

export const metadata: Metadata = {
  title: "Harsh Dave | QA Engineer",
  description: "QA Engineer with 5+ years of experience in Playwright, Cypress, and automated testing across SaaS, WordPress, Real Estate and Travel domains.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
