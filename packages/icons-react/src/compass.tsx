import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiA0QzEwLjYxOTMgNCA5LjUgNS4xMTkyOSA5LjUgNi41QzkuNSA3Ljg4MDcxIDEwLjYxOTMgOSAxMiA5QzEzLjM4MDcgOSAxNC41IDcuODgwNzEgMTQuNSA2LjVDMTQuNSA1LjExOTI5IDEzLjM4MDcgNCAxMiA0Wk0xMiA0VjJNMjEgMTQuOTM3NUMxOC44MDEyIDE3LjQyODcgMTUuNTg0MSAxOSAxMiAxOUM4LjQxNTkyIDE5IDUuMTk4ODMgMTcuNDI4NyAzIDE0LjkzNzVNMTAuNzQ0OCA4LjY2MTY5TDMgMjJNMTMuMjU1MiA4LjY2MTY5TDIxIDIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const CompassIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4ZM12 4V2M21 14.9375C18.8012 17.4287 15.5841 19 12 19C8.41592 19 5.19883 17.4287 3 14.9375M10.7448 8.66169L3 22M13.2552 8.66169L21 22"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CompassIcon.displayName = 'CompassIcon';
