import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAxOFY1LjU4ODg4QzEyIDQuNzMxNjYgMTIgNC4zMDMwNiAxMi4xODA1IDQuMDQ0OTJDMTIuMzM4MiAzLjgxOTUyIDEyLjU4MTcgMy42NjkgMTIuODUzOCAzLjYyODhDMTMuMTY1NSAzLjU4Mjc2IDEzLjU0ODggMy43NzQ0NCAxNC4zMTU1IDQuMTU3OEwxOCA2LjAwMDAzTTEyIDE4QzEyIDE5LjY1NjkgMTAuNjU2OSAyMSA5IDIxQzcuMzQzMTUgMjEgNiAxOS42NTY5IDYgMThDNiAxNi4zNDMyIDcuMzQzMTUgMTUgOSAxNUMxMC42NTY5IDE1IDEyIDE2LjM0MzIgMTIgMThaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const MusicNote02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 18V5.58888C12 4.73166 12 4.30306 12.1805 4.04492C12.3382 3.81952 12.5817 3.669 12.8538 3.6288C13.1655 3.58276 13.5488 3.77444 14.3155 4.1578L18 6.00003M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3432 7.34315 15 9 15C10.6569 15 12 16.3432 12 18Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MusicNote02Icon.displayName = 'MusicNote02Icon';
