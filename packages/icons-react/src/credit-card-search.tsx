import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMiAyMkwyMC41IDIwLjVNMjIgMTBIMk0yMiAxMlY4LjJDMjIgNy4wNzk5IDIyIDYuNTE5ODQgMjEuNzgyIDYuMDkyMDJDMjEuNTkwMyA1LjcxNTcgMjEuMjg0MyA1LjQwOTc0IDIwLjkwOCA1LjIxNzk5QzIwLjQ4MDIgNSAxOS45MjAxIDUgMTguOCA1SDUuMkM0LjA3OTkgNSAzLjUxOTg0IDUgMy4wOTIwMiA1LjIxNzk5QzIuNzE1NyA1LjQwOTczIDIuNDA5NzMgNS43MTU2OSAyLjIxNzk5IDYuMDkyMDJDMiA2LjUxOTg0IDIgNy4wNzk5IDIgOC4yVjE1LjhDMiAxNi45MjAxIDIgMTcuNDgwMiAyLjIxNzk5IDE3LjkwOEMyLjQwOTczIDE4LjI4NDMgMi43MTU2OSAxOC41OTAzIDMuMDkyMDIgMTguNzgyQzMuNTE5ODQgMTkgNC4wNzk5IDE5IDUuMiAxOUgxMC41TTIxLjUgMThDMjEuNSAxOS45MzMgMTkuOTMzIDIxLjUgMTggMjEuNUMxNi4wNjcgMjEuNSAxNC41IDE5LjkzMyAxNC41IDE4QzE0LjUgMTYuMDY3IDE2LjA2NyAxNC41IDE4IDE0LjVDMTkuOTMzIDE0LjUgMjEuNSAxNi4wNjcgMjEuNSAxOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const CreditCardSearchIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M22 22L20.5 20.5M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H10.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CreditCardSearchIcon.displayName = 'CreditCardSearchIcon';
