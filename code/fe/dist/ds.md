## 数构和算法


#### 散列

* 比较符合期望的散列函数djb2HashCode

```js
var djb2HashCode = function (key) {
var hash = 5381; 
for (var i = 0; i < key.length; i++) { 
hash = hash * 33 + key.charCodeAt(i); 
}
return hash % 1013; 
};
```