import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJWNE0xMiAyMFYyMk00IDEySDJNNi4zMTQxMiA2LjMxNDEyTDQuODk5OSA0Ljg5OTlNMTcuNjg1OSA2LjMxNDEyTDE5LjEwMDEgNC44OTk5TTYuMzE0MTIgMTcuNjlMNC44OTk5IDE5LjEwNDJNMTcuNjg1OSAxNy42OUwxOS4xMDAxIDE5LjEwNDJNMjIgMTJIMjBNMTcgMTJDMTcgMTQuNzYxNCAxNC43NjE0IDE3IDEyIDE3QzkuMjM4NTggMTcgNyAxNC43NjE0IDcgMTJDNyA5LjIzODU4IDkuMjM4NTggNyAxMiA3QzE0Ljc2MTQgNyAxNyA5LjIzODU4IDE3IDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const SunIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

SunIcon.displayName = 'SunIcon';
