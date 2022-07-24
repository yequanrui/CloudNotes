postman是一款支持http协议的接口调试与测试工具，其主要特点就是功能强大，使用简单且易用性好 。

无论是开发人员进行接口调试，还是测试人员做接口测试，postman都是我们的首选工具之一 。

那么接下来就介绍下postman到底有哪些功能，它们分别都能干些什么 。下面先通过一张图来直观的来看下postman中所包含的功能 。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FljLG8vcmXEoBc5Zy02HzOk50Vz3YsGq2cCLuBhKhPwfWsWaicjL2oSbQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图片

当然，以上功能也只是展示了postman的一部分功能，为了能更加全面的体现这款工具的特点，我将从以下三个维度来加以说明。它们分别是：

-   基础功能


-   常见类型的接口请求

-   接口响应数据的解析

-   接口管理(Collection)

-   批量执行接口请求

-   日志调试

-   断言

-   变量

-   请求前置脚本

-   接口关联

-   常见的返回值获取


-   便捷功能快


-   速填写查询参数

-   快速填写请求头信息

-   快速实现添加一个请求

-   如何继承集合认证

-   批量断言

-   快速查询和替换


-   高级功能


-   读取文件进行参数化

-   生成测试报告

-   代码中发送请求

-   编写接口文档

-   mock服务

-   监控

-   使用工作空间

-   代码同步与分支管理

-   连接数据库

-   apis


## 一. postman安装说明

postman 在 2018 年之后就不再支持浏览器版本，所以，想要使用它就必须先下载客户端再安装使用，下面就以 Windows 系统为例进行安装 。

#### 1\. 下载与安装

postman安装步骤：

1\. 访问postman官方网站，下载最新版本

访问地址：https://www.getpostman.com/

2\. 进入到下载页面，根据自己电脑下载对应的版本

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Flo5FzPWSpwW8L1UozoTf4MJtPadpMEQtSiaqLECarT9ZeUBIGhFJiceBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

3\. 双击下载的安装包，进入到安装界面，直到用户登录和注册界面。

若个人使用，选择跳过即可，这时会进入到postman主界面，至此postman安装成功(下图)。

若团队使用，可以进行注册，注册后使用账号可以加入团队工作区

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

#### 2.界面导航说明

初次使用postman的朋友可能对界面上的一些元素不太熟悉，下面就通过一张图来说明这些元素的含义 。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

#### 3.发送第一个请求

如果你是第一次使用postman发送请求，下面这个例子可以作为一个最基本的入门，可以帮我们建立一个初始印象 。

1\. 打开postman，点击+加号打开一个新的请求页。

2\. 在请求的URL中输入请求地址：

http://www.weather.com.cn/data/sk/101010100.html

3\. 点击Send按钮，这时就可以在下部的窗格中看到来自服务器的json响应数据。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

## **二.postman基础功能**

#### 1.常见类型的接口请求

常见的接口有如下四种类型，分别是含有查询参数的接口，表单类型的接口，json类型的接口以及含有上传文件的接口，以下就对这四种类型接口及如何在postman中请求进行说明 。

##### 1.1 .查询参数的接口请求

**什么是查询参数?**

所谓的查询参数，其实就是URL地址中问号（?）后面的部分就叫查询参数，比如：http://cx.shouji.360.cn/phonearea.php?number=13012345678 。在这个接口中，查询参数就是:number=13012345678 。

而这一部分是由有键值对组成，格式为：key1=value1&key2=value2, 如果有多组键值对，要用&隔开 。

**postman如何请求**

在postman中实现对这类接口请求非常简单，一般就需要明确俩个参数即可，一个是请求方法，一个请求地址。

针对上面的那个接口，地址已经给出 ，而它的请求方法是get 。那么在postman中只需要把这俩个参数填写上即可请求 。

**具体实现步骤：**

1\. 打开postman，新建一个请求。

2\. 在请求方法中选择请求方法：GET,因为在postman中默认的请求方法就是GET,所以这一步可以忽略

3\. 接口URL中输入地址，点击Send按钮就可以发送请求了 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FlibV1Mf2OLgxcuwUTHdrISFm1cjYqyITROnbniafQUveJEqwmAiaBmV1ag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

