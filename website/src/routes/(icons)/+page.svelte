<script lang="ts">
  import {page} from '$app/stores';
  import MetaTags from '$lib/meta-tags.svelte';
</script>

<svelte:head>
  <title>Icons | Untitled Theme</title>
</svelte:head>

<MetaTags
  title="Untitled Theme Icons"
  description="Browse all of Untitled UI's icons"
  image="{$page.url.origin}/icons-opengraph-banner.png"
/>
