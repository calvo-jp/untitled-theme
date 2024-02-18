import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMS4zMDYzIDMuMjA2OTNDMTEuNTMzOCAyLjgxMTA3IDExLjY0NzYgMi42MTMxNSAxMS43OTYyIDIuNTQ2ODFDMTEuOTI1OSAyLjQ4ODk1IDEyLjA3NCAyLjQ4ODk1IDEyLjIwMzcgMi41NDY4MUMxMi4zNTI0IDIuNjEzMTUgMTIuNDY2MSAyLjgxMTA3IDEyLjY5MzYgMy4yMDY5M0wxNC42NDg3IDYuNjA5MjVDMTQuNzMzIDYuNzU1NzkgMTQuNzc1MSA2LjgyOTA2IDE0LjgzNDEgNi44ODIzMUMxNC44ODYzIDYuOTI5NDIgMTQuOTQ3OSA2Ljk2NDk4IDE1LjAxNDggNi45ODY2NkMxNS4wOTA1IDcuMDExMTcgMTUuMTc1IDcuMDExIDE1LjM0NCA3LjAxMDY1TDE5LjI2ODEgNy4wMDI3MkMxOS43MjQ2IDcuMDAxNzkgMTkuOTUyOSA3LjAwMTMzIDIwLjA4NDcgNy4wOTY5MUMyMC4xOTk2IDcuMTgwMjggMjAuMjczNyA3LjMwODU4IDIwLjI4ODQgNy40NDk4QzIwLjMwNTMgNy42MTE3MSAyMC4xOTA4IDcuODA5MTggMTkuOTYxNyA4LjIwNDEyTDE3Ljk5MjggMTEuNTk4NUMxNy45MDggMTEuNzQ0NyAxNy44NjU2IDExLjgxNzggMTcuODQ5IDExLjg5NTVDMTcuODM0MyAxMS45NjQzIDE3LjgzNDMgMTIuMDM1NSAxNy44NDkgMTIuMTA0M0MxNy44NjU2IDEyLjE4MiAxNy45MDggMTIuMjU1MSAxNy45OTI4IDEyLjQwMTNMMTkuOTYxNyAxNS43OTU3QzIwLjE5MDggMTYuMTkwNiAyMC4zMDUzIDE2LjM4ODEgMjAuMjg4NCAxNi41NUMyMC4yNzM3IDE2LjY5MTIgMjAuMTk5NiAxNi44MTk1IDIwLjA4NDcgMTYuOTAyOUMxOS45NTI5IDE2Ljk5ODUgMTkuNzI0NiAxNi45OTggMTkuMjY4MSAxNi45OTcxTDE1LjM0NCAxNi45ODkxQzE1LjE3NSAxNi45ODg4IDE1LjA5MDUgMTYuOTg4NiAxNS4wMTQ4IDE3LjAxMzFDMTQuOTQ3OSAxNy4wMzQ4IDE0Ljg4NjMgMTcuMDcwNCAxNC44MzQxIDE3LjExNzVDMTQuNzc1MSAxNy4xNzA3IDE0LjczMyAxNy4yNDQgMTQuNjQ4NyAxNy4zOTA1TDEyLjY5MzYgMjAuNzkyOUMxMi40NjYxIDIxLjE4ODcgMTIuMzUyNCAyMS4zODY3IDEyLjIwMzcgMjEuNDUzQzEyLjA3NCAyMS41MTA4IDExLjkyNTkgMjEuNTEwOCAxMS43OTYyIDIxLjQ1M0MxMS42NDc2IDIxLjM4NjcgMTEuNTMzOCAyMS4xODg3IDExLjMwNjMgMjAuNzkyOUw5LjM1MTE2IDE3LjM5MDVDOS4yNjY5NSAxNy4yNDQgOS4yMjQ4NSAxNy4xNzA3IDkuMTY1ODEgMTcuMTE3NUM5LjExMzU3IDE3LjA3MDQgOS4wNTE5OCAxNy4wMzQ4IDguOTg1MDcgMTcuMDEzMUM4LjkwOTQzIDE2Ljk4ODYgOC44MjQ5MyAxNi45ODg4IDguNjU1OTIgMTYuOTg5MUw0LjczMTgzIDE2Ljk5NzFDNC4yNzUyNyAxNi45OTggNC4wNDY5OSAxNi45OTg1IDMuOTE1MjEgMTYuOTAyOUMzLjgwMDI3IDE2LjgxOTUgMy43MjYyIDE2LjY5MTIgMy43MTE0NyAxNi41NUMzLjY5NDU4IDE2LjM4ODEgMy44MDkxMyAxNi4xOTA2IDQuMDM4MjEgMTUuNzk1N0w2LjAwNzEyIDEyLjQwMTNDNi4wOTE5MyAxMi4yNTUxIDYuMTM0MzMgMTIuMTgyIDYuMTUwOTIgMTIuMTA0M0M2LjE2NTYgMTIuMDM1NSA2LjE2NTYgMTEuOTY0MyA2LjE1MDkyIDExLjg5NTVDNi4xMzQzMyAxMS44MTc4IDYuMDkxOTIgMTEuNzQ0NyA2LjAwNzEyIDExLjU5ODVMNC4wMzgyMSA4LjIwNDExQzMuODA5MTMgNy44MDkxOCAzLjY5NDU4IDcuNjExNzEgMy43MTE0NyA3LjQ0OThDMy43MjYyIDcuMzA4NTggMy44MDAyNyA3LjE4MDI4IDMuOTE1MjEgNy4wOTY5MUM0LjA0Njk5IDcuMDAxMzMgNC4yNzUyNyA3LjAwMTc5IDQuNzMxODQgNy4wMDI3Mkw4LjY1NTkyIDcuMDEwNjVDOC44MjQ5MyA3LjAxMSA4LjkwOTQzIDcuMDExMTcgOC45ODUwNyA2Ljk4NjY2QzkuMDUxOTggNi45NjQ5OCA5LjExMzU3IDYuOTI5NDIgOS4xNjU4MSA2Ljg4MjMxQzkuMjI0ODUgNi44MjkwNiA5LjI2Njk1IDYuNzU1NzkgOS4zNTExNiA2LjYwOTI1TDExLjMwNjMgMy4yMDY5M1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Star02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M11.3063 3.20693C11.5338 2.81107 11.6476 2.61315 11.7962 2.54681C11.9259 2.48895 12.074 2.48895 12.2037 2.54681C12.3524 2.61315 12.4661 2.81107 12.6936 3.20693L14.6487 6.60925C14.733 6.75579 14.7751 6.82906 14.8341 6.88231C14.8863 6.92942 14.9479 6.96498 15.0148 6.98666C15.0905 7.01117 15.175 7.011 15.344 7.01065L19.2681 7.00272C19.7246 7.00179 19.9529 7.00133 20.0847 7.09691C20.1996 7.18028 20.2737 7.30858 20.2884 7.4498C20.3053 7.61171 20.1908 7.80918 19.9617 8.20412L17.9928 11.5985C17.908 11.7447 17.8656 11.8178 17.849 11.8955C17.8343 11.9643 17.8343 12.0355 17.849 12.1043C17.8656 12.182 17.908 12.2551 17.9928 12.4013L19.9617 15.7957C20.1908 16.1906 20.3053 16.3881 20.2884 16.55C20.2737 16.6912 20.1996 16.8195 20.0847 16.9029C19.9529 16.9985 19.7246 16.998 19.2681 16.9971L15.344 16.9891C15.175 16.9888 15.0905 16.9886 15.0148 17.0131C14.9479 17.0348 14.8863 17.0704 14.8341 17.1175C14.7751 17.1707 14.733 17.244 14.6487 17.3905L12.6936 20.7929C12.4661 21.1887 12.3524 21.3867 12.2037 21.453C12.074 21.5108 11.9259 21.5108 11.7962 21.453C11.6476 21.3867 11.5338 21.1887 11.3063 20.7929L9.35116 17.3905C9.26695 17.244 9.22485 17.1707 9.16581 17.1175C9.11357 17.0704 9.05198 17.0348 8.98507 17.0131C8.90943 16.9886 8.82493 16.9888 8.65592 16.9891L4.73183 16.9971C4.27527 16.998 4.04699 16.9985 3.91521 16.9029C3.80027 16.8195 3.7262 16.6912 3.71147 16.55C3.69458 16.3881 3.80913 16.1906 4.03821 15.7957L6.00712 12.4013C6.09193 12.2551 6.13433 12.182 6.15092 12.1043C6.1656 12.0355 6.1656 11.9643 6.15092 11.8955C6.13433 11.8178 6.09192 11.7447 6.00712 11.5985L4.03821 8.20411C3.80913 7.80918 3.69458 7.61171 3.71147 7.4498C3.7262 7.30858 3.80027 7.18028 3.91521 7.09691C4.04699 7.00133 4.27527 7.00179 4.73184 7.00272L8.65592 7.01065C8.82493 7.011 8.90943 7.01117 8.98507 6.98666C9.05198 6.96498 9.11357 6.92942 9.16581 6.88231C9.22485 6.82906 9.26695 6.75579 9.35116 6.60925L11.3063 3.20693Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Star02Icon.displayName = 'Star02Icon';