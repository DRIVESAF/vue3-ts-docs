## 🗺任务清单

> 任务详情

+ <font style="background:#F6E1AC;color:#664900">1</font> 跟踪调试
+ <font style="background:#DBF1B7;color:#2A4200">2</font> 日志管理
+ <font style="background:#C0DDFC;color:#00346B">3</font> 模板引擎Thymeleaf



## 👣 跟踪调试

### 💡Spring Boot 跟踪调试：main方法启动

在Spring Boot应用程序中，通过`main`方法启动应用非常常见，通常可以通过以下步骤来跟踪调试：

+ **设置断点**：在`main`方法或其他需要调试的地方设置断点。
+ **启动调试模式**：使用IDE（如 IntelliJ IDEA 或 Eclipse）的调试模式运行应用程序。以IntelliJ为例，右键点击`main`方法，选择“Debug”选项。
+ **观察执行流程**：通过断点、变量监视、逐步执行（Step Over, Step Into）等功能来查看应用的启动过程和逻辑。

```java
@SpringBootApplication
public class MySpringBootApp {
    public static void main(String[] args) {
        SpringApplication.run(MySpringBootApp.class, args);
    }
}

```

### 💡Spring Boot 跟踪调试：Maven插件启动

>  mvn spring-boot:run  

### 💡Spring Boot 开发者工具集成

Spring Boot开发者工具（Developer Tools，DevTools）可以帮助提高开发效率，主要功能包括热重载、LiveReload、自动重启等。

**集成方法**： 在`pom.xml`中添加以下依赖：

```xml
<dependencies>
 <!-- Spring Boot Starter Web -->
 <dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-web</artifactId>
 </dependency>
 <!-- Spring Boot DevTools -->
 <dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-devtools</artifactId>
 <scope>runtime</scope>
 <optional>true</optional>
 </dependency>
 <!-- Spring Boot Starter Test -->
 <dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-test</artifactId>
 </dependency>
</dependencies>
```

### 💡Spring Boot 开发者工具默认配置

Spring Boot DevTools启用后，会有一些默认的行为配置：

+ **自动重启**：默认情况下，修改类和资源文件后会自动重启应用。
+ **LiveReload**：集成了LiveReload服务，当静态资源（如HTML、CSS等）发生变更时，会自动刷新浏览器页面。
+ **缓存禁用**：在开发环境下禁用一些缓存（如模板引擎的缓存）。

可以通过`application.properties`进行部分配置修改：

```xml
# 禁用LiveReload
spring.devtools.livereload.enabled=false
# 修改重启间隔时间
spring.devtools.restart.poll-interval=1000

```

### 💡 Spring Boot 项⽬⾃动构建

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1726187590594-039a7be3-8ac0-4a2f-b86a-6806d24ddb31.png)

### 💡Spring Boot 热更新

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1726187454817-ee735e6e-6081-4734-a321-d76326dc487d.png)

### 💡Spring Boot 开发者工具全局配置

 DevTools 提供了全局配置的选项，允许在多个项目之间共享某些开发配置。你可以在用户主目录中创建`.spring-boot-devtools.properties`文件，设置一些跨项目的默认行为。  

### 💡断点调试

 通过设置断点，程序会在指定的代码行暂停执行。当程序运行到断点处时，执行会自动暂停，你可以查看当前的变量状态、堆栈信息。  

 在调试窗口中，查看当前变量的值，并可以通过右键点击变量来修改其值，或添加监视表达式（watch expression）来观察特定的值变化。  

## **<font style="color:rgb(38, 38, 38);">📑日志管理</font><font style="color:rgb(38, 38, 38);"></font>**

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1726191371632-e36ecb53-4da5-498d-82c0-d071c0b9ec10.png)

+ 日志是开发者通过手动编写日志语句，将程序的执行信息记录到控制台或日志文件中。
+ 日志信息会一直记录下来，供开发者在调试时参考，即使程序已经运行完毕，日志也依然可用。
+ 日志可以用于生产环境，不需要暂停或中断程序执行。

### 💡日志框架

常见的日志框架：

