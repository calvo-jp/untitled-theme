<script lang="ts">
  interface MetaTagsProps {
    image: string;
    title: string;
    description: string;
  }

  let {title, description, image}: MetaTagsProps = $props();
</script>

<svelte:head>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
