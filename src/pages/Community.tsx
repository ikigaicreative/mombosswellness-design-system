import React from "react";
import { Card, Badge, Input, Textarea, Checkbox, Switch, Button, Alert } from "../index";

export function Community(_: { navigate?: (view: string) => void }) {
    const [agree, setAgree] = React.useState(false);
  const [email, setEmail] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  const events = [
    { d: "Aug 12", t: "Monthly community call" },
    { d: "Sep 4-6", t: "Fall retreat — Sonoma, CA" },
    { d: "Oct 2", t: "Ask-a-coach office hours" }
  ];
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--text-body)", padding: "60px", display: "flex", flexDirection: "column", gap: 40, alignItems: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--text-heading)", margin: 0 }}>Community</h1>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", maxWidth: 900 }}>
        <div style={{ width: 320 }}>
          <Card padding="24px">
            <Badge tone="plum">Upcoming events</Badge>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {events.map(e => (
                <div key={e.t} style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-primary)", minWidth: 64 }}>{e.d}</span>
                  <span>{e.t}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div style={{ width: 380 }}>
          <Card padding="24px" elevated>
            <Badge tone="gold">Join the community</Badge>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" placeholder="you@email.com" type="email" value={undefined} />
              <Textarea label="What's pulling you in different directions right now?" rows={3} />
              <Checkbox label="I'm ready to show up for weekly calls" checked={agree} onChange={() => setAgree(!agree)} />
              <Switch label="Send me the weekly check-in email" checked={email} onChange={() => setEmail(!email)} />
              <Button variant="primary" onClick={() => setSent(true)}>Request to join</Button>
              {sent && <Alert tone="success" title="You're on the list">We'll email your intake form shortly.</Alert>}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
