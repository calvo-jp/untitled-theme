<script lang="ts">
  import {page} from '$app/state';
  import Icon from '$lib/icon.svelte';
  import MetaTags from '$lib/meta-tags.svelte';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard} from 'ui-ingredients';
  import Empty from '../empty.svelte';
  import Searchbar from '../searchbar.svelte';

  let {data} = $props();
  let colors = $derived(data.colors);
</script>

<svelte:head>
  <title>Colors | Untitled Theme</title>
</svelte:head>

<MetaTags
  title="Untitled Theme Colors"
  description="Browse all of Untitled UI's colors"
  image="{page.url.origin}/colors-opengraph-banner.png"
/>

<Searchbar />

{#if colors.length > 0}
  <div class="mt-5 flex flex-col gap-4 font-mono lg:mt-8 lg:gap-6">
    {#each colors as { parent, children }}
      {@const name = parent.join('.')}
      {@const pairs = Object.entries(children)}

      <div class="group flex flex-col gap-2">
        {#if parent.length > 0}
          <div class="flex items-center gap-2">
            <div class="font-medium">{name}</div>

            <Clipboard.Root
              value={JSON.stringify({[name]: children}, null, 2)}
              class="flex transition-transform duration-150 focus-within:scale-100 group-hover:scale-100 lg:scale-0"
            >
              <Clipboard.Trigger class="cursor-pointer">
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
        {/if}

        <div class="grid grid-cols-6 gap-1 md:grid-cols-12 lg:gap-2">
          {#each pairs as [k, v]}
            <div>
              <div class="aspect-square bg-[var(--bg)]" style="--bg:{v}"></div>
              <div class="mt-2 hidden text-sm lg:block">{k}</div>
              <div
                class="hidden text-xs leading-none text-neutral-700 lg:block dark:text-neutral-500"
              >
                {v}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
{:else}
  <Empty />
{/if}
