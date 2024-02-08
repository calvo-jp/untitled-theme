import { tagsInputAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const tagsInput = defineSlotRecipe({
  slots: tagsInputAnatomy.keys(),
  className: "tagsInput",
});
