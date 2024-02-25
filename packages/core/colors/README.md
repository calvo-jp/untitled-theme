# @untitled-theme/colors

[Untitled UI](<https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=3463-407484&mode=design&t=oOV4Ezg1JTNhN3ec-0>) colors

## Installation

```bash
npm install @untitled-theme/colors
```

## Usage

```js
// tailwind.config.ts
import colors from '@untitled-theme/colors';
import type {Config} from 'tailwindcss';

const config: Config = {
	theme: {
		extend: {
			colors,
		},
	},
};

export default config;
```

for [Panda](https://panda-css.com/)

```js
// panda.config.ts
import colors from '@untitled-theme/colors/panda';
import {defineConfig} from '@pandacss/dev';

export const config = defineConfig({
  theme: {
    extend: {
      tokens: {
        colors,
      },
    },
  },
});
```
