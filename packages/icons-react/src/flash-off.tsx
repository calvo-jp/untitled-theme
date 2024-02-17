import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik04IDhMNC4wOTM0NiAxMi42ODc5QzMuNzQ0NjUgMTMuMTA2NCAzLjU3MDI0IDEzLjMxNTcgMy41Njc1OCAxMy40OTI1QzMuNTY1MjYgMTMuNjQ2MSAzLjYzMzczIDEzLjc5MjMgMy43NTMyNiAxMy44ODg5QzMuODkwNzUgMTQgNC4xNjMxOCAxNCA0LjcwODAzIDE0SDEyTDExIDIyTDE2IDE2TTE1LjY1IDEwSDE5LjI5MkMxOS44MzY4IDEwIDIwLjEwOTMgMTAgMjAuMjQ2NyAxMC4xMTExQzIwLjM2NjMgMTAuMjA3NyAyMC40MzQ3IDEwLjM1MzkgMjAuNDMyNCAxMC41MDc1QzIwLjQyOTggMTAuNjg0MyAyMC4yNTU0IDEwLjg5MzYgMTkuOTA2NSAxMS4zMTIxTDE4LjU1MDIgMTIuOTM5N00xMC41NzI4IDQuOTEyNjVMMTMgMkwxMi40MDAyIDYuNzk3NzFNMjEgMjFMMyAzIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const FlashOffIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M8 8L4.09346 12.6879C3.74465 13.1064 3.57024 13.3157 3.56758 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L16 16M15.65 10H19.292C19.8368 10 20.1093 10 20.2467 10.1111C20.3663 10.2077 20.4347 10.3539 20.4324 10.5075C20.4298 10.6843 20.2554 10.8936 19.9065 11.3121L18.5502 12.9397M10.5728 4.91265L13 2L12.4002 6.79771M21 21L3 3"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

FlashOffIcon.displayName = 'FlashOffIcon';
