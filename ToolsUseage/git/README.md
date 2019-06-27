## Git

> Git的学习,懒得再建一个目录，jenkins放这里好了，windows上有gitblit感觉都没啥好写的，把配置文件丢文件夹吧，不得不说gitlab不管是颜值还是功能都完胜它，但gitblit也还可以的。

&nbsp;&nbsp;**安装配置：**

```
#源码安装
cd /opt
wget -O git-src.zip https://github.com/git/git/archive/master.zip
unzip git-src.zip
cd git-src
make prefix=/usr/local all
make prefix=/usr/local install
ln -fs /usr/local/bin/git* /usr/bin/

#配置账号邮箱
git config --global user.name "your name "
git config --global user.email "your email"

#还有其他两个config的办法
git config --local
git config --system

#生成一个ssh key
ssh-keygen -t rsa -C "asdasdasd@qq.com"
```

&nbsp;&nbsp;**基于Centos的Gitlab-ce安装：**

```
#安装Gitla依赖b组件
yum -y install curl policycoreutils openssh-server openssh-clients postfix

#配置YUM仓库
curl ‐sS https://packages.gitlab.com/install/repositories/gitlab/gitlabce/
script.rpm.sh | sudo bash

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

#第二个版本看这里看这里看这里
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
再执行
sudo yum makecache
sudo yum install gitlab-ce

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
腾讯邮箱的配置：
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "你的qq邮箱"  
gitlab_rails['smtp_password'] = "你的qq授权码"             
gitlab_rails['smtp_domain'] = "smtp.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = '你的qq邮箱'   
user["git_user_email"] = "你的qq邮箱"

微软邮箱的配置
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp-mail.outlook.com"
gitlab_rails['smtp_port'] = 587
gitlab_rails['smtp_user_name'] = "你的outlook邮箱"
gitlab_rails['smtp_password'] = "邮箱密码"
gitlab_rails['smtp_domain'] = "smtp-mail.outlook.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['gitlab_email_from'] = "你的outlook邮箱"
user["git_user_email"] = "你的outlook邮箱"

阿里云的邮箱配置
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.aliyun.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "你的邮箱"
gitlab_rails['smtp_password'] = "你的密码"
gitlab_rails['smtp_domain'] = "smtp.aliyun.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_enabled'] = true
gitlab_rails['gitlab_email_from'] = '你的邮箱'
gitlab_rails['gitlab_email_display_name'] = 'Gitlab'

腾讯的企业邮箱：
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "你的企业邮箱"
gitlab_rails['smtp_password'] = "password"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = '你的企业邮箱'   


#关于502问题
这个我遇到的是端口被占用了，把unicorn['port'] = 9090改了，还是这样，查看了下端口是因为我的服务器nginx占用了8080，它跑不起来，那么问题就很好解决了，nginx进程杀掉，然后重启下gitlab，好像还有一种情况是内存不够要加虚拟内存，具体的看那个centos那篇文章

#关于改密码
gitlab-rails console production
    user = User.where(id:1).first
    user.password='123456'
    user.save!

安装好以后发现，极其耗内存，一般2G是有点卡的，要设个虚拟内存

查看分区情况： cat /proc/swaps
创建swap分区： dd if=/dev/zero of=/mnt/swap bs=512 count=8388616
转换swap分区： mkswap /mnt/swap
查看内核参数： cat /proc/sys/vm/swappiness
根据实际需要设置： sysctl -w vm.swappiness=60
启用swap分区：
swapon /mnt/swap
echo "/mnt/swap swap swap defaults 0 0" >> /etc/fstab
查看结果： cat /proc/swaps 


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

有意思的是，jenkins也支持安装一些软件，这使得它那个用户需要用root
```
&nbsp;&nbsp;**Jenkins插件的安装（Node.JS）：**
```
"系统管理" ==> "管理插件" ==> "可选插件" ==> 搜索 "Nodejs" ==> 直接安装 ==> systemctl restart jenkins | 或者直接网页上点重启
```

&nbsp;&nbsp;**Jenkins插件的安装（Maven）：**
```
"系统管理" ==> "管理插件" ==> "可选插件" ==> "过滤输入框中输入搜索关键字" ==> "Maven Integration" | "Pipeline Maven Integration" ==> "直接安装" ==> systemctl restart jenkins | 或者直接网页上点重启
```

&nbsp;&nbsp;**Jenkins环境配置（Node.JS）：**
```
"系统管理" ==> "全局工具设置" ==> " NodeJS 安装" ==> NodeJS别名: node-v12.4.0 ==> 安装目录: /opt/node-v12.4.0-linux-x64 ==> 取消自动安装 ==> 保存
```

