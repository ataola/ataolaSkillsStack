## 解题思路

还好题目描述有原音字母的解释，不然我真的不知道原音字母是啥。所有我很容易想到上一题的includes。

## 我的答案

```js
function endsWithVowel(str) {
    let gao_yyArr = ['a','e','i','o','u'];
    let minStr = str.toLowerCase();
    if(gao_yyArr.includes(minStr[str.length - 1])) {
        return true;
    }
    return false;
}
```
运行时间：1464ms，占用内存：77904k



## 牛客取经

**希留**

首先确定元音集合[a,e,i,o,u]，然后是以元音结尾，加上$，最后通配大小写，加上i。因此正则表达式为:/[a,e,i,o,u]$/i，最后用test方法去检测字符串str

```js
function endsWithVowel(str) {
  return /[a,e,i,o,u]$/i.test(str);
 }
```

**shiftj**

```js
function endsWithVowel(str) {
    return str && ("aeiouAEIOU".indexOf(str[str.length-1]) > -1);
}
```

**大落落2013**

```js
function endsWithVowel(str) {
return ['a','e','i','o','u','A','E','I','O','U'].some(function(a){return a==(str.charAt(str.length-1))})
}//找到数组中一个与结尾字符相同的就返回true，否则返回false
//不会正则好悲伤
```

我不怎么会也很悲伤，看到后面的题目全是正则。。。。。。

**奈何禅**

```js
function endsWithVowel(str) {
    var arr = ["a","e","i","o","u"];
    var str = str.split("");
    for(var i = 0; i<arr.length; i++){
        if(str[str.length-1].toLowerCase() === arr[i]) //注意将字母全部换成小写
            return true;
    }
    return false;
}
```

**牛客8650708号**
```js
function endsWithVowel(str) {
    var letter = str.charAt(str.length - 1);
    switch(letter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return true;
            break;
        default:
            return false;
    }
}
```

**Cao/L慧**

```js
function endsWithVowel(str) {
    var arr = ["a","e","i","o","u"];
    if(arr.indexOf(str[str.length-1].toLowerCase()) !== -1){
        return true;
    }
    return false;
}
```


