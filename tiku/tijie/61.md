## 解题思路

我是想用一个数字去记录每一步的步骤，然后一个当前的objec对象

## 我的答案

```js
function namespace(oNamespace, sPackage) {
    let paramsArr = sPackage.match(/\w/g);
    let tmpArr = [];
    let curObj = {};
    for(let i = 0; i < paramsArr.length; i++) {
        if(i ===0 ) {
            curObj[paramsArr[i]] = oNamespace[paramsArr[i]];
            tmpArr.push(curObj[paramsArr[i]]);
        }else {
            tmpArr[i -1][paramsArr[i]] = {};
            tmpArr.push(tmpArr[i -1][paramsArr[i]]);
        }
    }

    return curObj;
}
```
不通过
您的代码已保存
答案错误:您提交的程序没有通过所有的测试用例
case通过率为33.33%

好像是格式输出不对，题目是`{a: {test: 1, b: {c: {d: {}}}}}`,而我的` a: { test: 1, b: { c: [Object] } } }`


## 牛客取经


**郑耀钧**

首先要排除掉原型链上的属性，判断对象自身有没有这个属性，然后再严格判断属性值是否为对象。

所以这些：
```js
if (!ns[scope[i]] ...) {...}
 
if (!(scope[i] in ns) ...) {...}
 
if (typeof ns[scope[i]] != 'object' ...) {...}
 
if (!(ns[scope[i]] instanceof Object) ...) {...}
```
都是错的。

而包名字符串是简单顺序的，所以可以直接 split 出来遍历，利用引用赋值的特性逐级跟进到包里面（可以把遍历用的 ns 想象成指针）：

```js
function isPlainObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) == 'Object';
}
 
function namespace(oNamespace, sPackage) {
    var scope = sPackage.split('.');
    var ns = oNamespace;
    for (var i = 0; i < scope.length; ++i) {
        if (!ns.hasOwnProperty(scope[i]) || !isPlainObject(ns[scope[i]])) {
            ns[scope[i]] = {};
        }
        ns = ns[scope[i]];
    }
    return oNamespace;
}
```

**HarderK**

```js
function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.');
    var res = oNamespace;   // 保留对原始对象的引用
 
    for(var i = 0, len = arr.length; i < len; i++) {
        if(arr[i] in oNamespace) {  // 空间名在对象中
            if(typeof oNamespace[arr[i]] !== "object") {    // 为原始值
                oNamespace[arr[i]] = {};    // 将此属性设为空对象           
            }  
        } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
            oNamespace[arr[i]] = {};
        }
         
        oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
    }
 
    return res;
 
}
```


方法二：递归
```js
function namespace(oNamespace, sPackage) {
   if(sPackage.length <= 0) return;
    // var arr = sPackage.split('.');
    var pointer = oNamespace;
 
 
        if(sPackage[0] in oNamespace) {
            if(typeof oNamespace[sPackage[0]] !== "object") {
                oNamespace[sPackage[0]] = {};              
            }  
        } else {
            oNamespace[sPackage[0]] = {};
        }
 
        oNamespace = oNamespace[sPackage[0]];
 
        namespace(oNamespace, sPackage.slice(2));
 
         
    return pointer;
 
}

```

**abbshr**

```js
function namespace(oNamespace, sPackage) {
    sPackage = sPackage.split('.');
    if (!sPackage[0].length)
        return;
    else {
        if (!oNamespace[sPackage[0]] || typeof oNamespace[sPackage[0]] != 'object')
            oNamespace[sPackage[0]] = {};         
        namespace(oNamespace[sPackage[0]], sPackage.slice(1).join('.'));
        return oNamespace;
    }
}

```

**imwtr**

```js
function namespace(oNamespace, sPackage) {
    var package = sPackage.split('.');
    var obj = oNamespace;
 
    for (var i = 0; i < package.length; ++i) {
        if (typeof obj[package[i]] !== 'object') {
            obj[package[i]] = {};
        }
 
        obj = obj[package[i]];
    }
 
    return oNamespace;
}
```
好久没通宵了。。

**isjs.cn**

```js
function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.');//拆分数组
    var _point = oNamespace;//建立对象引用
     
    while(arr.length > 0){//遍历
        if(Object.prototype.toString.call(_point[arr[0]]) !== '[object Object]'){
            _point[arr[0]] = {};//不是对象就覆盖
        }
        _point = _point[arr[0]]; //重新定位引用
        arr.shift();
    }
    return oNamespace;
}
```



