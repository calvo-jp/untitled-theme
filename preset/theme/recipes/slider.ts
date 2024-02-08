import { sliderAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const slider = defineSlotRecipe({
  slots: sliderAnatomy.keys(),
  className: "slider",
});
