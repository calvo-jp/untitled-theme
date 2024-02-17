<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAzVjZNMTIgMTAuNVYxMy41TTEyIDE4VjIxTTIyIDEySDE1LjVNMTUuNSAxMkwxOS41IDE2TTE1LjUgMTJMMTkuNSA4TTIgMTJIOC41TTguNSAxMkw0LjUgMTZNOC41IDEyTDQuNSA4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==) -->

<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M12 3V6M12 10.5V13.5M12 18V21M22 12H15.5M15.5 12L19.5 16M15.5 12L19.5 8M2 12H8.5M8.5 12L4.5 16M8.5 12L4.5 8"
    stroke="currentColor"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
