> JavaScript 是一种弱类型或者说动态语言

## 基本数据类型

最新的ECMA标准中，有八种数据类型，七种原始类型和引用类型object。其中七种原始类型分别是Boolean、Null、Undefined、Number、BigInt、String、Symbol。

选择：[MDN数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

* 使用typeof需要注意的是，`typeof null`是object，`typeof fun(){}`是function，但是function不是基本数据类型。

* 这里说是数据类型的时候，它的首字母是大写的，不知道是不是收到JAVA的影响，但是当你用tyepof的时候，全是小写字母

* 那么再说说instanceof,这个不适用于原始类型，主要还是引用类型Array、Function和Object，前三者 instanceof Object都是true。

* null使用要注意的是，如果你单纯判断null和true、false比较都是false。



#### Object

* 判断某个key是不是对象Object里面的

    * `k in obj`

    * `obj.hasOwnProperty(k);`

* 如何知道一个Object中key的个数

    * 你先观察，设置`len = 0`,然后每当有key增加或者删除len跟着变
    
    * `Object.keys(obj).length`一把梭，这个在过早的浏览器不支持。

    * 硬核遍历然后`obj.hasOwnProperty(k)`一把梭，如果是的话len加一(兼容性最好)



#### Array


* 不像其他语言，Javascript中的数组长度可变，不需要你去操心

