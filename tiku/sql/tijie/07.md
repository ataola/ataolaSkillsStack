## 解题思路

抓重点考的是某个字段中，出现重复值的求和。`GROUP BY`是很好的解决办法。还有一个条件是涨幅超过15次,`HAVING COUNT(x) 判断条件`是很好的解决办法。



## 我的答案

```sql
SELECT emp_no, COUNT(from_date) AS t FROM salaries GROUP BY emp_no HAVING t > 15;
```
运行时间：24ms，占用内存：3360k

## 牛客取经

**ciphersaw**

此题应注意以下四点：

1、用COUNT()函数和GROUP BY语句可以统计同一emp_no值的记录条数

2、根据题意，输出的涨幅次数为t，故用AS语句将COUNT(emp_no)的值转换为t

3、由于COUNT()函数不可用于WHERE语句中，故使用HAVING语句来限定t>15的条件

4、最后存在一个理解误区，涨幅超过15次，salaries中相应的记录数应该超过16（从第2条记录开始算作第1次涨幅），不过题目为了简单起见，将第1条记录当作第1次涨幅，所以令t>15即可

/**  注意： 严格来说，下一条salary高于本条才算涨幅，但本题只要出现了一条记录就算一次涨幅，salary相同可以理解为涨幅为0，salary变少理解为涨幅为负 **/

```sql
SELECT emp_no, COUNT(emp_no) AS t FROM salaries 
GROUP BY emp_no HAVING t > 15
```

**Manu8**

```sql
SELECT emp_no,count(emp_no) as t from salaries group by emp_no having t>15;
```

我觉得这道题有这样几个地方需要注意下，首先如何统计薪水涨幅超过15次的员工，就是用的count(emp_no)这个方法直接计算的，注意用count这个统计出现次数的方法。
还有就是group by与order by有什么区别，order by就是排序。而group by就是分组，举个例子好说点，group by 单位名称 
这样的运行结果就是以“单位名称”为分类标志统计各单位的职工人数和工资总额。
这样可以更好的分下类，更好看一些。
还有就是为什么没有用where而是用的having，记住下面的两句话就好了。

WHERE语句在GROUP BY语句之前；SQL会在分组之前计算WHERE语句。   
HAVING语句在GROUP BY语句之后；SQL会在分组之后计算HAVING语句。


**Tyorofurin**

1.下一条salary高于本条才算涨幅，大部分答案都是只要出现了一条记录就算一次涨幅

2.个人比较严格的话，salary高于前一条才算涨幅，对于每条记录查询它上一条记录判断生成临时表，在做统计就好了。

```sql
SELECT tmp.emp_no,
       Count(c) AS t
FROM   (SELECT emp_no,
               IFNULL(s1.salary > (SELECT s2.salary
                            FROM   salaries AS s2
                            WHERE  s1.from_date > s2.from_date
                            and s1.emp_no  = s2.emp_no
                            ORDER  BY s2.from_date DESC
                            LIMIT  1),1) AS c,
               s1.from_date
        FROM   salaries AS s1) tmp
GROUP  BY tmp.emp_no
HAVING Count(*) > 15;
```