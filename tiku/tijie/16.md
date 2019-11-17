## 解题思路

抓重点，考你什么时全局变量，没有使用声明而声明的变量，那就是全局变量，这里只需要在myObject前面加个var(let通不过，可能牛客是不支持),讨巧的做法就是不要加myObject，直接返回return {...}。

## 我的答案

```js
function globals() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
}
```
运行时间：1457ms,占用内存：99892k


## 牛客取经

**林乔夕**

```js
function globals() {
    return {name : 'Jory'};
}
```
运行时间：1561ms,占用内存：82360k

**MingleMingle**

在Javascript语言中，声明变量使用的都是关键字var，如果不使用var而直接声明变量，则该变量为全局变量。


**Rcyan**

const也可以

```js
function globals() {
    const myObject = {
      name : 'Jory'
    };
    return myObject;
}
```
运行时间：1463ms,占用内存：77752k

