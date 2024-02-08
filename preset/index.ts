import { definePreset } from "@pandacss/dev";
import { conditions } from "./conditions";
import { globalCss } from "./global-css";
import { theme } from "./theme";

export const preset = definePreset({
  theme,
  conditions,
  globalCss,
});
