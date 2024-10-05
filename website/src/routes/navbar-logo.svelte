<script lang="ts">
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Menu} from 'ui-ingredients';

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

<div class="font-mono flex items-center gap-2">
  <a
    href={$page.url.pathname}
    class="font-bold tracking-tighter text-brand-700 dark:text-brand-500"
  >
    Untitled Theme
  </a>

  <Menu.Root
    positioning={{
      placement: 'bottom',
    }}
    onSelect={(detail) => {
      goto(detail.value);
    }}
  >
    <Menu.Trigger
      class="px-1.5 py-1 cursor-pointer rounded text-sm leading-none tracking-tight flex items-center gap-0.5 bg-gray-true-100 dark:bg-gray-true-800/30 text-gray-true-600 dark:text-gray-true-400"
    >
      {#if $page.url.pathname === '/'}
        icons
      {/if}
      {#if $page.url.pathname === '/colors/'}
        colors
      {/if}

      <Menu.Indicator
        class="data-open:rotate-180 transition-transform duration-150"
      >
        <ChevronDownIcon class="icon" />
      </Menu.Indicator>
    </Menu.Trigger>
    <Menu.Positioner class="z-dropdown">
      <Menu.Content
        class="rounded-md border p-2 bg-white dark:bg-gray-true-900 data-open:animate-fade-in data-closed:animate-fade-out"
      >
        {#each links as link}
          <Menu.Item
            value={link.href}
            class="px-2 py-1 flex items-center gap-4 cursor-pointer rounded-md text-sm data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/25"
          >
            {link.label}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</div>
