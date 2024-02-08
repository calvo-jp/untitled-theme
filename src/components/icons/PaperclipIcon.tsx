import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjE1MjUgMTAuODk5NUwxMi4xMzY5IDE5LjkxNTFDMTAuMDg2NiAyMS45NjUzIDYuNzYyNSAyMS45NjUzIDQuNzEyMjUgMTkuOTE1MUMyLjY2MiAxNy44NjQ4IDIuNjYyIDE0LjU0MDcgNC43MTIyNSAxMi40OTA0TDEzLjcyNzkgMy40NzQ4M0MxNS4wOTQ3IDIuMTA4IDE3LjMxMDggMi4xMDggMTguNjc3NiAzLjQ3NDgzQzIwLjA0NDQgNC44NDE2NyAyMC4wNDQ0IDcuMDU3NzUgMTguNjc3NiA4LjQyNDU4TDEwLjAxNTYgMTcuMDg2NkM5LjMzMjEzIDE3Ljc3MDEgOC4yMjQwOSAxNy43NzAxIDcuNTQwNjggMTcuMDg2NkM2Ljg1NzI2IDE2LjQwMzIgNi44NTcyNiAxNS4yOTUyIDcuNTQwNjggMTQuNjExOEwxNS4xNDIxIDcuMDEwMzciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const PaperclipIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.7625 21.9653 4.71225 19.9151C2.662 17.8648 2.662 14.5407 4.71225 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0444 4.84167 20.0444 7.05775 18.6776 8.42458L10.0156 17.0866C9.33213 17.7701 8.22409 17.7701 7.54068 17.0866C6.85726 16.4032 6.85726 15.2952 7.54068 14.6118L15.1421 7.01037"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PaperclipIcon.displayName = "PaperclipIcon";
