<script lang="ts">
  import { setContext, type Snippet } from 'svelte';
  import { createTheme } from './create-theme.svelte.js';

  let {children}: {children?: Snippet} = $props();

  let theme = createTheme();

  setContext('theme', theme);
</script>

{@render children?.()}