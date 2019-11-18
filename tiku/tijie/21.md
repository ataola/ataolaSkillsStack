## 解题思路

抓重点，有五个条件，你按照条件一个一个来。

## 我的答案

```js
function fizzBuzz(num) {
    if(num === null || typeof num !== "number") return false;
    if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz";
    }
    if(num % 3 === 0) {
        return "fizz";
    }

    if(num % 5 === 0) {
        return "buzz";
    }
    return num;
}

```
运行时间：1575ms，占用内存：77876k

## 牛客取经

**希留**

```js
function fizzBuzz(num) {
    if(num%3 == 0 && num%5 == 0)
        return "fizzbuzz";
    else if(num%3 == 0)
        return "fizz";
    else if(num%5 == 0)
        return "buzz";
    else if(num == null || typeof num != "number")
        return false;
    else return num;
}
```
运行时间：1573ms,占用内存：77900k

**fox.psd**

```js
function fizzBuzz(num) {
    if(!num||typeof num!="number"){
        return false;
    }
    var res="";
    if(num%3==0){
        res+="fizz";
    }
    if(num%5==0){
        res+="buzz";
    }
    return res?res:num;
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为91.67%

优化下

```js
function fizzBuzz(num) {
    if(!num||typeof num!="number"){
        return false;
    }
    var res="";
    if(num%3==0){
        res+="fizz";
    }
    if(num%5==0){
        res+="buzz";
    }
    return res || num;
}
```

运行时间：1569ms,占用内存：77880k
