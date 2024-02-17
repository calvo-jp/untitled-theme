import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNi41IDE0SDE2LjUxTTMgNVYxOUMzIDIwLjEwNDYgMy44OTU0MyAyMSA1IDIxSDE5QzIwLjEwNDYgMjEgMjEgMjAuMTA0NiAyMSAxOVY5QzIxIDcuODk1NDMgMjAuMTA0NiA3IDE5IDdMNSA3QzMuODk1NDMgNyAzIDYuMTA0NTcgMyA1Wk0zIDVDMyAzLjg5NTQzIDMuODk1NDMgMyA1IDNIMTdNMTcgMTRDMTcgMTQuMjc2MSAxNi43NzYxIDE0LjUgMTYuNSAxNC41QzE2LjIyMzkgMTQuNSAxNiAxNC4yNzYxIDE2IDE0QzE2IDEzLjcyMzkgMTYuMjIzOSAxMy41IDE2LjUgMTMuNUMxNi43NzYxIDEzLjUgMTcgMTMuNzIzOSAxNyAxNFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Wallet03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M16.5 14H16.51M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7L5 7C3.89543 7 3 6.10457 3 5ZM3 5C3 3.89543 3.89543 3 5 3H17M17 14C17 14.2761 16.7761 14.5 16.5 14.5C16.2239 14.5 16 14.2761 16 14C16 13.7239 16.2239 13.5 16.5 13.5C16.7761 13.5 17 13.7239 17 14Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Wallet03Icon.displayName = 'Wallet03Icon';
