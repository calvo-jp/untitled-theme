import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDZDMTIuNTUyMyA2IDEzIDUuNTUyMjggMTMgNUMxMyA0LjQ0NzcyIDEyLjU1MjMgNCAxMiA0QzExLjQ0NzcgNCAxMSA0LjQ0NzcyIDExIDVDMTEgNS41NTIyOCAxMS40NDc3IDYgMTIgNloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxM0MxMi41NTIzIDEzIDEzIDEyLjU1MjMgMTMgMTJDMTMgMTEuNDQ3NyAxMi41NTIzIDExIDEyIDExQzExLjQ0NzcgMTEgMTEgMTEuNDQ3NyAxMSAxMkMxMSAxMi41NTIzIDExLjQ0NzcgMTMgMTIgMTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgMjBDMTIuNTUyMyAyMCAxMyAxOS41NTIzIDEzIDE5QzEzIDE4LjQ0NzcgMTIuNTUyMyAxOCAxMiAxOEMxMS40NDc3IDE4IDExIDE4LjQ0NzcgMTEgMTlDMTEgMTkuNTUyMyAxMS40NDc3IDIwIDEyIDIwWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE5IDZDMTkuNTUyMyA2IDIwIDUuNTUyMjggMjAgNUMyMCA0LjQ0NzcyIDE5LjU1MjMgNCAxOSA0QzE4LjQ0NzcgNCAxOCA0LjQ0NzcyIDE4IDVDMTggNS41NTIyOCAxOC40NDc3IDYgMTkgNloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOSAxM0MxOS41NTIzIDEzIDIwIDEyLjU1MjMgMjAgMTJDMjAgMTEuNDQ3NyAxOS41NTIzIDExIDE5IDExQzE4LjQ0NzcgMTEgMTggMTEuNDQ3NyAxOCAxMkMxOCAxMi41NTIzIDE4LjQ0NzcgMTMgMTkgMTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkgMjBDMTkuNTUyMyAyMCAyMCAxOS41NTIzIDIwIDE5QzIwIDE4LjQ0NzcgMTkuNTUyMyAxOCAxOSAxOEMxOC40NDc3IDE4IDE4IDE4LjQ0NzcgMTggMTlDMTggMTkuNTUyMyAxOC40NDc3IDIwIDE5IDIwWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUgNkM1LjU1MjI4IDYgNiA1LjU1MjI4IDYgNUM2IDQuNDQ3NzIgNS41NTIyOCA0IDUgNEM0LjQ0NzcyIDQgNCA0LjQ0NzcyIDQgNUM0IDUuNTUyMjggNC40NDc3MiA2IDUgNloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDEzQzUuNTUyMjggMTMgNiAxMi41NTIzIDYgMTJDNiAxMS40NDc3IDUuNTUyMjggMTEgNSAxMUM0LjQ0NzcyIDExIDQgMTEuNDQ3NyA0IDEyQzQgMTIuNTUyMyA0LjQ0NzcyIDEzIDUgMTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSAyMEM1LjU1MjI4IDIwIDYgMTkuNTUyMyA2IDE5QzYgMTguNDQ3NyA1LjU1MjI4IDE4IDUgMThDNC40NDc3MiAxOCA0IDE4LjQ0NzcgNCAxOUM0IDE5LjU1MjMgNC40NDc3MiAyMCA1IDIwWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const DotsGridIcon = React.forwardRef<
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
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

DotsGridIcon.displayName = "DotsGridIcon";
