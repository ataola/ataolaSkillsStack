## 解题思路

这题涉及到字符串如果用正则会快一点，可惜我正则不是特别好，所有就只能慢慢来了，抓重点，就是分类讨论，如果存在指定参数，然后你讨论下参数会不会重复，如果重复就返回数组，如果不存在就返回空字符串；如果不存在指定参数，返回参数对象或者{}。

## 我的答案

```js
function getUrlParam(sUrl, sKey) {
    let resArr = [], resObj = {};
    let items = sUrl.split("?")[1] ? sUrl.split("?")[1].split("&") : [];
    let keyArr = [];
    let valArr = [];
    for (let item of items) {
        keyArr.push(item.split("=")[0]);
        valArr.push(item.split("=")[1]);
    }
    if (sKey) {
        if (keyArr.includes(sKey)) {
            if ([...new Set(keyArr)].length < keyArr.length) {
                for (let k in keyArr) {
                    if (!isNaN(Number(valArr[k]))) {
                        valArr[k] = parseInt(valArr[k])
                    }
                    if (keyArr[k] === sKey) {
                        resArr.push(valArr[k]);
                    }
                }
                return resArr;
            } else {
                return valArr[keyArr.indexOf(sKey)];
            }
        } else {
            return '';
        }
    } else {
        if (items.length === 0) {
            return {};
        } else {
            if ([...new Set(keyArr)].length < keyArr.length) {
                for (let k in keyArr) {
                    if (!isNaN(Number(valArr[k]))) {
                        valArr[k] = parseInt(valArr[k])
                    }
                        resArr.push(valArr[k]);
                }
                return resArr;
            }
            for (let k in keyArr) {
                if (!isNaN(Number(valArr[k]))) {
                    valArr[k] = parseInt(valArr[k])
                }
                resObj[keyArr[k]] = valArr[k];
            }
            return resObj;
        }

    }
}
```
不通过
您的代码已保存
答案错误:您提交的程序没有通过所有的测试用例
case通过率为50.00%

这题你如果说我超时我就认了，咋还有50%没通过呢？

我写的测试用例也全部通过的，郁闷了，附上我的测试用例

```js
console.log(getUrlParam('http://www.nowcoder.com'));
console.log(getUrlParam('http://www.nowcoder.com?'));
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'));
console.log(getUrlParam('http://www.nowcoder.com?key=1&test=4#hehe'));
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'));
console.log(getUrlParam('http://www.nowcoder.com?key=1&test=4#hehe', 'key'));
console.log(getUrlParam('http://www.nowcoder.com?key=1&test=4#hehe', 'key1'));
console.log(getUrlParam('http://www.nowcoder.com', 'key'));
```

看了楼下的例子，好像是因为"#"这个问题我没有处理,还有就是如果同一个key的话有多个值，返回对象里面的key是个数字，我当时就很纠结如果key重了呢？我把它放到数组里面了。。。

## 牛客取经

**面向百度＆＆工资编程**

```js
// 最简洁易懂的方法。
function getUrlParam(sUrl, sKey) {
    var paramArr = sUrl.split('?')[1].split('#')[0].split('&'); // 取出每个参数的键值对放入数组
    const obj = {};
    paramArr.forEach(element => {
        const [key, value] = element.split('='); // 取出数组中每一项的键与值
        if(obj[key] === void 0){ // 表示第一次遍历这个元素，直接添加到对象上面
            obj[key]=value
        } else{
            obj[key]=[].concat(obj[key],value); // 表示不是第一次遍历说明这个键已有，通过数组存起来。
        }});
    return sKey===void 0? obj:obj[sKey]||'' // 如果该方法为一个参数，则返回对象。
//如果为两个参数，sKey存在，则返回值或数组，否则返回空字符。
}
```

**Elaine_w**

```js
function getUrlParam(sUrl, sKey) {
    var result, sParam = {};
    sUrl.replace(/[\?&]?(\w+)=(\w+)/g, function(k0, k1, k2){
        sParam[k1] === void 0 ? sParam[k1] = k2 : sParam[k1] = [].concat(sParam[k1], k2);
    });
    sKey === void 0 || sKey === '' ? result = sParam : result = sParam[sKey] || '';
    return result;
}
```

