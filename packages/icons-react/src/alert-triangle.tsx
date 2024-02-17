import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMS45OTk4IDguOTk5OTlWMTNNMTEuOTk5OCAxN0gxMi4wMDk4TTEwLjYxNTEgMy44OTE3MUwyLjM5MDE5IDE4LjA5ODNDMS45MzM5OCAxOC44ODYzIDEuNzA1ODggMTkuMjgwMyAxLjczOTU5IDE5LjYwMzdDMS43NjkgMTkuODg1NyAxLjkxNjc3IDIwLjE0MiAyLjE0NjEzIDIwLjMwODhDMi40MDkwOCAyMC41IDIuODY0MzUgMjAuNSAzLjc3NDg3IDIwLjVIMjAuMjI0NkMyMS4xMzUyIDIwLjUgMjEuNTkwNCAyMC41IDIxLjg1MzQgMjAuMzA4OEMyMi4wODI3IDIwLjE0MiAyMi4yMzA1IDE5Ljg4NTcgMjIuMjU5OSAxOS42MDM3QzIyLjI5MzYgMTkuMjgwMyAyMi4wNjU1IDE4Ljg4NjMgMjEuNjA5MyAxOC4wOTgzTDEzLjM4NDQgMy44OTE3MUMxMi45Mjk5IDMuMTA2NTQgMTIuNzAyNiAyLjcxMzk2IDEyLjQwNjEgMi41ODIxMUMxMi4xNDc0IDIuNDY3MSAxMS44NTIxIDIuNDY3MSAxMS41OTM1IDIuNTgyMTFDMTEuMjk2OSAyLjcxMzk2IDExLjA2OTYgMy4xMDY1NSAxMC42MTUxIDMuODkxNzFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const AlertTriangleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AlertTriangleIcon.displayName = 'AlertTriangleIcon';
