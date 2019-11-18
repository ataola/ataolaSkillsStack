## 解题思路

通过call和apply能够改变函数的执行上下文

## 我的答案

```js
function speak(fn, obj) {
  return fn.call(obj)
}
```
运行时间：1469ms，占用内存：77776k

```js
function speak(fn, obj) {
  return fn.apply(obj)
}
```
运行时间：1456ms,占用内存：77808k


## 牛客取经

**希留**

在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。

```js
function speak(fn, obj) {
  return fn.apply(obj, obj);
 }
```
运行时间：1492ms,占用内存：77840k

**soulor.魂**

```js
//bind
function speak(fn, obj) {
    return fn.bind(obj)();
}
```
运行时间：1597ms,占用内存：77836k

**soulor.魂 回复 灵魂画师。 ：** 因为call/apply是直接调用目标函数，bind只是返回目标函数，并不调用，所以要用()执行函数


**代码和远方的梦想**

```js
function speak(fn, obj) {
    return fn.apply(obj,[])
}
```
运行时间：1430ms,占用内存：77776k

将fn的执行上下文改为obj对象，也就是说把fn的方法 放到 obj上执行（放到obj执行了，执行上下文当然是obj对象了）相当于把obj 的定义上下文改为 fn的，所以：

