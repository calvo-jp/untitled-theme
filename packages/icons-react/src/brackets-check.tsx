import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOC41NzA4IDIwQzE5LjgzMjggMjAgMjAuODU2OCAxOC45NzcgMjAuODU2OCAxNy43MTRWMTMuMTQzTDIxLjk5OTggMTJMMjAuODU2OCAxMC44NTdWNi4yODZDMjAuODU2OCA1LjAyMyAxOS44MzM4IDQgMTguNTcwOCA0TTUuNDI5IDRDNC4xNjYgNCAzLjE0MyA1LjAyMyAzLjE0MyA2LjI4NlYxMC44NTdMMiAxMkwzLjE0MyAxMy4xNDNWMTcuNzE0QzMuMTQzIDE4Ljk3NyA0LjE2NiAyMCA1LjQyOSAyME03LjUgMTJMOS45MzQzMSAxNC40MzQzQzEwLjEzMjMgMTQuNjMyMyAxMC4yMzEzIDE0LjczMTMgMTAuMzQ1NSAxNC43Njg0QzEwLjQ0NTkgMTQuODAxMSAxMC41NTQxIDE0LjgwMTEgMTAuNjU0NSAxNC43Njg0QzEwLjc2ODcgMTQuNzMxMyAxMC44Njc3IDE0LjYzMjMgMTEuMDY1NyAxNC40MzQzTDE2LjUgOSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const BracketsCheckIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M7.5 12L9.93431 14.4343C10.1323 14.6323 10.2313 14.7313 10.3455 14.7684C10.4459 14.8011 10.5541 14.8011 10.6545 14.7684C10.7687 14.7313 10.8677 14.6323 11.0657 14.4343L16.5 9"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BracketsCheckIcon.displayName = 'BracketsCheckIcon';
