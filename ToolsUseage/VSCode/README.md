## VSCode使用配置

**&nbsp;&nbsp;WIN:**

&nbsp;&nbsp;&nbsp;&nbsp;C和C++环境搭建:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.json:

```$json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/include",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/lib/gcc/i686-mingw32/4.4.5/include",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/lib/gcc/i686-mingw32/4.4.5/include/c++",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/lib/gcc/i686-mingw32/4.4.5/include/c++/backward",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/lib/gcc/i686-mingw32/4.4.5/include/c++/tr1",
                "D:/Program Files (x86)/Dev-Cpp/MinGW64/lib/gcc/i686-mingw32/4.4.5/include/c++/i686-mingw32"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "compilerPath": "D:/Program Files (x86)/Dev-Cpp/MinGW64/bin/g++.exe",
            "intelliSenseMode": "msvc-x64",
            "browse": {
                "path": [
                    "${workspaceFolder}"
                ]
            }
        }
    ],
    "version": 4
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;launch.json:

```$json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "gdb",
            "preLaunchTask": "build-debug",
            "miDebuggerPath": "D:/Program Files (x86)/Dev-Cpp/MinGW64/bin/gdb.exe",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ]
        }
    ]
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;settings.json:

```$json
{
    "files.associations": {
        "ostream": "cpp",
        "iostream": "cpp"
    },
    "editor.fontFamily": "'Comic Sans MS', 'Courier New', monospace,\"华文行楷\"",
    "editor.fontSize": 18,
    "window.zoomLevel": 0.1,
    "C_Cpp.default.cppStandard": "c++03",
    "editor.cursorStyle": "line-thin",
    "editor.cursorBlinking": "smooth"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tasks.json

```$json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build-debug",
            "type": "shell",
            "command": "g++",
            "args": [
                "-g",
                "-Wall",
                "\"${file}\"",
                "-o",
                "\"${fileDirname}\\${fileBasenameNoExtension}.exe\"",

            ]
        }
    ]
}
```

&nbsp;&nbsp;&nbsp;&nbsp;Python环境搭建:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;launch.json

```$json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "D:\\Program Files\\Python\\python.exe",
            "program": "${file}",
            "cwd": "${workspaceFolder}",
            "console": "integratedTerminal"
        },
        {
            "name": "Python: Attach",
            "type": "python",
            "request": "attach",
            "port": 5678,
            "host": "localhost"
        },
        {
            "name": "Python: Module",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "D:\\Program Files\\Python",
            "module": "enter-your-module-name-here",
            "console": "integratedTerminal"
        },
        {
            "name": "Python: Django",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "D:\\Program Files\\Python",
            "program": "${workspaceFolder}/manage.py",
            "console": "integratedTerminal",
            "args": [
                "runserver",
                "--noreload",
                "--nothreading"
            ],
            "django": true
        },
        {
            "name": "Python: Flask",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "D:\\Program Files\\Python",
            "module": "flask",
            "env": {
                "FLASK_APP": "app.py"
            },
            "args": [
                "run",
                "--no-debugger",
                "--no-reload"
            ],
            "jinja": true
        },
        {
            "name": "Python: Current File (External Terminal)",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "D:\\Program Files\\Python",
            "program": "${file}",
            "console": "externalTerminal"
        }
    ]
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;settings.json

```$json
{
    "python.pythonPath": "D:\\Program Files\\Python\\python.exe"
}
```

**&nbsp;&nbsp;代码模板的新建:**

>File ==> Preferences ==> User Snippets

&nbsp;&nbsp;&nbsp;&nbsp;在VSCode菜单栏选择楼上那位的路径，然后这里以HTML为例，配置的JSON文件如下

```
"HTML template": {
"prefix": "html5",
"body": [
"<!DOCTYPE html>",
"<html lang=\"zh\">",
"<head>",
"\t<meta charset=\"UTF-8\">",
"\t<title>${1:Page Title}</title>",
"</head>",
"<body>",
"\t$0",
"</body>",
"</html>"
],
"description": "Simple HTML5 starting point"
}
```

**&nbsp;&nbsp;用户信息设置:**

```$json
{
    "workbench.iconTheme": "vscode-icons-mac",
    "workbench.colorTheme": "Monokai",
    "git.ignoreLegacyWarning": true,
    "editor.lineHeight": 22,
    "editor.fontSize": 16,
    "editor.formatOnSave": true,
    "python.linting.flake8Enabled": true,
    "python.formatting.provider": "yapf",
    "python.linting.pylintArgs": [
        "--load-plugins",
        "pylint_django",
        "--disable-msg=C0111"
    ],
    "topper.customTemplateParameters": [
        {
            "personalProfile": {
                "author": "ataola",
                "website": "https://cnblogs.com/ataola",
                "copyright": "None \n None",
                "license": "MIT",
                "email": "zjt613@gmail.com"
            }
        }
    ],
    "topper.headerTemplates": [
        {
            "defaultCStyled": {
                "headerBegin": "# -*- coding: utf-8 -*-",
                "headerPrefix": "*",
                "headerEnd": "*/",
                "template": [
                    "${headerBegin}",
                    "${headerPrefix} @fileName ${fileName}",
                    "${headerPrefix} @author ${author}",
                    "${headerPrefix} @description ${description}",
                    "${headerPrefix} @created ${createdDate}",
                    "${headerPrefix} @copyright ${copyright}",
                    "${headerPrefix} @last-modified ${lastModifiedDate}",
                    "${headerEnd}"
                ]
            }
        },
        {
            "python": {
                "headerBegin": "#",
                "headerPrefix": "#",
                "headerEnd": "#",
                "template": [
                    "${headerBegin}",
                    "${headerPrefix} ${fileName}",
                    "${headerPrefix} @author ${author}",
                    "${headerPrefix} @description ${description}",
                    "${headerPrefix} @created ${createdDate}",
                    "${headerPrefix} @last-modified ${lastModifiedDate}",
                    "${headerEnd}"
                ]
            }
        }
    ]
}
```

[VSCode for JAVA](https://code.visualstudio.com/docs/languages/java)

