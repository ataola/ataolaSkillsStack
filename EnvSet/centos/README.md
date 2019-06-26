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


```