import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiA1LjVMNy4zNjE1OSAxMi4yNDY4QzcuMDgyMzYgMTIuNjUyOSA2Ljk0Mjc1IDEyLjg1NiA2Ljk1MTEzIDEzLjAyNDhDNi45NTg0MyAxMy4xNzE4IDcuMDMwMTUgMTMuMzA4MiA3LjE0NzE2IDEzLjM5NzVDNy4yODE1MSAxMy41IDcuNTI3OTQgMTMuNSA4LjAyMDgyIDEzLjVIMTJWMTguNUwxNi42Mzg0IDExLjc1MzJDMTYuOTE3NiAxMS4zNDcxIDE3LjA1NzMgMTEuMTQ0IDE3LjA0ODkgMTAuOTc1MkMxNy4wNDE2IDEwLjgyODIgMTYuOTY5OSAxMC42OTE4IDE2Ljg1MjggMTAuNjAyNUMxNi43MTg1IDEwLjUgMTYuNDcyMSAxMC41IDE1Ljk3OTIgMTAuNUgxMlY1LjVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ZapCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 5.5L7.36159 12.2468C7.08236 12.6529 6.94275 12.856 6.95113 13.0248C6.95843 13.1718 7.03015 13.3082 7.14716 13.3975C7.28151 13.5 7.52794 13.5 8.02082 13.5H12V18.5L16.6384 11.7532C16.9176 11.3471 17.0573 11.144 17.0489 10.9752C17.0416 10.8282 16.9699 10.6918 16.8528 10.6025C16.7185 10.5 16.4721 10.5 15.9792 10.5H12V5.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ZapCircleIcon.displayName = 'ZapCircleIcon';
