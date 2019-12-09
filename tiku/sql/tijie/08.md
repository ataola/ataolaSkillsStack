## 解题思路

这题抓重点，只显示一次，逆序，其他的你翻译成SQL应该问题不大

## 我的答案

```sql
SELECT DISTINCT salary FROM salaries WHERE to_date = '9999-01-01' ORDER BY salary DESC;
```
运行时间：24ms,占用内存：3320k


## 牛客取经

**superyouyo**

楼上都是用distinct，但是大表一般用distinct效率不高，大数据量的时候都禁止用distinct，建议用group by解决重复问题。

```sql
select salary from salaries where to_date='9999-01-01' group by salary order by salary desc
```

**aqqje**

对于distinct与group by的使用: 

1、当对系统的性能高并数据量大时使用group by 

2、当对系统的性能不高时使用数据量少时两者皆可 

3、尽量使用group by


