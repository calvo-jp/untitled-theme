<script lang="ts">
  import '@fontsource/fira-code/400.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/rammetto-one/400.css';
  import '../app.css';

  import { ThemeProvider } from '$lib/theme-provider';
  import Navbar from './navbar.svelte';

  let {children} = $props();
</script>

<ThemeProvider>
  <Navbar />
  <main class="max-w-screen-lg mx-auto p-4 md:p-8 lg:p-12">
    {@render children()}
  </main>
</ThemeProvider>
