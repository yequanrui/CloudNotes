## 一、VSCode快捷键

> ❝
> 
> Mac相比较于Window的一大优势就在于，它有着丰富的快捷键操作，仅仅依靠键盘（而不用分出手去动触控板/鼠标）就能完成很多操作，从而带来办公效率的提升。同样，对于VSCode，善用好快捷键，可以实现：**「减少鼠标操作 = 节省时间 = 不会消耗耐心 = 提高效率」**
> 
> ❞

### 1.文本编辑

```
shift + command + k          #删除当前行：command + backspace          #删除光标前所有字符command + option + up/down   #光标同时选中多行shift + left/right/up/down   #选中字符option + 左/右键              #移动到单词最左/右侧command + up/down            #跳转到顶部、底部option + 上/下键           #将当前代码移动到上/下一行shift + option +up/down   #复制当前行到上方/下方
```

```
command + k，然后再按下 command + J # 展开所有代码行command + k，然后再按下 command + 0 # 折叠所有代码行alt + z                   #自动换行shift + option + F        #格式化所有代码command + K command + F   #格式化选中代码
```

### 2.视图管理

```
command + shift + n #新建窗口command + 1/2/3     #选中不同的拆分栏command + b         #打开、关闭侧边栏ctrl + ~            #打开关闭控制台
```

### 3.文件相关

```
command + n          # 新建文件command + shift + f  # 全局查找command + p          # 快速打开最近打开的文件ctrl + r             # 快速打开最近打开的文件夹/项目
```

### 4.设置相关

```
command + ,    # 打开设置面板
```

**「如何打开setting.json文件」**

`command + p`，然后输入一个`>`前缀，然后再输入`setting.json`（或者其它设置中的选项均可），即可显示出对应的选项

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZldf6xvVogEfYVSIvkAm5NtjVSKTj8URvb8aZaFaPUdlKuS2n6BFTkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909185758758

顺带扩展一下，`command + p`之后输入一个`?`，可以显示出支持的所有操作

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZMr1ACibZgdic2fjh8yHmic3ibM1j5WqacBaTmmtf3PNRvy8Pyl8gBtBBzg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
  
  
  

## 二、自动格式化&修复

### 1\. formatter自动格式化

在`settings.json`（工作区的或用户的皆可）中添加

```
{  "editor.formatOnSave": true,}
```

通过设置保存时自动格式化之后，搭配上「Prettier 插件」或者「VSCode默认的语言功能」，就能够实现保存时自动根据对应的规则进行代码格式的修复。但是仅靠当前的设置， **「ESLint/StyleLint 的规则还无法在保存时自动进行修复」**！

  

### 2\. Lintter自动修复

不知道你是否遇到过这样的场景：

在代码中先后import了不同的对象，然后在对象下面就多了一条黄线，鼠标放上去就显示

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZOhObviaCrRYX13UjYUticKnfPOxNgAW1icNGaqIz4CpSU3wN6Tkxud7Wg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909225039096

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZax9bK8XLXlb3KibNEyuL9PAFB5DFhmDibxvZEClg1UZBIka0rfK6PJeQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909224932950

然后你点击【快速修复】，这一行代码黄线是消失了，但你往下一看，还有一条黄线

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZ0B6Mho4iaqFVGJFicJvv36FMDF27SrbGKm2XjE53WunTC3wPriaSHmWWw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909225150827

于是你又需要精准地把光标移动到黄线上面，等待1秒，出现提示框，然后点击【快速修复】

如果只是一两个，问题还不大。但现实往往是一个文件中经常会从外部引入大量的对象。然后你不管，看着黄线难受；管吧，又浪费了大量时间做这个工作！

但实际上，通过一条VSCode配置，就可以实现一键修复所有的lint规则错误！

要让各种Lintter在保存时能够自动进行修复，需要在`settings.json`中找到`editor.codeActionsOnSave`这个配置项进行配置

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZCicMy9Sk5NYp2CGNWJEJpOfNYewEYG5NnXnbYnffYnTRINzj8aV9HgQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909220115669

