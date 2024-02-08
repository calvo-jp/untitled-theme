import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDkuNVYxMy41TDE0LjUgMTVNMTIgNUM3LjMwNTU4IDUgMy41IDguODA1NTggMy41IDEzLjVDMy41IDE4LjE5NDQgNy4zMDU1OCAyMiAxMiAyMkMxNi42OTQ0IDIyIDIwLjUgMTguMTk0NCAyMC41IDEzLjVDMjAuNSA4LjgwNTU4IDE2LjY5NDQgNSAxMiA1Wk0xMiA1VjJNMTAgMkgxNE0yMC4zMjkgNS41OTIwNEwxOC44MjkgNC4wOTIwNEwxOS41NzkgNC44NDIwNE0zLjY3MTAyIDUuNTkyMDRMNS4xNzEwMiA0LjA5MjA0TDQuNDIxMDIgNC44NDIwNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const ClockStopwatchIcon = React.forwardRef<
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
        d="M12 9.5V13.5L14.5 15M12 5C7.30558 5 3.5 8.80558 3.5 13.5C3.5 18.1944 7.30558 22 12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.80558 16.6944 5 12 5ZM12 5V2M10 2H14M20.329 5.59204L18.829 4.09204L19.579 4.84204M3.67102 5.59204L5.17102 4.09204L4.42102 4.84204"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClockStopwatchIcon.displayName = "ClockStopwatchIcon";
