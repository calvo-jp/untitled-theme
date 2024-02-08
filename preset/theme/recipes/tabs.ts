import { tabsAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const tabs = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  className: "tabs",
});
