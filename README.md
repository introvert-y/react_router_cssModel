This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

安装依赖

### `npm start`

启动项目（<http://localhost:3000>） .<br>

### tip

该项目解决 eslint 和 prettier 的方式为，vscode 自动保存时使用 eslint 规则，然后在 pre-commit 里先走 prettier 的规则，再走 eslint --fix。
考虑的点在于：如果在自动保存的时候，同时启用两个规则，有些规则会导致冲突。eslint 主要是为了处理某些 js 规范，prettier 是为了代码简洁，美观。如果先走 eslint 再走 prettier，会导致某些冲突。反之则不会，对于开发来讲 eslint 的优先级是大于 prettier 的
