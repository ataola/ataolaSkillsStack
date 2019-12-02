> JavaScript 是一种弱类型或者说动态语言

## 基本数据类型

最新的ECMA标准中，有八种数据类型，七种原始类型和引用类型object。其中七种原始类型分别是Boolean、Null、Undefined、Number、BigInt、String、Symbol。

选择：[MDN数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

* 使用typeof需要注意的是，`typeof null`是object，`typeof fun(){}`是function，但是function不是基本数据类型。

* 这里说是数据类型的时候，它的首字母是大写的，不知道是不是收到JAVA的影响，但是当你用tyepof的时候，全是小写字母

* 那么再说说instanceof,这个不适用于原始类型，主要还是引用类型Array、Function和Object，前三者 instanceof Object都是true。

* null使用要注意的是，如果你单纯判断null和true、false比较都是false。



