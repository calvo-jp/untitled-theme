import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik04IDEyTDEyIDE2TTEyIDE2TDE2IDEyTTEyIDE2VjhNNy44IDIxSDE2LjJDMTcuODgwMiAyMSAxOC43MjAyIDIxIDE5LjM2MiAyMC42NzNDMTkuOTI2NSAyMC4zODU0IDIwLjM4NTQgMTkuOTI2NSAyMC42NzMgMTkuMzYyQzIxIDE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yVjcuOEMyMSA2LjExOTg0IDIxIDUuMjc5NzYgMjAuNjczIDQuNjM4MDNDMjAuMzg1NCA0LjA3MzU0IDE5LjkyNjUgMy42MTQ2IDE5LjM2MiAzLjMyNjk4QzE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMiAzSDcuOEM2LjExOTg0IDMgNS4yNzk3NiAzIDQuNjM4MDMgMy4zMjY5OEM0LjA3MzU0IDMuNjE0NiAzLjYxNDYgNC4wNzM1NCAzLjMyNjk4IDQuNjM4MDNDMyA1LjI3OTc2IDMgNi4xMTk4NCAzIDcuOFYxNi4yQzMgMTcuODgwMiAzIDE4LjcyMDIgMy4zMjY5OCAxOS4zNjJDMy42MTQ2IDE5LjkyNjUgNC4wNzM1NCAyMC4zODU0IDQuNjM4MDMgMjAuNjczQzUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjggMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ArrowSquareDownIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M8 12L12 16M12 16L16 12M12 16V8M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArrowSquareDownIcon.displayName = 'ArrowSquareDownIcon';
