## Mysql

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