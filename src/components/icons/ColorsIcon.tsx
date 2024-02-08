import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjQ3MjJDMTMuMDYxNSAyMS40MjIzIDE0LjQ2MzMgMjIgMTYgMjJDMTkuMzEzNyAyMiAyMiAxOS4zMTM3IDIyIDE2QzIyIDEzLjIzMzEgMjAuMTI3MSAxMC45MDM2IDE3LjU3OTggMTAuMjEwMk02LjQyMDE4IDEwLjIxMDJDMy44NzI5MyAxMC45MDM2IDIgMTMuMjMzMSAyIDE2QzIgMTkuMzEzNyA0LjY4NjI5IDIyIDggMjJDMTEuMzEzNyAyMiAxNCAxOS4zMTM3IDE0IDE2QzE0IDE1LjIxOTUgMTMuODUxIDE0LjQ3MzggMTMuNTc5OCAxMy43ODk4TTE4IDhDMTggMTEuMzEzNyAxNS4zMTM3IDE0IDEyIDE0QzguNjg2MjkgMTQgNiAxMS4zMTM3IDYgOEM2IDQuNjg2MjkgOC42ODYyOSAyIDEyIDJDMTUuMzEzNyAyIDE4IDQuNjg2MjkgMTggOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const ColorsIcon = React.forwardRef<
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
        d="M12 20.4722C13.0615 21.4223 14.4633 22 16 22C19.3137 22 22 19.3137 22 16C22 13.2331 20.1271 10.9036 17.5798 10.2102M6.42018 10.2102C3.87293 10.9036 2 13.2331 2 16C2 19.3137 4.68629 22 8 22C11.3137 22 14 19.3137 14 16C14 15.2195 13.851 14.4738 13.5798 13.7898M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ColorsIcon.displayName = "ColorsIcon";
