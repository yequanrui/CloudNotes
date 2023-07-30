# Pycharm 常用快捷键大全

## 1. 格式化代码【`Ctrl + Alt + L`】

我们写代码的时候会发现有很多黄色的波浪号，类似下图中的，这个时候可以点击任意黄色波浪号的代码，然后按下`Ctrl+Alt+L`进行代码格式化
![图片](https://mmbiz.qpic.cn/mmbiz_png/ULibHgXIt3jzIbQMgGHdy6bnS2FXhEfM40KU42IhcJXY8HJWVBtoCcmRNTqOnWZl198HKKTIJe0MGcp91ibPcCBw/640?wx_fmt=png&random=0.30482471809265443&wxfrom=5&wx_lazy=1&wx_co=1)

格式化效果

```python
def x():
```

## 2. 多行代码合并为一行【`Crtl + Shift + J`】

如果想将下图的代码合并为一行，可以全选它们，然后按`Crtl+Shift+J`即可合并代码为一行，还会自动补充代码

```python
x=1
```

合并后的效果

```python
x=1; y=1; z=1
```

## 3. 修正报警告的代码【`Ctrl + Enter`】

当出现黄色波浪号时，可以在对应代码出按下`Ctrl+Enter`进行修正代码的操作
![图片](https://mmbiz.qpic.cn/mmbiz_png/ULibHgXIt3jzIbQMgGHdy6bnS2FXhEfM4KVticnicV9vr7sEckKkGYTn9aib9KAHxhm2Qcv8sFeX00PS4LiazH2qibGQ/640?wx_fmt=png&random=0.9032417717271646&wxfrom=5&wx_lazy=1&wx_co=1)

按下后，会有多种选择供你修正，包括:格式化代码，忽略该警告，自动修改代码等

![图片](https://mmbiz.qpic.cn/mmbiz_png/ULibHgXIt3jzIbQMgGHdy6bnS2FXhEfM4uv83tcGvNunWywWwX9JguNY0JfebYnNhPibnCS2oKXc7cebK2HNJyZw/640?wx_fmt=png&random=0.9596736862428972&wxfrom=5&wx_lazy=1&wx_co=1)

例如选择:【invert ‘if’ condition】会自动改成下面的代码：

```python
def test(x):
```

## 4. 包装代码【`Crtl + Alt + T`】

我们可以快速的为输入的代码添加if、while、捕获异常等条件
例如有如下代码

```python
x=1
```

我们选中该代码后按下`Crtl+Alt+T`会弹窗让我们选择要包装的条件，现在我们选择【try/except】
![图片](https://mmbiz.qpic.cn/mmbiz_png/ULibHgXIt3jzIbQMgGHdy6bnS2FXhEfM4g0CGaA88iaCNhbCCg2WYQzjlDdJ79JTb6hjlAKI0Dj3C0F4N6Hr9U5A/640?wx_fmt=png&random=0.7396149261632619&wxfrom=5&wx_lazy=1&wx_co=1)

包装效果

```python
try:
```

## 5. 快速注释/取消注释【`Crtl + /`】

如果我们想注释一部分代码可以选中对应的代码，并按下`Crtl+/`

```python
def show_text(text,a):
```

注释结果

```python
# def show_text(text,a):
```

再次按下`Crtl+/`则会取消注释

## 6. 向右缩进一个制表位【`Tab`】

python对代码的缩进要求很严格，下面的代码运行是会报错的！

```python
def test():
```

但一行一行的去调整缩进非常难受，效率很低！这时候可以选中需要缩进的代码，按下`Tab`即可

效果

```python
def test():
```

## 7. 向左缩进一个制表位【`Shift + Tab`】

同上

## 8. 在上方插入新行【`Ctrl + Alt + Enter`】

如果想在下面代码`a+=1`的上方插入空行的话，可以点击到`a+=1`这行，然后按下`Ctrl+Alt+Enter`，则会在其上方新插入一行

```python
def show_text(text,a):
```

效果

```python
def show_text(text,a):
```

## 9. 在下方插入新行【`Shift + Enter`】

同上

## 10. 上下移动选中代码【`Alt + Shift + 上、下键`】

如果我们想将下面代码的`a=1`移动到`print('click')`上方，可以在`a=1`的所在行按下`Alt+Shift+上`将其移动

```python
def click(path):
```

效果

```python
def click(path):
```

向下移动则按`Alt+Shift+下`即可！

## 11. 上下移动选中方法体【`Ctrl + Shift + 上、下键`】

如果我们想将下面的`send`方法移动到`click`方法的上方，可以在`send`方法名这行(def 所在行)按下`Ctrl+Shift+上`即可

```python
def click(path):
```

效果

```python
def send(path):
```

向下移动则按`Ctrl+Shift+下`即可！

## 12. 复制代码【`Ctrl + D`】

如果我们想复制一行代码，可以在相应代码行按下`Ctrl+D`

```python
x=y=z=1
```

效果

```python
x=y=z=1
```

也可以选中多行代码进行复制

```python
def show_text(text,a):
```

效果

但需要自己换行

```python
def show_text(text,a):
```

## 13. 折叠代码【`Ctrl + -`】

想折叠下面的代码的话，可以选中代码再按下`Ctrl+-`

```python
def show_text(text,a):
```

效果

```python
def show_text(text,a):...
```

## 14. 展开代码【`Ctrl + +`】

同上

## 15. 将代码抽取为一个方法【`Ctrl + Shift + M`】

如果想将如下的代码，写到一个方法中的话，可以选中代码并按下`Ctrl+Shift+M`

```python
y=1
```

然后重命名方法，再点击`ok`

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果

```python
def test():
```

## 16. 重命名文件【`Shift + F6`】

需要重命名文件名时，可以选择对应文件按下`Shift+F6`，再输入框输入新的文件名再点击`Refactor`即可
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 17. 查找类被引用的地方【`Ctrl + N`】

按下`Ctrl+N`输入类的关键字，就可以看到被引用的类，点击对应的条目可跳转到对应文件
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 18. 查找/全局查找【`Ctrl + F` / `Ctrl + Shift + F`】

当前文件的查找可以按下`Ctrl+F`并输入要查找的关键字就会高亮包含关键字的代码

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

点击图中红款的箭头，可以逐行查看包含关键字的代码；另外，按下`Shift+F3`或`F3`也可以实现！

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

点击红框中的窗口图标，可以打开TOOL窗口进行多窗口查询
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

全局查询的话按下`Ctrl+Shift+F`即可！

## 19. 替换/全局替换【`Ctrl + R` / `Ctrl + Shift + R`】

当前文件的替换可以按下`Ctrl+R`并在第一栏输入要替换的关键字就会高亮包含关键字的代码，第二栏输入要替换为的关键字，在按下`replace`或`replace All`(替换全部)
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)下图红框中的【exclude】点击的话，会排除选中的该代码，只替换其他代码
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

全局替换的话按下`Ctrl+Shift+R`即可！

## 20. 快速跳转报错的代码【`F2`】**

当出现代码报错的时候，可以按下`F2`快速跳转到报错的代码处
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 21. 定义一个书签【`F11`】

在相应代码处按下`F11`可以将其定义为一个书签
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

再按下`Shift+F11`，可以查看书签对应的代码
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 22. 代码小写转大写【`Ctrl + Shift + U`】

如果想将下面的代码转为大写，可选中代码后按下`Ctrl+Shift+U`

```python
product_nama_dict={}
```

## 效果

```python
PRODUCT_NAMA_DICT={}
```

## 23. 进入一个方法【`Ctrl + B` / `Ctrl + 鼠标左键`】

如果想进入`time`模块的方法中去，可以选中`time`再按下`Ctrl+B`，或者按下`Ctrl+鼠标左键`

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 24. 快捷查看方法的实现(源码)【`Ctrl + Shift + I`】

如果我们想看`time`是如何实现的，可以选中并按下`Ctrl+Shift+I`

```python
import time
```

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 25. 查看文档描述【`Ctrl + Q`】

如果我们想看`time`的文档，可以选中并按下`Ctrl+Q`

```python
import time
```

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 26. 查看文件中的方法【`Ctrl + F12`】

按下`Ctrl+F12`可以看该文件中有哪些方法、类

## 27. 最近编辑的文件列表【`Ctrl + E`】

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 28. 快捷运行代码【`Shift + F10`】

快捷运行当前文件代码

## 29. 快捷调试代码【`Shift + F9`】

快捷调试当前文件代码

## 30. 快捷切换视图/目录【`Ctrl + Tab`】

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 31. 查看最近更改【`Alt + Shift + C`】

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 32. 将光标移动到代码行尾【`End`】

当你的代码很长的时候，已经超过屏幕显示范围了！
可以按下`End`(笔记本一般为`Fn+End`)可以跳转到行尾

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

效果
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

按下【Home】(笔记本一般为【Fn+Home】)可回到行首！

## 33. 全选一行并移至行尾【`Shift + End`】

**效果**
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 34. 查看历史粘贴复制记录【`Ctrl + Shift+ V`】

按下【Ctrl + Shift+ V】可以查看历史的复制粘贴记录
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

选择任意一行可以将它恢复回来

```python
@api_view(['PATCH'])
```

## 35. 将光标移动到方法体或循环的开始【`Ctrl + {`】

当你的方法或循环体很长的时候，可以按下`Ctrl+{`回到函数或循环头

## 36. 将光标移动到方法体或循环的结束【`Ctrl + }`】

当你的方法或循环体很长的时候，可以按下`Ctrl+}`回到函数尾或循环尾

## 37. 最大化编辑代码窗口【`Ctrl + Shift + F12`】

当我们打开了多窗口的时候，影响了代码编辑体验的时候，如下图所示，可以按下`Ctrl+Shift+F12`隐藏其他窗口
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

**效果**
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 38. 快捷添加代码【`Ctrl + J`】

按下`Ctrl+J`可以快速添加代码
![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

例如添加`if __name__ == __main__`，点击上图的`main`即可:

```python
if __name__ == '__main__':
```
