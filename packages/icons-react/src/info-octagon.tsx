import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAxNlYxMk0xMiA4SDEyLjAxTTIgOC41MjI3NFYxNS40NzczQzIgMTUuNzIxOCAyIDE1Ljg0NDEgMi4wMjc2MyAxNS45NTkyQzIuMDUyMTMgMTYuMDYxMyAyLjA5MjUzIDE2LjE1ODggMi4xNDczNiAxNi4yNDgzQzIuMjA5MiAxNi4zNDkyIDIuMjk1NjggMTYuNDM1NyAyLjQ2ODYzIDE2LjYwODZMNy4zOTEzNyAyMS41MzE0QzcuNTY0MzIgMjEuNzA0MyA3LjY1MDggMjEuNzkwOCA3Ljc1MTcyIDIxLjg1MjZDNy44NDExOSAyMS45MDc1IDcuOTM4NzMgMjEuOTQ3OSA4LjA0MDc3IDIxLjk3MjRDOC4xNTU4NiAyMiA4LjI3ODE1IDIyIDguNTIyNzQgMjJIMTUuNDc3M0MxNS43MjE4IDIyIDE1Ljg0NDEgMjIgMTUuOTU5MiAyMS45NzI0QzE2LjA2MTMgMjEuOTQ3OSAxNi4xNTg4IDIxLjkwNzUgMTYuMjQ4MyAyMS44NTI2QzE2LjM0OTIgMjEuNzkwOCAxNi40MzU3IDIxLjcwNDMgMTYuNjA4NiAyMS41MzE0TDIxLjUzMTQgMTYuNjA4NkMyMS43MDQzIDE2LjQzNTcgMjEuNzkwOCAxNi4zNDkyIDIxLjg1MjYgMTYuMjQ4M0MyMS45MDc1IDE2LjE1ODggMjEuOTQ3OSAxNi4wNjEzIDIxLjk3MjQgMTUuOTU5MkMyMiAxNS44NDQxIDIyIDE1LjcyMTggMjIgMTUuNDc3M1Y4LjUyMjc0QzIyIDguMjc4MTUgMjIgOC4xNTU4NiAyMS45NzI0IDguMDQwNzdDMjEuOTQ3OSA3LjkzODczIDIxLjkwNzUgNy44NDExOSAyMS44NTI2IDcuNzUxNzJDMjEuNzkwOCA3LjY1MDggMjEuNzA0MyA3LjU2NDMyIDIxLjUzMTQgNy4zOTEzN0wxNi42MDg2IDIuNDY4NjNDMTYuNDM1NyAyLjI5NTY4IDE2LjM0OTIgMi4yMDkyIDE2LjI0ODMgMi4xNDczNkMxNi4xNTg4IDIuMDkyNTMgMTYuMDYxMyAyLjA1MjEzIDE1Ljk1OTIgMi4wMjc2M0MxNS44NDQxIDIgMTUuNzIxOCAyIDE1LjQ3NzMgMkg4LjUyMjc0QzguMjc4MTUgMiA4LjE1NTg2IDIgOC4wNDA3NyAyLjAyNzYzQzcuOTM4NzMgMi4wNTIxMyA3Ljg0MTE5IDIuMDkyNTMgNy43NTE3MiAyLjE0NzM2QzcuNjUwOCAyLjIwOTIgNy41NjQzMiAyLjI5NTY4IDcuMzkxMzcgMi40Njg2M0wyLjQ2ODYzIDcuMzkxMzdDMi4yOTU2OCA3LjU2NDMyIDIuMjA5MiA3LjY1MDggMi4xNDczNiA3Ljc1MTcyQzIuMDkyNTMgNy44NDExOSAyLjA1MjEzIDcuOTM4NzMgMi4wMjc2MyA4LjA0MDc3QzIgOC4xNTU4NiAyIDguMjc4MTUgMiA4LjUyMjc0WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const InfoOctagonIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 16V12M12 8H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

InfoOctagonIcon.displayName = 'InfoOctagonIcon';
