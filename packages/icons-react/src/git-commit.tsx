import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNiAxMkMxNiAxNC4yMDkxIDE0LjIwOTEgMTYgMTIgMTZDOS43OTA4NSAxNiA3Ljk5OTk5IDE0LjIwOTEgNy45OTk5OSAxMk0xNiAxMkMxNiA5Ljc5MDg2IDE0LjIwOTEgOCAxMiA4QzkuNzkwODUgOCA3Ljk5OTk5IDkuNzkwODYgNy45OTk5OSAxMk0xNiAxMkgyMk03Ljk5OTk5IDEySDIuMDAwMTgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const GitCommitIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M16 12C16 14.2091 14.2091 16 12 16C9.79085 16 7.99999 14.2091 7.99999 12M16 12C16 9.79086 14.2091 8 12 8C9.79085 8 7.99999 9.79086 7.99999 12M16 12H22M7.99999 12H2.00018"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

GitCommitIcon.displayName = 'GitCommitIcon';
