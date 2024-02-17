import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik00IDdDNCA2LjA2ODEyIDQgNS42MDIxOCA0LjE1MjI0IDUuMjM0NjNDNC4zNTUyMyA0Ljc0NDU4IDQuNzQ0NTggNC4zNTUyMyA1LjIzNDYzIDQuMTUyMjRDNS42MDIxOCA0IDYuMDY4MTIgNCA3IDRIMTdDMTcuOTMxOSA0IDE4LjM5NzggNCAxOC43NjU0IDQuMTUyMjRDMTkuMjU1NCA0LjM1NTIzIDE5LjY0NDggNC43NDQ1OCAxOS44NDc4IDUuMjM0NjNDMjAgNS42MDIxOCAyMCA2LjA2ODEyIDIwIDdNOCAyMEgxNk0xMC4yNSA0VjIwTTEzLjc1IDRWMjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Type02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M8 20H16M10.25 4V20M13.75 4V20"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Type02Icon.displayName = 'Type02Icon';
