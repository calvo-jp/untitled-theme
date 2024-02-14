import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOCAyMUM5LjUxOTk3IDIxIDkuMzc5OTYgMjEgOS4yNzMgMjAuOTQ1NUM5LjE3ODkyIDIwLjg5NzYgOS4xMDI0MyAyMC44MjExIDkuMDU0NSAyMC43MjdDOSAyMC42MiA5IDIwLjQ4IDkgMjAuMlYxMEg1TDEyIDNMMTkgMTBIMTVWMjAuMkMxNSAyMC40OCAxNSAyMC42MiAxNC45NDU1IDIwLjcyN0MxNC44OTc2IDIwLjgyMTEgMTQuODIxMSAyMC44OTc2IDE0LjcyNyAyMC45NDU1QzE0LjYyIDIxIDE0LjQ4IDIxIDE0LjIgMjFIOS44WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const ArrowBlockUpIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9.8 21C9.51997 21 9.37996 21 9.273 20.9455C9.17892 20.8976 9.10243 20.8211 9.0545 20.727C9 20.62 9 20.48 9 20.2V10H5L12 3L19 10H15V20.2C15 20.48 15 20.62 14.9455 20.727C14.8976 20.8211 14.8211 20.8976 14.727 20.9455C14.62 21 14.48 21 14.2 21H9.8Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArrowBlockUpIcon.displayName = 'ArrowBlockUpIcon';
