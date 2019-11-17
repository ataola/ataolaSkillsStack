## 解题思路

找突破口，遍历一次当前元素和后面的元素作对比，如果相等塞到返回数组，最后给返回数组去重，看了下测试用例返回[1,3,4]，而我返回的是[1,4,3]我就在纠结要不要从小到大排个序，后来发现我的答案也通过了。

## 我的答案

```js
function duplicates(arr) {
    let resArr =[];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j ++) {
            if(arr[i] === arr[j]){
                resArr.push(arr[i]);
            }
        }
    }
    return [... new Set(resArr)];
}
```
运行时间：1407ms,占用内存：79492k


## 牛客取经

**希留**

```js
function duplicates(arr) {
    //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
    var a = [],b = [];
    //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
    for(var i = 0; i < arr.length; i++){
        if(!b[arr[i]]){
            b[arr[i]] = 1;
            continue;
        }
        b[arr[i]]++;
    }
    //遍历b数组，将其中元素值大于1的元素下标存入a数组中
    for(var i = 0; i < b.length; i++){
        if(b[i] > 1){
            a.push(i);
        }
    }
    return a;
}
```
运行时间：1431ms,占用内存：77828k

**睦邻花开** ：可是如果数组中的某些数据比较大，那么b数组就会特别大。

**joker-slient** ：如果原数组中的每一项不全是数值，得到关联数组，那么对数组b的遍历要做修改。

```js
for(var p in b){
    if(b[p]>1){
    a.push(p);
    }
}
```

**poor_li**

```js
//使用对象，不会有当值很大时这种方案出现的浪费大量空间的情况
function duplicates(arr) {
    var obj = {};
    var repeatList = [];
    //遍历数组，将数组的值作为obj的索引，出现次数为值
    arr.forEach(function(item){
        if(obj[item]){
            obj[item] +=1;
        }else{
            obj[item] = 1;
        }
    });
    //获取对象自身属性
    var propertyNames = Object.getOwnPropertyNames(obj);
    //遍历对象，将重复出现的元素取出
    propertyNames.forEach(function(item){
        if(obj[item] > 1){
            repeatList.push(parseInt(item));
        }
    });
    return repeatList;
}
```
运行时间：1701ms,占用内存：80572k


**MingleMingle**

思路：

第一步：遍历数组中每个元素arr[i]，让这个元素跟剩下的下标为（i+1）～数组末尾之间的所有元素进行indexOf（）操作，如果返回值不是－1，也就是说元素在剩下的元素中存在，也就是有重复元素的意思。

第二步：判断有重复出现的数组元素是否已经存在于arrCover中，如果不存在，加入到arrCover中

```js
function duplicates(arr){
  var arrNew;
  var arrCover = [];//用于存档重复的数值
  for(var i=0;i<arr.length;i++){
   arrNew = arr.slice(i+1,arr.length);
   if(arrNew.indexOf(arr[i])!=-1&&arrCover.indexOf(arr[i])==-1){//存在重复  且尚未加入到arrCover中
    
    arrCover.push(arr[i]);
   }
  }
  return arrCover;
 }
 ```
运行时间：1356ms,占用内存：77900k


**Vaayne**

```js
function duplicates(arr) {
    var arr1 = [];
    for (var i=0; i<arr.length-1;i++){
        if (i != arr.indexOf(arr[i]))
            arr1.push(arr[i]);
    }
    return arr1;
}
```
运行时间：1491ms,占用内存：106184k

**刘放**

这个跑了下思路感觉是对的，结果但是没提交成功
```js
function duplicates(arr) {
    var result = [];
    arr.forEach(function(elem){
        if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
            result.push(elem);
        }
    });
    return result;
}
```
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为0.00%



