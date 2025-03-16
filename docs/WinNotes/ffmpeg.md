# Windows 软件之 FFmpeg

## 前言

> FFmpeg 是一套可以用来记录、转换数字音频、视频，并能将其转化为流的开源计算机程序。

## 1 FFmpeg 视频处理

> 为方便测试，我们首先使用 **winget install MediaArea.MediaInfo** 命令安装一下 mediainfo 命令（可以方便地查看视频信息），然后创建 mediainfo.ps1 文件，并输入附录1中的内容。
>
> 这里我以周董**稻香** mv 视频为例。视频信息如下：![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/D6ibuQlPKYQPFgCdMDoL9aJA2cApI5aHXEfKnCYrPTW4JLm0Ew0NpgLTpaZHfqGdTGmf3hPibQeJmcJUibDRH8wVA/640)

### 1.1 编解码

> 可通过转换分辨率、视频编码转换为 H265 等方式来压缩视频大小。

- 1）转换编码（压缩）

    ```
    <span></span><code>ffmpeg&nbsp;-hwaccel&nbsp;cuda&nbsp;-i&nbsp;.\周杰伦-稻香.mp4&nbsp;-vf&nbsp;scale=720:480&nbsp;-c:v&nbsp;libx265&nbsp;-crf&nbsp;18&nbsp;.\周杰伦-稻香C.mp4<br><br>&nbsp;&nbsp;&nbsp;&nbsp;-hwaccel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选择&nbsp;cpu&nbsp;或&nbsp;gpu&nbsp;加速<br>&nbsp;&nbsp;&nbsp;&nbsp;-i&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入的视频文件<br>&nbsp;&nbsp;&nbsp;&nbsp;-vf&nbsp;scale&nbsp;&nbsp;&nbsp;&nbsp;视频分辨率（宽x高）<br>&nbsp;&nbsp;&nbsp;&nbsp;-c:v&nbsp;libx265&nbsp;选择视频编码为&nbsp;H265<br>&nbsp;&nbsp;&nbsp;&nbsp;-crf&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Constant&nbsp;Rate&nbsp;Factor,&nbsp;0~51，默认&nbsp;28，20&nbsp;以下时视觉上无损<br></code>
    ```

