## 前端的一些知识

#### Ajax

```

## 一个Ajax表单请求的例子
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

