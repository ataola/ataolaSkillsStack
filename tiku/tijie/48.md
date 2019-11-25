## 解题思路

抓重点，它是的是封装一个函数f，使f的this指向指定的对象，那么也就是说它没想让你取指向它，你把封装好的函数返回就好。

## 我的答案

```js
function bindThis(f, oTarget) {
    return f.bind(oTarget);
}
```
运行时间：1471ms,占用内存：77896k


## 牛客取经

备注:这里为了尊重写题解的同学，但凡有题解我就先看题解。

**offer快碗里来**

```js
function bindThis(f, oTarget) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function(){
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}
```

**☆★~颉逸**

```js
function bindThis(func, oTarget) {
    return function(){
        return func.apply(oTarget, arguments);
    };
}
```

**O.z.**

```js
function bindThis(f, oTarget) {
    if(f.bind){
        return f.bind(oTarget);
    } else {
        return function(){
            return f.apply(oTarget,arguments);
        };
    }
}
```


