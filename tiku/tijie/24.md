## 解题思路

这题就像是宾果消消乐一样，你拿来凑吧，functionFunction('Hello')('world')，我们分析functionFunction('Hello')是不是返回了一个f，然后问题就是f('world'),把它加起来吧。

## 我的答案

```js
function functionFunction(str) {
    var f = function(s){
        return str + ', '+s;
    }
    return f;
}
```
运行时间：1431ms,占用内存：77912k

## 牛客取经

**T1mLee**

本题主要考察函数柯里化，实际上是要求将一个字符串拼接函数进行柯里化。

```js
function functionFunction(str) {
  // 字符串拼接函数
  function strAdd() {
    return Array.prototype.join.call(arguments, ', ')
  }
 
  // 柯里化工具函数，argLength为目标函数的参数的长度
  function curry(fn, argLength) {
    return function curried(...args) {
      if (args.length >= argLength) {
        return fn.apply(this, args)
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2))
        }
      }
    }
  }
 
  // 将字符串函数柯里化，目标参数长度为2（也可以是其他长度）
  // 并进行初次调用
  return curry(strAdd, 2)(str)
}
```
运行时间：1433ms,占用内存：77824k

**O.z.**

```js
function functionFunction(str) {
    var ret = Array.prototype.slice.call(arguments).join(', ');
    var temp = function(str) {
        ret = [ret, Array.prototype.slice.call(arguments).join(', ')].join(', ');
        return temp;
    };
    temp.toString = function(){
        return ret;
    };
    return temp;
}
//输出：Hello, World
console.log(functionFunction('Hello')('World').toString());
//输出：1, 2, 3, 4
console.log(functionFunction(1)(2)(3, 4).toString());
```
虽说是提交过不了，但是答案很牛逼。

**希留**

首先执行functionFunction('Hello')，传入参数str，然后返回函数f，f与('world')组合，执行f('world')，传入参数s，f返回str+", "+s，即Hello, world。注意中间的逗号后面有一个空格。

```js
function functionFunction(str) {
  var f = function(s){
         return str+", "+s;
     }
     return f;
 }
```
运行时间：1431ms,占用内存：77912k

**莫荣辉**

```js
function functionFunction(str) {
      var args=Array.prototype.slice.call(arguments,0);
   var f=function(){
          var args_f=Array.prototype.slice.call(arguments,0);
          args_f=args.concat(args_f);
          return functionFunction.apply(this,args_f);
      }
      f.valueOf=function(){
          return args.join(", ");
      }
      f.toString=function(){
          return args.join(", ");
      }
      return f;
  }
```
虽然这个也通不过， 但是应该是对的

**特前此摹拜大佬**

```js
function functionFunction(str) {
    return function(newStr) {
                return [str, newStr].join(', ');
            };
}
```
运行时间：1498ms,占用内存：77880k

