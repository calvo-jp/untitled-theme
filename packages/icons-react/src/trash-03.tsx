import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05IDNIMTVNMyA2SDIxTTE5IDZMMTguMjk4NyAxNi41MTkzQzE4LjE5MzUgMTguMDk3NSAxOC4xNDA5IDE4Ljg4NjcgMTcuOCAxOS40ODVDMTcuNDk5OSAyMC4wMTE4IDE3LjA0NzIgMjAuNDM1MyAxNi41MDE3IDIwLjY5OTdDMTUuODgyIDIxIDE1LjA5MTEgMjEgMTMuNTA5MyAyMUgxMC40OTA3QzguOTA4OTEgMjEgOC4xMTgwMyAyMSA3LjQ5ODM0IDIwLjY5OTdDNi45NTI3NiAyMC40MzUzIDYuNTAwMDkgMjAuMDExOCA2LjE5OTk4IDE5LjQ4NUM1Ljg1OTExIDE4Ljg4NjcgNS44MDY1IDE4LjA5NzUgNS43MDEyOSAxNi41MTkzTDUgNk0xMCAxMC41VjE1LjVNMTQgMTAuNVYxNS41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const Trash03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Trash03Icon.displayName = 'Trash03Icon';
