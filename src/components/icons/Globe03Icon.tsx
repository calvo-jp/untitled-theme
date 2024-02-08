import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTUgNCAxNS45MjI4IDguMjkyMDMgMTYgMTJDMTUuOTIyOCAxNS43MDggMTUgMjAgMTIgMjJNMTIgMkM5IDQgOC4wNzcyNSA4LjI5MjAzIDggMTJDOC4wNzcyNSAxNS43MDggOSAyMCAxMiAyMk0xMiAyQzYuNDc3MTUgMiAyIDYuNDc3MTUgMiAxMk0xMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyTTEyIDIyQzE3LjUyMjkgMjIgMjIgMTcuNTIyOCAyMiAxMk0xMiAyMkM2LjQ3NzE2IDIyIDIgMTcuNTIyOCAyIDEyTTIyIDEyQzIwIDE1IDE1LjcwOCAxNS45MjI4IDEyIDE2QzguMjkyMDMgMTUuOTIyOCA0IDE1IDIgMTJNMjIgMTJDMjAgOSAxNS43MDggOC4wNzcyNSAxMiA4QzguMjkyMDMgOC4wNzcyNSA0IDkgMiAxMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const Globe03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M12 2C15 4 15.9228 8.29203 16 12C15.9228 15.708 15 20 12 22M12 2C9 4 8.07725 8.29203 8 12C8.07725 15.708 9 20 12 22M12 2C6.47715 2 2 6.47715 2 12M12 2C17.5228 2 22 6.47715 22 12M12 22C17.5229 22 22 17.5228 22 12M12 22C6.47716 22 2 17.5228 2 12M22 12C20 15 15.708 15.9228 12 16C8.29203 15.9228 4 15 2 12M22 12C20 9 15.708 8.07725 12 8C8.29203 8.07725 4 9 2 12"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Globe03Icon.displayName = 'Globe03Icon';
