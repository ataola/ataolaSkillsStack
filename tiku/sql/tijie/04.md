## 解题思路

有了上一题的经验，这一题能踩坑吗？ 硬核解法先写employees再写dept_emp，用到的关联贴上去。试试内连接查询发现快乐这么多。

附上测试用例：

```sql
INSERT INTO dept_emp VALUES(10001,'d001','1986-06-26','9999-01-01'); INSERT INTO dept_emp VALUES(10002,'d001','1996-08-03','9999-01-01'); INSERT INTO dept_emp VALUES(10003,'d004','1995-12-03','9999-01-01'); INSERT INTO dept_emp VALUES(10004,'d004','1986-12-01','9999-01-01'); INSERT INTO dept_emp VALUES(10005,'d003','1989-09-12','9999-01-01'); INSERT INTO dept_emp VALUES(10006,'d002','1990-08-05','9999-01-01'); INSERT INTO dept_emp VALUES(10007,'d005','1989-02-10','9999-01-01'); INSERT INTO dept_emp VALUES(10008,'d005','1998-03-11','2000-07-31'); INSERT INTO dept_emp VALUES(10009,'d006','1985-02-18','9999-01-01'); INSERT INTO dept_emp VALUES(10010,'d005','1996-11-24','2000-06-26'); INSERT INTO dept_emp VALUES(10010,'d006','2000-06-26','9999-01-01'); INSERT INTO employees VALUES(10001,'1953-09-02','Georgi','Facello','M','1986-06-26'); INSERT INTO employees VALUES(10002,'1964-06-02','Bezalel','Simmel','F','1985-11-21'); INSERT INTO employees VALUES(10003,'1959-12-03','Parto','Bamford','M','1986-08-28'); INSERT INTO employees VALUES(10004,'1954-05-01','Chirstian','Koblick','M','1986-12-01'); INSERT INTO employees VALUES(10005,'1955-01-21','Kyoichi','Maliniak','M','1989-09-12'); INSERT INTO employees VALUES(10006,'1953-04-20','Anneke','Preusig','F','1989-06-02'); INSERT INTO employees VALUES(10007,'1957-05-23','Tzvetan','Zielinski','F','1989-02-10'); INSERT INTO employees VALUES(10008,'1958-02-19','Saniya','Kalloufi','M','1994-09-15'); INSERT INTO employees VALUES(10009,'1952-04-19','Sumant','Peac','F','1985-02-18'); INSERT INTO employees VALUES(10010,'1963-06-01','Duangkaew','Piveteau','F','1989-08-24'); INSERT INTO employees VALUES(10011,'1953-11-07','Mary','Sluis','F','1990-01-22');
```

## 我的答案

```sql
SELECT a.last_name, a.first_name, b.dept_no FROM employees a, dept_emp b WHERE a.emp_no = b.emp_no;
```
运行时间：20ms，占用内存：3320k

```sql
SELECT a.last_name, a.first_name, b.dept_no FROM employees a INNER JOIN dept_emp b ON a.emp_no = b.emp_no;
```
运行时间：17ms,占用内存：3320k

## 牛客取经

**夏周**

答案是按employees表中顺序输出的，所以使用内连接查询时，必须将employees表放在前面。

```sql
select last_name,first_name,dept_no from employees,dept_emp where dept_emp.emp_no = employees.emp_no;
```

使用左连接查询时，employees中没有分配部门的员工（没有被记录在dept_emp表）dept_no字段被自动取NULL然后被输出，所以应当剔除（复合条件连接查询）。

```sql
select last_name,first_name,dept_no
from employees left join dept_emp
on employees.emp_no = dept_emp.emp_no
where dept_emp.dept_no<>'';
```

**什么都懂什么都菜 ：**其实直接左连接就好了，
```sql
select e.last_name,e.first_name,d.dept_no 
from dept_emp d left join employees e 
on d.emp_no = e.emp_no 
```
可以看到e中的员工是一个集合，而分配了部门的员工是这个集合中的子集，这样部门匹配到的肯定都是分配到该部门员工的信息，直接使用左连接就ok,不存在dept_no字段被自动取NULL然后被输出

**坂田银月**

```sql
SELECT e.last_name, e.first_name, d.dept_no
FROM dept_emp d NATURAL JOIN employees e;
```
只有一列是公有的，用自然连接呀亲们。

