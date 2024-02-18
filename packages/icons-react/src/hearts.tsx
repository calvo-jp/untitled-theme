import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNS41NDU1IDkuOTI1NDNDMTUuOTE5NSA5LjI2MTAzIDE2LjIzMTMgOC42NjE1MSAxNi40MjM2IDguMjA1MjFDMTcuMzU3MyA1Ljk4OTQ3IDE2LjQzNCAzLjQ0MDc3IDE0LjE3NjkgMi40MDExMkMxMS45MTk5IDEuMzYxNDggOS42NTM0MSAyLjQzOTUgOC42NTg3MSA0LjUyMDkzQzYuNzU2NTcgMy4yMTU3IDQuMjE5MTggMy40MDczOSAyLjgxOTg5IDUuNDQ0MjRDMS40MjA1OSA3LjQ4MTA4IDEuODU5NzUgMTAuMTQyIDMuNzc2MjkgMTEuNTk0QzQuNjQ2MSAxMi4yNTMgNi4zNjYzNiAxMy4yMjQyIDcuOTg1OTYgMTQuMDg4NE0xNi4yOTcyIDExLjc0OTlDMTUuODc1MSA5LjQ4MiAxMy45NDU0IDcuODIzMzQgMTEuNTE1NiA4LjI3NDE1QzkuMDg1OTIgOC43MjQ5NyA3LjUxNDg4IDEwLjkxNzEgNy44NDMzNSAxMy4yOTlDOC4xMDcyNSAxNS4yMTI3IDkuNTYzOTIgMTkuNzAyNyAxMC4xMjY0IDIxLjM5NEMxMC4yMDMyIDIxLjYyNDggMTAuMjQxNSAyMS43NDAyIDEwLjMxNzUgMjEuODIwNkMxMC4zODM3IDIxLjg5MDcgMTAuNDcxNyAyMS45NDE2IDEwLjU2NTUgMjEuOTYzOEMxMC42NzMyIDIxLjk4OTQgMTAuNzkyMyAyMS45NjQ5IDExLjAzMDYgMjEuOTE2QzEyLjc3NjUgMjEuNTU3NSAxNy4zOTMzIDIwLjU3NCAxOS4xODI2IDE5Ljg0NTdDMjEuNDA5NiAxOC45MzkyIDIyLjU1ODkgMTYuNDg0MSAyMS42OTgxIDE0LjE1M0MyMC44MzcyIDExLjgyMTkgMTguNDcyMyAxMC45ODE1IDE2LjI5NzIgMTEuNzQ5OVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const HeartsIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M15.5455 9.92543C15.9195 9.26103 16.2313 8.66151 16.4236 8.20521C17.3573 5.98947 16.434 3.44077 14.1769 2.40112C11.9199 1.36148 9.65341 2.4395 8.65871 4.52093C6.75657 3.2157 4.21918 3.40739 2.81989 5.44424C1.42059 7.48108 1.85975 10.142 3.77629 11.594C4.6461 12.253 6.36636 13.2242 7.98596 14.0884M16.2972 11.7499C15.8751 9.482 13.9454 7.82334 11.5156 8.27415C9.08592 8.72497 7.51488 10.9171 7.84335 13.299C8.10725 15.2127 9.56392 19.7027 10.1264 21.394C10.2032 21.6248 10.2415 21.7402 10.3175 21.8206C10.3837 21.8907 10.4717 21.9416 10.5655 21.9638C10.6732 21.9894 10.7923 21.9649 11.0306 21.916C12.7765 21.5575 17.3933 20.574 19.1826 19.8457C21.4096 18.9392 22.5589 16.4841 21.6981 14.153C20.8372 11.8219 18.4723 10.9815 16.2972 11.7499Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

HeartsIcon.displayName = 'HeartsIcon';