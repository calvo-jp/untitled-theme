import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05IDEwLjVMMTEgMTIuNUwxNS41IDhNMjAgMjFWNy44QzIwIDYuMTE5ODQgMjAgNS4yNzk3NiAxOS42NzMgNC42MzgwM0MxOS4zODU0IDQuMDczNTQgMTguOTI2NSAzLjYxNDYgMTguMzYyIDMuMzI2OThDMTcuNzIwMiAzIDE2Ljg4MDIgMyAxNS4yIDNIOC44QzcuMTE5ODQgMyA2LjI3OTc2IDMgNS42MzgwMyAzLjMyNjk4QzUuMDczNTQgMy42MTQ2IDQuNjE0NiA0LjA3MzU0IDQuMzI2OTggNC42MzgwM0M0IDUuMjc5NzYgNCA2LjExOTg0IDQgNy44VjIxTDYuNzUgMTlMOS4yNSAyMUwxMiAxOUwxNC43NSAyMUwxNy4yNSAxOUwyMCAyMVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const ReceiptCheckIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ReceiptCheckIcon.displayName = 'ReceiptCheckIcon';
