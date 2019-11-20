## 解题思路

抓重点，把第一个参数num转换成二进制，取第二个参数bit，然后将返回数组的bit-1项，因为数组是从0开始的。

## 我的答案

```js
function valueAtBit(num, bit) {
        let resArr = [];
        while(num !== 0) {
            resArr.push(num % 2);
            num = Math.floor(num / 2);
        }
       return resArr[bit - 1];
}
```
运行时间：1607ms，占用内存：77804k

## 牛客取经

**冷冰冰**

```js
function valueAtBit(num, bit) {
    return (num >> (bit -1)) & 1;
}
```
运行时间：1487ms,占用内存：77900k

这个6啊，佩服佩服。

**九月初十月底 回复 Areana ：** 自己可以写个二进制数字分析下，如：1000 0000 第八位是1，要想将他移到第一位上，移动的就是bit-1位，之后让它和1与，这样就能将除了第一位之外的其他位上的数字置0，输出的就只有第一位上的数字，也即是我们需要的那个

**希留**

通过num.toString(2)能直接将num转换为2进制数格式的字符串，利用下标就能将对应值取出来。题目返回的数字是从右往左，因此下标为倒数。

```js
function valueAtBit(num, bit) {
  var s = num.toString(2);
     return s[s.length - bit];
 }
```
运行时间：1527ms,占用内存：77880k

链接：https://www.nowcoder.com/questionTerminal/2c7f25d532aa4e20b67af9d3c93dc65f?f=discussion
来源：牛客网

**qjh**

```js
function valueAtBit(num, bit) {
    //toString转化为二进制，split将二进制转化为数组，reverse()将数组颠倒顺序
    var arr = num.toString(2).split("").reverse();
    return arr[bit-1];
}
```
运行时间：1572ms,占用内存：77772k

**辟黑夜之光**

```js
function valueAtBit(num, bit) {
    return (num&Math.pow(2,bit-1))==0?0:1;
}
```
运行时间：1488ms,占用内存：78012k

方法多多 就是不知道每个方法的优点与缺点
我的是按位与运算 看结果是不是0
