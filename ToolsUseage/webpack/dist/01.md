**关于webpack.config.js的配置：**

```js
const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production'
};
```

**关于打包输出：**

```powershell
D:\ataola_workspace\testJob>webpack
Hash: 17b824a9606fccddfbb6
Version: webpack 4.33.0
Time: 93ms
Built at: 2019-11-25 11:22:27
  Asset       Size  Chunks             Chunk Names
main.js  957 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 28 bytes {0} [built]

D:\ataola_workspace\testJob>
```


