## 解题思路

抓重点，最晚入职员工的信息，比什么，比时间。那么问题也就转换成了求hire_date中离现在最近的那位。

## 我的答案

第一种，我先找出最大的那位，按照题目来，然后通过进一步的select得到预期。

```js
SELECT * FROM employees WHERE hire_date = (SELECT MAX(hire_date) FROM employees);
```
运行时间：23ms，占用内存：3320k

第二种，由于是时间，那么日期排序也可以用用，先按降序排取第一个。

```sql
SELECT * FROM employees ORDER BY hire_date DESC LIMIT 0, 1;
```
运行时间：23ms,占用内存：8080k

可以看到时间是一样的，内存有区别，很显然这个不是我想看到的结果，倒是想看看他们谁运行时间短一点(性能方面)，可能是测试用例不大吧，暂时先放着，投楼下一票吧。

## 牛客取经

**fsy351**

```sql
select * from employees
where hire_date =
(select max(hire_date) from employees)
```
我认为这个是对的，其他top和limit方法有牵强之处，与给定数据集有关最晚入职的当天未必就一个人，也许有多人，使用排序并限制得只能取得指定数量的结果

看了下日期的格式是1994-09-15，那确实这种方法是最佳解，但是如果时间具体到秒级，那就有区分度了，Limit也无可厚非。

**nomico271**

```sql
SELECT * FROM employees ORDER BY hire_date DESC LIMIT 0,1;
#或
SELECT * FROM employees WHERE hire_date = (SELECT MAX(hire_date) FROM employees);
```

LIMIT m,n : 表示从第m+1条开始，取n条数据；
LIMIT n ： 表示从第0条开始，取n条数据，是limit(0,n)的缩写。
本题limit 0,1 表示从第（0+1）条数据开始，取一条数据，即取出最晚入职员工。

**cgjPawn**

```js
select emp_no,
    birth_date,
    first_name,
    last_name,
    gender,
    max(hire_date)
from employees
```
..大佬们是想麻烦了吗。。。

**winsilin**
```sql
SELECT
    a.*
FROM
    employees a
INNER JOIN (
    SELECT
        MAX(hire_date),
        emp_no
    FROM
        employees
) b ON a.emp_no = b.emp_no
```

我这串代码是提交后显示是正确的，但是我自己写的测试数据是错的，求大神解释为什么！？
测试数据：

![img1](https://uploadfiles.nowcoder.com/images/20180425/8414389_1524640776433_D4648C226AC273F57B737FE0EA4C196F)

查询结果：

![img2](https://uploadfiles.nowcoder.com/images/20180425/8414389_1524640823495_1E1DB2FF3913C32319E54D8EB28854DE)

明显日期不是最大的，这是什么问题呢

**懷戀，那弎年 ：** 你生成表b的时候有问题，聚合函数max选出来的最大雇佣时间对应在数据库中的emp_no和你表b中的emp_no不一致。select max(hire_date) from employees;结果只有一行。但是select emp_no from employees;结果有多行。这两条查询不能直接组合。

**北极熊没有眼泪 ：** 使用聚合函数 出现的其他字段要进行分组

