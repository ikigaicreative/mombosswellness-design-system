import React from "react";
import { Avatar, Badge, Card } from "../index";

export function Coaches(_: { navigate?: (view: string) => void }) {
    const coaches = [
    { name: "Dana Whitfield", cred: "ICF-certified, 12 yrs coaching working mothers", tone: "evergreen" as const },
    { name: "Priya Nair", cred: "Former COO, group cohort lead", tone: "plum" as const },
    { name: "Mo Osei", cred: "Family systems therapist, retreat facilitator", tone: "gold" as const }
  ];
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--text-body)", padding: "60px", display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--text-heading)", margin: 0 }}>Your coaches</h1>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
        {coaches.map(c => (
          <div key={c.name} style={{ width: 260 }}>
            <Card padding="24px">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" }}>
                <Avatar name={c.name} size={72} />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-heading)" }}>{c.name}</div>
                <Badge tone={c.tone}>Coach</Badge>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: 0 }}>{c.cred}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
