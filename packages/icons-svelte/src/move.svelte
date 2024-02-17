<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik01IDlMMiAxMk0yIDEyTDUgMTVNMiAxMkgyMk05IDVMMTIgMk0xMiAyTDE1IDVNMTIgMlYyMk0xNSAxOUwxMiAyMk0xMiAyMkw5IDE5TTE5IDlMMjIgMTJNMjIgMTJMMTkgMTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M5 9L2 12M2 12L5 15M2 12H22M9 5L12 2M12 2L15 5M12 2V22M15 19L12 22M12 22L9 19M19 9L22 12M22 12L19 15"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
