import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMSAxMkwxNCA1VjlIMy44QzMuNTE5OTcgOSAzLjM3OTk2IDkgMy4yNzMgOS4wNTQ1QzMuMTc4OTIgOS4xMDI0MyAzLjEwMjQzIDkuMTc4OTIgMy4wNTQ1IDkuMjczQzMgOS4zNzk5NiAzIDkuNTE5OTcgMyA5LjhWMTQuMkMzIDE0LjQ4IDMgMTQuNjIgMy4wNTQ1IDE0LjcyN0MzLjEwMjQzIDE0LjgyMTEgMy4xNzg5MiAxNC44OTc2IDMuMjczIDE0Ljk0NTVDMy4zNzk5NiAxNSAzLjUxOTk3IDE1IDMuOCAxNUgxNFYxOUwyMSAxMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const ArrowBlockRightIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ArrowBlockRightIcon.displayName = 'ArrowBlockRightIcon';