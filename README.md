## linters 
* [eslint ts](https://typescript-eslint.io/docs/linting/)
```shell
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
* eslintrc.js
```js
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: { //不使用其他格式化工具时使用自己的lint规则
      semi: [1, "always"],
      quotes: ["error", "single"],
    },
  };
  
```
---

* [prettier-eslint](https://prettier.io/docs/en/integrating-with-linters.html)
```shell
npm install --save-dev eslint-plugin-prettier # 因为使用了prettier，因此运行eslint检查时需要此依赖。但不需要配置，因为prettier管理着格式化，eslint负责代码检查
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier # 排除eslint和prettier规则冲突，更方便使用prettier规则
```
* eslintrc.js

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],//add prettier,用于解决prettier和eslint的格式冲突
  rules: {
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-depth': ['error', 4],
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-params': ['error', 3],
  },
  env: {
    node: true,
  },
};

```
* .eslintignore
```shell
dist
node_modules
.git*


```
---

* [stylelint-prettier](https://prettier.io/docs/en/integrating-with-linters.html)
```shell
npm install --save-dev stylelint 
npm uninstall --save-dev stylelint-config-prettier #用于stylelint和prettier冲突和使用prettier规则
npm install --save-dev stylelint-config-html #需要安装 postcss-html
npm install --save-dev postcss-html #解析html中style
npm install --save-dev postcss-less #解析less中style
```
* stylelintrc.json
```js
module.exports = {
  extends: ['stylelint-config-html', 'stylelint-config-standard', 'stylelint-config-prettier'], //共享配置
  overrides: [
    {//特定配置
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'block-no-empty': null,
        'no-descending-specificity': null,
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'block-no-empty': null,
      },
    },
  ],
  rules: {
    'block-no-empty': true,
    'no-empty-source': null,
  },
};

```

* prettier 配置
```js
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  proseWrap: 'never',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'off',
};

```
* gitlint
## 2.安装vscode插件并且配置prettier格式化
```json
设置——》搜索-》default format->prettier
```

## 3.package.json配置命令
```json
    "ng": "ng",
    "dev": "npm run lint && npm run lint-style && npm run start",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint-fix": "eslint --fix --ext .ts  src",
    "lint-style": "stylelint  **/*.{css,less,html}",
    "style-fix": "stylelint --fix  **/*.{css,less,html}",
    "prettier": "prettier --write ."
```

## 4.说明
*** 
eslint、stylelint分别检查js，css的语法问题，不设置格式问题。prettier统一的管理格式问题
***