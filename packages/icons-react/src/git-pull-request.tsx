import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOCAxNUMxNi4zNDMxIDE1IDE1IDE2LjM0MzEgMTUgMThDMTUgMTkuNjU2OSAxNi4zNDMxIDIxIDE4IDIxQzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOEMyMSAxNi4zNDMxIDE5LjY1NjkgMTUgMTggMTVaTTE4IDE1VjhDMTggNy40Njk1NyAxNy43ODkzIDYuOTYwODYgMTcuNDE0MiA2LjU4NTc5QzE3LjAzOTEgNi4yMTA3MSAxNi41MzA0IDYgMTYgNkgxM002IDlDNy42NTY4NSA5IDkgNy42NTY4NSA5IDZDOSA0LjM0MzE1IDcuNjU2ODUgMyA2IDNDNC4zNDMxNSAzIDMgNC4zNDMxNSAzIDZDMyA3LjY1Njg1IDQuMzQzMTUgOSA2IDlaTTYgOVYyMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const GitPullRequestIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15ZM18 15V8C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6H13M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 9V21"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

GitPullRequestIcon.displayName = 'GitPullRequestIcon';
