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

#npm切换源工具
npm install -g nrm --registry=https://registry.npm.taobao.org
nrm ls

#pm2 - 强大的管理程序
npm install -g pm2 --registry=https://registry.npm.taobao.org
```