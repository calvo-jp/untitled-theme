import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDZIMTQuOEMxNS45MjAxIDYgMTYuNDgwMiA2IDE2LjkwOCA2LjIxNzk5QzE3LjI4NDMgNi40MDk3MyAxNy41OTAzIDYuNzE1NjkgMTcuNzgyIDcuMDkyMDJDMTggNy41MTk4NCAxOCA4LjA3OTg5IDE4IDkuMlYyMk0yMiAxOEw5LjIgMThDOC4wNzk4OSAxOCA3LjUxOTg0IDE4IDcuMDkyMDIgMTcuNzgyQzYuNzE1NjkgMTcuNTkwMyA2LjQwOTczIDE3LjI4NDMgNi4yMTc5OSAxNi45MDhDNiAxNi40ODAyIDYgMTUuOTIwMSA2IDE0LjhWMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const Crop01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V22M22 18L9.2 18C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V2"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Crop01Icon.displayName = 'Crop01Icon';
