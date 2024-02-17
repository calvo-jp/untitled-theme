import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOC41NzA4IDIwQzE5LjgzMjggMjAgMjAuODU2OCAxOC45NzcgMjAuODU2OCAxNy43MTRWMTMuMTQzTDIxLjk5OTggMTJMMjAuODU2OCAxMC44NTdWNi4yODZDMjAuODU2OCA1LjAyMyAxOS44MzM4IDQgMTguNTcwOCA0TTUuNDI5IDRDNC4xNjYgNCAzLjE0MyA1LjAyMyAzLjE0MyA2LjI4NlYxMC44NTdMMiAxMkwzLjE0MyAxMy4xNDNWMTcuNzE0QzMuMTQzIDE4Ljk3NyA0LjE2NiAyMCA1LjQyOSAyME03LjUgMTJINy41MU0xMiAxMkgxMi4wMU0xNi41IDEySDE2LjUxTTggMTJDOCAxMi4yNzYxIDcuNzc2MTQgMTIuNSA3LjUgMTIuNUM3LjIyMzg2IDEyLjUgNyAxMi4yNzYxIDcgMTJDNyAxMS43MjM5IDcuMjIzODYgMTEuNSA3LjUgMTEuNUM3Ljc3NjE0IDExLjUgOCAxMS43MjM5IDggMTJaTTEyLjUgMTJDMTIuNSAxMi4yNzYxIDEyLjI3NjEgMTIuNSAxMiAxMi41QzExLjcyMzkgMTIuNSAxMS41IDEyLjI3NjEgMTEuNSAxMkMxMS41IDExLjcyMzkgMTEuNzIzOSAxMS41IDEyIDExLjVDMTIuMjc2MSAxMS41IDEyLjUgMTEuNzIzOSAxMi41IDEyWk0xNyAxMkMxNyAxMi4yNzYxIDE2Ljc3NjEgMTIuNSAxNi41IDEyLjVDMTYuMjIzOSAxMi41IDE2IDEyLjI3NjEgMTYgMTJDMTYgMTEuNzIzOSAxNi4yMjM5IDExLjUgMTYuNSAxMS41QzE2Ljc3NjEgMTEuNSAxNyAxMS43MjM5IDE3IDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const BracketsEllipsesIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M7.5 12H7.51M12 12H12.01M16.5 12H16.51M8 12C8 12.2761 7.77614 12.5 7.5 12.5C7.22386 12.5 7 12.2761 7 12C7 11.7239 7.22386 11.5 7.5 11.5C7.77614 11.5 8 11.7239 8 12ZM12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12ZM17 12C17 12.2761 16.7761 12.5 16.5 12.5C16.2239 12.5 16 12.2761 16 12C16 11.7239 16.2239 11.5 16.5 11.5C16.7761 11.5 17 11.7239 17 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BracketsEllipsesIcon.displayName = 'BracketsEllipsesIcon';
