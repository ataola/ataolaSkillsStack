## 解题思路

我们先看案例，不难发现字母和空格标点的长度为1，汉字的长度为2，抓牢这个点这题基本上没什么难度。

主要还是复习下字符编码，

**ASCII**

一个字节对应8位二进制数，所以有2的8次256种状态，ASCII码一共有128个字符，所以你不难发现，最前面那位是0，这个就是要知道的特征，也就是说这128个字符只占了8位里面的七位。

再说说记忆，记一个就好。

| 字符 | 十进制 | 二进制 |
| :----: | :----: | :----: |
| A | 65 | 01000001 |

所以用ASCII(美国标准)是来编码英语是完全够的，那么问题来了， 汉字呢？ 日语韩语俄罗斯阿拉伯等等有多少啊，很显然这个不能被国际接受。

看到这里知道一点就好，就是一个字节怎么样啊？ 不够用，所以需要再加一个试试吧，有点像IPV4不够搞IPV6一样，在我写这篇题解不久IPV4刚用完。

**Unicode**

 Unicode 给所有的字符指定了一个数字用来表示该字符。

我们先来看看一个"汉"字的Unicode编码

| 字符 | 十六进制 | 二进制 |
| :----: | :----: | :----: |
| 汉 |  0X6c49 | 110110001001001 |

从中我们知道它需要2个字节吧，那么一个字节长度位1的话，那么一个汉字就是2了，这也就回到我们刚开始的问题上面来了，很好地解释了。

有兴趣的同学可以去了解下UTF8和UTF16这两种。

## 我的答案

这题正则不会，按照题目给出的，把字符串中的字符的Unicode码拿出来和255比较，大于的话就加2否则加1，涉及到一个charCodeAt(idx)方法

```js
function strLength(s, bUnicode255For1) {
    let sum = 0;
    if(bUnicode255For1) {
        return s.length;
    }else {
       for(let k in s) {
          if(s.charCodeAt(k) > 255 ){
              sum += 2;
          }else {
              sum += 1;
          }
       }
       return sum;
    }
}
```

运行时间：1628ms，占用内存：77796k

## 牛客题解


**不叫牛客**

```js
function strLength(s, bUnicode255For1) {
    if( bUnicode255For1 ){
        return s.length;
    }else{
        var len = s.length;
        for( var i=0; i<s.length; i++ ){
            if( s.charCodeAt(i) > 255 ){
                len++;
            }
        }
        return len;
    }
}
```

**路人1**

```js
function strLength(s, bUnicode255For1) {
//如果bUnicode255For1为false，返回s的长度加正则匹配\u0256-\uffff的长度
return s.length+(bUnicode255For1?0:(s.match(/[\u0256-\uffff]/g)||[]).length)
}
```


**華方**

```js
function strLength (s, bUnicode255For1) {
    if(bUnicode255For1) return s.length
    return [].reduce.call(s, function(sum, value){
        return value.charCodeAt(0) > 255 ? sum + 2 : sum + 1
    }, 0)
}
```

