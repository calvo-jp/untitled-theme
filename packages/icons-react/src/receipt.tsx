import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik00IDcuOEM0IDYuMTE5ODQgNCA1LjI3OTc2IDQuMzI2OTggNC42MzgwM0M0LjYxNDYgNC4wNzM1NCA1LjA3MzU0IDMuNjE0NiA1LjYzODAzIDMuMzI2OThDNi4yNzk3NiAzIDcuMTE5ODQgMyA4LjggM0gxNS4yQzE2Ljg4MDIgMyAxNy43MjAyIDMgMTguMzYyIDMuMzI2OThDMTguOTI2NSAzLjYxNDYgMTkuMzg1NCA0LjA3MzU0IDE5LjY3MyA0LjYzODAzQzIwIDUuMjc5NzYgMjAgNi4xMTk4NCAyMCA3LjhWMjFMMTcuMjUgMTlMMTQuNzUgMjFMMTIgMTlMOS4yNSAyMUw2Ljc1IDE5TDQgMjFWNy44WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const ReceiptIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L17.25 19L14.75 21L12 19L9.25 21L6.75 19L4 21V7.8Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ReceiptIcon.displayName = 'ReceiptIcon';
