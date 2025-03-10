<script lang="ts">
  import Icon from '$lib/icon.svelte';
  import {
    CheckIcon,
    CloudMoonIcon,
    CloudSun02Icon,
    Monitor01Icon,
  } from '@untitled-theme/icons-svelte';
  import {parseTheme, useTheme} from 'svelte-os-themes';
  import {Select} from 'ui-ingredients';

  let collection = Select.collection({
    items: [
      {
        label: 'System',
        value: 'system',
        icon: Monitor01Icon,
      },
      {
        label: 'Light',
        value: 'light',
        icon: CloudSun02Icon,
      },
      {
        label: 'Dark',
        value: 'dark',
        icon: CloudMoonIcon,
      },
    ],
  });

  let theme = useTheme();

  let selected = $derived(
    collection.items.find((o) => o.value === theme.current),
  );
</script>

<Select.Root
  {collection}
  value={[theme.current]}
  onValueChange={(o) => {
    theme.current = parseTheme(o.value[0]);
  }}
  lazyMount
>
  <Select.Control>
    <Select.Trigger
      class="flex aspect-square items-center gap-2 rounded-md px-2 py-1"
    >
      <Select.ValueText class="flex grow items-center gap-1 text-left">
        {#if selected}
          <Icon as={selected.icon} size="lg" />
          <span class="sr-only">{selected.label}</span>
        {/if}
      </Select.ValueText>
    </Select.Trigger>
  </Select.Control>

  <Select.Positioner class="z-dropdown">
    <Select.Content
      class="ui-open:animate-fade-in ui-closed:animate-fade-out rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {#each collection.items as item}
        <Select.Item
          {item}
          class="pointer ui-highlighted:bg-neutral-50 dark:ui-highlighted:bg-neutral-800/25 flex w-32 items-center gap-4 rounded-md px-2 py-1"
        >
          <Select.ItemText class="flex grow items-center gap-2">
            <Icon as={item.icon} size="lg" />
            <span>{item.label}</span>
          </Select.ItemText>
          <Select.ItemIndicator>
            <Icon
              as={CheckIcon}
              class="text-emerald-500 dark:text-emerald-400"
            />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Positioner>
</Select.Root>
