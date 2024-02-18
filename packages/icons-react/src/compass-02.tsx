import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMiAxMkgyME0yMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJNMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMk0xOS4wNzExIDE5LjA3MTFMMTcuNjU2OSAxNy42NTY5TTQgMTJIMk0yIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyTTIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyTTYuMzQzMTUgNi4zNDMxNUw0LjkyODkzIDQuOTI4OTNNMTIgNFYyTTE3LjY1NjkgNi4zNDMxNUwxOS4wNzExIDQuOTI4OTNNMTIgMjJWMjBNNC45Mjg5MyAxOS4wNzExTDYuMzQzMTUgMTcuNjU2OU0xMiA4TDE2IDEyTDEyIDE2TDggMTJMMTIgOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Compass02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M22 12H20M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M19.0711 19.0711L17.6569 17.6569M4 12H2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M6.34315 6.34315L4.92893 4.92893M12 4V2M17.6569 6.34315L19.0711 4.92893M12 22V20M4.92893 19.0711L6.34315 17.6569M12 8L16 12L12 16L8 12L12 8Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Compass02Icon.displayName = 'Compass02Icon';