import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik04IDNINy44QzYuMTE5ODQgMyA1LjI3OTc2IDMgNC42MzgwMyAzLjMyNjk4QzQuMDczNTQgMy42MTQ2IDMuNjE0NiA0LjA3MzU0IDMuMzI2OTggNC42MzgwM0MzIDUuMjc5NzYgMyA2LjExOTg0IDMgNy44VjhNOCAyMUg3LjhDNi4xMTk4NCAyMSA1LjI3OTc2IDIxIDQuNjM4MDMgMjAuNjczQzQuMDczNTQgMjAuMzg1NCAzLjYxNDYgMTkuOTI2NSAzLjMyNjk4IDE5LjM2MkMzIDE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMlYxNk0yMSA4VjcuOEMyMSA2LjExOTg0IDIxIDUuMjc5NzYgMjAuNjczIDQuNjM4MDNDMjAuMzg1NCA0LjA3MzU0IDE5LjkyNjUgMy42MTQ2IDE5LjM2MiAzLjMyNjk4QzE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMiAzSDE2TTIxIDE2VjE2LjJDMjEgMTcuODgwMiAyMSAxOC43MjAyIDIwLjY3MyAxOS4zNjJDMjAuMzg1NCAxOS45MjY1IDE5LjkyNjUgMjAuMzg1NCAxOS4zNjIgMjAuNjczQzE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yIDIxSDE2TTMgMTJIMy4wMU03LjUgMTJINy41MU0xNi41IDEySDE2LjUxTTEyIDEySDEyLjAxTTIxIDEySDIxLjAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ScanIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16M3 12H3.01M7.5 12H7.51M16.5 12H16.51M12 12H12.01M21 12H21.01"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ScanIcon.displayName = 'ScanIcon';
