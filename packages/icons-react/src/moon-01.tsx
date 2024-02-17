import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMiAxNS44NDQyQzIwLjY4NjYgMTYuNDM4MiAxOS4yMjg2IDE2Ljc2ODggMTcuNjkzNSAxNi43Njg4QzExLjkxNTMgMTYuNzY4OCA3LjIzMTE2IDEyLjA4NDcgNy4yMzExNiA2LjMwNjU0QzcuMjMxMTYgNC43NzEzNSA3LjU2MTggMy4zMTM0IDguMTU1NzcgMkM0LjUyNTc2IDMuNjQxNjMgMiA3LjI5NDcgMiAxMS41Mzc3QzIgMTcuMzE1OSA2LjY4NDE0IDIyIDEyLjQ2MjMgMjJDMTYuNzA1MyAyMiAyMC4zNTg0IDE5LjQ3NDIgMjIgMTUuODQ0MloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Moon01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Moon01Icon.displayName = 'Moon01Icon';
