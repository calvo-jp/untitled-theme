import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTkzMiA1LjEzNTgxQzkuOTkzOCAyLjc5ODQgNi42NTk3NSAyLjE2OTY0IDQuMTU0NjkgNC4zMTAwMUMxLjY0OTY0IDYuNDUwMzggMS4yOTY5NyAxMC4wMjkgMy4yNjQyIDEyLjU2MDRDNC44OTk4MiAxNC42NjUxIDkuODQ5NzcgMTkuMTA0MSAxMS40NzIxIDIwLjU0MDhDMTEuNjUzNiAyMC43MDE2IDExLjc0NDQgMjAuNzgxOSAxMS44NTAyIDIwLjgxMzVDMTEuOTQyNiAyMC44NDExIDEyLjA0MzcgMjAuODQxMSAxMi4xMzYxIDIwLjgxMzVDMTIuMjQxOSAyMC43ODE5IDEyLjMzMjcgMjAuNzAxNiAxMi41MTQyIDIwLjU0MDhDMTQuMTM2NSAxOS4xMDQxIDE5LjA4NjUgMTQuNjY1MSAyMC43MjIxIDEyLjU2MDRDMjIuNjg5MyAxMC4wMjkgMjIuMzc5NyA2LjQyNzg3IDE5LjgzMTYgNC4zMTAwMUMxNy4yODM1IDIuMTkyMTYgMTMuOTkyNSAyLjc5ODQgMTEuOTkzMiA1LjEzNTgxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const HeartIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

HeartIcon.displayName = 'HeartIcon';
