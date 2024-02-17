import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNiA3Ljk5OTgzVjQuNTAwNDhDMTYgMy42Njg3NCAxNiAzLjI1Mjg3IDE1LjgyNDggMi45OTczQzE1LjY3MTcgMi43NzQwMSAxNS40MzQ2IDIuNjIyMzIgMTUuMTY3OCAyLjU3NjkxQzE0Ljg2MjMgMi41MjQ5MyAxNC40ODQ3IDIuNjk5MiAxMy43Mjk1IDMuMDQ3NzVMNC44NTkwMSA3LjE0MTgyQzQuMTg1NTEgNy40NTI2NyAzLjg0ODc1IDcuNjA4MSAzLjYwMjExIDcuODQ5MTVDMy4zODQwNiA4LjA2MjI1IDMuMjE3NjIgOC4zMjIzOCAzLjExNTUgOC42MDk2NkMzIDguOTM0NjIgMyA5LjMwNTUxIDMgMTAuMDQ3M1YxNC45OTk4TTE2LjUgMTQuNDk5OEgxNi41MU0zIDExLjE5OThMMyAxNy43OTk4QzMgMTguOTE5OSAzIDE5LjQ4IDMuMjE3OTkgMTkuOTA3OEMzLjQwOTczIDIwLjI4NDEgMy43MTU2OSAyMC41OTAxIDQuMDkyMDIgMjAuNzgxOEM0LjUxOTg0IDIwLjk5OTggNS4wNzk4OSAyMC45OTk4IDYuMiAyMC45OTk4SDE3LjhDMTguOTIwMSAyMC45OTk4IDE5LjQ4MDIgMjAuOTk5OCAxOS45MDggMjAuNzgxOEMyMC4yODQzIDIwLjU5MDEgMjAuNTkwMyAyMC4yODQxIDIwLjc4MiAxOS45MDc4QzIxIDE5LjQ4IDIxIDE4LjkxOTkgMjEgMTcuNzk5OFYxMS4xOTk4QzIxIDEwLjA3OTcgMjEgOS41MTk2NyAyMC43ODIgOS4wOTE4NUMyMC41OTAzIDguNzE1NTIgMjAuMjg0MyA4LjQwOTU2IDE5LjkwOCA4LjIxNzgyQzE5LjQ4MDIgNy45OTk4MyAxOC45MjAxIDcuOTk5ODMgMTcuOCA3Ljk5OTgzTDYuMiA3Ljk5OTgzQzUuMDc5OSA3Ljk5OTgzIDQuNTE5ODQgNy45OTk4MyA0LjA5MjAyIDguMjE3ODFDMy43MTU3IDguNDA5NTYgMy40MDk3MyA4LjcxNTUyIDMuMjE3OTkgOS4wOTE4NUMzIDkuNTE5NjcgMyAxMC4wNzk3IDMgMTEuMTk5OFpNMTcgMTQuNDk5OEMxNyAxNC43NzYgMTYuNzc2MSAxNC45OTk4IDE2LjUgMTQuOTk5OEMxNi4yMjM5IDE0Ljk5OTggMTYgMTQuNzc2IDE2IDE0LjQ5OThDMTYgMTQuMjIzNyAxNi4yMjM5IDEzLjk5OTggMTYuNSAxMy45OTk4QzE2Ljc3NjEgMTMuOTk5OCAxNyAxNC4yMjM3IDE3IDE0LjQ5OThaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Wallet02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          d="M16 7.99983V4.50048C16 3.66874 16 3.25287 15.8248 2.9973C15.6717 2.77401 15.4346 2.62232 15.1678 2.57691C14.8623 2.52493 14.4847 2.6992 13.7295 3.04775L4.85901 7.14182C4.18551 7.45267 3.84875 7.6081 3.60211 7.84915C3.38406 8.06225 3.21762 8.32238 3.1155 8.60966C3 8.93462 3 9.30551 3 10.0473V14.9998M16.5 14.4998H16.51M3 11.1998L3 17.7998C3 18.9199 3 19.48 3.21799 19.9078C3.40973 20.2841 3.71569 20.5901 4.09202 20.7818C4.51984 20.9998 5.07989 20.9998 6.2 20.9998H17.8C18.9201 20.9998 19.4802 20.9998 19.908 20.7818C20.2843 20.5901 20.5903 20.2841 20.782 19.9078C21 19.48 21 18.9199 21 17.7998V11.1998C21 10.0797 21 9.51967 20.782 9.09185C20.5903 8.71552 20.2843 8.40956 19.908 8.21782C19.4802 7.99983 18.9201 7.99983 17.8 7.99983L6.2 7.99983C5.0799 7.99983 4.51984 7.99983 4.09202 8.21781C3.7157 8.40956 3.40973 8.71552 3.21799 9.09185C3 9.51967 3 10.0797 3 11.1998ZM17 14.4998C17 14.776 16.7761 14.9998 16.5 14.9998C16.2239 14.9998 16 14.776 16 14.4998C16 14.2237 16.2239 13.9998 16.5 13.9998C16.7761 13.9998 17 14.2237 17 14.4998Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Wallet02Icon.displayName = 'Wallet02Icon';
