## 解题思路

抓重点不要修改原数组，考察shift的实现，尽量就不要用shift，如果用shift的话，拷贝到一个新数组，然后shift一下，那和咸鱼有什么区别，splice尽量不要用吧。可以先拷贝到一个新数组，然后遍历一次，长度减1。因为是最头上那个嘛，arr.filter不香吗？

## 我的答案


```js
function curtail(arr) {
    let newArr = arr.slice(0);
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        newArr[i] = newArr[i + 1];
    }
    newArr.length = len -1;
    return newArr;
}
```
运行时间：1400ms，占用内存：86560k

```js
function curtail(arr) {
    return arr.filter((val, idx) => {
        return idx !== 0;
    })
}
```
运行时间：1585ms ,占用内存：80704k



## 牛客取经

看看大佬的解法

**太阳光**

```js
function curtail(arr) {
    return arr.slice(1);
}
```
运行时间：1551ms,占用内存：77896k

**郭\*\***

```js
function curtail(arr) {
    var result = [];
    for(var i = arr.length - 1; i > 0; i--){
        result[i-1] = arr[i]
    }
    return result;
}
```
运行时间：1494ms,占用内存：78004k

**单手打包**

```js
function curtail(arr) {
    const [, ...fooNumbers] = arr;
    return fooNumbers
}
```
运行时间：1471ms,占用内存：78176k