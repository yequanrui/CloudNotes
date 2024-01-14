# Nginx教程

## Nginx 概述

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtiaBiaM8rskvWvvoE2ibKcmW7zPr5UiaGkFnby20aiaLD882wLKnx1ZBqbPg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

`Nginx` 是开源、高性能、高可靠的 `Web` 和反向代理服务器，而且支持热部署，几乎可以做到 7 \* 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 `Nginx` 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是， `Nginx` 是免费的并可以商业化，配置使用也比较简单。  

## Nginx 特点

- 高并发、高性能；

- 模块化架构使得它的扩展性非常好；

- 异步非阻塞的事件驱动模型这点和 `Node.js` 相似；

- 相对于其它服务器来说它可以连续几个月甚至更长而不需要重启服务器使得它具有高可靠性；

- 热部署、平滑升级；

- 完全开源，生态繁荣；

## Nginx 作用

Nginx 的最重要的几个使用场景：

1. 静态资源服务，通过本地文件系统提供服务；

2. 反向代理服务，延伸出包括缓存、负载均衡等；

3. `API` 服务， `OpenResty` ；

对于前端来说 `Node.js` 并不陌生， `Nginx` 和 `Node.js` 的很多理念类似， `HTTP` 服务器、事件驱动、异步非阻塞等，且 `Nginx` 的大部分功能使用 `Node.js` 也可以实现，但 `Nginx` 和 `Node.js` 并不冲突，都有自己擅长的领域。 `Nginx` 擅长于底层服务器端资源的处理（静态资源处理转发、反向代理，负载均衡等）， `Node.js` 更擅长上层具体业务逻辑的处理，两者可以完美组合。

