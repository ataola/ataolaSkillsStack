## 解题思路

抓重点柯里化，首先我们描述下柯里化，就是一个函数后面跟了很多个括号内有参数，然后我们要做的事情就是收集这些参数最后执行，这个说下我的理解不一定对的。为什么呢，因为做这题的时候超时了......


## 我的答案

```js
function curryIt(fn) {
    let args = [];
    return function () {
        args = args.concat([...arguments]);
        if(args.length >=  fn.length){
            return fn(...args);
        }
        return arguments.callee;
    }
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为57.14%


## 牛客取经

**T1mLee**

函数柯里化的实现，只不过严格限制了每次返回的函数只能传入一个参数：

```js
function curryIt(fn) {
    let args = []  
 
    return function curried(arg) {
        args.push(arg)      
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(arg2) {  
                return curried.call(this, arg2)
            }
        }
    }
}
```
运行时间：1899ms,占用内存：77848k

**与卿可津**

不用 arguments.callee 的方法，用变量名代替了，大同小异：

```js
function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result =  function (arg){
        args.push(arg);
        length --;
        if(length <= 0 ){
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
     
    return result;
}
```
运行时间：1481ms,占用内存：77908k


**希留**

柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。简单理解题目意思，就是指，我们将预定义的函数的参数逐一传入到curryIt中，当参数全部传入之后，就执行预定义函数。于是，我们首先要获得预定义函数的参数个数fn.length，然后声明一个空数组去存放这些参数。返回一个匿名函数接收参数并执行，当参数个数小于fn.length，则再次返回该匿名函数，继续接收参数并执行，直至参数个数等于fn.length。最后，调用apply执行预定义函数。
```js
function curryIt(fn) {
     //获取fn参数的数量
     var n = fn.length;
     //声明一个数组args
     var args = [];
     //返回一个匿名函数
     return function(arg){
         //将curryIt后面括号中的参数放入数组
         args.push(arg);
         //如果args中的参数个数小于fn函数的参数个数，
         //则执行arguments.callee（其作用是引用当前正在执行的函数，这里是返回的当前匿名函数）。
         //否则，返回fn的调用结果
         if(args.length < n){
            return arguments.callee;
         }else return fn.apply("",args);
     }
 }
```
运行时间：1763ms,占用内存：78752k

**未命名Q**

```js
function curryIt(fn) {
    return function a(xa){
        return function b(xb){
            return function c(xc){
                return fn.call(this,xa,xb,xc);
            };
        };
    };
}
```
运行时间：1775ms,占用内存：77868k

**太阳光**

```js
function curryIt(fn) {
  var arr=[],l = fn.length;
  return function(x){ 
    arr.push(x);
    return arr.length < l ? arguments.callee : fn.apply(null,arr);
  }
}
```
运行时间：1850ms,占用内存：77988k


**张佃鹏**

```js
function curryIt(fn) {
    var len = fn.length;
    var args = [];
    var result = function(arg)
    {
        args.push(arg);
        if(--len > 0)
            return result;
        else
            return fn.apply(this,args);
    }
    return result;
}
```
运行时间：1715ms,占用内存：78204k

**cdhahaha**

```js
function curryIt(fn) {
        var args = [].slice.call(arguments,1);
        return args.length < fn.length ?  function (a) {
            return curryIt.apply(curryIt,[fn].concat(args,a));
        } :  fn.apply(fn,args) ;
    }
```
运行时间：1585ms,占用内存：83128k


**奥佛兽格基**

```js
function curryIt(fn) {
    return (a)=>(b)=>(c)=>fn(a,b,c);
}
```
es6,浏览器中可以


