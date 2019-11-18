## 解题思路

抓重点，返回一个对象，对象的cancel属性能够停止定时器，

## 我的答案

```js
function count(start, end) {
    console.log(start++);
    let gao_dot = setInterval(function () {
        if(start <= end) {
            console.log(start++);
        }else {
            clearInterval(gao_dot);
        }
        }, 100);

    function() {
       clearInterval(gao_dot);
    };
    return {
        cancel
    }
}
```
运行时间：1650ms, 占用内存：82780k

## 牛客取经

**希留**

setInterval() 方法会按照指定周期不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。注意第一个数需要立即输出即可。

```js
function count(start, end) {
  //立即输出第一个值
  console.log(start++);
     var timer = setInterval(function(){
         if(start <= end){
             console.log(start++);
         }else{
             clearInterval(timer);
         }
     },100);
    //返回一个对象
     return {
         cancel : function(){
             clearInterval(timer);
         }
     };
 }
```
运行时间：1426ms,占用内存：80032k


**MingleMingle**

setTimeout和setInterval的语法相同。它们都有两个参数，一个是将要执行的代码字符串，还有一个是以毫秒为单位的时间间隔，当过了那个时间段之后就将执行那段代码。
不过这两个函数还是有区别的，setInterval在执行完一次代码之后，经过了那个固定的时间间隔，它还会自动重复执行代码，而setTimeout只执行一次那段代码。
区别：
window.setTimeout("function",time)；//设置一个超时对象，只执行一次,无周期 
window.setInterval("function",time)；//设置一个超时对象，周期＝'交互时间'
停止定时： 
window.clearTimeout(对象) 清除已设置的setTimeout对象
window.clearInterval(对象) 清除已设置的setInterval对象 

