import React from "react";
import { NavBar, Footer } from "./index";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Coaches } from "./pages/Coaches";
import { Community } from "./pages/Community";
import { IconGallery } from "./pages/IconGallery";

// Playground: the sample marketing site from the design system, built from the components.
// Lovable does not copy App.tsx, main.tsx or src/pages/ into consuming projects.
const screens = { Home, Programs, Coaches, Community, Icons: IconGallery } as const;
type View = keyof typeof screens;

export default function App() {
  const [view, setView] = React.useState<View>("Home");
  const Screen = screens[view];
  return (
    <div>
      <NavBar links={Object.keys(screens)} activeLink={view} onNav={(v) => setView(v as View)} cta="Book a discovery call" />
      <Screen navigate={(v: string) => setView(v as View)} />
      <Footer />
    </div>
  );
}
