import React from "react";

export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  /** Use a heavier shadow for a card that should visually float above the page (e.g. a modal or featured card) */
  elevated?: boolean;
}

export function Card({ children, padding = "24px", elevated = false }: CardProps) {
  return (
    <div style={{
      background: "var(--surface-card)", borderRadius: "var(--radius-lg)",
      boxShadow: elevated ? "var(--shadow-lifted)" : "var(--shadow-card)",
      padding
    }}>{children}</div>
  );
}
