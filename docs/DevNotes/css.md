> Notes for Css

1. CSS`:in-range`和`:out-of-range`伪类

    这些伪类用于对指定范围内/外的输入进行样式设置，只适用于有范围限制的元素。

    如果没有限制，则该元素不能在范围内或超出范围。

   `:in-range`

        如果`input`元素的当前值在`min`和`max`属性的范围之间，则`input`元素在范围内。

        这个伪类可以很容易地确定一个字段的当前值是否可以接受。

   `:out-of-range`

        如果`input`元素的当前值超出了`min`和`max`属性的范围，则`input`元素超出范围。

        如果字段值超出其范围，它会给用户一个视觉指示。

    CSS代码：

        ```css
        /* in-range */
        input:in-range {
          background-color: rgba(0, 255, 0, 0.25);
        }
        /* out-of-range */
        input:out-of-range {
          background-color: rgba(255, 0, 0, 0.25);
        }
        ```

   输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAotbcRY0XewcbKT0anN5EemgynQiajgSz7EOFAx74Micp4ic3urz8VLjiaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

2. `grayscale()`函数

    你可以使用值`100%`将图像从彩色转换为黑白。当将此值设置为`0%`时，你的图像将保持不变。

    使用`100%`的值，你的图像转换为黑白，这意味着照片中将没有颜色。

    你还可以使用`0%`到`100%`之间的值来创建各种不同的效果。

    CSS代码：

        ```css
        .grayscale-image {
          filter: grayscale(100%);
        }
        ```

   输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAHponTbObHxopyMoVciaC3bFBMuPaEpnIJJxsNBic25a0Kvm0c4VoIWag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

