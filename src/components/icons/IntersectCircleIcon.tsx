import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTZDMTIuODY2IDE2IDE2IDEyLjg2NiAxNiA5QzE2IDUuMTM0MDEgMTIuODY2IDIgOSAyQzUuMTM0MDEgMiAyIDUuMTM0MDEgMiA5QzIgMTIuODY2IDUuMTM0MDEgMTYgOSAxNloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNSAyMkMxOC44NjYgMjIgMjIgMTguODY2IDIyIDE1QzIyIDExLjEzNCAxOC44NjYgOCAxNSA4QzExLjEzNCA4IDggMTEuMTM0IDggMTVDOCAxOC44NjYgMTEuMTM0IDIyIDE1IDIyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const IntersectCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

IntersectCircleIcon.displayName = 'IntersectCircleIcon';
