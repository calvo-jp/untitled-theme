<script lang="ts">
  import type {Icon} from '$lib/icons';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Clipboard, Tabs} from 'ui-ingredients';

  interface Props {
    data: Icon;
  }

  let {data}: Props = $props();

  const items = [
    {
      label: 'Html',
      value: 'Html',
      content: data.snippets.html,
    },
    {
      label: 'React',
      value: 'React',
      content: data.snippets.react,
    },
    {
      label: 'Svelte',
      value: 'Svelte',
      content: data.snippets.svelte,
    },
    {
      label: 'Solid',
      value: 'Solid',
      content: data.snippets.solid,
    },
  ];

  const componentName = `<${data.name.pascal} />`;
</script>

<div
  class={twMerge(
    'w-full lg:w-[40rem] max-w-full lg:max-w-[40rem]',
    '[&_.shiki]:max-h-[50vh]',
  )}
>
  <div>
    <div class="w-fit p-3 rounded border">
      {@html data.html}
    </div>

    <div
      class="w-fit py-2 px-3 mt-5 max-h-dvh flex items-center gap-5 rounded overflow-y-auto bg-gray-true-100 dark:bg-gray-true-800/25"
    >
      <code class="font-mono">{componentName}</code>
      <Clipboard.Root class="flex" value={componentName}>
        <Clipboard.Trigger class="p-1">
          <Clipboard.Indicator copied>
            <CheckIcon class="icon text-success-500 dark:text-success-700" />
          </Clipboard.Indicator>
          <Clipboard.Indicator>
            <Copy01Icon class="icon" />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Root>
    </div>

    <Tabs.Root class="mt-5" value={items[0].value}>
      <Tabs.List class="flex gap-4">
        {#each items as item}
          <Tabs.Trigger
            value={item.value}
            class="data-selected:text-brand-700 dark:data-selected:text-brand-500"
          >
            {item.label}
          </Tabs.Trigger>
        {/each}
      </Tabs.List>

      {#each items as item}
        <Tabs.Content value={item.value} class="text-sm relative mt-5">
          <Clipboard.Root
            value={item.content.raw}
            class="absolute top-4 right-4 flex items-center justify-center rounded-lg p-0.5"
          >
            <Clipboard.Trigger class="p-0.5">
              <Clipboard.Indicator copied>
                <CheckIcon
                  class="icon text-success-500 dark:text-success-700"
                />
              </Clipboard.Indicator>
              <Clipboard.Indicator>
                <Copy01Icon class="icon" />
              </Clipboard.Indicator>
            </Clipboard.Trigger>
          </Clipboard.Root>

          <div
            class={twMerge(
              '[&_.shiki]:p-4',
              '[&_.shiki]:h-full',
              '[&_.shiki]:rounded',
              '[&_.shiki]:overflow-auto',
              '[&_.shiki]:border',
              '[&_.shiki]:font-mono',
              '[&_.shiki]:bg-[var(--shiki-light-bg)]',
              '[&_.shiki]:text-[var(--shiki-light)]',
              '[&_.shiki]:dark:bg-[var(--shiki-dark-bg)]',
              '[&_.shiki]:dark:text-[var(--shiki-dark)]',

              '[&_.shiki_span]:bg-[var(--shiki-light-bg)]',
              '[&_.shiki_span]:text-[var(--shiki-light)]',
              '[&_.shiki_span]:dark:bg-[var(--shiki-dark-bg)]',
              '[&_.shiki_span]:dark:text-[var(--shiki-dark)]',
            )}
          >
            {@html item.content.html}
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </div>
</div>
