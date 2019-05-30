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

```
