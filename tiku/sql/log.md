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