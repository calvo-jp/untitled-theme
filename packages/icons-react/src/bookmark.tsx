import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgNy44QzUgNi4xMTk4NCA1IDUuMjc5NzYgNS4zMjY5OCA0LjYzODAzQzUuNjE0NiA0LjA3MzU0IDYuMDczNTQgMy42MTQ2IDYuNjM4MDMgMy4zMjY5OEM3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOCAzSDE0LjJDMTUuODgwMiAzIDE2LjcyMDIgMyAxNy4zNjIgMy4zMjY5OEMxNy45MjY1IDMuNjE0NiAxOC4zODU0IDQuMDczNTQgMTguNjczIDQuNjM4MDNDMTkgNS4yNzk3NiAxOSA2LjExOTg0IDE5IDcuOFYyMUwxMiAxN0w1IDIxVjcuOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const BookmarkIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BookmarkIcon.displayName = 'BookmarkIcon';
