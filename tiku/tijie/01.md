## 解题思路 

通过遍历一次数组，然后数组中的每一项与给定元素作比较，判断如果相等的话，返回下标值，否则返回-1。这题看样子像是在考察数组indexOf()函数的实现，我提交答案的运行时间：1462ms，占用内存：77900k （2019.11.08）

## 我的答案

```js
function indexOf(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1, 2, 3, 4], 3));
```

## 牛客取经

一千个人有一千个人的解法，有没有更好的解法呢？

通过相关交流学习楼下几位秀儿的答案值得学习：

**旅行的孩子**

```js
function indexOf(arr, item) {
  if (Array.prototype.indexOf){
      return arr.indexOf(item);
  } else {
      for (var i = 0; i < arr.length; i++){
          if (arr[i] === item){
              return i;
          }
      }
  }     
  return -1;
}
```

**Super丶Bob**

```js
/** 获取元素位置 */
function indexOf(arr, item) {
    if (!arr || !arr.length) {
        return -1;
    }
  
    for (var i = 0, len = arr.length; i < len; i++) {
        // 支持 arr[i] 为对象，数组等
        if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
            return i
        }
    }
    return -1;
}
```

**柒月雨**

```js
function indexOf(arr, item) {
    if(!arr.includes(item)){return -1;}
    var m = new Map(arr.map((val,index) =>{return [index,val]}));
    for(const [index,val] of m){
        if(val === item){
            return index
        }
    }
}
```

**萨维塔**

```js
function indexOf(arr, item) {
    for (let [inx, value] of arr.entries()) {
        // 由于此题不严谨所以考虑了对象元素的比较
        if (value === item || (value instanceof Object && JSON.stringify(value) === JSON.stringify(item)))
            return inx;
    }
    return -1;
}
```

**禹**

```
function indexOf(arr, item){
    var storage = [];
    var arr_len = arr.length;
    for(var i = 0 ; i<arr_len; i++){
        if(arr[i] == item)    {
            storage.push(i);
        }
    }
    if(storage == undefined){
        storage = -1;
    }
    return storage.toString();
}
```