import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNC41IDE4VjUuNTg4ODhDMTQuNSA0LjczMTY2IDE0LjUgNC4zMDMwNiAxNC42ODA1IDQuMDQ0OTJDMTQuODM4MiAzLjgxOTUyIDE1LjA4MTcgMy42NjkgMTUuMzUzOCAzLjYyODhDMTUuNjY1NSAzLjU4Mjc2IDE2LjA0ODggMy43NzQ0NCAxNi44MTU1IDQuMTU3OEwyMC41IDYuMDAwMDNNMTQuNSAxOEMxNC41IDE5LjY1NjkgMTMuMTU2OSAyMSAxMS41IDIxQzkuODQzMTUgMjEgOC41IDE5LjY1NjkgOC41IDE4QzguNSAxNi4zNDMyIDkuODQzMTUgMTUgMTEuNSAxNUMxMy4xNTY5IDE1IDE0LjUgMTYuMzQzMiAxNC41IDE4Wk02LjUgMTBWNC4wMDAwM00zLjUgNy4wMDAwM0g5LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const MusicNotePlusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M14.5 18V5.58888C14.5 4.73166 14.5 4.30306 14.6805 4.04492C14.8382 3.81952 15.0817 3.669 15.3538 3.6288C15.6655 3.58276 16.0488 3.77444 16.8155 4.1578L20.5 6.00003M14.5 18C14.5 19.6569 13.1569 21 11.5 21C9.84315 21 8.5 19.6569 8.5 18C8.5 16.3432 9.84315 15 11.5 15C13.1569 15 14.5 16.3432 14.5 18ZM6.5 10V4.00003M3.5 7.00003H9.5"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MusicNotePlusIcon.displayName = 'MusicNotePlusIcon';
