## npm script

> 一些关于 npm script的学习与配置

&nbsp;&nbsp;**npm init的配置：**
```
npm config set init.author.email "zjt613@gmail.com"
npm config set init.author.name "jiangtaozheng"
npm config set init.author.url "http://github.com/ataola"
npm config set init.license "MIT"
npm config set init.version "0.0.1"

# npm init -f 可以跳过问答环节
```

&nbsp;&nbsp;**eslint的配置：**

```
#第一步 初始化项目
npm init

#第二步 在index.js书写测试代码
const str = 'AAAA';
function fn(){
    console.log('BBBB');
}

#第三步 安装ESlint添加到 devDependencies
npm install eslint -D

#初始化 eslint 配置
./node_modules/.bin/eslint --init

#根目录多了.eslintrc.js 配置文件
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};

#在package.json里面添加eslint命令
{
  "scripts": {
    "eslint": "eslint *.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}

#执行命令
npm run eslint

#window上命令行兼容不好，用git bash

#多条命令：https://github.com/mysticatea/npm-run-all/blob/HEAD/docs/npm-run-all.md
```