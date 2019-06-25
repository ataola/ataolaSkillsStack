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