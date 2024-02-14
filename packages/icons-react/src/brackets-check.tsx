import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjU3MDggMjBDMTkuODMyOCAyMCAyMC44NTY4IDE4Ljk3NyAyMC44NTY4IDE3LjcxNFYxMy4xNDNMMjEuOTk5OCAxMkwyMC44NTY4IDEwLjg1N1Y2LjI4NkMyMC44NTY4IDUuMDIzIDE5LjgzMzggNCAxOC41NzA4IDRNNS40MjkgNEM0LjE2NiA0IDMuMTQzIDUuMDIzIDMuMTQzIDYuMjg2VjEwLjg1N0wyIDEyTDMuMTQzIDEzLjE0M1YxNy43MTRDMy4xNDMgMTguOTc3IDQuMTY2IDIwIDUuNDI5IDIwTTcuNSAxMkw5LjkzNDMxIDE0LjQzNDNDMTAuMTMyMyAxNC42MzIzIDEwLjIzMTMgMTQuNzMxMyAxMC4zNDU1IDE0Ljc2ODRDMTAuNDQ1OSAxNC44MDExIDEwLjU1NDEgMTQuODAxMSAxMC42NTQ1IDE0Ljc2ODRDMTAuNzY4NyAxNC43MzEzIDEwLjg2NzcgMTQuNjMyMyAxMS4wNjU3IDE0LjQzNDNMMTYuNSA5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const BracketsCheckIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M7.5 12L9.93431 14.4343C10.1323 14.6323 10.2313 14.7313 10.3455 14.7684C10.4459 14.8011 10.5541 14.8011 10.6545 14.7684C10.7687 14.7313 10.8677 14.6323 11.0657 14.4343L16.5 9"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BracketsCheckIcon.displayName = 'BracketsCheckIcon';
