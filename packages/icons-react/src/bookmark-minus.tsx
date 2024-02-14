import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTBIMTVNMTkgMjFWNy44QzE5IDYuMTE5ODQgMTkgNS4yNzk3NiAxOC42NzMgNC42MzgwM0MxOC4zODU0IDQuMDczNTQgMTcuOTI2NSAzLjYxNDYgMTcuMzYyIDMuMzI2OThDMTYuNzIwMiAzIDE1Ljg4MDIgMyAxNC4yIDNIOS44QzguMTE5ODQgMyA3LjI3OTc2IDMgNi42MzgwMyAzLjMyNjk4QzYuMDczNTQgMy42MTQ2IDUuNjE0NiA0LjA3MzU0IDUuMzI2OTggNC42MzgwM0M1IDUuMjc5NzYgNSA2LjExOTg0IDUgNy44VjIxTDEyIDE3TDE5IDIxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const BookmarkMinusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BookmarkMinusIcon.displayName = 'BookmarkMinusIcon';
