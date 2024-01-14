# Sass完整指南

Sass 是一个 CSS 预处理器，完全兼容所有版本的 CSS。实际上，Sass 并没有真正为 CSS 语言添加任何新功能。只是在许多情况下可以可以帮助我们减少 CSS 重复的代码，节省开发时间。下面就来看看 Sass 中常用的功能吧！  

## 1\. 注释

在 Sass 中支持两种类型的注释：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">//&nbsp;注释一<br><br><span data-style="color: rgb(92, 99, 112); font-style: italic; line-height: 26px;">/*&nbsp;注释二&nbsp;*/</span><br></code>
```

需要注意，当 Sass 编译成CSS时，第一种注释不会编译到CSS中（只在Sass文件中可见），第二种注释会编译到CSS中。

## 2\. 嵌套

嵌套的写法是Sass的一大特点，通过嵌套这些代码，可以得到类似HTML结构的CSS代码，使代码更具可读性。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>nav</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background&nbsp;</span>:&nbsp;<span>#C39BD3</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>padding&nbsp;</span>:&nbsp;<span>10px</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>height</span>:&nbsp;<span>50px</span>;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;ul&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>display</span>:&nbsp;flex;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>list-style&nbsp;</span>:&nbsp;none;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>justify-content</span>:&nbsp;flex-end;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;white;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>margin-right</span>:&nbsp;<span>10px</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br></code>
```

那为什么要使用嵌套呢？在CSS中，如果想为其父元素的继承元素定义样式，就必须每次都选择父元素：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>html</span>,&nbsp;<span>body</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>height</span>:&nbsp;<span>100%</span>;<br>}<br><br><span>html</span>&nbsp;<span>#root</span>,&nbsp;<span>body</span>&nbsp;<span>#root</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>height</span>:&nbsp;<span>100%</span>;<br>}<br><br><span>html</span>&nbsp;<span>.div-with-button</span>,&nbsp;<span>body</span>&nbsp;<span>.div-with-button</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;black;<br>}<br><br><span>html</span>&nbsp;<span>.div-with-button</span>&nbsp;<span>button</span>,&nbsp;<span>body</span>&nbsp;<span>.div-with-button</span>&nbsp;<span>button</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#e4c681</span>;<br>}<br><br><span>html</span>&nbsp;<span>.div-with-button</span>&nbsp;<span>button</span><span>:hover</span>,&nbsp;<span>body</span>&nbsp;<span>.div-with-button</span>&nbsp;<span>button</span><span>:hover</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#ffe082</span>;<br>}<br></code>
```

在Sass中就可以这样写，这样写就会使代码更加清晰、条理和简洁：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>html</span>,&nbsp;<span>body</span>&nbsp;{<br>&nbsp;&nbsp;<span>height</span>:&nbsp;<span>100%</span>;<br><br>&nbsp;&nbsp;#root&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>height</span>:&nbsp;<span>100%</span>;<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;<span>.div-with-button</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;black;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;button&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#e4c681</span>;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;:hover&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#ffe082</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}<br></code>
```

注意，在编写Sass时，要嵌套嵌套太深，尽量不要超过三层，超过之后就会导致代码难以维护，并且在编译为CSS时就会出现不必要的选择器，就会导致CSS文件变大。

我们还可以在嵌套中使用 `&`，比如鼠标在按钮上悬浮时，改变颜色。在CSS中是这样的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>button</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#535353</span>;<br>&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#000</span>;<br>}<br><span>button</span><span>:hover</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#000</span>;<br>&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#fff</span>;<br>}<br></code>
```

在Sass中就可以这么写：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>button</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#535353</span>;<br>&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#000</span>;<br>&nbsp;&nbsp;&amp;:hover&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#000</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#fff</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

通常，& 总是指向它上面的元素，可以用于伪类和伪元素：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>.box</span>&nbsp;{<br>&nbsp;&nbsp;&amp;:focus{}&nbsp;<br>&nbsp;&nbsp;&amp;<span>:hover</span>{}<br>&nbsp;&nbsp;&amp;<span>:active</span>{}<br>&nbsp;&nbsp;&amp;<span>:first-child</span>{}&nbsp;<br>&nbsp;&nbsp;&amp;<span>:nth-child(2)</span>{}<br>&nbsp;&nbsp;&amp;<span>::after</span>{}&nbsp;<br>&nbsp;&nbsp;&amp;<span>::before</span>{}&nbsp;<br>}<br></code>
```

