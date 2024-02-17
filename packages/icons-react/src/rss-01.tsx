import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik00IDExQzYuMzg2OTUgMTEgOC42NzYxMyAxMS45NDgyIDEwLjM2NCAxMy42MzZDMTIuMDUxOCAxNS4zMjM5IDEzIDE3LjYxMzEgMTMgMjBNNCA0QzguMjQzNDYgNCAxMi4zMTMxIDUuNjg1NzEgMTUuMzEzNyA4LjY4NjI5QzE4LjMxNDMgMTEuNjg2OSAyMCAxNS43NTY1IDIwIDIwTTYgMTlDNiAxOS41NTIzIDUuNTUyMjggMjAgNSAyMEM0LjQ0NzcyIDIwIDQgMTkuNTUyMyA0IDE5QzQgMTguNDQ3NyA0LjQ0NzcyIDE4IDUgMThDNS41NTIyOCAxOCA2IDE4LjQ0NzcgNiAxOVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Rss01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20M6 19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Rss01Icon.displayName = 'Rss01Icon';
