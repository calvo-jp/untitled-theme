<script lang="ts">
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Dialog} from 'ui-ingredients';
  import Empty from '../../empty.svelte';
  import Searchbar from '../../searchbar.svelte';
  import IconDetails from './icon-details.svelte';
  import {goto} from '$app/navigation';
  import {navigating, page} from '$app/stores';

  let {data} = $props();

  let icon = $derived(data.icon);
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

  $inspect($navigating?.to?.params?.slug);
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

<Dialog.Root
  open={!!icon}
  onOpenChange={(detail) => {
    if (detail.open) return;

    const query = $page.url.searchParams.toString();
    const path = query ? `/?${query}` : `/`;

    goto(path, {
      keepFocus: true,
      noScroll: true,
    });
  }}
  lazyMount
  keepMounted
>
  <Dialog.Backdrop
    class="fixed inset-0 z-overlay backdrop-blur-sm bg-gray-true-900/50 dark:bg-gray-true-900/50"
  />

  <Dialog.Positioner>
    <Dialog.Content
      class="fixed w-full bottom-0 right-0 z-modal p-4 md:p-6 lg:p-8 border-t border-gray-true-400 dark:border-gray-true-800 data-open:animate-slide-up data-closed:animate-slide-down bg-white dark:bg-gray-true-900"
    >
      {#if icon}
        <IconDetails data={icon} />
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-6"
        >
          <path
            fill="currentColor"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            fill="currentColor"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      {/if}

      <Dialog.CloseTrigger class="absolute right-3 top-3 p-1 cursor-pointer">
        <XCloseIcon class="icon-xl" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
