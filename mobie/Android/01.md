## Android 构建项目基础知识

> 基于Android studio讲解创建一个基于gradle的Android 项目知道以及注意哪些点。

前期工作自己做，啥下载安装，不懂得看我的其他文章去。

这里以创建一个Hello World项目为例,先说下步骤,不高兴截图，主要是懒,图在我心里。
```
Start a new Android Studio Project ==> Empty Activity ==> Name(helloworld) ==> 
Package name(ataola.com) ==> Save location(your workspace) ==> Language(Java) 
==> Minimum API level(API23 这个的话大部分手机都能用) ==> finish
```

创建和运行虚拟机，没啥好讲的，哪怕是我这种有选择恐惧症的人，都能很快出来，不懂你就google。

如果这个时候你没动过它的话，应该是helloworld>app，然后下面是Project目录。

```
.
|-- .gradle  系统生成的，你别管你别动
|-- .idea  系统生成的，你别管你别动
|-- .gitignore Git的忽略提交文件的配置，将指定内容排除在版本控制器之外
|-- helloworld.iml  标识这个是一个DIEA系列工具创建的项目
|-- app  这个是大头，今后写的都在这个里面
|-- build.gradle  这个是全局的gradle构建脚本，一般不需要改，一般是google被墙，然后你把它缓存国内的镜像
|-- gradle  gradle 和warpper配置文件，其中如果你是下了别人项目记得去改distributionUr为本地的
|-- gradle.properties  全局gradle配置文件，一般你也别去动它
|-- gradlew  Linux以及MAC下的执行脚本
|-- gradlew.bat  Window下的批处理
|-- local.properties  指定本机SDK位置，如果你是下了别人的项目，这边请把sdk.dir改成自己的
`-- settings.gradle  指定项目中所有引入的模块
```

然后这边着重看下app目录下的结构

```
.
|-- app.iml  系统生成的，你别搞它
|-- build  
|   |-- generated  系统生成的，你别管
|   |-- intermediates  系统生成的，你别动
|   |-- outputs 输出的apk和log日志的文件夹
|   `-- tmp  临时的目录
|-- build.gradle  这里改编译的构建的最低支持的SDK版本
|-- libs  第三方jar包拷到这里
|-- proguard-rules.pro  系统生成的，你随它吧
`-- src  开发源文件夹目录
    |-- androidTest  看英文啊，安卓测试目录
    |-- main  开发主文件目录
        |-- AndroidManifest.xml  注册组件，添加权限
        |-- java
        |   `-- com  接下去是你的域名，然后是你的项目名，然后是Activity组件
        `-- res
            |-- drawable  带这个打头的都放图片的
            |-- drawable-v24
            |-- layout  相应的布局文件
            |-- mipmap-anydpi-v26
            |-- mipmap-hdpi
            |-- mipmap-mdpi
            |-- mipmap-xhdpi
            |-- mipmap-xxhdpi
            |-- mipmap-xxxhdpi 
            `-- values  字符串
    `-- test    看英文啊，测试目录

```

HelloWorld的运行分析看AndroidManifest.xml
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.ataola.helloworld" >

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme" >
        <activity android:name=".MainActivity" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

相应的布局文件
```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```


Activity文件
```
package com.ataola.helloworld;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

```

这里再MainActivity里面继承了AppCompatActivity，然后再onCreate方法中调用了setContentView方法，然后引入了activity_main.xml，这个你去res下找。

res/values/strings.xml的文件如下
```
<resources>
    <string name="app_name">My Application</string>
</resources>

#关于外界引入

在代码中： R.string.app_name
在XML中： @string/app_name

drawable、mipmap、layout以此类推
```

关于那些布局的属性，就看你平时记了或者啥好法子搞了
```
    android:allowBackup
    android:icon
    android:label
    android:roundIcon
    android:supportsRtl
    android:theme
```

build.gradle的理解
```
buildscript {
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.3'
    }
}

那个后面的build号跟版本号不是一个东西，不一样的
jcenter是一个代码托管仓库
google也是的

```

关于日志信息你需要知道的
```
android.util.Log

Log.v()：最为琐碎的、意义最小的日志信息。对应级别verbose，安卓日志最低级别。
Log.d()：调试信息，对应级别debug，比verbose高一级。
Log.i()：重要的数据，对应级别info，比debug高一级。
Log.w()：用警告信息，对应级别warn，比info高一级。
Log.e()：错误信息，对应级别error，比warn高一级。
```

调研了Android的UI框架，发现Tencent的QMUI Android较为合适我，嗯，期待后续成长。

