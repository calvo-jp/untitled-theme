<script lang="ts" module>
  import clsx from 'clsx';
  import type {Component} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {Merge} from 'type-fest';
  import type {IconRecipeProps} from './icon.recipe';

  export interface IconProps
    extends Merge<SvelteHTMLElements['svg'], IconRecipeProps> {
    as: Component<SvelteHTMLElements['svg']>;
  }
</script>

<script lang="ts">
  import {iconRecipe} from './icon.recipe';

  let {as: As, size, ...props}: IconProps = $props();
</script>

<As {...props} class={clsx(iconRecipe({size}), props.class)} />
