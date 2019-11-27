## 解题思路

这题一开始是想到正则，可是不会啊悲伤那么大，就硬憋解一下了，工作量也不大的。
我是想先拆出字符串成数组去掉空格，然后forEach来一把。

## 我的答案

```js
function count(str) {
    let resObj = {};
    let paramArr = str.split('').filter( x => x !==' ');
    paramArr.forEach( x => {
        if(resObj[x]) {
            resObj[x] += 1;
        }else{
            resObj[x] = 1;
        }
    });
    return resObj;
}
```
运行时间：1458ms,占用内存：77904k

## 牛客取经

**Bone**

```js
function count(str) {
    var obj = {};
    str.replace(/\S/g,function(s){
        !obj[s]?obj[s]=1:obj[s]++;
    })
    return obj;
}
```

**嬉皮士**

```js
function count(str) {
    for(var i=0, m=str.length, res={}; i<m; i++){
        if(str.charAt(i) in res) res[str.charAt(i)]++;
        else res[str.charAt(i)] = 1;
    }
    return res;
}
```