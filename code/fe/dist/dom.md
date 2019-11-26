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

* **静止Y轴滚动**

这个你也可以引申下，静止X轴的，这里就介绍Y轴，在body的style中加

```css
body {
    overflow-y: hidden;
}
```





