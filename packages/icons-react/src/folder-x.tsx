import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMyA3TDExLjg4NDUgNC43Njg5MkMxMS41NjM0IDQuMTI2OCAxMS40MDI5IDMuODA1NzMgMTEuMTYzNCAzLjU3MTE2QzEwLjk1MTYgMy4zNjM3MyAxMC42OTYzIDMuMjA1OTcgMTAuNDE2MSAzLjEwOTMxQzEwLjA5OTIgMyA5Ljc0MDIxIDMgOS4wMjIyOSAzSDUuMkM0LjA3OTkgMyAzLjUxOTg0IDMgMy4wOTIwMiAzLjIxNzk5QzIuNzE1NjkgMy40MDk3MyAyLjQwOTczIDMuNzE1NjkgMi4yMTc5OSA0LjA5MjAyQzIgNC41MTk4NCAyIDUuMDc5OSAyIDYuMlY3TTIgN0gxNy4yQzE4Ljg4MDIgNyAxOS43MjAyIDcgMjAuMzYyIDcuMzI2OThDMjAuOTI2NSA3LjYxNDYgMjEuMzg1NCA4LjA3MzU0IDIxLjY3MyA4LjYzODAzQzIyIDkuMjc5NzYgMjIgMTAuMTE5OCAyMiAxMS44VjE2LjJDMjIgMTcuODgwMiAyMiAxOC43MjAyIDIxLjY3MyAxOS4zNjJDMjEuMzg1NCAxOS45MjY1IDIwLjkyNjUgMjAuMzg1NCAyMC4zNjIgMjAuNjczQzE5LjcyMDIgMjEgMTguODgwMiAyMSAxNy4yIDIxSDYuOEM1LjExOTg0IDIxIDQuMjc5NzYgMjEgMy42MzgwMyAyMC42NzNDMy4wNzM1NCAyMC4zODU0IDIuNjE0NiAxOS45MjY1IDIuMzI2OTggMTkuMzYyQzIgMTguNzIwMiAyIDE3Ljg4MDIgMiAxNi4yVjdaTTkuNSAxMS41TDE0LjUgMTYuNU0xNC41IDExLjVMOS41IDE2LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const FolderXIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM9.5 11.5L14.5 16.5M14.5 11.5L9.5 16.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

FolderXIcon.displayName = 'FolderXIcon';
