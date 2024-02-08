import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTdMMTIgMTJWMjJMMTcuNDM5OCAxNy40NjY4TTEyIDdWMkwxOCA3TDE1LjA4MTcgOS40MzE5NE0yMSAyMUwzIDMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const BluetoothOffIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M6 17L12 12V22L17.4398 17.4668M12 7V2L18 7L15.0817 9.43194M21 21L3 3"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BluetoothOffIcon.displayName = 'BluetoothOffIcon';
