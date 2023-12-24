# Window命令行常量

```shell
@echo off
echo "取消转义：%%"
echo "文件路径：%~0"
echo "输入参数：%~1 %~2 %~3 %~4 %~5 %~6 %~7 %~8 %~9"
echo "文件路径：%~f0"
echo "驱动器名：%~d0"
echo "无驱路径：%~p0"
echo "取文件名：%~n0"
echo "取扩展名：%~x0"
echo "缩写路径：%~s0"
echo "文件属性：%~a0"
echo "创建时间：%~t0"
echo "文件大小：%~z0"
echo "组合使用：%~dp0"

输出：
F:\echohelper>test.bat
"取消转义：%"
"文件路径：test.bat"
"输入参数： "
"文件路径：F:\echohelper\test.bat"
"驱动器名：F:"
"无驱路径：\echohelper"
"取文件名：test"
"取扩展名：.bat"
"缩写路径：F:\ECHOHE~1\test.bat"
"文件属性：--a--------"
"创建时间：2020/12/18 11:08"
"文件大小：337"
"组合使用：F:\echohelper"

~0 - 删除任何引号(")，扩充 %0
%~f0 - 将 %0 扩充到一个完全合格的路径名(“f”是file，即文件)
%~d0 - 仅将 %0 扩充到一个驱动器号
%~p0 - 仅将 %0 扩充到一个路径
%~n0 - 仅将 %0 扩充到一个文件名(“n”是name 文件名)
%~x0 - 仅将 %0 扩充到一个文件扩展名
%~s0 - 扩充的路径只含有短名(“s”为Short，短的)
%~a0 - 将 %0 扩充到文件的文件属性(“a”为attribute，即属性)
%~t0 - 将 %0 扩充到文件的日期/时间(“t”time)
%~z0 - 将 %0 扩充到文件的大小(Size 大小)
%~PATH:0− 查找列在路径环境变量的目录，
- 并将PATH:0 - 查找列在路径环境变量的目录，
- 并将 %I 扩充到找到的第一个驱动器号和路径。
%~ftza0 - 将 %0 扩充到类似输出线路的 DIR

%0 为当前批处理文件

%ALLUSERSPROFILE% ： 列出所有用户Profile文件位置。
%APPDATA% : 列出应用程序数据的默认存放位置。
%CD% : 列出当前目录。
%CLIENTNAME% : 列出联接到终端服务会话时客户端的NETBIOS名。
%CMDCMDLINE% : 列出启动当前cmd.exe所使用的命令行。
%CMDEXTVERSION% : 命令出当前命令处理程序扩展版本号。
%CommonProgramFiles% : 列出了常用文件的文件夹路径。
%COMPUTERNAME% : 列出了计算机名。
%COMSPEC% : 列出了可执行命令外壳（命令处理程序）的路径。
%DATE% : 列出当前日期。
%ERRORLEVEL% : 列出了最近使用的命令的错误代码。
%HOMEDRIVE% : 列出与用户主目录所在的驱动器盘符。
%HOMEPATH% : 列出用户主目录的完整路径。
%HOMESHARE% : 列出用户共享主目录的网络路径。
%LOGONSEVER% : 列出有效的当前登录会话的域名控制器名。
%NUMBER_OF_PROCESSORS% : 列出了计算机安装的处理器数。
%OS% : 列出操作系统的名字。(Windows XP 和 Windows 2000 列为 Windows_NT.)
%Path% : 列出了可执行文件的搜索路径。
%PATHEXT% : 列出操作系统认为可被执行的文件扩展名。
%PROCESSOR_ARCHITECTURE% : 列出了处理器的芯片架构。
%PROCESSOR_IDENTFIER% : 列出了处理器的描述。
%PROCESSOR_LEVEL% : 列出了计算机的处理器的型号。
%PROCESSOR_REVISION% : 列出了处理器的修订号。
%ProgramFiles% : 列出了Program Files文件夹的路径。
%PROMPT% : 列出了当前命令解释器的命令提示设置。
%RANDOM% : 列出界于0 和 32767之间的随机十进制数。
%SESSIONNAME% : 列出连接到终端服务会话时的连接和会话名。
%SYSTEMDRIVE% : 列出了Windows启动目录所在驱动器。
%SYSTEMROOT% : 列出了Windows启动目录的位置。
%TEMP% and %TMP% : 列出了当前登录的用户可用应用程序的默认临时目录。
%TIME% : 列出当前时间。
%USERDOMAIN% : 列出了包含用户帐号的域的名字。
%USERNAME% : 列出当前登录的用户的名字。
%USERPROFILE% : 列出当前用户Profile文件位置。
%WINDIR% : 列出操作系统目录的位置。

变量 类型 描述
%ALLUSERSPROFILE% 本地 返回“所有用户”配置文件的位置。
%APPDATA% 本地 返回默认情况下应用程序存储数据的位置。
%CD% 本地 返回当前目录字符串。
%CMDCMDLINE% 本地 返回用来启动当前的 Cmd.exe 的准确命令行。
%CMDEXTVERSION% 系统 返回当前的“命令处理程序扩展”的版本号。
%COMPUTERNAME% 系统 返回计算机的名称。
%COMSPEC% 系统 返回命令行解释器可执行程序的准确路径。
%DATE% 系统 返回当前日期。使用与 date /t 命令相同的格式。由 Cmd.exe 生成。有关 date 命令的详细信息，请参阅 Date。
%ERRORLEVEL% 系统 返回上一条命令的错误代码。通常用非零值表示错误。
%HOMEDRIVE% 系统 返回连接到用户主目录的本地工作站驱动器号。基于主目录值而设置。用户主目录是在“本地用户和组”中指定的。
%HOMEPATH% 系统 返回用户主目录的完整路径。基于主目录值而设置。用户主目录是在“本地用户和组”中指定的。
%HOMESHARE% 系统 返回用户的共享主目录的网络路径。基于主目录值而设置。用户主目录是在“本地用户和组”中指定的。
%LOGONSERVER% 本地 返回验证当前登录会话的域控制器的名称。
%NUMBER_OF_PROCESSORS% 系统 指定安装在计算机上的处理器的数目。
%OS% 系统 返回操作系统名称。Windows 2000 显示其操作系统为 Windows_NT。
%PATH% 系统 指定可执行文件的搜索路径。
%PATHEXT% 系统 返回操作系统认为可执行的文件扩展名的列表。
%PROCESSOR_ARCHITECTURE% 系统 返回处理器的芯片体系结构。值：x86 或 IA64（基于 Itanium）。
%PROCESSOR_IDENTFIER% 系统 返回处理器说明。
%PROCESSOR_LEVEL% 系统 返回计算机上安装的处理器的型号。
%PROCESSOR_REVISION% 系统 返回处理器的版本号。
%PROMPT% 本地 返回当前解释程序的命令提示符设置。由 Cmd.exe 生成。
%RANDOM% 系统 返回 0 到 32767 之间的任意十进制数字。由 Cmd.exe 生成。
%SYSTEMDRIVE% 系统 返回包含 Windows server operating system 根目录（即系统根目录）的驱动器。
%SYSTEMROOT% 系统 返回 Windows server operating system 根目录的位置。
%TEMP% 和 %TMP% 系统和用户 返回对当前登录用户可用的应用程序所使用的默认临时目录。有些应用程序需要 TEMP，而其他应用程序则需要 TMP。
%TIME% 系统 返回当前时间。使用与 time /t 命令相同的格式。由 Cmd.exe 生成。有关 time 命令的详细信息，请参阅 Time。
%USERDOMAIN% 本地 返回包含用户帐户的域的名称。
%USERNAME% 本地 返回当前登录的用户的名称。
%USERPROFILE% 本地 返回当前用户的配置文件的位置。
%WINDIR% 系统 返回操作系统目录的位置。

%allusersprofile%--------------------所有用户的profile路径
%Userprofile%-----------------------当前用户的配置文件目录
%Appdata%--------------------------当前用户的应用程序路径
%commonprogramfiles%-------------应用程序公用的文件路径
%homedrive%------------------------当前用户的主盘
%Homepath%------------------------当前用户的主目录
%programfiles%----------------------应用程序的默认安装目录
%systemdrive%----------------------系统所在的盘符
%systemroot%-----------------------系统所在的目录
%windir%----------------------------同上，总是跟systemroot一样
%tmp%------------------------------当前用户的临时目录
%temp%-----------------------------同上临时目录
```
