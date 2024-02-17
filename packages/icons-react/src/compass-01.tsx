import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJNMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMk0yMiAxMkgyME0xMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyTTEyIDIyVjIwTTIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyTTIgMTJINE0xMiAyVjRNMTkuMDcxMSAxOS4wNzExTDE3LjY1NjkgMTcuNjU2OU02LjM0MzE1IDYuMzQzMTVMNC45Mjg5MyA0LjkyODkzTTE3LjY1NjkgNi4zNDMxNUwxOS4wNzExIDQuOTI4OTNNNC45Mjg5MyAxOS4wNzExTDYuMzQzMTUgMTcuNjU2OU04IDEyTDEwLjUgMTAuNUwxMiA4TDEzLjUgMTAuNUwxNiAxMkwxMy41IDEzLjVMMTIgMTZMMTAuNSAxMy41TDggMTJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Compass01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Compass01Icon.displayName = 'Compass01Icon';
