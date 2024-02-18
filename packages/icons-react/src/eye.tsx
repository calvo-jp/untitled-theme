import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yLjQyMDEyIDEyLjcxMzJDMi4yODM5NCAxMi40OTc1IDIuMjE1ODQgMTIuMzg5NyAyLjE3NzcyIDEyLjIyMzRDMi4xNDkwOSAxMi4wOTg1IDIuMTQ5MDkgMTEuOTAxNSAyLjE3NzcyIDExLjc3NjZDMi4yMTU4NCAxMS42MTAzIDIuMjgzOTQgMTEuNTAyNSAyLjQyMDEyIDExLjI4NjhDMy41NDU1MyA5LjUwNDg0IDYuODk1NCA1IDEyLjAwMDQgNUMxNy4xMDU0IDUgMjAuNDU1MyA5LjUwNDg0IDIxLjU4MDcgMTEuMjg2OEMyMS43MTY5IDExLjUwMjUgMjEuNzg1IDExLjYxMDMgMjEuODIzMSAxMS43NzY2QzIxLjg1MTcgMTEuOTAxNSAyMS44NTE3IDEyLjA5ODUgMjEuODIzMSAxMi4yMjM0QzIxLjc4NSAxMi4zODk3IDIxLjcxNjkgMTIuNDk3NSAyMS41ODA3IDEyLjcxMzJDMjAuNDU1MyAxNC40OTUyIDE3LjEwNTQgMTkgMTIuMDAwNCAxOUM2Ljg5NTQgMTkgMy41NDU1MyAxNC40OTUyIDIuNDIwMTIgMTIuNzEzMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEyLjAwMDQgMTVDMTMuNjU3MyAxNSAxNS4wMDA0IDEzLjY1NjkgMTUuMDAwNCAxMkMxNS4wMDA0IDEwLjM0MzEgMTMuNjU3MyA5IDEyLjAwMDQgOUMxMC4zNDM1IDkgOS4wMDA0IDEwLjM0MzEgOS4wMDA0IDEyQzkuMDAwNCAxMy42NTY5IDEwLjM0MzUgMTUgMTIuMDAwNCAxNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const EyeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

EyeIcon.displayName = 'EyeIcon';