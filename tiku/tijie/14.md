## 解题思路

咋一看，不就是赋值一次然后arr.map一次就出来了，当然这里遍历也可以。

## 我的答案

```js
function square(arr) {
    let newArr = arr.slice(0);
    return newArr.map( x => x*x);
}
```
运行时间：1492ms，占用内存：77772k

```js
function square(arr) {
    let newArr = arr.slice(0);
    for(let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i] * newArr[i];
    }
    return newArr;
}
```
运行时间：1488ms,占用内存：77840k

我就是想看下forEach和for哪个快，当然不是研究啊，就在这题上比较下，可能并非结论

```js
function square(arr) {
    let newArr = arr.slice(0);
    newArr.forEach((val, idx, newArr) => {
       newArr[idx] = val * val;
    });
    return newArr;
}
```
运行时间：1379ms,占用内存：77772k


## 牛客取经

**希留**

```js
function square(arr) {
    //声明一个新的数组存放结果
    var a = [];
    arr.forEach(function(e){
        //将arr中的每一个元素求平方后，加入到a数组中
        a.push(e*e);
    });
    return a;
}
```
运行时间：1504ms,占用内存：77760k

**前端小菜鸟aaaaa** 

```js
function square(arr) {
var a=[];
    for(var i=0;i<arr.length;i++){
        a.push(arr[i]*arr[i]);
    }
    return a;
}
```
运行时间：1487ms,占用内存：110968k


**Narsingh**

Math.pow()大部分人应该也能想到， 但是万不得已我是不会用的

```js
function square(arr) {
    return arr.map(function(cur) {
        return Math.pow(cur, 2);
    });
}
```
运行时间：1418ms，占用内存：110776k

