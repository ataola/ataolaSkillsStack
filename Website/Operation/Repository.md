## 相关镜像站仓库

#### python

```
#whl文件下载
https://www.lfd.uci.edu/~gohlke/pythonlibs/

#pip国内源

#阿里
http://mirrors.aliyun.com/pypi/simple/
#豆瓣
https://pypi.douban.com/simple
#清华大学
https://pypi.tuna.tsinghua.edu.cn/simple
#中国科学技术大学
https://pypi.mirrors.ustc.edu.cn/simple/
#华中理工大学
http://pypi.hustunique.com/
#山东理工大学
http://pypi.sdutlinux.org/

#临时使用
pip install -i [镜像地址] [安装模块]

#永久使用
#Linux
vim ~/.pip/pip.conf
i ==> insert
content:

[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=mirrors.aliyun.com

ESC ==> exit insert mode

:wq  ==> save and exit

#Win

新建 C:\Users\your account\pip\pip.ini

follow Linux Content

```

#### Node.JS

```
#npm国内镜像(淘宝、华为、cnpmjs)
http://registry.npm.taobao.org/
https://mirrors.huaweicloud.com/repository/npm/
https://cnpmjs.org/

#临时使用
npm --registry [registry] install express

#永久使用
npm config set registry [registry]

#也可以这样写
#Linux

vim ~/.npmrc
i ==> insert
registry = http://registry.cnpmjs.org
esc ==> exit insert mode
:wq ==> save and exit

win上也是类似的

#cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

#详细配置
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/mirrors/node \
--userconfig=$HOME/.cnpmrc"

#Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/mirrors/node \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc

#nvm配置
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

#也可以
vim .bash_profile
i ==> insert
NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
esc ==> exit insert mode
source .bash_profile


```

#### 微软

```
#MSDN,我告诉你
https://msdn.itellyou.cn/
http://www.msdn.hk/
http://msdn3.com/index.html
```

#### 企业镜像站

```
#搜狐(不推荐)
http://mirrors.sohu.com/  
#网易
https://mirrors.163.com/
#华为
https://mirrors.huaweicloud.com/
#阿里
https://opsx.alibaba.com/mirror
#腾讯
https://mirrors.cloud.tencent.com/
#首都在线科技股份有限公司
http://mirrors.yun-idc.com/

```

#### 大学镜像站

```
#浙江大学
http://mirrors.zju.edu.cn/
#清华大学
http://mirrors.tuna.tsinghua.edu.cn/
#华中科技大学
http://mirror.hust.edu.cn/
#北京理工大学
http://mirror.bit.edu.cn/web/
#兰州大学
http://mirror.lzu.edu.cn/
#中国科学技术大学
http://mirrors.ustc.edu.cn/

#大连东软信息学院网络中心(可以下eclipse) 
http://mirrors.neusoft.edu.cn/

```

#### 工具下载

```
#gitlab
https://about.gitlab.com/downloads/

#jenkins
http://mirrors.jenkins-ci.org/war/latest/jenkins.war
java -jar jenkins.war  || nohup java -jar jenkins.war &

```


#### Ubuntu换国内镜像
```
cp /etc/apt/sources.list /etc/apt/sources.list.backup

vim /etc/apt/sources.list

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

sudo apt-get update
sudo apt-get upgrade


这里如果不想用清华的，中科大，阿里都可以

##中科大源
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

```