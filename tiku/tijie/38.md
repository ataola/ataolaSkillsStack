## 解题思路

抓重点，精度问题，先观察a和b相乘怎么了，发现不符合预期，怎么办？ toFixed()走一波，fixed多少，取决于a和b那个小，然后toString()走你，取其字符串长度然后-2。这里可能有人看到我楼下的答案会有疑问？ 那要是a后面跟小数而且比b长你不是错了吗？抱歉题目说是a和b可能是小数，请理解啥是小数。

## 我的答案

```js
function multiply(a, b) {
    let fixed = a > b ? b.toString().length - 2 : a.toString().length - 2;
    return (a * b).toFixed(fixed);
}
```
运行时间：1437ms,占用内存：77948k

## 牛客取经

**silver_bullet**

计算两小数的小数点位数，然后相加得到保留的小数点位数，用tofixed函数即可

```js
function multiply(a, b) {
    var re = /\./;
    var aDec = a.toString().split('.')[1] || '';
    var bDec = b.toString().split('.')[1] || '';
    var fix = aDec.length  + bDec.length;
    return (a * b).toFixed(fix);
}
```
运行时间：1465ms,占用内存：77828k


**希留**

通过将a、b小数位数的相加，能够得到a*b结果的小数位数最大可能值。然后使用toFixed方法可以将结果的小数位数指定为可能的最大值，即保证了结果的精度。但本题实际上，仅返回a*b也能通过。在浏览器上做实验，最大17位的小数位数满足了该题全部的测试用例。

```js
function multiply(a, b) {
  return a*b;
 }
```

