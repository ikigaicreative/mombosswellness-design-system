import React from "react";
import workmark from "../../assets/logos/mbw-workmark-color.svg";

export interface NavBarProps {
  links?: string[];
  activeLink?: string;
  onNav?: (link: string) => void;
  cta?: string;
  /** Workmark image URL. Defaults to the bundled color workmark. */
  logoSrc?: string;
}

export function NavBar({ links = [], activeLink, onNav, cta = "Book a call", logoSrc = workmark }: NavBarProps) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 40px", background: "var(--surface-page)", fontFamily: "var(--font-display)"
    }}>
      <img src={logoSrc} alt="Mom Boss Wellness" style={{ height: "52px" }} />
      <div style={{ display: "flex", gap: "32px" }}>
        {links.map(l => (
          <a key={l} onClick={() => onNav && onNav(l)} style={{
            cursor: "pointer", textDecoration: "none", fontWeight: 600, fontSize: "var(--text-base)",
            color: l === activeLink ? "var(--brand-primary)" : "var(--text-heading)"
          }}>{l}</a>
        ))}
      </div>
      <button style={{
        border: "none", cursor: "pointer", borderRadius: "var(--radius-pill)", padding: "10px 22px",
        background: "var(--brand-primary)", color: "var(--text-inverse)", fontWeight: 600, fontFamily: "var(--font-display)"
      }}>{cta}</button>
    </nav>
  );
}
