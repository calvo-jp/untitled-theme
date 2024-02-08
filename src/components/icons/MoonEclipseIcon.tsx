import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjAwMTcgNi4wMDAyMkMyMi42NjY3IDkuNTQ1MDUgMjIuNjY2MSAxNC40NTc4IDIwIDE4LjAwMjFNMTIgMjJDMTMuNTcxMSAyMiAxNS4wNTc1IDIxLjYzNzcgMTYuMzgwMyAyMC45OTIxQzE2LjI1NDIgMjAuOTk3NCAxNi4xMjc0IDIxIDE2IDIxQzExLjAyOTQgMjEgNyAxNi45NzA2IDcgMTJDNyA3LjAyOTQ0IDExLjAyOTQgMyAxNiAzQzE2LjEyNzQgMyAxNi4yNTQyIDMuMDAyNjUgMTYuMzgwMyAzLjAwNzg5QzE1LjA1NzUgMi4zNjIyOSAxMy41NzExIDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const MoonEclipseIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M20.0017 6.00022C22.6667 9.54505 22.6661 14.4578 20 18.0021M12 22C13.5711 22 15.0575 21.6377 16.3803 20.9921C16.2542 20.9974 16.1274 21 16 21C11.0294 21 7 16.9706 7 12C7 7.02944 11.0294 3 16 3C16.1274 3 16.2542 3.00265 16.3803 3.00789C15.0575 2.36229 13.5711 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

MoonEclipseIcon.displayName = 'MoonEclipseIcon';
