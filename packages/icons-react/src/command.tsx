import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05IDlWNkM5IDQuMzQzMTUgNy42NTY4NSAzIDYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNkMzIDcuNjU2ODUgNC4zNDMxNSA5IDYgOUg5Wk05IDlWMTVNOSA5SDE1TTkgMTVWMThDOSAxOS42NTY5IDcuNjU2ODUgMjEgNiAyMUM0LjM0MzE1IDIxIDMgMTkuNjU2OSAzIDE4QzMgMTYuMzQzMSA0LjM0MzE1IDE1IDYgMTVIOVpNOSAxNUgxNU0xNSAxNUgxOEMxOS42NTY5IDE1IDIxIDE2LjM0MzEgMjEgMThDMjEgMTkuNjU2OSAxOS42NTY5IDIxIDE4IDIxQzE2LjM0MzEgMjEgMTUgMTkuNjU2OSAxNSAxOFYxNVpNMTUgMTVWOU0xNSA5VjZDMTUgNC4zNDMxNSAxNi4zNDMxIDMgMTggM0MxOS42NTY5IDMgMjEgNC4zNDMxNSAyMSA2QzIxIDcuNjU2ODUgMTkuNjU2OSA5IDE4IDlIMTVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const CommandIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9ZM9 9V15M9 9H15M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15ZM15 15V9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CommandIcon.displayName = 'CommandIcon';
