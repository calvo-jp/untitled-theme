import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNSAyVjRNOS41IDIwVjIyTTEzLjUgMlY0TTEzLjUgMjBWMjJNNy41IDRIMTRDMTYuMjA5MSA0IDE4IDUuNzkwODYgMTggOEMxOCAxMC4yMDkxIDE2LjIwOTEgMTIgMTQgMTJINy41SDE1QzE3LjIwOTEgMTIgMTkgMTMuNzkwOSAxOSAxNkMxOSAxOC4yMDkxIDE3LjIwOTEgMjAgMTUgMjBINy41TTcuNSA0SDUuNU03LjUgNFYyME03LjUgMjBINS41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const CurrencyBitcoinIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M9.5 2V4M9.5 20V22M13.5 2V4M13.5 20V22M7.5 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H7.5H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H7.5M7.5 4H5.5M7.5 4V20M7.5 20H5.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CurrencyBitcoinIcon.displayName = "CurrencyBitcoinIcon";
