## 解题思路

这题考的感觉是indexOf的升级版，求数组中item出现的次数，时间紧的话可以上map加个计数器，时间不紧张的话，遍历慢慢找。

## 我的答案

map解题
```js
function count(arr, item) {
    let count = 0;
    arr.map( x => {
        if(x === item) count ++;
    });
    return count;
}
```
运行时间：1477ms,占用内存：77880k

遍历，这里举一个forEach吧，当然其实方式很多。
```js
function count(arr, item) {
    let count = 0;
    arr.forEach((val, idx) => {
        if(val === item) {
            count++;
        }
    });
    return  count;
}
```
运行时间：1312ms,占用内存：78008k


## 牛客取经

**牛客8206725号**

支持foreach ie9+、ff2+、Safari3+，Opera9.5+、chrome

**大涛子**

用filter

```js
function count(arr, item) {
    var count = arr.filter(function(a) {
        return a === item;   
    });
    return count.length;
}
```
运行时间：1308ms,占用内存：78000k


**_一步**

用异或

```js
function count(arr, item) {
    var count = 0;
    arr.forEach(function(value){
        (value ^ item) || ++count;
    });
    return count;
}
```
运行时间：1299ms，占用内存：77884k