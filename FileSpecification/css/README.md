## 文件规范

**&nbsp;&nbsp;CSS:**

&nbsp;&nbsp;&nbsp;&nbsp;在写到一定量页面，你应该会有这样的感受，我总结如下：第一个是代码的冗余，经常写类似的代码，很糟心；第二个是关于注释说明这块，时间久了我自己都不知道我那年轻时候写的是啥，更别说别人了，所以要写注释，易于代码的维护；第三个是能不能偷点懒啊，把它封装成一个个组件，下次用到我就贴代码就好，大大提高了效率，但是这个前提是你要有那份心去整理总结。

&nbsp;&nbsp;&nbsp;&nbsp;涛版CSS声明模板：[template.css](./template.css)

&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">reset.css</font> <b>VS</b> <font color="red">normalize.css</font>

&nbsp;&nbsp;&nbsp;&nbsp;谈起为啥要有reset.css或者normalize.css这样一个概念，都要归结于生活实践。每当打开VSCode的那个夜晚，在写页面布局引入“ul li”之类的标签时，都会在页面上有个小圆点，此时你就需要清楚它自带的样式；在此基础上，你需要为每个li引入一个a标签，正常的视觉效果是鼠标悬停，有或深或浅的颜色变化，然后由箭头变为小手并且不需要下划线。需要做两件事，第一个是清除a标签默认带的下划线，第二个是为其加上小手的效果以及视觉的颜色变化 ，就要设置它的display属性，然后为了好看要考虑字体的颜色大小，这样的例子还有很多，阿涛啦不禁陷入了深思。历史总是惊人的相似，时隔不久当你再次写到类似的经历时，咦，这个好像在哪里见过，我要重新写吗？ 还是找以前写的贴过来，啊，不巧，我以前写的飞走了，真伤心。后面见的次数多了，哇，忍不了了讨厌，这是种病得治！！！这时阿涛啦萌发出了重置它们的样式的的想法，刚开始懂得不多，硬核的翻译了重置的英文reset，然后写了reset.css。

```$css
* {
    margin: 0;
    padding: 0;
}
html, body{
width: 100%;
font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", "微软雅黑", sans-serif;
}
ol, ul {
list-style: none;
}
a { 
	text-decoration: none; 
    cursor: pointer;
}
a:hover { 
	text-decoration: underline; 
}

```
&nbsp;&nbsp;&nbsp;&nbsp;还是闲着没事，思考了几个比较致命的问题。第一个是你这样子写有啥副作用吗？ 你能把在浏览器出来的效果和reset.css在脑子里做一个映射吗？ 有没有更好地解决方案？带着这些疑问查阅了相关资料，目前大致是分为两种，即我们前面提到的reset.css和normalize.css，到底哪个更好一点呢？我觉得还是具体问题具体分析的好，有人说normalize.css比reset.css好，它保护了原有的还有用的默认值并做了一系列的优化，而reset.css是重置了页面的样式。诚然是这样，但我觉得吧，reset.css还是有它的优点的，短小精悍，易于理解，适合初学者,根据业务场景去分析处理我觉得是最好的行走方式。


&nbsp;&nbsp;&nbsp;&nbsp;<b>[normalize.css](http://necolas.github.io/normalize.css/)</b>

* 保护浏览器有用的默认样式
* 修复了浏览器的一些Bug
* 详细的文档可靠的维护仓库
* 可定制可扩展


&nbsp;&nbsp;&nbsp;&nbsp;<b>[reset.css](https://meyerweb.com/eric/tools/css/reset/)</b>


* 代码简短精悍
* 适合初学者研究
