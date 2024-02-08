import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjExMTEgM0MxOS42MzMzIDMgMjIgNi4zNTI1IDIyIDkuNDhDMjIgMTUuODEzOCAxMi4xNzc4IDIxIDEyIDIxQzExLjgyMjIgMjEgMiAxNS44MTM4IDIgOS40OEMyIDYuMzUyNSA0LjM2NjY3IDMgNy44ODg4OSAzQzkuOTExMTEgMyAxMS4yMzMzIDQuMDIzNzUgMTIgNC45MjM3NUMxMi43NjY3IDQuMDIzNzUgMTQuMDg4OSAzIDE2LjExMTEgM1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const HeartRoundedIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

HeartRoundedIcon.displayName = 'HeartRoundedIcon';
