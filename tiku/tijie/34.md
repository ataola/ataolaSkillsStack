## 解题思路

这题和上两题一样，也是来渡劫的吧，，，感觉就是考语文理解，你按照1，2，3三步把它转换为js语言。

## 我的答案

```js
function createModule(str1, str2) {
    let obj = {
        greeting: str1,
        name: str2,
        sayIt: function () {
            return this.greeting + ", " + this.name;
        }
    };
    return obj;
}
```
运行时间：1726ms,占用内存：77856k

我要是不创建obj呢？

```js
function createModule(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function () {
            return this.greeting + ", " + this.name;
        }
    };
    
}
```
运行时间：1466ms,占用内存：77964k

## 牛客取经

**张佃鹏**

原型模式：

```js
function createModule(str1, str2) {
    function Obj()
    {
        this.greeting = str1;
        this.name = str2;
    }
    Obj.prototype.sayIt = function(){return this.greeting + ", " + this.name;}
    return new Obj(); 
}
```

构造函数模式：
```js
function createModule(str1, str2) {
    function Obj()
    {
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function(){return this.greeting + ", " + this.name;}
    }
    return new Obj();   
}
```

创建对象模式：
```js
function createModule(str1, str2) {
    function CreateObj()
    {
        obj = new Object;
        obj.greeting = str1;
        obj.name = str2;
        obj.sayIt = function(){return this.greeting + ", " + this.name;}
        return obj;
    }
    return CreateObj();   
}
```

字面量模式：
```js
function createModule(str1, str2) {
    var obj =
            {
                greeting : str1,
                name : str2,
                sayIt : function(){return this.greeting + ", " + this.name;}
            };
    return obj;   
}
```
