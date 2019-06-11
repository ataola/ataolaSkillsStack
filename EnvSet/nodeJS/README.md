## Node.JS环境搭建

>mac和win都差不多下载安装包然后一路next，win上介意的话改成非系统盘，linux非编译安装也简单的在CentOS下 yum install nodejs、在ubuntu下 apt-get install nodejs。如果是做测试的话，用nvm来管理node和npm的版本。

&nbsp;&nbsp;**环境安装搭建**
```
#编译安装
yum -y install gcc make gcc-c++ openssl-devel wget git
wget https://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
tar -zxvf node-v0.12.7.tar.gz
cd node-v0.12.7
./configure
make && make install

#安装nvm(https://github.com/creationix/nvm)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
安装nodejs (安装你喜欢的版本)
nvm install 0.12.7
该命令可见已安装所有版本
nvm ls
切换到指定的版本
nvm use 0.12.7

#yum	
yum -y install nodejs npm --enablerepo=epel

#docker	
FROM readytalk/nodejs

```

&nbsp;&nbsp;**npm切换国内镜像**

```
# 切换国内源----安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install hexo-cli -g

# 切换国内源----改为淘宝npm
npm config set registry https://registry.npm.taobao.org

# 查看源
npm config get registry
```

&nbsp;&nbsp;**npm常用命令**

```
#查看全局安装模块
npm list -g --depth 0

#全局安装模块
npm i xxx -g

#开发环境安装模块
npm i xxx --save-dev

```

&nbsp;&nbsp;**yarn换源**

```
#查看当前源
yarn config get registry
#设置淘宝镜像
yarn config set registry https://registry.npm.taobao.org
```

&nbsp;&nbsp;**npm常用模块**
```
C:\Users\ataola>npm list -g --depth 0
C:\Users\ataola\AppData\Roaming\npm
+-- bower@1.8.8
+-- cnpm@6.0.0
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
+-- jekyll@3.0.0-beta1
+-- jsdoc@3.6.1
+-- koa@2.7.0
+-- koa-cli@0.1.0
+-- koa-generator@1.1.16
+-- live-server@1.2.1
+-- mock@0.1.1
+-- mockjs@1.0.1-beta3
+-- nodemon@1.19.0
+-- normalize.css@8.0.1
+-- nuxt@2.7.1
+-- pm2@3.5.0
+-- react-native-cli@2.0.1
+-- request@2.88.0
+-- spdy@4.0.0
+-- supervisor@0.12.0
+-- vue-cli@2.9.6
+-- webpack@4.30.0
`-- yarn@1.16.0


C:\Users\ataola>
```