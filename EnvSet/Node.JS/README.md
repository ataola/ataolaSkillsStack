## Node.JS

> 学习Node.JS的相关知识

&nbsp;&nbsp;**Node.JS的编译安装:**
```
#不想编译安装的
Centos用yum， Ubuntu用apt-get install

#编译安装开始
官网下载地址: https://nodejs.org/dist/latest/
wget https://nodejs.org/dist/latest/node-v12.4.0-linux-x64.tar.gz
tar xvzf node-v12.4.0-linux-x64.tar.gz -C /opt
ln -s /opt/node-v12.4.0-linux-x64/bin/node /usr/local/bin/node
ln -s /opt/node-v12.4.0-linux-x64/bin/npm /usr/local/bin/npm

#安装cnpm与配置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
ln -s /opt/node-v12.4.0-linux-x64/bin/cnpm /usr/local/bin/cnpm

#npm - 切换源工具
npm install -g nrm --registry=https://registry.npm.taobao.org
nrm ls

#pm2 - 强大的管理程序
npm install -g pm2 --registry=https://registry.npm.taobao.org

#n - npm切换版本工具
npm i n -g

#nvm - node版本工具
推荐官方的安装方法：
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install node(默认是最新的稳定版)


```

&nbsp;&nbsp;**Node.JS的windows安装:**
```
#有啥好讲的，it click ,next 就走。。。。。。

默认设置

NODE_PATH: %AppData%\npm\node_modules ;

npm路径: C:\Users\your username\AppData\Roaming\npm

配置文件： .npmrc
国内贴这句： registry=https://registry.npm.taobao.org


```


&nbsp;&nbsp;**npm常用包以及镜像地址:**
```
C:\Users\ataola>nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/


C:\Users\ataola>


C:\Users\ataola>npm list -g --depth 0
C:\Users\ataola\AppData\Roaming\npm
+-- @vue/cli@3.8.2
+-- babel-cli@6.26.0
+-- bower@1.8.8
+-- chai@4.2.0
+-- cnpm@6.1.0
+-- create-react-app@3.0.1
+-- docsify-cli@4.3.0
+-- egg-init@1.17.1
+-- electron@5.0.2
+-- electron-packager@13.1.1
+-- express@4.16.4
+-- express-generator@4.16.1
+-- forever@1.0.0
+-- gitbook-cli@2.3.2
+-- grunt@1.0.4
+-- grunt-contrib-concat@1.0.1
+-- grunt-contrib-copy@1.0.0
+-- grunt-contrib-uglify@4.0.1
+-- grunt-css@0.5.4
+-- gulp@4.0.2
+-- hexo@3.8.0
+-- hexo-cli@1.1.0
+-- http-server@0.11.1
+-- istanbul@0.4.5
+-- jekyll@3.0.0-beta1
+-- jsdoc@3.6.1
+-- koa@2.7.0
+-- koa-cli@0.1.0
+-- koa-generator@1.1.16
+-- live-server@1.2.1
+-- mocha@6.1.4
+-- mock@0.1.1
+-- mockjs@1.0.1-beta3
+-- nodemon@1.19.0
+-- normalize.css@8.0.1
+-- nrm@1.2.1
+-- nuxt@2.7.1
+-- pm2@3.5.0
+-- react-native-cli@2.0.1
+-- request@2.88.0
+-- spdy@4.0.0
+-- supervisor@0.12.0
+-- typescript@3.5.2
+-- webpack@4.33.0
`-- webpack-cli@3.3.3


C:\Users\ataola>
```


