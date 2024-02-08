import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDIxVjE1TTE2IDE4SDIyTTEyIDE1SDhDNi4xMzYyMyAxNSA1LjIwNDM1IDE1IDQuNDY5MjcgMTUuMzA0NUMzLjQ4OTE1IDE1LjcxMDUgMi43MTA0NiAxNi40ODkyIDIuMzA0NDggMTcuNDY5M0MyIDE4LjIwNDQgMiAxOS4xMzYyIDIgMjFNMTUuNSAzLjI5MDc2QzE2Ljk2NTkgMy44ODQxNSAxOCA1LjMyMTMxIDE4IDdDMTggOC42Nzg2OSAxNi45NjU5IDEwLjExNTkgMTUuNSAxMC43MDkyTTEzLjUgN0MxMy41IDkuMjA5MTQgMTEuNzA5MSAxMSA5LjUgMTFDNy4yOTA4NiAxMSA1LjUgOS4yMDkxNCA1LjUgN0M1LjUgNC43OTA4NiA3LjI5MDg2IDMgOS41IDNDMTEuNzA5MSAzIDEzLjUgNC43OTA4NiAxMy41IDdaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const UsersPlusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M19 21V15M16 18H22M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

UsersPlusIcon.displayName = 'UsersPlusIcon';
