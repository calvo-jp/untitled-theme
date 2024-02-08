import { menuAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const menu = defineSlotRecipe({
  slots: menuAnatomy.keys(),
  className: "menu",
});
