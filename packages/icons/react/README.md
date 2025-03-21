# @untitled-theme/icons-react

[Untitled UI](<https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=3463-407484&mode=design&t=oOV4Ezg1JTNhN3ec-0>) icons for React.

![Screenshot](https://raw.githubusercontent.com/calvo-jp/untitled-theme/main/assets/screenshots/icons-react-vscode-jsdoc-preview.png)

## Installation

```bash
npm install @untitled-theme/icons-react
```

## Usage

```jsx
import {Rocket01Icon} from '@untitled-theme/icons-react';

function Component() {
  return <Rocket01Icon />;
}
```

or

```jsx
import Rocket01Icon from '@untitled-theme/icons-react/Rocket01Icon';

function Component() {
  return <Rocket01Icon />;
}
```

If you are using [Next.js](https://nextjs.org/), we recommend adding it to `optimizePackageImports` for performance. You can read more about it [here](https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports).

```js
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['@untitled-theme/icons-react'],
  },
};
```

See all icons [here](https://untitled-theme-docs.vercel.app)
