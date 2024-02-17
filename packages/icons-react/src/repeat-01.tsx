import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNyAyTDIxIDZNMjEgNkwxNyAxME0yMSA2SDcuOEM2LjExOTg0IDYgNS4yNzk3NiA2IDQuNjM4MDMgNi4zMjY5OEM0LjA3MzU0IDYuNjE0NiAzLjYxNDYgNy4wNzM1NCAzLjMyNjk4IDcuNjM4MDNDMyA4LjI3OTc2IDMgOS4xMTk4NCAzIDEwLjhWMTFNMyAxOEgxNi4yQzE3Ljg4MDIgMTggMTguNzIwMiAxOCAxOS4zNjIgMTcuNjczQzE5LjkyNjUgMTcuMzg1NCAyMC4zODU0IDE2LjkyNjUgMjAuNjczIDE2LjM2MkMyMSAxNS43MjAyIDIxIDE0Ljg4MDIgMjEgMTMuMlYxM00zIDE4TDcgMjJNMyAxOEw3IDE0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Repeat01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M17 2L21 6M21 6L17 10M21 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V11M3 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V13M3 18L7 22M3 18L7 14"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Repeat01Icon.displayName = 'Repeat01Icon';
