import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik01IDNMMiA2TTIyIDZMMTkgM002IDE5TDQgMjFNMTggMTlMMjAgMjFNOSAxM0gxNU0xMiAyMUMxNC4xMjE3IDIxIDE2LjE1NjYgMjAuMTU3MSAxNy42NTY5IDE4LjY1NjlDMTkuMTU3MSAxNy4xNTY2IDIwIDE1LjEyMTcgMjAgMTNDMjAgMTAuODc4MyAxOS4xNTcxIDguODQzNDQgMTcuNjU2OSA3LjM0MzE1QzE2LjE1NjYgNS44NDI4NSAxNC4xMjE3IDUgMTIgNUM5Ljg3ODI3IDUgNy44NDM0NCA1Ljg0Mjg1IDYuMzQzMTUgNy4zNDMxNUM0Ljg0Mjg1IDguODQzNDQgNCAxMC44NzgzIDQgMTNDNCAxNS4xMjE3IDQuODQyODUgMTcuMTU2NiA2LjM0MzE1IDE4LjY1NjlDNy44NDM0NCAyMC4xNTcxIDkuODc4MjcgMjEgMTIgMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const AlarmClockMinusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M9 13H15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AlarmClockMinusIcon.displayName = 'AlarmClockMinusIcon';
