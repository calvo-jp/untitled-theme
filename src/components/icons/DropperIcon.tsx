import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUgNi40OTk4MUwxNy41IDEzLjQ5OThNMiAyMS45OTk4QzIgMjEuOTk5OCA2LjUgMjEuNDk5OCA5IDE4Ljk5OThMMjEgNi45OTk4MkMyMi4xMDQ2IDUuODk1MjUgMjIuMTA0NiA0LjEwNDM4IDIxIDIuOTk5ODJDMTkuODk1NCAxLjg5NTI1IDE4LjEwNDYgMS44OTUyNCAxNyAyLjk5OTgxTDUgMTQuOTk5OEMyLjUgMTcuNDk5OCAyIDIxLjk5OTggMiAyMS45OTk4WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const DropperIcon = React.forwardRef<
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
        d="M10.5 6.49981L17.5 13.4998M2 21.9998C2 21.9998 6.5 21.4998 9 18.9998L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99982C19.8954 1.89525 18.1046 1.89524 17 2.99981L5 14.9998C2.5 17.4998 2 21.9998 2 21.9998Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

DropperIcon.displayName = "DropperIcon";
