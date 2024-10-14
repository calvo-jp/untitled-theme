<script lang="ts">
  import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-svelte';
  import {scale} from 'svelte/transition';

  interface Props {
    search?: string;
    onSearchChange?: (value: string) => void;
  }

  let {search = $bindable(''), onSearchChange}: Props = $props();

  let inputRef: HTMLInputElement | null = $state(null);
</script>

<div class="relative">
  <SearchLgIcon
    class="icon-xl absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-true-300 dark:text-gray-true-400"
  />

  <input
    bind:this={inputRef}
    bind:value={search}
    oninput={(e) => {
      onSearchChange?.(e.currentTarget.value);
    }}
    placeholder="Search"
    class="h-12 w-full py-2 px-12 rounded border outline-none bg-transparent"
  />

  {#if search.length > 0}
    <button
      type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2"
      tabindex="-1"
      onclick={() => {
        search = '';
        onSearchChange?.('');
        inputRef?.focus();
      }}
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
