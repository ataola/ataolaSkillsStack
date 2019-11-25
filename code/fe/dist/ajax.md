* **一个Ajax表单请求的例子**

```js
  function sendUserInfo() {
        $.ajax({
            url: 'http://localhost:3000/api/v1/getUserInfo',
            type: 'POST',
            contentType: "application/json;charset=utf-8",
            data: {
                "name": "zjt",
                "pwd": "123456"
            },
            dataType: "json",
            success: function (res) {
                console.log(data);
            },
            error: function (res) {
                console.log(res);
            }
        })
    }

```


* **获取一言API的Ajax例子**

```js
var hitokoto = document.getElementById('hitokoto');
function getHitokoto() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://v1.hitokoto.cn');
    xhr.onreadystatechange =  function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            hitokoto.innerText = data.hitokoto;
        }
    };
    xhr.send();
}

var timeInterval = setInterval(getHitokoto, 4000);
```

