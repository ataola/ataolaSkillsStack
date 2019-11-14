## 解题思路

抓重点，不要修改原数组，删除最后一个，那么最简单的我想是赋值再pop()吧，这里拷贝数组要注意了，要深拷贝。

## 我的答案

拷贝数组，然后返回数组pop()
```js
function truncate(arr) {
    let resArr = JSON.parse(JSON.stringify(arr));
    resArr.pop();
    return resArr;
}
```
运行时间：1530ms，占用内存：77884k

也可以遍历一次数组
```js
function truncate(arr) {
    let resArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        resArr.push(arr[i]);
    }
    return resArr;
}
```
运行时间：1693ms,占用内存：77884k

还可以直接用slice()来做
```js
function truncate(arr) {
   return arr.slice(0, arr.length -1);
}
```
运行时间：1463ms，占用内存：77992k


## 牛客取经

看看大佬们的解法

**希留**

用slice(0)
```js
function truncate(arr) {
 var a = arr.slice(0);
     a.pop();
     return a;
 }
 ```
 运行时间：1392ms,占用内存：77856k


**通往明天的旅行**

用slice(0, -1)
```js
function truncate(arr) {
    return arr.slice(0, -1);
}
```
运行时间：1527ms,占用内存：77816k


**soulor.魂**

用filter

```js
function truncate(arr) {
    return arr.filter(function(v,i,ar) {
        return i!==ar.length-1;
    });
}
```
运行时间：1417ms,占用内存：77920k

利用push+apply+pop
```js
function truncate(arr) {
    var newArr=[];
    [].push.apply(newArr, arr);
    newArr.pop();
    return newArr;
}
```
运行时间：1467ms,占用内存：77828k

用join(),split(),pop()
```js
function truncate(arr) {
    var newArr = arr.join().split(',');
    newArr.pop();
    return newArr;
}
```
运行时间：1438ms,占用内存：77976k

利用concat()，pop(),
```js
function truncate(arr) {
    var newArr = arr.concat();
    newArr.pop();
    return newArr;
}
```
运行时间：1410ms，占用内存：77864k

**ヤ一枚夲蛋o○**
```js
function truncate(arr) {
    var arr2 = arr.slice(0);
    arr2.length=arr.length-1;
    return arr2;
}
```
运行时间：1541ms,占用内存：77900k

**萨维塔**

用集合
```js
function truncate(arr) {
    let newArray = [...arr];
    newArray.pop();
    return newArray;
}
```
运行时间：1640ms，占用内存：80628k


