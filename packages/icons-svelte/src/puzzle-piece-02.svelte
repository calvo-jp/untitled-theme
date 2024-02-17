<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyTDE1LjYgNS42QzE4IC0wLjcgMjQuNyA2IDE4LjQgOC40TDIyIDEyTDE4LjQgMTUuNkMxNiA5LjMgOS4zIDE2IDE1LjYgMTguNEwxMiAyMkw4LjQgMTguNEM2IDI0LjcgLTAuNyAxOCA1LjYgMTUuNkwyIDEyTDUuNiA4LjRDOCAxNC43IDE0LjcgOCA4LjQgNS42TDEyIDJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M12 2L15.6 5.6C18 -0.7 24.7 6 18.4 8.4L22 12L18.4 15.6C16 9.3 9.3 16 15.6 18.4L12 22L8.4 18.4C6 24.7 -0.7 18 5.6 15.6L2 12L5.6 8.4C8 14.7 14.7 8 8.4 5.6L12 2Z"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
