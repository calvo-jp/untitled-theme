import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMS41ODEzIDcuMTk5ODlDMjEuNDczMyA2Ljc2ODQ2IDIxLjI1MzQgNi4zNzMxOCAyMC45NDM4IDYuMDUzOTVDMjAuNjM0MSA1LjczNDczIDIwLjI0NTcgNS41MDI4NyAxOS44MTc4IDUuMzgxOEMxOC4yNTQyIDUgMTIgNSAxMiA1QzEyIDUgNS43NDU3OCA1IDQuMTgyMjIgNS40MTgxNkMzLjc1NDI5IDUuNTM5MjMgMy4zNjU4OCA1Ljc3MTA5IDMuMDU2MjMgNi4wOTAzMUMyLjc0NjU5IDYuNDA5NTQgMi41MjY2NiA2LjgwNDgyIDIuNDE4NjggNy4yMzYyNUMyLjEzMjUzIDguODIzMDMgMS45OTI1NSAxMC40MzI3IDIuMDAwNTIgMTIuMDQ1MUMxLjk5MDMyIDEzLjY2OTYgMi4xMzAzIDE1LjI5MTYgMi40MTg2OCAxNi44OTAzQzIuNTM3NzMgMTcuMzA4MyAyLjc2MjU4IDE3LjY4ODYgMy4wNzE1IDE3Ljk5NDNDMy4zODA0MyAxOC4zIDMuNzYyOTkgMTguNTIwOSA0LjE4MjIyIDE4LjYzNTdDNS43NDU3OCAxOS4wNTM4IDEyIDE5LjA1MzggMTIgMTkuMDUzOEMxMiAxOS4wNTM4IDE4LjI1NDIgMTkuMDUzOCAxOS44MTc4IDE4LjYzNTdDMjAuMjQ1NyAxOC41MTQ2IDIwLjYzNDEgMTguMjgyNyAyMC45NDM4IDE3Ljk2MzVDMjEuMjUzNCAxNy42NDQzIDIxLjQ3MzMgMTcuMjQ5IDIxLjU4MTMgMTYuODE3NkMyMS44NjUzIDE1LjI0MjcgMjIuMDA1MiAxMy42NDUzIDIxLjk5OTUgMTIuMDQ1MUMyMi4wMDk3IDEwLjQyMDYgMjEuODY5NyA4Ljc5ODYyIDIxLjU4MTMgNy4xOTk4OVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTkuNzUgOS40NjUzM0M5Ljc1IDguOTg4MDUgOS43NSA4Ljc0OTQxIDkuODQ5NzQgOC42MTYxOEM5LjkzNjY2IDguNTAwMDggMTAuMDY5NyA4LjQyNzQ0IDEwLjIxNDQgOC40MTcxQzEwLjM4MDQgOC40MDUyNSAxMC41ODExIDguNTM0MjkgMTAuOTgyNiA4Ljc5MjM5TDE0LjkyNTQgMTEuMzI3MUMxNS4yNzM4IDExLjU1MSAxNS40NDggMTEuNjYzIDE1LjUwODIgMTEuODA1NEMxNS41NjA3IDExLjkyOTggMTUuNTYwNyAxMi4wNzAyIDE1LjUwODIgMTIuMTk0NkMxNS40NDggMTIuMzM3IDE1LjI3MzggMTIuNDQ5IDE0LjkyNTQgMTIuNjcyOUwxMC45ODI2IDE1LjIwNzZDMTAuNTgxMSAxNS40NjU3IDEwLjM4MDQgMTUuNTk0OCAxMC4yMTQ0IDE1LjU4MjlDMTAuMDY5NyAxNS41NzI2IDkuOTM2NjYgMTUuNDk5OSA5Ljg0OTc0IDE1LjM4MzhDOS43NSAxNS4yNTA2IDkuNzUgMTUuMDEyIDkuNzUgMTQuNTM0N1Y5LjQ2NTMzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const YoutubeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M21.5813 7.19989C21.4733 6.76846 21.2534 6.37318 20.9438 6.05395C20.6341 5.73473 20.2457 5.50287 19.8178 5.3818C18.2542 5 12 5 12 5C12 5 5.74578 5 4.18222 5.41816C3.75429 5.53923 3.36588 5.77109 3.05623 6.09031C2.74659 6.40954 2.52666 6.80482 2.41868 7.23625C2.13253 8.82303 1.99255 10.4327 2.00052 12.0451C1.99032 13.6696 2.1303 15.2916 2.41868 16.8903C2.53773 17.3083 2.76258 17.6886 3.0715 17.9943C3.38043 18.3 3.76299 18.5209 4.18222 18.6357C5.74578 19.0538 12 19.0538 12 19.0538C12 19.0538 18.2542 19.0538 19.8178 18.6357C20.2457 18.5146 20.6341 18.2827 20.9438 17.9635C21.2534 17.6443 21.4733 17.249 21.5813 16.8176C21.8653 15.2427 22.0052 13.6453 21.9995 12.0451C22.0097 10.4206 21.8697 8.79862 21.5813 7.19989Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.75 9.46533C9.75 8.98805 9.75 8.74941 9.84974 8.61618C9.93666 8.50008 10.0697 8.42744 10.2144 8.4171C10.3804 8.40525 10.5811 8.53429 10.9826 8.79239L14.9254 11.3271C15.2738 11.551 15.448 11.663 15.5082 11.8054C15.5607 11.9298 15.5607 12.0702 15.5082 12.1946C15.448 12.337 15.2738 12.449 14.9254 12.6729L10.9826 15.2076C10.5811 15.4657 10.3804 15.5948 10.2144 15.5829C10.0697 15.5726 9.93666 15.4999 9.84974 15.3838C9.75 15.2506 9.75 15.012 9.75 14.5347V9.46533Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

YoutubeIcon.displayName = 'YoutubeIcon';