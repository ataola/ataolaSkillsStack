## 解题思路

抓重点，是不是原型链上的，hasOwnProperty()可以知道这个属性是否是属于这个对象的。

## 我的答案

```js
function iterate(obj) {
    let resArr = [];
    for(let k in obj) {
       if(obj.hasOwnProperty(k)){
           resArr.push(`${k}: ${obj[k]}`);
       }
   }
   return resArr;
}
```
运行时间：1456ms，占用内存：95064k

## 牛客取经

**希留**

可以使用for-in来遍历对象中的属性，hasOwnproperty方法能返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性，该属性必须为对象本身的属性。

```js
function iterate(obj) {
     var arr = [];
     //使用for-in遍历对象属性
     for(var key in obj){
         //判断key是否为对象本身的属性
         if(obj.hasOwnProperty(key)){
             //将属性和值按格式存入数组
             arr.push(key+": "+obj[key]);
         }
     }
     return arr;
 }
```

**哈弗兰大**

```js
function iterate(obj) {
    return Object.getOwnPropertyNames(obj).map(function(key){
        return key+": "+obj[key];
    });
}
```

**蒋启钲**

Object.keys 只收集自身属性名，不继承自原型链上的属性，所以可以直接这么写

```js
function iterate(obj) {
    var arr=Object.keys(obj);
    var arrs=[];
    arr.forEach(function(item){
        arrs.push(item+': '+obj[item])
    })
    
    return arrs
     
}
```

**小呆唯**

```js
function iterate(obj) {
    return Object.entries(obj).map(([k,v])=>k+":"+v)
}
```

