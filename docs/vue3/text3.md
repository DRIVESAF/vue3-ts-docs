## 🚀 掌握前端“三驾马车”

### 💡 HTML

> 搭建页面的结构

#### 核心 DOM 体系

+ Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API（ DOM 和 BOM ）。

##### DOM

DOM 是文档对象模型，是处理 HTML 的标准编程接口。W3C 已经定义了一系列 DOM 接口，通过 DOM 接口可以改变网页的内容、样式和结构。

##### DOM 树

DOM 以树的形态存在，树中的最小单位是节点（Node）。在 DOM 中的一切都是节点，文本是节点，属性、注释、元素也是节点。

DOM 中主要有 4 种类型的节点：

+ Document：整个 DOM 树；
+ Element：单个元素；
+ Text：元素内的纯文本；
+ Attribute：元素的属性。

##### DOM API 操作节点的方法

```javascript
var div = document.getElementById('div');
var div = document.querySelector('#div');
var div = document.getElementsByTagName('div')[0];
```
head 元素
title 元素：用于设置文档标题；
link 元素：用于引入外部资源，通常引入的是 CSS 和图标；
script 元素：用于引入 JavaScript 或执行 JavaScript 脚本；
meta 元素：用于配置元数据。
语义化元素
元素的分类
内容元素：如文字、图片等用于展现内容的元素；
布局元素：不直接展示内容，而是将内容元素更好地排列布局。
使用语义化的布局元素
能够清楚的描述其意义给浏览器和开发者

header 元素：网页的头部区域；

nav 元素：导航区域，用于展示页面切换导航；

section 元素：页面中的一块子区域；

aside 元素：侧边栏，一般是侧边菜单；

main 元素：页面内容区域，不包括导航、菜单、侧边栏、头部和尾部等部分；

article 元素：文章区域，一般在 main 元素中；

footer 元素：网页的尾部区域。

了解 HTML 5
增加了音频元素 audio 和视频元素 video
增加了绘画元素 canvas 和 svg
增强了对表单的支持；
引入了本地存储机制；
支持地理定位和拖放；
支持 WebWorkers；
支持 WebSocket。
认识音/视频元素
音/视频元素主要有 3 个： audio 是音频元素；video 是视频元素；source 元素包裹在 audio 元素或 video 元素中，主要用来指定音/视频类型和资源地址。

元素中有多个属性可以配置如何播放视频，常用的如下：

poster：视频封面，视频没有播放时显示的图片；
autoplay：自动播放；
loop：循环播放；
controls：显示视频控制条；
muted：是否禁音。
也可以通过 DOM API 来操作视频

表单与验证
> <input>标签

```html
<!-- 选择⽇期 -->
<input type="date" />
<!-- 选择时间 -->
<input type="time" />
<!-- 选择⽇期时间 -->
<input type="datetime-local" />
<!-- 选择⽉份 -->
<input type="month" />
<!-- 选择颜⾊ -->
<input type="color" />
<!-- 数字⽂本框 -->
<input type="number" min="1" max="10" />
<!-- 邮箱⽂本框 -->
<input type="email" />
<!-- 滑动条 -->
<input type="range" min="1" max="10" />
```

 新增加的其他常⽤属性如下： 
 + autofucus：⾃动聚焦； 
+ autocomplete：⾃动填充； 
+ max/min：最⼤/最⼩值； 
+ maxlength：最⼤字符⻓度； 
+ disabled：禁⽤元素； 
+ readonly：元素只读； 
+ form：指定所属表单； 
+ HTML 17 required：必填； 
+ pattern：⾃定义验证规则； 
+ novalidate：提交表单时不验证。  

#####  为表单提交添加验证

  disabled  和  readonly 的区别：

+  disabled 属性对所有表单类元素有⽤，readonly 属性只对⽂本和密码⽂本框有⽤； 
+  设置 disabled 属性后，JavaScript 获取不到⽬标元素，设置 readonly 属性则可以； 
+  设置 disabled 属性后，表单数据不会传输，设置 readonly 属性则依然可以传输； 
+  disabled 属性和 readonly 属性都会使表单验证失效。  
###  💡 CSS