+ **SLF4J**（ Spring Boot 默认  ）：通用的日志接口，提供对多种日志实现的支持。
+ **Logback**：高效、灵活的日志框架，Spring Boot 默认使用。
+ **Log4j2**：功能强大的日志框架，支持异步日志和高级配置。
+ **Java Util Logging (JUL)**：JDK 自带的简单日志框架。

### 💡日志格式

日志格式决定了日志输出的具体内容和布局。默认情况下，Spring Boot 日志输出的格式为：

```xml
2023-09-13 12:00:00 INFO  [main] c.example.MyClass - Log message here

```

日志格式的主要字段包括：

+ **时间戳**：日志生成的时间。
+ **日志级别**：如 `INFO`、`DEBUG`、`ERROR`。
+ **线程名称**：记录日志的线程。
+ **日志源**：日志消息的产生类（包路径+类名）。
+ **日志消息**：实际的日志内容。

可以通过修改 `logback-spring.xml` 或 `logback.xml` 文件自定义日志格式。例如：

```xml
<encoder>
  <pattern>%d{yyyy-MM-dd HH:mm:ss} %-5level [%thread] %logger{36} - %msg%n</pattern>
</encoder>

```

### 💡控制台日志

 Spring Boot 默认将日志输出到 **控制台**，控制台日志便于开发人员实时查看程序运行状态。你可以通过 `application.properties` 文件来配置控制台日志的级别和格式。  

### 💡日志文件

日志不仅可以输出到控制台，也可以保存到 **日志文件**。Spring Boot 使用 Logback 时可以简单地将日志输出到文件中。可以通过 `application.properties` 配置日志文件的输出路径：

```xml
logging.file.name=logs/app.log
logging.file.path=/var/logs/myapp
```

### 💡日志级别

Java日志通常可以分为:error、warn、info、debug、trace五个级别。

+ error：问题已经影响到软件的正常运行，并且软件不能自行恢复到正常的运行状态，此时需要输出该级别的错误日志。
+ warn：与业务处理相关的失败，此次失败不影响下次业务的正常执行，通常的结果为外部的输入不能获得期望的结果。
+ info：系统运行期间的系统运行状态变化，或者关键业务处理记录等，用户或者管理员在系统操作运行期间关注的一些信息。
+ debug：软件调试信息，开发人员使用该级别的日志发现程序运行中的一些问题，排查故障。
+ trace：基本同上，但是显示的信息更详尽。

### 💡日志分组

 日志分组（Log Grouping）是指将不同的日志按照逻辑模块或特定的类进行分组管理。这可以通过包名或类名指定不同的日志级别或输出目的地。

```xml
logging.level.org.springframework=INFO
logging.level.com.example.service=DEBUG
```

### 💡日志归档

日志归档用于管理历史日志文件，避免日志文件过大。Logback 支持基于时间和文件大小的日志归档功能。

示例配置（`logback-spring.xml`）：

```xml
<appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
  <file>./logs/spring-boot-log.log</file>
  <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
    <!-- 定义文件名模式和归档规则 -->
    <fileNamePattern>./logs/spring-boot-log-%d{yyyy-MM-dd}.log</fileNamePattern>
    <!-- 保留最多 10 个历史日志文件 -->
    <maxHistory>10</maxHistory>
  </rollingPolicy>
  <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
    <!-- 每个文件最大 1MB -->
    <maxFileSize>1MB</maxFileSize>
  </triggeringPolicy>
  <encoder>
    <!-- 文件输出格式 -->
    <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger : %msg%n</pattern>
  </encoder>
</appender>
```

### 💡日志配置文件

Spring Boot 支持多种日志配置文件：

+ `logback-spring.xml` 或 `logback.xml`（Logback 配置）
+ `log4j2-spring.xml` 或 `log4j2.xml`（Log4j2 配置）

这些文件位于 `src/main/resources` 目录下，Spring Boot 会自动加载它们。通过这些文件，可以详细配置日志格式、日志级别、输出路径等。

### 💡切换日志框架

Spring Boot 默认使用 Logback，但你可以切换到其他日志框架，比如 Log4j2。切换步骤如下：

