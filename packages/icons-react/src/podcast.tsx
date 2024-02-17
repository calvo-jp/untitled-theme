import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNy4xMTg5IDE4QzE5LjQ2MjMgMTYuNDE1MSAyMSAxMy43Nzc5IDIxIDEwLjc4NUMyMSA1LjkzMzMgMTYuOTcwNCAyIDEyIDJDNy4wMjk1OCAyIDMgNS45MzMzIDMgMTAuNzg1QzMgMTMuNzc3OSA0LjUzNzcxIDE2LjQxNTEgNi44ODExMyAxOE04LjM1OTY3IDE0QzcuNTE4NzUgMTMuMTUgNyAxMi4wMDg2IDcgMTAuNzUwNUM3IDguMTI3MTEgOS4yMzg4MSA2IDEyIDZDMTQuNzYxMiA2IDE3IDguMTI3MTEgMTcgMTAuNzUwNUMxNyAxMi4wMDk1IDE2LjQ4MTMgMTMuMTUgMTUuNjQwMyAxNE0xMiAyMkMxMC44OTU0IDIyIDEwIDIxLjEwNDYgMTAgMjBWMThDMTAgMTYuODk1NCAxMC44OTU0IDE2IDEyIDE2QzEzLjEwNDYgMTYgMTQgMTYuODk1NCAxNCAxOFYyMEMxNCAyMS4xMDQ2IDEzLjEwNDYgMjIgMTIgMjJaTTEzIDExQzEzIDExLjU1MjMgMTIuNTUyMyAxMiAxMiAxMkMxMS40NDc3IDEyIDExIDExLjU1MjMgMTEgMTFDMTEgMTAuNDQ3NyAxMS40NDc3IDEwIDEyIDEwQzEyLjU1MjMgMTAgMTMgMTAuNDQ3NyAxMyAxMVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const PodcastIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M17.1189 18C19.4623 16.4151 21 13.7779 21 10.785C21 5.9333 16.9704 2 12 2C7.02958 2 3 5.9333 3 10.785C3 13.7779 4.53771 16.4151 6.88113 18M8.35967 14C7.51875 13.15 7 12.0086 7 10.7505C7 8.12711 9.23881 6 12 6C14.7612 6 17 8.12711 17 10.7505C17 12.0095 16.4813 13.15 15.6403 14M12 22C10.8954 22 10 21.1046 10 20V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V20C14 21.1046 13.1046 22 12 22ZM13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PodcastIcon.displayName = 'PodcastIcon';