> 修饰页面的布局和样式

#### 浮动布局

 虽然浮动布局出现得很早，并且流⾏了很久，但是这种⽅式并不是很好⽤。例如，元素浮动后 会脱离正常的⽂档流，导致⽗元素⽆法被撑开，⾼度变成 0，⽽浮动的元素⼜与其他元素混在⼀ 起，看起来⾮常奇怪且难以理解。

####  inline-block 布局

 ⽐浮动布局稍好⼀些的是 inline-block 布局。因为在设置 display:inline-block 属性后，元素 本身就会⾃动横向排列，同时还可以设置宽度、⾼度、内边距和外边距等，实现起来更直观。

####  Flex 布局

 Flex 布局有 3 个重要的概念：**容器**、**主轴**、**交叉轴**.

 **这⾥是使⽤ flex-direction 属性来设置主轴⽅向，该属性的可选值有以下 4 个： **

+ row：横向从左到右（默认）； 
+ row-reverse：横向从右到左； 
+ column：纵向从上到下； 
+ column-reverse：纵向从下到上。  

**设置元素的对⻬⽅式，该属性的可选值如下：** 

+ flex-start：从左到右； 
+ flex-end：从右到左； center：居中对⻬； 
+ space-between：两端对⻬； 
+ space-around：两端对⻬。 

**  主轴通过 justify-content 属性来设置元素的对⻬⽅式，该属性的可选值如下：** 

+ flex-start：从左到右； 
+ flex-end：从右到左； 
+ center：居中对⻬； 
+ space-between：两端对⻬； 
+ space-around：两端对⻬。

 **  除了设置主轴⽅向的元素对⻬，还可以⽤ align-items 属性设置交叉轴⽅向的元素对⻬， align-items 属性的可选值如下： **

+ flex-start：从上到下； 
+ flex-end：从下到上； 
+ center：居中对⻬； 
+ baseline：基线对⻬； 
+ stretch：填满整个⾼度（默认）。

 **容器元素是否换⾏，可以通过 flex-wrap 属性设置。flex-wrap 属性的可选值如下： **

+ nowrap：不换⾏（默认）； 
+ wrap：换⾏，第⼀⾏在上； 
+ wrap-reverse：换⾏，第⼀⾏在下。

#### 渐变

CSS3 定义了如下两种类型的渐变： 

+ 线性渐变（Linear Gradients）：上下/左右/对⻆⽅向改变颜⾊； 
+ 径向渐变（Radial Gradients）：由中⼼点向外扩散改变颜⾊。

#### 转换

 2D 转换的分类及其对应的实现函数如下： 

+ 位移：translate(x,y); 
+ 旋转：rotate(0deg); 
+ 缩放：scale(x,y); 
+ 倾斜：skew(x,y); 

####  过渡

 CSS3 中的过渡（Transition）是指元素在发⽣变化时，可以指定⼀个时间让元素慢慢变化， ⽽不是瞬间改变，瞬间改变给⽤户的感觉太⽣硬，加⼀些过渡效果会有更好的⽤户体验。

 实现过渡也很简单，需要指定两⽅⾯的内容：⼀是需要过渡的 **CSS 属性**，⼆是效果**持续的时间**。

+ transition-property：指定过渡的 CSS 属性名； 
+ transition-duration：指定过渡时间，默认为 0； 
+ transition-timing-function：过渡时间的变化速度，默认为 ease； 
+ transition-delay：过渡何时开始，默认为 0。  

####   动画

 animation 也是⼀个简写形式，包含的动画属性有以下⼏个： 

+ animation-name：指定动画名称； 
+ animation-duration：指定动画时⻓； 
+ animation-timing-function：指定速度变化曲线，如⻉塞尔曲线； 
+ animation-delay：指定延迟时间； 
+ animation-iteration-count：指定动画播放次数，如 infinite 代表⽆限次。

####  CSS ⼯程化

 **预处理器：Less/Sass**

****它们普遍具有如下特性： 

+ 具有嵌套代码的能⼒； 
+ ⽀持模块化的引⽤； 
+ ⽀持定义 CSS 变量； 
+ 允许代码混⼊； 
+ 提供计算函数。

 **代码复⽤：变量和混⼊**

