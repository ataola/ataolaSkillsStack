## 解题思路

抓重点，fn长的像是哪里的方法？,对象里面的，所有喽后面就有个obj，那么我们需要做的就是将fn放到原型链上面，__proto__是个好主意。

## 我的答案

```js
function alterContext(fn, obj) {
    obj.__proto__.fn = fn;
    return obj.fn();
}
```
运行时间：1760ms,占用内存：78792k

## 牛客取经

**mzvast**

主要有三种答案。

```js
function alterContext(fn, obj) {
  return fn.bind(obj)();//.bind()返回的是一个函数，所以需要立即执行。 }
 
function alterContext(fn, obj) {
  return fn.call(obj);
}
 
function alterContext(fn, obj) {
  return fn.apply(obj);
}
```

**希留**

在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。

```js

function alterContext(fn, obj) {
  return fn.call(obj,obj);
 }
```

**ciphersaw**

可通过给对象创建并赋值新方法 fn() 来实现：

```js
function alterContext(fn, obj) {
    obj.func = fn;
    return obj.func();
}
```
**JanLinaa**

```js
function alterContext(fn, obj) {
    var args = Array.prototype.slice.apply(arguments);
    return fn.apply(obj, args);
}
```

