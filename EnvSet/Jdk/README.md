## JDK

> 学习JDK的相关知识

&nbsp;&nbsp;**环境变量配置（win):**

```
JAVA_HOME:
D:\Program Files\Java\jdk1.8.0_161(jdk的安装路径)
Path:
%JAVA_HOME%\bin;
%JAVA_HOME%\jre\bin;
ClassPath:
.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
```

&nbsp;&nbsp;**环境变量配置（Linux):**

```
#解压压缩包
tar xf jdk-8u181-linux-x64.tar.gz -C /usr/local/ [1]
mv /usr/local/jdk1.8.0_181 /usr/local/java  [2]
[1] [2] 选一个

vim /etc/profile
JAVA_HOME=/usr/local/java/
JAVA_BIN=/usr/local/java/bin
JRE_HOME=/usr/local/java/jre
PATH=$PATH:/usr/local/java/bin:/usr/local/java/jre/bin
CLASSPATH=/usr/local/java/lib:/usr/local/java/jre/lib/charsets/jar
source /etc/profile
java -version
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

&nbsp;&nbsp;**OpenJDK的安装:**
```
yum search java | grep open 或者 yum -y list java*
yum install -y java-1.8.0-openjdk*
java -version
```


&nbsp;&nbsp;**运行一个jar包:**
```
java -jar ataola-server.jar
nohup java -jar -Dserver.port=8090 ataola-server.jar > /dev/null 2>&1 &

```


&nbsp;&nbsp;**问题拓展:**
```
Q1：在windows上每次都要点击我的电脑，然后管理，然后环境变量啥的不麻烦吗，能不能和Linux一样简洁，巧几个命令就好了？

A1: 当然是可以的啦，具体看楼下
    输入path,查看Path的环境变量
    输入 set path=XXX, 设置环境变量(这个是有坑的，它会清掉以前的环境变量，所以你用楼下这个)
    set path=%path%;XXX
    还是有坑的，他只在你打开的这个cmd有效
    有永久的用setx，具体如下
    setx path "%path%;XXX" /m

题外话：windows最怕的就是被垃圾广告网站写入注册表，然后每次都打开垃圾的360.cn、2345和hao123这种剧毒无比的网站，其次是在非管理员用户下，删除某些文件夹删不掉，这是痛点，自带的杀毒有的时候也会误判。像Linux就不会这样，不过window主打的就是电脑好用，click，click，click这样，而Linux是tab tab tab这样。

```