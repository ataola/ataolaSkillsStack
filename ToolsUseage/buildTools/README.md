## 构建工具学习

> 学习构建工具

&nbsp;&nbsp;**Maven安装配置：**
```
#下载地址：https://maven.apache.org/download.cgi

#安装目录
D:\Program Files\Apache\maven

#环境变量配置
MAVEN_HOME：D:\Program Files\Apache\maven
Path: %MAVEN_HOME%\bin\;
mvn -v
```

&nbsp;&nbsp;**Gradle安装配置：**
```
#下载地址：http://services.gradle.org/distributions/

#安装目录
D:\Program Files (x86)\gradle-3.5

#环境变量配置
GRADLE_HOME：D:\Program Files (x86)\gradle-3.5
Path: %GRADLE_HOME%\bin\;
gradle -v
```

&nbsp;&nbsp;**Maven配置阿里云：**
```
<mirrors>

    <mirror> 
    <id>alimaven</id> 
    <name>aliyun maven</name> 
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url> 
    <mirrorOf>central</mirrorOf> 
    </mirror> 
    
  </mirrors>
```
&nbsp;&nbsp;**Gradle配置阿里云：**
```
在 build.gradle 文件内修改 / 添加 repositories 配置
repositories {
    maven {
        url "http://maven.aliyun.com/nexus/content/groups/public"
    }
}

全局配置修改找到 your $home/.gradle/init.gradle 

allprojects {
    repositories {
        maven {
            url "http://maven.aliyun.com/nexus/content/groups/public"
        }
    }
}



```


