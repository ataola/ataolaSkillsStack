## Centos

> 学习Centos的相关知识

&nbsp;&nbsp;**使用频率高的一些命令:**

```
#关于防火墙
systemctl stop firewalld #停止防火墙
systemctl disable firewalld #禁止防火墙

#查看内存 cpu等的使用情况
free -h

#查看日志
journalctl -xe

#运行查看
查看服务进程：ps aux
查看服务cpu利用：top
查看服务对应端口：netstat -nlp
树形查看： pstree

#查看磁盘大小
$df
Filesystem     1K-blocks     Used Available Use% Mounted on
/dev/vda1       41151808 23906284  15132092  62% /
devtmpfs          930492        0    930492   0% /dev
tmpfs             941116       12    941104   1% /dev/shm
tmpfs             941116     1836    939280   1% /run
tmpfs             941116        0    941116   0% /sys/fs/cgroup
tmpfs             188224        0    188224   0% /run/user/0

#权限管理
一个例子 给ataola用户组的deploy用户在/opt/app下可读权限， 给/opt/app下的文件用户组和用户可读写执行权限
chown -R deploy:ataola /opt/app
chmod 770 /opt/app

#添加用户
useradd deploy

#用户登录
su - deploy 

#创建密钥
ssh-keygen -t rsa



#问题汇总

Q1： 我的阿里学生机只有2G内存，跑起来有点卡，怎么让它不太卡？
A1： 建立虚拟内存，具体的看楼下

查看内存：free -m
查看swap信息： swapon -s 或者 cat /proc/swaps

touch swapfile
dd if=/dev/zero of=swapfile bs=1024k count=2048
mkswap swapfile
swapon swapfile
echo '/data/swapfile swap swap default 0 0' >> /etc/fstab



删除虚拟内存

停止swap分区：swapoff /tmp/swap

删除swap分区文件：rm -rf /tmp/swap

删除自动挂载配置命令：vim /etc/fstab

删除这行: /tmp/swap swap swap default 0 0

这里也可以使用分区的方式来创建虚拟内存

mkswap /dev/sdb2
swapon /dev/sdb2
vim /etc/fstab
/tmp/sdb2 swap swap default 0 0

Q2: 怎么释放内存？
A1：看楼下命令
    sync
    echo 3 > /proc/sys/vm/drop_caches
```

&nbsp;&nbsp;**Sendmail邮件服务:**

```
#安装
yum -y install sendmail
yum -y install mailx

#修改配置文件
网易：
  set from=yourname@163.com
  set smtp=smtps://smtp.163.com:465
  set smtp-auth-user=yourname
  set smtp-auth-password=yourpassword
  set smtp-auth=login
  set ssl-verify=ignore
  set nss-config-dir=/etc/pki/nssdb
126的同理
  set from=username@126.com
  set smtp=smtp.126.com
  set smtp-auth-user=username
  set smtp-auth-password=password
  set smtp-auth=login
  
#重启与开机自启动
systemctl restart sendmail
systemctl enable sendmail

#进行发件测试
    通过文件内容发送
    mail -s 'mail test' test@ataola.com < content.txt （"mail test"为邮件主题，test@ataola.com为收件人邮箱，content.txt保存邮件内容）
    
    通过管道符直接发送
    echo "this is my test mail" | mail -s 'mail test' test@ataola.com


阿里默认关闭25端口
```

&nbsp;&nbsp;**思考问题知识汇总:**
```
Q1: 虚拟内存多大为好？

Q2：邮件是不是可以伪造？

```

emmmmm,我有点懒，懒得再去开一个Ubuntu专题了，Ubuntu也塞到这里。

&nbsp;&nbsp;**zsh,命令行最亮的仔（Ubuntu):**
```
apt install zsh -y
chsh -s /bin/zsh
如果楼上失败，看楼下
sudo vim /etc/passwd
root:x:0:0:root:/root:/usr/bin/bash

apt install git -y
安装
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
卸载
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/uninstall.sh)"

主题
https://ohmyz.sh
https://github.com/robbyrussell/oh-my-zsh

拉风的配置看简书这个人写的：https://www.jianshu.com/p/2c9cc1eb2548
```

&nbsp;&nbsp;**遇到的一些问题（Ubuntu):**
```
Q1:问题的背景是，我装了那个Ubuntu，但是那个时候是断开网络的，所以可能一些依赖没有，然后
后面，我又有网络了，尴尬的是装什么什么都装不上，更新了阿里云的源装个vim是这样子的

ataola@ubuntu:~$ sudo apt-get update
Reading package lists... Done
E: Could not get lock /var/lib/apt/lists/lock - open (11: Resource temporarily unavailable)
E: Unable to lock directory /var/lib/apt/lists/
ataola@ubuntu:~$ 

A1: 看到这个问题，你就应该清楚知道是被锁了，谁锁的删谁 sudo rm /var/lib/apt/lists/lock

类似的还有这位
python@ubuntu:~$ sudo apt install docker.io
[sudo] python 的密码： 
E: 无法获得锁 /var/lib/dpkg/lock - open (11: 资源暂时不可用)
E: 无法锁定管理目录(/var/lib/dpkg/)，是否有其他进程正占用它？
python@ubuntu:~$ 

sudo rm /var/lib/dpkg/lock


```