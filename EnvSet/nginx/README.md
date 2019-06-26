## Nginx

&nbsp;&nbsp;**编译安装:**

```
#安装依赖
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel

#下载压缩包
wget http://nginx.org/download/nginx-1.8.0.tar.gz

#解压 编译安装
tar zxvf nginx-1.8.0.tar.gz
cd nginx-1.8.0
./configure
make && make install
这里的configure也可以不是默认的，例如这样
./configure --user=www --group=www --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module --with-ipv6 --with-http_sub_module --with-http_spdy_module


# 请求转发案例
server {
　 listen　　　 80;
　 server_name　www.domain.com;
　 index index.html index.htm index.php;
　 root /www/;　　// index.html 放置的服务器目录
　 location ^~ /api/ { // 匹配所有以www.domain.com/api/ 开头的请求
　　 proxy_pass http://data.domain.com; // 实际请求到的地址为http://data.
domain.com/api/
　 }
}

#防止搜索引擎爬虫
if ($http_user_agent ~* (baiduspider|googlebot|soso|bing|sogou|yahoo|sohu-search|yodao|YoudaoBot|robozilla|msnbot|MJ12bot|NHN|Twiceler)) {
    return  403;
}

#反向代理配置如下：
server {
    listen      80;
    server_name youtube.vpser.net;
    location / {
        sub_filter www.youtube.com youtube.vpser.net;  #替换原域名
        sub_filter_once off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Referer http://www.youtube.com;
        proxy_set_header Host www.youtube.com;
        proxy_pass http://www.youtube.com; #被代理网站的网址
        proxy_set_header Accept-Encoding "";
    }
}

```

