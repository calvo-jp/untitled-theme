import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzkwMTkgMTguMDk4M0wxMC42MTUxIDMuODkxNzFDMTEuMDY5NiAzLjEwNjU1IDExLjI5NjkgMi43MTM5NiAxMS41OTM1IDIuNTgyMTFDMTEuODUyMSAyLjQ2NzEgMTIuMTQ3NCAyLjQ2NzEgMTIuNDA2MSAyLjU4MjExQzEyLjcwMjYgMi43MTM5NiAxMi45Mjk5IDMuMTA2NTQgMTMuMzg0NCAzLjg5MTcxTDIxLjYwOTMgMTguMDk4M0MyMi4wNjU1IDE4Ljg4NjMgMjIuMjkzNiAxOS4yODAzIDIyLjI1OTkgMTkuNjAzN0MyMi4yMzA1IDE5Ljg4NTcgMjIuMDgyNyAyMC4xNDIgMjEuODUzNCAyMC4zMDg4QzIxLjU5MDQgMjAuNSAyMS4xMzUyIDIwLjUgMjAuMjI0NiAyMC41SDMuNzc0ODdDMi44NjQzNSAyMC41IDIuNDA5MDggMjAuNSAyLjE0NjEzIDIwLjMwODhDMS45MTY3NyAyMC4xNDIgMS43NjkgMTkuODg1NyAxLjczOTU5IDE5LjYwMzdDMS43MDU4OCAxOS4yODAzIDEuOTMzOTggMTguODg2MyAyLjM5MDE5IDE4LjA5ODNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const TriangleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

TriangleIcon.displayName = 'TriangleIcon';
