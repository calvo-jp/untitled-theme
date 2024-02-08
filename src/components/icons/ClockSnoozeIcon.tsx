import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMTdIMjEuNUwxNi41IDIySDIxLjVNMjEuOTUwNiAxM0MyMS45ODMzIDEyLjY3MTEgMjIgMTIuMzM3NSAyMiAxMkMyMiA2LjQ3NzE1IDE3LjUyMjggMiAxMiAyQzYuNDc3MTUgMiAyIDYuNDc3MTUgMiAxMkMyIDE3LjUyMjggNi40NzcxNSAyMiAxMiAyMkMxMi4xNjc3IDIyIDEyLjMzNDQgMjEuOTk1OSAxMi41IDIxLjk4NzdDMTIuNjY3OCAyMS45Nzk1IDEyLjgzNDUgMjEuOTY3MSAxMyAyMS45NTA2TTEyIDZWMTJMMTUuNzM4NCAxMy44NjkyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const ClockSnoozeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M16.5 17H21.5L16.5 22H21.5M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877C12.6678 21.9795 12.8345 21.9671 13 21.9506M12 6V12L15.7384 13.8692"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ClockSnoozeIcon.displayName = 'ClockSnoozeIcon';
