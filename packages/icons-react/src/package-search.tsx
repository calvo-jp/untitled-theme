import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMC41IDcuMjc3ODNMMTIgMTIuMDAwMU0xMiAxMi4wMDAxTDMuNDk5OTcgNy4yNzc4M00xMiAxMi4wMDAxTDEyIDIxLjUwMDFNMjEgMTIuMDAwMVY3Ljk0MTUzQzIxIDcuNTk4ODkgMjEgNy40Mjc1NyAyMC45NDk1IDcuMjc0NzdDMjAuOTA0OSA3LjEzOTU5IDIwLjgzMTggNy4wMTU1MSAyMC43MzU0IDYuOTEwODJDMjAuNjI2MyA2Ljc5MjQ4IDIwLjQ3NjYgNi43MDkyOCAyMC4xNzcgNi41NDI4OEwxMi43NzcgMi40MzE3N0MxMi40OTM0IDIuMjc0MjEgMTIuMzUxNiAyLjE5NTQzIDEyLjIwMTUgMi4xNjQ1NEMxMi4wNjg1IDIuMTM3MjEgMTEuOTMxNSAyLjEzNzIxIDExLjc5ODYgMi4xNjQ1NEMxMS42NDg0IDIuMTk1NDMgMTEuNTA2NiAyLjI3NDIxIDExLjIyMyAyLjQzMTc3TDMuODIyOTcgNi41NDI4OEMzLjUyMzQ1IDYuNzA5MjggMy4zNzM2OCA2Ljc5MjQ4IDMuMjY0NjMgNi45MTA4MkMzLjE2ODE2IDcuMDE1NTEgMy4wOTUxNSA3LjEzOTU5IDMuMDUwNDggNy4yNzQ3N0MzIDcuNDI3NTcgMyA3LjU5ODg5IDMgNy45NDE1M1YxNi4wNTg2QzMgMTYuNDAxMyAzIDE2LjU3MjYgMy4wNTA0OCAxNi43MjU0QzMuMDk1MTUgMTYuODYwNiAzLjE2ODE2IDE2Ljk4NDcgMy4yNjQ2MyAxNy4wODkzQzMuMzczNjggMTcuMjA3NyAzLjUyMzQ2IDE3LjI5MDkgMy44MjI5NyAxNy40NTczTDExLjIyMyAyMS41Njg0QzExLjUwNjYgMjEuNzI2IDExLjY0ODQgMjEuODA0NyAxMS43OTg2IDIxLjgzNTZDMTEuOTMxNSAyMS44NjMgMTIuMDY4NSAyMS44NjMgMTIuMjAxNSAyMS44MzU2QzEyLjM1MTYgMjEuODA0NyAxMi40OTM0IDIxLjcyNiAxMi43NzcgMjEuNTY4NEwxMyAyMS40NDQ1TTcuNSA0LjUwMDA4TDE2LjUgOS41MDAwOE0yMiAyMS41MDAxTDIxIDIwLjUwMDFNMjIgMTguMDAwMUMyMiAxOS42NTY5IDIwLjY1NjkgMjEuMDAwMSAxOSAyMS4wMDAxQzE3LjM0MzEgMjEuMDAwMSAxNiAxOS42NTY5IDE2IDE4LjAwMDFDMTYgMTYuMzQzMiAxNy4zNDMxIDE1LjAwMDEgMTkgMTUuMDAwMUMyMC42NTY5IDE1LjAwMDEgMjIgMTYuMzQzMiAyMiAxOC4wMDAxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const PackageSearchIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 12.0001V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37368 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37368 17.2077 3.52346 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L13 21.4445M7.5 4.50008L16.5 9.50008M22 21.5001L21 20.5001M22 18.0001C22 19.6569 20.6569 21.0001 19 21.0001C17.3431 21.0001 16 19.6569 16 18.0001C16 16.3432 17.3431 15.0001 19 15.0001C20.6569 15.0001 22 16.3432 22 18.0001Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PackageSearchIcon.displayName = 'PackageSearchIcon';
