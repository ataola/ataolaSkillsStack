## 解题思路 
   
这题的思路，我的想法是遍历相加返回值，这里的遍历的方法有很多，当然啦，用Array.prototype.reduce()也是可以的，暂时想到的这两条路子。我用for of 提交的代码的运行时间：1491ms，占用内存：77900k (2011.11.11)

## 我的答案

**法一：**

```js
function sum(arr) {
    let sum = 0;
    for(let v of arr) {
        sum += v;
    }
    return sum;
}
```
运行时间：1491ms，占用内存：77900k


**法二：** 

```js
function sum(arr) {
    let sum = 0;
    for(let k in arr) {
        sum += arr[k];
    }
    return sum;
}
```
运行时间：1474ms,占用内存：77896k

**法三：** 

```js
function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```
运行时间：1580ms,占用内存：77772k

**法四：**

```js
function sum(arr) {
    return arr.reduce(function(v, sum) {
        sum += v;
        return sum;
    });
}
```
运行时间：1497ms,占用内存：77880k


## 牛客取经

看看讨论区有没有值得我学习的解法，嘿嘿。

**O.z.** 

递归(不考虑算法复杂度)
```js
function sum(arr) {
    var len = arr.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}
```
运行时间：1447ms，占用内存：77872k

reduce
```js
function sum(arr) {
    return arr.reduce(function(prev, curr, idx, arr){
        return prev + curr;
    });
}
```
运行时间：1386ms,占用内存：77772k


forEach()
```js
function sum(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr) {
        s += val;
    }, 0);

    return s;
}
```
运行时间：1458ms,占用内存：77780k


eval(), 这个6啊
```js
function sum(arr) {
    return eval(arr.join("+"));
}
```

运行时间：1362ms,占用内存：77772k


这里也可以用ES6的语法，因为这里讲的是方法，所有就不放了。