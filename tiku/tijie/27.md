## 解题思路

抓重点，执行result(str3)的时候与fn(str1, str2, str3)一样，用bind绑定下然后argument输出啊。

## 我的答案

```js
function partial(fn, str1, str2) {
    return function result(str3) {
        return arguments[0] + ', ' +  arguments[1] + arguments[2];
    }.bind(this, str1, str2);
}
```
运行时间：1470ms，占用内存：77904k

## 牛客取经


**T1mLee**

本质上是偏函数的实现

```js
function partial(fn, str1, str2) {
    return function() {
        let args = Array.prototype.slice.call(arguments, 0)
        return fn.apply(this, [str1, str2].concat(args))
    }
}
```
函数柯里化也可以返回偏函数，达到参数复用的目的。


**bee🌚🌝**

```js
// call和apply必须显式地调用str3，立即执行
// bind不是立即执行，未传入str3时，并未执行，只是返回一个函数，等待参数传入
// this用于上下文不确定的情况
 
// call
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.call(this, str1, str2, str3);
    }
 
     return result;
}
 
// apply（这里只是为了对照）
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.apply(this, [str1, str2, str3]);
    }
 
    return result;
}
 
// 这个bind会生成一个新函数（对象）, 它的str1, str2参数都定死了, str3未传入, 一旦传入就会执行
function partial(fn, str1, str2) {
    return fn.bind(this, str1, str2); // 或 return fn.bind(null, str1, str2);
}
 
// bind同上, 多了一步, 把str3传入的过程写在另一个函数里面,
// 而另一个函数也有str1, str2参数
// 此法有种多次一举的感觉，但是表示出了后续的调用。
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.bind(this, str1, str2)(str3);
    }
 
    return result;
}
 
// 匿名函数，默认this绑定global，与bind的第一个参数为this时效果一样。
function partial(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    }
}
 
// ES6。this指向undefined.
const partial = (fn, str1, str2) => str3 => fn(str1, str2, str3);
```

