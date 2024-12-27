<script lang="ts">
  interface Props {
    class?: string;
    style?: string;
  }

  let {style, class: className}: Props = $props();
</script>

<div {style} class={['mt-12 lg:mt-16', className]}>
  <div class="pr-4 lg:pr-8">
    <div
      class="relative mx-auto size-[8rem] rounded-full bg-gray-true-100 dark:bg-gray-true-800 lg:size-[12rem]"
    >
      <div
        class="absolute left-1/2 top-1/2 size-[6.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-gray-true-900 lg:size-[10rem]"
      ></div>
      <div
        class="absolute bottom-0 right-0 h-8 w-3 -rotate-45 rounded-full bg-gray-true-100 dark:bg-gray-true-800 lg:h-12 lg:w-4"
      ></div>
    </div>
  </div>

  <div class="mt-10 lg:mt-12">
    <h3 class="text-center font-bold lg:text-lg">No records found</h3>
    <p class="text-center text-sm text-gray-true-500 lg:text-base">
      <span> No record matches your search. </span>
      <a
        href="https://github.com/calvo-jp/untitled-theme/issues/new"
        class="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
        target="_blank"
        rel="noopener noreferrer"
        data-sveltekit-preload-data="false"
      >
        Create an issue
      </a>
    </p>
  </div>
</div>
