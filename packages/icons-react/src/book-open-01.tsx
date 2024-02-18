import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyMUwxMS44OTk5IDIwLjg0OTlDMTEuMjA1MyAxOS44MDggMTAuODU4IDE5LjI4NyAxMC4zOTkxIDE4LjkwOThDOS45OTI4NiAxOC41NzU5IDkuNTI0NzYgMTguMzI1NCA5LjAyMTYxIDE4LjE3MjZDOC40NTMyNSAxOCA3LjgyNzExIDE4IDYuNTc0ODIgMThINS4yQzQuMDc5ODkgMTggMy41MTk4NCAxOCAzLjA5MjAyIDE3Ljc4MkMyLjcxNTY5IDE3LjU5MDMgMi40MDk3MyAxNy4yODQzIDIuMjE3OTkgMTYuOTA4QzIgMTYuNDgwMiAyIDE1LjkyMDEgMiAxNC44VjYuMkMyIDUuMDc5ODkgMiA0LjUxOTg0IDIuMjE3OTkgNC4wOTIwMkMyLjQwOTczIDMuNzE1NjkgMi43MTU2OSAzLjQwOTczIDMuMDkyMDIgMy4yMTc5OUMzLjUxOTg0IDMgNC4wNzk4OSAzIDUuMiAzSDUuNkM3Ljg0MDIxIDMgOC45NjAzMSAzIDkuODE1OTYgMy40MzU5N0MxMC41Njg2IDMuODE5NDcgMTEuMTgwNSA0LjQzMTM5IDExLjU2NCA1LjE4NDA0QzEyIDYuMDM5NjggMTIgNy4xNTk3OSAxMiA5LjRNMTIgMjFWOS40TTEyIDIxTDEyLjEwMDEgMjAuODQ5OUMxMi43OTQ3IDE5LjgwOCAxMy4xNDIgMTkuMjg3IDEzLjYwMDkgMTguOTA5OEMxNC4wMDcxIDE4LjU3NTkgMTQuNDc1MiAxOC4zMjU0IDE0Ljk3ODQgMTguMTcyNkMxNS41NDY3IDE4IDE2LjE3MjkgMTggMTcuNDI1MiAxOEgxOC44QzE5LjkyMDEgMTggMjAuNDgwMiAxOCAyMC45MDggMTcuNzgyQzIxLjI4NDMgMTcuNTkwMyAyMS41OTAzIDE3LjI4NDMgMjEuNzgyIDE2LjkwOEMyMiAxNi40ODAyIDIyIDE1LjkyMDEgMjIgMTQuOFY2LjJDMjIgNS4wNzk4OSAyMiA0LjUxOTg0IDIxLjc4MiA0LjA5MjAyQzIxLjU5MDMgMy43MTU2OSAyMS4yODQzIDMuNDA5NzMgMjAuOTA4IDMuMjE3OTlDMjAuNDgwMiAzIDE5LjkyMDEgMyAxOC44IDNIMTguNEMxNi4xNTk4IDMgMTUuMDM5NyAzIDE0LjE4NCAzLjQzNTk3QzEzLjQzMTQgMy44MTk0NyAxMi44MTk1IDQuNDMxMzkgMTIuNDM2IDUuMTg0MDRDMTIgNi4wMzk2OCAxMiA3LjE1OTc5IDEyIDkuNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const BookOpen01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

BookOpen01Icon.displayName = 'BookOpen01Icon';