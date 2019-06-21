## Git

> Git的学习

&nbsp;&nbsp;**安装配置：**

```
git config --global user.name "your name "
git config --global user.email "your email"

#还有其他两个config的办法
git config --local
git config --system

```

&nbsp;&nbsp;**基于Centos的Gitlab-ce安装：**

```
#安装Gitlab组件
yum -y install curl policycoreutils openssh-server openssh-clients postfix

#配置yum仓库
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash

#启动postfix邮件服务

systemctl start postfix && systemctl enable postfix

#安装gitlab社区版一键安装包

yum install -y gitlab-ce 

遗憾的是我的阿里云postfix就是改了inet-interface 和 inet-protocols也没用
```

&nbsp;&nbsp;**问题汇总：**
```
Q1：江涛搭建了一个gitblit地址，然后机子坏了，重新部署了以后，IP改了，也就是之前那个不能用了，该怎么搞？

A1：答案看楼下
git remote rm origin #删除远程地址
git remote add origin http://192.168.6.26:8090/r/ataolaSkillsStack.git #更新远程地址
git push --set-upstream origin branchname #当前分支与远程分支进行关联
```