&nbsp;&nbsp;**Jenkins环境配置（OPENJDK）：**
```
"系统管理" ==> "全局工具设置" ==> " NodeJS 安装" ==> NodeJS别名: openjdk1.8 ==> JAVA_HOME: /usr/lib/jvm/java-1.8.0-openjdk-1.8.0xxxx ==> 取消自动安装 ==> 保存
```


&nbsp;&nbsp;**jenkins部署nodejs前端项目：**
```
任务名称:  jenkins_01_node_blog
构建一个自由风格的软件项目
Git URL 凭据
构建环境
勾选: Provide Node & npm bin/ folder to PATH
构建 执行shell
export JENKINS_PROJECT_PATH=`pwd`
export PROJECT_PATH="/opt/app/node_blog"
cd node_blog
cnpm install
npm run build
保存
构建
结果:成功!
mkdir node_blog
chown -R deploy:deploy /opt/app
chmod 777 /opt/app
构建 执行shell
rm -rf $PROJECT_PATH/*
cp -r $JENKINS_PROJECT_PATH/node_blog/dist/* $PROJECT_PATH/

```

&nbsp;&nbsp;**jenkins构建Maven项目：**
```
任务名称:  jenkins_02_maven_blog
构建一个maven项目
Git URL 凭据

Build:
Root POM: helloworld-java-maven/pom.xml
Goal and options: clean package       (如果有测试类需要加 -D maven.test.skip=true)

Post Steps:
选择: Run only if build succeeds

执行Shell:
export JENKINS_PROJECT_PATH=`pwd`
export PROJECT_PATH="/opt/app"
if [ -f $PROJECT_PATH/spring-server.jar ];
then
rm -f $PROJECT_PATH/spring-server.jar
echo "[STEP1] delete jar success ..."
else
echo "[STEP1] spring-server.jar not exist ..."
fi
cp $JENKINS_PROJECT_PATH/dinnerserver/spring/target/spring-server.jar $PROJECT_PATH/
echo "[STEP2] copy jenkins jar success ..."
java_process=`ps -ef | grep spring-server.jar | grep -v grep | wc -l`
java_process_pid=`ps -ef | grep spring-server.jar | grep -v grep | awk '{print $2}'`
echo $java_process
echo $java_process_pid
if [ $java_process == 0 ];
then
echo "[STEP3] no spring-server.jar process running"
else
sudo kill -9 ${java_process_pid}
echo "[STEP3] spring-server.jar process killed"
fi
nohup java -jar -Dserver.port=8090 /opt/app/spring-server.jar > /dev/null 2>&1 &
echo "[STEP4] start new spring-server.jar process success ..."
echo "[INFO] build finished..."

保存
立即构建

```

&nbsp;&nbsp;**ansible：**
```
#想省事一点的办法：
yum install ansible

#不太省事的：
yum -y install python-jinja2 PyYAML python-paramiko python-babel python-crypto
tar xf ansible-1.5.4.tar.gz
cd ansible-1.5.4
python setup.py build
python setup.py install
mkdir /etc/ansible
cp -r examples/* /etc/ansible
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

Q3:由gitlab联想的邮件知识学习
A3: 看楼下

简单邮件传输协议（Simple Mail Transfer Protocol，SMTP）：用于发送和中转发出的电子邮件，占用服务器的25/TCP端口。
邮局协议版本3（Post Office Protocol 3）：用于将电子邮件存储到本地主机，占用服务器的110/TCP端口。
Internet消息访问协议版本4（Internet Message Access Protocol 4）：用于在本地主机上访问邮件，占用服务器的143/TCP端口

邮件服务器域名解析看最底部那张表，这里放进来没法显示表格。

Q4: 看到gitlab虽然配置好了邮箱，但是登录的是第三方的，比如腾讯或者网易的某个账号发送的消息，我能不能换成我自己的邮箱，这里就需要搭建一个邮箱服务器

A1: 反正我在我的阿里云主机上没搭起来，postfix死活开不起来，放弃了。还有那个gitlab注册是不需要验证的，应该是哪里出了问题，真奇怪，就这样把，具体的搭建服务器的教程，请参考楼下这三位：
https://www.cnblogs.com/operationhome/p/9056870.html
https://www.jianshu.com/p/459bd8c60ee6
https://www.cnblogs.com/hanxianlong/p/3463494.html

Q5: 如何给github的仓库设置专属页面？

A5: gh-page

```

|记录类型	| 主机记录 |	记录值 |
| :------: | :------: | :------: |
|A|	@	|47.101.160.53 |
|A	| mail |	47.101.160.53  |
|MX	| @ |	mail.ataola.com |
|TXT	| @ |	v=spf1 inuyi.cspf.mail.ataola.com ~all |
