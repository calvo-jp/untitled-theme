import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik04LjUgMTEuNUgxNC41QzE2LjcwOTEgMTEuNSAxOC41IDkuNzA5MTQgMTguNSA3LjVDMTguNSA1LjI5MDg2IDE2LjcwOTEgMy41IDE0LjUgMy41SDguNVYxMS41Wk04LjUgMTEuNUg2LjVNMTMuNSAxNS41SDYuNU04LjUgNFYyMC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const CurrencyRubleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M8.5 11.5H14.5C16.7091 11.5 18.5 9.70914 18.5 7.5C18.5 5.29086 16.7091 3.5 14.5 3.5H8.5V11.5ZM8.5 11.5H6.5M13.5 15.5H6.5M8.5 4V20.5"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CurrencyRubleIcon.displayName = 'CurrencyRubleIcon';
