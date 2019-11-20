## 解题思路

看到有字符串的出现第一个想到的，你千万别是遍历就好，用正则会快一点，而且短小精悍。

## 我的答案

```js
function containsNumber(str) {
    return /\d/g.test(str);
}
```
运行时间：1654ms，占用内存：77772k
## 牛客取经

**特前此摹拜大佬**

```js
function containsNumber(str) {
    return str.search(/\d/) === -1 ? false : true;
}
```

**青ツ玉**

```js
function containsNumber(str) {
    for(var i=0;i<10;i++){
        if(str.indexOf(i)!=-1){
            return true;
        }
    }
    return false;
}
```

**seejie**

```js
function containsNumber(str) {
    return !!str.match(/\d/g);
}
```

**seejie ：** match成功检索到内容会返回字符串内容，检测不到则返回null。而答案要求返回true或false，所以去掉!!不符合题意。而双!!运算会强制类型转换，可以理解为字符串强转true，一个！为false，两个为true;null同理，null强转为false，一个！为true，两个！！为false。双!!运算可以理解为没有改变变量本身的真假值，只是将变量强制转换为boolean值。


**牛客2360551号**

```js
function containsNumber(str) {
    for(var i=0;i<str.length;i++){
        if(Number(str[i])){
            return true;
        }
    }
    return false;
}

```


