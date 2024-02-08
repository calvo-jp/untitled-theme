import { createAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const stepperAnatomy = createAnatomy("stepper");

export const stepper = defineSlotRecipe({
  slots: stepperAnatomy.keys(),
  className: "stepper",
});
