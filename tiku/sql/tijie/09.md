## 解题思路

这里需要注意的是，两个日期都要是'9999-01-01'。


## 我的答案

```sql
SELECT a.dept_no, a.emp_no, b.salary FROM dept_manager a LEFT JOIN salaries b ON a.emp_no = b.emp_no WHERE a.to_date = '9999-01-01' AND b.to_date = '9999-01-01';
```

运行时间：32ms,占用内存：3324k

## 牛客取经


**ciphersaw**

此题与前面第三题类似，思路如下：
1、先用INNER JOIN连接两张表，限制条件是两张表的emp_no相同，即d.emp_no = s.emp_no，并且将salaries用别名s代替，dept_manager用别名d代替

2、根据题意，要获取当前manager的当前salary情况，再加上限制条件d.to_date = '9999-01-01' AND s.to_date = '9999-01-01'即可（因为同一emp_no在salaries表中对应多条涨薪记录，而当s.to_date = '9999-01-01'时是该员工当前的薪水记录）

```sql
SELECT d.dept_no, d.emp_no, s.salary 
FROM salaries AS s INNER JOIN dept_manager AS d 
ON d.emp_no = s.emp_no
AND d.to_date = '9999-01-01'
AND s.to_date = '9999-01-01'
```

注：有人反映将连接语句改成 FROM dept_manager AS d INNER JOIN salaries AS s 后，结果通不过。INNER JOIN对于左右两表并无顺序要求，此为本题OJ系统Bug所致。

-------------------------------------------   Update on 2017/09/26   -------------------------------------------


感谢 @火盒儿 关于表连接顺序问题的解答：当连接语句为 FROM dept_manager AS d INNER JOIN salaries AS s 时，在最后面加上ORDER BY d.emp_no即可通过。
原因分析可能如下：连接后按照前面的第一个 KEY 值排序，若 salaries 在前，则按照 s.emp_no 排序（因为限制条件为 d.emp_no = s.emp_no，所以对 s.emp_no 排序就是对d.emp_no 排序），输出跟参考答案一致，没问题；若 dept_manager 在前，则按照 d.dept_no排序，此时与参考答案不同，所以需要在末尾手动用 ORDER BY 对d.emp_no进行排序。

```sql
SELECT d.dept_no, d.emp_no, s.salary 
FROM dept_manager AS d INNER JOIN salaries AS s
ON d.emp_no = s.emp_no
AND d.to_date = '9999-01-01'
AND s.to_date = '9999-01-01'
ORDER BY d.emp_no
```
