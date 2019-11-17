## 解题思路

抓重点找出所有出现的位置，最常见的方法，还是遍历一次，map也还香的。

## 我的答案

```js
function findAllOccurrences(arr, target) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            resArr.push(i);
        }
    }
    return resArr;
}
```
运行时间：1464ms,占用内存：77816k

优化一下楼上的，时间反而更长了,开销更大了，是不是这个数据量太小没有优势哦。。。。。。

```js
function findAllOccurrences(arr, target) {
    let resArr = [];
    let len = arr.length;
    let mid = null;
    if(len % 2 === 0) {
        mid = len / 2 - 1;
    }else{
        mid = Math.floor(len / 2) ;
    }
    for (let i = 0; i <= mid; i++) {
        if(arr[i] === target) {
            resArr.push(i);
        }

        if(arr[len - i - 1] === target) {
            resArr.push(len - i - 1);
        }
    }
    return resArr;
}

```
运行时间：1558ms，占用内存：128232k

map, wtf??? 哪里越界了。

```js
function findAllOccurrences(arr, target) {
    let resArr = [];
    arr.map( (val, idx) => {
        if(val === target) {
            resArr.push(idx);
        }
    });
    return resArr;
}
```
不通过
您的代码已保存
请检查是否存在数组越界等非法访问情况
case通过率为0.00%
terminate called after throwing an instance of 'std::system_error'
what(): Resource temporarily unavailable

## 牛客取经

**soulor.魂**

filter
```js
function findAllOccurrences(arr, target) {
    var result=[];
    arr.filter(function(item,index){
        return item===target&&result.push(index);
    });
    return result;
}
```
运行时间：1601ms,占用内存：77772k

lastIndexOf+slice/splice
```js
function findAllOccurrences(arr, target) {
    var result=[],index=arr.lastIndexOf(target);
    while(index>-1){
        result.push(index);
        arr.splice(index,1);//arr=arr.slice(0,index);
        index=arr.lastIndexOf(target);
    }
    return result;
}
```
运行时间：1365ms,占用内存：77812k


indexOf
```js
function findAllOccurrences(arr, target) {
    var result=[],index=arr.indexOf(target);
    while(index>-1){
        result.push(index);
        index=arr.indexOf(target,index+1);
    }
    return result;
}
```
运行时间：1559ms,占用内存：77900k

**句号小弟**

```js
function findAllOccurrences(arr, target) {
    var temp = [];
    arr.forEach(function(val,index){
        val !== target ||  temp.push(index);
    });
    return temp;
}
```
运行时间：1469ms,占用内存：77888k

**jiueXY**
反过来，这个也行：val == target &&  temp.push(index);


**bee🌚🌝**

```js
// 使用map和filter
    function findAllOccurrences(arr, item) {
        return arr.map(function(e, index) {
            return e === item ? index : -1;
            /* 样例返回结果为[ -1, -1, -1, -1, -1, -1, -1, 0, 6 ] */
        }).filter(function(i) {
            return i !== -1;
            /* 过滤掉 i === -1 的情况 */
        })
    }
 
// ES6箭头函数版
    const findAllOccurrences = (arr, item) =>
        arr.map((e, index) => e === item ? index : -1)   
           .filter(i => i !== -1);
```

**华科平凡**

```js
function findAllOccurrences(arr, target) {
    return arr.map(function (v,i) {if (v===target) return i;  })
        .filter(function (t) { return t>=0; })
}
```
运行时间：1476ms,占用内存：113428k

