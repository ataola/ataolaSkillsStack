## 解题思路

我们先找到在dept_manager表中是emp_no,然后NOT IN一波

## 我的答案

```sql
SELECT emp_no FROM employees WHERE emp_no NOT IN (SELECT emp_no FROM dept_manager);
```
运行时间：28ms,占用内存：3320k

## 牛客取经

**ciphersaw**

方法一：使用NOT IN选出在employees但不在dept_manager中的emp_no记录

```sql
SELECT emp_no FROM employees
WHERE emp_no NOT IN (SELECT emp_no FROM dept_manager)
```

方法二：先使用LEFT JOIN连接两张表，再从此表中选出dept_no值为NULL对应的emp_no记录

```sql
SELECT emp_no FROM (SELECT * FROM employees LEFT JOIN dept_manager
ON employees.emp_no = dept_manager.emp_no)
WHERE dept_no IS NULL
```

方法三：方法二的简版，使用单层SELECT语句即可

```sql
SELECT employees.emp_no FROM employees LEFT JOIN dept_manager
ON employees.emp_no = dept_manager.emp_no
WHERE dept_no IS NULL
```
