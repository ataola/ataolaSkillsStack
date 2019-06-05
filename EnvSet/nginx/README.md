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

```

