import React from "react";
import { Button, Badge, Card, Avatar } from "../index";

export function Home({ navigate }: { navigate: (view: string) => void }) {
    return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <section style={{ background: "var(--color-rooted-evergreen)", padding: "100px 60px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
        <Badge tone="gold">For high-achieving, sandwiched moms</Badge>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-5xl)", color: "var(--text-inverse)", maxWidth: 780, margin: 0, lineHeight: "var(--leading-tight)" }}>
          You are not broken. We help you build the support you actually need.
        </h1>
        <p style={{ fontSize: "var(--text-lg)", color: "var(--color-orchid-mist)", maxWidth: 620, margin: 0 }}>
          Burnout isn't a personal failing — it's a sign the systems around you were never built for real responsibility. Coaching, retreats, and community to redesign daily life.
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          <Button variant="gold" size="lg" onClick={() => navigate("Programs")}>Explore programs</Button>
          <Button variant="ghost" size="lg" onClick={() => navigate("Community")} style={{ color: "var(--text-inverse)", borderColor: "rgba(255,255,255,0.4)" }}>Meet the community</Button>
        </div>
      </section>

      <section style={{ padding: "80px 60px", display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--text-heading)", textAlign: "center", maxWidth: 620 }}>Three ways to rebuild your support system</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { t: "1:1 Coaching", d: "Weekly sessions built around your real week, not a generic template.", tone: "evergreen" as const },
            { t: "Group Cohorts", d: "Move through a structured program alongside other sandwiched moms.", tone: "plum" as const },
            { t: "Retreats", d: "A few days away to reset, in person, with women who get it.", tone: "gold" as const }
          ].map(p => (
            <div key={p.t} style={{ width: 300 }}>
              <Card padding="28px">
                <Badge tone={p.tone}>{p.t}</Badge>
                <p style={{ marginTop: 16, fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)" }}>{p.d}</p>
                <a onClick={() => navigate("Programs")} style={{ cursor: "pointer", fontWeight: 600 }}>Learn more →</a>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)", padding: "80px 60px", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-script)", fontSize: "var(--text-4xl)", color: "var(--brand-gold)" }}>wellness</div>
          <p style={{ fontSize: "var(--text-xl)", color: "var(--text-heading)", fontStyle: "italic", lineHeight: "var(--leading-relaxed)" }}>
            "I stopped trying to fix myself and started rebuilding the systems around me. That's the whole shift."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar name="Priya Nair" size={44} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 700, color: "var(--text-heading)" }}>Priya Nair</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Group Cohort, Spring 2026</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
