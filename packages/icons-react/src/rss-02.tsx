import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMDAwMjQgMTMuMDIyNUM4LjE4NTIyIDEyLjI0MjkgMTEuNzU1OSAxNS44MTQ2IDEwLjk3NzQgMjAuOTk5Nk0zLjAwMDI0IDguMDM3ODRDMTAuOTM4IDcuMjU4MjQgMTYuNzQxNyAxMy4wNjE5IDE1Ljk2MjEgMjAuOTk5N00zLjAwMDI0IDMuMDUyMTJDMTMuNjkxOSAyLjI3MzY0IDIxLjcyNjQgMTAuMzA4MiAyMC45NDggMjAuOTk5OE01IDIxQzMuODk1NjYgMjEgMyAyMC4xMDQzIDMgMTlDMyAxNy44OTU3IDMuODk1NjYgMTcgNSAxN0M2LjEwNDM0IDE3IDcgMTcuODk1NyA3IDE5QzcgMjAuMTA0MyA2LjEwNDM0IDIxIDUgMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const Rss02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M3.00024 13.0225C8.18522 12.2429 11.7559 15.8146 10.9774 20.9996M3.00024 8.03784C10.938 7.25824 16.7417 13.0619 15.9621 20.9997M3.00024 3.05212C13.6919 2.27364 21.7264 10.3082 20.948 20.9998M5 21C3.89566 21 3 20.1043 3 19C3 17.8957 3.89566 17 5 17C6.10434 17 7 17.8957 7 19C7 20.1043 6.10434 21 5 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Rss02Icon.displayName = 'Rss02Icon';
