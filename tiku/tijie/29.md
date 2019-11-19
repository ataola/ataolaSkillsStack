## 解题思路

抓重点，这题提示你用apply，那么我们只需要做一件事，把argument数组化之后，让fn给我们出去，然后传入数组即可

## 我的答案

```js
function callIt(fn) {
    let argsArr = Array.prototype.slice.call(arguments, 0);
    argsArr.shift();
    return fn.apply(this, argsArr);
}
```
运行时间：1369ms,占用内存：77812k

## 牛客取经

**希留**

因为arguments并非真正的数组，因此要获得callIt的第一个参数之后的所有参数，不能直接使用slice方法截取，需要先将arguments转换为真正的数组才行。有两种常见的方法，一是使用slice方法：var args = Array . prototype . slice . call ( arguments );二是循环遍历逐一填入新数组。在获得了args之后，就可以调用apply来执行传入的函数参数。

```js
function callIt(fn) {
    //将arguments转化为数组后，截取第一个元素之后的所有元素
    var args = Array.prototype.slice.call(arguments,1);
    //调用fn
    var result = fn.apply(null,args);
    return result;
}
```
运行时间：1396ms,占用内存：77744k

**希留 回复 frontier_379 ：** 可以分两步，arguments不是真正的数组，不能直接使用slice方法，所以才会用Array对象原型链上面的slice方法去处理arguments，返回的自然是一个数组。另外，给apply传递null，“”空字符串，默认都是this

**太阳光**

```js
function callIt(fn) {
    return fn.apply(this,[].slice.call(arguments,1));
}
```


