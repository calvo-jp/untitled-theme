import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMSA0SDcuOEM2LjExOTg0IDQgNS4yNzk3NiA0IDQuNjM4MDMgNC4zMjY5OEM0LjA3MzU0IDQuNjE0NiAzLjYxNDYgNS4wNzM1NCAzLjMyNjk4IDUuNjM4MDNDMyA2LjI3OTc2IDMgNy4xMTk4NCAzIDguOFYxNEMzIDE0LjkzIDMgMTUuMzk1IDMuMTAyMjIgMTUuNzc2NUMzLjM3OTYyIDE2LjgxMTcgNC4xODgyNyAxNy42MjA0IDUuMjIzNTQgMTcuODk3OEM1LjYwNTA0IDE4IDYuMDcwMDMgMTggNyAxOFYyMC4zMzU1QzcgMjAuODY4NCA3IDIxLjEzNDggNy4xMDkyMyAyMS4yNzE2QzcuMjA0MjIgMjEuMzkwNiA3LjM0ODI3IDIxLjQ1OTkgNy41MDA1NCAyMS40NTk3QzcuNjc1NjMgMjEuNDU5NSA3Ljg4MzY3IDIxLjI5MzEgOC4yOTk3NiAyMC45NjAyTDEwLjY4NTIgMTkuMDUxOEMxMS4xNzI1IDE4LjY2MiAxMS40MTYyIDE4LjQ2NzEgMTEuNjg3NSAxOC4zMjg1QzExLjkyODIgMTguMjA1NSAxMi4xODQ0IDE4LjExNTYgMTIuNDQ5MiAxOC4wNjEzQzEyLjc0NzcgMTggMTMuMDU5NyAxOCAxMy42ODM3IDE4SDE1LjJDMTYuODgwMiAxOCAxNy43MjAyIDE4IDE4LjM2MiAxNy42NzNDMTguOTI2NSAxNy4zODU0IDE5LjM4NTQgMTYuOTI2NSAxOS42NzMgMTYuMzYyQzIwIDE1LjcyMDIgMjAgMTQuODgwMiAyMCAxMy4yVjEzTTIwLjEyMTMgMy44Nzg2OEMyMS4yOTI5IDUuMDUwMjUgMjEuMjkyOSA2Ljk0OTc1IDIwLjEyMTMgOC4xMjEzMkMxOC45NDk3IDkuMjkyODkgMTcuMDUwMyA5LjI5Mjg5IDE1Ljg3ODcgOC4xMjEzMkMxNC43MDcxIDYuOTQ5NzUgMTQuNzA3MSA1LjA1MDI1IDE1Ljg3ODcgMy44Nzg2OEMxNy4wNTAzIDIuNzA3MTEgMTguOTQ5NyAyLjcwNzExIDIwLjEyMTMgMy44Nzg2OFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const MessageNotificationSquareIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
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
        d="M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H15.2C16.8802 18 17.7202 18 18.362 17.673C18.9265 17.3854 19.3854 16.9265 19.673 16.362C20 15.7202 20 14.8802 20 13.2V13M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageNotificationSquareIcon.displayName = 'MessageNotificationSquareIcon';