```
{  "editor.codeActionsOnSave": {    "source.fixAll.stylelint": true,    "source.fixAll.eslint": true  }}
```

  

### 3\. 不同类型文件使用不同规则

**「默认格式化程序」**，可以选择VSCode自带的语言功能，或者如Prettier这样的格式化工具

首先是格式化工具的配置，这个可以编辑器，【右键】-【使用...格式化文档】-【配置默认格式化程序】进行设置

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZFrm0ictVc74YCt0ibJXyLNuvmWfvo685RJSLTJBq4ibYu9WKTXB5ocmDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909220608959

设置后同样会保存在`settings.json`文件中。

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZTbzbFNjgK0yNxUOOh8Z1hTibQiaIPDA68bozRyzaZKJVO0lB7YIU2bkg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909220712388

**「对于各种Lintter工具」**，则需要到各自的配置文件中进行配置，例如：

```
{  "overrides": [        {            "files": [                "**/*.vue"            ],            "customSyntax": "postcss-html"        },        {            "files": [                "**/*.less"            ],            "customSyntax": "postcss-less"        }    ],}
```

  
  

## 三、自定义snippets

参考文章：一个案例学会 VSCode Snippets，极大提高开发效率 - 知乎 (zhihu.com)

在VSCode输入一些常用的函数名时，有时可以看到会弹出一些选项，然后选中就可以快速填充代码。效率很高。

但是这些都是VSCode默认的填充内容，如果我们想要自己定制一些可填充的代码段可以吗？答案是可以的！接下来先来看两个使用案例：

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZHrmJospN4DFGW9xAWQqwlFzAVJQhKicImCntjdVMYYiccezIGriboLYTg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909225839479

### 使用示例

**「使用案例一」**

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZNP2QuaEWBuchCqmY5ialmiaQAEzwkVsHw5D0sISlg6JDT1k9iaGhLqYew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418214508333

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZk9hibdx3tRkUuKp00sLKdeS1fcsY4fgCIzJDeS71ZwPtTjPJrtNMOlg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418214529751

如图，新建`vue`文件后，输入一个`vue`，弹出选项，选中然后自动填充预置的代码。

**「使用案例二」**

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZC1ehlVTIS6icJADz3DzIt3cNWYH5cK6g2LgD4pMG37qdWsbhKcGsJicg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418220702193

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZyJ6icciaYVMk4Mgcr9qpIWYLpOE9ia7XibFzNIIn7vRCVgleHCjibxZ7Fjw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418220731106

在`vue`的SFC中的标签内部，输入`try`，弹出选项，选中自动填充预置的代码段。

### 配置方法

打开VSCode - 【文件】 - 【首选项】 - 【配置用户代码片段】

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZoTkhvXL0jTrGMIbSpAKBx8q0viacBFSVZfofoiaZ3UbzDulhuT65138g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418210318723

然后，它会弹出一个窗口，让你选择配置的文件，配置范围有多种：global、project、language。（**「language的使用范围有限，比如vue.json设置的，无法在vue的SFC的scipt标签内部使用」**）

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZAHdLYXYOILuhISlyxpNLjo3ZWfpHKpkaTJTwcQXfSA5SuoV86nIhzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418211656926

接着，VSCode生成了一个`vue.json`文件，还给出了使用 **「介绍」** 和 **「Example」**，（相信看了这么通俗易懂的介绍，不会还有人不会用吧）

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZDfrRRDLQ69ccINVeGGmsBUicJ3GIZQXuMln6rjIlfGM5o7oA3pOv3xQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230418214249630

最后，保存，再切换到`.vue`文件中，输入`vue`，**「注意：这里只有在顶层输入有效！在`script`标签内输入是无法触发的！」** 。所以最大的作用是用来初始化文件代码

  
  

## 四、推荐插件

