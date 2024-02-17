import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05LjUgMlY0TTkuNSAyMFYyMk0xMy41IDJWNE0xMy41IDIwVjIyTTcuNSA0SDE0QzE2LjIwOTEgNCAxOCA1Ljc5MDg2IDE4IDhDMTggMTAuMjA5MSAxNi4yMDkxIDEyIDE0IDEySDcuNUgxNUMxNy4yMDkxIDEyIDE5IDEzLjc5MDkgMTkgMTZDMTkgMTguMjA5MSAxNy4yMDkxIDIwIDE1IDIwSDcuNU03LjUgNEg1LjVNNy41IDRWMjBNNy41IDIwSDUuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const CurrencyBitcoinIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9.5 2V4M9.5 20V22M13.5 2V4M13.5 20V22M7.5 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H7.5H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H7.5M7.5 4H5.5M7.5 4V20M7.5 20H5.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CurrencyBitcoinIcon.displayName = 'CurrencyBitcoinIcon';
