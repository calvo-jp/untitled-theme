import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyQzE1IDQgMTUuOTIyOCA4LjI5MjAzIDE2IDEyQzE1LjkyMjggMTUuNzA4IDE1IDIwIDEyIDIyTTEyIDJDOSA0IDguMDc3MjUgOC4yOTIwMyA4IDEyQzguMDc3MjUgMTUuNzA4IDkgMjAgMTIgMjJNMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJNMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMk0xMiAyMkMxNy41MjI5IDIyIDIyIDE3LjUyMjggMjIgMTJNMTIgMjJDNi40NzcxNiAyMiAyIDE3LjUyMjggMiAxMk0yMiAxMkMyMCAxNSAxNS43MDggMTUuOTIyOCAxMiAxNkM4LjI5MjAzIDE1LjkyMjggNCAxNSAyIDEyTTIyIDEyQzIwIDkgMTUuNzA4IDguMDc3MjUgMTIgOEM4LjI5MjAzIDguMDc3MjUgNCA5IDIgMTIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Globe03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 2C15 4 15.9228 8.29203 16 12C15.9228 15.708 15 20 12 22M12 2C9 4 8.07725 8.29203 8 12C8.07725 15.708 9 20 12 22M12 2C6.47715 2 2 6.47715 2 12M12 2C17.5228 2 22 6.47715 22 12M12 22C17.5229 22 22 17.5228 22 12M12 22C6.47716 22 2 17.5228 2 12M22 12C20 15 15.708 15.9228 12 16C8.29203 15.9228 4 15 2 12M22 12C20 9 15.708 8.07725 12 8C8.29203 8.07725 4 9 2 12"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Globe03Icon.displayName = 'Globe03Icon';
