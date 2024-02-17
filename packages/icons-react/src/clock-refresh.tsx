import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMC40NTMyIDEyLjg5MjhDMjAuMTc1NCAxNS41MDI3IDE4LjY5NjcgMTcuOTQ4NCAxNi4yNDk3IDE5LjM2MTJDMTIuMTg0MiAyMS43MDg0IDYuOTg1NjYgMjAuMzE1NSA0LjYzODQ1IDE2LjI1TDQuMzg4NDUgMTUuODE3TTMuNTQ2MTcgMTEuMTA3MUMzLjgyMzk3IDguNDk3MjMgNS4zMDI3NiA2LjA1MTUxIDcuNzQ5NzQgNC42Mzg3NEMxMS44MTUyIDIuMjkxNTMgMTcuMDEzOCAzLjY4NDQ3IDE5LjM2MSA3Ljc0OTk1TDE5LjYxMSA4LjE4Mjk3TTMuNDkzMTYgMTguMDY1OUw0LjIyNTIyIDE1LjMzMzlMNi45NTcyNyAxNi4wNjU5TTE3LjA0MjIgNy45MzM5OEwxOS43NzQzIDguNjY2MDNMMjAuNTA2MyA1LjkzMzk4TTExLjk5OTcgNy40OTk5NVYxMkwxNC40OTk3IDEzLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const ClockRefreshIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M20.4532 12.8928C20.1754 15.5027 18.6967 17.9484 16.2497 19.3612C12.1842 21.7084 6.98566 20.3155 4.63845 16.25L4.38845 15.817M3.54617 11.1071C3.82397 8.49723 5.30276 6.05151 7.74974 4.63874C11.8152 2.29153 17.0138 3.68447 19.361 7.74995L19.611 8.18297M3.49316 18.0659L4.22522 15.3339L6.95727 16.0659M17.0422 7.93398L19.7743 8.66603L20.5063 5.93398M11.9997 7.49995V12L14.4997 13.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ClockRefreshIcon.displayName = 'ClockRefreshIcon';