编译后的CSS代码如下：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>.box</span><span>:focus</span>{}&nbsp;<br><span>.box</span><span>:hover</span>{}<br><span>.box</span><span>:active</span>{}<br><span>.box</span><span>:frist-child</span>{}<br><span>.box</span><span>:nth-child(2)</span>{}<br><span>.box</span><span>::after</span>{}<br><span>.box</span><span>::before</span>{}<br></code>
```

此外，如果类以相同的词开头（比如`box-yellow`和`box-red`），就可以嵌套它们：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>.box</span>&nbsp;{<br>&nbsp;&nbsp;&amp;-yellow&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#ff6347</span>;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;&amp;<span>-red</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#ffd700</span>;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;&amp;<span>-green</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#9acd32</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

编译成CSS就是这样的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>.box-yellow</span>&nbsp;{<br>&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#ff6347</span>;<br>}<br><span>.box-red</span>&nbsp;{<br>&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#ffd700</span>;<br>}<br><span>.box-green</span>&nbsp;{<br>&nbsp;&nbsp;<span>background</span>:&nbsp;<span>#9acd32</span>;<br>}<br></code>
```

Sass还支持使用`:`来嵌套属性：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>add-icon</span>&nbsp;{<br>&nbsp;&nbsp;<span>background&nbsp;</span>:&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;image:&nbsp;<span>url</span>(<span>"./assets/arrow-right-solid.svg"</span>);<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>position</span>:&nbsp;center&nbsp;center;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>repeat</span>:&nbsp;no-repeat;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>size</span>:&nbsp;<span>14px</span>&nbsp;<span>14px</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

上面的代码编译为如下CSS：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>.add-icon</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-image</span>:&nbsp;<span>url</span>(<span>"./assets/arrow-right-solid.svg"</span>);<br>&nbsp;&nbsp;<span>background-position</span>:&nbsp;center&nbsp;center;<br>&nbsp;&nbsp;<span>background-repeat</span>:&nbsp;no-repeat;<br>&nbsp;&nbsp;<span>background-size</span>:&nbsp;<span>14px</span>&nbsp;<span>14px</span>;<br>}<br></code>
```

## 3\. 变量

变量是用来储存数据的，在Sass中，我们可以将任何有效的CSS值保存在变量中。变量使用`$`符号定义：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>red</span>:&nbsp;<span>#ee4444</span>;<br>$<span>black</span>:&nbsp;<span>#222</span>;<br>$<span>bg-color</span>:&nbsp;<span>#3e5e9e</span>;<br>$<span>link-color</span>:&nbsp;<span>red</span>;<br>$<span>p-color</span>:&nbsp;<span>#282A36</span>;<br><br>$<span>font-p</span>:&nbsp;13<span>px</span>;<br>$<span>font-h1</span>:&nbsp;28<span>px</span>;<br><br>$<span>base-font</span>:&nbsp;'<span>Noto</span>&nbsp;<span>Sans</span>&nbsp;<span>KR</span>',&nbsp;<span>sans-serif</span>;<br></code>
```

变量的使用：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>body</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color&nbsp;</span>:&nbsp;$bg-color;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size&nbsp;</span>:&nbsp;$font-p;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-family&nbsp;</span>:&nbsp;$base-font;<br>}<br><br><span>h1</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;$font-h1;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;$black;<br>}<br><br><span>p</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;$font-p;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;$black;<br>}<br><br><span>a</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;$link-color;<br>}<br></code>
```

当Sass编译成CSS时，所有的变量都会被替换为定义的变量值。变量可以减少重复、进行复杂的数学运算等。

需要注意，CSS变量是有范围的，位于顶层的变量都是全局变量，在块中定义的变量都是局部变量。全局变量可以在任何地方使用，局部变量只能在变量定义的块中使用。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>my-global-variable</span>:&nbsp;"<span>global</span>";<br><br><span>div</span>&nbsp;{<br>&nbsp;&nbsp;$<span>my-local-variables</span>:&nbsp;<span>"local"</span>;<br>}<br></code>
```