1. 在 `pom.xml` 中排除 Logback 依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-logging</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

2.  添加 Log4j2 依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>

```

3.  配置 `log4j2.xml` 文件，设置 Log4j2 的日志输出格式、级别等。  

### 💡彩色日志

 彩色日志可以帮助开发人员更直观地分辨日志的不同级别。Spring Boot 默认在控制台日志中启用彩色输出。  

```xml
<encoder>
    <!-- 控制台输出格式 -->
    <pattern>%yellow(%d{yyyy-MM-dd HH:mm:ss}) %green([%thread]) %highlight(%-5level) %boldMagenta(%logger{10}) - %cyan(%msg%n)</pattern>
</encoder>
```

## 🔍模板引擎Thymeleaf  

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1726191338229-78a8977e-f186-46d6-a881-4ac73682d4b5.png)

### 💡基本概念

**Thymeleaf** 是一个现代的 Java 模板引擎，用于处理和渲染服务器端 HTML、XML 文档。它特别适用于 Web 应用程序中的视图层，与 Spring Framework（特别是 Spring Boot）集成良好。Thymeleaf 的设计目标是能够在开发时和生产环境中都有效地工作，支持丰富的模板功能和良好的性能。

#### Thymeleaf 的**主要特点**如下： 

1. **与 HTML 兼容**：Thymeleaf 模板⽂件使⽤标准的 HTML5 语法，这意味着即使没有服务器⽀ 持，Thymeleaf 模板也能在浏览器中直接显示静态⻚⾯。因此，设计师和开发者可以共享同 ⼀个 HTML ⽂件，进⾏⽆缝协作；
2. **易于集成**：Thymeleaf 与 Spring Framework（特别是 Spring Boot）⽆缝集成。它可以直接 通过 Spring MVC 传递的数据模型渲染动态内容； 
3. **服务器端模板**：Thymeleaf 是服务器端模板引擎，意味着所有的模板解析和渲染⼯作在服务 器端进⾏，⽣成的最终 HTML 被发送到客户端浏览器； 
4. **⽀持多种内容格式**：除了 HTML，Thymeleaf 还⽀持 XML、⽂本、JavaScript 和 CSS 等多 种格式。 
5. **丰富的内置功能**：Thymeleaf 提供了很多内置的功能和语法，⽐如条件判断、循环、国际化 ⽀持、模板继承等，极⼤地简化了动态⻚⾯的⽣成。  

#### Thymeleaf 的基本语法主要包括以下几个方面：

1. **表达式语言**  
   变量表达式：`${...}` 用于从上下文中获取并显示变量的值。  
   文本表达式：用于动态设置 HTML 元素的文本内容。  
   属性表达式：用于动态设置 HTML 元素的属性值。
2. **条件判断**

+ `**th:if**`：条件判断，如果条件为 `true`，则渲染该元素。
+ `**th:unless**`：条件判断，如果条件为 `false`，则渲染该元素。

3. **循环**  
   `th:each`：用于遍历集合或数组，生成列表项或其他重复元素。
4. **模板布局**

+ `**th:fragment**`：定义可重用的片段或模板部分。
+ `**th:replace**` 和 `**th:include**`：用于引入和替换模板片段。

5. **文本和属性**

+ `**th:text**`：设置 HTML 元素的文本内容。
+ `**th:attr**`：设置或修改 HTML 元素的属性值（如 `href`、`src`）。

6. 国际化

   `#messages`：用于访问国际化消息，支持多语言环境。

7. 操作和计算  
   `th:with` ：在局部范围内定义变量并进行计算。  
   `th:object` ：用于指定数据绑定的对象。

8. 注释

   `<!-- th:comment="..." -->` Thymeleaf 注释，不会被渲染到最终的 HTML 页面中。

### 💡扩展功能

1. **使⽤数据库**：将任务列表存储在数据库中，⽽不是内存中；
2. **任务优先级**：为每个任务添加优先级，并根据优先级排序任务；
3. **任务截⽌⽇期**：为任务添加截⽌⽇期，并显示离截⽌⽇期最近的任务；
4. **分⻚显示**：当任务数量较多时，可以实现分⻚功能。

