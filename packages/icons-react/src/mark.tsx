import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMCAxMkMyMCAxNi40MTgzIDE2LjQxODMgMjAgMTIgMjBNMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNE0yMCAxMkgyMk0xMiAyMEM3LjU4MTcyIDIwIDQgMTYuNDE4MyA0IDEyTTEyIDIwVjIyTTQgMTJDNCA3LjU4MTcyIDcuNTgxNzIgNCAxMiA0TTQgMTJIMk0xMiA0VjJNMTUgMTJDMTUgMTMuNjU2OSAxMy42NTY5IDE1IDEyIDE1QzEwLjM0MzEgMTUgOSAxMy42NTY5IDkgMTJDOSAxMC4zNDMxIDEwLjM0MzEgOSAxMiA5QzEzLjY1NjkgOSAxNSAxMC4zNDMxIDE1IDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const MarkIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H22M12 20C7.58172 20 4 16.4183 4 12M12 20V22M4 12C4 7.58172 7.58172 4 12 4M4 12H2M12 4V2M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MarkIcon.displayName = 'MarkIcon';
