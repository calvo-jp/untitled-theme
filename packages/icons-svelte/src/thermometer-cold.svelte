<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTJIMTJNOSA0VjIwTTMgOUw2IDEyTDMgMTVNMTIgNkw5IDlMNiA2TTYgMThMOSAxNUwxMC41IDE2LjVNMjAgMTQuNTM1MVY0QzIwIDIuODk1NDMgMTkuMTA0NiAyIDE4IDJDMTYuODk1NCAyIDE2IDIuODk1NDMgMTYgNFYxNC41MzUxQzE0LjgwNDQgMTUuMjI2NyAxNCAxNi41MTk0IDE0IDE4QzE0IDIwLjIwOTEgMTUuNzkwOSAyMiAxOCAyMkMyMC4yMDkxIDIyIDIyIDIwLjIwOTEgMjIgMThDMjIgMTYuNTE5NCAyMS4xOTU2IDE1LjIyNjcgMjAgMTQuNTM1MVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M2 12H12M9 4V20M3 9L6 12L3 15M12 6L9 9L6 6M6 18L9 15L10.5 16.5M20 14.5351V4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4V14.5351C14.8044 15.2267 14 16.5194 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.5194 21.1956 15.2267 20 14.5351Z"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
