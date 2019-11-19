## 解题思路

抓重点，把传入的参数都加起来，并且测试用例全是数字，那么遍历求和吧。

## 我的答案

```js
function useArguments() {
    let res = 0;
    for(key in arguments) {
        res += arguments[key];
    }
    return res;
}
```
运行时间：1482ms，占用内存：77876k

## 牛客取经

**T1mLee**

```js
function useArguments() {
    let args = Array.prototype.slice.call(arguments, 0)
    return args.reduce((a, b) => a + b)
}
```
运行时间：1572ms,占用内存：91128k

**toy**

```js
function useArguments() {
    var arr=Array.prototype.slice.call(arguments)//把arguments类数组转化为数组
    return eval(arr.join("+"));//求和
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为0.00%

**刘放**

```js
function useArguments() {
    var result = Array.prototype.reduce.call(arguments,function(a,b){return a+b;});
    return result;
}
```
运行时间：1419ms,占用内存：77860k


**Kylewwh**

```js
var useArguments = (...args) => args.reduce((a,b) => a+b)
```

**小呆唯**

不支持ES6🤣

```js
function useArguments() {
    return [...arguments].reduce((a,b)=>a+b)
}
```

