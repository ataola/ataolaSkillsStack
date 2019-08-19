## windows学习

> 一些用Windows的心得

&nbsp;&nbsp;**问题汇总：**
```
Q1：win 10 子系统(WSL)在应用商店安装上，打开这样

Installing, this may take a few minutes.
WslRegisterDistribution failed with error: 0x8007019e
The Windows Subsystem for Linux optional corrponent is not enabled.
See https://aka.ms/wslinstall for details.
Press any key to continue.
Please enable it and try again.

A1:控制面板 ==> 程序与功能 ==> 启动或关闭Windows功能勾选适用于Linux的Windows子系统 ==>重启

Q1：windows上有没有类似Mac的brew安装包管理器
A1：https://github.com/lukesampson/scoop/wiki/Quick-Start


Q2: sublime package control介绍
A2:https://packagecontrol.io,https://github.com/wbond/package_control

Q3：为什么有时候Msdia80.dll会出现在其他盘根目录
A3:计算机上安装了 Microsoft Visual C++ 2005 可再发行组件时，Msdia80.dll文件被错误安装在其他驱动器的根文件夹中,把这个msdia80.dll复制到C:\Program Files\Common Files\Microsoft Shared\VC\内。

Q4:有时候开发遇到windows文件名过长，而Linux、Mac就没有这个问题
A4:Windows 中文件路径的长度不能大于 260 个字符

Q5：window 打开后 80端口被占用？

A5: 起先以为是IIS引起的，后来发现不是它，这个锅还得MS SQL背，解决的办法是，
win + r ==> ReportServer(SQL Server Reporting Services (MSSQLSERVER)) 把它关了或者禁止，我是改成了手动。


```