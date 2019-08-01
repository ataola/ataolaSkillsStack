## .Net

> 学习.Net的相关知识

&nbsp;&nbsp;**.Net的一些问题**
```
Q1:用VS2015打开VS的.Net项目，发现运行编译成功，但是IIS服务器起不来，报什么pid错误？
A1：第一，去你项目下的.csproj文件下，把<WebProjectProperties>里面的都清掉，
第二，去.vs/config下把applicationhost.config删除掉。


```