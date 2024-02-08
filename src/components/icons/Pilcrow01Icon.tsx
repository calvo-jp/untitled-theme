import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDRWMjBNMTYgNEgxOE0xNiA0SDEwLjVDOC4wMTQ3MiA0IDYgNi4wMTQ3MiA2IDguNUM2IDEwLjk4NTMgOC4wMTQ3MiAxMyAxMC41IDEzSDE2VjRaTTE0IDIwSDE4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const Pilcrow01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M16 4V20M16 4H18M16 4H10.5C8.01472 4 6 6.01472 6 8.5C6 10.9853 8.01472 13 10.5 13H16V4ZM14 20H18"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Pilcrow01Icon.displayName = 'Pilcrow01Icon';
