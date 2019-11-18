## 解题思路

只是知道call能够给方法传参数，于是就...arr，发现不符合预期，果断前面塞个""。后面还需要补下call的知识。

## 我的答案

```js
function argsAsArray(fn, arr) {
    return fn.call("",...arr);
}
```
运行时间：1818ms,占用内存：77880k

## 牛客取经

**希留**

调用函数可以使用call或者apply这两个方法，区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。

```js
function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
 }
```
运行时间：1451ms,占用内存：78004k


**老秆**

```js
function argsAsArray(fn, arr) {
    return fn(...arr)
}
```
运行时间：1451ms,占用内存：77872k


**ivuu**

666666

笨办法
```js
function argsAsArray(fn, arr) {
  return fn(arr[0],arr[1],arr[2]);
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为50.00%


用apply
```js
function argsAsArray(fn, arr) {
  return fn.apply(fn, arr);
}
```
运行时间：1449ms,占用内存：77800k

```js
//或者
function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
}
```
运行时间：1443ms,占用内存：77852k

用call

```js
function argsAsArray(fn, arr) {
  return fn.call(fn, arr[0],arr[1],arr[2]);
}
```
运行时间：1624ms,占用内存：80080k
```js
//或者
function argsAsArray(fn, arr) {
  return fn.call(this, arr[0],arr[1],arr[2]);
}
```
不通过
您的代码已保存
请检查是否存在数组越界等非法访问情况
case通过率为0.00%
terminate called after throwing an instance of 'std::system_error'
what(): Resource temporarily unavailable




