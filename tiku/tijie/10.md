## 解题思路

抓重点不要修改原数组，这题考察concat，可以的话尽量就不要使用concat，`return [].concat(arr1, arr2);`这样写一点提高也没有，没有灵魂地做题运行时间：1413ms，占用内存：100292k。这题用扩展字符会很快而且短，最笨的话你就拷贝一个另一个遍历一次。

## 我的答案

```js
function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
```
运行时间：1747ms,占用内存：78056k

```js
function concat(arr1, arr2) {
  let newArr = arr1.slice(0);
  let len = arr1.length;
  for(let i = 0; i < arr2.length; i++) {
      newArr[len + i] = arr2[i];
  }
  return newArr;
}
```
运行时间：1640ms,占用内存：77856k


## 牛客取经

看看大佬的解法

**soulor.魂**

```js
function concat(arr1, arr2) {
    var newArr=arr1.slice(0);
    [].push.apply(newArr, arr2);
    return newArr;
}
```
运行时间：1503ms,占用内存：78456k

**0304YG**

```js
function concat(arr1, arr2) {
    var newArr=[];
    newArr=Array.prototype.concat.apply(arr1,arr2);
    return newArr;
}
```
运行时间：1560ms,占用内存：77776k

**秋名山**

```js
function concat(arr1, arr2) {
    var myconcat=[];
    myconcat.length=arr1.length+arr2.length;
    for(var i=0;i<myconcat.length;i++){
        if(i<arr1.length){
            myconcat[i]=arr1[i];
        }else{
            myconcat[i]=arr2[i-arr1.length];
        }
    }
    return myconcat;
}
```
运行时间：1560ms,占用内存：77856k


