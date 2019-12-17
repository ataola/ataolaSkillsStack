# tomcat用户配置

我们先来看看tomcat的目录结构

```
.
|-- LICENSE
|-- NOTICE
|-- RELEASE-NOTES
|-- RUNNING.txt
|-- bin
|   |-- bootstrap.jar
|   |-- catalina-tasks.xml
|   |-- catalina.bat
|   |-- catalina.sh
|   |-- commons-daemon.jar
|   |-- cpappend.bat
|   |-- digest.bat
|   |-- digest.sh
|   |-- jsvc.tar.gz
|   |-- service.bat
|   |-- setclasspath.bat
|   |-- setclasspath.sh
|   |-- shutdown.bat
|   |-- shutdown.sh
|   |-- startup.bat
|   |-- startup.sh
|   |-- tomcat-juli.jar
|   |-- tomcat-native.tar.gz
|   |-- tomcat6.exe
|   |-- tomcat6w.exe
|   |-- tool-wrapper.bat
|   |-- tool-wrapper.sh
|   |-- version.bat
|   `-- version.sh
|-- conf
|   |-- catalina.policy
|   |-- catalina.properties
|   |-- context.xml
|   |-- logging.properties
|   |-- server.xml
|   |-- tomcat-users.xml
|   `-- web.xml
|-- lib
|   |-- annotations-api.jar
|   |-- catalina-ant.jar
|   |-- catalina-ha.jar
|   |-- catalina-tribes.jar
|   |-- catalina.jar
|   |-- el-api.jar
|   |-- jasper-el.jar
|   |-- jasper-jdt.jar
|   |-- jasper.jar
|   |-- jsp-api.jar
|   |-- servlet-api.jar
|   |-- tomcat-coyote.jar
|   |-- tomcat-dbcp.jar
|   |-- tomcat-i18n-es.jar
|   |-- tomcat-i18n-fr.jar
|   `-- tomcat-i18n-ja.jar
|-- logs
|-- temp
|   `-- safeToDelete.tmp
|-- webapps
|   |-- ROOT
|   |-- docs
|   |-- examples
|   |-- host-manager
|   `-- manager
`-- work

```


* tomcat6(apache-tomcat-6.0.9)

直接配置`tomcat-users.xml`这一个文件就好了,具体内容如下：
```
<?xml version='1.0' encoding='utf-8'?>
<tomcat-users>
  <role rolename="role1"/>
  <role rolename="manager"/>
  <role rolename="tomcat"/>
  <user username="role1" password="tomcat" roles="role1"/>
  <user username="tomcat" password="tomcat" roles="tomcat"/>
  <user username="admin" password="admin" roles="manager"/>
  <user username="both" password="tomcat" roles="tomcat,role1"/>
</tomcat-users>

```
我们分析下start.bat做了啥，如下：

```
Using CATALINA_BASE:   D:\ataola\server\tomcat\apache-tomcat-6.0.9
Using CATALINA_HOME:   D:\ataola\server\tomcat\apache-tomcat-6.0.9
Using CATALINA_TMPDIR: D:\ataola\server\tomcat\apache-tomcat-6.0.9\temp
Using JRE_HOME:        D:\Program Files\Java\jdk1.8.0_161
```

* tomcat7(apache-tomcat-7.0.91)

