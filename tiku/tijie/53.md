## 解题思路

数组去重首先想到集合，遗憾的是这种方法你去不掉对象相等的。当然这里还有很多其他的方法,就比如说遍历，太多了就不举例了，就记住一点，如果是数组中有对象的话就不能这么偷懒地写了。

## 我的答案

```js
Array.prototype.uniq = function () {
    return [...new Set(this)];
};
```
运行时间：1445ms，占用内存：78068k

```js
Array.prototype.uniq = function () {
    let resArr = [];
    this.forEach((x) => {
        if(!resArr.includes(x)){
            resArr.push(x);
        }
    });
    return resArr;
};
```

运行时间：1493ms，占用内存：77976k
## 牛客题解

**陌上**

```js
Array.prototype.uniq = function () {
   var resArr = [];
   var flag = true;
     
   for(var i=0;i<this.length;i++){
       if(resArr.indexOf(this[i]) == -1){
           if(this[i] != this[i]){   //排除 NaN
              if(flag){
                   resArr.push(this[i]);
                   flag = false;
              }
           }else{
                resArr.push(this[i]);
           }
       }
   }
    return resArr;
}
```

