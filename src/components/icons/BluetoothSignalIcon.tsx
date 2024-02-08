import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgN0wxNCAxN0w4IDIyVjJMMTQgN0wyIDE3TTIwLjE0NDUgNi41QzIxLjI1ODEgOC4wNDgwNCAyMS45MTQgOS45NDc0MyAyMS45MTQgMTJDMjEuOTE0IDE0LjA1MjYgMjEuMjU4MSAxNS45NTIgMjAuMTQ0NSAxNy41TTE3IDguODU3MjRDMTcuNjIxNCA5Ljc0ODExIDE3Ljk4NTggMTAuODMxNSAxNy45ODU4IDEyLjAwMDFDMTcuOTg1OCAxMy4xNjg2IDE3LjYyMTQgMTQuMjUyMSAxNyAxNS4xNDMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const BluetoothSignalIcon = React.forwardRef<
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
        d="M2 7L14 17L8 22V2L14 7L2 17M20.1445 6.5C21.2581 8.04804 21.914 9.94743 21.914 12C21.914 14.0526 21.2581 15.952 20.1445 17.5M17 8.85724C17.6214 9.74811 17.9858 10.8315 17.9858 12.0001C17.9858 13.1686 17.6214 14.2521 17 15.143"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BluetoothSignalIcon.displayName = "BluetoothSignalIcon";