直接配置`tomcat-users.xml`这一个文件就好了,具体内容如下：
```
<?xml version='1.0' encoding='utf-8'?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<tomcat-users>
<!--
  NOTE:  By default, no user is included in the "manager-gui" role required
  to operate the "/manager/html" web application.  If you wish to use this app,
  you must define such a user - the username and password are arbitrary. It is
  strongly recommended that you do NOT use one of the users in the commented out
  section below since they are intended for use with the examples web
  application.
-->
<!--
  NOTE:  The sample user and role entries below are intended for use with the
  examples web application. They are wrapped in a comment and thus are ignored
  when reading this file. If you wish to configure these users for use with the
  examples web application, do not forget to remove the <!.. ..> that surrounds
  them. You will also need to set the passwords to something appropriate.
-->
<!--
  <role rolename="tomcat"/>
  <role rolename="role1"/>
  <user username="tomcat" password="<must-be-changed>" roles="tomcat"/>
  <user username="both" password="<must-be-changed>" roles="tomcat,role1"/>
  <user username="role1" password="<must-be-changed>" roles="role1"/>
-->

 <role rolename ="manager-gui"/>
 <role rolename ="manager-status"/>
 <role rolename ="manager-script"/>
 <role rolename ="admin-gui"/>
 <role rolename ="admin-script"/>
 <user username ="admin" password ="admin" roles ="manager-gui,manager-status,manager-script,admin-gui,admin-script"/>
</tomcat-users>
```
这里`manager App`和`Host Manager`都可以登录的

* tomcat8(apache-tomcat-8.0.53)

配置`tomcat-users.xml`这一个文件就好了,具体内容如下：

```
<?xml version='1.0' encoding='utf-8'?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
              version="1.0">
<!--
  NOTE:  By default, no user is included in the "manager-gui" role required
  to operate the "/manager/html" web application.  If you wish to use this app,
  you must define such a user - the username and password are arbitrary. It is
  strongly recommended that you do NOT use one of the users in the commented out
  section below since they are intended for use with the examples web
  application.
-->
<!--
  NOTE:  The sample user and role entries below are intended for use with the
  examples web application. They are wrapped in a comment and thus are ignored
  when reading this file. If you wish to configure these users for use with the
  examples web application, do not forget to remove the <!.. ..> that surrounds
  them. You will also need to set the passwords to something appropriate.
-->
<!--
  <role rolename="tomcat"/>
  <role rolename="role1"/>
  <user username="tomcat" password="<must-be-changed>" roles="tomcat"/>
  <user username="both" password="<must-be-changed>" roles="tomcat,role1"/>
  <user username="role1" password="<must-be-changed>" roles="role1"/>
-->
<role rolename="admin-gui"/>
<role rolename="manager-gui"/>
<role rolename="manager-jmx"/>
<role rolename="manager-script"/>
<role rolename="manager-status"/>
<user username="admin" password="admin" roles="admin-gui,manager-gui,manager-jmx,
manager-script,manager-status"/>
</tomcat-users>


```

发现这个时候登录不了了， tomcat的安全机制
在webapps下的manager文件夹下有一个`content.xml`

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<Context antiResourceLocking="false" privileged="true" >
  <!--
    Remove the comment markers from around the Valve below to limit access to
    the manager application to clients connecting from localhost
  -->
  <!--
  <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
  -->
  <Valve className="org.apache.catalina.valves.RemoteAddrValve"
        allow="^.*$" />
  <Manager sessionAttributeValueClassNameFilter="java\.lang\.(?:Boolean|Integer|Long|Number|String)|org\.apache\.catalina\.filters\.CsrfPreventionFilter\$LruCache(?:\$1)?|java\.util\.(?:Linked)?HashMap"/>
</Context>

```
这样子就可以了。

发现start.bat做了这件事

```
Using CATALINA_BASE:   "D:\ataola\server\tomcat\apache-tomcat-8.0.53"
Using CATALINA_HOME:   "D:\ataola\server\tomcat\apache-tomcat-8.0.53"
Using CATALINA_TMPDIR: "D:\ataola\server\tomcat\apache-tomcat-8.0.53\temp"
Using JRE_HOME:        "D:\Program Files\Java\jdk1.8.0_161"
Using CLASSPATH:       "D:\ataola\server\tomcat\apache-tomcat-8.0.53\bin\bootstrap.jar;D:\ataola\server\tomcat\apache-tomcat-8.0.53\bin\tomcat-juli.jar"
```


* tomcat9

同tomcat8