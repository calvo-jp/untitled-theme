<script lang="ts">
  import {SearchLgIcon} from '@untitled-theme/icons-svelte';

  interface Props {
    search?: string;
    onSearchChange?: (value: string) => void;
  }

  let {search = $bindable(''), onSearchChange}: Props = $props();
</script>

<div class="relative">
  <input
    bind:value={search}
    oninput={(e) => {
      onSearchChange?.(e.currentTarget.value);
    }}
    placeholder="Search"
    class="h-12 w-full py-2 pl-12 pr-4 rounded border outline-none bg-transparent"
  />

  <SearchLgIcon
    class="icon-xl absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-true-300 dark:text-gray-true-400"
  />
</div>
