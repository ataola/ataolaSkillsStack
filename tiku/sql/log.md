# ataola & SQL

#### No.1: [查找最晚入职员工的所有信息](https://www.nowcoder.com/practice/218ae58dfdcd4af195fff264e062138f?tpId=82&tqId=29753&tPage=1&rp=&ru=/ta/sql&qru=/ta/sql/question-ranking)


**题目描述**

查找最晚入职员工的所有信息

```sql
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
```

**输出描述:**

| emp_no | birth_date |	first_name | last_name | gender | hire_date |
| :----: | :----: | :----: | :----: | :----: | :----: |
| 10008 | 1958-02-19 | Saniya | Kalloufi | M | 1994-09-15 |

[题解](tijie/01.md)


#### No.2: [查找入职员工时间排名倒数第三的员工所有信息](https://www.nowcoder.com/practice/ec1ca44c62c14ceb990c3c40def1ec6c?tpId=82&tqId=29754&tPage=1&rp=&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找入职员工时间排名倒数第三的员工所有信息

```sql
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
```
**输出描述:**

| emp_no | birth_date |	first_name | last_name | gender | hire_date |
| :----: | :----: | :----: | :----: | :----: | :----: |
| 10005 | 1955-01-21 | Kyoichi | Maliniak | M |1989-09-12 |

[题解](tijie/02.md)

#### No.3: [查找各个部门当前领导当前薪水详情以及其对应部门编号dept_no](https://www.nowcoder.com/practice/c63c5b54d86e4c6d880e4834bfd70c3b?tpId=82&tqId=29755&rp=0&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找各个部门当前(to_date='9999-01-01')领导当前薪水详情以及其对应部门编号dept_no

```sql
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
```

[题解](tijie/03.md)

#### No.4: [查找所有已经分配部门的员工的last_name和first_name](https://www.nowcoder.com/practice/6d35b1cd593545ab985a68cd86f28671?tpId=82&tqId=29756&rp=0&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找所有已经分配部门的员工的last_name和first_name
```sql
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
```

[题解](tijie/04.md)


#### No.5: [查找所有员工的last_name和first_name以及对应部门编号dept_no](https://www.nowcoder.com/practice/dbfafafb2ee2482aa390645abd4463bf?tpId=82&tqId=29757&tPage=1&rp=&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找所有员工的last_name和first_name以及对应部门编号dept_no，也包括展示没有分配具体部门的员工
```sql
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
```

[题解](tijie/05.md)


#### No.6: [查找所有员工入职时候的薪水情况](https://www.nowcoder.com/practice/23142e7a23e4480781a3b978b5e0f33a?tpId=82&tqId=29758&rp=0&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找所有员工入职时候的薪水情况，给出emp_no以及salary， 并按照emp_no进行逆序

```sql
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
```

[题解](tijie/06.md)

#### No.7: [查找薪水涨幅超过15次的员工号emp_no以及其对应的涨幅次数t](https://www.nowcoder.com/practice/6d4a4cff1d58495182f536c548fee1ae?tpId=82&tqId=29759&rp=0&ru=/ta/sql&qru=/ta/sql/question-ranking)

**题目描述**

查找薪水涨幅超过15次的员工号emp_no以及其对应的涨幅次数t

```sql
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
```

[题解](tijie/07.md)