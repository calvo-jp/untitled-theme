<script lang="ts">
  import Empty from '../empty.svelte';
  import Searchbar from '../searchbar.svelte';
  import {page} from '$app/stores';

  let {data, children} = $props();

  let icons = $derived(data.icons);
  let search = $derived($page.url.searchParams.get('search')?.trim());

  let total = $derived.by(() => {
    let v = '';

    if (icons.length === 0) {
      v += 'No icons found';
    } else if (icons.length === 1) {
      v += '1 icon found';
    } else {
      v += `${icons.length} icons found`;
    }

    const s = search?.trim();

    if (s) {
      v += ` for <strong>'${s}'</strong>`;
    }
  });
</script>

<Searchbar />

{#if icons.length > 0}
  <div class="mb-3 mt-5 lg:mt-8 text-sm">{@html total}</div>

  <div
    class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2"
  >
    {#each icons as icon}
      {@const query = $page.url.searchParams.toString()}
      {@const href = query ? `/${icon.slug}?${query}` : `/${icon.slug}`}

      <a
        {href}
        class="flex items-center justify-center rounded p-2 border aspect-square hover:bg-gray-true-50 dark:hover:bg-gray-true-800/10"
        data-sveltekit-noscroll
        data-sveltekit-keepfocus
        data-sveltekit-preload-data="hover"
      >
        <span>{@html icon.html}</span>
        <span class="sr-only">{icon.name.formal}</span>
      </a>
    {/each}
  </div>
{:else}
  <Empty />
{/if}

{@render children()}