说明：查询参数的URL一般直接拷贝到输入的URL地址栏中就可以了，当然也可以把查询参数在Params中输入，俩者的效果是一样的 。

##### 1.2 表单类型的接口请求

**什么是表单 ？**

我们都知道，在发送HTTP请求的时候，一个请求中一般包含三个部分，分别是请求行，请求头，请求体 。

不同的接口，请求体的数据类型是不一样的，比较常见的一种就是表单类型，那么什么是表单类型呢 ？简单理解就是在请求头中查看Content-Type，它的值如果是:application/x-www-form-urlencoded .那么就说明客户端提交的数据是以表单形式提交的 。见下图：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

**postman中如何请求？**

如果在postman请求上图的接口，我们只需要填写四个参数，分别是(可以参考上图)：

-   请求方法：POST

-   请求URL：http://localhost/index.php?m=Home&c=User&a=do_login&t=0.21942974229794432

-   请求头：Content-Type：application/x-www-form-urlencode

-   请求体：username=13088888888&password=123456&verify_code=8888


实现步骤：

1.  打开postman，新建一个请求 。

2.  在请求中设置以上四个参数，点击Send按钮。在postman中设置请求体类型为，需要选择body-> x-www-form-urlencoded

3.  查看响应数据。


![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

##### 1.3 上传文件的表单请求

在做接口测试时，我们经常会遇到需要上传文件的接口，比如微信的更新头像。这就需要用到：multipart/form-data。它也属于一种表单，但它既支持表单请求，也支持文件上传。它的请求报文中数据往往是下面这样的。

```
POST http://localhost/index.php/home/Uploadify/imageUp/savepath/head_pic/pictitle/banner/dir/images.html HTTP/1.1  Content-Type: multipart/form-data    file=a1.jpg
```

这种类型的接口，在postman中该如何请求呢 ？我们先分析需要填写的参数 。

-   请求方法：POST

-   请求URL：http://localhost/index.php/home/Uploadify/imageUp/savepath/head_pic/pictitle/banner/dir/images.html

-   请求类型：multipart/form-data

-   请求体：file=a1.jpg


实现步骤：

1.  打开postman，新建一个请求 。

2.  在请求中设置以上四个参数，点击Send按钮。注意：在postman中设置请求体类型，需要选择body-> form-data 。file中要选择File类型，然后上传本地的文件 。

3.  查看响应数据。


![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

##### 1.4 json类型的接口请求

这应该是接口测试中最常见的一种情况了 ， 也就是请求体类型为json,我们来看下这个请求报文 。

```
POST http://xxx/api/sys/login HTTP/1.1  Content-Type: application/json;charset=UTF-8    {"account":"root","password":"123456"}
```

根据以上报文，我们可以分析出，我们在postman只需要填写四个参数即可，具体如下：

-   请求方法：POST

-   请求地址：http://xxx/api/sys/login

-   请求体类型：json

-   请求体数据：{"account":"root","password":"123456"}


实现步骤：

1.  打开postman，新建一个请求 。

2.  在请求中设置以上四个参数，点击Send按钮。注意：在postman中设置请求体类型，需要选择body-> raw -JSON

3.  查看响应数据。


![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

#### 2.接口响应数据解析

响应数据是发送请求后经过服务器处理后返回的结果，响应由三部分组成，分别是状态行、响应头、响应体。我们来看下postman的响应数据展示。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

在postman中的响应数据展示：

-   状态行：Status：200 OK

-   响应头：Headers + Cookies，需要注意的是Cookies是包含在响应头中的，但是为了明显，工具会分开显示

-   响应体：Body


那么这些数据对我们做接口测试有什么作用呢 ？

-   Body和Status是我们做接口测试的重点，一般来说我们都会验证响应体中的数据和响应状态码

-   Test Results 是我们编写断言后，可以查看断言的执行结果 ，所以这个对我们也很有用 。

-   Time 和Size 是我们做性能测试时，可以根据这两个参数来对所测接口的性能做一个简单的判断。


接下来我们再来关注下Body中的几个显示主题，分别是：Pretty，Raw，Preview .

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Fldya46bWMCiaZEocvuLUKS4kpZ4bJia8AYe4OiaaDWgoGbxoCbbibDkVyUw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

Pretty:翻译成中文就是漂亮 ， 也就是说返回的Body数据在这个标签中查看 ，都是经过格式化的，格式化后的数据看起来更加直观，所以postman默认展示的也是这个选项。比如返回html页面，它会经过格式化成HTML格式后展示，比如返回json，那么也会格式化成json格式展示 。

Raw：翻译成中文未经过加工的，也就是原始数据 ，原始数据一般都是本文格式的，未经过格式化处理的，一般在抓包工具中都有这个选项 。

Preview：翻译成中文就是预览，这个选项一般对返回HTML的页面效果特别明显，如请求百度后返回结果，点击这个选项后就直接能查看到的页面 ，如下图 。同时这个选项和浏览器抓包中的Preview也是一样的 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Fl6BGgoTRORufMic6V8c2YEm5mzDauicgTdr3megI5lNc6zO7JYpqaUzBw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

#### 3\. 接口管理（Collection）

当我们对一个或多个系统中的很多用例进行维护时，首先想到的就是对用例进行分类管理，同时还希望对这批用例做回归测试 。在postman也提供了这样一个功能，就是Collection 。通过这个Collection就可以满足我们的上面说的需求。

先对Collection功能的使用场景做个简单总结 。

-   用例分类管理，方便后期维护

-   可以进行批量用例回归测试 。


那么Collection是如何去管理用例的呢 ？先想象我们要测试一个系统，系统下有多个模块，每个模块下有很多的被测接口用例 。那么基于这个场景，我们来通过Collection来进行实现：

1\. 点击Collection，点击+New Collection，在弹出的输入框中输入Collection名称（这个就可以理解为所测试的系统）

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

2\. 选中新建的Collection右键，点击Add Folder ，在弹出对话框中输入文件夹名称（这个就可以理解为系统中的模块）

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

3\. 选中新建的Folder，点击Add Request ，在弹出的对话框中输入请求名称，这个就是我们所测试的接口，也可以理解为测试用例 。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

那么通过以上三个步骤，达到的效果就是如图所示：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

总结，通过上面的操作，我们实现了一个最简单的demo模型。但实际上，有了这个功能才是postman学习的开始，因为很多功能都是基础这个功能的基础上进行的，比如用例的批量执行，Mock ，接口文档等功能 。

#### 4\. 批量执行接口请求

当我们在一个Collection中编写了很多的接口测试用例，想一起执行这批用例，在postman中是如何操作呢 ？

实现步骤：

1\. 选中一个Collection，点击右三角，在弹出的界面点击RUN

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

2\. 这是会弹出一个叫Collection Runner的界面，默认会把Collection中的所有用例选中 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FlUVXVIrJF4HXOibun27kmsUSYS5PrNqqjLOQZpbwdFDv32o33Rjcibc2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

3\. 点击界面下方的RUN Collection，就会对Collection中选中的所有测试用例运行 。

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Fl6b4kwTE3lypBbt8AZOzHicYWnkWjbeK2tdDGAgvUo68Zwr3NzfGjCrg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

对上面的几个红框内的功能进行简单说明：

-   断言统计：左上角的两个0是统计当前Collection中断言成功的执行数和失败的执行数，如果没有编写断言默认都为0 。

-   Run Summary: 运行结果总览，点击它可以看到每个请求中具体的测试断言详细信息 。Export Result：导出运行结果，默认导出的结果json文件 。

-   Retry: 重新运行，点击它会把该Collection重新运行一遍

-   New：返回到Runner，可以重新选择用例的组合 。


总体来说，这个功能主要是用于对一个Collection中的所有用例或部分用例进行批量运行，已达到手工回归测试的目的。

#### 5.日志调试

在做接口测试时，经常会因为代码写的有问题导致报错，这时通过查看日志就显得非常重要了，postman也提供了这样的功能，它允许我们在脚本中编写打印语句，查看打印的结果 ; 同时也可以查看每个请求的日志信息 。

在postman中编写日志打印语句使用的是JavaScript，编写的位置可以是Pre-request Script 或Tests标签中。编写打印语句如：console.log("我是一条日志")

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

那么打印的日如何看呢 ？在postman中有俩个入口，第一个入口就是：view-show postman console 。

第二个入口就是左下角第三个图标 。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

打开的日志界面：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

这里面有几个比较实用的功能：

-   搜索日志：输入URL或者打印的日志就能直接搜索出我们想要的请求和日志，这对我们在众多日志中查找某一条日志是非常方便的 。

-   按级别搜索：可以查询log,info,warning,error级别的日志 ，有助于我们更快定位到错误 。

-   查看原始报文(Show raw log)：如果习惯看原始请求报文的话，这个功能可能更方便些 。

-   隐藏请求(Hide network)：把请求都隐藏掉，只查看输出日志 。


总之，通过这个功能，我们在请求接口报错时，通过打印响应的日志，就能很轻松的找到问题原因了 。

#### 6.断言

如果没有断言，我们只能做接口的功能测试，但有了断言后，就为我们做自动化提供了条件，并且在postman中的断言是非常方便和强大的 。

我们先来了解下postman断言的一些特点 ，具体如下

-   断言编写位置：Tests标签

-   断言所用语言：JavaScript

-   断言执行顺序：在响应体数据返回后执行 。

-   断言执行结果查看：Test Results


在上面我们介绍到，编写的断言代码是JavaScript，那如果不会写怎么办 ？不用担心，因为postman已经给我们内置了一些常用的断言 。用的时候，只需从右侧点击其中一个断言，就会在文本框中自动生成对应断言代码块 。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

接下来就让我们了解一些常用断言，还是按响应的组成来划分，分别是状态行，响应头，响应体。

状态行中又包括状态码，状态消息 。在postman也可以对这两个进行断言

状态行中的断言：

-   断言状态码：Status code: code is 200


```
pm.test("Status code is 200", function () {      pm.response.to.have.status(200); //这里填写的200是预期结果，实际结果是请求返回结果  });
```

-   断言状态消息：Status code：code name has string


```
pm.test("Status code name has string", function () {      pm.response.to.have.status("OK"); //断言响应状态消息包含OK  });
```

响应头中的断言

-   断言响应头中包含：Response headers:Content-Type header check


```
pm.test("Content-Type is present", function () {      pm.response.to.have.header("Content-Type"); //断言响应头存在"Content-Type"  });
```

断言响应体(重点)

-   断言响应体中包含XXX字符串：Response body:Contains string


```
pm.test("Body matches string", function () {      pm.expect(pm.response.text()).to.include("string_you_want_to_search");  });  //注解  pm.expect(pm.response.text()).to.include("string") 获取响应文本中包含string
```

-   断言响应体等于XXX字符串：Response body : is equal to a string


```
pm.test("Body is correct", function () {      pm.response.to.have.body("response_body_string");  });  //注解  pm.response.to.have.body("response_body_string"); 获取响应体等于response_body_string
```

-   断言响应体(json)中某个键名对应的值：Response body : JSON value check


```
pm.test("Your test name", function () {      var jsonData = pm.response.json();      pm.expect(jsonData.value).to.eql(100);  });  //注解  var jsonData = pm.response.json() 获取响应体，以json显示，赋值给jsonData .注意：该响应体必须返会是的json，否则会报错  pm.expect(jsonData.value).to.eql(100) 获取jsonData中键名为value的值，然后和100进行比较
```

响应时间(一般用于性能测试)

-   断言响应时间：Response time is less than 200ms


```
pm.test("Response time is less than 200ms", function () {      pm.expect(pm.response.responseTime).to.be.below(200); //断言响应时间<200ms  });
```

案例说明：

针对以下接口返回的数据进行断言：

```
{      "cityid": "101120101",      "city": "济南",      "update_time": "2020-04-17 10:50",      "wea": "晴",      "wea_img": "qing",      "tem": "16",      "tem_day": "20",      "tem_night": "9",      "win": "东北风",      "win_speed": "3级",      "win_meter": "小于12km/h",      "air": "113"  }
```

-   断言响应状态码为200

-   断言city等于济南

-   断言update_time包含2020-04-17


![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

总结，整体来说，如果用postman做接口测试，这个断言功能必不可少，其中我们常断言的响应体包含和JSON这俩个断言又是重重之重。

#### 7\. 变量（全局/集合/环境）

变量可以使我们在请求或脚本中存储和重复使用其值，通过将值保存在变量中，可以在集合，环境或请求中引用。

对我们做接口测试来说，又是一个非常重要的功能 。

在postman常用的三种变量分别是全局变量，环境变量，集合变量 。

-   全局变量：一旦申明了全局变量，全局有效，也就是说postman中的任何集合，任何请求中都可以使用这个变量。它的作用域是最大的 。

-   环境变量：要申明环境变量，首先的创建环境，然后在环境中才能创建变量 。如果要想使用环境变量，必须先选择(导入)这个环境，这样就可以使用这个环境下的变量了 。需要说明的是环境也可以创建多个 。每个环境下又可以有多个变量 。

-   集合变量：集合变量是针对集合的，也就是说申明的变量必须基于某个集合，它的使用范围也只是针对这个集合有效 。


其中，他们的作用域范围依次从大到小：全局变量>集合变量>环境变量 。当在几个不同的范围内都申明了相同的变量时，则会优先使用范围最小的变量使。

想要使用变量中的值只需俩个步骤，分别是定义变量和获取变量 。

1.  定义变量（设置变量）

2.  获取变量（访问变量）


**定义变量**

定义全局变量和环境变量，点击右上角的小齿轮，弹出如下界面，就可以根据需求定义全局变量或者环境变量了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Flx1HD6IJ11YoKCQav7eHoAic0qf8hbI1dbMB1nCxWSRmuP3deruv1how/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

已经定义的全局变量和环境变量，可以进行快速查看：

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FlTnuA0aOnQzo0wHQb0iaXEHfpQkod92E9zMOfVw0MZUNtibH8KZZqWJsA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

**定义集合变量**

选择一个集合，打开查看更多动作(...)菜单，然后点击编辑 。选择“变量”选项卡以编辑或添加到集合变量。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

定义变量除了以上方式，还有另外一种方式 。但是这种方式在不同的位置定义，编写不一样。

在URL，Params , Authorization , Headers , Body中定义：

1\. 手工方式创建一个空的变量名

2\. 在以上的位置把想要的值选中右击，选中Set：环境|全局 ，选中一个变量名，点击后就会保存到这个变量中

![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FlYNjEy0GI4H1UNMMqdsydqb0OfIFqqFGDE85TxVrIQxuxOYD9ic2INIw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

在Tests，Pre-requests Script：

-   定义全局变量：pm.collectionVariables.set("变量名",变量值)

-   定义环境变量：pm.environment.set("变量名"，变量值)

-   定义集合变量：pm.variables.set("变量名",变量值)


**获取变量**

定义好变量，接下来就可以使用变量了 。需要注意的是，在不同的位置获取变量，编写的规则也是不一样的 。

如果在请求参数中获取变量，无论是获取全局变量，还是环境变量，还是集合变量，获取的方式都是一样的编写规则：{{变量名}} 。

-   请求参数指的是：URL，Params , Authorization , Headers , Body


如果是在编写代码的位置(Tests,Pre-requests Script)获取变量，获取不同类型的变量，编写的代码都不相同，具体如下：

-   获取环境变量：pm.environment.get(‘变量名’)

-   获取全局变量：pm.globals.get('变量名')

-   获取集合变量：pm.pm.collectionVariables.get.get('变量名')


![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

图片

变量的使用场景非常广泛，比如我们后面要提到的接口关联，请求前置脚本都会使用到变量 。

#### 8\. 请求前置脚本

前置脚本其实就是在Pre-requests Script中编写的JavaScript脚本，想要了解这个功能，需要先了解它的执行顺序。那么下面就来看下它的执行顺序 。

可以看出，一个请求在发送之前，会先去执行Pre Request Script（前置脚本）中的代码 。那么这个功能在实际工作中有什么作用呢 ？

主要场景：一般情况下，在发送请求前需要对接口的数据做进一步处理，就都可以使用这个功能，比如说，登录接口的密码，在发送前需要做加密处理，那么就可以在前置脚本中做加密处理，再比如说，有的接口的输入参数有一些随机数，每请求一次接口参数值都会发送变化，就可以在前置脚本中编写生成随机数的代码 。

总体来说，就是在请求接口之前对我们的请求数据进行进一步加工处理的都可以使用前置脚本这个功能。

接下来通过一个案例来看下该功能是如何使用 ？

案例：

-   请求的登录接口URL，参数t的值要求的规则是每次请求都必须是一个随机数。

-   接口地址：http://localhost/index.php？m=Home&c=User&a=do_login&t=0.7102045930338428


![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8Fl90JA0Trd0rMBeq5HJcrlZBC4WfoqRIBqic1Gsib5GJLc32DUvTBTUg3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

实现步骤：

1.  在前置脚本中编写生成随机数

2.  将这个值保存成环境变量

3.  将参数t的值替换成环境变量的值 。


![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FliaWAtcJKFaOia5VfHSPk7ZBNhVDq1IQ7GGoR7DR43D4v77hdLlTxibp6g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

总之，这个前置脚本对我们做接口测试也非常有用，对一些复杂的场景，都可以使用前置脚本进行处理后再请求接口 。

#### 9\. 接口关联

在我们测试的接口中，经常出现这种情况 。上一个接口的返回数据是下一个接口的输入参数 ，那么这俩个接口就产生了关联。这种关联在做接口测试时非常常见，那么在postman中，如何实现这种关联关系呢 ？

实现思路：

1.  提取上一个接口的返回数据值，

2.  将这个数据值保存到环境变量或全局变量中

3.  在下一个接口获取环境变量或全局变量


案例：

-   用户上传头像功能，需要用户先上传一张图片，然后会自动预览 。那么在这个过程中，会调用到俩个接口 ，第一个上传头像接口，第二个预览图像接口 。

-   其中调用上传头像接口成功后会返回如下信息：


```
{      "url": "/public/upload/user//head_pic//ba51d1c2f7f7b98dfb5cad90846e2d79.jpg",      "title": "banner",      "original": "",      "state": "SUCCESS",      "path": "images"  }
```

而图像预览接口URL为：

http://localhost/public/upload/user//head_pic//ba51d1c2f7f7b98dfb5cad90846e2d79.jpg 。可以看出这个接口的URL后半部分其实是上一个接口返回的url的值 。那么这俩个接口就产生了关联。那么在postman 可以通过以下三步完成这俩个接口的关联实现 。

实现步骤：

1.  获取上传头像接口返回url的值

2.  将这个值保存成全局变量(环境变量也可以)

3.  在图像预览中使用全局变量


![图片](https://mmbiz.qpic.cn/mmbiz_png/RQueXibgo0KO86E3YaibgVlWrpeia0uc8FlehOIJJubLWOiczR2Zzib3y1iac2I1R3fxmGPU8O6orVSbjj0gdSPD1p2Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图片

可以看出，接口的关联的解决方案都是用的是变量中的知识，也就是说只要你明确了要提取的值，后面就是保存该值，然后在其他接口使用该值就可以了。

#### 10.常见返回值获取

在做接口测试时，请求接口返回的数据都是很复杂的json数据，有着多层嵌套，这样的数据层级在postman怎么获取呢 ？

案例1：多层json嵌套, 获取user_id的值

```
{      "code": 0,      "message": "请求成功！",      "data": {          "user_id": "1252163151781167104"      }  }
```

```
//获取json体数据  var jsonData = pm.response.json()  // 获取user_id的值,通过.获取  var user_id = jsonData.data.user_id
```

案例2：json中存在列表，获取points中的第二个元素

```
{      "code": 0,      "message": "请求成功！",      "data": {          "roles": {              "api": [                  "API-USER-DELETE"              ],              "points": [                  "point-user-delete",                  "POINT-USER-UPDATE",                  "POINT-USER-ADD"              ]          },          "authCache": null      }  }
```

```
//获取json体数据  var jsonData = pm.response.json()  // 获取user_id的值,通过下标获取列表中某个元素  var user_id = jsonData.data.roles.points[1]
```

案例3：列表中取最后一个元素

```
{      "code": 0,      "message": "请求成功！",      "data": {          "total": 24,          "rows": [                           {                  "id": "1066370498633486336",                  "mobile": "15812340003",                  "username": "zbz"              },              {                  "id": "1071632760222810112",                  "mobile": "16612094236",                  "username": "llx"              },              ...              {                  "id": "1075383133106425856",                  "mobile": "13523679872",                  "username": "test001",                       },
```

```
//获取json体数据  var jsonData = pm.response.json()  // 获取id的值,通过slice(-1)获取列表中最后一个元素。  var id = jsonData.data.rows.slice(-1)[0]
```