-   koroFileHeader，自动生成代码文件头注释，函数注释
    

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZJ9ibow8FmE2auJ2VO6YRGTxISHgjia1KvI0CkIUFXPXbEdIrYU2rZ6IA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230716214800373

-   GitLens，强大的Git图形化工具
    
-   Auto Rename Tag，自动重命名配对的HTML/XML标记
    
-   outline-map，可视, 可互动的大纲地图，如下图
    

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZdZD9HDJPpbUq2W4udLYcae7qgQePfxiauicVs4eHiaAdBvEUicyibJTpYkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909162118993

-   change-case，转换命名风格，例如从`camel`（小驼峰）转成`Pascal`（大驼峰）
    

  
  

## 五、同步VSCode配置

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZdVzo0OaDiagBibETg6fbCfjWfanSTsklO4yO3j0HtGVWVbxOy6h9nOCw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909233052873

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZ5af7QI3xbTxxzWVIibPBhpN5aZDk7q4Cdiaa7kysKVxaVs4rfu3q9ibicw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909233121399

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZMUpLTk9r5zpQcFc34EvJPe9Licbxcia75MvHDG1JXchLOmZ9ldbhbZcQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909233210708

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZyGd8GqYruNcOUyk0BCyYa4ze4cBoW8licxfbaHhgvrB9FvsoFnc5amA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909233310015

这里提供了github和本地两种方式，推荐github（存在云端随时随地获取），登录一下github并授权，然后按照提示一步一步完成即可。

  
  

## 六、settings.json

`settings.json`文件就是VSCode所有设置保存的地方。

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZmRaoNxDA011VTHHNA3oeP4kicmQkHhibdGFMDzT2ibcESgsX8saBeTmbQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909190627962

-   Default Settings（JSON），**「默认，全局用户共享」**
    
-   User Settings（JSON），**「当前用户」**。设置面板中的（用户）设置就对应这个文件，所有的修改都在该文件中生效
    
-   Workspace Settings（JSON），**「工作区」**
    

分别代表了不同的影响范围。**「优先级关系」**：**「工作区 > 用户设置 > 默认设置」**，当有相同项时，前者覆盖后者

  
  

## 七、.editconfig

### 1\. EditorConfig是什么

帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式，统一编码风格的配置文件。

EditorConfig一般以`.editorconfig`文件的形式存在，并且还需要搭配插件才能在IDE（如VSCode）中使用，以下是一个文件示例

```
# top-most EditorConfig fileroot = true# Unix-style newlines with a newline ending every file[*]end_of_line = lfinsert_final_newline = true# Matches multiple files with brace expansion notation# Set default charset[*.{js,py}]charset = utf-8# 4 space indentation[*.py]indent_style = spaceindent_size = 4# Tab indentation (no size specified)[Makefile]indent_style = tab# Indentation override for all JS under lib directory[lib/**.js]indent_style = spaceindent_size = 2# Matches the exact files either package.json or .travis.yml[{package.json,.travis.yml}]indent_style = spaceindent_size = 2
```

如上：

-   `.editorconfig`文件顶部，必须写上`root = true`（文档中是这么解释的：Set to true to stop `.editorconfig` files search on current file.）
    

> ❝
> 
> 如果到达根文件路径或找到root=true的editorconfig文件，则将停止搜索.editorconfig文件。
> 
> ❞

-   使用通配符，可以针对不同类型的文件使用不同的编辑风格（下面的内容覆盖上面）
    
-   `.editorconfig`文件的注释以`#`开头，必须单独放在一行，不能放在行尾
    
-   `.editorconfig`文件本身必须是`UTF-8`编码
    

### 2\. path匹配规则

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZUEHfG5ZsrG8rfGsURLcu12QyyU7qKd1RGkA5b3RNwtS1qmfb9vXrRQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230619130523266

### 3\. 配置项

以下列举可以配置的项目

