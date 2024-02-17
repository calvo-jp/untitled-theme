import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMC41IDcuMjc3ODNMMTIgMTIuMDAwMU0xMiAxMi4wMDAxTDMuNDk5OTcgNy4yNzc4M00xMiAxMi4wMDAxTDEyIDIxLjUwMDFNMTQgMjAuODg5TDEyLjc3NyAyMS41Njg0QzEyLjQ5MzQgMjEuNzI2IDEyLjM1MTYgMjEuODA0NyAxMi4yMDE1IDIxLjgzNTZDMTIuMDY4NSAyMS44NjMgMTEuOTMxNSAyMS44NjMgMTEuNzk4NiAyMS44MzU2QzExLjY0ODQgMjEuODA0NyAxMS41MDY2IDIxLjcyNiAxMS4yMjMgMjEuNTY4NEwzLjgyMjk3IDE3LjQ1NzNDMy41MjM0NiAxNy4yOTA5IDMuMzczNjggMTcuMjA3NyAzLjI2NDYzIDE3LjA4OTNDMy4xNjgxNiAxNi45ODQ3IDMuMDk1MTUgMTYuODYwNiAzLjA1MDQ4IDE2LjcyNTRDMyAxNi41NzI2IDMgMTYuNDAxMyAzIDE2LjA1ODZWNy45NDE1M0MzIDcuNTk4ODkgMyA3LjQyNzU3IDMuMDUwNDggNy4yNzQ3N0MzLjA5NTE1IDcuMTM5NTkgMy4xNjgxNiA3LjAxNTUxIDMuMjY0NjMgNi45MTA4MkMzLjM3MzY4IDYuNzkyNDggMy41MjM0NSA2LjcwOTI4IDMuODIyOTcgNi41NDI4OEwxMS4yMjMgMi40MzE3N0MxMS41MDY2IDIuMjc0MjEgMTEuNjQ4NCAyLjE5NTQzIDExLjc5ODYgMi4xNjQ1NEMxMS45MzE1IDIuMTM3MjEgMTIuMDY4NSAyLjEzNzIxIDEyLjIwMTUgMi4xNjQ1NEMxMi4zNTE2IDIuMTk1NDMgMTIuNDkzNCAyLjI3NDIxIDEyLjc3NyAyLjQzMTc3TDIwLjE3NyA2LjU0Mjg4QzIwLjQ3NjYgNi43MDkyOCAyMC42MjYzIDYuNzkyNDggMjAuNzM1NCA2LjkxMDgyQzIwLjgzMTggNy4wMTU1MSAyMC45MDQ5IDcuMTM5NTkgMjAuOTQ5NSA3LjI3NDc3QzIxIDcuNDI3NTcgMjEgNy41OTg4OSAyMSA3Ljk0MTUzTDIxIDEyLjUwMDFNNy41IDQuNTAwMDhMMTYuNSA5LjUwMDA4TTE5IDIxLjAwMDFWMTUuMDAwMU0xNiAxOC4wMDAxSDIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const PackagePlusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M19 21.0001V15.0001M16 18.0001H22"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PackagePlusIcon.displayName = 'PackagePlusIcon';
