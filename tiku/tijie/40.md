## 解题思路

原型链，prototype

## 我的答案

```js
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}
```
运行时间：1434ms,占用内存：77992k
## 牛客取经

**希留**

这是原型链问题。访问一个对象的方法或者是属性，首先会在该对象中寻找，如果找到则返回，如果没找到，则在其原型链上面向上寻找，直至基原型，如还未找到，则返回undefined。将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量，只需要在constructor的原型上面添加greeting属性，并指定值。

```js
function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting;
 }
```

**牛客260006号**

```js
function alterObjects(constructor, greeting) {
    if(typeof constructor != 'function') throw('alterObjects():arguments error, should be function');
    constructor.prototype.greeting = greeting;
}
```


