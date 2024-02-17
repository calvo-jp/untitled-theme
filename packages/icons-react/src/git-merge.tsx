import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNSAxOEMxNSAxOS42NTY5IDE2LjM0MzEgMjEgMTggMjFDMTkuNjU2OSAyMSAyMSAxOS42NTY5IDIxIDE4QzIxIDE2LjM0MzEgMTkuNjU2OSAxNSAxOCAxNUMxNi4zNDMxIDE1IDE1IDE2LjM0MzEgMTUgMThaTTE1IDE4QzEyLjYxMzEgMTggMTAuMzIzOSAxNy4wNTE4IDguNjM2MDQgMTUuMzY0QzYuOTQ4MjEgMTMuNjc2MSA2IDExLjM4NjkgNiA5TTYgOUM3LjY1Njg1IDkgOSA3LjY1Njg1IDkgNkM5IDQuMzQzMTUgNy42NTY4NSAzIDYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNkMzIDcuNjU2ODUgNC4zNDMxNSA5IDYgOVpNNiA5VjIxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const GitMergeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM15 18C12.6131 18 10.3239 17.0518 8.63604 15.364C6.94821 13.6761 6 11.3869 6 9M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 9V21"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

GitMergeIcon.displayName = 'GitMergeIcon';
