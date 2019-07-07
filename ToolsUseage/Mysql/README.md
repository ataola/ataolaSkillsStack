## Mysql

&nbsp;&nbsp;**Mysql安装**
```
PS D:\zjtEnviroment\mysql-8.0.13-winx64\bin> mysqld --initialize --user=mysql --console                                 2019-06-30T05:16:30.348673Z 0 [System] [MY-013169] [Server] D:\zjtEnviroment\mysql-8.0.13-winx64\bin\mysqld.exe (mysqld 8.0.13) initializing of server in progress as process 9448
2019-06-30T05:16:30.382712Z 0 [Warning] [MY-013242] [Server] --character-set-server: 'utf8' is currently an alias for the character set UTF8MB3, but will be an alias for UTF8MB4 in a future release. Please consider using UTF8MB4 in order to be unambiguous.
2019-06-30T05:17:13.748803Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: #OjioKtjr5#R
2019-06-30T05:17:41.968582Z 0 [System] [MY-013170] [Server] D:\zjtEnviroment\mysql-8.0.13-winx64\bin\mysqld.exe (mysqld 8.0.13) initializing of server has completed
PS D:\zjtEnviroment\mysql-8.0.13-winx64\bin> 

PS D:\zjtEnviroment\mysql-8.0.13-winx64\bin> mysqld -install                                                            Service successfully installed.
PS D:\zjtEnviroment\mysql-8.0.13-winx64\bin>  

-- 修改密码为用不过期
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '#OjioKtjr5#RZJT' PASSWORD EXPIRE NEVER; 
Query OK, 0 rows affected (0.02 sec)

-- 修改密码并指定加密规则为mysql_native_password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '#OjioKtjr5#RZJT';
Query OK, 0 rows affected (0.01 sec)

-- 刷新权限
mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)

mysql>

```

&nbsp;&nbsp;**Mysql配置文件阉割版**
```
# ./mysql/my.cnf

[mysqld_safe]
pid-file = /var/run/mysqld/mysqld.pid
socket   = /var/run/mysqld/mysqld.sock
nice     = 0

[mysqld]
skip-host-cache
skip-name-resolve
explicit_defaults_for_timestamp

bind-address = 0.0.0.0
port         = 3306

user      = mysql
pid-file  = /var/run/mysqld/mysqld.pid
socket    = /var/run/mysqld/mysqld.sock
log-error = /var/log/mysql/error.log
basedir   = /usr
datadir   = /var/lib/mysql
tmpdir    = /tmp
sql_mode  = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

lc-messages-dir = /usr/share/mysql

symbolic-links = 0

#参考地址： https://dev.mysql.com/doc/refman/5.7/en/server-options.html
```

&nbsp;&nbsp;**Mysql8.0的caching_sha2_password问题：**

*大致是客户端正常连接不上，例如用navicat去连接会报一个2059的错误*

解决办法楼下

```
mysql> use mysql
Database changed
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql> select host, user, plugin from user;
+-----------+------------------+-----------------------+
| host      | user             | plugin                |
+-----------+------------------+-----------------------+
| localhost | mysql.infoschema | caching_sha2_password |
| localhost | mysql.session    | caching_sha2_password |
| localhost | mysql.sys        | caching_sha2_password |
| localhost | root             | caching_sha2_password |
+-----------+------------------+-----------------------+
4 rows in set (0.00 sec)

mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '46kIREDp';
ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%'
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '46kIREDp';
Query OK, 0 rows affected (0.15 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.03 sec)
```
&nbsp;&nbsp;**数据库脚本规范：**
```
#建表SQL(尽可能多的扩展语法的例子)
-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) DEFAULT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(20) DEFAULT NULL,
  `email` VARCHAR(40) DEFAULT NULL,
  `address` VARCHAR(255) DEFAULT NULL,
  `last_update` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=613 DEFAULT CHARSET=UTF8;

```

&nbsp;&nbsp;**总结思考：**
```
Q1: 看见好多数据库脚本都有这句，SET FOREIGN_KEY_CHECKS=0;它的作用是什么？

```