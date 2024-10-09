<h1>🔍 新时代的 JavaScript</h1>


###  💡 ES6+

> 下一代语法标准

 ES6+ 是指从 ECMAScript 标准的第6个版本开始到⽬前为⽌所有的更新。ES6 是 JavaScript 语法的⼀个分⽔岭，从 ES6 开始，⼏平每年都会推出⼀个新版本，新增更多功能以应 对前端的变化。  

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725699417573-19274d9e-a18b-43a1-a7bd-fdc43ca868cb.png)

#### 变量与字符串扩展

> 关键字 let 和 const

 const 关键字⽤于声明常量，let 关键字⽤于声明局部变量 。

 ES6 提供了解构赋值， 相当于批量声明并读取某个对象的属性，编写更简洁， 解构赋值还可以对多层嵌套对象和数组起作⽤。   

####  字符串的扩展  

>  字符串操作包括但不限于拼接、截取、取 某个位置的值等。ES6 提供了许多字符串操作⽅法。  

+ includes()：判断字符串中是否包含某个字符。 
+ startsWith()：判断字符串是否以某个字符开头。 
+ endsWith()：判断字符串是否以某个字符结尾。
+ replaceAlI()：⽅法，利⽤该⽅法可以快速替 换所有内容。

ES6 提供的最强⼤的字符串功能当属模板字符串。模板字符串⽤反引号(``)标识，这不仅⼤简 化了字符串与变量的拼接，还提供了格式保留（如换⾏、缩进等），使字符串的使⽤和展示都⾮常 友好。 

####  对象的扩展

>  ES6 新增的属性、⽅法、特性不仅简化了数据操作的⽅ 式，还增强了数据操作的能⼒。

  ES5 要求在对象中定义属性和⽅法时必须采⽤ key:value 的⽅式。ES6 则允许在 key==value 时只使⽤⼀个属性，这是⼀种简化⽤法。 除了定义对象可以简化，读取对象的属性/⽅法也可以简化，⽽简化的⽅式就是解构赋值。

####  扩展运算符

>  扩展运算符（⽤“...”表示）

   使⽤该运算 符可以将对象中的“剩余属性”另存到⼀个新对象中。剩余属性是指原对象中未显式解构的属性/⽅ 法。

>  扩展运算符必须在对象的所有属性之后，否则 Javascript 会解析错误。

---

###  💡 Node.js

> 服务端的JavaScript

 Node.js 就是服务端的 JavaScript。

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725699437024-51e7c754-bf29-49cc-801f-8ac6ecb81a07.png)

####  使⽤ node 命令创建 Node.js 环境有以下两种⽅式。 

+ 运⾏脚本⽂件； 
+ 使⽤命令⾏交互（ REPL ）。

#### Node.js 由各种各样的软件包组成，这些软件包统称为模块。Node.js 中的模块分为以下两⼤ 类。 

+ 内置模块。 
+ 第三⽅模块。

 **path 模块**

  path 模块⽤于对路径和⽂件进⾏处理。在 macOS、Linux 和 Windows 3 种系统中，路径的 表示⽅法并不⼀致。在 Windows 系统中使⽤ “\” 作为分隔符，⽽在 Linux 系统中使⽤“/”作为分 隔符。

 **fs 模块**

   fs 模块是⽂件系统模块，封装了⽂件操作的能⼒。使⽤ fs 模块可以实现⽂件的创建、修改和 删除。

 **http 模块**

 http 模块提供了极其简单的⽅式来创建 HTTP Web 服务器

####  Npm 包管理

 npm 命令⽤于便捷地管理 Npm 托管的第三⽅软件包，并且使⽤不同的参数实现不同的功能 Npm 包的依赖信息记录在 package.json ⽂件中。

**Npm 包的基础命令**

+ npm update：更新所有依赖包 
+ npm list：查看安装的依赖包 
+ npm install：安装所有依赖包 
+ npm install [pkname]:[version]：安装某个固定版本的模块 

**package.json ⽂件解析重要的配置项**

+ name：应⽤程序/软件包的名称； 
+ version：当前版本号； 
+ description：应⽤程序/软件包的描述； 
+ main：应⽤程序的⼊⼝点； 
+ scripts：定义⼀组命令； 
+ dependencies：第三⽅依赖列表； 
+ devDependencies：第三⽅开发依赖列表。

