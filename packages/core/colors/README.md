# @untitled-theme/colors

[Untitled UI](<https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=3463-407484&mode=design&t=oOV4Ezg1JTNhN3ec-0>) colors

## Installation

```bash
npm install @untitled-theme/colors
```

## Usage

Using [Tailwind](https://tailwindcss.com/):

```js
// tailwind.config.js
import colors from '@untitled-theme/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors,
    },

    // 👇🏽 or this, to remove tailwind's default colors and use only untitled ui's
    colors,
  },
};
```

Using [Panda CSS](https://panda-css.com/):

```js
// panda.config.js
import colors from '@untitled-theme/colors/panda';
import {defineConfig} from '@pandacss/dev';

export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors,
      },
    },
  },
});
```

Using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties):

```js
// layout.jsx
import colors from '@untitled-theme/colors/vars';

export default function RootLayout({children}) {
  return (
    <html style={colors}>
      <body>{children}</body>
    </html>
  );
}
```

See all colors [here](https://untitled-theme-docs.vercel.app/colors)
