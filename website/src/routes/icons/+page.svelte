<script lang="ts">
  import type {Icon} from '$lib/icons';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Dialog} from 'ui-ingredients';
  import Searchbar from '../searchbar.svelte';
  import IconDetails from './icon-details.svelte';

  let {data} = $props();

  let search = $state('');
  let icons = $derived.by(() => {
    const s = search.trim().toLowerCase().replace(/[-\s]/g, '');
    if (!s) return data.icons;
    return data.icons.filter((icon) =>
      icon.name.formal.toLowerCase().replace(/\s/g, '').includes(s),
    );
  });

  let total = $derived.by(() => {
    let v = '';

    if (icons.length === 0) {
      v += 'No icons found';
    } else if (icons.length === 1) {
      v += '1 icon found';
    } else {
      v += `${icons.length} icons found`;
    }

    const s = search.trim();

    if (s) {
      v += ` for <strong>'${s}'</strong>`;
    }
  });

  let selected: Icon | null = $state(null);
</script>

<svelte:head>
  <title>Untitled Theme | Icons</title>
  <meta name="description" content="Untitled UI Icons" />
  <meta property="og:title" content="Untitled UI Icons" />
  <meta property="og:description" content="Browse all Untitled UI icons" />
  <meta
    property="og:image"
    content="https://untitled-theme-docs.vercel.app/og-banner--icons.png"
  />
  <meta property="og:site_name" content="Untitled Theme" />
  <meta name="twitter:title" content="Untitled UI Icons" />
  <meta name="twitter:description" content="Browse all Untitled UI icons" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:image"
    content="https://untitled-theme-docs.vercel.app/og-banner--icons.png"
  />
  <meta name="twitter:site" content="Untitled Theme" />
</svelte:head>

<Searchbar bind:search />

<div class="mb-3 mt-5 lg:mt-8 text-sm">{@html total}</div>
<div
  class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2"
>
  {#each icons as icon}
    <button
      type="button"
      class="flex items-center justify-center rounded p-2 border aspect-square hover:bg-gray-true-50 dark:hover:bg-gray-true-800/10"
      onclick={() => {
        selected = icon;
      }}
    >
      <span>{@html icon.html}</span>
      <span class="sr-only">{icon.name.formal}</span>
    </button>
  {/each}
</div>

<Dialog.Root
  open={Boolean(selected)}
  onOpenChange={(detail) => {
    if (!detail.open) {
      selected = null;
    }
  }}
>
  <Dialog.Backdrop
    class="fixed inset-0 z-overlay backdrop-blur-sm bg-gray-true-900/50 dark:bg-gray-true-900/50"
  />

  <Dialog.Positioner>
    <Dialog.Content
      class="fixed w-full bottom-0 right-0 z-modal p-4 md:p-6 lg:p-8 border-t border-gray-true-400 dark:border-gray-true-800 data-open:animate-slide-up data-closed:animate-slide-down bg-white dark:bg-gray-true-900"
    >
      {#if selected}
        <IconDetails data={selected} />
      {/if}
      <Dialog.CloseTrigger class="absolute right-3 top-3 p-1 cursor-pointer">
        <XCloseIcon class="icon-xl" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
