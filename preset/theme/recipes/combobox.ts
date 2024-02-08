import { comboboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const combobox = defineSlotRecipe({
  slots: comboboxAnatomy.keys(),
  className: "combobox",
});