####    环境与环境变量

 环境由某种应⽤程序创建，从本质上来说操作系统是⼀个巨⼤的应⽤程序，因此环境⼀般分为 两⼤类：

+  系统环境：在操作系统（如 linux、macOS）启动后创建。  
+  应⽤环境：在应⽤程序 (如 Node.js )启动后创建。

 Node.js 环境变量存储在 process.env 对象中。最常⽤的⼀个环境变量是 **NODE ENV**，表示 当前环境，其判断规则如下：  

```java
process.env.NODE_ENV ='development' // 开发环境
process.env.NODE_ENV=='production' // ⽣产环境
```

 **设置环境变量**

```java
process.env.baseURL = 'https://api.xxx.com'
console.log(process.env.baseURL) // 'https://api.xxx.com'
```

---

###  💡 TypeScript

> 支持类型的JavaScript

:::color1
TypeScript自动编译

:::

 在 VSCode 中按下 Ctrl+Shift+B ，选择 ts c: watch - tsconfig.json 选项，就会在修改代码时⾃动编译，然后直接运⾏新的编译的 js ⽂件即可。  

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725699458443-e53bec5a-8038-4f21-84d3-3971f4b3d013.png)

#### 基本数据类型

TypeScript 提供了丰富的**类型**以应对不同的场景。其中最常⽤的 8 个类型如下。 

string：字符串 number：

+ 数值 boolean：
+ 布尔值 null：Null 
+ undefined：Undefined 
+ symbol：Symbol 
+ type[]：数组 
+ object：对象

#### ** 联合类型**

** **联合类型⽤符号“|”将多个类型连接起来

#### ** 接口**

 TypeScript 提供了⼀个叫作“接⼝”的类型，⽤关键字 interface 表示，专⻔⽤来设置 JSON 对象的类型。通过 interface 可以定义对象的属性名、属性是否可选和属性值的类型等。

>  使⽤ interface 的好处在于，在使⽤⼀个对象时，可以很清楚地知道对象具有哪些属性。为⼀ 个变量指定 interface 类型，在使⽤这个变量时，编辑器就会⾃动提示，⾮常⽅便。

#### **泛型**

** 1）泛型函数**

泛型函数允许我们编写类型安全的代码，同时可以在函数调⽤时指定类型。** **

**2）泛型接⼝**

可以使⽤泛型定义接⼝，以⽀持多个类型。

 **3) 泛型类**

 泛型类允许类的属性和⽅法⽀持多种类型。

**4）泛型约束**

 可以使⽤泛型约束来限制泛型的类型范围。

**5) 泛型默认类型**

可以为泛型参数提供默认类型。

####  装饰器 

+ 类装饰器：类装饰器⽤于修改类的⾏为或为类添加元数据。
+ ⽅法装饰器：⽅法装饰器可以⽤来修改或扩展⽅法的⾏为。
+ 属性装饰器：属性装饰器可以⽤来初始化或修改类的属性。
+ 参数装饰器：参数装饰器可以⽤来记录⽅法参数。

#### tsconfig.json

tsconfig.json ⽂件中的⼏个主要配置项如下：  

```java
{
    "compileOnSave": true,
    "include": [],
    "exclude": [],
    "compilerOptions": {}
}
```

+ compileOnSave：是否在⽂件保存时⾃动编译。 
+ include：指定哪些⽬录/⽂件会被编译。 
+ exclude：指定哪些⽬录/⽂件不会被编译。 

这 3 个配置项确定了 tsc 编译器需要编译哪些⽂件；第 4 个配置项 compilerOptions 表示详 细的编译规则，并且是重中之重。compilerOptions 配置项包含的属性如下。 

+ target：编译后的 ES 版本，可选值有 ES3（默认值）、ES5、ES6 和 ESNEXT 等。
+ module：编译后的模块标准，可选值有 CommonJS 和 ES6。 
+ baseUrl：重要，模块的基本路径。paths：重要，设置基于 baseUrl 的模块路径。 
+ allowJs：是否允许编译 JavaScript ⽂件，默认值为 false。
+ checkJs：是否检查和报告 JavaScript ⽂件中的错误，默认值为 false。
+ sourceMap：是否⽣成 .map ⽂件。 
+ strictNullChecks：是否严格检查 null 和 undefined。  