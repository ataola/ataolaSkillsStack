## Docker

> 学习Docker的相关知识

&nbsp;&nbsp;**环境安装:**

```
#Centos
$ sudo yum install yum-utils device-mapper-persistent-data lvm2
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
$ sudo yum install docker-ce
$ sudo systemctl enable docker
$ sudo systemctl start docker


#Ubuntu
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce
$ sudo systemctl enable docker
$ sudo systemctl start docker

# 国内源
$ vim /etc/docker/daemon.json
{
    "registry-mirrors": [
        "https://registry.docker-cn.com"
    ]
}
$ sudo systemctl restart docker
```

&nbsp;&nbsp;**基本命令:**

```
#查看版本
$ docker version

#查看信息
$docker info

#导出镜像(可加 -o 参数，指定导出地点)
$sudo docker save webapp:1.0 > webapp-1.0.tar

#导入镜像(可加 -i 参数，指定导入地点)
$sudo docker load < webapp-1.0.tar

#导出容器
$sudo docker export -o ./webapp.tar webapp

#导入容器
$sudo docker import ./webapp.tar webapp:1.0

#去远程拉镜像
⚡ root@ataola-alibaba  ~  docker pull ubuntu
Using default tag: latest
Trying to pull repository docker.io/library/ubuntu ...
latest: Pulling from docker.io/library/ubuntu
6abc03819f3e: Pull complete
05731e63f211: Pull complete
0bd67c50d6be: Pull complete
Digest: sha256:f08638ec7ddc90065187e7eabdfac3c96e5ff0f6b2f1762cf31a4f49b53000a5
Status: Downloaded newer image for docker.io/ubuntu:latest

#查看本地镜像
⚡ root@ataola-alibaba  ~  docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
docker.io/ubuntu    latest              7698f282e524        3 weeks ago         69.9 MB
⚡ root@ataola-alibaba  ~ 

#去远程找镜像
⚡ root@ataola-alibaba  ~  docker search mysql
INDEX       NAME                                        DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
docker.io   docker.io/mysql                             MySQL is a widely used, open-source relati...   8250      [OK]
docker.io   docker.io/mariadb                           MariaDB is a community-developed fork of M...   2814      [OK]
docker.io   docker.io/mysql/mysql-server                Optimized MySQL Server Docker images. Crea...   616                  [OK]
docker.io   docker.io/percona                           Percona Server is a fork of the MySQL rela...   437       [OK]
docker.io   docker.io/centurylink/mysql                 Image containing mysql. Optimized to be li...   60                   [OK]
docker.io   docker.io/sameersbn/mysql                                                                   57                   [OK]
docker.io   docker.io/centos/mysql-57-centos7           MySQL 5.7 SQL database server                   53
docker.io   docker.io/mysql/mysql-cluster               Experimental MySQL Cluster Docker images. ...   45
docker.io   docker.io/deitch/mysql-backup               Automated and scheduled mysql database dum...   36                   [OK]
docker.io   docker.io/tutum/mysql                       Base docker image to run a MySQL database ...   32
docker.io   docker.io/schickling/mysql-backup-s3        Backup MySQL to S3 (supports periodic back...   28                   [OK]
docker.io   docker.io/bitnami/mysql                     Bitnami MySQL Docker Image                      27                   [OK]
docker.io   docker.io/linuxserver/mysql                 A Mysql container, brought to you by Linux...   20
docker.io   docker.io/prom/mysqld-exporter                                                              19                   [OK]
docker.io   docker.io/centos/mysql-56-centos7           MySQL 5.6 SQL database server                   13
docker.io   docker.io/circleci/mysql                    MySQL is a widely used, open-source relati...   11
docker.io   docker.io/mysql/mysql-router                MySQL Router provides transparent routing ...   11
docker.io   docker.io/arey/mysql-client                 Run a MySQL client from a docker container      9                    [OK]
docker.io   docker.io/openshift/mysql-55-centos7        DEPRECATED: A Centos7 based MySQL v5.5 ima...   6
docker.io   docker.io/yloeffler/mysql-backup            This image runs mysqldump to backup data u...   6                    [OK]
docker.io   docker.io/fradelg/mysql-cron-backup         MySQL/MariaDB database backup using cron t...   4                    [OK]
docker.io   docker.io/jelastic/mysql                    An image of the MySQL database server main...   1
docker.io   docker.io/ansibleplaybookbundle/mysql-apb   An APB which deploys RHSCL MySQL                0                    [OK]
docker.io   docker.io/monasca/mysql-init                A minimal decoupled init container for mysql    0
docker.io   docker.io/widdpim/mysql-client              Dockerized MySQL Client (5.7) including Cu...   0                    [OK]
⚡ root@ataola-alibaba  ~ 

#删除镜像
$docker rmi xxx

#目录映射
$docker run -it -v /宿主机绝对路径目录:/容器内目录:ro 镜像名

#docker run 的一些命令
-d 后台运行
-P 容器端口随机映射到宿主机
-p 宿主机端口:容器端口 端口绑定
-i 启动一个可交互容器
-t 使用虚拟终端关联到容器的标准输入输出
-v 宿主机目录:容器目录 挂载数据卷
--rm 使用后销毁


#不知道的就 docker --help
```

