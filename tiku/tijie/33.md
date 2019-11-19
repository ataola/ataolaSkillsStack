## 解题思路

和上一题一样，拿来过渡的， 理解"&&"

## 我的答案

```js
function and(a, b) {
      return a && b;
}
```
运行时间：1891ms,占用内存：77924k
## 牛客取经

**華方**

```js
function and(a, b) {
    return !!(a && b)
    //如果a为true，b为非Boolean就会返回非Boolean值，所以加一步转换
}
```

**莫得offer ：** 这样返回的是布尔值，类似还有一元加操作符转换字符串