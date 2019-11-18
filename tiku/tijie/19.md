## 解题思路

题目给的信息量就是判断两个值是否完全相等，先验证一下前面这句话是否是对的，我把把两个值中间连三个等号，然后return出去，发现是通过了，
所以接下来要做的事就是实现一个 "===", 那我们暂时实现一个阉割版吧，暂时不考虑ES6的Symbol了, 先看下值类型和引用类型都返回了啥用typeof

```js
console.log(typeof 1); //number
console.log(typeof '1'); //string
console.log(typeof true); //boolean
console.log(typeof [1, 2, 3]); //object
console.log(typeof {name: "ataola"}); //object
console.log(typeof  identity); //function
```
从中我们大致能够得出通过typeof判断值类型是否相等，不相等那还比个啥，引用类型这里用instanceof

```js
console.log(identity instanceof Function); //true
console.log(identity instanceof Object); //true
console.log([1, 2, 3] instanceof Array); //true
console.log([1, 2, 3] instanceof Object); //true
console.log({name: "ataola"} instanceof Object); //true
```
到这里我们大概能够区分是值类型还是引用类型的哪种了，如果类型相等接下去比较，如果不相等则返回。

## 我的答案

```js
function identity(val1, val2) {
    return val1 === val2;
}
```
运行时间：1614ms,占用内存：78116k

```js
function identity(val1, val2) {
    //当都为number时
    if(typeof val1 == "number" && typeof val2 == "number") {
        if(val1 == val2) {
            return true;
        }else {
            return false;
        }
    }

    //当都为string时
    if(typeof val1 == "string" && typeof val2 == "string") {
        if(val1.length != val2.length) {
            return false;
        }else {
            for(let i = 0; i < val1.length; i++) {
                if(val1[i] != val2[i]){
                    return false;
                }
            }
            return true;
        }
    }

    //当都为boolean时
    if(typeof val1 == "boolean" && typeof val2 == "boolean") {
        if(val1 == val2) {
            return true;
        }else {
            return false;
        }
    }

    // 当都为数组时
    if(val1 instanceof Array && val2 instanceof Array) {
        if(val1.length != val2.length){
            return false;
        }else {
            for(let i = 0; i < val1.length; i++) {
                if(val1[i] != val2[i]){
                    return false;
                }
            }

            return true;
        }
    }

    //当都为function时,写到这里我自己都很迷，比较两个函数是否相等。
    if(val1 instanceof Function && val2 instanceof Function) {
        if(val1.toString() != val2.toString()) {
            return false;
        }else {
            return true;
        }
    }

    //当都为Object时,看了楼上的想法，我还是想让它们压成字符串比较
    if(val1 instanceof Object && val2 instanceof Object) {
        if(val1.toString() != val2.toString()) {
            return false;
        }else {
            return true;
        }
    }

    return false;
}

```
运行时间：1505ms,占用内存：78148k

## 牛客题解

**小呆唯 回复 鹿尤20190221141678 **

[] === [] 返回true才是错的，引用类型进行比较时，是判断两标识符是否持有同一个对象（数组）的引用，===两边的两个空数组，在堆存储中是两个不同数组，和值类型不同。


**唐飞dream**

一般使用双等来判断（==），如果还需要类型相同那么就用三等（===）。
说一下这两个的区别：
== equality 等同，=== identity 恒等。
==， 两边值类型不同的时候，要先进行类型转换，再比较。 
==，不做类型转换，类型不同的一定不等。 
下面分别说明： 
先说 ===，这个比较简单。下面的规则用来判断两个值是否===相等： 
1、如果类型不同，就[不相等] 
2、如果两个都是数值，并且是同一个值，那么[相等]。
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。 
4、如果两个值都是true，或者都是false，那么[相等]。 
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。 
6、如果两个值都是null，或者都是undefined，那么[相等]。 
再说 ==，根据以下规则： 
1、如果两个值类型相同，进行 === 比较。 
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较： 
a、如果一个是null、一个是undefined，那么[相等]。 
b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。 
c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。 
d、任何其他组合，都[不相等]。


**fishlao**

```js
function identity(val1, val2) {
    if(val1===val2){
        // +0不等于-0；但是用===的话会返回true；所以要做额外的判断
        return val1 !== 0 || val2 !== 0 || 1/val1 === 1/val2;
    }else {
        //NaN等于NaN 但是上面的判断 NaN === NaN 会返回false;所以做额外的判断
        return val1 !== val1 && val2!== val2;
    }
}
```
运行时间：1411ms,占用内存：77900k

