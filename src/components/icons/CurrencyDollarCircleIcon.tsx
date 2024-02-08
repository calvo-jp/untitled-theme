import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNSAxNC42NjY3QzguNSAxNS45NTUzIDkuNTQ0NjcgMTcgMTAuODMzMyAxN0gxM0MxNC4zODA3IDE3IDE1LjUgMTUuODgwNyAxNS41IDE0LjVDMTUuNSAxMy4xMTkzIDE0LjM4MDcgMTIgMTMgMTJIMTFDOS42MTkyOSAxMiA4LjUgMTAuODgwNyA4LjUgOS41QzguNSA4LjExOTI5IDkuNjE5MjkgNyAxMSA3SDEzLjE2NjdDMTQuNDU1MyA3IDE1LjUgOC4wNDQ2NyAxNS41IDkuMzMzMzNNMTIgNS41VjdNMTIgMTdWMTguNU0yMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJDNi40NzcxNSAyMiAyIDE3LjUyMjggMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const CurrencyDollarCircleIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path
        d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CurrencyDollarCircleIcon.displayName = 'CurrencyDollarCircleIcon';
