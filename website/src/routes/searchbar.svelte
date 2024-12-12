<script lang="ts">
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {scale} from 'svelte/transition';

  let value = $derived($page.url.searchParams.get('search') ?? '');

  let setValue = async (newValue: string) => {
    const currentPath = $page.url.pathname;
    const searchParams = new URLSearchParams($page.url.searchParams);

    if (newValue.trim().length < 1) {
      searchParams.delete('search');
    } else {
      searchParams.set('search', newValue);
    }

    const query = searchParams.toString();
    const newPath = query ? `${currentPath}?${query}` : currentPath;

    return goto(query ? `${newPath}` : newPath, {
      keepFocus: true,
      noScroll: true,
    });
  };
</script>

<div class="relative">
  <SearchLgIcon
    class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-true-300 icon-xl dark:text-gray-true-400"
  />

  <input
    {value}
    oninput={(e) => {
      setValue(e.currentTarget.value);
    }}
    placeholder="Search"
    class="h-12 w-full rounded border bg-transparent px-12 py-2 outline-none"
  />

  {#if value.length > 0}
    <button
      type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2"
      tabindex="-1"
      onclick={() => setValue('')}
      transition:scale={{
        start: 0.5,
        opacity: 0.5,
        duration: 150,
      }}
    >
      <XCloseIcon class="icon-lg" />
    </button>
  {/if}
</div>
