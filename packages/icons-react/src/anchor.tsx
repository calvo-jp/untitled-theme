import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiA4QzEzLjY1NjkgOCAxNSA2LjY1Njg1IDE1IDVDMTUgMy4zNDMxNSAxMy42NTY5IDIgMTIgMkMxMC4zNDMxIDIgOSAzLjM0MzE1IDkgNUM5IDYuNjU2ODUgMTAuMzQzMSA4IDEyIDhaTTEyIDhWMjJNMTIgMjJDOS4zNDc4NCAyMiA2LjgwNDMgMjAuOTQ2NCA0LjkyODkzIDE5LjA3MTFDMy4wNTM1NyAxNy4xOTU3IDIgMTQuNjUyMiAyIDEySDVNMTIgMjJDMTQuNjUyMiAyMiAxNy4xOTU3IDIwLjk0NjQgMTkuMDcxMSAxOS4wNzExQzIwLjk0NjQgMTcuMTk1NyAyMiAxNC42NTIyIDIyIDEySDE5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const AnchorIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 8V22M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12H5M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AnchorIcon.displayName = 'AnchorIcon';
