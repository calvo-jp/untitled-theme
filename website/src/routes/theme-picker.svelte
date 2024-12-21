<script lang="ts">
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
    collection.items.find((o) => o.value === theme.value),
  );
</script>

<Select.Root
  {collection}
  value={[theme.value]}
  onValueChange={(o) => {
    theme.value = parseTheme(o.value[0]);
  }}
  lazyMount
>
  <Select.Control>
    <Select.Trigger
      class="borer flex aspect-square items-center gap-2 rounded-md px-2 py-1"
    >
      <Select.ValueText class="flex grow items-center gap-1 text-left">
        {#if selected}
          <selected.icon class="icon-lg" />
          <span class="sr-only">{selected.label}</span>
        {/if}
      </Select.ValueText>
    </Select.Trigger>
  </Select.Control>

  <Select.Positioner class="z-dropdown">
    <Select.Content
      class="rounded-md border bg-white p-2 ui-open:animate-fade-in ui-closed:animate-fade-out dark:bg-gray-true-900"
    >
      {#each collection.items as item}
        <Select.Item
          {item}
          class="pointer flex w-32 items-center gap-4 rounded-md px-2 py-1 ui-highlighted:bg-gray-true-50 dark:ui-highlighted:bg-gray-true-800/25"
        >
          <Select.ItemText class="flex grow items-center gap-2">
            <item.icon class="icon" />
            <span>{item.label}</span>
          </Select.ItemText>
          <Select.ItemIndicator>
            <CheckIcon class="text-success-500 icon dark:text-success-400" />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Positioner>
</Select.Root>
