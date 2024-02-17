import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMC41IDhWMTYuMkMyMC41IDE3Ljg4MDIgMjAuNSAxOC43MjAyIDIwLjE3MyAxOS4zNjJDMTkuODg1NCAxOS45MjY1IDE5LjQyNjUgMjAuMzg1NCAxOC44NjIgMjAuNjczQzE4LjIyMDIgMjEgMTcuMzgwMiAyMSAxNS43IDIxSDguM0M2LjYxOTg0IDIxIDUuNzc5NzYgMjEgNS4xMzgwMyAyMC42NzNDNC41NzM1NCAyMC4zODU0IDQuMTE0NiAxOS45MjY1IDMuODI2OTggMTkuMzYyQzMuNSAxOC43MjAyIDMuNSAxNy44ODAyIDMuNSAxNi4yVjhNMy42IDNIMjAuNEMyMC45NjAxIDMgMjEuMjQwMSAzIDIxLjQ1NCAzLjEwODk5QzIxLjY0MjIgMy4yMDQ4NyAyMS43OTUxIDMuMzU3ODUgMjEuODkxIDMuNTQ2MDFDMjIgMy43NTk5MiAyMiA0LjAzOTk1IDIyIDQuNlY2LjRDMjIgNi45NjAwNSAyMiA3LjI0MDA4IDIxLjg5MSA3LjQ1Mzk5QzIxLjc5NTEgNy42NDIxNSAyMS42NDIyIDcuNzk1MTMgMjEuNDU0IDcuODkxMDFDMjEuMjQwMSA4IDIwLjk2MDEgOCAyMC40IDhIMy42QzMuMDM5OTUgOCAyLjc1OTkyIDggMi41NDYwMSA3Ljg5MTAxQzIuMzU3ODUgNy43OTUxMyAyLjIwNDg3IDcuNjQyMTUgMi4xMDg5OSA3LjQ1Mzk5QzIgNy4yNDAwOCAyIDYuOTYwMDUgMiA2LjRWNC42QzIgNC4wMzk5NSAyIDMuNzU5OTIgMi4xMDg5OSAzLjU0NjAxQzIuMjA0ODcgMy4zNTc4NSAyLjM1Nzg1IDMuMjA0ODcgMi41NDYwMSAzLjEwODk5QzIuNzU5OTIgMyAzLjAzOTk1IDMgMy42IDNaTTkuNiAxMS41SDE0LjRDMTQuOTYwMSAxMS41IDE1LjI0MDEgMTEuNSAxNS40NTQgMTEuNjA5QzE1LjY0MjIgMTEuNzA0OSAxNS43OTUxIDExLjg1NzggMTUuODkxIDEyLjA0NkMxNiAxMi4yNTk5IDE2IDEyLjUzOTkgMTYgMTMuMVYxMy45QzE2IDE0LjQ2MDEgMTYgMTQuNzQwMSAxNS44OTEgMTQuOTU0QzE1Ljc5NTEgMTUuMTQyMiAxNS42NDIyIDE1LjI5NTEgMTUuNDU0IDE1LjM5MUMxNS4yNDAxIDE1LjUgMTQuOTYwMSAxNS41IDE0LjQgMTUuNUg5LjZDOS4wMzk5NSAxNS41IDguNzU5OTIgMTUuNSA4LjU0NjAxIDE1LjM5MUM4LjM1Nzg1IDE1LjI5NTEgOC4yMDQ4NyAxNS4xNDIyIDguMTA4OTkgMTQuOTU0QzggMTQuNzQwMSA4IDE0LjQ2MDEgOCAxMy45VjEzLjFDOCAxMi41Mzk5IDggMTIuMjU5OSA4LjEwODk5IDEyLjA0NkM4LjIwNDg3IDExLjg1NzggOC4zNTc4NSAxMS43MDQ5IDguNTQ2MDEgMTEuNjA5QzguNzU5OTIgMTEuNSA5LjAzOTk1IDExLjUgOS42IDExLjVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const BoxIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M20.5 8V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V8M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BoxIcon.displayName = 'BoxIcon';
