import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const drawerAnatomy = dialogAnatomy.extendWith();

export const drawer = defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  className: "drawer",
});
