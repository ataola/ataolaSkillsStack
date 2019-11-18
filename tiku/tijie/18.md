## 解题思路

抓重点找规律，当输入的字符串为纯数字，它返回数字，当输入的字符串开头是数字，后面有字符，返回数字，当输入字符串为16进制数，返回0。
重点在最后一句，十六进制返回0，因为前面的你拿来跑，答案都是符合期望的，所以就最后16进制的时候输出处理下就好了。

## 我的答案

```js
function parse2Int(num) {
    if(num.length > 2 && num[1] === 'x'){
        num = 0;
    }
    return parseInt(num);
}
```
运行时间：1683ms，占用内存：79260k

## 牛客取经

**李加满**

parseInt(string, radix) 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

```js
function parse2Int(num)
{
    return parseInt(num,10);
}
```
运行时间：1440ms,占用内存：77860k

举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

**duyutaochn**

```js
function parse2Int(num) {

    return parseInt(parseFloat(num));
}
```
运行时间：1669ms,占用内存：77956k

**端神**

```js
function parse2Int(num) {
    return parseFloat(num);
}
```
运行时间：1527ms,占用内存：77880k

**不知道起什么名字**

parseFloat（）只解析十进制


**Yoghurt尧**

```js
function parse2Int(num) {
    var regex=/^\d+/;
    num=regex.exec(num)[0];
    return parseInt(num);
}
```
运行时间：1556ms,占用内存：79496k

**牛牛abc**

```js
function parse2Int(num) {
    return parseInt('0'+num);
}
```
运行时间：1553ms,占用内存：77872k


**進撃のNiko**

```js
function parse2Int(num) {
    return parseInt(num.match(/^(\d+)/)[0]);
}
```
运行时间：1580ms,占用内存：77832k


**青ツ玉**

```js
function parse2Int(num) {
    var newNum;
    if(num[0]=='0' && num[1]=='x'){
        newNum = 0;
    }
    else{
        newNum = parseInt(num);
    }
    return newNum;
}
```
运行时间：1656ms,占用内存：77856k

**seejie**

```js
function parse2Int(num) {
    return parseInt(num.replace('x','!'));
}
```
运行时间：1699ms,占用内存：77796k

**特前此摹拜大佬**

```js
function parse2Int(num) {
    function parseInt(item) {
        return +String(item).match(/\d+/);
    }
    return parseInt(num);
}
```
运行时间：1636ms,占用内存：77800k