变量值是可以覆盖的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>color</span>:&nbsp;<span>#fefefe</span>;<br><span>.content</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;$color;<br>}<br><br>$<span>color</span>:&nbsp;<span>#939393</span>;<br><span>.footer</span>&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;$color;<br>}<br></code>
```

在上面的代码中，`content`的背景颜色是`#fefefe`，而`footer`的背景颜色是`#939393`。要想改变全局变量，就需要添加`!global`修饰符：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>color</span>:&nbsp;<span>#111</span>;<br><span>.content</span>&nbsp;{<br>&nbsp;&nbsp;$<span>color</span>:&nbsp;<span>#222</span>;<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;$color;<br>}<br><span>.footer</span>&nbsp;{<br>&nbsp;&nbsp;$<span>color</span>:&nbsp;<span>#333</span>&nbsp;!global;<br>}<br></code>
```

除此之外，Sass变量是可以指定默认值的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>message-color</span>:&nbsp;<span>blue</span>&nbsp;!<span>default</span>;<br><br><span>.message</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;$message-color;<br>}<br></code>
```

编译成的CSS代码如下：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>p</span><span>.message</span>&nbsp;{<br>&nbsp;&nbsp;<span>color</span>:&nbsp;blue;<br>}<br></code>
```

我们可以在 @import 之前覆盖模块默认值：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>message-color</span>:&nbsp;<span>black</span>;<br><span>@import</span>&nbsp;<span>'my-module'</span>;<br><br><span>.message</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;$message-color;<br>}<br></code>
```

编译成的CSS代码如下：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>p</span><span>.message</span>&nbsp;{<br>&nbsp;&nbsp;<span>color</span>:&nbsp;black;<br>}<br></code>
```

也就是说，带有 `!default` 的变量只有在没有值的情况下才会生效。

## 4\. Mixins 和  Include

`mixin` 是一组可以重用的 CSS 声明，语法类似于JavaScript中的函数，使用 `@mixin` 指令来代替 `function` 关键字。调用 `mixin` 是通过 `@include` 语句完成的。

以下是用 `mixins` 使元素水平垂直居中的方法：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@mixin</span>&nbsp;absolute-center()&nbsp;{<br>&nbsp;&nbsp;<span>position</span><span>:absolute</span>;<br>&nbsp;&nbsp;<span>left</span><span>:50</span>%;<br>&nbsp;&nbsp;<span>top</span><span>:50</span>%;<br>&nbsp;&nbsp;<span>transform</span><span>:translate(-50</span>%,<span>-50</span>%);<br>}<br><br><span>.element</span>&nbsp;{<br>&nbsp;&nbsp;@include&nbsp;absolute-center();<br>}<br></code>
```

