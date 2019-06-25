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

#配置yum仓库(不一定有用)
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash

#启动postfix邮件服务

systemctl start postfix && systemctl enable postfix

#安装gitlab社区版一键安装包

yum install -y gitlab-ce 

遗憾的是我的阿里云postfix就是改了inet-interface 和 inet-protocols也没用
Gitlab的下载地址： https://docs.gitlab.com/omnibus/manual_install.html
gitlab的一些命令： gitlab-ctl stop|start|restart|reconfigure|status

/etc/gitlab/gitlab.rb	主配置文件
/var/log/gitlab/	日志目录
/var/opt/gitlab/	各个服务的主目录
/var/opt/gitlab/git-data/repositories	GIT仓库数据目录

首次登录默认用户名密码
Username: root
Password: 5iveL!fe

自定义Gitlab目录并修改目录权限
mkdir –p /data/git-data
chown git:root /data
chown git:root /data/git-data
chmod 700 /data
chmod 700 /data/git-data

查看所有日志
gitlab-ctl tail
# 查看NGINX的访问日志
gitlab-ctl tail nginx/gitlab_access.log 
参考：https://docs.gitlab.com/omnibus/settings/logs.html

YUM源
官方源地址：https://about.gitlab.com/downloads/#centos6
清华大学镜像源：https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce
centos （内核7.x）https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7
centos （内核6.x）https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6

新建 /etc/yum.repos.d/gitlab_gitlab-ce.repo
内容如下：
 [gitlab-ce]
    name=Gitlab CE Repository
    baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/
    gpgcheck=0
    enabled=1

备份恢复

可以将此命令写入crontab，以实现定时备份
/usr/bin/gitlab-rake gitlab:backup:create
备份的数据会存储在/var/opt/gitlab/backups，用户通过自定义参数 gitlab_rails['backup_path']，改变默认值。

停止unicorn和sidekiq，保证数据库没有新的连接，不会有写数据情况
sudo gitlab-ctl stop unicorn
sudo gitlab-ctl stop sidekiq

进入备份目录进行恢复，1476900742为备份文件的时间戳
cd /var/opt/gitlab/backups
gitlab-rake gitlab:backup:restore BACKUP=1476905327
cd -

启动unicorn和sidekiq
sudo gitlab-ctl start unicorn
sudo gitlab-ctl start sidekiq

域名配置
external_url 'http://gitlab.zhijiangtao.xin:8888'
默认值就是8080。如果端口被占用，可将8080修改为其它（例如：9090）
unicorn['port'] = 8080

发送邮件配置
gitlab_rails['smtp_enable'] = true  
gitlab_rails['smtp_address'] = “smtp.exmail.qq.com”  
gitlab_rails['smtp_port'] = 25  
gitlab_rails['smtp_user_name'] = “admin@zhijiangtao.xin“  
gitlab_rails['smtp_password'] = "smtp password"  
gitlab_rails['smtp_authentication']= “plain"  
gitlab_rails['smtp_enable_starttls_auto']= true  
gitlab_rails['gitlab_email_from']= 'admin@zhijiangtao.xin'  
gitlab_rails['gitlab_email_reply_to']= ‘noreply@zhijiangtao.xin'  

```

&nbsp;&nbsp;**基于Centos的Jenkins安装：**

```
#安装（在阿里云主机上试了下 速度感人）
$wget -O /etc/yum.repos.d/jenkins.repo  http://pkg.jenkins.io/redhat/jenkins.repo
$rpm --import http://pkg.jenkins.io/redhat/jenkins.io.key 
$yum -y install jenkins

#修改配置文件 端口号和用户
vim  /etc/sysconfig/jenkins 
JENKINS_USER="root"
端口依据个人实际情况设定

#安装出错的解决办法

systemctl start jenkins
Job for jenkins.service failed because the control process exited with error code. See "systemctl status jenkins.service" and "journalctl -xe" for details.
systemctl status jenkins
● jenkins.service - LSB: Jenkins Automation Server
   Loaded: loaded (/etc/rc.d/init.d/jenkins; bad; vendor preset: disabled)
   Active: failed (Result: exit-code) since 一 2018-08-27 14:38:33 CST; 16s ago
     Docs: man:systemd-sysv-generator(8)
  Process: 20100 ExecStart=/etc/rc.d/init.d/jenkins start (code=exited, status=1/FAILURE)

6月 25 10:18:33 git systemd[1]: Starting LSB: Jenkins Automation Server...
6月 25 10:18:33 git runuser[20105]: pam_unix(runuser:session): session opened for user...=0)
6月 25 10:18:33 git jenkins[20100]: Starting Jenkins bash: /usr/bin/java: 没有那个文件或目录
6月 25 10:18:33 git runuser[20105]: pam_unix(runuser:session): session closed for user root
6月 25 10:18:33 git jenkins[20100]: [失败]
6月 25 10:18:33 git systemd[1]: jenkins.service: control process exited, code=exited s...s=1
6月 25 10:18:33 git systemd[1]: Failed to start LSB: Jenkins Automation Server.
6月 25 10:18:33 git systemd[1]: Unit jenkins.service entered failed state.
6月 25 10:18:33 git systemd[1]: jenkins.service failed.
Hint: Some lines were ellipsized, use -l to show in full.

which java
/usr/local/java/bin/java

ln -s /usr/local/java/bin/* /usr/bin/

systemctl start jenkins

cat /var/lib/jenkins/secrets/initialAdminPassword
一串哈希贴到网站上

插件地址
http://updates.jenkins-ci.org/download/plugins/   

```


&nbsp;&nbsp;**问题汇总：**
```
Q1：江涛搭建了一个gitblit地址，然后机子坏了，重新部署了以后，IP改了，也就是之前那个不能用了，该怎么搞？

A1：答案看楼下
git remote rm origin #删除远程地址
git remote add origin http://192.168.6.26:8090/r/ataolaSkillsStack.git #更新远程地址
git push --set-upstream origin branchname #当前分支与远程分支进行关联

Q2：一个域名解析到一个IP上，它的一个子域名也解析到这个IP上，例如ataola.com解析到 233.233.233.233上，然后的一个子域名gitlab.ataola.com也解析到这个上面可以吗？

A2: 可以的，经本人实践证明，没啥冲突
```