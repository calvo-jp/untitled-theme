import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNiAxMy4zNzQ0QzE5LjUzMTggMTQuMDY4OCAyMiAxNS42NTQ3IDIyIDE3LjVDMjIgMTkuOTg1MyAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxOS45ODUzIDIgMTcuNUMyIDE1LjY1NDcgNC40NjgxOSAxNC4wNjg4IDggMTMuMzc0NE0xMiAxN1Y5TTEyIDlDMTMuNjU2OSA5IDE1IDcuNjU2ODUgMTUgNkMxNSA0LjM0MzE1IDEzLjY1NjkgMyAxMiAzQzEwLjM0MzEgMyA5IDQuMzQzMTUgOSA2QzkgNy42NTY4NSAxMC4zNDMxIDkgMTIgOVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const MarkerPin06Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M16 13.3744C19.5318 14.0688 22 15.6547 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.6547 4.46819 14.0688 8 13.3744M12 17V9M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MarkerPin06Icon.displayName = 'MarkerPin06Icon';
