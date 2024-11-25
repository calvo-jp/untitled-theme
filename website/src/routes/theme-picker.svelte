<script lang="ts">
  import {parseTheme, useTheme} from '$lib/theme-provider';
  import {
    CheckIcon,
    CloudMoonIcon,
    CloudSun02Icon,
    Monitor01Icon,
  } from '@untitled-theme/icons-svelte';
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
      class="flex items-center gap-2 rounded-md borer px-2 py-1 aspect-square"
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
      class="rounded-md border p-2 bg-white dark:bg-gray-true-900 data-open:animate-fade-in data-closed:animate-fade-out"
    >
      {#each collection.items as item}
        <Select.Item
          {item}
          class="w-32 px-2 py-1 flex items-center gap-4 pointer rounded-md data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/25"
        >
          <Select.ItemText class="flex items-center grow gap-2">
            <item.icon class="icon" />
            <span>{item.label}</span>
          </Select.ItemText>
          <Select.ItemIndicator>
            <CheckIcon class="icon text-success-500 dark:text-success-400" />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Positioner>
</Select.Root>
