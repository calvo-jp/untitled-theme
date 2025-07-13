<script lang="ts">
  import {goto, preloadData} from '$app/navigation';
  import {page} from '$app/state';
  import Icon from '$lib/icon.svelte';
  import {Menu} from '@ark-ui/svelte';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';

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
  <h1 class="font-heading text-gray-800 lg:text-xl dark:text-gray-50">UT</h1>

  <Menu.Root
    positioning={{
      placement: 'bottom',
    }}
    onSelect={(detail) => {
      goto(detail.value);
    }}
  >
    <Menu.Trigger
      class="flex cursor-pointer items-center gap-0.5 rounded bg-neutral-100 px-1.5 py-1 text-sm leading-none tracking-tight text-neutral-600 dark:bg-neutral-800/30 dark:text-neutral-400"
    >
      {#if pathname.startsWith('/colors')}
        colors
      {:else}
        icons
      {/if}

      <Menu.Indicator
        class="ui-open:rotate-180 transition-transform duration-150"
      >
        <Icon as={ChevronDownIcon} />
      </Menu.Indicator>
    </Menu.Trigger>
    <Menu.Positioner class="z-dropdown">
      <Menu.Content
        class="ui-open:animate-fade-in ui-closed:animate-fade-out rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900"
      >
        {#each links as link}
          <Menu.Item
            value={link.href}
            class="ui-highlighted:bg-neutral-50 dark:ui-highlighted:bg-neutral-800/25 flex cursor-pointer items-center gap-4 rounded-md px-2 py-1 text-sm"
            onmouseover={() => preloadData(link.href)}
          >
            {link.label}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</div>
