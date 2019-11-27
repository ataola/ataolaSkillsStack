## 解题思路

看到字符串首先想到正则，好在这题的正则不是很复杂，要注意的就是形如：` -webkit-border-image`的格式，你要注意最开头那个"-"，因为我的正则比较菜不能够一步就位。

## 我的答案

```js
function cssStyle2DomStyle(sName) {
    let paramStr = sName.replace(/-\w/g, x => x[1].toUpperCase());
    return paramStr.replace( paramStr[0],paramStr[0].toLowerCase());
}
```
运行时间：1439ms，占用内存：77836k

## 牛客取经

**嬉皮士**

```js
function cssStyle2DomStyle(sName) {
    return sName.replace(/(?!^)\-(\w)(\w+)/g, function(a, b, c){
            return b.toUpperCase() + c.toLowerCase();
        }).replace(/^\-/, '');
}
```

**你们名字都好长，我好羡慕**

```js
function cssStyle2DomStyle(sName) {
    var arr = sName.split(''); 
    //判断第一个是不是 '-'，是的话就删除
    if(arr.indexOf('-') == 0)
        arr.splice(0,1);
   //处理剩余的'-'
    for(var i=0; i<arr.length; i++){
        if(arr[i] == '-'){
            arr.splice(i,1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}
```

**GuoweiYeah**

```js
return sName.replace(/\-[a-z]/g , function(a, b){
 
    return b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase();
 
});
```

**路人1**

```js
    function cssStyle2DomStyle(sName) {
    //使用正则将 前一位有-的字符替换为大写【-([a-z])】
    //replace第二个参数为函数时：
    //函数的第一个参数是匹配模式的字符 【t】
    //接下来的参数是与模式中的子表达式匹配的字符，可以有0个或多个这样的参数。【m】
    //接下来的参数是一个整数，代表匹配在被替换字符中出现的位置【i】
    //最后一个参数是被替换字符本身【这里没有用到】
    return sName.replace(/-([a-z])/g,function(t,m,i){return i?m.toUpperCase():m;})
}

```

