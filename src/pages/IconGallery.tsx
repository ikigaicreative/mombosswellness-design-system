import React from "react";
import { Icon, iconPaths, personaIcons, Tabs, type IconName, type PersonaId } from "../index";

const labels: Record<PersonaId | "all", string> = {
  all: "All 48",
  "running-on-empty": "Running on Empty",
  rebuilding: "Rebuilding",
  "on-pause": "on Pause",
  reinventing: "Reinventing",
  builds: "Who Builds",
};

export function IconGallery(_: { navigate?: (view: string) => void }) {
  const [active, setActive] = React.useState<string>(labels.all);
  const id = (Object.keys(labels) as (PersonaId | "all")[]).find((k) => labels[k] === active) ?? "all";
  const names = (id === "all" ? Object.keys(iconPaths) : personaIcons[id]) as IconName[];
  return (
    <div style={{ padding: "60px", display: "flex", flexDirection: "column", gap: 32, alignItems: "center", fontFamily: "var(--font-body)" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--text-heading)", margin: 0 }}>Icons</h1>
      <Tabs items={Object.values(labels)} active={active} onChange={setActive} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))", gap: 12, width: "100%", maxWidth: 960 }}>
        {names.map((n) => (
          <div key={n} data-icon={n} style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-soft)", padding: "16px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Icon name={n} size={32} style={{ color: "var(--brand-primary)" }} />
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