当然，mixin也是支持传递参数的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@mixin</span>&nbsp;square($size)&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:$<span>size</span>;<br>&nbsp;&nbsp;<span>height</span>:$<span>size</span>;<br>}<br><span>div</span>&nbsp;{<br>&nbsp;&nbsp;@include&nbsp;square(60px);<br>&nbsp;&nbsp;<span>background-color</span>:<span>#000</span>;<br>}<br></code>
```

参数可以是可选的，可选参数的定义和Sass变量的定义形式是一样的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@mixin</span>&nbsp;square($<span>width:</span>&nbsp;<span>50px</span>)&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:$<span>size</span>;<br>&nbsp;&nbsp;<span>height</span>:$<span>size</span>;<br>}<br></code>
```

我们还可以将 CSS 规则传递给 mixins。这些规则可以在使用 @content 的 mixin 中使用。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@mixin</span>&nbsp;hover-<span>not</span>-disabled&nbsp;{<br>&nbsp;&nbsp;&amp;<span>:not(</span><span>[disabled]</span>)<span>:hover</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;@content;<br>&nbsp;&nbsp;}<br>}<br><span>.button</span>&nbsp;{<br>&nbsp;&nbsp;<span>border</span>:&nbsp;<span>1px</span>&nbsp;solid&nbsp;black;<br>&nbsp;&nbsp;@include&nbsp;hover-not-disabled&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>border-color</span>:&nbsp;blue;<br>&nbsp;&nbsp;}<br>}<br></code>
```

这样`mixin`中的`@content`在编译后就会变成`border-color: blue;`这样写有助于减少&`:not([disabled]):hover`部分的重复。

## 5\. @import 和 @use

在CSS中我们通常会创建多个CSS文件并在需要时引入：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">&lt;<span>link</span>&nbsp;<span>rel</span>="<span>stylesheet</span>"&nbsp;<span>href</span>="/<span>path</span>/<span>to</span>/<span>css</span>/1"&gt;&lt;/<span>link</span>&gt;<br>&lt;<span>link</span>&nbsp;<span>rel</span>="<span>stylesheet</span>"&nbsp;<span>href</span>="/<span>path</span>/<span>to</span>/<span>css</span>/2"&gt;&lt;/<span>link</span>&gt;&nbsp;<br>&lt;<span>link</span>&nbsp;<span>rel</span>="<span>stylesheet</span>"&nbsp;<span>href</span>="/<span>path</span>/<span>to</span>/<span>css</span>/3"&gt;&lt;/<span>link</span>&gt;&nbsp;<br></code>
```

这样做会使浏览器发出多个HTTP请求，从而在一定程度上降低应用的速度。而Sass会在代码发动到浏览器之前进行代码组合，这样只需要请求一个CSS文件。

下面来看看如何使用 @import 将文件分块并导入到一个父文件中：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>body</span>&nbsp;{<br>&nbsp;&nbsp;<span>padding</span>:<span>0</span>;<br>&nbsp;&nbsp;<span>margin</span>:<span>0</span>;<br>}<br><br><span>body</span>,&nbsp;<span>html</span>&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:<span>100%</span>;<br>&nbsp;&nbsp;<span>min-height</span>:<span>100%</span>;<br>}<br></code>
```

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@import</span>&nbsp;<span>'normalize'</span>;<br><br><span>content</span>&nbsp;{<br>&nbsp;&nbsp;<span>max-width</span>:<span>660px</span>;<br>}<br></code>
```

假设 `normalize.scss` 和 `styles.scss` 都在同一个文件夹中，可以将一个导入另一个，如上所示。在使用`@import`时，所有变量、mixin 等都可以全局访问，因为一切都是全局的，所以库必须为其所有成员添加前缀以避免命名冲突。因此不建议使用 @import。

可以使用 @use 来代替，它的基本用法与@import 相同：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@use</span>&nbsp;<span>'normalize'</span>;<br><br><span>content</span>&nbsp;{<br>&nbsp;&nbsp;<span>max-width</span>:<span>660px</span>;<br>}<br></code>
```

使用 `@use` 导入的文件称为模块。要使用这些模块的 mixin 或变量，必须使用命名空间来调用它们。默认情况下，命名空间是文件名（不带扩展名）。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>accent-color</span>:&nbsp;<span>#535353</span>;<br><span>@mixin</span>&nbsp;dark-background&nbsp;{<br>&nbsp;&nbsp;<span>background-color</span>:<span>#000</span>;<br>&nbsp;&nbsp;<span>color</span>:<span>#fff</span>;<br>}<br></code>
```

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@use</span>&nbsp;<span>'src/colors'</span>;<br><span>body</span>&nbsp;{<br>&nbsp;&nbsp;<span>color</span>:&nbsp;colors.$accent-color;<br>}<br><span>.dark-region</span>&nbsp;{<br>&nbsp;&nbsp;@include&nbsp;colors.dark-background;<br>}<br></code>
```

还可以使用 as 来使用自定义命名空间：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@use</span>&nbsp;<span>'src/colors'</span>&nbsp;as&nbsp;c;<br><span>body</span>&nbsp;&nbsp;{<br>&nbsp;&nbsp;<span>color</span>:&nbsp;c.$accent-color;<br>}<br></code>
```

