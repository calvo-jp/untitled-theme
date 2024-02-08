import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTZMMTggMTZNNiAxNkM4LjIwOTE0IDE2IDEwIDE0LjIwOTEgMTAgMTJDMTAgOS43OTA4NiA4LjIwOTE0IDggNiA4QzMuNzkwODYgOCAyIDkuNzkwODYgMiAxMkMyIDE0LjIwOTEgMy43OTA4NiAxNiA2IDE2Wk0xOCAxNkMyMC4yMDkxIDE2IDIyIDE0LjIwOTEgMjIgMTJDMjIgOS43OTA4NiAyMC4yMDkxIDggMTggOEMxNS43OTA5IDggMTQgOS43OTA4NiAxNCAxMkMxNCAxNC4yMDkxIDE1Ljc5MDkgMTYgMTggMTZaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const VoicemailIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M6 16L18 16M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

VoicemailIcon.displayName = 'VoicemailIcon';
