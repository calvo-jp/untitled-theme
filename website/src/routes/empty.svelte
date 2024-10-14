<script lang="ts">
  import {cx} from '$lib/cx';

  interface Props {
    class?: string;
    style?: string;
  }

  let {style, class: className, ...props}: Props = $props();
</script>

<div {style} class={cx('mt-12 lg:mt-16', className)}>
  <div class="pr-4 lg:pr-8">
    <div
      class="relative size-[8rem] lg:size-[12rem] mx-auto rounded-full bg-gray-true-100 dark:bg-gray-true-800"
    >
      <div
        class="absolute size-[6.5rem] lg:size-[10rem] top-1/2 left-1/2 rounded-full dark:bg-gray-true-900 bg-white -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute w-3 lg:w-4 bottom-0 right-0 -rotate-45 h-8 lg:h-12 bg-gray-true-100 dark:bg-gray-true-800 rounded-full"
      ></div>
    </div>
  </div>

  <div class="mt-10 lg:mt-12">
    <h3 class="text-center lg:text-lg font-bold">No records found</h3>
    <p class="text-center text-sm lg:text-base text-gray-true-500">
      <span> No record matches your search. </span>
      <a
        href="https://github.com/calvo-jp/untitled-theme/issues/new"
        class="text-indigo-600 dark:text-indigo-400 underline-offset-2 underline"
        data-sveltekit-preload-data="false"
        target="_blank"
        rel="noopener noreferrer"
      >
        Create an issue
      </a>
    </p>
  </div>
</div>
