import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDE4QzE1IDE5LjY1NjkgMTYuMzQzMSAyMSAxOCAyMUMxOS42NTY5IDIxIDIxIDE5LjY1NjkgMjEgMThDMjEgMTYuMzQzMSAxOS42NTY5IDE1IDE4IDE1QzE2LjM0MzEgMTUgMTUgMTYuMzQzMSAxNSAxOFpNMTUgMThDMTIuNjEzMSAxOCAxMC4zMjM5IDE3LjA1MTggOC42MzYwNCAxNS4zNjRDNi45NDgyMSAxMy42NzYxIDYgMTEuMzg2OSA2IDlNNiA5QzcuNjU2ODUgOSA5IDcuNjU2ODUgOSA2QzkgNC4zNDMxNSA3LjY1Njg1IDMgNiAzQzQuMzQzMTUgMyAzIDQuMzQzMTUgMyA2QzMgNy42NTY4NSA0LjM0MzE1IDkgNiA5Wk02IDlWMjEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const GitMergeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM15 18C12.6131 18 10.3239 17.0518 8.63604 15.364C6.94821 13.6761 6 11.3869 6 9M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 9V21"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

GitMergeIcon.displayName = 'GitMergeIcon';
