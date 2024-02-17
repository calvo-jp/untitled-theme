import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNC41IDQuNUMxNC41IDMuMTE5MjkgMTMuMzgwNyAyIDEyIDJDMTAuNjE5MyAyIDkuNSAzLjExOTI5IDkuNSA0LjVWMTMuNzU3OEM4LjI5NDAxIDE0LjU2NSA3LjUgMTUuOTM5OCA3LjUgMTcuNUM3LjUgMTkuOTg1MyA5LjUxNDcyIDIyIDEyIDIyQzE0LjQ4NTMgMjIgMTYuNSAxOS45ODUzIDE2LjUgMTcuNUMxNi41IDE1LjkzOTggMTUuNzA2IDE0LjU2NSAxNC41IDEzLjc1NzhWNC41WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTIgMTguNUMxMi41NTIzIDE4LjUgMTMgMTguMDUyMyAxMyAxNy41QzEzIDE2Ljk0NzcgMTIuNTUyMyAxNi41IDEyIDE2LjVDMTEuNDQ3NyAxNi41IDExIDE2Ljk0NzcgMTEgMTcuNUMxMSAxOC4wNTIzIDExLjQ0NzcgMTguNSAxMiAxOC41WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const Thermometer02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5V13.7578C8.29401 14.565 7.5 15.9398 7.5 17.5C7.5 19.9853 9.51472 22 12 22C14.4853 22 16.5 19.9853 16.5 17.5C16.5 15.9398 15.706 14.565 14.5 13.7578V4.5Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Thermometer02Icon.displayName = 'Thermometer02Icon';
