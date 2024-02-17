import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDZDMi42IDYuNSAzLjIgNyA0LjUgN0M3IDcgNyA1IDkuNSA1QzEwLjggNSAxMS40IDUuNSAxMiA2QzEyLjYgNi41IDEzLjIgNyAxNC41IDdDMTcgNyAxNyA1IDE5LjUgNUMyMC44IDUgMjEuNCA1LjUgMjIgNk0yIDE4QzIuNiAxOC41IDMuMiAxOSA0LjUgMTlDNyAxOSA3IDE3IDkuNSAxN0MxMC44IDE3IDExLjQgMTcuNSAxMiAxOEMxMi42IDE4LjUgMTMuMiAxOSAxNC41IDE5QzE3IDE5IDE3IDE3IDE5LjUgMTdDMjAuOCAxNyAyMS40IDE3LjUgMjIgMThNMiAxMkMyLjYgMTIuNSAzLjIgMTMgNC41IDEzQzcgMTMgNyAxMSA5LjUgMTFDMTAuOCAxMSAxMS40IDExLjUgMTIgMTJDMTIuNiAxMi41IDEzLjIgMTMgMTQuNSAxM0MxNyAxMyAxNyAxMSAxOS41IDExQzIwLjggMTEgMjEuNCAxMS41IDIyIDEyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const WavesIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C10.8 5 11.4 5.5 12 6C12.6 6.5 13.2 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C10.8 17 11.4 17.5 12 18C12.6 18.5 13.2 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C10.8 11 11.4 11.5 12 12C12.6 12.5 13.2 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

WavesIcon.displayName = 'WavesIcon';
