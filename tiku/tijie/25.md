## 解题思路

抓重点，运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同，看到这里就可以毙掉call了，很明显让你用bind，因为bind返回目标函数不执行。

## 我的答案

```js
function makeClosures(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result[i] = fn.bind(this, arr[i]);
    }
    return result;
}
```
运行时间：1490ms,占用内存：77868k

## 牛客取经

**希留**

简单的描述闭包：如果在函数func内部声明函数inner，然后在函数外部调用inner，这个过程即产生了一个闭包。
题目要求的是返回一个函数数组，如果在循环中直接写result[i] = function(){return fn(arr[i]);}或者result.push(function(){return fn(arr[i]);})，最终的结果是不正确的，因为在每次迭代的时候，那样的语句后面的方法并没有执行，只是创建了一个函数体为“return fn(arr[i]);”的函数对象而已，当迭代停止时，i为最终迭代停止的值，在函数被调用时，i依旧为最终迭代停止的值，因此无法返回正确的结果。
为了解决这个问题，需要声明一个匿名函数，并立即执行它。
function(num){return function(){return fn(arr[num]); }; }(i)，函数执行后，i立即传入并被内部函数访问到，因此就能得到正确的结果。闭包允许你引用存在于外部函数中的变量。
下面的代码使用的是forEach循环

```js
function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }
```
运行时间：1543ms,占用内存：90536k

**玲\^_^**

```js
function makeClosures(arr, fn) {   
    var result = new Array();
    for(let i=0;i<arr.length;i++){
        result[i] = function(){
            return fn(arr[i]); //let声明的变量只在let所在代码块内有效，因此每次循环的i都是一个新的变量           
        };
    }
    return result;
}
```
运行时间：1481ms,占用内存：77868k

