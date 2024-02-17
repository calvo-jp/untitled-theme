import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTk2NiA5LjA2NzkxQzEwLjk5NjkgNy44OTkyIDkuMzI5ODcgNy41ODQ4MiA4LjA3NzM1IDguNjU1MDFDNi44MjQ4MiA5LjcyNTE5IDYuNjQ4NDggMTEuNTE0NSA3LjYzMjEgMTIuNzgwMkM4LjI2MjExIDEzLjU5MDkgOS44NzU1OCAxNS4wOTQyIDEwLjk1NDIgMTYuMDcwNEMxMS4zMTI3IDE2LjM5NDcgMTEuNDkxOSAxNi41NTY5IDExLjcwNjYgMTYuNjIyQzExLjg5MTEgMTYuNjc3OSAxMi4xMDIgMTYuNjc3OSAxMi4yODY2IDE2LjYyMkMxMi41MDEyIDE2LjU1NjkgMTIuNjgwNSAxNi4zOTQ3IDEzLjAzODkgMTYuMDcwNEMxNC4xMTc2IDE1LjA5NDIgMTUuNzMxIDEzLjU5MDkgMTYuMzYxMSAxMi43ODAyQzE3LjM0NDcgMTEuNTE0NSAxNy4xODk5IDkuNzEzOTMgMTUuOTE1OCA4LjY1NTAxQzE0LjY0MTcgNy41OTYwOCAxMi45OTYzIDcuODk5MiAxMS45OTY2IDkuMDY3OTFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const HeartCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9966 9.06791C10.9969 7.8992 9.32987 7.58482 8.07735 8.65501C6.82482 9.72519 6.64848 11.5145 7.6321 12.7802C8.26211 13.5909 9.87558 15.0942 10.9542 16.0704C11.3127 16.3947 11.4919 16.5569 11.7066 16.622C11.8911 16.6779 12.102 16.6779 12.2866 16.622C12.5012 16.5569 12.6805 16.3947 13.0389 16.0704C14.1176 15.0942 15.731 13.5909 16.3611 12.7802C17.3447 11.5145 17.1899 9.71393 15.9158 8.65501C14.6417 7.59608 12.9963 7.8992 11.9966 9.06791Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

HeartCircleIcon.displayName = 'HeartCircleIcon';
