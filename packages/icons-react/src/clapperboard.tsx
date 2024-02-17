import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05IDNMOCA4TTE2IDNMMTUgOE0yMiA4SDJNNi44IDIxSDE3LjJDMTguODgwMiAyMSAxOS43MjAyIDIxIDIwLjM2MiAyMC42NzNDMjAuOTI2NSAyMC4zODU0IDIxLjM4NTQgMTkuOTI2NSAyMS42NzMgMTkuMzYyQzIyIDE4LjcyMDIgMjIgMTcuODgwMiAyMiAxNi4yVjcuOEMyMiA2LjExOTg0IDIyIDUuMjc5NzYgMjEuNjczIDQuNjM4MDNDMjEuMzg1NCA0LjA3MzU0IDIwLjkyNjUgMy42MTQ2IDIwLjM2MiAzLjMyNjk4QzE5LjcyMDIgMyAxOC44ODAyIDMgMTcuMiAzSDYuOEM1LjExOTg0IDMgNC4yNzk3NiAzIDMuNjM4MDMgMy4zMjY5OEMzLjA3MzU0IDMuNjE0NiAyLjYxNDYgNC4wNzM1NCAyLjMyNjk4IDQuNjM4MDNDMiA1LjI3OTc2IDIgNi4xMTk4NCAyIDcuOFYxNi4yQzIgMTcuODgwMiAyIDE4LjcyMDIgMi4zMjY5OCAxOS4zNjJDMi42MTQ2IDE5LjkyNjUgMy4wNzM1NCAyMC4zODU0IDMuNjM4MDMgMjAuNjczQzQuMjc5NzYgMjEgNS4xMTk4NCAyMSA2LjggMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ClapperboardIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9 3L8 8M16 3L15 8M22 8H2M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ClapperboardIcon.displayName = 'ClapperboardIcon';
