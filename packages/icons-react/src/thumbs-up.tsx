import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik03IDIyVjExTTIgMTNWMjBDMiAyMS4xMDQ2IDIuODk1NDMgMjIgNCAyMkgxNy40MjYyQzE4LjkwNyAyMiAyMC4xNjYyIDIwLjkxOTcgMjAuMzkxNCAxOS40NTYyTDIxLjQ2ODMgMTIuNDU2MkMyMS43NDc5IDEwLjYzODkgMjAuMzQxOCA5IDE4LjUwMzIgOUgxNUMxNC40NDc3IDkgMTQgOC41NTIyOCAxNCA4VjQuNDY1ODRDMTQgMy4xMDM5OSAxMi44OTYgMiAxMS41MzQyIDJDMTEuMjA5MyAyIDEwLjkxNSAyLjE5MTMgMTAuNzgzMSAyLjQ4ODEyTDcuMjYzOTQgMTAuNDA2MUM3LjEwMzQ0IDEwLjc2NzMgNi43NDUzMiAxMSA2LjM1MDEzIDExSDRDMi44OTU0MyAxMSAyIDExLjg5NTQgMiAxM1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const ThumbsUpIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ThumbsUpIcon.displayName = 'ThumbsUpIcon';