当 `_` 被添加到 SCSS 文件的文件名前时，解析器知道它是一个部分文件并且它仅用于导入。导入时，`_` 部分是可选的。注意，这里使用 `src/colors` 来导入 `src/_colors.scss`。

## 6\. 算术运算符

在CSS中可以使用calc()进行数学计算，Sass 支持直接使用+、-、/、\*、% 操作符对值和变量进行计算：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>content-width</span>:&nbsp;600<span>px</span>;<br><span>content</span>&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:$content-width;<br>}<br><span>.inner-content</span>&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:&nbsp;$content-width&nbsp;-&nbsp;<span>60px</span>;&nbsp;<br>}<br><span>.outer-content</span>&nbsp;{<br>&nbsp;&nbsp;<span>width</span>:&nbsp;$content-width&nbsp;+&nbsp;<span>60px</span>;<br>}<br></code>
```

## 7\. 流程控制

在 Sass 中有四种类型的流程控制规则：`@if` /`@else`、`@each`、`@for` 和`@while`。其中 @if 和 @else 类似于 JavaScript 中的 if 和 else。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@mixin</span>&nbsp;theme($<span>is-dark:</span>&nbsp;false)&nbsp;{<br>&nbsp;&nbsp;<span>@if</span>&nbsp;$is-dark&nbsp;{<br><br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span>@else</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;}<br>}<br></code>
```

`@each` 类似于 JavaScript 中的 `for of`：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">$<span>sizes</span>:&nbsp;40<span>px</span>,&nbsp;50<span>px</span>,&nbsp;80<span>px</span>;<br><span>@each</span>&nbsp;$size&nbsp;in&nbsp;$sizes&nbsp;{<br>&nbsp;&nbsp;<span>.icon-</span>#{$size}&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;$size;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>height</span>:&nbsp;$size;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>width</span>:&nbsp;$size;<br>&nbsp;&nbsp;}<br>}<br></code>
```

注意：#{$size} 表示法用于使用变量制作动态属性名称和选择器，这称为插值。

`@for` 类似于 JavaScript 中的 `for` 循环：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@for</span>&nbsp;$i&nbsp;from&nbsp;<span>1</span>&nbsp;through&nbsp;<span>4</span>&nbsp;{<br>&nbsp;&nbsp;<span>.bubble-</span>#{$i}&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>transition-delay</span>:&nbsp;.<span>3</span>&nbsp;*&nbsp;$i;<br>&nbsp;&nbsp;}<br>}<br></code>
```

@while（不常用）类似于 JavaScript 中的 while 循环。

## 8\. 扩展/继承

有时需要编写一个仅用于扩展的样式规则。在这种情况下，可以使用占位符选择器，它看起来像以 `%` 而不是 `.` 开头的类选择器。

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;">%<span>flex</span>&nbsp;{<br>&nbsp;&nbsp;<span>display</span>:&nbsp;flex;<br>}<br><br><span>.some-class</span>&nbsp;{<br>&nbsp;&nbsp;<span>height</span>:&nbsp;<span>50%</span>;<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;black;<br>}<br><br>%<span>flex_with_color</span>&nbsp;{<br>&nbsp;&nbsp;@extend&nbsp;%flex;<br>&nbsp;&nbsp;@extend&nbsp;.some-class;<br>}<br><br>%<span>button_styles</span>&nbsp;{<br>&nbsp;&nbsp;<span>height</span>:&nbsp;<span>50px</span>;<br>&nbsp;&nbsp;<span>width</span>:&nbsp;<span>200px</span>;<br>}<br><br><span>div</span>&nbsp;{<br>&nbsp;&nbsp;@extend&nbsp;%flex_with_color;<br><br>&nbsp;&nbsp;button&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;@extend&nbsp;%button_styles;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#424242</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#d966fb</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

