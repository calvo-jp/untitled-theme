<script lang="ts">
  import {goto, preloadData} from '$app/navigation';
  import {page} from '$app/state';
  import Icon from '$lib/icon.svelte';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Menu} from 'ui-ingredients';

  let pathname = $derived(page.url.pathname);

  let links = [
    {
      label: 'icons',
      href: '/',
    },
    {
      label: 'colors',
      href: '/colors',
    },
  ];
</script>

<div class="flex items-center gap-2 font-mono">
  <h1 class="text-gray-800 dark:text-gray-50 font-heading lg:text-xl">UT</h1>

  <Menu.Root
    positioning={{
      placement: 'bottom',
    }}
    onSelect={(detail) => {
      goto(detail.value);
    }}
  >
    <Menu.Trigger
      class="flex cursor-pointer items-center gap-0.5 rounded bg-gray-true-100 px-1.5 py-1 text-sm leading-none tracking-tight text-gray-true-600 dark:bg-gray-true-800/30 dark:text-gray-true-400"
    >
      {#if pathname.startsWith('/colors')}
        colors
      {:else}
        icons
      {/if}

      <Menu.Indicator
        class="transition-transform duration-150 ui-open:rotate-180"
      >
        <Icon as={ChevronDownIcon} />
      </Menu.Indicator>
    </Menu.Trigger>
    <Menu.Positioner class="z-dropdown">
      <Menu.Content
        class="rounded-md border bg-white p-2 ui-open:animate-fade-in ui-closed:animate-fade-out dark:bg-gray-true-900"
      >
        {#each links as link}
          <Menu.Item
            value={link.href}
            class="flex cursor-pointer items-center gap-4 rounded-md px-2 py-1 text-sm ui-highlighted:bg-gray-true-50 dark:ui-highlighted:bg-gray-true-800/25"
            onmouseover={() => preloadData(link.href)}
          >
            {link.label}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</div>
