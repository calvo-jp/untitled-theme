<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDRMOC41IDE1LjVNOC41IDguNUwyMCAyME02IDNDNy42NTY4NSAzIDkgNC4zNDMxNSA5IDZDOSA3LjY1Njg1IDcuNjU2ODUgOSA2IDlDNC4zNDMxNSA5IDMgNy42NTY4NSAzIDZDMyA0LjM0MzE1IDQuMzQzMTUgMyA2IDNaTTYgMTVDNy42NTY4NSAxNSA5IDE2LjM0MzEgOSAxOEM5IDE5LjY1NjkgNy42NTY4NSAyMSA2IDIxQzQuMzQzMTUgMjEgMyAxOS42NTY5IDMgMThDMyAxNi4zNDMxIDQuMzQzMTUgMTUgNiAxNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M20 4L8.5 15.5M8.5 8.5L20 20M6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3ZM6 15C7.65685 15 9 16.3431 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15Z"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
