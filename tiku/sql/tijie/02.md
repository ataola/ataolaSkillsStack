## 解题思路

这题跟楼上那题对照着看，倒数第三，反过来也就是顺数第三。这个时候用最大值显然不太符合预期，所以按hire_date降序然后输出第三个。这里仔细想一下倒数第三个是一个，但是那天可能不止一个人，理解下结合楼上哪题。

## 我的答案

```sql
SELECT * FROM employees ORDER BY hire_date DESC LIMIT 2, 1;
```
运行时间：20ms，占用内存：3292k

## 牛客取经

**scut北辰**

考虑到入职日期可能会有多个重复，最合理的SQL语句应为:

```sql
SELECT * FROM employees 
WHERE hire_date = (
SELECT DISTINCT hire_date FROM employees 
ORDER BY hire_date DESC limit 2,1
);
```

下图为我建立的employees表，注意倒数第三个入职员工有两个日期相同，且倒数第一，倒数第二也有相同的：
![](https://uploadfiles.nowcoder.com/images/20190302/207870031_1551516039094_42B8B39D2E3A2727998D15E807BCA950)

运行以上SQL语句的结果为正确的结果
![](https://uploadfiles.nowcoder.com/images/20190302/207870031_1551516110541_32124FB30173C49A9BD89354F8A5D9C0)
而运行 SELECT * FROM employees ORDER BY hire_date DESC LIMIT 2,1;的结果为下图，是不正确的

![](https://uploadfiles.nowcoder.com/images/20190302/207870031_1551516197278_66077FCD8F858D8681759FFFFC6408F3)

运行 SELECT * FROM employees 
WHERE hire_date = (
SELECT hire_date FROM employees 
GROUP BY hire_date ORDER BY hire_date DESC limit 2,1
);的结果也是正确的，如下图：

![](https://uploadfiles.nowcoder.com/images/20190302/207870031_1551516371696_5F44A315FF5708D1A6A55923E9FCD6B9)

但是实际测试的结果distinct比group by语句更快，而且内存占用也更小


**EricZeng**

一种比较严谨的写法：

```sql
SELECT emp_no, birth_date, first_name, last_name, gender, hire_date
FROM employees
WHERE hire_date=(
                SELECT DISTINCT hire_date
                FROM employees
                ORDER BY hire_date DESC
                LIMIT 2,1)
```

另外根据阿里巴巴Java开发规范v1.4中，数据库规约，关键词应大写，SELECT后面不要跟着“*”，要把具体的字段写出来。

