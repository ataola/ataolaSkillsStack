## Android Studio + Gradle + SDK +Flutter

> 这个本来想放在环境搭建那里，后来放在这里我觉得比较合适，需要的童鞋来领全家桶。记住这句话你能联网问题都不大的，你要是能翻墙那就没问题，就这么简单。

&nbsp;&nbsp;**Android Studio的故事:**
```
#先说下背景吧，以前上学的时候因为穷，买的电脑是AMD的CPU便宜点，然后就各种搞起来累（这个和不能搞还是有区别的），像什么黑苹果，Android模拟器啥的。但是ataola选手是个能折腾的人，印象里我记得当年我玩黑苹果的时候，AMD是可以搞的，不过我不想在真机上搞，就安装了Vmware，最开始是找到一个镜像是Mountain Lion的，后面我觉得那个版本太老了，就去找了个国外大神的OSX 10.12的 EL Caption，刚开始还很新鲜，觉得好玩，后来就是一个午后，我对着电脑思考，有什么用呢，CPU不行跑起来如果运行大点的程序就有点卡，难道就只是为了好看？ 后面就把它删了，当我第二次思考的时候，我把我移动硬盘的所有关于OSX的原版镜像删了，三个原因，一个是因为我的买不起苹果电脑，第二个是找我修苹果电脑的妹子少了，第三个是我要放其他素材。关于Android的话，最开始我是装了Android studio 模拟器不起来，然后我就装了那个Generation 模拟器勉勉强强能跑，但是卡成翔。用eclipse的话，可以用arm的，但是也是卡成翔，然后学校对我们计算机教安卓也就和达内py一下，期末压缩到两个星期教完，做了个啥播放器，放在我忘了，李恩哲老师讲的还行，但是就我现在来讲，我特么都不知道学了干啥。公司刚好有android的需求，但是是内网，就是你只能断网完成一切，遂开始折腾，记录我这个瞎搞的青春。

安装方式： 
    解压版（推荐）
    安装包

别问我为什么这样选，可能是对于mysql解压包以前早些版本的redis和mongodb解压包深深的感情，也可能是受Linux思想的影响，喜欢解压包。最重要的，安装好烦啊，解压运行多特么爽啊，我有选择恐惧症，，，，，
但是他这个有个先决条件是你的电脑上安装了JDK。搞完以后，根据自己电脑的位数，选择相应的exe程序，这个你后面可以发送到桌面或者固定到屏幕，反正按你开心的来，像我就是选择bin下的studio64.exe运行，其他的该不该问题都不太大。
```

&nbsp;&nbsp;**Gradle的故事（5.5为例）:**
```
#Gradle是跟Maven一样，是一个构建工具，它的安装，我记得不仅仅是安卓，Spring框架的学习的时候也接触了它。但是我接触它是Android先，所以下面就慢慢讲吧。

$在我接触Android的时候
Eclipse的时候我还不认识它，就是在装Android studio的时候，需要这个东西去构建，当时是这样搞得，因为被墙嘛，所以你事先下好gradle-X.X-all.zip包，然后把它贴到“C:\Users\你的用户名\.gradle\wrapper\dists\gradle-5.5-all\4vrnlxvp4flf3grur0z0cpfun(这个每个人可能不一样）”下，关掉重启，重启治百病，对。

然后项目，clean build， rebuild一下， OK


$在我接触Spring的时候就把它配置了环境变量
GRADLE_HOME：D:\Android\gradle-5.5-all\gradle-5.5
path: %GRADLE_HOME%\bin
bigo !!!

我个人觉得吧，我喜欢下面这种，因为不仅仅是Android 可以用， Spring也可以啊。

但是你要是选择楼下那位，你在Android Studio下面要改一下东西 要把它改成本地的Gradle

File ==> Settings ==> Build ==> Build Tools ==> Gradle ==> use local gradle distribution ==> Gradle home
bigo !!!
```

&nbsp;&nbsp;**SDK的故事:**
```
#这个最老早，我是有那个ADT的Eclipse包，我看到里面有这个东西，但是当时干了一件现在看来特别蠢的是，我是先打开Eclipse，然后在里面click其中的AVD和SDK那两个东西，后来发现找到文件夹去点更快更爽，后期我的期望是结合市场主流手机去了解API，这样子那些上古手机就不用做适配和下载了，真让人头大。

还是环境配置：
ANDROID_HOME：D:\Android\androidSDK\android-sdk-windows
path: %ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
```

&nbsp;&nbsp;**Flutter（1.5.4）的故事:**
```
#Flutter是最近(2019)流行起来的技术，反正我在我那个amd的机子上配合着夜神模拟器也搞出来了，这里开门见山的说怎么搞吧。

去下载那个flutter_windows_v1.5.4-hotfix.2-stable.zip这个包
然后找个位置解压下，开始配环境变量
FLUTTER_STORAGE_BASE_URL： https://storage.flutter-io.cn
PUB_HOSTED_URL： https://pub.flutter-io.cn
path: D:\Android\flutter_windows_v1.5.4-hotfix.2-stable\flutter\bin
bigo !!!

然后 WIN + R ==> cmd 

输入 flutter 试试吧
然后检测下环境用 flutter doctor
我这边因为是内网环境比较麻烦，这边就不展示了我成功的结果了，失败的放一个反省下。

C:\Users\ataola>flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[√] Flutter (Channel stable, v1.5.4-hotfix.2, on Microsoft Windows [Version 10.0.18362.30], locale zh-CN)
[!] Android toolchain - develop for Android devices (Android SDK version 21.1.2)
    X Flutter requires Android SDK 28 and the Android BuildTools 28.0.3
      To update using sdkmanager, run:
        "D:\Android\androidSDK\android-sdk-windows\tools\bin\sdkmanager" "platforms;android-28" "build-tools;28.0.3"
      or visit https://flutter.dev/setup/#android-setup for detailed instructions.
    X Android license status unknown.
      Try re-installing or updating your Android SDK Manager.
      See https://developer.android.com/studio/#downloads or visit https://flutter.dev/setup/#android-setup for detailed
      instructions.
[!] Android Studio (version 3.4)
    X Flutter plugin not installed; this adds Flutter specific functionality.
    X Dart plugin not installed; this adds Dart specific functionality.
[!] IntelliJ IDEA Ultimate Edition (version 2018.2)
    X Flutter plugin not installed; this adds Flutter specific functionality.
    X Dart plugin not installed; this adds Dart specific functionality.
[√] Connected device (1 available)

! Doctor found issues in 3 categories.

C:\Users\ataola>

上次马老师都说了，失败大部分人都不一样，但成功大部分都一样，所以放个失败思考下。
```