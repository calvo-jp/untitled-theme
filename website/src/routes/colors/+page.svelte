<script lang="ts">
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard} from 'ui-ingredients';
  import Empty from '../empty.svelte';
  import Searchbar from '../searchbar.svelte';
  import MetaTags from '$lib/meta-tags.svelte';
  import {page} from '$app/stores';

  let {data} = $props();
  let colors = $derived(data.colors);
</script>

<svelte:head>
  <title>Colors | Untitled Theme</title>
</svelte:head>

<MetaTags
  title="Untitled Theme Colors"
  description="Browse all of Untitled UI's colors"
  image="{$page.url.origin}/colors-opengraph-banner.png"
/>

<Searchbar />

{#if colors.length > 0}
  <div class="font-mono flex flex-col gap-4 lg:gap-6 mt-5 lg:mt-8">
    {#each colors as { parent, children }}
      {@const name = parent.join('.')}
      {@const pairs = Object.entries(children)}

      <div class="group flex flex-col gap-2">
        {#if parent.length > 0}
          <div class="flex items-center gap-2">
            <div class="font-medium">{name}</div>

            <Clipboard.Root
              value={JSON.stringify({[name]: children}, null, 2)}
              class="flex lg:scale-0 transition-transform duration-150 focus-within:scale-100 group-hover:scale-100"
            >
              <Clipboard.Trigger class="cursor-pointer">
                <Clipboard.Indicator>
                  {#snippet children(ctx)}
                    {#if ctx.copied}
                      <CheckIcon class="icon text-success-500" />
                    {:else}
                      <Copy01Icon class="icon" />
                    {/if}
                  {/snippet}
                </Clipboard.Indicator>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </div>
        {/if}

        <div class="grid grid-cols-6 md:grid-cols-12 gap-1 lg:gap-2">
          {#each pairs as [k, v]}
            <div>
              <div class="aspect-square bg-[var(--bg)]" style="--bg:{v}"></div>
              <div class="mt-2 text-sm hidden lg:block">{k}</div>
              <div
                class="hidden lg:block text-xs leading-none text-gray-true-700 dark:text-gray-true-500"
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
