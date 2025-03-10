<script lang="ts" module>
  import type {Component} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {Merge} from 'type-fest';

  interface BaseProps {
    as: Component<SvelteHTMLElements['svg']>;
    /**
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }

  export interface IconProps
    extends Merge<SvelteHTMLElements['svg'], BaseProps> {}
</script>

<script lang="ts">
  let {as: As, size = 'md', ...props}: IconProps = $props();
</script>

<As
  {...props}
  class={[
    {
      'size-3': size === 'sm',
      'size-4': size === 'md',
      'size-5': size === 'lg',
      'size-6': size === 'xl',
    },
    props.class,
  ]}
/>
