import { paginationAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const pagination = defineSlotRecipe({
  slots: paginationAnatomy.keys(),
  className: "pagination",
});
