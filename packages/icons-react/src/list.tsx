import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEyTDkgMTJNMjEgNkw5IDZNMjEgMThMOSAxOE01IDEyQzUgMTIuNTUyMyA0LjU1MjI4IDEzIDQgMTNDMy40NDc3MiAxMyAzIDEyLjU1MjMgMyAxMkMzIDExLjQ0NzcgMy40NDc3MiAxMSA0IDExQzQuNTUyMjggMTEgNSAxMS40NDc3IDUgMTJaTTUgNkM1IDYuNTUyMjggNC41NTIyOCA3IDQgN0MzLjQ0NzcyIDcgMyA2LjU1MjI4IDMgNkMzIDUuNDQ3NzIgMy40NDc3MiA1IDQgNUM0LjU1MjI4IDUgNSA1LjQ0NzcyIDUgNlpNNSAxOEM1IDE4LjU1MjMgNC41NTIyOCAxOSA0IDE5QzMuNDQ3NzIgMTkgMyAxOC41NTIzIDMgMThDMyAxNy40NDc3IDMuNDQ3NzIgMTcgNCAxN0M0LjU1MjI4IDE3IDUgMTcuNDQ3NyA1IDE4WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const ListIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ListIcon.displayName = 'ListIcon';
