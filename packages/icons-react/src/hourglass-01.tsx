import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAxMkw3LjcyNzExIDguNDM5MjZDNy4wOTIyNiA3LjkxMDIyIDYuNzc0ODQgNy42NDU3IDYuNTQ2NjQgNy4zMjE0NEM2LjM0NDQ0IDcuMDM0MTMgNi4xOTQyOSA2LjcxMzU0IDYuMTAzMDEgNi4zNzQyOEM2IDUuOTkxMzkgNiA1LjU3ODE5IDYgNC43NTE4VjJNMTIgMTJMMTYuMjcyOSA4LjQzOTI2QzE2LjkwNzcgNy45MTAyMiAxNy4yMjUyIDcuNjQ1NyAxNy40NTM0IDcuMzIxNDRDMTcuNjU1NiA3LjAzNDEzIDE3LjgwNTcgNi43MTM1NCAxNy44OTcgNi4zNzQyOEMxOCA1Ljk5MTM5IDE4IDUuNTc4MTkgMTggNC43NTE4VjJNMTIgMTJMNy43MjcxMSAxNS41NjA3QzcuMDkyMjYgMTYuMDg5OCA2Ljc3NDg0IDE2LjM1NDMgNi41NDY2NCAxNi42Nzg2QzYuMzQ0NDQgMTYuOTY1OSA2LjE5NDI5IDE3LjI4NjUgNi4xMDMwMSAxNy42MjU3QzYgMTguMDA4NiA2IDE4LjQyMTggNiAxOS4yNDgyVjIyTTEyIDEyTDE2LjI3MjkgMTUuNTYwN0MxNi45MDc3IDE2LjA4OTggMTcuMjI1MiAxNi4zNTQzIDE3LjQ1MzQgMTYuNjc4NkMxNy42NTU2IDE2Ljk2NTkgMTcuODA1NyAxNy4yODY1IDE3Ljg5NyAxNy42MjU3QzE4IDE4LjAwODYgMTggMTguNDIxOCAxOCAxOS4yNDgyVjIyTTQgMkgyME00IDIySDIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Hourglass01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 12L7.72711 8.43926C7.09226 7.91022 6.77484 7.6457 6.54664 7.32144C6.34444 7.03413 6.19429 6.71354 6.10301 6.37428C6 5.99139 6 5.57819 6 4.7518V2M12 12L16.2729 8.43926C16.9077 7.91022 17.2252 7.6457 17.4534 7.32144C17.6556 7.03413 17.8057 6.71354 17.897 6.37428C18 5.99139 18 5.57819 18 4.7518V2M12 12L7.72711 15.5607C7.09226 16.0898 6.77484 16.3543 6.54664 16.6786C6.34444 16.9659 6.19429 17.2865 6.10301 17.6257C6 18.0086 6 18.4218 6 19.2482V22M12 12L16.2729 15.5607C16.9077 16.0898 17.2252 16.3543 17.4534 16.6786C17.6556 16.9659 17.8057 17.2865 17.897 17.6257C18 18.0086 18 18.4218 18 19.2482V22M4 2H20M4 22H20"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Hourglass01Icon.displayName = 'Hourglass01Icon';