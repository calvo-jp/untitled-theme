import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMCA0TDguNSAxNS41TTguNSA4LjVMMjAgMjBNNiAzQzcuNjU2ODUgMyA5IDQuMzQzMTUgOSA2QzkgNy42NTY4NSA3LjY1Njg1IDkgNiA5QzQuMzQzMTUgOSAzIDcuNjU2ODUgMyA2QzMgNC4zNDMxNSA0LjM0MzE1IDMgNiAzWk02IDE1QzcuNjU2ODUgMTUgOSAxNi4zNDMxIDkgMThDOSAxOS42NTY5IDcuNjU2ODUgMjEgNiAyMUM0LjM0MzE1IDIxIDMgMTkuNjU2OSAzIDE4QzMgMTYuMzQzMSA0LjM0MzE1IDE1IDYgMTVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Scissors01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M20 4L8.5 15.5M8.5 8.5L20 20M6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3ZM6 15C7.65685 15 9 16.3431 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Scissors01Icon.displayName = 'Scissors01Icon';