> [**Less在线编辑器**](https://lesscss.org/less-preview/#eyJjb2RlIjoiI2xpYigpIHtcbiAgICAuY29sb3JzKCkge1xuICAgICAgQHByaW1hcnk6IGJsdWU7XG4gICAgICBAc2Vjb25kYXJ5OiBncmVlbjtcbiAgICB9XG4gICAgLnJ1bGVzKEBzaXplKSB7XG4gICAgICBib3JkZXI6IEBzaXplIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLmJveCB3aGVuICgjbGliLmNvbG9yc1tAcHJpbWFyeV0gPSBibHVlKSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogKCR3aWR0aCAvIDIpO1xuICB9XG4gIFxuICAuYmFyOmV4dGVuZCguYm94KSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAjbGliLnJ1bGVzKDFweCk7XG4gICAgfVxuICB9IiwiYWN0aXZlVmVyc2lvbiI6IjQuMi4wIiwibWF0aCI6InBhcmVucy1kaXZpc2lvbiIsInN0cmljdFVuaXRzIjpmYWxzZX0=)

> [**Sass Playground**](https://sass-lang.com/playground/)

** 后处理器：PostCSS**

 PostCSS 可以完全忽略浏览器指定的前缀。在 预处理器将代码转换成 CSS 代码后，PostCSS 会监测到⼀些需要兼容的属性，并且⾃动在属性 前添加前缀，这是通过 autoprefixer 实现的。

####  动态值与响应式

 媒体查询是响应式的⼀种⽅案，CSS3 提供了多种⽅案可供选择。 

+ 使⽤ rem； 
+ 使⽤ vw 和 vh； 
+ 计算动态尺⼨。

###  
###  💡 JavaScript

> 页面运行的核心原理

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725707324022-f455e115-e7bb-4bf3-8883-3531d02f5672.png)

####  数据类型与函数

JavaScript 中的基本类型共 6 种（Symbol 为 ES6 新增类型），可以用 **typeof **关键字来判断。

 **Undefined **表示的是⼀个声明但未赋值的状态，具体包括以下⼏种： 

+ 声明⼀个变量未赋值； 
+ 访问对象不存在的属性； 
+ 函数定义了参数，但没有传参。  

 常⻅的**引⽤类型**分为以下⼏种： 

+ Object：对象
+ Array：数组 
+ Function：函数 
+ Date：时间 
+ RegExp：正则表达式



  **变量与作⽤域**

** J**avaScript 最基本的作⽤域机制：如果在当前作⽤域中找不到变量，那么 JavaScript 会“探出头”从⽗级作⽤域找，这类似于事件冒泡，⼀直找到最外层的作⽤域，但是永远不会从⼦级作⽤域 中寻找。  



 let 关键字特性： 

+ 相同变量名禁⽌重复声明
+ 不存在变量提升
+ 声明块级变量

 **变量提升**

 var 关键字声明的变量会被⾃动提升到当前作⽤域的顶层，结果是只要变量 被声明，不管是在前还是在后，访问都不会报错。

####  ⾯向对象

 **原型**（prototype）是⼀种设计模式，以⾃⼰独有的⽅式实现继承和复⽤。具体 来说，原型就是⼀个对象，也可称为原型对象。

+  构造函数有 prototype 属性，并且指向它的原型对象；
+  原型对象有 constructor 属性，并且指回构造函数；
+  实例有 __proto__ 属性，并且指向构造函数的原型对象。  

 **宏任务**和**微任务**的区别体现在以下两⽅⾯。 

+ 宏任务先执⾏，第⼀个宏任务就是全局代码，宏任务与微任务交替执⾏。 

+ 宏任务是⼀个⼀个地执⾏，微任务是⼀整列⼀次执⾏完毕。

  **执⾏上下⽂与 this**

 执⾏上下⽂主要分为 3 种。 

+ 全局上下⽂：全局代码所处的环境； 
+ 函数上下⽂：函数调⽤时创建的上下⽂； 
+ Eval上下⽂（⼏乎已经被废弃，只需要知道即可）。