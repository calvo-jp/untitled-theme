import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMSAxMlYxNi4yQzIxIDE3Ljg4MDIgMjEgMTguNzIwMiAyMC42NzMgMTkuMzYyQzIwLjM4NTQgMTkuOTI2NSAxOS45MjY1IDIwLjM4NTQgMTkuMzYyIDIwLjY3M0MxOC43MjAyIDIxIDE3Ljg4MDIgMjEgMTYuMiAyMUg3LjhDNi4xMTk4NCAyMSA1LjI3OTc2IDIxIDQuNjM4MDMgMjAuNjczQzQuMDczNTQgMjAuMzg1NCAzLjYxNDYgMTkuOTI2NSAzLjMyNjk4IDE5LjM2MkMzIDE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMlYxMk0xNiA3TDEyIDNNMTIgM0w4IDdNMTIgM1YxNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const Share01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Share01Icon.displayName = 'Share01Icon';