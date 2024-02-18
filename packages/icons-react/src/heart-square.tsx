import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0zIDcuOEMzIDYuMTE5ODQgMyA1LjI3OTc2IDMuMzI2OTggNC42MzgwM0MzLjYxNDYgNC4wNzM1NCA0LjA3MzU0IDMuNjE0NiA0LjYzODAzIDMuMzI2OThDNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjggM0gxNi4yQzE3Ljg4MDIgMyAxOC43MjAyIDMgMTkuMzYyIDMuMzI2OThDMTkuOTI2NSAzLjYxNDYgMjAuMzg1NCA0LjA3MzU0IDIwLjY3MyA0LjYzODAzQzIxIDUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjhWMTYuMkMyMSAxNy44ODAyIDIxIDE4LjcyMDIgMjAuNjczIDE5LjM2MkMyMC4zODU0IDE5LjkyNjUgMTkuOTI2NSAyMC4zODU0IDE5LjM2MiAyMC42NzNDMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjIgMjFINy44QzYuMTE5ODQgMjEgNS4yNzk3NiAyMSA0LjYzODAzIDIwLjY3M0M0LjA3MzU0IDIwLjM4NTQgMy42MTQ2IDE5LjkyNjUgMy4zMjY5OCAxOS4zNjJDMyAxOC43MjAyIDMgMTcuODgwMiAzIDE2LjJWNy44WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk5NjYgOS4wNjc5MUMxMC45OTY5IDcuODk5MiA5LjMyOTg3IDcuNTg0ODIgOC4wNzczNSA4LjY1NTAxQzYuODI0ODIgOS43MjUxOSA2LjY0ODQ4IDExLjUxNDUgNy42MzIxIDEyLjc4MDJDOC4yNjIxMSAxMy41OTA5IDkuODc1NTggMTUuMDk0MiAxMC45NTQyIDE2LjA3MDRDMTEuMzEyNyAxNi4zOTQ3IDExLjQ5MTkgMTYuNTU2OSAxMS43MDY2IDE2LjYyMkMxMS44OTExIDE2LjY3NzkgMTIuMTAyIDE2LjY3NzkgMTIuMjg2NiAxNi42MjJDMTIuNTAxMiAxNi41NTY5IDEyLjY4MDUgMTYuMzk0NyAxMy4wMzg5IDE2LjA3MDRDMTQuMTE3NiAxNS4wOTQyIDE1LjczMSAxMy41OTA5IDE2LjM2MTEgMTIuNzgwMkMxNy4zNDQ3IDExLjUxNDUgMTcuMTg5OSA5LjcxMzkzIDE1LjkxNTggOC42NTUwMUMxNC42NDE3IDcuNTk2MDggMTIuOTk2MyA3Ljg5OTIgMTEuOTk2NiA5LjA2NzkxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const HeartSquareIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.9966 9.06791C10.9969 7.8992 9.32987 7.58482 8.07735 8.65501C6.82482 9.72519 6.64848 11.5145 7.6321 12.7802C8.26211 13.5909 9.87558 15.0942 10.9542 16.0704C11.3127 16.3947 11.4919 16.5569 11.7066 16.622C11.8911 16.6779 12.102 16.6779 12.2866 16.622C12.5012 16.5569 12.6805 16.3947 13.0389 16.0704C14.1176 15.0942 15.731 13.5909 16.3611 12.7802C17.3447 11.5145 17.1899 9.71393 15.9158 8.65501C14.6417 7.59608 12.9963 7.8992 11.9966 9.06791Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

HeartSquareIcon.displayName = 'HeartSquareIcon';