import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOS45MDYxIDIxQzIxLjI0NjQgMTguMjg4OCAyMiAxNS4yMzI5IDIyIDEyQzIyIDguNzY3MTEgMjEuMjQ2NCA1LjcxMTE2IDE5LjkwNjEgM000LjA5MzkzIDNDMi43NTM2MyA1LjcxMTE2IDIgOC43NjcxMSAyIDEyQzIgMTUuMjMyOSAyLjc1MzYzIDE4LjI4ODggNC4wOTM5MyAyMU0xNi41NDg2IDguNjI1SDE2LjQ1OUMxNS44MDU2IDguNjI1IDE1LjE4NDggOC45MTIwMiAxNC43NTk2IDkuNDEwNzJMOS4zODQ3MSAxNS43MTQzQzguOTU5NDggMTYuMjEzIDguMzM4NzEgMTYuNSA3LjY4NTMgMTYuNUg3LjU5NTYzTTguNzE0ODMgOC42MjVIMTAuMTA4OUMxMC42MDg2IDguNjI1IDExLjA0NzcgOC45NTc5NyAxMS4xODUgOS40NDA5NEwxMi45NTk0IDE1LjY4NDFDMTMuMDk2NyAxNi4xNjcgMTMuNTM1OCAxNi41IDE0LjAzNTUgMTYuNUgxNS40Mjk2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const VariableIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M19.9061 21C21.2464 18.2888 22 15.2329 22 12C22 8.76711 21.2464 5.71116 19.9061 3M4.09393 3C2.75363 5.71116 2 8.76711 2 12C2 15.2329 2.75363 18.2888 4.09393 21M16.5486 8.625H16.459C15.8056 8.625 15.1848 8.91202 14.7596 9.41072L9.38471 15.7143C8.95948 16.213 8.33871 16.5 7.6853 16.5H7.59563M8.71483 8.625H10.1089C10.6086 8.625 11.0477 8.95797 11.185 9.44094L12.9594 15.6841C13.0967 16.167 13.5358 16.5 14.0355 16.5H15.4296"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

VariableIcon.displayName = 'VariableIcon';
