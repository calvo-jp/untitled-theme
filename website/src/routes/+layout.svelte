<script lang="ts">
  import '@fontsource/fira-code/400.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/rammetto-one/400.css';
  import '../app.css';

  import {ThemeProvider} from 'svelte-os-themes';
  import Navbar from './navbar.svelte';

  let {children} = $props();
</script>

<ThemeProvider>
  <Navbar />
  <main class="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">
    {@render children()}
  </main>
</ThemeProvider>
