import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjkzNzcgMTUuOTM3N0MxOS4zNjAzIDE1LjQ3OTUgMjIgMTIuNTQ4IDIyIDlDMjIgNS4xMzQwMSAxOC44NjYgMiAxNSAyQzExLjQ1MiAyIDguNTIwNDkgNC42Mzk2NyA4LjA2MjI3IDguMDYyMjdNNy41IDEzTDkgMTJWMTcuNU03LjUgMTcuNUgxMC41TTE2IDE1QzE2IDE4Ljg2NiAxMi44NjYgMjIgOSAyMkM1LjEzNDAxIDIyIDIgMTguODY2IDIgMTVDMiAxMS4xMzQgNS4xMzQwMSA4IDkgOEMxMi44NjYgOCAxNiAxMS4xMzQgMTYgMTVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const Coins02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M15.9377 15.9377C19.3603 15.4795 22 12.548 22 9C22 5.13401 18.866 2 15 2C11.452 2 8.52049 4.63967 8.06227 8.06227M7.5 13L9 12V17.5M7.5 17.5H10.5M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Coins02Icon.displayName = 'Coins02Icon';
