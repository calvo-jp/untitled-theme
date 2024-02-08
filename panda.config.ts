import { defineConfig } from "@pandacss/dev";
import { preset } from "./preset";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", preset],
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: {
            value: "var(--font-sans)",
          },
        },
      },
    },
  },
  clean: true,
  outdir: "styled-system",
  jsxFramework: "react",
  lightningcss: true,
});
