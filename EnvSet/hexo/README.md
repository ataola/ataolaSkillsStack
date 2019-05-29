## [hexo](https://hexo.io/zh-cn/) + [github](https://github.com/hexojs/hexo)

&nbsp;&nbsp;**[搭建Node.JS环境](../nodeJS/README.md)**

&nbsp;&nbsp;**安装hexo和其脚手架hexo-cli:**

```
$ npm i hexo -g  # 可不装
$ npm i hexo-cli -g
```

&nbsp;&nbsp;**创建hexo项目:**

```
$ hexo init blog
$ cd blog
$ npm install
$ hexo server
```

&nbsp;&nbsp;**基本配置:**

>配置文件是_config.yml，其中需要注意的是罗列如下：

```
# Site
title: ataola 
subtitle: I am Ataola
description: 灵魂相似的人最终会以各种方式在一起
author: Jiangtao Zheng
language: zh-CN

# URL
url: https://ataola.github.io


# Home page setting
index_generator:
  per_page: 12
  

# Pagination
per_page: 12

# Extensions
theme: your favirate theme

```


&nbsp;&nbsp;**常用命令:**

```
# 创建分类
hexo new page xxx
```

&nbsp;&nbsp;**主题推荐:**

>hexo-theme-matery

&nbsp;&nbsp;**插件推荐:**

```
npm i -S hexo-prism-plugin

npm install hexo-generator-search --save

npm i hexo-permalink-pinyin --save

npm i --save hexo-wordcount

npm install hexo-generator-feed --save

```

&nbsp;&nbsp;**总结:**
>在安装完相应脚手架后，选择合适的主题和插件，最后随机应变！！！