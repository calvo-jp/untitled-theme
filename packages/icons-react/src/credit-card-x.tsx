import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMTZMMjEuNSAyMU0yMS41IDE2TDE2LjUgMjFNMjIgMTBIMk0yMiAxMlY4LjJDMjIgNy4wNzk5IDIyIDYuNTE5ODQgMjEuNzgyIDYuMDkyMDJDMjEuNTkwMyA1LjcxNTcgMjEuMjg0MyA1LjQwOTc0IDIwLjkwOCA1LjIxNzk5QzIwLjQ4MDIgNSAxOS45MjAxIDUgMTguOCA1SDUuMkM0LjA3OTkgNSAzLjUxOTg0IDUgMy4wOTIwMiA1LjIxNzk5QzIuNzE1NyA1LjQwOTczIDIuNDA5NzMgNS43MTU2OSAyLjIxNzk5IDYuMDkyMDJDMiA2LjUxOTg0IDIgNy4wNzk5IDIgOC4yVjE1LjhDMiAxNi45MjAxIDIgMTcuNDgwMiAyLjIxNzk5IDE3LjkwOEMyLjQwOTczIDE4LjI4NDMgMi43MTU2OSAxOC41OTAzIDMuMDkyMDIgMTguNzgyQzMuNTE5ODQgMTkgNC4wNzk5IDE5IDUuMiAxOUgxMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const CreditCardXIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M16.5 16L21.5 21M21.5 16L16.5 21M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CreditCardXIcon.displayName = 'CreditCardXIcon';
