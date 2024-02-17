import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDdMMTQgMTdMOCAyMlYyTDE0IDdMMiAxN00yMC4xNDQ1IDYuNUMyMS4yNTgxIDguMDQ4MDQgMjEuOTE0IDkuOTQ3NDMgMjEuOTE0IDEyQzIxLjkxNCAxNC4wNTI2IDIxLjI1ODEgMTUuOTUyIDIwLjE0NDUgMTcuNU0xNyA4Ljg1NzI0QzE3LjYyMTQgOS43NDgxMSAxNy45ODU4IDEwLjgzMTUgMTcuOTg1OCAxMi4wMDAxQzE3Ljk4NTggMTMuMTY4NiAxNy42MjE0IDE0LjI1MjEgMTcgMTUuMTQzIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const BluetoothSignalIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M2 7L14 17L8 22V2L14 7L2 17M20.1445 6.5C21.2581 8.04804 21.914 9.94743 21.914 12C21.914 14.0526 21.2581 15.952 20.1445 17.5M17 8.85724C17.6214 9.74811 17.9858 10.8315 17.9858 12.0001C17.9858 13.1686 17.6214 14.2521 17 15.143"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BluetoothSignalIcon.displayName = 'BluetoothSignalIcon';