- 2）转换结果：大小减少 20.8%。![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/D6ibuQlPKYQPFgCdMDoL9aJA2cApI5aHX5viaE6NV8NskDgUIjEhaDfiarEv9mXRLqh0MLrqYktMNYD0K6wkYI3vw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 当然，原视频分辨率为 720x480，也可以指定为 2560×1440 的 2K 分辨率，不过视频大小就会大大增加了。

- 参考：https://zhuanlan.zhihu.com/p/582654225

### 1.2 其它视频编辑命令

```
<span></span><code># （1）调整视频的分辨率<br>ffmpeg -i input.mp4 -vf scale=640:360 output.mp4<br># （2）调整视频的码率<br>ffmpeg -i input.mp4 -b:v 512k output.mp4<br># （3）使用更高效的视频编码格式<br>ffmpeg -i input.mp4 -c:v libx265 -crf 28 output.mp4<br># （4）截取前 10 秒视频<br>ffmpeg -i input.mp4 -ss 00:00:00 -to 00:00:10 -c copy output.mp4<br><br># （5）视频合并（fps、分辨率不同的视频合并会出现问题）<br># 5.1 创建文件 1.txt 后输入以下内容（有多少视频就输入多少行）：<br>file '视频名'<br># 5.2 命令行执行以下命令进行合并<br>ffmpeg.exe -f concat -safe 0 -i .\1.txt -c copy -y '1.mp4'<br><br># （6）将图片设置为视频封面<br>ffmpeg -i input_video.mp4 -i input_image.png \<br>    -map 0 -map 1 \<br>    -c copy -c:v:1 png \<br>    -disposition:v:1 attached_pic \<br>    output_video.mp4<br></code>
```

- 参考：

- https://blog.csdn.net/xindoo/article/details/130186891

- https://www.zhihu.com/question/323211391

### 1.3 视频抽帧

```
<span></span><code><span>#&nbsp;（1）抽取视频关键帧（IPB）</span><br>ffmpeg&nbsp;-i&nbsp;video.mp4&nbsp;-vf&nbsp;select=<span>"eq(pict_type\,PICT_TYPE_I)"</span>&nbsp;-vsync&nbsp;2&nbsp;-s&nbsp;320x240&nbsp;thumb-%02d.png<br><br><span>#&nbsp;（2）抽取视频场景转换帧</span><br>ffmpeg&nbsp;-i&nbsp;video.mp4&nbsp;-f&nbsp;image2&nbsp;-vf&nbsp;<span>"select=gt(scene\,.4)"</span>&nbsp;-vsync&nbsp;vfr&nbsp;%03d.png<br><br><span>#&nbsp;（3）均匀抽帧：-r&nbsp;指定抽取的帧率，即从视频中每秒钟抽取图片的数量。1代表每秒抽取一帧。</span><br>ffmpeg&nbsp;-i&nbsp;video.mp4&nbsp;-r&nbsp;1&nbsp;-q:v&nbsp;2&nbsp;-f&nbsp;image2&nbsp;./%08d.000000.jpg<br><br><span>#&nbsp;（4）抽取指定时间帧</span><br>ffmpeg&nbsp;-ss&nbsp;00:00:30&nbsp;-i&nbsp;video.mp4&nbsp;-vframes&nbsp;1&nbsp;0.jpg&nbsp;&nbsp;&nbsp;<span>#&nbsp;耗时短（使用关键帧进行索引）</span><br>ffmpeg&nbsp;-i&nbsp;video.mp4&nbsp;-ss&nbsp;00:00:30&nbsp;-vframes&nbsp;1&nbsp;0.jpg&nbsp;&nbsp;&nbsp;<span>#&nbsp;耗时长</span><br><br><span>#&nbsp;（5）抽帧制作缩略图</span><br>ffmpeg&nbsp;-i&nbsp;video.mp4&nbsp;-vf&nbsp;<span>'fps=1/95:round=zero,scale=480x360,tile=8x6'</span>&nbsp;M%03d.jpg<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>#&nbsp;-vf&nbsp;表示指定过滤器。多个过滤器用&nbsp;','&nbsp;隔开；一个过滤器的多个参数使用&nbsp;':'&nbsp;分开</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span>#&nbsp;fps=1/95&nbsp;表示&nbsp;95&nbsp;秒输出一张图</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span>#&nbsp;round=zero&nbsp;表示时间戳向&nbsp;0&nbsp;取整</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span>#&nbsp;scale=480x360&nbsp;表示图片分辨率大小</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span>#&nbsp;tile=5x5&nbsp;表示将截图使用&nbsp;8x6&nbsp;组合起来</span><br></code>
```

> 制作缩略图：**ffmpeg -i .\\周杰伦-稻香C.mp4 -vf 'fps=1/11:round=zero,scale=720x480,tile=5x4' M%03d.jpg**![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/D6ibuQlPKYQPFgCdMDoL9aJA2cApI5aHXTefKLJZvcARXB8M0pq7XIS0icHJjY6UpQMdHoDicwkk3IL90addHky5w/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 也可以使用 PotPlayer 来创建缩略图：\_右键\_ -> _视频_ -> _图像截取_ -> _创建缩略图_![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/D6ibuQlPKYQPFgCdMDoL9aJA2cApI5aHXeLrW0SdFBDAfvz3t56zlgWQ9Micff95eUBvOZ5ibG0v1peXlj8Va0ygw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 参考：

- FFmpeg视频抽帧那些事：https://zhuanlan.zhihu.com/p/85895180

- FFmpeg 制作视频预览缩略图：https://zhuanlan.zhihu.com/p/570453447

- https://www.coder.work/article/3458321

## 2 FFmpeg 音频处理

```
<span></span><code># 1 提取音频 mp3<br>ffmpeg.exe -i .\周杰伦-稻香.mp4 -vn -c:a libmp3lame -q:a 1 .\周杰伦-稻香.mp3<br><br># 2 音频格式由 mp3 转换为 ogg<br>ffmpeg.exe -i .\周杰伦-稻香.mp3 .\周杰伦-稻香.ogg<br></code>
```

> 批量转换批处理见： audio-converter.bat: https://gitee.com/luyaocf/dev\_ops\_scripts.git 官方说明：https://ffmpeg.org/ffmpeg.html#Audio-Options

## 3 FFmpeg 图片处理

### 3.1 编解码

- 1）批量转换编码

```
<span></span><code># ffmpeg -i in.jpg -vf scale=width:height out.png<br><br>set a=!cd!<br>for /f "delims=" %%i in ('dir /b /s "%a%\*png*"') do (<br>    echo %%~nxi   %%~ni_c.png<br>    ffmpeg -i %%~nxi -vf scale=iw/2:ih/2 %%~ni_c.png<br>)<br></code>
```

### 3.2 拼接图片

```
<span></span><code>ffmpeg -i 1.jpg -i 2.jpg -filter_complex vstack out.jpg<br></code>
```

- 参考：https://juejin.cn/post/7229636745578627130

### 3.3 图片合成视频

```
<span></span><code>ffmpeg -r 1 -f image2 -i '(%d).jpg' -c:v libx265 -vf scale=-1:1280 -crf 17 -y o.mp4<br></code>
```

- **\-r 调整帧率**：默认 25 帧，即每秒拼接 25 张图片。

- **\-b:v 4M 调整视频码率**：码率指每秒播放的数据量（bit）。如果图片比较大，则生成的视频较大；改变码率会影响到视频清晰度；h265 编码可以用更小的码率生成 h264 同等的视频质量。

- **\-crf 调整视频质量**：用来平衡视频质量和文件大小的参数。取值范围 0~51，默认 23，建议 17~28。

- **\-c:v libx265 调整视频的编码格式**：默认 h264。可以使用 h265 生成更小的。

- 可以使用 **\-c:v libvpx 或 -c:v libvpx-vp9** 生成 v8 和 v9 编码的 webm 文件（默认低质量）

- **\-vf scale=宽x高 调整视频分辨率**：将宽或高设置为 -1 可以将其等比例缩放。

- 参考：https://blog.csdn.net/xindoo/article/details/121451318

## 附录1：mediainfo.ps1

```
<span></span><code>&lt;##<br> # 通过 ffmpeg 查看视频信息<br> #&gt;<br><br># Clear-Variable 删除变量的值。<br># Compare-object 比较两组对象。<br># ForEach-Object 对输入对象集合中的每个项目执行操作。<br># Get-childItem 在一个或多个指定位置获取项目和子项目。<br># Invoke-commands 在本地和远程计算机上执行命令。<br># Set-variable 设置变量的值。<br># Start-Job 启动 Windows PowerShell 的后台作业。<br><br># [Math] | Get-Member -Static   获取 Math 类中的静态方法<br><br>&lt;##<br> # 安装 mediainfo 命令：<br> #  winget search mediainfo<br> #  winget install MediaArea.MediaInfo<br> #&gt;<br><br># $arg        表示命令行参数集合<br>foreach($arg in $args) {<br>    # Write-Host $arg<br><br>    $param = "<br>General;                                        \n<br>Complete name   : '%CompleteName%'              \n<br>File size       : %FileSize/String4%            <br>"<br>    $param = $param -replace '\r?\n?'<br>    mediainfo --Inform=$param "$arg"<br><br>    $param = "<br>Video;<br>Codec ID        : %CodecID%                     \n<br>Codec ID/Info   : %CodecID/Info%                \n<br>Aspect ratio    : %DisplayAspectRatio/String%   \n<br>Width           : %Width%                       \n<br>Height          : %Height%                      \n<br>Frame rate      : %FrameRate%                   \n<br>Duration        : %Duration%        \n<br>Duration        : %Duration/String1%;           \n<br>"<br>    $param = $param -replace '\r?\n?'<br>    mediainfo --Inform=$param "$arg"<br><br>    $duration = mediainfo --Inform="Video;%Duration%"   "$arg"<br>    $frame_rt = mediainfo --Inform="Video;%FrameRate%"  "$arg"<br><br>    $frame = [Math]::Floor($duration / 1000 * $frame_rt)<br>    Write-Host "Frame           : $frame"<br>}<br></code>
```
