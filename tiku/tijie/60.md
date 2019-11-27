## 解题思路

这题感觉还是在考正则(用这个会写的少而且快一点)，做了这么多题，悟出一个道理，在牛客做编程题不会正则是很难受的，在做选择题不会angular是做不全对的，算了算了用switch硬憋吧，有空再去恶补正则。

## 我的答案

```js
function formatDate(date, str) {
    let resStr ='';
    let wArr = ['日', '一', '二', '三', '四', '五', '六'];
    let paramsArr = str.split(" ");
    let ymdArr = paramsArr[0].split("-");
    let hmsArr = paramsArr[1].split(":");
    let wStr = paramsArr[2];
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    switch (ymdArr[0]) {
        case "yyyy":
            resStr += date.getFullYear();
            break;
        case "yy":
            resStr += date.getFullYear().toString().substr(2,2);
            break;
    }
    resStr += "-";
    switch (ymdArr[1]) {
        case "MM":
            m = m <10 ? '0' + m : m;
            break;
        case "M":
            break;
    }
    resStr += m;
    resStr += '-';
    switch (ymdArr[2]) {
        case "dd":
            d = d < 10 ? '0' + d : d;
            break;
        case "d":
            break;
    }
    resStr += d;
    resStr += " ";
    switch (hmsArr[0]) {
        case "HH":
            h = h < 10 ? "0" + h : h;
            break;
        case "H":
            break;
        case "hh":
            h = h >= 12 ? h - 12 : h;
            h = h < 10 ? '0' + h : h;
            break;
        case "h":
            h = h >= 12 ? h - 12 : h;
            break;
    }
    resStr += h;
    resStr += ":";
    switch (hmsArr[1]) {
        case "mm":
            min = min < 10 ? '0' + min : min;
            break;
        case "m":
            break;
    }
    resStr += min;
    resStr += ":";
    switch (hmsArr[2]) {
        case "ss":
            s = s < 10 ? '0' + s : s;
            break;
        case "s":
            break;
    }
    resStr += s;
    resStr += " ";
    let ws = wStr.replace('w', wArr[date.getDay()]);
    resStr += ws;
    return resStr;
}
```
不通过
您的代码已保存
答案错误:您提交的程序没有通过所有的测试用例
case通过率为66.67%

格式一模一样的，按照测试用例，到底是那里错了呢？


## 牛客取经


**太阳光**

```js
function formatDate(t,str){
  var obj = {
    yyyy:t.getFullYear(),
    yy:(""+ t.getFullYear()).slice(-2),
    M:t.getMonth()+1,
    MM:("0"+ (t.getMonth()+1)).slice(-2),
    d:t.getDate(),
    dd:("0" + t.getDate()).slice(-2),
    H:t.getHours(),
    HH:("0" + t.getHours()).slice(-2),
    h:t.getHours() % 12,
    hh:("0"+t.getHours() % 12).slice(-2),
    m:t.getMinutes(),
    mm:("0" + t.getMinutes()).slice(-2),
    s:t.getSeconds(),
    ss:("0" + t.getSeconds()).slice(-2),
    w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}
```

**零下274℃**

```js
function formatDate(oDate, sFormation) {
    var add0 = function(num){
        if(num<10)
            return 0+""+num;
        else
            return num;
 
    }
    var o = {
        "yyyy":oDate.getFullYear(),
        "yy":oDate.getFullYear()%100,
        "MM":add0(oDate.getMonth()+1),
        "M":oDate.getMonth()+1,
        "dd":add0(oDate.getDate()),
        "d":oDate.getDate(),
        "HH":add0(oDate.getHours()),
        "H":oDate.getHours(),
        "hh":add0(oDate.getHours()%12),
        "h":oDate.getHours()%12,
        "mm":add0(oDate.getMinutes()),
        "m":oDate.getMinutes(),
        "ss":add0(oDate.getSeconds()),
        "s":oDate.getSeconds(),
        "w":function(){
            var day = ["日","一","二","三","四","五","六"];
            return day[oDate.getDay()];
        }(),
    }
    for(var k in o){
        sFormation = sFormation.replace(k,o[k]);
    }
    return sFormation;
}
```

**嬉皮士**

```js
function formatDate(d, format) {
    var year = d.getFullYear(),
        month = d.getMonth()+1,
        date = d.getDate(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds(),
        day = d.getDay(),
        week = ['日', '一', '二', '三', '四', '五', '六'];
    return format.replace(/yyyy/, year)
                    .replace(/yy/, pad(year % 100))
                    .replace(/MM/, pad(month))
                    .replace(/M/, month)
                    .replace(/dd/, pad(date))
                    .replace(/d/, date)
                    .replace(/HH/, pad(hour))
                    .replace(/H/, hour)
                    .replace(/hh/, pad(hour % 12))
                    .replace(/h/, hour % 12)
                    .replace(/mm/, pad(minute))
                    .replace(/m/, minute)
                    .replace(/ss/, pad(second))
                    .replace(/s/, second)
                    .replace(/w/, week[day]);
}
 
function pad(n){
    return n < 10 ? '0' + +n : n;
}
```

**soulor.魂**

```js
//最简单的方式来啦！
function formatDate(oDate, sFormation) {
    var obj={
        yyyy: oDate.getFullYear(),
        yy: oDate.getFullYear()%100,
        M: oDate.getMonth()+1,
        d: oDate.getDate(),
        H: oDate.getHours(),
        h: oDate.getHours()%12,
        m: oDate.getMinutes(),
        s: oDate.getSeconds(),
        w: ['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
    };
    return sFormation.replace(/([a-zA-Z]+)/g,function($1){
        return $1.length===2&&$1!=='yy' ? ('0'+obj[$1.slice(1)]).slice(-2) : obj[$1];
    });
}
```

**世民 ：**在这种情况下出有问题：
输入：formatDate(new Date(4105894060000), 'yy-MM-dd HH:mm:ss 星期w')
输出：0-02-10 06:07:40 星期三
改进：yy: oDate.getFullYear() % 100 || '00',
2018-10-22 18:10:24


**牛客(Yangfan)**

```js
function formatDate(oDate, sFormation) {
    var arr=[],brr=[],crr=[];
    arr=(sFormation.split(" "));
    brr=arr[0].split("-");
    crr=arr[1].split(":");
    var yFormat=brr[0];
    var MFormat=brr[1];
    var dFormat=brr[2];
    var hFormat=crr[0];
    var mFormat=crr[1];
    var sFormat=crr[2];
     
    var now=oDate;
    var Y=now.getFullYear()+"";
    var M=now.getMonth()+1+""; // caution 0-11
    var D=now.getDate()+"";
    var W=now.getDay()+"";
    var h=now.getHours()+"";
    var m=now.getMinutes()+"";
    var s=now.getSeconds()+"";
     
    var formatTwo=function (str,val) {
        val=str.length==2?(val=val<10?"0"+val:val):val;
        return val;
    };
    var weekFormat=function (week) {
        var wrr=["日","一","二","三","四","五","六"];
        return wrr[week];
    };
    Y=yFormat.length==4?Y:Y.substr(2,2);
    M=formatTwo(MFormat,M);
    D=formatTwo(dFormat,D);
    W=weekFormat(W);
    h=hFormat.indexOf("h")!=-1?h-12+"":h;
    h=formatTwo(hFormat,h);
    m=formatTwo(mFormat,m);
    s=formatTwo(sFormat,s);
    return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s+" 星期"+W;
}
```
