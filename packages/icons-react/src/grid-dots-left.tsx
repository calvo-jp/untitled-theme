import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAzSDcuNTFNNy41IDEySDcuNTFNNy41IDIxSDcuNTFNMTYuNSAzSDE2LjUxTTE2LjUgMTJIMTYuNTFNMTYuNSAyMUgxNi41MU0xMiAzSDEyLjAxTTEyIDEySDEyLjAxTTEyIDIxSDEyLjAxTTEyIDE2LjVIMTIuMDFNMTIgNy41SDEyLjAxTTIxIDNIMjEuMDFNMjEgMTJIMjEuMDFNMjEgMjFIMjEuMDFNMjEgMTYuNUgyMS4wMU0yMSA3LjVIMjEuMDFNMyAyMVYzIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const GridDotsLeftIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 12H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M3 21V3"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

GridDotsLeftIcon.displayName = 'GridDotsLeftIcon';
