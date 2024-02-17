import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDEySDEyTTkgNFYyME0zIDlMNiAxMkwzIDE1TTEyIDZMOSA5TDYgNk02IDE4TDkgMTVMMTAuNSAxNi41TTIwIDE0LjUzNTFWNEMyMCAyLjg5NTQzIDE5LjEwNDYgMiAxOCAyQzE2Ljg5NTQgMiAxNiAyLjg5NTQzIDE2IDRWMTQuNTM1MUMxNC44MDQ0IDE1LjIyNjcgMTQgMTYuNTE5NCAxNCAxOEMxNCAyMC4yMDkxIDE1Ljc5MDkgMjIgMTggMjJDMjAuMjA5MSAyMiAyMiAyMC4yMDkxIDIyIDE4QzIyIDE2LjUxOTQgMjEuMTk1NiAxNS4yMjY3IDIwIDE0LjUzNTFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ThermometerColdIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2 12H12M9 4V20M3 9L6 12L3 15M12 6L9 9L6 6M6 18L9 15L10.5 16.5M20 14.5351V4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4V14.5351C14.8044 15.2267 14 16.5194 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.5194 21.1956 15.2267 20 14.5351Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ThermometerColdIcon.displayName = 'ThermometerColdIcon';
