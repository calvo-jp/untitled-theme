<script lang="ts">
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Dialog} from 'ui-ingredients';
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {cx} from '$lib/cx';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard, Tabs} from 'ui-ingredients';
  import MetaTags from '$lib/meta-tags.svelte';

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
  image="{$page.url.origin}/icons-opengraph-banner.png"
/>

<Dialog.Root
  open={true}
  onOpenChange={(detail) => {
    if (detail.open) return;

    const query = $page.url.searchParams.toString();
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
    class="fixed inset-0 z-overlay backdrop-blur-sm bg-gray-true-900/50 dark:bg-gray-true-900/50"
  />

  <Dialog.Positioner>
    <Dialog.Content
      class="fixed w-full bottom-0 right-0 z-modal p-4 md:p-6 lg:p-8 border-t border-gray-true-400 dark:border-gray-true-800 data-open:animate-slide-up data-closed:animate-slide-down bg-white dark:bg-gray-true-900"
    >
      <div
        class={cx(
          'w-full',
          'max-w-full',
          'lg:w-[40rem]',
          'lg:max-w-[40rem]',
          '[&_.shiki]:max-h-[50vh]',
        )}
      >
        <div>
          <div class="w-fit p-3 rounded border">
            {@html icon.html}
          </div>

          <div
            class="w-fit py-2 px-3 mt-5 max-h-dvh flex items-center gap-5 rounded overflow-y-auto bg-gray-true-100 dark:bg-gray-true-800/25"
          >
            <code class="font-mono">{componentName}</code>
            <Clipboard.Root class="flex" value={componentName}>
              <Clipboard.Trigger class="p-1">
                <Clipboard.Indicator>
                  {#snippet children(ctx)}
                    {#if ctx.copied}
                      <CheckIcon
                        class="icon text-success-500 dark:text-success-700"
                      />
                    {:else}
                      <Copy01Icon class="icon" />
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
                  class="data-selected:text-brand-700 dark:data-selected:text-brand-500"
                >
                  {item.label}
                </Tabs.Trigger>
              {/each}
            </Tabs.List>

            {#each tabs as item}
              <Tabs.Content value={item.value} class="text-sm relative mt-5">
                <Clipboard.Root
                  value={item.content.raw}
                  class="absolute top-4 right-4 flex items-center justify-center rounded-lg p-0.5"
                >
                  <Clipboard.Trigger class="p-0.5">
                    <Clipboard.Indicator>
                      {#snippet children(ctx)}
                        {#if ctx.copied}
                          <CheckIcon
                            class="icon text-success-500 dark:text-success-700"
                          />
                        {:else}
                          <Copy01Icon class="icon" />
                        {/if}
                      {/snippet}
                    </Clipboard.Indicator>
                  </Clipboard.Trigger>
                </Clipboard.Root>

                <div
                  class={cx(
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

      <Dialog.CloseTrigger class="absolute right-3 top-3 p-1 cursor-pointer">
        <XCloseIcon class="icon-xl" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
