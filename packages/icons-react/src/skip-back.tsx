import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTlWNU0xNi40MDA1IDYuMDc5NjFMMTAuNTYxNyAxMC43NTA2QzEwLjAyNzkgMTEuMTc3NyA5Ljc2MDk3IDExLjM5MTIgOS42NjQzMyAxMS42NDkyQzkuNTc5NiAxMS44NzU0IDkuNTc5NiAxMi4xMjQ2IDkuNjY0MzMgMTIuMzUwOEM5Ljc2MDk3IDEyLjYwODggMTAuMDI3OSAxMi44MjIzIDEwLjU2MTcgMTMuMjQ5NEwxNi40MDA1IDE3LjkyMDRDMTcuMjMyNyAxOC41ODYxIDE3LjY0ODcgMTguOTE5IDE3Ljk5ODkgMTguOTE5NEMxOC4zMDM1IDE4LjkxOTcgMTguNTkxNiAxOC43ODEyIDE4Ljc4MTUgMTguNTQzMkMxOSAxOC4yNjk1IDE5IDE3LjczNjcgMTkgMTYuNjcxVjcuMzI5QzE5IDYuMjYzMyAxOSA1LjczMDQ1IDE4Ljc4MTUgNS40NTY3N0MxOC41OTE2IDUuMjE4NzYgMTguMzAzNSA1LjA4MDMgMTcuOTk4OSA1LjA4MDYzQzE3LjY0ODcgNS4wODEgMTcuMjMyNyA1LjQxMzg3IDE2LjQwMDUgNi4wNzk2MVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const SkipBackIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M5 19V5M16.4005 6.07961L10.5617 10.7506C10.0279 11.1777 9.76097 11.3912 9.66433 11.6492C9.5796 11.8754 9.5796 12.1246 9.66433 12.3508C9.76097 12.6088 10.0279 12.8223 10.5617 13.2494L16.4005 17.9204C17.2327 18.5861 17.6487 18.919 17.9989 18.9194C18.3035 18.9197 18.5916 18.7812 18.7815 18.5432C19 18.2695 19 17.7367 19 16.671V7.329C19 6.2633 19 5.73045 18.7815 5.45677C18.5916 5.21876 18.3035 5.0803 17.9989 5.08063C17.6487 5.081 17.2327 5.41387 16.4005 6.07961Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

SkipBackIcon.displayName = 'SkipBackIcon';