用一张图表示：  
![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtfAvX6VIqLT5TSNzX93AVOLiaiaHEBdicxZq0HRspToKy604gryVQfejjg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## Nginx 安装

本文演示的是 `Linux` `centOS 7.x` 的操作系统上安装 `Nginx` ，至于在其它操作系统上进行安装可以网上自行搜索，都非常简单的。

使用 `yum` 安装 `Nginx` ：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">yum&nbsp;install&nbsp;nginx&nbsp;-y<br></code>
```

安装完成后，通过 `rpm \-ql nginx` 命令查看 `Nginx` 的安装信息：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx配置文件</span><br>/etc/nginx/nginx.conf&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;nginx&nbsp;主配置文件</span><br>/etc/nginx/nginx.conf.default<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;可执行程序文件</span><br>/usr/bin/nginx-upgrade<br>/usr/sbin/nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;nginx库文件</span><br>/usr/lib/systemd/system/nginx.service&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;用于配置系统守护进程</span><br>/usr/lib64/nginx/modules&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx模块目录</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;帮助文档</span><br>/usr/share/doc/nginx-1.16.1<br>/usr/share/doc/nginx-1.16.1/CHANGES<br>/usr/share/doc/nginx-1.16.1/README<br>/usr/share/doc/nginx-1.16.1/README.dynamic<br>/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;静态资源目录</span><br>/usr/share/nginx/html/404.html<br>/usr/share/nginx/html/50x.html<br>/usr/share/nginx/html/index.html<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;存放Nginx日志文件</span><br>/var/<span>log</span>/nginx<br></code>
```

主要关注的文件夹有两个：

1. `/etc/nginx/conf.d/` 是子配置项存放处， `/etc/nginx/nginx.conf` 主配置文件会默认把这个文件夹中所有子配置项都引入；

2. `/usr/share/nginx/html/` 静态文件都放在这个文件夹，也可以根据你自己的习惯放在其他地方；

## Nginx 常用命令

`systemctl` 系统命令：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;开机配置</span><br>systemctl&nbsp;<span>enable</span>&nbsp;nginx&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;开机自动启动</span><br>systemctl&nbsp;<span>disable</span>&nbsp;nginx&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;关闭开机自动启动</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;启动Nginx</span><br>systemctl&nbsp;start&nbsp;nginx&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;停止Nginx</span><br>systemctl&nbsp;stop&nbsp;nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;重启Nginx</span><br>systemctl&nbsp;restart&nbsp;nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;重新加载Nginx</span><br>systemctl&nbsp;reload&nbsp;nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;查看&nbsp;Nginx&nbsp;运行状态</span><br>systemctl&nbsp;status&nbsp;nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;查看Nginx进程</span><br>ps&nbsp;-ef&nbsp;|&nbsp;grep&nbsp;nginx<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;杀死Nginx进程</span><br><span>kill</span>&nbsp;-9&nbsp;pid&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;根据上面查看到的Nginx进程号，杀死Nginx进程，-9&nbsp;表示强制结束进程</span><br></code>
```

`Nginx` 应用程序命令：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">nginx&nbsp;-s&nbsp;reload&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;向主进程发送信号，重新加载配置文件，热重启</span><br>nginx&nbsp;-s&nbsp;reopen&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;重启&nbsp;Nginx</span><br>nginx&nbsp;-s&nbsp;stop&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;快速关闭</span><br>nginx&nbsp;-s&nbsp;quit&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;等待工作进程处理完成后关闭</span><br>nginx&nbsp;-T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;查看当前&nbsp;Nginx&nbsp;最终的配置</span><br>nginx&nbsp;-t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;检查配置是否有问题</span><br></code>
```

## Nginx 核心配置

## 配置文件结构

`Nginx` 的典型配置示例：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;main段配置信息</span><br>user&nbsp;&nbsp;nginx;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;运行用户，默认即是nginx，可以不进行设置</span><br>worker_processes&nbsp;&nbsp;auto;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx&nbsp;进程数，一般设置为和&nbsp;CPU&nbsp;核数一样</span><br>error_log&nbsp;&nbsp;/var/<span>log</span>/nginx/error.log&nbsp;warn;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx&nbsp;的错误日志存放目录</span><br>pid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/var/run/nginx.pid;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx&nbsp;服务启动时的&nbsp;pid&nbsp;存放位置</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;events段配置信息</span><br>events&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;use&nbsp;epoll;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)</span><br>&nbsp;&nbsp;&nbsp;&nbsp;worker_connections&nbsp;1024;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;每个进程允许最大并发数</span><br>}<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;http段配置信息</span><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置</span><br>http&nbsp;{&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;设置日志模式</span><br>&nbsp;&nbsp;&nbsp;&nbsp;log_format&nbsp;&nbsp;main&nbsp;&nbsp;<span>'$remote_addr&nbsp;-&nbsp;$remote_user&nbsp;[$time_local]&nbsp;"$request"&nbsp;'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>'$status&nbsp;$body_bytes_sent&nbsp;"$http_referer"&nbsp;'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>'"$http_user_agent"&nbsp;"$http_x_forwarded_for"'</span>;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;access_log&nbsp;&nbsp;/var/<span>log</span>/nginx/access.log&nbsp;&nbsp;main;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;Nginx访问日志存放位置</span><br><br>&nbsp;&nbsp;&nbsp;&nbsp;sendfile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;开启高效传输模式</span><br>&nbsp;&nbsp;&nbsp;&nbsp;tcp_nopush&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;减少网络报文段的数量</span><br>&nbsp;&nbsp;&nbsp;&nbsp;tcp_nodelay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on;<br>&nbsp;&nbsp;&nbsp;&nbsp;keepalive_timeout&nbsp;&nbsp;&nbsp;65;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;保持连接的时间，也叫超时时间，单位秒</span><br>&nbsp;&nbsp;&nbsp;&nbsp;types_hash_max_size&nbsp;2048;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;include&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/etc/nginx/mime.types;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;文件扩展名与类型映射表</span><br>&nbsp;&nbsp;&nbsp;&nbsp;default_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application/octet-stream;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认文件类型</span><br><br>&nbsp;&nbsp;&nbsp;&nbsp;include&nbsp;/etc/nginx/conf.d/*.conf;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;加载子配置项</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;server段配置信息</span><br>&nbsp;&nbsp;&nbsp;&nbsp;server&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;listen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;配置监听的端口</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;server_name&nbsp;&nbsp;localhost;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;配置的域名</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;location段配置信息</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;&nbsp;&nbsp;/usr/share/nginx/html;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;网站根目录</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;&nbsp;index.html&nbsp;index.htm;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认首页文件</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deny&nbsp;172.168.22.11;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;禁止访问的ip地址，可以为all</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allow 172.168.33.44；<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;允许访问的ip地址，可以为all</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error_page&nbsp;500&nbsp;502&nbsp;503&nbsp;504&nbsp;/50x.html;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认50x对应的访问页面</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error_page&nbsp;400&nbsp;404&nbsp;error.html;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;同上</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br></code>
```

- `main` 全局配置，对全局生效；

- `events` 配置影响 `Nginx` 服务器与用户的网络连接；

- `http` 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置；

- `server` 配置虚拟主机的相关参数，一个 `http` 块中可以有多个 `server` 块；

- `location` 用于配置匹配的 `uri` ；

- `upstream` 配置后端服务器具体地址，负载均衡配置不可或缺的部分；

用一张图清晰的展示它的层级结构：  
![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZttVadvjianCuG5VVd2nuiauWV2p6XTtSHiaIfjlNg8LuO8NYddOlj5iceJg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 配置文件 main 段核心参数

### user

指定运行 `Nginx` 的 `woker` 子进程的属主和属组，其中组可以不指定。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">user&nbsp;USERNAME&nbsp;[GROUP]<br><br>user&nbsp;nginx&nbsp;lion;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;用户是nginx;组是lion</span><br></code>
```

### pid

指定运行 `Nginx` `master` 主进程的 `pid` 文件存放路径。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">pid&nbsp;/opt/nginx/logs/nginx.pid&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;master主进程的的pid存放在nginx.pid的文件</span><br></code>
```

### worker\_rlimit\_nofile\_number

指定 `worker` 子进程可以打开的最大文件句柄数。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_rlimit_nofile&nbsp;20480;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;可以理解成每个worker子进程的最大连接数量。</span><br></code>
```

### worker\_rlimit\_core

指定 `worker` 子进程异常终止后的 `core` 文件，用于记录分析问题。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_rlimit_core&nbsp;50M;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;存放大小限制</span><br>working_directory&nbsp;/opt/nginx/tmp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;存放目录</span><br></code>
```

### worker\_processes\_number

指定 `Nginx` 启动的 `worker` 子进程数量。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_processes&nbsp;4;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;指定具体子进程数量</span><br>worker_processes&nbsp;auto;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;与当前cpu物理核心数一致</span><br></code>
```

### worker\_cpu\_affinity

将每个 `worker` 子进程与我们的 `cpu` 物理核心绑定。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_cpu_affinity&nbsp;0001&nbsp;0010&nbsp;0100&nbsp;1000;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;4个物理核心，4个worker子进程</span><br></code>
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtZIGmia42mZYtFicgicRtCKBCJYbon4trM52w2f8sqtXqSzUM2eZvm2tSw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

将每个 `worker` 子进程与特定 `CPU` 物理核心绑定，优势在于，避免同一个 `worker` 子进程在不同的 `CPU` 核心上切换，缓存失效，降低性能。但其并不能真正的避免进程切换。

### worker\_priority

指定 `worker` 子进程的 `nice` 值，以调整运行 `Nginx` 的优先级，通常设定为负值，以优先调用 `Nginx` 。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_priority&nbsp;-10;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;120-10=110，110就是最终的优先级</span><br></code>
```

`Linux` 默认进程的优先级值是120，值越小越优先； `nice` 定范围为 `-20` 到 `+19` 。

\[备注\] 应用的默认优先级值是120加上 `nice` 值等于它最终的值，这个值越小，优先级越高。

### worker\_shutdown\_timeout

指定 `worker` 子进程优雅退出时的超时时间。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_shutdown_timeout&nbsp;5s;<br></code>
```

### timer\_resolution

`worker` 子进程内部使用的计时器精度，调整时间间隔越大，系统调用越少，有利于性能提升；反之，系统调用越多，性能下降。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">timer_resolution&nbsp;100ms;<br></code>
```

在 `Linux` 系统中，用户需要获取计时器时需要向操作系统内核发送请求，有请求就必然会有开销，因此这个间隔越大开销就越小。

### daemon

指定 `Nginx` 的运行方式，前台还是后台，前台用于调试，后台用于生产。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">daemon&nbsp;off;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认是on，后台运行模式</span><br></code>
```

## 配置文件 events 段核心参数

### use

`Nginx` 使用何种事件驱动模型。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">use&nbsp;method;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;不推荐配置它，让nginx自己选择</span><br><br>method 可选值为：select、poll、kqueue、epoll、/dev/poll、eventport<br></code>
```

### worker\_connections

`worker` 子进程能够处理的最大并发连接数。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">worker_connections&nbsp;1024&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;每个子进程的最大连接数为1024</span><br></code>
```

### accept\_mutex

是否打开负载均衡互斥锁。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">accept_mutex&nbsp;on&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认是off关闭的，这里推荐打开</span><br></code>
```

## server\_name 指令

指定虚拟主机域名。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server_name&nbsp;name1&nbsp;name2&nbsp;name3<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;示例：</span><br>server_name&nbsp;www.nginx.com;<br></code>
```

域名匹配的四种写法：

- 精确匹配： `server_name www.nginx.com` ;

- 左侧通配： `server_name *.nginx.com` ;

- 右侧统配： `server_name www.nginx.*` ;

- 正则匹配： `server_name ~^www\.nginx\.*$` ;

匹配优先级：**精确匹配 > 左侧通配符匹配 > 右侧通配符匹配 > 正则表达式匹配**

`server_name` 配置实例：

1、配置本地 `DNS` 解析 `vim /etc/hosts` （ `macOS` 系统）

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;添加如下内容，其中&nbsp;121.42.11.34&nbsp;是阿里云服务器IP地址</span><br>121.42.11.34&nbsp;www.nginx-test.com<br>121.42.11.34&nbsp;mail.nginx-test.com<br>121.42.11.34&nbsp;www.nginx-test.org<br>121.42.11.34&nbsp;doc.nginx-test.com<br>121.42.11.34&nbsp;www.nginx-test.cn<br>121.42.11.34&nbsp;fe.nginx-test.club<br></code>
```

\[注意\] 这里使用的是虚拟域名进行测试，因此需要配置本地 `DNS` 解析，如果使用阿里云上购买的域名，则需要在阿里云上设置好域名解析。

2、配置阿里云 `Nginx` ，`vim /etc/nginx/nginx.conf`

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;这里只列举了http端中的sever端配置</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;左匹配</span><br>server&nbsp;{<br>&nbsp;listen&nbsp;80;<br>&nbsp;server_name&nbsp;*.nginx-test.com;<br>&nbsp;root&nbsp;/usr/share/nginx/html/nginx-test/left-match/;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;}<br>}<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;正则匹配</span><br>server&nbsp;{<br>&nbsp;listen&nbsp;80;<br>&nbsp;server_name&nbsp;~^.*\.nginx-test\..*$;<br>&nbsp;root&nbsp;/usr/share/nginx/html/nginx-test/reg-match/;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;}<br>}<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;右匹配</span><br>server&nbsp;{<br>&nbsp;listen&nbsp;80;<br>&nbsp;server_name&nbsp;www.nginx-test.*;<br>&nbsp;root&nbsp;/usr/share/nginx/html/nginx-test/right-match/;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;}<br>}<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;完全匹配</span><br>server&nbsp;{<br>&nbsp;listen&nbsp;80;<br>&nbsp;server_name&nbsp;www.nginx-test.com;<br>&nbsp;root&nbsp;/usr/share/nginx/html/nginx-test/all-match/;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;}<br>}<br></code>
```

3、访问分析

- 当访问 `www.nginx-test.com` 时，都可以被匹配上，因此选择优先级最高的“完全匹配”；

- 当访问 `mail.nginx-test.com` 时，会进行“左匹配”；

- 当访问 `www.nginx-test.org` 时，会进行“右匹配”；

- 当访问 `doc.nginx-test.com` 时，会进行“左匹配”；

- 当访问 `www.nginx-test.cn` 时，会进行“右匹配”；

- 当访问 `fe.nginx-test.club` 时，会进行“正则匹配”；

## root

指定静态资源目录位置，它可以写在 `http` 、 `server` 、 `location` 等配置中。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">root&nbsp;path<br><br>例如：<br>location&nbsp;/image&nbsp;{<br>&nbsp;root&nbsp;/opt/nginx/static;<br>}<br><br>当用户访问&nbsp;www.test.com/image/1.png&nbsp;时，实际在服务器找的路径是&nbsp;/opt/nginx/static/image/1.png<br></code>
```

\[注意\] `root` 会将定义路径与 `URI` 叠加， `alias` 则只取定义路径。

## alias

它也是指定静态资源目录位置，它只能写在 `location` 中。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">location&nbsp;/image&nbsp;{<br>&nbsp;<span>alias</span>&nbsp;/opt/nginx/static/image/;<br>}<br><br>当用户访问&nbsp;www.test.com/image/1.png&nbsp;时，实际在服务器找的路径是&nbsp;/opt/nginx/static/image/1.png<br></code>
```

\[注意\] 使用 alias 末尾一定要添加 `/` ，并且它只能位于 `location` 中。

## location

配置路径。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">location&nbsp;[&nbsp;=&nbsp;|&nbsp;~&nbsp;|&nbsp;~*&nbsp;|&nbsp;^~&nbsp;]&nbsp;uri&nbsp;{<br>&nbsp;...<br>}<br></code>
```

匹配规则：

- `=` 精确匹配；

- `~` 正则匹配，区分大小写；

- `~*` 正则匹配，不区分大小写；

- `^~` 匹配到即停止搜索；

匹配优先级： `=` > `^~` > `~` > `~*` > 不带任何字符。

实例：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;www.nginx-test.com;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;只有当访问&nbsp;www.nginx-test.com/match_all/&nbsp;时才会匹配到/usr/share/nginx/html/match_all/index.html</span><br>&nbsp;&nbsp;location&nbsp;=&nbsp;/match_all/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;/usr/share/nginx/html<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;index.html<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;当访问&nbsp;www.nginx-test.com/1.jpg&nbsp;等路径时会去&nbsp;/usr/share/nginx/images/1.jpg&nbsp;找对应的资源</span><br>&nbsp;&nbsp;location&nbsp;~&nbsp;\.(jpeg|jpg|png|svg)$&nbsp;{<br>&nbsp;&nbsp;&nbsp;root&nbsp;/usr/share/nginx/images;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;当访问&nbsp;www.nginx-test.com/bbs/&nbsp;时会匹配上&nbsp;/usr/share/nginx/html/bbs/index.html</span><br>&nbsp;&nbsp;location&nbsp;^~&nbsp;/bbs/&nbsp;{<br>&nbsp;&nbsp;&nbsp;root&nbsp;/usr/share/nginx/html;<br>&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;index.html&nbsp;index.htm;<br>&nbsp;&nbsp;}<br>}<br></code>
```

### location 中的反斜线

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">location&nbsp;/<span>test</span>&nbsp;{<br>&nbsp;...<br>}<br><br>location&nbsp;/<span>test</span>/&nbsp;{<br>&nbsp;...<br>}<br></code>
```

- 不带 `/` 当访问 `www.nginx-test.com/test` 时， `Nginx` 先找是否有 `test` 目录，如果有则找 `test` 目录下的 `index.html` ；如果没有 `test` 目录， `nginx` 则会找是否有 `test` 文件。

- 带 `/` 当访问 `www.nginx-test.com/test` 时， `Nginx` 先找是否有 `test` 目录，如果有则找 `test` 目录下的 `index.html` ，如果没有它也不会去找是否存在 `test` 文件。

### return

停止处理请求，直接返回响应码或重定向到其他 `URL` ；执行 `return` 指令后， `location` 中后续指令将不会被执行。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span>return</span>&nbsp;code&nbsp;[text];<br><span>return</span>&nbsp;code&nbsp;URL;<br><span>return</span>&nbsp;URL;<br><br>例如：<br>location&nbsp;/&nbsp;{<br>&nbsp;<span>return</span>&nbsp;404;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;直接返回状态码</span><br>}<br><br>location&nbsp;/&nbsp;{<br>&nbsp;<span>return</span>&nbsp;404&nbsp;<span>"pages&nbsp;not&nbsp;found"</span>;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;返回状态码&nbsp;+&nbsp;一段文本</span><br>}<br><br>location&nbsp;/&nbsp;{<br>&nbsp;<span>return</span>&nbsp;302&nbsp;/bbs&nbsp;;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;返回状态码&nbsp;+&nbsp;重定向地址</span><br>}<br><br>location&nbsp;/&nbsp;{<br>&nbsp;<span>return</span>&nbsp;https://www.baidu.com&nbsp;;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;返回重定向地址</span><br>}<br></code>
```

## rewrite

根据指定正则表达式匹配规则，重写 `URL` 。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：rewrite 正则表达式&nbsp;要替换的内容&nbsp;[flag];<br><br>上下文：server、location、<span>if</span><br><br>示例：rewirte /images/(.*\.jpg)$&nbsp;/pic/<span>$1</span>;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;$1是前面括号(.*\.jpg)的反向引用</span><br></code>
```

`flag` 可选值的含义：

- `last` 重写后的 `URL` 发起新请求，再次进入 `server` 段，重试 `location` 的中的匹配；

- `break` 直接使用重写后的 `URL` ，不再匹配其它 `location` 中语句；

- `redirect` 返回302临时重定向；

- `permanent` 返回301永久重定向；

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;fe.lion.club;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;要在本地hosts文件进行配置</span><br>&nbsp;&nbsp;root&nbsp;html;<br>&nbsp;&nbsp;location&nbsp;/search&nbsp;{<br>&nbsp;&nbsp;&nbsp;rewrite&nbsp;^/(.*)&nbsp;https://www.baidu.com&nbsp;redirect;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/images&nbsp;{<br>&nbsp;&nbsp;&nbsp;rewrite&nbsp;/images/(.*)&nbsp;/pics/<span>$1</span>;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/pics&nbsp;{<br>&nbsp;&nbsp;&nbsp;rewrite&nbsp;/pics/(.*)&nbsp;/photos/<span>$1</span>;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/photos&nbsp;{<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;}<br>}<br></code>
```

按照这个配置我们来分析：

- 当访问 `fe.lion.club/search` 时，会自动帮我们重定向到 `https://www.baidu.com`。

- 当访问 `fe.lion.club/images/1.jpg` 时，第一步重写 `URL` 为 `fe.lion.club/pics/1.jpg` ，找到 `pics` 的 `location` ，继续重写 `URL` 为 `fe.lion.club/photos/1.jpg` ，找到 `/photos` 的 `location` 后，去 `html/photos` 目录下寻找 `1.jpg` 静态资源。

## if 指令

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：<span>if</span>&nbsp;(condition)&nbsp;{...}<br><br>上下文：server、location<br><br>示例：<br><span>if</span>(<span>$http_user_agent</span>&nbsp;~&nbsp;Chrome){<br>&nbsp;&nbsp;rewrite&nbsp;/(.*)/browser/<span>$1</span>&nbsp;<span>break</span>;<br>}<br></code>
```

`condition` 判断条件：

- `$variable` 仅为变量时，值为空或以0开头字符串都会被当做 `false` 处理；

- `=` 或 `!=` 相等或不等；

- `~` 正则匹配；

- `! ~` 非正则匹配；

- `~*` 正则匹配，不区分大小写；

- `-f` 或 `! -f` 检测文件存在或不存在；

- `-d` 或 `! -d` 检测目录存在或不存在；

- `-e` 或 `! -e` 检测文件、目录、符号链接等存在或不存在；

- `-x` 或 `! -x` 检测文件可以执行或不可执行；

实例：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;8080;<br>&nbsp;&nbsp;server_name&nbsp;localhost;<br>&nbsp;&nbsp;root&nbsp;html;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;<span>if</span>&nbsp;(&nbsp;<span>$uri</span>&nbsp;=&nbsp;<span>"/images/"</span>&nbsp;){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rewrite&nbsp;(.*)&nbsp;/pics/&nbsp;<span>break</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}<br></code>
```

当访问 `localhost:8080/images/` 时，会进入 `if` 判断里面执行 `rewrite` 命令。

## autoindex

用户请求以 `/` 结尾时，列出目录结构，可以用于快速搭建静态资源下载网站。

`autoindex.conf` 配置信息：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;fe.lion-test.club;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/download/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;/opt/<span>source</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;autoindex&nbsp;on;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;打开&nbsp;autoindex，，可选参数有&nbsp;on&nbsp;|&nbsp;off</span><br>&nbsp;&nbsp;&nbsp;&nbsp;autoindex_exact_size&nbsp;on;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;修改为off，以KB、MB、GB显示文件大小，默认为on，以bytes显示出⽂件的确切⼤⼩</span><br>&nbsp;&nbsp;&nbsp;&nbsp;autoindex_format&nbsp;html;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;以html的方式进行格式化，可选参数有&nbsp;html&nbsp;|&nbsp;json&nbsp;|&nbsp;xml</span><br>&nbsp;&nbsp;&nbsp;&nbsp;autoindex_localtime&nbsp;off;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;显示的⽂件时间为⽂件的服务器时间。默认为off，显示的⽂件时间为GMT时间</span><br>&nbsp;&nbsp;}<br>}<br></code>
```

当访问 `fe.lion.com/download/` 时，会把服务器 `/opt/source/download/` 路径下的文件展示出来，如下图所示：

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtGScQRCxyfmDPfskKicRMDGMibAnLj1WX8Vv0nS8hGaAZEfohJOIuzvTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 变量

`Nginx` 提供给使用者的变量非常多，但是终究是一个完整的请求过程所产生数据， `Nginx` 将这些数据以变量的形式提供给使用者。

下面列举些项目中常用的变量：

| 变量名               | 含义                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `remote_addr`        | 客户端 `IP` 地址                                                                                           |
| `remote_port`        | 客户端端口                                                                                                 |
| `server_addr`        | 服务端 `IP` 地址                                                                                           |
| `server_port`        | 服务端端口                                                                                                 |
| `server_protocol`    | 服务端协议                                                                                                 |
| `binary_remote_addr` | 二进制格式的客户端 `IP` 地址                                                                               |
| `connection`         | `TCP` 连接的序号，递增                                                                                     |
| `connection_request` | `TCP` 连接当前的请求数量                                                                                   |
| `uri`                | 请求的URL，不包含参数                                                                                      |
| `request_uri`        | 请求的URL，包含参数                                                                                        |
| `scheme`             | 协议名， `http` 或 `https`                                                                                 |
| `request_method`     | 请求方法                                                                                                   |
| `request_length`     | 全部请求的长度，包含请求行、请求头、请求体                                                                 |
| `args`               | 全部参数字符串                                                                                             |
| `arg_参数名`         | 获取特定参数值                                                                                             |
| `is_args`            | `URL` 中是否有参数，有的话返回 `?` ，否则返回空                                                            |
| `query_string`       | 与 `args` 相同                                                                                             |
| `host`               | 请求信息中的 `Host` ，如果请求中没有 `Host` 行，则在请求头中找，最后使用 `nginx` 中设置的 `server_name` 。 |
| `http_user_agent`    | 用户浏览器                                                                                                 |
| `http_referer`       | 从哪些链接过来的请求                                                                                       |
| `http_via`           | 每经过一层代理服务器，都会添加相应的信息                                                                   |
| `http_cookie`        | 获取用户 `cookie`                                                                                          |
| `request_time`       | 处理请求已消耗的时间                                                                                       |
| `https`              | 是否开启了 `https` ，是则返回 `on` ，否则返回空                                                            |
| `request_filename`   | 磁盘文件系统待访问文件的完整路径                                                                           |
| `document_root`      | 由 `URI` 和 `root/alias` 规则生成的文件夹路径                                                              |
| `limit_rate`         | 返回响应时的速度上限值                                                                                     |

实例演示 `var.conf` ：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server{<br>&nbsp;listen&nbsp;8081;<br>&nbsp;server_name&nbsp;var.lion-test.club;<br>&nbsp;root&nbsp;/usr/share/nginx/html;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;<span>return</span>&nbsp;200&nbsp;<span>"<br>remote_addr:&nbsp;<span>$remote_addr</span><br>remote_port:&nbsp;<span>$remote_port</span><br>server_addr:&nbsp;<span>$server_addr</span><br>server_port:&nbsp;<span>$server_port</span><br>server_protocol:&nbsp;<span>$server_protocol</span><br>binary_remote_addr:&nbsp;<span>$binary_remote_addr</span><br>connection:&nbsp;<span>$connection</span><br>uri:&nbsp;<span>$uri</span><br>request_uri:&nbsp;<span>$request_uri</span><br>scheme:&nbsp;<span>$scheme</span><br>request_method:&nbsp;<span>$request_method</span><br>request_length:&nbsp;<span>$request_length</span><br>args:&nbsp;<span>$args</span><br>arg_pid:&nbsp;<span>$arg_pid</span><br>is_args:&nbsp;<span>$is_args</span><br>query_string:&nbsp;<span>$query_string</span><br>host:&nbsp;<span>$host</span><br>http_user_agent:&nbsp;<span>$http_user_agent</span><br>http_referer:&nbsp;<span>$http_referer</span><br>http_via:&nbsp;<span>$http_via</span><br>request_time:&nbsp;<span>$request_time</span><br>https:&nbsp;<span>$https</span><br>request_filename:&nbsp;<span>$request_filename</span><br>document_root:&nbsp;<span>$document_root</span><br>"</span>;<br>&nbsp;}<br>}<br></code>
```

当我们访问 `http://var.lion-test.club:8081/test?pid=121414&cid=sadasd` 时，由于 `Nginx` 中写了 `return` 方法，因此 `chrome` 浏览器会默认为我们下载一个文件，下面展示的就是下载的文件内容：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">remote_addr:&nbsp;27.16.220.84<br>remote_port:&nbsp;56838<br>server_addr:&nbsp;172.17.0.2<br>server_port:&nbsp;8081<br>server_protocol:&nbsp;HTTP/1.1<br>binary_remote_addr:&nbsp;茉<br>connection:&nbsp;126<br>uri:&nbsp;/<span>test</span>/<br>request_uri:&nbsp;/<span>test</span>/?pid=121414&amp;cid=sadasd<br>scheme:&nbsp;http<br>request_method:&nbsp;GET<br>request_length:&nbsp;518<br>args:&nbsp;pid=121414&amp;cid=sadasd<br>arg_pid:&nbsp;121414<br>is_args:&nbsp;?<br>query_string:&nbsp;pid=121414&amp;cid=sadasd<br>host:&nbsp;var.lion-test.club<br>http_user_agent:&nbsp;Mozilla/5.0&nbsp;(Macintosh;&nbsp;Intel&nbsp;Mac&nbsp;OS&nbsp;X&nbsp;10_14_0)&nbsp;AppleWebKit/537.36&nbsp;(KHTML,&nbsp;like&nbsp;Gecko)&nbsp;Chrome/88.0.4324.182&nbsp;Safari/537.36<br>http_referer:&nbsp;<br>http_via:&nbsp;<br>request_time:&nbsp;0.000<br>https:&nbsp;<br>request_filename:&nbsp;/usr/share/nginx/html/<span>test</span>/<br>document_root:&nbsp;/usr/share/nginx/html<br></code>
```

`Nginx` 的配置还有非常多，以上只是罗列了一些常用的配置，在实际项目中还是要学会查阅文档。

## Nginx 应用核心概念

代理是在服务器和客户端之间假设的一层服务器，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。

不管是正向代理还是反向代理，实现的都是上面的功能。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtguRkXWwLy0FsAVibBv3qiaJhmu1Dh28ibEZ1BxVXn4icUJJU7PvzibQx5Yg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 正向代理

> 正向代理，意思是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。

正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。

正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。

## 反向代理

> - 反向代理\*（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。
>

反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。

反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。

反向代理的优势：

- 隐藏真实服务器；

- 负载均衡便于横向扩充后端动态服务；

- 动静分离，提升系统健壮性；

那么“动静分离”是什么？负载均衡又是什么？

## 动静分离

动静分离是指在 `web` 服务器架构中，将静态页面与动态页面或者静态内容接口和动态内容接口分开不同系统访问的架构设计方法，进而提示整个服务的访问性和可维护性。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtxdyM0vuy9aNSw1dp7ic3PxiajokELb0U4picENsJ0cQoUOwIXDMZibMoTg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

一般来说，都需要将动态资源和静态资源分开，由于 `Nginx` 的高并发和静态资源缓存等特性，经常将静态资源部署在 `Nginx` 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。

使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。

## 负载均衡

一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。

这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。

很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。

请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是负载均衡，核心是「分摊压力」。 `Nginx` 实现负载均衡，一般来说指的是将请求转发给服务器集群。

举个具体的例子，晚高峰乘坐地铁的时候，入站口经常会有地铁工作人员大喇叭“请走 `B` 口， `B` 口人少车空....”，这个工作人员的作用就是负载均衡。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZt4hPMc4FRgLth4Yn0Q8F8tj0v2xaKCQrPfJVpWEn5W4Aq3JaT8M059A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

`Nginx` 实现负载均衡的策略：

- 轮询策略：默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。

- 最小连接数策略：将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求。

- 最快响应时间策略：优先分配给响应时间最短的服务器。

- 客户端 `ip` 绑定策略：来自同一个 `ip` 的请求永远只分配一台服务器，有效解决了动态网页存在的 `session` 共享问题。

## Nginx 实战配置

在配置反向代理和负载均衡等等功能之前，有两个核心模块是我们必须要掌握的，这两个模块应该说是 `Nginx` 应用配置中的核心，它们分别是： `upstream` 、`proxy_pass` 。

## upstream

用于定义上游服务器（指的就是后台提供的应用服务器）的相关信息。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtPq4RNcsFc6icp4alOBg28vOho4W8VCUUeJGrxuSktIYD7MeNbZTQ6eA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：upstream name {<br>&nbsp;...<br>}<br><br>上下文：http<br><br>示例：<br>upstream&nbsp;back_end_server{<br>&nbsp;&nbsp;server&nbsp;192.168.100.33:8081<br>}<br></code>
```

在 `upstream` 内可使用的指令：

- `server` 定义上游服务器地址；

- `zone` 定义共享内存，用于跨 `worker` 子进程；

- `keepalive` 对上游服务启用长连接；

- `keepalive_requests` 一个长连接最多请求 `HTTP` 的个数；

- `keepalive_timeout` 空闲情形下，一个长连接的超时时长；

- `hash` 哈希负载均衡算法；

- `ip_hash` 依据 `IP` 进行哈希计算的负载均衡算法；

- `least_conn` 最少连接数负载均衡算法；

- `least_time` 最短响应时间负载均衡算法；

- `random` 随机负载均衡算法；

### server

定义上游服务器地址。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：server address [parameters]<br><br>上下文：upstream<br></code>
```

`parameters` 可选值：

- `weight=number` 权重值，默认为1；

- `max_conns=number` 上游服务器的最大并发连接数；

- `fail_timeout=time` 服务器不可用的判定时间；

- `max_fails=numer` 服务器不可用的检查次数；

- `backup` 备份服务器，仅当其他服务器都不可用时才会启用；

- `down` 标记服务器长期不可用，离线维护；

### keepalive

限制每个 `worker` 子进程与上游服务器空闲长连接的最大数量。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">keepalive&nbsp;connections;<br><br>上下文：upstream<br><br>示例：keepalive 16;<br></code>
```

### keepalive\_requests

单个长连接可以处理的最多 `HTTP` 请求个数。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：keepalive_requests number;<br><br>默认值：keepalive_requests 100;<br><br>上下文：upstream<br></code>
```

### keepalive\_timeout

空闲长连接的最长保持时间。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：keepalive_timeout time;<br><br>默认值：keepalive_timeout 60s;<br><br>上下文：upstream<br></code>
```

### 配置实例

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">upstream&nbsp;back_end{<br>&nbsp;server&nbsp;127.0.0.1:8081&nbsp;weight=3&nbsp;max_conns=1000&nbsp;fail_timeout=10s&nbsp;max_fails=2;<br>&nbsp;&nbsp;keepalive&nbsp;32;<br>&nbsp;&nbsp;keepalive_requests&nbsp;50;<br>&nbsp;&nbsp;keepalive_timeout&nbsp;30s;<br>}<br></code>
```

## proxy\_pass

用于配置代理服务器。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_pass URL;<br><br>上下文：location、<span>if</span>、limit_except<br><br>示例：<br>proxy_pass&nbsp;http://127.0.0.1:8081<br>proxy_pass&nbsp;http://127.0.0.1:8081/proxy<br></code>
```

`URL` 参数原则

1. `URL` 必须以 `http` 或 `https` 开头；

2. `URL` 中可以携带变量；

3. `URL` 中是否带 `URI` ，会直接影响发往上游请求的 `URL` ；

接下来让我们来看看两种常见的 `URL` 用法：

1. `proxy_pass http://192.168.100.33:8081`

2. `proxy_pass http://192.168.100.33:8081/`

这两种用法的区别就是带 `/` 和不带 `/` ，在配置代理时它们的区别可大了：

- 不带 `/` 意味着 `Nginx` 不会修改用户 `URL` ，而是直接透传给上游的应用服务器；

- 带 `/` 意味着 `Nginx` 会修改用户 `URL` ，修改方法是将 `location` 后的 `URL` 从用户 `URL` 中删除；

不带 `/` 的用法：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">location&nbsp;/bbs/{<br>&nbsp;&nbsp;proxy_pass&nbsp;http://127.0.0.1:8080;<br>}<br></code>
```

分析：

1. 用户请求 `URL` ： `/bbs/abc/test.html`

2. 请求到达 `Nginx` 的 `URL` ： `/bbs/abc/test.html`

3. 请求到达上游应用服务器的 `URL` ： `/bbs/abc/test.html`

带 `/` 的用法：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">location&nbsp;/bbs/{<br>&nbsp;&nbsp;proxy_pass&nbsp;http://127.0.0.1:8080/;<br>}<br></code>
```

分析：

1. 用户请求 `URL` ： `/bbs/abc/test.html`

2. 请求到达 `Nginx` 的 `URL` ： `/bbs/abc/test.html`

3. 请求到达上游应用服务器的 `URL` ： `/abc/test.html`

并没有拼接上 `/bbs` ，这点和 `root` 与 `alias` 之间的区别是保持一致的。

## 配置反向代理

这里为了演示更加接近实际，作者准备了两台云服务器，它们的公网 `IP` 分别是： `121.42.11.34` 与 `121.5.180.193` 。

我们把 `121.42.11.34` 服务器作为上游服务器，做如下配置：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;/etc/nginx/conf.d/proxy.conf</span><br>server{<br>&nbsp;&nbsp;listen&nbsp;8080;<br>&nbsp;&nbsp;server_name&nbsp;localhost;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/proxy/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;/usr/share/nginx/html/proxy;<br>&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;&nbsp;}<br>}<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;/usr/share/nginx/html/proxy/index.html</span><br>&lt;h1&gt;&nbsp;121.42.11.34&nbsp;proxy&nbsp;html&nbsp;&lt;/h1&gt;<br></code>
```

配置完成后重启 `Nginx` 服务器 `nginx \-s reload` 。

把 `121.5.180.193` 服务器作为代理服务器，做如下配置：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;/etc/nginx/conf.d/proxy.conf</span><br>upstream&nbsp;back_end&nbsp;{<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8080&nbsp;weight=2&nbsp;max_conns=1000&nbsp;fail_timeout=10s&nbsp;max_fails=3;<br>&nbsp;&nbsp;keepalive&nbsp;32;<br>&nbsp;&nbsp;keepalive_requests&nbsp;80;<br>&nbsp;&nbsp;keepalive_timeout&nbsp;20s;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;proxy.lion.club;<br>&nbsp;&nbsp;location&nbsp;/proxy&nbsp;{<br>&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://back_end/proxy;<br>&nbsp;&nbsp;}<br>}<br></code>
```

本地机器要访问 `proxy.lion.club` 域名，因此需要配置本地 `hosts` ，通过命令：`vim /etc/hosts` 进入配置文件，添加如下内容：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">121.5.180.193&nbsp;proxy.lion.club<br></code>
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZt7ZagQyO1XZk6iclBoicY5v7OhGGrqfmCEswrNtAgyKpl6GhOefU6wo1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

分析：

1. 当访问 `proxy.lion.club/proxy` 时通过 `upstream` 的配置找到 `121.42.11.34:8080` ；

2. 因此访问地址变为 `http://121.42.11.34:8080/proxy` ；

3. 连接到 `121.42.11.34` 服务器，找到 `8080` 端口提供的 `server` ；

4. 通过 `server` 找到 `/usr/share/nginx/html/proxy/index.html` 资源，最终展示出来。

## 配置负载均衡

配置负载均衡主要是要使用 `upstream` 指令。

我们把 `121.42.11.34` 服务器作为上游服务器，做如下配置（ `/etc/nginx/conf.d/balance.conf` ）：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server{<br>&nbsp;&nbsp;listen&nbsp;8020;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;<span>return</span>&nbsp;200&nbsp;<span>'return&nbsp;8020&nbsp;\n'</span>;<br>&nbsp;&nbsp;}<br>}<br><br>server{<br>&nbsp;&nbsp;listen&nbsp;8030;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;<span>return</span>&nbsp;200&nbsp;<span>'return&nbsp;8030&nbsp;\n'</span>;<br>&nbsp;&nbsp;}<br>}<br><br>server{<br>&nbsp;&nbsp;listen&nbsp;8040;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;<span>return</span>&nbsp;200&nbsp;<span>'return&nbsp;8040&nbsp;\n'</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

配置完成后：

1. `nginx -t` 检测配置是否正确；

2. `nginx -s reload` 重启 `Nginx` 服务器；

3. 执行 `ss -nlt` 命令查看端口是否被占用，从而判断 `Nginx` 服务是否正确启动。

把 `121.5.180.193` 服务器作为代理服务器，做如下配置（ `/etc/nginx/conf.d/balance.conf` ）：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">upstream&nbsp;demo_server&nbsp;{<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8020;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8030;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8040;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;balance.lion.club;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/balance/&nbsp;{<br>&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://demo_server;<br>&nbsp;&nbsp;}<br>}<br></code>
```

配置完成后重启 `Nginx` 服务器。并且在需要访问的客户端配置好 `ip` 和域名的映射关系。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;/etc/hosts</span><br><br>121.5.180.193&nbsp;balance.lion.club<br></code>
```

在客户端机器执行 `curl http://balance.lion.club/balance/` 命令：

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtJcN9Ghfnox2UsXQohHk2LOichwufTKWRBoU0F4ibAI5AKfXjeLXSLDXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

不难看出，负载均衡的配置已经生效了，每次给我们分发的上游服务器都不一样。就是通过简单的轮询策略进行上游服务器分发。

接下来，我们再来了解下 `Nginx` 的其它分发策略。

### hash 算法

通过制定关键字作为 `hash key` ，基于 `hash` 算法映射到特定的上游服务器中。关键字可以包含有变量、字符串。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">upstream&nbsp;demo_server&nbsp;{<br>&nbsp;&nbsp;<span>hash</span>&nbsp;<span>$request_uri</span>;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8020;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8030;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8040;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;balance.lion.club;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/balance/&nbsp;{<br>&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://demo_server;<br>&nbsp;&nbsp;}<br>}<br></code>
```

`hash $request_uri` 表示使用 `request_uri` 变量作为 `hash` 的 `key` 值，只要访问的 `URI` 保持不变，就会一直分发给同一台服务器。

### ip\_hash

根据客户端的请求 `ip` 进行判断，只要 `ip` 地址不变就永远分配到同一台主机。它可以有效解决后台服务器 `session` 保持的问题。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">upstream&nbsp;demo_server&nbsp;{<br>&nbsp;&nbsp;ip_hash;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8020;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8030;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8040;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;balance.lion.club;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/balance/&nbsp;{<br>&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://demo_server;<br>&nbsp;&nbsp;}<br>}<br></code>
```

### 最少连接数算法

各个 `worker` 子进程通过读取共享内存的数据，来获取后端服务器的信息。来挑选一台当前已建立连接数最少的服务器进行分配请求。

```
语法：least_conn;<br><br>上下文：upstream;<br>
```

示例：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">upstream&nbsp;demo_server&nbsp;{<br>&nbsp;&nbsp;zone&nbsp;<span>test</span>&nbsp;10M;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;zone可以设置共享内存空间的名字和大小</span><br>&nbsp;&nbsp;least_conn;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8020;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8030;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:8040;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;balance.lion.club;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/balance/&nbsp;{<br>&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://demo_server;<br>&nbsp;&nbsp;}<br>}<br></code>
```

最后你会发现，负载均衡的配置其实一点都不复杂。

## 配置缓存

缓存可以非常有效的提升性能，因此不论是客户端（浏览器），还是代理服务器（ `Nginx` ），乃至上游服务器都多少会涉及到缓存。可见缓存在每个环节都是非常重要的。下面让我们来学习 `Nginx` 中如何设置缓存策略。

### proxy\_cache

存储一些之前被访问过、而且可能将要被再次访问的资源，使用户可以直接从代理服务器获得，从而减少上游服务器的压力，加快整个访问速度。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_cache zone | off ;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;zone&nbsp;是共享内存的名称</span><br><br>默认值：proxy_cache off;<br><br>上下文：http、server、location<br></code>
```

### proxy\_cache\_path

设置缓存文件的存放路径。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_cache_path path [level=levels] ...可选参数省略，下面会详细列举<br><br>默认值：proxy_cache_path off<br><br>上下文：http<br></code>
```

参数含义：

- `path` 缓存文件的存放路径；

- `level path` 的目录层级；

- `keys_zone` 设置共享内存；

- `inactive` 在指定时间内没有被访问，缓存会被清理，默认10分钟；

### proxy\_cache\_key

设置缓存文件的 `key` 。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_cache_key<br><br>默认值：proxy_cache_key <span>$scheme</span><span>$proxy_host</span><span>$request_uri</span>;<br><br>上下文：http、server、location<br></code>
```

### proxy\_cache\_valid

配置什么状态码可以被缓存，以及缓存时长。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_cache_valid [code...] time;<br><br>上下文：http、server、location<br><br>配置示例：proxy_cache_valid 200 304 2m;;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;说明对于状态为200和304的缓存文件的缓存时间是2分钟</span><br></code>
```

### proxy\_no\_cache

定义相应保存到缓存的条件，如果字符串参数的至少一个值不为空且不等于“ 0”，则将不保存该响应到缓存。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_no_cache string;<br><br>上下文：http、server、location<br><br>示例：proxy_no_cache <span>$http_pragma</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>$http_authorization</span>;<br></code>
```

### proxy\_cache\_bypass

定义条件，在该条件下将不会从缓存中获取响应。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">语法：proxy_cache_bypass string;<br><br>上下文：http、server、location<br><br>示例：proxy_cache_bypass <span>$http_pragma</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>$http_authorization</span>;<br></code>
```

### upstream\_cache\_status 变量

它存储了缓存是否命中的信息，会设置在响应头信息中，在调试中非常有用。

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">MISS:&nbsp;未命中缓存<br>HIT：&nbsp;命中缓存<br>EXPIRED:&nbsp;缓存过期<br>STALE:&nbsp;命中了陈旧缓存<br>REVALIDDATED:&nbsp;Nginx验证陈旧缓存依然有效<br>UPDATING:&nbsp;内容陈旧，但正在更新<br>BYPASS:&nbsp;X响应从原始服务器获取<br></code>
```

### 配置实例

我们把 `121.42.11.34` 服务器作为上游服务器，做如下配置（ `/etc/nginx/conf.d/cache.conf` ）：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;1010;<br>&nbsp;&nbsp;root&nbsp;/usr/share/nginx/html/1010;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;&nbsp;}<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;1020;<br>&nbsp;&nbsp;root&nbsp;/usr/share/nginx/html/1020;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;index&nbsp;index.html;<br>&nbsp;&nbsp;}<br>}<br></code>
```

把 `121.5.180.193` 服务器作为代理服务器，做如下配置（ `/etc/nginx/conf.d/cache.conf` ）：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">proxy_cache_path&nbsp;/etc/nginx/cache_temp&nbsp;levels=2:2&nbsp;keys_zone=cache_zone:30m&nbsp;max_size=2g&nbsp;inactive=60m&nbsp;use_temp_path=off;<br><br>upstream&nbsp;cache_server{<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:1010;<br>&nbsp;&nbsp;server&nbsp;121.42.11.34:1020;<br>}<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;cache.lion.club;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache&nbsp;cache_zone;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;设置缓存内存，上面配置中已经定义好的</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache_valid&nbsp;200&nbsp;5m;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;缓存状态为200的请求，缓存时长为5分钟</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache_key&nbsp;<span>$request_uri</span>;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;缓存文件的key为请求的URI</span><br>&nbsp;&nbsp;&nbsp;&nbsp;add_header&nbsp;Nginx-Cache-Status&nbsp;<span>$upstream_cache_status</span>&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;把缓存状态设置为头部信息，响应给客户端</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://cache_server;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;代理转发</span><br>&nbsp;&nbsp;}<br>}<br></code>
```

缓存就是这样配置，我们可以在 `/etc/nginx/cache_temp` 路径下找到相应的缓存文件。

**对于一些实时性要求非常高的页面或数据来说，就不应该去设置缓存，下面来看看如何配置不缓存的内容。**

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">...<br><br>server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;80;<br>&nbsp;&nbsp;server_name&nbsp;cache.lion.club;<br>&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;URI&nbsp;中后缀为&nbsp;.txt&nbsp;或&nbsp;.text&nbsp;的设置变量值为&nbsp;"no&nbsp;cache"</span><br>&nbsp;&nbsp;<span>if</span>&nbsp;(<span>$request_uri</span>&nbsp;~&nbsp;\.(txt|text)$)&nbsp;{<br>&nbsp;&nbsp;&nbsp;<span>set</span>&nbsp;<span>$cache_name</span>&nbsp;<span>"no&nbsp;cache"</span><br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_no_cache&nbsp;<span>$cache_name</span>;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;判断该变量是否有值，如果有值则不进行缓存，如果没有值则进行缓存</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache&nbsp;cache_zone;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;设置缓存内存</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache_valid&nbsp;200&nbsp;5m;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;缓存状态为200的请求，缓存时长为5分钟</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_cache_key&nbsp;<span>$request_uri</span>;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;缓存文件的key为请求的URI</span><br>&nbsp;&nbsp;&nbsp;&nbsp;add_header&nbsp;Nginx-Cache-Status&nbsp;<span>$upstream_cache_status</span>&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;把缓存状态设置为头部信息，响应给客户端</span><br>&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass&nbsp;http://cache_server;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;代理转发</span><br>&nbsp;&nbsp;}<br>}<br></code>
```

## HTTPS

在学习如何配置 `HTTPS` 之前，我们先来简单回顾下 `HTTPS` 的工作流程是怎么样的？它是如何进行加密保证安全的？

### HTTPS 工作流程

1. 客户端（浏览器）访问 `https://www.baidu.com` 百度网站；

2. 百度服务器返回 `HTTPS` 使用的 `CA` 证书；

3. 浏览器验证 `CA` 证书是否为合法证书；

4. 验证通过，证书合法，生成一串随机数并使用公钥（证书中提供的）进行加密；

5. 发送公钥加密后的随机数给百度服务器；

6. 百度服务器拿到密文，通过私钥进行解密，获取到随机数（公钥加密，私钥解密，反之也可以）；

7. 百度服务器把要发送给浏览器的内容，使用随机数进行加密后传输给浏览器；

8. 此时浏览器可以使用随机数进行解密，获取到服务器的真实传输内容；

这就是 `HTTPS` 的基本运作原理，使用对称加密和非对称机密配合使用，保证传输内容的安全性。

关于HTTPS更多知识，可以查看作者的另外一篇文章《学习 HTTP 协议》。

### 配置证书

下载证书的压缩文件，里面有个 `Nginx` 文件夹，把 `xxx.crt` 和 `xxx.key` 文件拷贝到服务器目录，再进行如下配置：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;&nbsp;listen&nbsp;443&nbsp;ssl&nbsp;http2&nbsp;default_server;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;SSL&nbsp;访问端口号为&nbsp;443</span><br>&nbsp;&nbsp;server_name&nbsp;lion.club;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;填写绑定证书的域名(我这里是随便写的)</span><br>&nbsp;&nbsp;ssl_certificate&nbsp;/etc/nginx/https/lion.club_bundle.crt;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;证书地址</span><br>&nbsp;&nbsp;ssl_certificate_key&nbsp;/etc/nginx/https/lion.club.key;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;私钥地址</span><br>&nbsp;&nbsp;ssl_session_timeout&nbsp;10m;<br>&nbsp;&nbsp;ssl_protocols&nbsp;TLSv1&nbsp;TLSv1.1&nbsp;TLSv1.2;&nbsp;<span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;支持ssl协议版本，默认为后三个，主流版本是[TLSv1.2]</span><br>&nbsp;<br>&nbsp;&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/usr/share/nginx/html;<br>&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html&nbsp;index.htm;<br>&nbsp;&nbsp;}<br>}<br></code>
```

如此配置后就能正常访问 `HTTPS` 版的网站了。

## 配置跨域 CORS

先简单回顾下跨域究竟是怎么回事。

### 跨域的定义

同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。通常不允许不同源间的读操作。

### 同源的定义

如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。

下面给出了与 URL `http://store.company.com/dir/page.html` 的源进行对比的示例:

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">http://store.company.com/dir2/other.html&nbsp;同源<br>https://store.company.com/secure.html&nbsp;不同源，协议不同<br>http://store.company.com:81/dir/etc.html&nbsp;不同源，端口不同<br>http://news.company.com/dir/other.html&nbsp;不同源，主机不同<br></code>
```

不同源会有如下限制：

- `Web` 数据层面，同源策略限制了不同源的站点读取当前站点的 `Cookie` 、 `IndexDB` 、 `LocalStorage` 等数据。

- `DOM` 层面，同源策略限制了来自不同源的 `JavaScript` 脚本对当前 `DOM` 对象读和写的操作。

- 网络层面，同源策略限制了通过 `XMLHttpRequest` 等方式将站点的数据发送给不同源的站点。

### Nginx 解决跨域的原理

例如：

- 前端 `server` 的域名为： `fe.server.com`

- 后端服务的域名为： `dev.server.com`

现在我在 `fe.server.com` 对 `dev.server.com` 发起请求一定会出现跨域。

现在我们只需要启动一个 `Nginx` 服务器，将 `server_name` 设置为 `fe.server.com` 然后设置相应的 `location` 以拦截前端需要跨域的请求，最后将请求代理回 `dev.server.com` 。如下面的配置：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;">server&nbsp;{<br>&nbsp;listen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80;<br>&nbsp;server_name&nbsp;&nbsp;fe.server.com;<br>&nbsp;location&nbsp;/&nbsp;{<br>&nbsp;&nbsp;proxy_pass&nbsp;dev.server.com;<br>&nbsp;}<br>}<br></code>
```

这样可以完美绕过浏览器的同源策略： `fe.server.com` 访问 `Nginx` 的 `fe.server.com` 属于同源访问，而 `Nginx` 对服务端转发的请求不会触发浏览器的同源策略。

## 配置开启 gzip 压缩

`GZIP` 是规定的三种标准 `HTTP` 压缩格式之一。目前绝大多数的网站都在使用 `GZIP` 传输 `HTML` 、`CSS` 、 `JavaScript` 等资源文件。

对于文本文件， `GZiP` 的效果非常明显，开启后传输所需流量大约会降至 `1/4~1/3` 。

并不是每个浏览器都支持 `gzip` 的，如何知道客户端是否支持 `gzip` 呢，请求头中的 `Accept-Encoding` 来标识对压缩的支持。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtQ9PJYOamEYj5iaicj56RYTkgZIy3f99kB6wRibzA6jaqPGPbiceKG1QsCA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
启用 `gzip` 同时需要客户端和服务端的支持，如果客户端支持 `gzip` 的解析，那么只要服务端能够返回 `gzip` 的文件就可以启用 `gzip` 了,我们可以通过 `Nginx` 的配置来让服务端支持 `gzip` 。下面的 `respone` 中 `content-encoding:gzip` ，指服务端开启了 `gzip` 的压缩方式。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtywHU7es5DM2kDNfU3jChbCnVr3RNYZlv5ekHgbGE5JvffWlPuMseibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
在 `/etc/nginx/conf.d/` 文件夹中新建配置文件 `gzip.conf` ：

```
<span data-style="margin-bottom: -7px; max-width: 100%; display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtcboUCtpUyv3uP42DIR2KuSIibYD75QRxJvFkm5RvTJv0GBPcIgnSvzA/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 657px; border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span><code data-hint_scrollable="true" data-style="padding: 15px 16px 16px; max-width: 100%; overflow-x: auto; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;#&nbsp;默认off，是否开启gzip</span><br>gzip&nbsp;on;&nbsp;<br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；</span><br>gzip_types&nbsp;text/plain&nbsp;text/css&nbsp;application/json&nbsp;application/x-javascript&nbsp;text/xml&nbsp;application/xml&nbsp;application/xml+rss&nbsp;text/javascript;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;----&nbsp;以上两个参数开启就可以支持Gzip压缩了&nbsp;----&nbsp;#</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；</span><br>gzip_static&nbsp;on;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认 off，nginx做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；</span><br>gzip_proxied&nbsp;any;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；</span><br>gzip_vary&nbsp;on;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;"># gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；</span><br>gzip_comp_level&nbsp;6;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；</span><br>gzip_buffers&nbsp;16&nbsp;8k;<br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是&nbsp;0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；</span><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;gzip_min_length&nbsp;1k;</span><br><br><span data-style="max-width: 100%; color: rgb(92, 99, 112); font-style: italic; line-height: 26px; box-sizing: border-box !important; overflow-wrap: break-word !important;">#&nbsp;默认 1.1，启用 gzip 所需的 HTTP 最低版本；</span><br>gzip_http_version&nbsp;1.1;<br></code>
```

其实也可以通过前端构建工具例如 `webpack` 、`rollup` 等在打生产包时就做好 `Gzip` 压缩，然后放到 `Nginx` 服务器中，这样可以减少服务器的开销，加快访问速度。

关于 `Nginx` 的实际应用就学习到这里，相信通过掌握了 `Nginx` 核心配置以及实战配置，之后再遇到什么需求，我们也能轻松应对。接下来，让我们再深入一点学习下 `Nginx` 的架构。

## Nginx 架构

## 进程结构

多进程结构 `Nginx` 的进程模型图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtjISwuYtV601flgG5sgMTvqKOM6hf0jbzwvgrB7iafwlBkVSvmPp6lVw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

多进程中的 `Nginx` 进程架构如下图所示，会有一个父进程（ `Master Process` ），它会有很多子进程（ `Child Processes` ）。

- `Master Process` 用来管理子进程的，其本身并不真正处理用户请求。

- 某个子进程 `down` 掉的话，它会向 `Master` 进程发送一条消息，表明自己不可用了，此时 `Master` 进程会去新起一个子进程。

- 某个配置文件被修改了 `Master` 进程会去通知 `work` 进程获取新的配置信息，这也就是我们所说的热部署。

- 子进程间是通过共享内存的方式进行通信的。

## 配置文件重载原理

`reload` 重载配置文件的流程：

1. 向 `master` 进程发送 `HUP` 信号（ `reload` 命令）；

2. `master` 进程检查配置语法是否正确；

3. `master` 进程打开监听端口；

4. `master` 进程使用新的配置文件启动新的 `worker` 子进程；

5. `master` 进程向老的 `worker` 子进程发送 `QUIT` 信号；

6. 老的 `worker` 进程关闭监听句柄，处理完当前连接后关闭进程；

7. 整个过程 `Nginx` 始终处于平稳运行中，实现了平滑升级，用户无感知；

## Nginx 模块化管理机制

`Nginx` 的内部结构是由核心部分和一系列的功能模块所组成。这样划分是为了使得每个模块的功能相对简单，便于开发，同时也便于对系统进行功能扩展。`Nginx` 的模块是互相独立的,低耦合高内聚。

![图片](https://mmbiz.qpic.cn/mmbiz_png/zPh0erYjkib1CxxiaXXtjSM4U1Y0r7AeZtxkGzdXVSdAyy7KoYhFC2IoyfNaLNH87X6e5bEAXicC7xaqwfYbicsvVQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