3. 玻璃效果

    使用几行代码将玻璃效果添加到你的下一个项目中。是的，这真的很容易，玻璃效果很漂亮，为你的设计增添优雅。

    Glass.CSS(<https://css.glass/>) 是最流行的 glassmorphism 生成器，你可以在其中免费为你的项目创建 CSS Glass Effects。 你需要做的就是根据需要调整一些设置并将 CSS 代码复制粘贴到你的项目中。

    CSS代码：

        ```css
        .glass-effect {
          -webkit-backdrop-filter: blur(6.2px);
          backdrop-filter: blur(6.2px);
          background: rgba(255, 255, 255, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.24);
        }
        ```

   输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlATdqTQewkcO9QicMLgL3M3MaLywpqFPjKPp9RuS9Cicxp3BTHqoux9M0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

4. 设置文本样式

    每个人都应该知道的一些非常基本的文本样式效果。但是，还有许多其他高级选项可用。

    CSS代码：

        ```css
        p {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 5rem;
          text-transform: capitalize;
          text-shadow: 2px 2px 2px pink, 1px 1px 2px pink;
          text-align: center;
          font-weight: normal;
          line-height: 1.6;
          letter-spacing: 2px;
        }
        ```

5. CSS`clamp()`函数

    CSS`clamp()`函数将值限制在两个上限和下限之间的范围内。必须有一个首选值、一个最小值和一个最大值。

    当字体大小根据视口而变化时，`clamp()`会派上用场。

    CSS代码：

        ```css
        p {
          font-size: clamp(1.8rem, 2.5vw, 2.8rem);
        }
        ```

6. 居中一个`div`

    对于开发人员来说，最重要的任务是使`div`居中。有很多其他选项可以使`div`居中。

    在本例中，我们使用CSS`flexbox`将`div`水平和垂直居中。

    CSS代码：

        ```css
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ```

7. 渐变CSS线性渐变

    要创建渐变CSS线性渐变，只需使用下面的CSS代码。

    CSS代码：

        ```css
        div {
          background: linear-gradient(35deg, #ccffff, #ffcccc, rgb(204, 204, 255));
          border-radius: 20px;
          width: 70%;
          height: 400px;
          margin: 50px auto;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAianZ8EkGFXgu5PLuSbSaLY8dSzV0K0DdAVneGf3uVBZq3dtTk9bab4Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

8. CSS抖动效果

    当用户输入无效内容时，这种摇动动画效果会摇动输入字段。它简单而优雅。

    例如，如果用户在文本字段中输入数字而不是字母，则输入字段会抖动。

    HTML代码：

        ```html
        <input id="name" type="text" placeholder="Enter your name" pattern="[A-Za-z]*"/>
        ```

    CSS代码：

        ```css
        input:invalid {
          animation: shake 0.2s ease-in-out 0s 2;
          box-shadow: 0 0 0.4em red;
        }
        @keyframes shake {
          0% {
            margin-left: 0rem;
          }
          25% {
            margin-left: 0.5rem;
          }
          75% {
            margin-left: -0.5rem;
          }
          100% {
            margin-left: 0rem;
          }
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_gif/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAbqibdL2jeriaLCknhUOvP2nicn8Gv79MUkB18uD06TXLUgoagxsWMNf1A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

9. 文字溢出

    你可以使用此属性截断溢出的文本，可以使用省略号(...)或自定义字符串对其进行剪裁和显示。

    CSS代码：

        ```css
        .text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: clip;
          width: 200px;
        }
        div.text {
          white-space: nowrap;
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          border: 1px solid #000000;
        }
        div.text:hover {
          overflow: visible;
        }
        ```

10. `column-count`属性

    它指定一个元素应该被划分成的列数。

    CSS代码：

        ```css
        p {
          column-count: 2;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlA9nlIAsibCf3N2JEgTH65LqwGNlMTt3S4IuPZqA8RsuibM8kiaz4NSYOEQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

11. CSS动画

    动画会逐渐改变元素的样式，只有在首先指定关键帧时才能使用它，关键帧描述动画元素如何出现在动画序列中的特定点。

    CSS代码：

        ```css
        div {
          width: 200px;
          height: 200px;
          background-color: blue;
          animation-name: square;
          animation-duration: 8s;
        }
        @keyframes square {
          from {
            background-color: blue;
          }
          to {
            background-color: black;
          }
        }
        ```

12. 阴影效果

    使用CSS，你可以为文本和元素添加效果，将属性定义为`text-shadow`和`box-shadow`。使用`text-shadow`为文本添加阴影，使用`box-shadow`为元素添加阴影。

    `text-shadow`：它给文本一个阴影。

        ```css
        h1 {
          color: blue;
          text-shadow: 2px 2px 4px #000000;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAmtXVnWCibGlIZzSEFvl7TcbK4YZBIGRMh9yxfd1t8CuLmyTaIoVDntQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

    `box-shadow`：用来给元素一个阴影效果。下面示例中的实际`div`是紫色的，盒子阴影是天蓝色的，并且设置在右侧和底部`10`个像素处。

        ```css
        div {
          width: 200px;
          height: 200px;
          padding: 15px;
          background-color: purple;
          box-shadow: 10px 10px skyblue;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAiclnQPVTDMUU7jfzOicc0kXGvb3YVuHvK4P6iah3BWicgrGqjxQYkmf8gg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

13. CSS剪辑

    使用`clip-path`属性，你只能显示元素的一部分，而隐藏其余部分。

    `Clippy-CSS``clip-path``maker`是一种通过将元素裁剪为基本形状（圆形、椭圆形、多边形或插图）或SVG源来在CSS中创建复杂形状的快速简便的方法。

    CSS代码：

        ```css
        .bg {
          height: 100%;
          width: 100%;
          background-color: rgba(199, 62, 133, 0.9);
          clip-path: polygon(100% 0, 100% 0, 100% 51%, 0 100%, 0 90%, 0 52%, 0 51%);
          position: absolute;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAnF6StY5VEyW7Fut8463OUlhbybaITvSvuuLwUibU2z72LjSUvxcElXA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

14. CSS`background-blend-mode`属性

    此属性描述了背景颜色和图像（或两个图像）应如何混合。

    与每个背景图像对应的混合模式列表构成了该值， 混合模式指定背景层如何混合（颜色或图片）。

    你可以使用`background-blend-mode`属性制作令人惊叹的背景。

    CSS代码：

        ```css
        div {
          width: 600px;
          height: 400px;
          background-repeat: no-repeat, repeat;
          background-position: center;
          background-image: url("flower.png"), url("background-image.png");
          background-blend-mode: color;
        }
        ```

    输出：

      ![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZfiaA0MA9e0GjicEfzNwvdlAJKia7GXlpKUe1KRyWD2fiakyMHo0sKbaHa3oKaOZBHtwuD86icMCsVaFw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

    还有一些其他选项可用，如果你想了解有关此属性的更多信息，请到[W3Schools](https://www.w3schools.com/cssref/pr\_background-blend-mode.php)上进行查看。
