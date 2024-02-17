import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMi4zNTc4IDcuMTc4OTVDMTIuMjI2NiA3LjExMzM2IDEyLjE2MSA3LjA4MDU2IDEyLjA5MjIgNy4wNjc2NkMxMi4wMzEzIDcuMDU2MjIgMTEuOTY4NyA3LjA1NjIyIDExLjkwNzggNy4wNjc2NkMxMS44MzkgNy4wODA1NiAxMS43NzM0IDcuMTEzMzYgMTEuNjQyMiA3LjE3ODk1TDIgMTIuMDAwMUwxMS42NDIyIDE2LjgyMTJDMTEuNzczNCAxNi44ODY4IDExLjgzOSAxNi45MTk2IDExLjkwNzggMTYuOTMyNUMxMS45Njg3IDE2Ljk0MzkgMTIuMDMxMyAxNi45NDM5IDEyLjA5MjIgMTYuOTMyNUMxMi4xNjEgMTYuOTE5NiAxMi4yMjY2IDE2Ljg4NjggMTIuMzU3OCAxNi44MjEyTDIyIDEyLjAwMDFMMTIuMzU3OCA3LjE3ODk1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const LayerSingleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M12.3578 7.17895C12.2266 7.11336 12.161 7.08056 12.0922 7.06766C12.0313 7.05622 11.9687 7.05622 11.9078 7.06766C11.839 7.08056 11.7734 7.11336 11.6422 7.17895L2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001L12.3578 7.17895Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

LayerSingleIcon.displayName = 'LayerSingleIcon';
