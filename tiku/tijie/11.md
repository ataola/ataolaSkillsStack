## 解题思路

抓重点不要改原数组，实现一个类似splice的添加元素的功能。

## 我的答案

用splice

```js
function insert(arr, item, index) {
    let newArr = arr.slice(0);
    newArr.splice(index, 0, item);
    return newArr;
}
```
运行时间：1463ms,占用内存：115956k

不用splice，自己实现一个O(n)的算法
```js
function insert(arr, item, index) {
    let newArr = new Array(arr.length + 1);
    for(let i = 0; i < newArr.length; i++) {
        if(i === index) {
            newArr[i] =item;
        }else if(i < index) {
            newArr[i] = arr[i];
        }else {
            newArr[i] = arr[i - 1];
        }
    }
    return newArr;
}
```
运行时间：1401ms,占用内存：153436k

## 牛客取经

**soulor.魂**

splice + concat
```js
function insert(arr, item, index) {
    return arr.slice(0,index).concat(item,arr.slice(index));
}
```
运行时间：1326ms,占用内存：77872k

