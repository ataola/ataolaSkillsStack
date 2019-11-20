## 解题思路

抓重点，不足八位补0，数据量也不大你就创个obj，然后拿8-你转成字符串的长度再返回，当然死方法还是有的，就是除以二转成二进制然后再判断。

## 我的答案

```js
function convertToBinary(num) {
    let bu_zero = {
        0: "",
        1: "0",
        2: "00",
        3: "000",
        4: "0000",
        5: "00000",
        6: "000000",
        7: "0000000",
        8: "00000000"
    };
    let tmp = num.toString(2);
    return bu_zero[8 - tmp.length] + tmp;
}
```
运行时间：1498ms,占用内存：78028k


## 牛客取经

**希留**

首先通过toString方法将num转为2进制数形式，然后判断其长度是否足够8位。如不足8位，则声明一个“0000000”字符串用于补0，因为目标的2进制数形式最少为一位，因此最多只需要7个0；通过slice方法对“0000000”进行截取，然后将其结果加在目标前面即可。

```js
function convertToBinary(num) {
     //转换为2进制格式
     var s = num.toString(2);
     //获得2进制数长度
     var l = s.length;
     if(l<8){
         //声明一个字符串用于补满0
         var s1 = "0000000";
         var s2 = s1.slice(0,8-l);
         s = s2+s; 
     }
     return s;
 }
```
运行时间：1432ms,占用内存：77884k

**谭春霞**

```js
function convertToBinary(num) {
         var arr=num.toString(2);
         var len=arr.length;
        if(len<8){
            for(var i=0;i<8-len;i++){
                arr="0"+arr;
            }
        }
        return arr;
    }
```
运行时间：1543ms,占用内存：77772k

感觉最好还是把arr改成str看着舒服点。

**咬碎**

```js
function convertToBinary(num) {
  return ('00000000' + num.toString(2)).slice(-8);
}
```
运行时间：1741ms,占用内存：77772k

**MaxMeng93**

```js
function convertToBinary(num) {
    var s =  num.toString(2);
    return '00000000'.slice(s.length) + s;
}
```
运行时间：1598ms,占用内存：77772k


**Ripple**

转为二进制后，先除以10的8次方，然后取小数点后的数

```js
function convertToBinary(num) {
       var toBit = num.toString(2);
       return  ( toBit / Math.pow(10, 8) ).toFixed(8).substr(2);
}
```
运行时间：1429ms,占用内存：78028k

**渔舟唱晚丶星**

个人认为还应该考虑到大于2的八次方（256）的num

```js
function convertToBinary(num) {
var a=num.toString(2).split("");    
    while(a.length%8!=0)
    {
        a.unshift("0");
    }
    return a.join("");    
}
```
运行时间：1417ms,占用内存：77780k

**肖炎**

```js
function convertToBinary(num) {
var str =num.toString(2);
    while(str.length<8){
        str="0"+str
    }
    return str;
}
```
运行时间：1437ms,占用内存：77864k

**offer在我wan里**

```js
function convertToBinary(num) {
    var ret = '';
    while (num !== 0) {
        ret = (num & 1) + ret;
        num >>= 1;
    }
    for (let i = (8 - ret.length); i > 0; --i) {
        ret = '0' + ret;
    }
     
    return ret;
}
```
运行时间：1544ms,占用内存：77900k

