<script lang="ts">
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard} from 'ui-ingredients';
  import Searchbar from '../searchbar.svelte';

  let {data} = $props();

  let search = $state('');
  let colors = $derived.by(() => {
    const s = search.trim().toLowerCase().replace(/[-\s]/g, '');
    if (!s) return data.colors;
    return data.colors.filter((c) => {
      return c.parent.join('').replace(/-/g, '').toLowerCase().includes(s);
    });
  });
</script>

<svelte:head>
  <title>Untitled Theme | Colors</title>
  <meta name="description" content="Untitled UI Colors" />
  <meta property="og:title" content="Untitled UI Colors" />
  <meta property="og:description" content="Browse all Untitled UI colors" />
  <meta
    property="og:image"
    content="https://untitled-theme-docs.vercel.app/og-banner--colors.png"
  />
  <meta property="og:site_name" content="Untitled Theme" />
  <meta name="twitter:title" content="Untitled UI Colors" />
  <meta name="twitter:description" content="Browse all Untitled UI colors" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:image"
    content="https://untitled-theme-docs.vercel.app/og-banner--colors.png"
  />
  <meta name="twitter:site" content="Untitled Theme" />
</svelte:head>

<Searchbar bind:search />

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
              <Clipboard.Indicator copied>
                <CheckIcon class="icon text-success-500" />
              </Clipboard.Indicator>
              <Clipboard.Indicator>
                <Copy01Icon class="icon" />
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