上面的代码编译成CSS之后将是这样的：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>div</span>&nbsp;{<br>&nbsp;&nbsp;<span>display</span>:&nbsp;flex;<br>}<br><br><span>.some-class</span>,&nbsp;<span>div</span>&nbsp;{<br>&nbsp;&nbsp;<span>height</span>:&nbsp;<span>50%</span>;<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;black;<br>}<br><br><span>div</span>&nbsp;<span>button</span>&nbsp;{<br>&nbsp;&nbsp;<span>height</span>:&nbsp;<span>50px</span>;<br>&nbsp;&nbsp;<span>width</span>:&nbsp;<span>200px</span>;<br>}<br><br><span>div</span>&nbsp;<span>button</span>&nbsp;{<br>&nbsp;&nbsp;<span>color</span>:&nbsp;<span>#424242</span>;<br>&nbsp;&nbsp;<span>background-color</span>:&nbsp;<span>#d966fb</span>;<br>}<br></code>
```

## 9\. 媒体查询

在Sass中可以这样来使用媒体查询：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>body</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;article&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;<span>100%</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;black;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>padding</span>:&nbsp;<span>10px</span>;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@media&nbsp;(<span>max-width</span>:&nbsp;<span>768px</span>)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size:&nbsp;<span>150%</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br></code>
```

编译成的CSS代码如下：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>body</span>&nbsp;<span>article</span>&nbsp;<span>p</span>&nbsp;{<br>&nbsp;&nbsp;<span>font-size</span>:&nbsp;<span>100%</span>;<br>&nbsp;&nbsp;<span>color</span>:&nbsp;black;<br>&nbsp;&nbsp;<span>padding</span>:&nbsp;<span>10px</span>;<br>}<br><br><span>@media</span>&nbsp;(<span>max-width:</span>&nbsp;<span>768px</span>)&nbsp;{<br>&nbsp;&nbsp;<span>body</span>&nbsp;<span>article</span>&nbsp;<span>p</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;<span>150%</span>;<br>&nbsp;&nbsp;}<br>}<br></code>
```

媒体查询是支持嵌套的，并将所有适用的查询与 and 运算符结合起来：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>p</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;@media&nbsp;(<span>max-width</span>:&nbsp;<span>768px</span>)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size:&nbsp;<span>150%</span>;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@media&nbsp;(<span>orientation</span>:&nbsp;landscape)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height:&nbsp;<span>75%</span>;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br></code>
```

编译成的CSS代码如下：

```
<span data-style="display: block; background: url(&quot;https://mmbiz.qpic.cn/mmbiz_svg/LHdtlaBo22c3xUWTQqwbibU0eHjLNAg4S2Ek3iaUIefw70dYIxQaRWMhNAI5BUP1KJhbmshYfR5kn36WKG9Vm8icAgLcnLl8ic6E/640?wx_fmt=svg&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52); height: 30px; width: 100%; margin-bottom: -7px; border-radius: 5px;"></span><code data-style="overflow-x: auto; padding: 15px 16px 16px; color: rgb(171, 178, 191); display: -webkit-box; font-family: &quot;Operator Mono&quot;, Consolas, Monaco, Menlo, monospace; font-size: 12px; background: rgb(40, 44, 52); border-radius: 5px;"><span>@media</span>&nbsp;(<span>max-width:</span>&nbsp;<span>768px</span>)&nbsp;{<br>&nbsp;&nbsp;<span>p</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size</span>:&nbsp;<span>150%</span>;<br>&nbsp;&nbsp;}<br>}<br><br><span>@media</span>&nbsp;(<span>max-width:</span>&nbsp;<span>768px</span>)&nbsp;<span>and</span>&nbsp;(<span>orientation:</span>&nbsp;landscape)&nbsp;{<br>&nbsp;&nbsp;<span>p</span>&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>line-height</span>:&nbsp;<span>75%</span>;<br>&nbsp;&nbsp;}<br>}</code>
```
