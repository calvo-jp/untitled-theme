<script lang="ts">
  import {setContext, type Snippet} from 'svelte';
  import {CONTEXT_KEY} from './constants.js';
  import {createTheme} from './create-theme.svelte.js';

  let {children}: {children?: Snippet} = $props();

  let theme = createTheme();

  setContext(CONTEXT_KEY, theme);
</script>

{@render children?.()}
