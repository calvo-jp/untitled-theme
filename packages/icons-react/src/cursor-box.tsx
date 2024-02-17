import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMSA5LjVWNy44QzIxIDYuMTE5ODQgMjEgNS4yNzk3NiAyMC42NzMgNC42MzgwM0MyMC4zODU0IDQuMDczNTQgMTkuOTI2NSAzLjYxNDYgMTkuMzYyIDMuMzI2OThDMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yIDNINy44QzYuMTE5ODQgMyA1LjI3OTc2IDMgNC42MzgwMyAzLjMyNjk4QzQuMDczNTQgMy42MTQ2IDMuNjE0NiA0LjA3MzU0IDMuMzI2OTggNC42MzgwM0MzIDUuMjc5NzYgMyA2LjExOTg0IDMgNy44VjE2LjJDMyAxNy44ODAyIDMgMTguNzIwMiAzLjMyNjk4IDE5LjM2MkMzLjYxNDYgMTkuOTI2NSA0LjA3MzU0IDIwLjM4NTQgNC42MzgwMyAyMC42NzNDNS4yNzk3NiAyMSA2LjExOTg0IDIxIDcuOCAyMUg5LjVNMTcuMzg2MiAxNy43MTEzTDE1LjY4NzkgMjAuODY1M0MxNS40MTAzIDIxLjM4MDggMTUuMjcxNSAyMS42Mzg2IDE1LjEwMjMgMjEuNzA1OUMxNC45NTU1IDIxLjc2NDMgMTQuNzg5NiAyMS43NDk4IDE0LjY1NTEgMjEuNjY2OEMxNC41MDAxIDIxLjU3MTIgMTQuNDA4MSAyMS4yOTMzIDE0LjIyNDEgMjAuNzM3NUwxMS41MDA0IDEyLjUxMTNDMTEuMzM5MiAxMi4wMjQ1IDExLjI1ODYgMTEuNzgxMiAxMS4zMTY2IDExLjYxOTFDMTEuMzY3IDExLjQ3OCAxMS40NzggMTEuMzY3IDExLjYxOTEgMTEuMzE2NkMxMS43ODEyIDExLjI1ODYgMTIuMDI0NSAxMS4zMzkyIDEyLjUxMTMgMTEuNTAwNEwyMC43Mzc0IDE0LjIyNDFDMjEuMjkzMyAxNC40MDgyIDIxLjU3MTIgMTQuNTAwMiAyMS42NjY4IDE0LjY1NTFDMjEuNzQ5OCAxNC43ODk3IDIxLjc2NDIgMTQuOTU1NSAyMS43MDU4IDE1LjEwMjRDMjEuNjM4NiAxNS4yNzE1IDIxLjM4MDggMTUuNDEwMyAyMC44NjUyIDE1LjY4NzlMMTcuNzExMyAxNy4zODYyQzE3LjYzMjggMTcuNDI4NSAxNy41OTM1IDE3LjQ0OTcgMTcuNTU5MSAxNy40NzY4QzE3LjUyODYgMTcuNTAxIDE3LjUwMSAxNy41Mjg2IDE3LjQ3NjggMTcuNTU5MUMxNy40NDk3IDE3LjU5MzUgMTcuNDI4NSAxNy42MzI4IDE3LjM4NjIgMTcuNzExM1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const CursorBoxIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M21 9.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9.5M17.3862 17.7113L15.6879 20.8653C15.4103 21.3808 15.2715 21.6386 15.1023 21.7059C14.9555 21.7643 14.7896 21.7498 14.6551 21.6668C14.5001 21.5712 14.4081 21.2933 14.2241 20.7375L11.5004 12.5113C11.3392 12.0245 11.2586 11.7812 11.3166 11.6191C11.367 11.478 11.478 11.367 11.6191 11.3166C11.7812 11.2586 12.0245 11.3392 12.5113 11.5004L20.7374 14.2241C21.2933 14.4082 21.5712 14.5002 21.6668 14.6551C21.7498 14.7897 21.7642 14.9555 21.7058 15.1024C21.6386 15.2715 21.3808 15.4103 20.8652 15.6879L17.7113 17.3862C17.6328 17.4285 17.5935 17.4497 17.5591 17.4768C17.5286 17.501 17.501 17.5286 17.4768 17.5591C17.4497 17.5935 17.4285 17.6328 17.3862 17.7113Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CursorBoxIcon.displayName = 'CursorBoxIcon';
