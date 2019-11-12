## 解题思路

这题抓重点不要改变原数组，其他的随便你咋整,比如说，你先拷贝一份，然后再最后加呗，当然也还可以取数组长度下标加一添加

## 我的答案

```js
function append(arr, item) {
    let resArr = Array.from(arr);
    resArr.push(item);
    return resArr;
}
```
运行时间：1657ms，占用内存：79208k

这里我就是想试下看下push()和arr[key] = value哪个好用

```js
function append(arr, item) {
    let resArr = Array.from(arr);
    resArr[arr.length] = item;
    return resArr;
}
```
运行时间：1641ms,占用内存：77792k

我就是想试试，字符串是不是会快点，还真快了一点，当然转出来还是字符，不是数字,
这种方法非常灵活，需要凑，感觉就跟以前做数学题一样，也说不出啥，反正就是凑

```js
function append(arr, item) {
    return (arr.join('-') + '-' + item).split('-');
}
```
运行时间：1500ms,占用内存：77844k


## 牛客取经

看看大佬们的解法

**敖天羽**

这个我倒是做题的时候没想到

```js
function append(arr, item) {
    return arr.concat([item]);
}
```
运行时间：1524ms,占用内存：77944k

**soulor.魂**

这个解法也很独特啊，要抓住有趣的灵魂

```js
function append(arr, item) {
    var newArr=[item];
    [].unshift.apply(newArr, arr);
    return newArr;
}
```
运行时间：1456ms，占用内存：77860k

**bianlongting**

这个拷贝数组的方式值得学习的，虽然我也想到了

```js
function append(arr, item) {
    var result = JSON.parse(JSON.stringify(arr))
    result.push(item);
    return result;
}
```
运行时间：1505ms,占用内存：77928k
