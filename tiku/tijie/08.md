## 解题思路

抓重点，返回一个新的数组，而且这里只是插入一个在最前面，那么自然而然会想到创建一个新数组然后里面有一个初始的元素item，遍历一下然后新数组添加就好了，因为这里的遍历前面有讲过，这里就不作答案介绍，那么我们再来思考下禁止你用map，怎么解，我们可以拷贝一个数组，然后长度加一，插入的放到arr[0],遗憾的是我的提交没有通过，这题主要还是考察unshift的实现，所以在下文你将看不到unshift;

## 我的答案

用arr.map()来操作
```js
function prepend(arr, item) {
    let resArr = [item];
    arr.map( x => resArr.push(x));
    return resArr;
}
```
运行时间：1514ms，占用内存：147568k

这个我没有通过
```js
function prepend(arr, item) {
   let newArr = arr.slice(0);
   let len = arr.length;
   newArr.length = len + 1;
   for(let i = len; i >= 1; i--) {
       newArr[i] = newArr[i - 1];
   }
   newArr[0] = item;
   return newArr;
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为75.00%




## 牛客取经

看看大佬的解法

**nailuoGG**

用concat，这个我倒是一开始没有想到,很遗憾没通过

```js
function prepend(arr, item) {
    return [item].concat(arr);
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为75.00%

**BestWay**

这个扩展字符用的，我也没有想到

```js
function prepend(arr, item) {
    return [item, ...arr];
}
```
运行时间：1545ms,占用内存：77820k

**soulor.魂**

使用push.apply

```js
function prepend(arr, item) {
    var newArr=[item];
    [].push.apply(newArr, arr);
    return newArr;
}
```
运行时间：1476ms,占用内存：77916k

当然，这个大佬还有好多解法，这里就不放了。因为在之前的解题中已经接触过类似的。

**牛客561324号**

```js
function prepend(arr, item) {
   return [].concat(item, arr);
}
```
运行时间：1459ms,占用内存：77900k



