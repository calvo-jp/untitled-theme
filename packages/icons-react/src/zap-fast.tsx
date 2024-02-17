import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05IDE3LjVIMy41TTYuNSAxMkgyTTkgNi41SDRNMTcgM0wxMC40MDM2IDEyLjIzNUMxMC4xMTE2IDEyLjY0MzggOS45NjU2MiAxMi44NDgxIDkuOTcxOTQgMTMuMDE4NUM5Ljk3NzQ0IDEzLjE2NjkgMTAuMDQ4NiAxMy4zMDUxIDEwLjE2NjEgMTMuMzk1OEMxMC4zMDExIDEzLjUgMTAuNTUyMiAxMy41IDExLjA1NDYgMTMuNUgxNkwxNSAyMUwyMS41OTY0IDExLjc2NUMyMS44ODg0IDExLjM1NjIgMjIuMDM0NCAxMS4xNTE5IDIyLjAyODEgMTAuOTgxNUMyMi4wMjI2IDEwLjgzMzEgMjEuOTUxNCAxMC42OTQ5IDIxLjgzMzkgMTAuNjA0MkMyMS42OTg5IDEwLjUgMjEuNDQ3OCAxMC41IDIwLjk0NTQgMTAuNUgxNkwxNyAzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const ZapFastIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M9 17.5H3.5M6.5 12H2M9 6.5H4M17 3L10.4036 12.235C10.1116 12.6438 9.96562 12.8481 9.97194 13.0185C9.97744 13.1669 10.0486 13.3051 10.1661 13.3958C10.3011 13.5 10.5522 13.5 11.0546 13.5H16L15 21L21.5964 11.765C21.8884 11.3562 22.0344 11.1519 22.0281 10.9815C22.0226 10.8331 21.9514 10.6949 21.8339 10.6042C21.6989 10.5 21.4478 10.5 20.9454 10.5H16L17 3Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ZapFastIcon.displayName = 'ZapFastIcon';
