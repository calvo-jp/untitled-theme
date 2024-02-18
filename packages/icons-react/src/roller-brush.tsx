import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOSA0LjVDMTkgNC45NjQ2NiAxOSA1LjE5Njk4IDE4Ljk2MTYgNS4zOTAxOEMxOC44MDM4IDYuMTgzNTYgMTguMTgzNiA2LjgwMzc2IDE3LjM5MDIgNi45NjE1N0MxNy4xOTcgNyAxNi45NjQ3IDcgMTYuNSA3SDUuNUM1LjAzNTM0IDcgNC44MDMwMiA3IDQuNjA5ODIgNi45NjE1N0MzLjgxNjQ0IDYuODAzNzYgMy4xOTYyNCA2LjE4MzU2IDMuMDM4NDMgNS4zOTAxOEMzIDUuMTk2OTggMyA0Ljk2NDY2IDMgNC41QzMgNC4wMzUzNCAzIDMuODAzMDIgMy4wMzg0MyAzLjYwOTgyQzMuMTk2MjQgMi44MTY0NCAzLjgxNjQ0IDIuMTk2MjQgNC42MDk4MiAyLjAzODQzQzQuODAzMDIgMiA1LjAzNTM0IDIgNS41IDJIMTYuNUMxNi45NjQ3IDIgMTcuMTk3IDIgMTcuMzkwMiAyLjAzODQzQzE4LjE4MzYgMi4xOTYyNCAxOC44MDM4IDIuODE2NDQgMTguOTYxNiAzLjYwOTgyQzE5IDMuODAzMDIgMTkgNC4wMzUzNCAxOSA0LjVaTTE5IDQuNUMxOS45MzE5IDQuNSAyMC4zOTc4IDQuNSAyMC43NjU0IDQuNjUyMjRDMjEuMjU1NCA0Ljg1NTIzIDIxLjY0NDggNS4yNDQ1OCAyMS44NDc4IDUuNzM0NjNDMjIgNi4xMDIxOCAyMiA2LjU2ODEyIDIyIDcuNVY3LjhDMjIgOC45MjAxIDIyIDkuNDgwMTYgMjEuNzgyIDkuOTA3OThDMjEuNTkwMyAxMC4yODQzIDIxLjI4NDMgMTAuNTkwMyAyMC45MDggMTAuNzgyQzIwLjQ4MDIgMTEgMTkuOTIwMSAxMSAxOC44IDExSDE1LjJDMTQuMDc5OSAxMSAxMy41MTk4IDExIDEzLjA5MiAxMS4yMThDMTIuNzE1NyAxMS40MDk3IDEyLjQwOTcgMTEuNzE1NyAxMi4yMTggMTIuMDkyQzEyIDEyLjUxOTggMTIgMTMuMDc5OSAxMiAxNC4yVjE1TTExLjYgMjJIMTIuNEMxMi45NjAxIDIyIDEzLjI0MDEgMjIgMTMuNDU0IDIxLjg5MUMxMy42NDIyIDIxLjc5NTEgMTMuNzk1MSAyMS42NDIyIDEzLjg5MSAyMS40NTRDMTQgMjEuMjQwMSAxNCAyMC45NjAxIDE0IDIwLjRWMTYuNkMxNCAxNi4wMzk5IDE0IDE1Ljc1OTkgMTMuODkxIDE1LjU0NkMxMy43OTUxIDE1LjM1NzggMTMuNjQyMiAxNS4yMDQ5IDEzLjQ1NCAxNS4xMDlDMTMuMjQwMSAxNSAxMi45NjAxIDE1IDEyLjQgMTVIMTEuNkMxMS4wMzk5IDE1IDEwLjc1OTkgMTUgMTAuNTQ2IDE1LjEwOUMxMC4zNTc4IDE1LjIwNDkgMTAuMjA0OSAxNS4zNTc4IDEwLjEwOSAxNS41NDZDMTAgMTUuNzU5OSAxMCAxNi4wMzk5IDEwIDE2LjZWMjAuNEMxMCAyMC45NjAxIDEwIDIxLjI0MDEgMTAuMTA5IDIxLjQ1NEMxMC4yMDQ5IDIxLjY0MjIgMTAuMzU3OCAyMS43OTUxIDEwLjU0NiAyMS44OTFDMTAuNzU5OSAyMiAxMS4wMzk5IDIyIDExLjYgMjJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const RollerBrushIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M19 4.5C19 4.96466 19 5.19698 18.9616 5.39018C18.8038 6.18356 18.1836 6.80376 17.3902 6.96157C17.197 7 16.9647 7 16.5 7H5.5C5.03534 7 4.80302 7 4.60982 6.96157C3.81644 6.80376 3.19624 6.18356 3.03843 5.39018C3 5.19698 3 4.96466 3 4.5C3 4.03534 3 3.80302 3.03843 3.60982C3.19624 2.81644 3.81644 2.19624 4.60982 2.03843C4.80302 2 5.03534 2 5.5 2H16.5C16.9647 2 17.197 2 17.3902 2.03843C18.1836 2.19624 18.8038 2.81644 18.9616 3.60982C19 3.80302 19 4.03534 19 4.5ZM19 4.5C19.9319 4.5 20.3978 4.5 20.7654 4.65224C21.2554 4.85523 21.6448 5.24458 21.8478 5.73463C22 6.10218 22 6.56812 22 7.5V7.8C22 8.9201 22 9.48016 21.782 9.90798C21.5903 10.2843 21.2843 10.5903 20.908 10.782C20.4802 11 19.9201 11 18.8 11H15.2C14.0799 11 13.5198 11 13.092 11.218C12.7157 11.4097 12.4097 11.7157 12.218 12.092C12 12.5198 12 13.0799 12 14.2V15M11.6 22H12.4C12.9601 22 13.2401 22 13.454 21.891C13.6422 21.7951 13.7951 21.6422 13.891 21.454C14 21.2401 14 20.9601 14 20.4V16.6C14 16.0399 14 15.7599 13.891 15.546C13.7951 15.3578 13.6422 15.2049 13.454 15.109C13.2401 15 12.9601 15 12.4 15H11.6C11.0399 15 10.7599 15 10.546 15.109C10.3578 15.2049 10.2049 15.3578 10.109 15.546C10 15.7599 10 16.0399 10 16.6V20.4C10 20.9601 10 21.2401 10.109 21.454C10.2049 21.6422 10.3578 21.7951 10.546 21.891C10.7599 22 11.0399 22 11.6 22Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

RollerBrushIcon.displayName = 'RollerBrushIcon';