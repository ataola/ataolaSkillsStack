* **监听浏览器的关闭事件**

```js
window.onbeforeunload = function (e) {
    var e = window.event ||e;
    e.returnValue = "确定要离开页面吗？";
}
```

同样的如果是打印事件， `window.onbeforeprint`

* **监听浏览器页面标签的切换**

```js
var OriginTitle = document.title;
document.addEventListener("visibilitychange", function () {
    if(document.hidden) {
        document.title = "爱我别走，如果你不爱我！";
    }else {
        document.title = OriginTitle;
    }
});
```
