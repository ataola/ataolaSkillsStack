## 解题思路

这题用正则我又不会，也只能遍历了,刚开始做的时候咋还80%，我想了下不会是字符串里可以加数字吧，那题目也不说清楚，试试吧，后来发现是我想太多。

## 我的答案

```js
function containsRepeatingLetter(str) {
    for(let i = 0; i < str.length-1; i++) {
        if(str[i] === str[i+1]) {
            return  true;
        }
    }
    return false;
}
```
您的代码已保存
答案错误:您提交的程序没有通过所有的测试用例
case通过率为80.00%

发现60%。。。。。。

```js
function containsRepeatingLetter(str) {
    for(let i = 0; i < str.length-1; i++) {
        if(typeof str[i] !== 'number' && str[i] === str[i+1]) {
            return  true;
        }
    }
    return false;
}
```
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为60.00%

感觉这题我好像举不出我错的反例，让我静静。

后来我就试了个测试用例 `console.log(containsRepeatingLetter('11ABAB'));`,我好像明白了。。。。。。

别把。。。。。。

```js
function containsRepeatingLetter(str) {
    for(let i = 0; i < str.length-1; i++) {
        if(typeof parseInt(str[i]) !== 'number' && str[i] === str[i+1]) {
            return  true;
        }
    }
    return false;
}
```
不通过
您的代码已保存
答案错误:您提交的程序没有通过所有的测试用例
case通过率为40.00%

顺着往下想， parseInt('a')会使啥呢? NaN。

离期望值越来月远， 大致能够知道是这个数字在搞怪

要做这样子一件事就对了，如果字符串中的某个值形如'number'就把它改造成number， 如果是string就不要动。

```js
function containsRepeatingLetter(str) {
    let gao_numArr = ['1','2','3','4','5','6','7','8','9','0'];
    for(let i = 0; i < str.length-1; i++) {
        if(!gao_numArr.includes(str[i]) && str[i] === str[i+1]) {
            return  true;
        }
    }
    return false;
}
```
运行时间：1730ms,占用内存：77860k

终于一步一步推理把答案搞对了，附上我的测试用例：

```js
console.log(containsRepeatingLetter('rattler'));
console.log(containsRepeatingLetter('AABB'));
console.log(containsRepeatingLetter('ABAB'));
console.log(containsRepeatingLetter('11ABAB'));
console.log(containsRepeatingLetter('11ABAB11'));
console.log(containsRepeatingLetter('11AB11AB11'));
```

## 牛客取经

**希留**

在正则表达式中，利用()进行分组，使用斜杠加数字表示引用，\1就是引用第一个分组，\2就是引用第二个分组。将[a-zA-Z]做为一个分组，然后引用，就可以判断是否有连续重复的字母。

```js
function containsRepeatingLetter(str) {
     return /([a-zA-Z])\1/.test(str);
 }
```

**青ツ玉**

```js
function containsRepeatingLetter(str) {
    var pattern = /[a-zA-Z]/g;
    for(var i=0;i<str.length;i++){
        if(str[i]==str[i+1] && pattern.test(str[i])){
            return true;
        }
    }
    return false;
}
```

**奈何禅**

```js
function containsRepeatingLetter(str) {
    var arr = str.toLowerCase().split("");
    for(var i = 0; i<arr.length-1; i++){
        if(arr[i] === arr[i+1] && isNaN(arr[i]) === true){//题目要求字母重复而非数字
            return true;
        }
    }
    return false;
}
```

