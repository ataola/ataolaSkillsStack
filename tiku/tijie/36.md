## 解题思路

抓重点，把字符串二进制转十进制，学了这么久的ES6,让它表现一下外，所有我这里就不提供for遍历的那种方法了，先转字符然后字符它转成的数组的值不是number而是string，所有把map和parseInt安排上，最后reduce数组求和外加Math.pow();

## 我的答案

```js
function base10(str) {
    return str.split('').map(x => parseInt(x)).reverse().reduce((pre, cur, index) => {
        return pre + Math.pow(2, index) * cur;
    })
}
```
运行时间：1508ms,占用内存：77856k

## 牛客题解

**希留**

parseInt方法可以将其它进制转换为十进制，只需要给该方法传入需要转换的字符串和该字符串的进制表示两个参数即可。

```js
function base10(str) {
    /**
        其它进制转十进制
        parseInt(str,2)
        parseInt(str,8)
        parseInt(str,16)
    */
    return parseInt(str,2);
}
```
运行时间：1352ms, 占用内存：77772k

**purcy**

不使用内部方法,一句代码解决。
```js
function base10(str) {
    return str.split('').reduce(function(total,value,index){
        return total + (value << (str.length - 1 - index));
    },0);
}
```
运行时间：1627ms,占用内存：77912k

**Marvely**

```js
function base10(str) {
    var arr=str.split("").reverse()
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]*(Math.pow(2,i))
    }
    return sum
}
```
运行时间：1426ms,占用内存：77920k


**AlexGump**

```js
function base10(str) {
    return Number('0b'+str);
}
```
运行时间：1551ms,占用内存：77772k







