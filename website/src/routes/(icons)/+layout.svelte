<script lang="ts">
  import {goto} from '$app/navigation';
  import {page} from '$app/state';
  import Icon from '$lib/icon.svelte';
  import {
    CheckIcon,
    Copy01Icon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Clipboard, Dialog, Tabs} from 'ui-ingredients';
  import Empty from '../empty.svelte';
  import Searchbar from '../searchbar.svelte';

  let {data, children} = $props();

  let icons = $derived(data.icons);
  let search = $derived(page.url.searchParams.get('search')?.trim());

  let icon = $derived(data.icon);
  let tabs = $derived([
    {
      label: 'Html',
      value: 'Html',
      content: icon?.snippets.html ?? null,
    },
    {
      label: 'React',
      value: 'React',
      content: icon?.snippets.react ?? null,
    },
    {
      label: 'Svelte',
      value: 'Svelte',
      content: icon?.snippets.svelte ?? null,
    },
    {
      label: 'Solid',
      value: 'Solid',
      content: icon?.snippets.solid ?? null,
    },
  ]);

  let componentName = $derived(`<${icon?.name.pascal} />`);

  let total = $derived.by(() => {
    let v = '';

    if (icons.length === 0) {
      v += 'No icons found';
    } else if (icons.length === 1) {
      v += '1 icon found';
    } else {
      v += `${icons.length} icons found`;
    }

    const s = search?.trim();

    if (s) {
      v += ` for <strong>'${s}'</strong>`;
    }

    return v;
  });
</script>

<Searchbar />

{#if icons.length > 0}
  <div class="mb-3 mt-5 text-sm lg:mt-8">{@html total}</div>

  <div
    class="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12"
  >
    {#each icons as icon}
      {@const query = page.url.searchParams.toString()}
      {@const href = query ? `/${icon.slug}?${query}` : `/${icon.slug}`}

      <a
        {href}
        class="flex aspect-square items-center justify-center rounded border border-neutral-300 p-2 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800/10"
        data-sveltekit-noscroll
        data-sveltekit-keepfocus
      >
        <span>{@html icon.html}</span>
        <span class="sr-only">{icon.name.formal}</span>
      </a>
    {/each}
  </div>
{:else}
  <Empty />
{/if}

{@render children()}

<Dialog.Root
  open={!!icon}
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
    class="z-overlay ui-open:animate-fade-in ui-closed:animate-fade-out fixed inset-0 bg-neutral-900/50 backdrop-blur-sm dark:bg-neutral-900/50"
  />

  <Dialog.Positioner>
    <Dialog.Content
      class="z-modal ui-open:animate-slide-up ui-closed:animate-slide-down fixed bottom-0 right-0 w-full border-t border-neutral-300 bg-white p-4 md:p-6 lg:p-8 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {#if icon}
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
            <div
              class="w-fit rounded border border-neutral-300 p-3 dark:border-neutral-800"
            >
              {@html icon.html}
            </div>

            <div
              class="mt-5 flex max-h-dvh w-fit items-center gap-5 overflow-y-auto rounded bg-neutral-100 px-3 py-2 dark:bg-neutral-800/25"
            >
              <code class="font-mono">{componentName}</code>
              <Clipboard.Root class="flex" value={componentName}>
                <Clipboard.Trigger class="p-1">
                  <Clipboard.Indicator>
                    {#snippet children(ctx)}
                      {#if ctx.copied}
                        <Icon
                          as={CheckIcon}
                          class="text-emerald-500 dark:text-emerald-400"
                        />
                      {:else}
                        <Icon as={Copy01Icon} />
                      {/if}
                    {/snippet}
                  </Clipboard.Indicator>
                </Clipboard.Trigger>
              </Clipboard.Root>
            </div>

            <Tabs.Root class="mt-5" defaultValue={tabs[0].value}>
              <Tabs.List class="flex gap-4">
                {#each tabs as item}
                  <Tabs.Trigger
                    value={item.value}
                    class="ui-selected:text-indigo-600 dark:ui-selected:text-indigo-400"
                  >
                    {item.label}
                  </Tabs.Trigger>
                {/each}
              </Tabs.List>

              {#each tabs as item}
                <Tabs.Content value={item.value} class="relative mt-5 text-sm">
                  <Clipboard.Root
                    value={item.content?.raw}
                    class="absolute right-4 top-4 flex items-center justify-center rounded-lg p-0.5"
                  >
                    <Clipboard.Trigger class="p-0.5">
                      <Clipboard.Indicator>
                        {#snippet children(ctx)}
                          {#if ctx.copied}
                            <Icon
                              as={CheckIcon}
                              class="text-emerald-500 dark:text-emerald-400"
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
                      '[&_.shiki]:border-neutral-300',
                      '[&_.shiki]:dark:border-neutral-800',
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
                    {@html item.content?.html}
                  </div>
                </Tabs.Content>
              {/each}
            </Tabs.Root>
          </div>
        </div>
      {/if}

      <Dialog.CloseTrigger class="absolute right-3 top-3 cursor-pointer p-1">
        <Icon as={XCloseIcon} size="xl" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
