import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMC43NDI5IDUuMDkyMzJDMTEuMTQ5NCA1LjAzMjIzIDExLjU2ODYgNSAxMi4wMDA0IDVDMTcuMTA1NCA1IDIwLjQ1NTMgOS41MDQ4NCAyMS41ODA3IDExLjI4NjhDMjEuNzE2OSAxMS41MDI1IDIxLjc4NSAxMS42MTAzIDIxLjgyMzEgMTEuNzc2N0MyMS44NTE4IDExLjkwMTYgMjEuODUxNyAxMi4wOTg3IDIxLjgyMzEgMTIuMjIzNkMyMS43ODQ5IDEyLjM4OTkgMjEuNzE2NCAxMi40OTg1IDIxLjU3OTIgMTIuNzE1NkMyMS4yNzkzIDEzLjE5MDEgMjAuODIyMiAxMy44NTcxIDIwLjIxNjUgMTQuNTgwNU02LjcyNDMyIDYuNzE1MDRDNC41NjIyNSA4LjE4MTcgMy4wOTQ0NSAxMC4yMTk0IDIuNDIxMTEgMTEuMjg1M0MyLjI4NDI4IDExLjUwMTkgMi4yMTU4NyAxMS42MTAyIDIuMTc3NzQgMTEuNzc2NUMyLjE0OTEgMTEuOTAxNCAyLjE0OTA5IDEyLjA5ODQgMi4xNzc3MSAxMi4yMjM0QzIuMjE1ODMgMTIuMzg5NyAyLjI4MzkzIDEyLjQ5NzUgMi40MjAxMyAxMi43MTMyQzMuNTQ1NTQgMTQuNDk1MiA2Ljg5NTQxIDE5IDEyLjAwMDQgMTlDMTQuMDU4OCAxOSAxNS44MzE5IDE4LjI2NzYgMTcuMjg4OCAxNy4yNzY2TTMuMDAwNDIgM0wyMS4wMDA0IDIxTTkuODc5MSA5Ljg3ODY4QzkuMzM2MiAxMC40MjE2IDkuMDAwNDIgMTEuMTcxNiA5LjAwMDQyIDEyQzkuMDAwNDIgMTMuNjU2OSAxMC4zNDM2IDE1IDEyLjAwMDQgMTVDMTIuODI4OCAxNSAxMy41Nzg4IDE0LjY2NDIgMTQuMTIxNyAxNC4xMjEzIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const EyeOffIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

EyeOffIcon.displayName = 'EyeOffIcon';