&nbsp;&nbsp;**关于MySQL:**
```
#拉去镜像
$docker pull mysql:5.7

#启动mysql
 ⚡ root@ataola-alibaba  ~/mydocker  docker run -p 3306:3306 --name mysql -v /root/mydocker/mysql/conf:/etc/mysql/conf.d -v /root/mydocker/mysql/logs:/logs -v /root/mydocker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
2d1245e598859b390f282d001187310fead37895a5031c42cc79c2570c747668

#查看是否运行
 ⚡ root@ataola-alibaba  ~/mydocker  docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
2d1245e59885        mysql:5.7           "docker-entrypoint..."   6 seconds ago       Up 5 seconds        0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
 ⚡ root@ataola-alibaba  ~/mydocker  ls
mysql
 ⚡ root@ataola-alibaba  ~/mydocker  ls mysql
conf  data  logs

#交互模式进入
 ⚡ root@ataola-alibaba  ~/mydocker  docker exec -it mysql /bin/bash

#登陆容器内的mysql
root@2d1245e59885:/# mysql
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
root@2d1245e59885:/# mysql -uroot -p123456
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.26 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>

```

&nbsp;&nbsp;**关于Redis:**
```
# 拉取镜像
 ⚡ root@ataola-alibaba  ~/mydocker  docker pull redis
Using default tag: latest
Trying to pull repository docker.io/library/redis ...
latest: Pulling from docker.io/library/redis
743f2d6c1f65: Pull complete
171658c5966d: Pull complete
fbef10bd7a65: Pull complete
0b0b11956c72: Pull complete
09dbd716637e: Pull complete
d09046fd4481: Pull complete
Digest: sha256:4f2e073edb3ee0c898219e8de6cf2cd5b58278db0f622df970587baa737233bf
Status: Downloaded newer image for docker.io/redis:latest
 ⚡ root@ataola-alibaba  ~/mydocker 

#启动容器
 ⚡ root@ataola-alibaba  ~/mydocker  docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
docker.io/mysql     5.7                 a1aa4f76fab9        3 hours ago         373 MB
docker.io/mysql     latest              c7109f74d339        3 hours ago         443 MB
docker.io/redis     latest              d3e3588af517        3 weeks ago         95 MB
docker.io/ubuntu    latest              7698f282e524        3 weeks ago         69.9 MB
 ⚡ root@ataola-alibaba  ~/mydocker  dockerrun -p 6379:6379 -v /root/mydocker/myredis/data:/data -v /root/mydocker/myredis/conf/redis.conf:/usr/local/etc/redis/redis.conf -d redis:latest redis-server /usr/local/etc/redis/redis.conf --appendonly yes
17239ef8d934f10589d167ef0dc8141ecba627642494cb41e1120255084d3152
 ⚡ root@ataola-alibaba  ~/mydocker  docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
17239ef8d934        redis:latest        "docker-entrypoint..."   5 seconds ago       Up 4 seconds        0.0.0.0:6379->6379/tcp              mystifying_babbage
2d1245e59885        mysql:5.7           "docker-entrypoint..."   19 minutes ago      Up 19 minutes       0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
 ⚡ root@ataola-alibaba  ~/mydocker 

#查看内容

 ⚡ root@ataola-alibaba  ~/mydocker  ls
myredis  mysql
 ⚡ root@ataola-alibaba  ~/mydocker ls myredis
conf  data
 ⚡ root@ataola-alibaba  ~/mydocker  ls myredis/data
appendonly.aof
 ⚡ root@ataola-alibaba  ~/mydocker  docker exec -it 17239e /bin/bash
root@17239ef8d934:/data# redis-cli
127.0.0.1:6379> set name 'ataola'
OK
127.0.0.1:6379> get name
"ataola"
127.0.0.1:6379>

```

