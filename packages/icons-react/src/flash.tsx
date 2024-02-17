import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMyAyTDQuMDkzNDQgMTIuNjg3OUMzLjc0NDYzIDEzLjEwNjQgMy41NzAyMyAxMy4zMTU3IDMuNTY3NTYgMTMuNDkyNUMzLjU2NTI0IDEzLjY0NjEgMy42MzM3MiAxMy43OTIzIDMuNzUzMjQgMTMuODg4OUMzLjg5MDczIDE0IDQuMTYzMTYgMTQgNC43MDgwMiAxNEgxMkwxMSAyMkwxOS45MDY1IDExLjMxMjFDMjAuMjU1MyAxMC44OTM2IDIwLjQyOTcgMTAuNjg0MyAyMC40MzI0IDEwLjUwNzVDMjAuNDM0NyAxMC4zNTM5IDIwLjM2NjMgMTAuMjA3NyAyMC4yNDY3IDEwLjExMTFDMjAuMTA5MiAxMCAxOS44MzY4IDEwIDE5LjI5MiAxMEgxMkwxMyAyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const FlashIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

FlashIcon.displayName = 'FlashIcon';
