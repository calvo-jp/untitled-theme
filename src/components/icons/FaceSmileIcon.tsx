import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTRDOCAxNCA5LjUgMTYgMTIgMTZDMTQuNSAxNiAxNiAxNCAxNiAxNE0xNSA5SDE1LjAxTTkgOUg5LjAxTTIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMlpNMTUuNSA5QzE1LjUgOS4yNzYxNCAxNS4yNzYxIDkuNSAxNSA5LjVDMTQuNzIzOSA5LjUgMTQuNSA5LjI3NjE0IDE0LjUgOUMxNC41IDguNzIzODYgMTQuNzIzOSA4LjUgMTUgOC41QzE1LjI3NjEgOC41IDE1LjUgOC43MjM4NiAxNS41IDlaTTkuNSA5QzkuNSA5LjI3NjE0IDkuMjc2MTQgOS41IDkgOS41QzguNzIzODYgOS41IDguNSA5LjI3NjE0IDguNSA5QzguNSA4LjcyMzg2IDguNzIzODYgOC41IDkgOC41QzkuMjc2MTQgOC41IDkuNSA4LjcyMzg2IDkuNSA5WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const FaceSmileIcon = React.forwardRef<
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
        d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FaceSmileIcon.displayName = "FaceSmileIcon";
