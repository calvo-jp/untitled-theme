import { carouselAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const carousel = defineSlotRecipe({
  slots: carouselAnatomy.keys(),
  className: "carousel",
});
