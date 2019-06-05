## Mysql

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