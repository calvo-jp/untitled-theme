import { tooltipAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const tooltip = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  className: "tooltip",
});
