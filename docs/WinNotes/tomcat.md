### Tomcat本地服务化

> 适用于Windows用户在本地部署服务器

- 去[Tomcat官网](https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.90/bin/)下载包，选择`apache-tomcat-9.0.90-windows-x64.zip`下载
- 解压到你想部署的路径下，如果要部署多个，可以适当变更Tomcat根目录的名字
- 打开`bin`目录，修改`service.bat`文件
- 管理员权限打开CMD，cd到bin目录下，执行`./service.bat install {服务名}`
- 重命名`tomcat9.exe`和`tomcat9w.exe`为`{服务名}.exe`和`{服务名}w.exe`
- 双击打开`{服务名}w.exe`
- `General`选项卡中，设置`Startup Type`为`Automatic`