正则表达式/[?&]?(\w+)=(\w+)/g

![regex](https://uploadfiles.nowcoder.com/images/20190729/870928103_1564386408631_6A43EDCC42FF5B086799B62893580481)

**JianJian**

```js
function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
```

**shawnan**

```js
function getUrlParam(sUrl, sKey) {
    var param = sUrl.split('#')[0].split('?')[1];
    if (sKey){//指定参数名称
        var strs = param.split('&');
        var arrs = new Array();//如果存在多个同名参数，则返回数组
        for(var i = 0, len = strs.length; i < len; i++){
            var tmp = strs[i].split('=');
            if(tmp[0] == sKey){
                arrs.push(tmp[1]);
            }
        }
        if (arrs.length == 1){//返回该参数的值或者空字符串
            return arrs[0];
        } else if (arrs.length == 0){
            return "";
        } else {
            return arrs;
        }
    } else {//不指定参数名称，返回全部的参数对象 或者 {}
        if(param == undefined || param == ""){
            return {};
        } else {
            var strs = param.split('&');
            var arrObj = new Object();
            for(var i = 0, len = strs.length; i < len; i++){
                var tmp = strs[i].split('=');
                if (!(tmp[0] in arrObj)) {
                    arrObj[tmp[0]] = [];
                }
                arrObj[tmp[0]].push(tmp[1]);               
            }
            return arrObj;
        }
    }
}
```

**codeplay**

大家都在用replace,其实RegExp对象中有个用于执行模式匹配操作的方法更好用，就是exec()， exec()有个特殊的性质，当正则表达式具有全局标记g时，仍然时返回一个匹配及分组匹配的子串，当再次调用exec()时，它会从lastIndex属性所指示的字符处开始检索，基exec()自带遍历功能，代码如下：

```js
function getUrlParam(sUrl, sKey) {
   var r=/(\?|&)(\w+)\=(\w+)/g;
   var res={};
   while(r.exec(sUrl)!=null){
       if(res[RegExp.$2]){
           var temp=res[RegExp.$2];
           res[RegExp.$2]=[].concat(temp,RegExp.$3)
       }else{
           res[RegExp.$2]=RegExp.$3;
       }
   }
   if(sKey) {
       return res[sKey]||'';
   }
   return res;
}
```

**努力给自己一个offer**

```js
function getUrlParam(sUrl, sKey) {
    var resObj = {};
    var reg = /(\w+)=(\w+)/g;
    while (reg.exec(sUrl)) {
        resObj[RegExp.$1] ? resObj[RegExp.$1] = [].concat(resObj[RegExp.$1], RegExp.$2) : resObj[RegExp.$1] = RegExp.$2;
    }
 
    if (sKey) {
        return (resObj[sKey] ? resObj[sKey] : '');
    }
    return resObj;
}
```

有点坑啊，不能用ES6语法，用了let结果怎么也不通过，调试了接近20分钟。。。醉。。。


**soulor.魂**

```js
//参考大神的方法
function getUrlParam(sUrl, sKey) {
    var result,Oparam = {};
    sUrl.replace(/[\?|&]?(\w+)=(\w+)/g,function($0,$1,$2){
        Oparam[$1] === void 0 ? Oparam[$1]=$2 : Oparam[$1]=[].concat(Oparam[$1],$2);
    });
    sKey === void 0||sKey==='' ? result=Oparam : result=Oparam[sKey]||'';
    return result;
}
//不用正则表达式的方法
function getUrlParam(sUrl, sKey) {
    var psArr = /\?/.test(sUrl) ? sUrl.split('?')[1].split('#')[0].split('&') : [];
    var result,Oparam = {};
    for(var i=0;i<psArr.length;i++){
        var pA = psArr[i].split('=');
        Oparam[pA[0]] === void 0 ? Oparam[pA[0]]=pA[1] : Oparam[pA[0]]=[].concat(Oparam[pA[0]],pA[1]);
    }
    sKey === void 0||sKey==='' ? result=Oparam : result=Oparam[sKey]||'';
    return result;
}
```