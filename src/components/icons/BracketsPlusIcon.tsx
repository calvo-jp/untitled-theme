import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjU3MDggMjBDMTkuODMyOCAyMCAyMC44NTY4IDE4Ljk3NyAyMC44NTY4IDE3LjcxNFYxMy4xNDNMMjEuOTk5OCAxMkwyMC44NTY4IDEwLjg1N1Y2LjI4NkMyMC44NTY4IDUuMDIzIDE5LjgzMzggNCAxOC41NzA4IDRNNS40MjkgNEM0LjE2NiA0IDMuMTQzIDUuMDIzIDMuMTQzIDYuMjg2VjEwLjg1N0wyIDEyTDMuMTQzIDEzLjE0M1YxNy43MTRDMy4xNDMgMTguOTc3IDQuMTY2IDIwIDUuNDI5IDIwTTEyIDhWMTZNOCAxMkgxNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const BracketsPlusIcon = React.forwardRef<
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
        d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M12 8V16M8 12H16"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BracketsPlusIcon.displayName = "BracketsPlusIcon";
