# 正则

* 正则匹配首字母大写

```js
let str = "hello world";

function f($1) {
    return $1.substring(0, 1).toUpperCase() + $1.substring(1);
}

console.log(str.replace(/\b\w/g, f));
```


