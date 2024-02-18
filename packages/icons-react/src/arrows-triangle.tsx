import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMyAxOUgxNy4yOTQyQzE5LjE1OTQgMTkgMjAuMDkyIDE5IDIwLjYyMTUgMTguNjA5MkMyMS4wODMyIDE4LjI2ODUgMjEuMzc2MyAxNy43NDU5IDIxLjQyNjMgMTcuMTc0M0MyMS40ODM2IDE2LjUxODcgMjAuOTk3MyAxNS43MjI5IDIwLjAyNDcgMTQuMTMxM0wxOS4wMjc4IDEyLjVNNi4xMzAxNCAxMC42MDUyTDMuOTc1MjggMTQuMTMxNEMzLjAwMjY3IDE1LjcyMjkgMi41MTYzNyAxNi41MTg3IDIuNTczNzIgMTcuMTc0M0MyLjYyMzcyIDE3Ljc0NTkgMi45MTY4MSAxOC4yNjg1IDMuMzc4NDYgMTguNjA5MkMzLjkwNzk5IDE5IDQuODQwNTkgMTkgNi43MDU3OCAxOUg4LjVNMTYuODg4OSA4Ljk5OTk5TDE0LjczMDUgNS40NjgwOEMxMy44Mjc3IDMuOTkwNzkgMTMuMzc2MyAzLjI1MjE0IDEyLjc5NTIgMy4wMDAzM0MxMi4yODc5IDIuNzgwNDkgMTEuNzEyMSAyLjc4MDQ5IDExLjIwNDggMy4wMDAzM0MxMC42MjM3IDMuMjUyMTQgMTAuMTcyMyAzLjk5MDc5IDkuMjY5NSA1LjQ2ODA5TDguMjQ5NjcgNy4xMzY4OU0xOCA1LjAwMDA2TDE2LjkwMTkgOS4wOTgxM0wxMi44MDM4IDguMDAwMDZNMiAxMS41OTgxTDYuMDk4MDggMTAuNUw3LjE5NjE1IDE0LjU5ODFNMTUuNSAyMkwxMi41IDE5TDE1LjUgMTYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const ArrowsTriangleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M13 19H17.2942C19.1594 19 20.092 19 20.6215 18.6092C21.0832 18.2685 21.3763 17.7459 21.4263 17.1743C21.4836 16.5187 20.9973 15.7229 20.0247 14.1313L19.0278 12.5M6.13014 10.6052L3.97528 14.1314C3.00267 15.7229 2.51637 16.5187 2.57372 17.1743C2.62372 17.7459 2.91681 18.2685 3.37846 18.6092C3.90799 19 4.84059 19 6.70578 19H8.5M16.8889 8.99999L14.7305 5.46808C13.8277 3.99079 13.3763 3.25214 12.7952 3.00033C12.2879 2.78049 11.7121 2.78049 11.2048 3.00033C10.6237 3.25214 10.1723 3.99079 9.2695 5.46809L8.24967 7.13689M18 5.00006L16.9019 9.09813L12.8038 8.00006M2 11.5981L6.09808 10.5L7.19615 14.5981M15.5 22L12.5 19L15.5 16"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ArrowsTriangleIcon.displayName = 'ArrowsTriangleIcon';