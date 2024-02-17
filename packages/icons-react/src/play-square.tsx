import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05LjUgOC45NjUzM0M5LjUgOC40ODgwNSA5LjUgOC4yNDk0MSA5LjU5OTc0IDguMTE2MThDOS42ODY2NiA4LjAwMDA3IDkuODE5NzEgNy45Mjc0NCA5Ljk2NDM4IDcuOTE3MUMxMC4xMzA0IDcuOTA1MjUgMTAuMzMxMSA4LjAzNDI5IDEwLjczMjYgOC4yOTIzOUwxNS40NTMyIDExLjMyNzFDMTUuODAxNiAxMS41NTEgMTUuOTc1OCAxMS42NjMgMTYuMDM1OSAxMS44MDU0QzE2LjA4ODUgMTEuOTI5OCAxNi4wODg1IDEyLjA3MDIgMTYuMDM1OSAxMi4xOTQ2QzE1Ljk3NTggMTIuMzM3IDE1LjgwMTYgMTIuNDQ5IDE1LjQ1MzIgMTIuNjcyOUwxMC43MzI2IDE1LjcwNzZDMTAuMzMxMSAxNS45NjU3IDEwLjEzMDQgMTYuMDk0OCA5Ljk2NDM4IDE2LjA4MjlDOS44MTk3MSAxNi4wNzI2IDkuNjg2NjYgMTUuOTk5OSA5LjU5OTc0IDE1Ljg4MzhDOS41IDE1Ljc1MDYgOS41IDE1LjUxMiA5LjUgMTUuMDM0N1Y4Ljk2NTMzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMyA3LjhDMyA2LjExOTg0IDMgNS4yNzk3NiAzLjMyNjk4IDQuNjM4MDNDMy42MTQ2IDQuMDczNTQgNC4wNzM1NCAzLjYxNDYgNC42MzgwMyAzLjMyNjk4QzUuMjc5NzYgMyA2LjExOTg0IDMgNy44IDNIMTYuMkMxNy44ODAyIDMgMTguNzIwMiAzIDE5LjM2MiAzLjMyNjk4QzE5LjkyNjUgMy42MTQ2IDIwLjM4NTQgNC4wNzM1NCAyMC42NzMgNC42MzgwM0MyMSA1LjI3OTc2IDIxIDYuMTE5ODQgMjEgNy44VjE2LjJDMjEgMTcuODgwMiAyMSAxOC43MjAyIDIwLjY3MyAxOS4zNjJDMjAuMzg1NCAxOS45MjY1IDE5LjkyNjUgMjAuMzg1NCAxOS4zNjIgMjAuNjczQzE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yIDIxSDcuOEM2LjExOTg0IDIxIDUuMjc5NzYgMjEgNC42MzgwMyAyMC42NzNDNC4wNzM1NCAyMC4zODU0IDMuNjE0NiAxOS45MjY1IDMuMzI2OTggMTkuMzYyQzMgMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yVjcuOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const PlaySquareIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PlaySquareIcon.displayName = 'PlaySquareIcon';
