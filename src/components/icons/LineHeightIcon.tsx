import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTNIMTVNNyAxN0wxMS4yNzE3IDcuNjAyMjRDMTEuNTAzMSA3LjA5MzIzIDExLjYxODggNi44Mzg3MiAxMS43NzkxIDYuNzU5NzZDMTEuOTE4NCA2LjY5MTE1IDEyLjA4MTYgNi42OTExNSAxMi4yMjA5IDYuNzU5NzZDMTIuMzgxMiA2LjgzODcyIDEyLjQ5NjkgNy4wOTMyMyAxMi43MjgzIDcuNjAyMjRMMTcgMTdNMjEgMjFIM00yMSAzSDMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const LineHeightIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M9 13H15M7 17L11.2717 7.60224C11.5031 7.09323 11.6188 6.83872 11.7791 6.75976C11.9184 6.69115 12.0816 6.69115 12.2209 6.75976C12.3812 6.83872 12.4969 7.09323 12.7283 7.60224L17 17M21 21H3M21 3H3"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

LineHeightIcon.displayName = 'LineHeightIcon';
