import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyVjQuNU0xMiAyQzYuNDc3MTUgMiAyIDYuNDc3MTUgMiAxMk0xMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyTTEyIDE5LjVWMjJNMTIgMjJDMTcuNTIyOCAyMiAyMiAxNy41MjI4IDIyIDEyTTEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJNNC41IDEySDJNMjIgMTJIMTkuNU0xOS4wNzg0IDE5LjA3ODRMMTcuMzA0NyAxNy4zMDQ3TTQuOTIxNjMgMTkuMDc4NEw2LjY5NzE1IDE3LjMwMjlNNC45MjE2MyA1TDYuNjU4MDggNi43MzY0NU0xOS4wNzg0IDVMMTMuNDk5OSAxMC41TTE0IDEyQzE0IDEzLjEwNDYgMTMuMTA0NiAxNCAxMiAxNEMxMC44OTU0IDE0IDEwIDEzLjEwNDYgMTAgMTJDMTAgMTAuODk1NCAxMC44OTU0IDEwIDEyIDEwQzEzLjEwNDYgMTAgMTQgMTAuODk1NCAxNCAxMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Speedometer01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 2V4.5M12 2C6.47715 2 2 6.47715 2 12M12 2C17.5228 2 22 6.47715 22 12M12 19.5V22M12 22C17.5228 22 22 17.5228 22 12M12 22C6.47715 22 2 17.5228 2 12M4.5 12H2M22 12H19.5M19.0784 19.0784L17.3047 17.3047M4.92163 19.0784L6.69715 17.3029M4.92163 5L6.65808 6.73645M19.0784 5L13.4999 10.5M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Speedometer01Icon.displayName = 'Speedometer01Icon';
