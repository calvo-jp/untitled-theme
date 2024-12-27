<script lang="ts">
  import {goto} from '$app/navigation';
  import {page} from '$app/state';
  import Icon from '$lib/icon.svelte';
  import MetaTags from '$lib/meta-tags.svelte';
  import {
    CheckIcon,
    Copy01Icon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Clipboard, Dialog, Tabs} from 'ui-ingredients';

  let {data} = $props();

  let icon = $derived(data.icon);
  let tabs = $derived([
    {
      label: 'Html',
      value: 'Html',
      content: icon.snippets.html,
    },
    {
      label: 'React',
      value: 'React',
      content: icon.snippets.react,
    },
    {
      label: 'Svelte',
      value: 'Svelte',
      content: icon.snippets.svelte,
    },
    {
      label: 'Solid',
      value: 'Solid',
      content: icon.snippets.solid,
    },
  ]);

  let componentName = $derived(`<${icon.name.pascal} />`);
</script>

<svelte:head>
  <title>{icon.name.pascal} | Untitled Theme</title>
</svelte:head>

<MetaTags
  title="{icon.name.pascal} | Untitled Theme Icons"
  description="Browse all of Untitled UI's icons"
  image="{page.url.origin}/icons-opengraph-banner.png"
/>

<Dialog.Root
  open={true}
  onOpenChange={(detail) => {
    if (detail.open) return;

    const query = page.url.searchParams.toString();
    const path = query ? `/?${query}` : `/`;

    goto(path, {
      keepFocus: true,
      noScroll: true,
    });
  }}
  lazyMount
  keepMounted
>
  <Dialog.Backdrop
    class="fixed inset-0 z-overlay bg-gray-true-900/50 backdrop-blur-sm dark:bg-gray-true-900/50"
  />

  <Dialog.Positioner>
    <Dialog.Content
      class="fixed bottom-0 right-0 z-modal w-full border-t border-gray-true-400 bg-white p-4 ui-open:animate-slide-up ui-closed:animate-slide-down dark:border-gray-true-800 dark:bg-gray-true-900 md:p-6 lg:p-8"
    >
      <div
        class={[
          'w-full',
          'max-w-full',
          'lg:w-[40rem]',
          'lg:max-w-[40rem]',
          '[&_.shiki]:max-h-[50vh]',
        ]}
      >
        <div>
          <div class="w-fit rounded border p-3">
            {@html icon.html}
          </div>

          <div
            class="mt-5 flex max-h-dvh w-fit items-center gap-5 overflow-y-auto rounded bg-gray-true-100 px-3 py-2 dark:bg-gray-true-800/25"
          >
            <code class="font-mono">{componentName}</code>
            <Clipboard.Root class="flex" value={componentName}>
              <Clipboard.Trigger class="p-1">
                <Clipboard.Indicator>
                  {#snippet children(ctx)}
                    {#if ctx.copied}
                      <Icon
                        as={CheckIcon}
                        class="text-success-500 dark:text-success-700"
                      />
                    {:else}
                      <Icon as={Copy01Icon} />
                    {/if}
                  {/snippet}
                </Clipboard.Indicator>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </div>

          <Tabs.Root class="mt-5" value={tabs[0].value}>
            <Tabs.List class="flex gap-4">
              {#each tabs as item}
                <Tabs.Trigger
                  value={item.value}
                  class="ui-selected:text-brand-700 dark:ui-selected:text-brand-500"
                >
                  {item.label}
                </Tabs.Trigger>
              {/each}
            </Tabs.List>

            {#each tabs as item}
              <Tabs.Content value={item.value} class="relative mt-5 text-sm">
                <Clipboard.Root
                  value={item.content.raw}
                  class="absolute right-4 top-4 flex items-center justify-center rounded-lg p-0.5"
                >
                  <Clipboard.Trigger class="p-0.5">
                    <Clipboard.Indicator>
                      {#snippet children(ctx)}
                        {#if ctx.copied}
                          <Icon
                            as={CheckIcon}
                            class="text-success-500 dark:text-success-700"
                          />
                        {:else}
                          <Icon as={Copy01Icon} />
                        {/if}
                      {/snippet}
                    </Clipboard.Indicator>
                  </Clipboard.Trigger>
                </Clipboard.Root>

                <div
                  class={[
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
                  ]}
                >
                  {@html item.content.html}
                </div>
              </Tabs.Content>
            {/each}
          </Tabs.Root>
        </div>
      </div>

      <Dialog.CloseTrigger class="absolute right-3 top-3 cursor-pointer p-1">
        <Icon as={XCloseIcon} size="xl" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
