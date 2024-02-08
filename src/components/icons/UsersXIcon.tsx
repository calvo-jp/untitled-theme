import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMTZMMjEuNSAyMU0yMS41IDE2TDE2LjUgMjFNMTUuNSAzLjI5MDc2QzE2Ljk2NTkgMy44ODQxNSAxOCA1LjMyMTMxIDE4IDdDMTggOC42Nzg2OSAxNi45NjU5IDEwLjExNTkgMTUuNSAxMC43MDkyTTEyIDE1SDhDNi4xMzYyMyAxNSA1LjIwNDM1IDE1IDQuNDY5MjcgMTUuMzA0NUMzLjQ4OTE1IDE1LjcxMDUgMi43MTA0NiAxNi40ODkyIDIuMzA0NDggMTcuNDY5M0MyIDE4LjIwNDQgMiAxOS4xMzYyIDIgMjFNMTMuNSA3QzEzLjUgOS4yMDkxNCAxMS43MDkxIDExIDkuNSAxMUM3LjI5MDg2IDExIDUuNSA5LjIwOTE0IDUuNSA3QzUuNSA0Ljc5MDg2IDcuMjkwODYgMyA5LjUgM0MxMS43MDkxIDMgMTMuNSA0Ljc5MDg2IDEzLjUgN1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const UsersXIcon = React.forwardRef<
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
        d="M16.5 16L21.5 21M21.5 16L16.5 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UsersXIcon.displayName = "UsersXIcon";
