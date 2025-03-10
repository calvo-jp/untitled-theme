<script lang="ts">
  import {page} from '$app/state';
  import MetaTags from '$lib/meta-tags.svelte';

  let {data} = $props();
  let icon = $derived(data.icon);
</script>

<svelte:head>
  <title>{icon.name.pascal} | Untitled Theme</title>
</svelte:head>

<MetaTags
  title="{icon.name.pascal} | Untitled Theme Icons"
  description="Browse all of Untitled UI's icons"
  image="{page.url.origin}/icons-opengraph-banner.png"
/>
