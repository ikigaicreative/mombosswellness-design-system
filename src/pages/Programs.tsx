import React from "react";
import { Tabs, Card, Badge, Button, Alert, Modal, Input } from "../index";

export function Programs({ navigate }: { navigate: (view: string) => void }) {
    const [active, setActive] = React.useState("Group Cohorts");
  const [open, setOpen] = React.useState(false);
  const data = {
    "1:1 Coaching": { tone: "evergreen" as const, price: "$450/mo", desc: "Weekly 45-minute sessions, async support between calls, and a plan rebuilt around your actual week — not a generic template.", bullets: ["Weekly 1:1 calls", "Unlimited async check-ins", "Personalized systems audit"] },
    "Group Cohorts": { tone: "plum" as const, price: "$220/mo", desc: "An 8-week structured program alongside 10-12 other sandwiched moms, with weekly group calls and a private community.", bullets: ["Weekly group calls", "Private cohort community", "Structured 8-week curriculum"] },
    "Retreats": { tone: "gold" as const, price: "From $1,800", desc: "3-day in-person retreats to reset, disconnect, and rebuild — small groups, held twice a year.", bullets: ["3 days, small group (max 20)", "All meals + lodging included", "Twice yearly, limited seats"] }
  };
  const d = data[active as keyof typeof data];
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--text-body)", padding: "60px", display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--text-heading)", margin: 0 }}>Programs</h1>
      <Tabs items={Object.keys(data)} active={active} onChange={setActive} />
      <div style={{ maxWidth: 640, width: "100%" }}>
        <Card padding="32px" elevated>
          <Badge tone={d.tone}>{active}</Badge>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--text-heading)", margin: "16px 0 8px" }}>{d.price}</div>
          <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)" }}>{d.desc}</p>
          <ul style={{ paddingLeft: 20, lineHeight: "var(--leading-relaxed)" }}>{d.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          <Button variant="primary" onClick={() => setOpen(true)}>Book a discovery call</Button>
        </Card>
      </div>
      {active === "Retreats" && <div style={{ maxWidth: 640, width: "100%" }}><Alert tone="warning" title="Almost full">Only 3 spots left for the September retreat.</Alert></div>}
      <Modal open={open} onClose={() => setOpen(false)} title="Book your discovery call">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input label="Name" placeholder="Your name" />
          <Input label="Email" placeholder="you@email.com" type="email" />
          <Button variant="primary" onClick={() => setOpen(false)}>Confirm request</Button>
        </div>
      </Modal>
    </div>
  );
}
