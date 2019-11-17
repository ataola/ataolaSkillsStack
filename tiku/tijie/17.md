## 解题思路

原来的时这样子的：

```js
function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}
```

虽说它不好，但是它执行起来也还是测试用例的'a'， 为此我还啥也没做提交一次看看，做这题我完全是来自男人的直觉吧。

## 我的答案

```js
function functions(flag) {
    let x = null;
    function getValue(x) {
        return x;
    }
    if (flag) {
      x = 'a';
    } else {
        x = 'b';
    }
    return getValue(x);
}
```
运行时间：1487ms,占用内存：77772k

## 牛客取经

**广智_Phoenix**

```js
function functions(flag) {
   var getvalue=null;
    if (flag) {
      getValue = function(){ return 'a'; }
    } else {
      getValue = function() { return 'b'; }
    }

    return getValue();
}
```
运行时间：1465ms,占用内存：77788k

这道题是考函数声明与函数表达式的区别，原题的写法，是在两个逻辑分支里面各有一个函数声明，但是对于函数声明，解析器会率先读取并且让其在执行任何代码前可用，意思就是别的代码还没运行呢，两个getValue声明已经被读取，所以总是执行最新的那个。函数表达式，当解析器执行到它所在的代码行时，才会真正被解释执行，所以两个逻辑分支可以分别执行

**希留**

else中的语句相当于将if中的function重写，因此无论flag为何值，返回的方法始终为重写后的方法。将方法赋值给一个变量，方法就不会被重写，因此才能得到正确的结果。

```js
function functions(flag) {
    if (flag) {
      var getValue = function () { return 'a'; }
    } else {
      var getValue = function () { return 'b'; }
    }
    return getValue();
}
```
运行时间：1405ms,占用内存：129816k

**小楼窗**

原函数的问题是因为不存在块级作业域getValue函数被重写

```js
function functions(flag) {
    function getValue() { return(flag)?'a':'b'; }
    return getValue();
}
```
运行时间：1412ms,占用内存：77876k




