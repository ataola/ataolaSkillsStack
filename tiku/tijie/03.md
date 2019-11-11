## 解题思路

看到这题，抓住重点不能改变原数组，最笨的方法就是全部遍历一次，如果数组的项的值和item对比上了，就不要塞到新数组里，看到测试用例有可能是重复的，所以这里优化的话，我想到的是集合先去重稍微会遍历少一点最坏的情况下，当然这里也可以用filter,map啥的API。

## 我的答案

直接遍历(这里的形式和上一题一样可以for in, for of, forEach这里就不做展开了)

```js
function remove(arr, item) {
    let resArr = new Array();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== item) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}
```
运行时间：1567ms，占用内存：77876k

对楼上直接遍历做的优化

```js
function remove(arr, item) {
    let resArr = new Array();
    let tmpArr = [...new Set(arr)];
    for(let i = 0; i < tmpArr.length; i++) {
        if(tmpArr[i] !== item) {
            resArr.push(tmpArr[i]);
        }
    }
    return resArr;
}
```
运行时间：1407ms，占用内存：77808k

用数组的API，arr.filter()

```js
function remove(arr, item) {
  function isItem(value) {
      return value !== item;
  }
  return arr.filter(isItem);
}
```
运行时间：1539ms,占用内存：77772k


## 牛客取经

看看其他友人的解法

**玲\^_^**


splice()

```js
function remove(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}
```
运行时间：1633ms，占用内存：80692k


**seejie**

这个正则是真的骨骼精奇，佩服佩服,它这个返回的是字符数组。

```js
function remove(arr, item) {
    return arr.join('').replace(new RegExp(item ,'g'),'').split('');
}
```
运行时间：1403ms,占用内存：77868k

进一步优化下优化下转数组的，

```
function remove(arr, item) {
    return arr.join('').replace(new RegExp(item ,'g'),'').split('').map(x => parseInt(x));
}
```

**ganp**

考虑代码的健壮性

```js
function remove(arr, item) {
    if (Array.prototype.filter) {
        return arr.filter(function (v) {
            return v !== item
        })
    } else {
        let v = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                v.push(arr[i])
            }
        }
        return v
    }
}
````
运行时间：1409ms，占用内存：77872k
