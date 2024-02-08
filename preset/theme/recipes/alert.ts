import { createAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const alertAnatomy = createAnatomy("alert", [
  "root",
  "icon",
  "title",
  "content",
  "description",
]);

export const alert = defineSlotRecipe({
  slots: alertAnatomy.keys(),
  className: "alert",
});
