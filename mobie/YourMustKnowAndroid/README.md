## 你必须要知道的Android

> 对手机对应的Android版本和API有个直观的了解

&nbsp;&nbsp;**那些卖手机的:**
```
#题外话，先聊聊iphone，我记得我姐以前有个iPhone5,它就是支持3G的移动，4G用不了，卡成翔现在。所以低于iPhone 5S, 且不支持4G，滚，谁爱做谁做。9012年都出到"粪X"了，谁那么想不开用那么低版本。

#Android，最近也去玩了下比较新的技术Flutter，我这边下的版本是Channel stable, v1.5.4-hotfix.2, on Microsoft Windows [Version 10.0.18362.30], locale zh-CN，它这边要支持到Android SDK 28 and the Android BuildTools 28.0.3才可以跑得起来，也就是要Android 9，红米 Note7这种(我买的所以手机都是小米的，使平民能拥有一款像样的手机，冬天还能当暖宝宝，就是嵌入了些删不掉的广告，以前玩刷机的时候，把它刷成国际版，可以用Google的服务，然后没有广告，不然被欧盟罚倒闭哈哈，用起来还是蛮爽的。真正让我喜欢上小米这款产品，是今年无意中遇到友商VIVO，我依稀记得我那个型号是vivo Y55L，什么开发的Funtouch OS系统，Android版本6.0.1，也就是API23-API24这个中间段，绝望啊，不是很能适应它的一些逻辑，感觉有点反人类，就比如说截图，要划一下，点截图，然后选择截图方式，太不友好了，还有那个开发调试，电脑识别不了，然后又不可以Root，怕刷成砖头，我在手机上装了termux，然后跑一些Node.JS的程序，发现本地访问的时候会有些问题，啊啊啊啊啊啊，放弃了，再见 VIVO)。

我们这边先列出一些主流厂商的名字，等有时间进一步去了解

华为 ==> 中华有为
小米 ==> 发烧友
VIVO ==> 音乐手机
OPPO ==> 同楼上
锤子 ==> 买个锤子

其他的我不想了解，就这样吧，，，，，
有机会再整理对应手机的版本号啥的
```
&nbsp;&nbsp;**SDK:**
```
#tools
里面放这个emulator，没有这个模拟器起不来

#platform-tools
一些命令：像adb，fastboot等

#build-tools
对应Android版本下载的API
```

好啦，涛涛要开始画表了。

| Android版本 | 对应API |  典型的手机代表 |
| :----: | :----: | :----: |
| Android 10 | 29 |  | 
| Android 9 | 28 | 红米 Note7 | 
| Android 8.1.0 | 27 |  | 
| Android 8.0.0 | 26 |  | 
| Android 7.1.1 | 25 |  | 
| Android 7.0 | 24 |  | 
| Android 6.0 | 23 | vivo Y55L | 
| Android 5.1.1 | 22 |  | 
| Android 5.0.1 | 21 |  | 
| Android 4.4W.2 | 20 |  | 
| Android 4.4.2 | 19 |  | 
| Android 4.3.1 | 18 |  | 
| Android 4.2.2 | 17 |  | 
| Android 4.1.2 | 16 |  | 
| Android 4.0.3 | 15 |  | 
| Android 4.0 | 14 |  | 
| Android 3.2 | 13 |  | 
| Android 3.1 | 12 |  | 
| Android 3.0 | 11 |  | 
| Android 2.3.3 | 10 |  | 
| Android 2.3.1 | 9 |  | 
| Android 2.2 | 8 |  | 
| Android 2.1 | 7 |  | 

这里进一步观察下，每个Android版本里面有啥东西，找特征和找断层这里随便挑几个啦。
它这个模拟器像Eclipse用的是ARM那种有点卡， 还有就是Inter核的那种
```
#Android 10
SDK Platform 
Inter x86 Atom_64 System Image
Inter x86 Atom System Image
Google Play Inter x86 Atom_64 System Image
Google Play Inter x86 Atom System Image
Google APIs Inter x86 Atom_64 System Image
Google APIs Inter x86 Atom System Image

#Android 9
SDK Platform 
Inter x86 Atom_64 System Image
Inter x86 Atom System Image
Google Play Inter x86 Atom_64 System Image
Google Play Inter x86 Atom System Image
Google APIs Inter x86 Atom_64 System Image
Google APIs Inter x86 Atom System Image
Android TV Inter x86 Atom System Image(比楼上那位多的)
Android Wear OS Inter x86 Atom System Image(比楼上那位多的)
Sources for Android SDK(比楼上那位多的)

我们先这样看，从9到10的变化是少了源码的SDK，然后10没有TV了，也就是安装在电视上的那些开发软件，然后少了那个啥 Wear OS， 目测应该是个啥系统，这里在我们安装的时候怎么选择呢，根据你电脑的位数进行选择，带64的就是64位，不带的是32位，其余部分装吧，当然你要是硬盘能够承受得起这份沉重，你全装也是无可厚非的。

这个直到Android 8.0.0(API 26)的时候正式剔除了ARM的，仅留下Inter的，到这里我们肯定是很感兴趣最后一个带ARM的里面有啥，一般观察特征，要么头，要么尾，要么取中间，这个是人们最容易想到的。

#Android 7.1.1 (API 25) 
SDK Platform 
Inter x86 Atom_64 System Image
Inter x86 Atom System Image
Google Play Inter x86 Atom System Image
Google APIs Inter x86 Atom_64 System Image
Google APIs Inter x86 Atom System Image
Android TV Inter x86 Atom System Image
Android Wear OS Inter x86 Atom System Image
Sources for Android SDK
Android Wear OS ARM EABI v7a System Image(比楼上那位多的)
Google APIs ARM EABI v7a System Image(比楼上那位多的)
Google APIs ARM 64 v8a System Image(比楼上那位多的)

和楼上相比少了这个Google Play Inter x86 Atom_64 System Image，也可能是我网不好没显示出来，反正我统计的时候我没看到，但是想想又觉得不科学啊，后来把目光扫下楼下这个，它也没有啊，有意思的是它多了这两个

#Android 7.0(API 24)
SDK Platform 
Inter x86 Atom_64 System Image
Inter x86 Atom System Image
Google Play Inter x86 Atom System Image
Google APIs Inter x86 Atom_64 System Image
Google APIs Inter x86 Atom System Image
Android TV Inter x86 Atom System Image
Android Wear OS Inter x86 Atom System Image
Sources for Android SDK
Android Wear OS ARM EABI v7a System Image
Google APIs ARM EABI v7a System Image
Google APIs ARM 64 v8a System Image
Documentation for Android SDK(比楼上那位多的)
Google APIs(比楼上那位多的)

好了后面我就不太费这么大劲了，意思一下把
在Android5..1.1(API 22)相比楼上多了 Samples for SDK，另外Google Play是Android 6.0(API 23)之后才有的，其他的被历史的洪流所淘汰淹没，不想伤害脑子去了解了，我们去看看最开始的那个Android 2.1里面只有一个 SDK Platform ，2333333。

Tools下全是Android SDK Built-tools,这个是有很多个版本，Android SDK Tools 和Android SDk Platform-tools只有一个。

Extras下东西五花八门的，具体的看楼下吧！
Android Support Repository
Android Auto Desktop Head Unit emulator
Google Play services
Google Play Instant Development SDK
Google Repository
Google Play APK Expansion library
Google Play licensing Library
Android Auto API Simulators
Google USB Driver
Google Web Driver
Inter x86 Emulator Accelerator(HAXM Installer)

至此，与Android初次会面，一回生，二回熟，三回我们是个老朋友！
```




