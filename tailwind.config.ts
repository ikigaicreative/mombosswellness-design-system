import type { Config } from "tailwindcss";
import { mbwPreset } from "./src/theme/tailwind.theme";

export default {
  presets: [mbwPreset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
} satisfies Config;