&nbsp;&nbsp;**关于mongodb:**
```
#拉取镜像
$docker pull mongo
#运行容器
 ⚡ root@ataola-alibaba  ~/mydocker  docker run -p 27017:27017  -v /root/mydocker/mongodb:/data/db -d  mongo:latest
a56669b6f8f6d22973245a18ce959d03e57cdf2aee69042cae52db3194095b33
 ⚡ root@ataola-alibaba  ~/mydocker  docker exec -it a5666 /bin/bash
root@a56669b6f8f6:/# mongo
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("b7f2bb7b-c3ac-4e2c-8d59-4d77d81f016d") }
MongoDB server version: 4.0.10
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
Server has startup warnings:
2019-06-11T03:39:34.501+0000 I STORAGE  [initandlisten]
2019-06-11T03:39:34.501+0000 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2019-06-11T03:39:34.501+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten]
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten]
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten]
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten]
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2019-06-11T03:39:35.374+0000 I CONTROL  [initandlisten]
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

> show dbs;
admin   0.000GB
config  0.000GB
local   0.000GB
>

```

&nbsp;&nbsp;**关于Tomcat:**
```
#拉取镜像
 ⚡ root@ataola-alibaba  ~/mydocker  docker pull tomcat
Using default tag: latest
Trying to pull repository docker.io/library/tomcat ...
latest: Pulling from docker.io/library/tomcat
c5e155d5a1d1: Pull complete
221d80d00ae9: Pull complete
4250b3117dca: Pull complete
3b7ca19181b2: Pull complete
acd9a038f588: Pull complete
2aa7bd799199: Pull complete
05b9cbca178d: Pull complete
07e346d8d312: Pull complete
f47d33a776bf: Pull complete
4986f827da91: Pull complete
86773080e434: Pull complete
49bdc32f36de: Pull complete
Digest: sha256:b974cf74dcf0e92d42c16a1a72482a51f66e501d2b7abbd874f21c987dcbd065
Status: Downloaded newer image for docker.io/tomcat:latest
 ⚡ root@ataola-alibaba  ~/mydocker 

#运行容器

 ✘ ⚡ root@ataola-alibaba  ~/mydocker  docker images
REPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE
docker.io/mysql               5.7                 a1aa4f76fab9        5 hours ago         373 MB
docker.io/mysql               latest              c7109f74d339        5 hours ago         443 MB
docker.io/httpd               latest              3bd2a941224f        5 days ago          140 MB
docker.io/mongo               latest              0fb47b43df19        12 days ago         411 MB
docker.io/redis               latest              d3e3588af517        3 weeks ago         95 MB
docker.io/ubuntu              latest              7698f282e524        3 weeks ago         69.9 MB
docker.io/consol/tomcat-7.0   latest              7c34bafd1150        4 years ago         601 MB
 ⚡ root@ataola-alibaba  ~/mydocker  docker run -p 80:8080 -v /root/mydocker/tomcat1:/usr/local/tomcat -d --name tomcat1 tomcat-7.0
Unable to find image 'tomcat-7.0:latest' locally
Trying to pull repository docker.io/library/tomcat-7.0 ...
^C
 ✘ ⚡ root@ataola-alibaba  ~/mydocker  docker run -p 80:8080 -v /root/mydocker/tomcat1:/usr/local/tomcat -d --name tomcat1 docker.io/consol/tomcat-7.0
4d1f686beed57e7a69e845bda68a947c9219ed904773c94ed6defbb52b433041
 ⚡ root@ataola-alibaba  ~/mydocker  docker ps -a
CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS              PORTS                               NAMES
4d1f686beed5        docker.io/consol/tomcat-7.0   "/bin/sh -c /opt/t..."   5 seconds ago       Up 4 seconds        8778/tcp, 0.0.0.0:80->8080/tcp      tomcat1
a56669b6f8f6        mongo:latest                  "docker-entrypoint..."   About an hour ago   Up About an hour    0.0.0.0:27017->27017/tcp            vigilant_hypatia
17239ef8d934        redis:latest                  "docker-entrypoint..."   2 hours ago         Up 2 hours          0.0.0.0:6379->6379/tcp              mystifying_babbage
2d1245e59885        mysql:5.7                     "docker-entrypoint..."   2 hours ago         Up 2 hours          0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
 ⚡ root@ataola-alibaba  ~/mydocker 

#最新版的拉取下来报了个错运行时，所以用这个7的版本
```


&nbsp;&nbsp;**Dockerfile**
```
FROM 指定基础镜像

RUN 执行命令

COPY 复制文件

CMD 指定默认的容器主进程的启动命令

ENV 设置环境变量

VOLUME 定义匿名数据卷

EXPOSE 声明端口

WORKDIR 指定工作目录
```

&nbsp;&nbsp;**相关链接:**

* [docker手册](https://docs.docker.com/engine/reference/run/)
* [docker-compose](https://docs.docker.com/compose/reference/overview/)
* [掘金-Docker](https://juejin.im/tag/Docker)
* [Segmentfault-Docker](https://segmentfault.com/t/docker)
* [开源中国-Docker](https://www.oschina.net/question/tag/docker)

