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

&nbsp;&nbsp;**我的node配置：**
```
root: C:\Users\ataola\AppData\Roaming\nvm
path: C:\Program Files\nodejs
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/


C:\Users\ataola>nrm ls

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/



C:\Users\ataola>nrm use taobao
                         verb config Skipping project config: C:\Users\ataola/.npmrc. (matches userconfig)

   Registry has been set to: https://registry.npm.taobao.org/


C:\Users\ataola>


C:\Users\ataola>npm config list
; cli configs
metrics-registry = "https://registry.npm.taobao.org/"
scope = ""
user-agent = "npm/6.9.0 node/v12.4.0 win32 x64"

; userconfig C:\Users\ataola\.npmrc
home = "https://npm.taobao.org"
registry = "https://registry.npm.taobao.org/"

; node bin location = C:\Program Files\nodejs\node.exe
; cwd = C:\Users\ataola
; HOME = C:\Users\ataola
; "npm config ls -l" to show all defaults.


C:\Users\ataola>
```