```
indent_style  # 缩进风格，tab或spaceindent_size   # 每个缩进单位的列数，当它被设置为tab时，将使用tab_width的值（如果tab_width指定了的话）tab_width   # 一个tab制表符代表的列数，默认为indent_size的值，通常不需要指定。trim_trailing_whitespace  # 删除换行符之前（即行尾）的任何空白字符，true 或 falseinsert_final_newline    # 用一个空白行结束文件，true 或 falseend_of_line   # 行尾用什么符号结束，lf、cr、crlfcharset     # 规定文件的字符集，utf-8、utf-8-bom、utf-16be、utf-16le、latinlroot      # 在文件顶部声明的属性，如果设置为true，则编辑器对EditorConfig文件的搜索到这个文件停止
```

-   没有在`.editorconfig`文件中配置的项，将使用IDE默认的配置
    
-   将指定项设置为`unset`，可以清除所有之前的`.editorconfig`对它的设置，从而使用IDE默认值
    
-   通常一些配置项是不用指定的。比如指定了`indent_style = tab`之后，就不用再指定`indent_size`这个配置了
    

在 EditorConfig Properties · editorconfig/editorconfig Wiki (github.com) 中还介绍了一些扩展的配置项（但是EditorConfig表示并不想标准化它们，不过可以使用），下面列举一些常用的：

```
quote_type    # 字符串的引号类型（限于支持多种引用符号的语言），single、double、autocurly_bracket_next_line # 左侧大括号 { 是否要另起一行，true/falsespaces_around_brackets  # 大括号{}前后是否加空格，none、inside、outside、bothspaces_around_operators # 运算符前后是否加空格，true、false、hybridindent_brace_style    # 缩进风格，K&R、Allman、GNU、Horstmann等等，具体示例见下文
```

**「indent\_brace\_style」**，缩进风格，下面通过示例展示不同的缩进风格

```
// K&Rwhile (x == y) {    something();    somethingelse();}// Allmanwhile (x == y){    something();    somethingelse();}// GNUwhile (x == y)  {    something();    somethingelse();  }// Horstmannwhile (x == y){   something();    somethingelse();}// Lispwhile (x == y) {    something();    somethingelse(); }
```

### 4\. 安装插件

VSCode必须安装插件才能解析`.editorconfig`文件。

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZ1yxeSOd41Y8ziauWvTGEGCGia2s7mpRyeyZ1Rat6ibucG57ibYzbWic0Lrw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

image-20230909231331492

GitHub - editorconfig/editorconfig-vscode: EditorConfig extension for Visual Studio Code

### 5\. .editorconfig和Prettier的关系

如果项目目录中同时存在 Prettier 和 `.editorconfig`文件，Prettier会将`.editorconfig`文件中的规则转换为相应的Prettier配置。更多细节请看：Configuration File · EditorConfig

  
  

## 八、.vscode目录

> ❝
> 
> 有一些项目从远程仓库clone下来之后，可以看到带了.vscode/目录，你知道这个目录是用来干什么的吗？
> 
> ❞

### 1 .vscode目录是做什么的

存放工作区的项目配置和工具相关文件

### 2 setting.json

该文件用来设置项目用到的**「设置」**（工作区设置），该文件的设置会覆盖掉vscode编辑器的全局配置

```
{  "editor.defaultFormatter": "esbenp.prettier-vscode",  "editor.formatOnSave": true,  "editor.codeActionsOnSave": {    "source.fixAll": true,    "source.fixAll.eslint": true,    "source.fixAll.stylelint": true  },  "stylelint.validate": ["css", "less", "scss", "vue"]}
```

### 3 extensions.json

该文件用来设置项目用到的**「插件推荐列表」**

先定义一个extensions.json文件

```
{  "recommendations": [    "dbaeumer.vscode-eslint",    "esbenp.prettier-vscode",    "Vue.volar"  ]}
```

然后到【插件】侧边栏，按下图点击，就会出现上述文件推荐的插件了，然后选择安装即可！

![图片](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibvfnKoV9neUCcQx6yBhN8kZQ4QBX9FnPxNYb16ichnVwcBHg3vpO43ukAPOeWhMezT0ic7dZce7u5SA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
