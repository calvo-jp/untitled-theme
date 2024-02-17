<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMSA5SDcuNUM1LjAxNDcyIDkgMyAxMS4wMTQ3IDMgMTMuNUMzIDE1Ljk4NTMgNS4wMTQ3MiAxOCA3LjUgMThIMTJNMjEgOUwxNyA1TTIxIDlMMTcgMTMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M21 9H7.5C5.01472 9 3 11.0147 3 13.5C3 15.9853 5.01472 18 7.5 18H12M21 9L17 5M21 9L17 13"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
