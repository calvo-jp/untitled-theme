import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTJIMjJNMiAxMkMyIDE3LjUyMjggNi40NzcxNSAyMiAxMiAyMk0yIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMk0yMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJNMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMk0xMiAyQzE0LjUwMTMgNC43MzgzNSAxNS45MjI4IDguMjkyMDMgMTYgMTJDMTUuOTIyOCAxNS43MDggMTQuNTAxMyAxOS4yNjE2IDEyIDIyTTEyIDJDOS40OTg3MiA0LjczODM1IDguMDc3MjUgOC4yOTIwMyA4IDEyQzguMDc3MjUgMTUuNzA4IDkuNDk4NzIgMTkuMjYxNiAxMiAyMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const Globe01Icon = React.forwardRef<
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
        d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Globe01Icon.displayName = "Globe01Icon";
