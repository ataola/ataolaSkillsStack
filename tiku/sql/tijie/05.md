## 解题思路

这题跟上一题结合起来看，很明显左连接嘛，考虑到没有分配部门的员工。以后看到null，你条件反射出左连接大部分情况合适的。

## 我的答案

```sql
SELECT a.last_name, a.first_name, b.dept_no FROM employees a LEFT JOIN dept_emp b ON b.emp_no = a.emp_no;
```
运行时间：22ms，占用内存：3304k

## 牛客取经

**lBetterManl**

```sql
SELECT ep.last_name, ep.first_name, dp.dept_no 
FROM employees ep 
LEFT JOIN dept_emp dp
ON ep.emp_no = dp.emp_no
```
注意：

INNER JOIN 两边表同时有对应的数据，即任何一边缺失数据就不显示。

LEFT JOIN 会读取左边数据表的全部数据，即便右边表无对应数据。

RIGHT JOIN 会读取右边数据表的全部数据，即便左边表无对应数据。

**Manu8**

注意on与where有什么区别，两个表连接时用on，在使用left  jion时，on和where条件的区别如下：

1、  on条件是在生成临时表时使用的条件，它不管on中的条件是否为真，都会返回左边表中的记录。

2、where条件是在临时表生成好后，再对临时表进行过滤的条件。这时已经没有left  join的含义（必须返回左边表的记录）了，条件不为真的就全部过滤掉



