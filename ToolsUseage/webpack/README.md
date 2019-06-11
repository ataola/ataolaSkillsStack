## Webpack

> webpack的学习

&nbsp;&nbsp;**安装配置：**

```
#全局安装配置
npm install webpack webpack-cli -g 
#或者可以用yarn管理
yarn global add webpack webpack-cli

#开发环境的安装配置
npm install webpack -D 
#也可以用yarn 
yarn add webpack -D

#添加npm script
 "scripts": {
    "build": "webpack --mode production"
  },
  "devDependencies": {
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.12",
  }

#配置文件
module.exports = {
  entry: './src/index.js' 
}

// 上述配置等同于
module.exports = {
  entry: {
    main: './src/index.js'
  }
}

// 或者配置多个入口
module.exports = {
  entry: {
    foo: './src/page-foo.js',
    bar: './src/page-bar.js', 
    // ...
  }
}

// 使用数组来对多个文件进行打包
module.exports = {
  entry: {
    main: [
      './src/foo.js',
      './src/bar.js'
    ]
  }
}

#配置规则
module: {
  // ...
  rules: [
    {
      test: /\.jsx?/, // 匹配文件路径的正则表达式，通常我们都是匹配文件类型后缀
      include: [
        path.resolve(__dirname, 'src') // 指定哪些路径下的文件需要经过 loader 处理
      ],
      use: 'babel-loader', // 指定使用的 loader
    },
  ],
}

#压缩JS代码

const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyPlugin()
  ],
}

#输出文件

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}

// 或者多个入口生成不同文件
module.exports = {
  entry: {
    foo: './src/foo.js',
    bar: './src/bar.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
}

// 路径中使用 hash，每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存
module.exports = {
  // ...
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/[hash]',
  },
}

#在项目配置webpack-dev-server
npm install webpack-dev-server -g
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server --mode development"
}
```

&nbsp;&nbsp;**webpack.config.js模板：**
```
const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new UglifyPlugin(), 
    // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
    // 如果你留意了我们一开始直接使用 webpack 构建的结果，你会发现默认已经使用了 JS 代码压缩的插件
    // 这其实也是我们命令中的 --mode production 的效果，后续的小节会介绍 webpack 的 mode 参数
  ],
}
```

&nbsp;&nbsp;**期望Webpack帮我们做的事：**
```
构建我们发布需要的 HTML、CSS、JS 文件
使用 CSS 预处理器来编写样式
处理和压缩图片
使用 Babel 来支持 ES 新特性
本地提供静态服务以方便开发调试
```

&nbsp;&nbsp;**相关网站：**

[webpack-cli](https://github.com/webpack/webpack-cli) 

[uglifyjs-webpack-plugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)

[DefinePlugin](https://webpack.js.org/plugins/define-plugin/)

[ExtractTextWebpackPlugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/) 

[html-webpack-plugin](https://doc.webpack-china.org/plugins/html-webpack-plugin/)
[html-webpack-plugin/examples](https://github.com/jantimon/html-webpack-plugin/tree/master/examples)

[extract-text-webpack-plugin](https://doc.webpack-china.org/plugins/extract-text-webpack-plugin) 

[less-loader](https://doc.webpack-china.org/loaders/less-loader)

[file-loader](https://webpack.js.org/loaders/file-loader/)

[create-react-app](https://github.com/facebookincubator/create-react-app)   
[react-scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/README.md)
    
[angular/devkit/build-webpack](https://github.com/angular/devkit/blob/master/packages/angular_devkit/build_webpack/README.md)
[angular/devkit](https://github.com/angular/devkit) 
[webpack-configs](https://github.com/angular/devkit/tree/master/packages/angular_devkit/build_webpack/src/angular-cli-files/models/webpack-configs) 
    
[vue-cli](https://github.com/vuejs/vue-cli/)

[.babelrc](http://babeljs.io/docs/usage/babelrc/)

[webpack-dev-server](https://github.com/webpack/webpack-dev-server)