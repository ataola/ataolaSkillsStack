## Python

> 学习Python的相关知识

&nbsp;&nbsp;**Python3的编译安装:**
```
#安装依赖
yum -y install git nss curl
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake
yum -y install zlib*
yum -y install tree 
yum -y install git nss curl
yum install openssl-devel -y

#编译安装python3.6
wget http://www.python.org/ftp/python/3.6.5/Python-3.6.5.tar.xz 
tar xf Python3.6.5.tar.xz 
cd Python3.6.5
./configure --with-ssl --prefix=/usr/local --with-ensurepip=install --enable-shared LDFLAGS="-Wl,-rpath /usr/local/lib" 
make && make altinstall

#查看包管理工具的路径
which pip3.6 

#创建软连接
ln -s /usr/local/bin/pip3.6 /usr/local/bin/pip

```
&nbsp;&nbsp;**Python3的使用:**
```
#安装虚拟环境工具
pip install virtualenv

#创建一个虚拟环境
virtualenv -p /usr/local/bin/python3.6 .py3-a2.5-env 


```