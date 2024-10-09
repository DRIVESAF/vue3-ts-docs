# SpringBoot与IDEA
<h2 id="d1P7K">🗺任务清单</h2>

> 任务详情

+ <font style="background:#F6E1AC;color:#664900">1</font> 掌握基本概念和起步操作
+ <font style="background:#DBF1B7;color:#2A4200">2</font> 学习 JDK 重要且有用的新特性
+ <font style="background:#C0CAFC;color:#101E60">3</font>  IDEA 安装开发必备插件
+ <font style="background:#C0DDFC;color:#00346B">4</font> 学习项目和学习笔记

<h2 id="vkz3U">👣 掌握基本概念和起步操作</h2>
<h3 id="CBXbP">Spring boot 基本概念</h3>
<h5 id="sFgkK"> Spring Boot 基本介绍  </h5>

<font style="color:rgb(25, 30, 30);">Spring Boot 帮助你创建可以运行的独立的、基于 Spring 的生产级应用程序。 我们对 Spring 平台和第三方库有自己的看法，因 这样你就能以最少的麻烦开始工作。 大多数 Spring Boot 应用程序只需要很少的Spring配置。</font>

<font style="color:rgb(25, 30, 30);">你可以使用 Spring Boot 来创建Java应用程序，可以通过使用 </font>`java -jar`<font style="color:rgb(25, 30, 30);"> 或更传统的 war 部署来启动。</font>

<h5 id="Q4nmb"><font style="color:rgb(25, 30, 30);">  Spring Boot 基本特性  </font></h5>

+  创建独立的 Spring 应用程序
+  直接嵌入 Tomcat、Jetty 或 Undertow（无需部署 WAR 文件）
+  提供自定义的“启动器”依赖项来简化您的构建配置
+  尽可能自动配置 Spring 和第三方库
+  提供可用于生产的功能，例如指标、健康检查和外部化配置
+  完全无需代码生成，也无需 XML 配置  

<h5 id="ezKJt"> 组件关系  </h5>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725539795983-7c78c0a9-c7c2-4058-aec6-de7daa1a9066.png)

<h5 id="GOgpb"> Spring Boot 版本选择  </h5>

+ **CURRENT **：  表示最新的 GA 版本，说明它就是⽬前最新的可⽤发⾏版本。  
+ **GA**：正式版本，表示⼀般可⽤的版本 ，GA 版本号⼀般不会带任何标识后缀
+ **SNAPSHOT**：快照版本，如果发现 BUG，也会在当前 SNAPSHOT 快照版本中修复。快照版本是最新测试版本，可能包含⼤量的 BUG，开发者可以拿来学习研究使 ⽤，强烈不建议⽤于⽣产项⽬。    
+ **PRE**：预览版本，预览版本⼜有两个不同的阶段：里程碑版本如`3.3.0-M1`，候选发行版本如`3.3.0-RC1`。

<h5 id="NK0O4"> Spring Boot 3 新特性</h5>

+  基于 Java 17 的⽀持
+  原⽣（Native）应⽤⽀持  
+  模块化⽀持增强
+  Spring AOT (Ahead-of-Time) 编译
+  Spring Framework 6 的兼容性
+  Jakarta EE 9+ ⽀持
+  . 观测性（Observability）增强
+  安全性改进
+  配置和属性改进
+  废弃和删除的特性
+  性能优化和现代化改进

<h3 id="eI4XJ"> 起步操作</h3>

+  Spring 提供了⼀站式⽣成 Spring 应⽤的⽹站：[Spring Initializr](https://start.spring.io/)

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725541189210-27f47a41-e05e-4cc2-a23a-5b784b3dff0e.png)

+ 在idea里创建项目

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542224925-e98c5629-7933-4918-9af8-5f9f9709beaf.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542198182-d1836ad5-8750-4177-aa02-0185f0e32460.png)

 编写 Spring Boot 接⼝，如果在⽣成项⽬时没有选择 spring-boot-starter-web 依 赖，则需要⼿动导⼊ ：

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

<h2 id="tSgue">🚀 学习 JDK 重要且有用的新特性</h2>

:::color1

<h4 id="MaBMQ"> 利用 `sealed` 类实现继承层次控制 </h4>

:::

> 在 Java 中，类继承是一个非常强大的特性，它允许我们创建一个类（子类）来扩展另一个类（父类）。然而，这种自由的继承机制有时也会导致问题，比如不可控的继承层次结构，这可能会使得代码难以维护和理解。
>
> 密封类就是为了解决这个问题而设计的。它使用 sealed 关键字来限制哪些类可以继承一个特定的类，<font style="color:rgb(180, 180, 180) !important;background-color:rgb(36, 36, 41) !important;">使用 </font>`<font style="color:rgb(180, 180, 180) !important;background-color:rgb(64, 64, 65) !important;">permits</font>`<font style="color:rgb(180, 180, 180) !important;background-color:rgb(36, 36, 41) !important;"> 关键字来指定哪些类可以作为密封类的子类。</font>
>
> 这意味着你可以明确指出，只有特定的几个类可以作为某个类的子类。

<h4 id="99415306">目标：</h4>

掌握 JDK 17 引入的 `sealed` 类特性，用于控制类的继承层次结构，增强代码的安全性和可维护性。

<h4 id="6343c463">任务描述：</h4>

1. **场景设定**：假设你正在开发一个银行系统，需要表示不同类型的账户（如储蓄账户、信用账户等），并希望限制其他类继承这些账户类型。
2. **要求**：
   - 使用 `sealed` 类来定义一个基础账户类，并限制其子类。
   - 定义几个具体的账户子类，如 `SavingsAccount` 和 `CreditAccount`。
   - 在服务层中创建账户对象，并返回账户信息。

<h4 id="c23c70c9">关键步骤：</h4>

1. 定义一个 `Account` 类作为基础账户类，并将其标记为 `sealed`。
2. 定义具体账户类型，限制只有特定子类可以继承 `Account`。
3. 创建服务类，返回不同账户类型的信息。

<h4 id="6630cff5">示例代码：</h4>

首先，定义一个 `Account` 基础类，并限制其继承层次：

```java
public sealed class Account permits SavingsAccount, CreditAccount {
    private final String accountNumber;
    private final double balance;

    public Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }
}
```

然后，定义两个具体的账户子类 `SavingsAccount` 和 `CreditAccount`：

```java
public final class SavingsAccount extends Account {
    public SavingsAccount(String accountNumber, double balance) {
        super(accountNumber, balance);
    }
}

public final class CreditAccount extends Account {
    public CreditAccount(String accountNumber, double balance) {
        super(accountNumber, balance);
    }
}
```

接着，创建一个服务类 `AccountService`，返回账户信息：

```java
@Service
public class AccountService {
    public List<Account> getAccounts() {
        return List.of(
            new SavingsAccount("SA123", 1500.00),
            new CreditAccount("CA456", 3000.00)
        );
    }
}
```

最后，创建一个 Spring Boot 控制器 `AccountController`：

```java
@RestController
@RequestMapping("/accounts")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public List<Account> getAccounts() {
        return accountService.getAccounts();
    }
}
```

启动应用，访问：http://localhost:8080/accounts

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542677415-7a07cd14-0c73-49dd-b9d1-f2589e670b64.png)

---

:::color1

<h4 id="JxHRN"> 利用 `instanceof` 简化类型转换   </h4>

:::

> <font style="color:rgb(77, 77, 77);">Java 14中的</font>`<font style="color:rgb(77, 77, 77);">instanceof</font>`<font style="color:rgb(77, 77, 77);">模式匹配引入了</font>`<font style="color:rgb(77, 77, 77);">instanceof</font>`<font style="color:rgb(77, 77, 77);">运算符的模式变量。 如果</font>`<font style="color:rgb(77, 77, 77);">instanceof</font>`<font style="color:rgb(77, 77, 77);">条件为true，则模式变量将绑定到要比较的变量，从而避免了显式强制转换以使用其成员的需要。</font>

<h4 id="UZyvG"><font style="color:rgb(77, 77, 77);">目标：</font></h4>

<font style="color:rgb(77, 77, 77);">掌握 JDK 16 引入的 </font>`<font style="color:rgb(77, 77, 77);">instanceof</font>`<font style="color:rgb(77, 77, 77);"> 特性，用于简化类型转换代码，提高代码的可读性和安全性。</font>

<h4 id="klLVW"><font style="color:rgb(77, 77, 77);">任务描述：</font></h4>

1. **场景设定**<font style="color:rgb(77, 77, 77);">：假设你正在开发一个用户管理系统，需要根据不同用户类型执行不同的操作。系统中有多个用户子类，如管理员用户（AdminUser）和普通用户（RegularUser），你需要根据类型执行不同的逻辑。</font>
2. **要求**<font style="color:rgb(77, 77, 77);">：</font>
   - <font style="color:rgb(77, 77, 77);">使用 </font>`<font style="color:rgb(77, 77, 77);">Pattern Matching for instanceof</font>`<font style="color:rgb(77, 77, 77);"> 来简化类型检查和转换。</font>
   - <font style="color:rgb(77, 77, 77);">创建一个 Spring Boot REST API，根据传入的用户类型返回不同的响应。</font>

<h4 id="Vz3Gi"><font style="color:rgb(77, 77, 77);">关键步骤：</font></h4>

1. <font style="color:rgb(77, 77, 77);">定义一个 </font>`<font style="color:rgb(77, 77, 77);">User</font>`<font style="color:rgb(77, 77, 77);"> 基类，并创建多个子类如 </font>`<font style="color:rgb(77, 77, 77);">AdminUser</font>`<font style="color:rgb(77, 77, 77);"> 和 </font>`<font style="color:rgb(77, 77, 77);">RegularUser</font>`<font style="color:rgb(77, 77, 77);">。</font>
2. <font style="color:rgb(77, 77, 77);">在控制器中使用 </font>`<font style="color:rgb(77, 77, 77);">Pattern Matching for instanceof</font>`<font style="color:rgb(77, 77, 77);"> 来处理不同类型的用户。</font>
3. <font style="color:rgb(77, 77, 77);">创建 REST API，接受用户对象并返回不同的响应。</font>

<h4 id="EzILp"><font style="color:rgb(77, 77, 77);">示例代码：</font></h4>
<h5 id="1795fbd0"><font style="color:rgb(77, 77, 77);">1. 定义用户类和子类</font></h5>

```java
public abstract class User {
    private final String username;

    public User(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}

public class AdminUser extends User {
    private final String adminCode;

    public AdminUser(String username, String adminCode) {
        super(username);
        this.adminCode = adminCode;
    }

    public String getAdminCode() {
        return adminCode;
    }
}

public class RegularUser extends User {
    private final int loyaltyPoints;

    public RegularUser(String username, int loyaltyPoints) {
        super(username);
        this.loyaltyPoints = loyaltyPoints;
    }

    public int getLoyaltyPoints() {
        return loyaltyPoints;
    }
}
```

<h5 id="9fe40d26"><font style="color:rgb(77, 77, 77);">2. 创建服务类 </font>`<font style="color:rgb(77, 77, 77);">UserService</font>`</h5>

```java
@Service
public class UserService {

    public String processUser(User user) {
        if (user instanceof AdminUser adminUser) {
            return "Admin " + adminUser.getUsername() + " with code " + adminUser.getAdminCode();
        } else if (user instanceof RegularUser regularUser) {
            return "User " + regularUser.getUsername() + " with " + regularUser.getLoyaltyPoints() + " points";
        } else {
            return "Unknown user type";
        }
    }
}
```

<h5 id="4304e8e7"><font style="color:rgb(77, 77, 77);">3. 创建控制器 </font>`<font style="color:rgb(77, 77, 77);">UserController</font>`</h5>

```java
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/process")
    public String processUser(@RequestParam String type, @RequestParam String username) {
        User user;
        if ("admin".equalsIgnoreCase(type)) {
            user = new AdminUser(username, "ADM001");
        } else if ("regular".equalsIgnoreCase(type)) {
            user = new RegularUser(username, 100);
        } else {
            return "Invalid user type";
        }
        return userService.processUser(user);
    }
}
```

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542721338-c6cd89b9-aaea-4a18-8583-1a470deee682.png)

<h2 id="ZXHyS">🔍 IDEA安装开发必备插件 </h2>
<h4 id="nTBM3">**<font style="color:rgb(79, 79, 79);">Json Parser</font>**</h4>

> **<font style="color:rgb(79, 79, 79);">Json Parser </font>**<font style="color:rgb(77, 77, 77);">是一个用于验证和格式化 JSON 字符串的轻量级插件。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725518540164-75d40f88-e58c-4b42-9b5b-e83efe41b67a.png)**<font style="color:rgb(79, 79, 79);"></font>**

<h4 id="NeduD">**<font style="color:rgb(79, 79, 79);">GitToolBox </font>**</h4>

> <font style="color:rgb(51, 51, 51);">可以增强 Git 的能力，如git状态、自动获取、内嵌归因和许多其他功能。能在项目上提示你还有</font>**<font style="color:rgb(51, 51, 51);">多少文件没提交</font>**<font style="color:rgb(51, 51, 51);">，远程还有</font>**<font style="color:rgb(51, 51, 51);">多少文件没更新下来</font>**<font style="color:rgb(51, 51, 51);">,还能在每一行代码上提示</font>**<font style="color:rgb(51, 51, 51);">上次提交的时间</font>**<font style="color:rgb(51, 51, 51);">。这在查版本提交问题的时候尤其方便。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542045604-443ea617-d303-4b03-86ce-97c49e0d8c5a.png)

<h4 id="BZYsq"><font style="color:rgb(79, 79, 79);">Atom Material Icons</font></h4>

> **<font style="color:rgb(79, 79, 79);">Atom Material Icons </font>**<font style="color:rgb(77, 77, 77);">使用 Atom 文件图标，可以根据文件类型来改变图标。这样可以让 IDE 更加美观易读，提高可见性。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725538623612-ac00f592-d880-42dd-86f3-8717de34baa3.png)

<h4 id="bIzvq"><font style="color:rgb(79, 79, 79);">CodeGlance</font></h4>

> **<font style="color:rgb(79, 79, 79);">CodeGlance</font>**<font style="color:rgb(77, 77, 77);">是一款在编辑器右侧显示代码结构概览的插件，可以帮助开发者更快地定位代码位置。插件支持多种编程语言，且界面简洁易用。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725538898836-a6d03f45-95de-4842-b282-093f2b2649a2.png)

**<font style="color:rgb(38, 38, 38);">📑</font>****<font style="color:rgb(38, 38, 38);">学习项目和学习笔记</font>**

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725542494829-07fb7644-c82e-4553-8a73-c2b143059039.png)

<h3 id="lk78I">关于 JDK16 引入的新特性 Records</h3>

**Record** 是一种特殊的类， ⽤于简化数据传输对象（DTO）的创建，提⾼代码 简洁性和可读性。    

---

```java
public record BookDTO(Long id, String title, String author, double price) {
    public BookDTO {
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
    }
}
```

+ 该 `BookDTO` 类包含 `id`、`title`、`author` 和 `price` 属性，并自动生成构造方法和其他辅助方法。
+ 构造方法中通过 `if` 语句来校验书籍价格是否为负数，确保数据的合法性。

---

```java
 import org.springframework.stereotype.Service; 
import java.util.List;
@Service 
public class BookService { 
    public List getAllBooks() { 
        return List.of( 
            new BookDTO(1L, "Java Programming", "Alice", 29.99),
            new BookDTO(2L, "Spring Boot in Action", "Bob", 34.99) ); 
    } 
} 
```

`BookService` 返回一个 `List` 类型的 `BookDTO` 列表，包含两本书的示例数据。

`List.of()`<font style="color:rgb(77, 77, 77);">是 Java 9 引入的一个静态方法，用于创建不可变的列表（</font>`<font style="color:rgb(77, 77, 77);">ImmutableList</font>`<font style="color:rgb(77, 77, 77);">）。这意味着一旦使用 </font>`<font style="color:rgb(77, 77, 77);">List.of()</font>`<font style="color:rgb(77, 77, 77);"> 创建了列表，你就不能向其中添加、删除或修改元素。最多可以放十个元素。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33728566/1725543812143-cca5fad9-aa66-433a-824f-34b19ca9a922.png)

---

```java
@RestController
@RequestMapping
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping
    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }
}
```

**@RestController**

+ 这是一个组合注解，等价于 `@Controller` 和 `@ResponseBody`。
+ `**@Controller**` 表示该类是一个控制器，会接收来自客户端的 HTTP 请求。
+ `**@ResponseBody**` 使得返回的对象会自动序列化为 JSON 格式，并直接写入到 HTTP 响应体中。
+ 因此，这个注解告诉 Spring Boot，这个类将处理 RESTful API 请求，并返回 JSON 数据。

`**BookService bookService**`** 依赖注入 **

+ `BookController` 使用构造函数注入的方式接收 `BookService` 对象。通过这种方式，`BookService` 实例被注入到控制器中，控制器可以调用其方法来获取数据。
+ **依赖注入** 是 Spring 的核心功能之一，它允许在控制器中使用服务层逻辑而无需手动创建对象。

** @GetMapping**

+ `@GetMapping` 是一个专门处理 HTTP GET 请求的注解。它表示这个方法会处理对根路径 `/` 的 GET 请求。
+ 这个方法调用了 `bookService.getAllBooks()` 来获取所有书籍的数据。
+ 返回值是一个 `List<BookDTO>`，其中 `BookDTO` 是数据传输对象（DTO），表示书籍的信息。Spring 会将这个列表自动序列化为 JSON 格式，作为响应发送回客户端。

<h3 id="TWqiC"> Switch Expressions 实现⾼级路由逻辑</h3>

 JDK 12 引⼊的 **Switch Expressions** ，实现更简洁和强⼤的路由逻辑， 并在 Spring Boot 中使⽤它来决定不同的服务处理逻辑。

```java
public enum RequestType {
    QUERY,
    COMPLAINT,
    SUGGESTION
}
```

​    

+ **枚举（Enum）** 定义了三种请求类型：查询 (`QUERY`)、投诉 (`COMPLAINT`) 和建议 (`SUGGESTION`)。枚举是一种特殊的类，用于表示固定数量的常量值。

---

```java
import org.springframework.stereotype.Service;
@Service
public class CustomerService {
    public String handleRequest(RequestType requestType) {
        return switch (requestType) {
            case QUERY -> handleQuery();
            case COMPLAINT -> handleComplaint();
            case SUGGESTION -> handleSuggestion();
        };
    }

    private String handleQuery() {
        return "Handling user query...";
    }

    private String handleComplaint() {
        return "Handling user complaint...";
    }

    private String handleSuggestion() {
        return "Handling user suggestion...";
    }
}
```

+ `**@Service**` 注解：标记 `CustomerService` 为 Spring 的一个服务组件。Spring 会自动管理其生命周期，并可以在控制器中注入使用。
+ `**handleRequest(RequestType requestType)**` 方法：通过 `Switch Expressions` 实现请求的路由逻辑。
+ `switch (requestType)` 表达式基于 `RequestType` 来决定调用哪个处理方法。
+ **JDK 12 的 **`**Switch Expressions**`** 特性**：相比传统的 `switch` 语句，`Switch Expressions` 更简洁，且支持返回值。使用箭头（`->`）语法，无需 `break`。
+ `handleQuery()`、`handleComplaint()`、`handleSuggestion()`：分别处理用户的查询、投诉和建议请求，每个方法返回一条对应的响应消息。

---

```java
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/requests")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/{type}")
    public String handleRequest(@PathVariable RequestType type) {
        return customerService.handleRequest(type);
    }
}
```

+ `**@RestController**`：表示该类是一个 REST 控制器，用于处理 HTTP 请求，并返回 JSON 或字符串形式的响应。
+ `**@RequestMapping("/requests")**`：将所有的请求路径 `/requests` 映射到该控制器。
+ `**@GetMapping("/{type}")**`：处理对 `GET /requests/{type}` 的请求，其中 `{type}` 是路径参数，代表请求的类型（QUERY、COMPLAINT、SUGGESTION）。`@PathVariable` 用于从 URL 中提取路径变量 `type`，并将其转换为 `RequestType` 枚举。
+ `**handleRequest(@PathVariable RequestType type)**`：控制器方法接收一个 `RequestType` 类型的参数，调用 `customerService.handleRequest(type)` 处理对应请求类型，并返回结果。

<h3 id="tIMqC"> 使⽤ LocalDate 和 LocalTime 处理⽇期和时间</h3>

```java
import java.time.LocalDate;
import java.time.LocalTime;

public class Meeting {
    private Long id;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    // Constructors, getters, and setters

    /**
     * 判断当前会议（this）与另一个会议（other）是否在同一天且时间上有重叠。
     *
     * @param other 要检查的另一个会议对象。
     * @return 如果两个会议在同一天且时间上有重叠，返回 true；否则返回 false。
     */
    public boolean isOverlapping(Meeting other) {
        return this.date.equals(other.date) &&
               (this.startTime.isBefore(other.endTime) && this.endTime.isAfter(other.startTime));
    }
}

```

+ `**LocalDate**` 和 `**LocalTime**`：分别用于表示会议的日期和时间，它们是 JDK 8 `java.time` 包中的类，替代了传统的 `java.util.Date` 和 `Calendar`。
+ `**isOverlapping**`** 方法**：用于判断两个会议是否在同一天并且时间上有重叠。
+ 首先比较两个会议的日期是否相同。
+ 然后检查当前会议的开始时间是否在其他会议的结束时间之前，并且当前会议的结束时间是否在其他会议的开始时间之后。

---

```java
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MeetingService {
    private final List<Meeting> meetings = new ArrayList<>();

    /**
     * 检查会议室是否可用于新的会议（newMeeting）。
     *
     * @param newMeeting 要检查的新会议对象。
     * @return 如果会议室在新会议的时间段内可用，返回 true；否则返回 false。
     */
    public boolean isRoomAvailable(Meeting newMeeting) {
        return meetings.stream()
                       .noneMatch(existingMeeting -> existingMeeting.isOverlapping(newMeeting));
    }

    public void addMeeting(Meeting meeting) {
        meetings.add(meeting);
    }
}

```

+ `**@Service**`** 注解**：标记 `MeetingService` 为 Spring 的服务组件，Spring 会管理其生命周期。
+ `**isRoomAvailable(Meeting newMeeting)**`** 方法**：通过 `Stream API` 判断会议室在新会议的时间段内是否可用。
  - 使用 `noneMatch()` 方法检查是否有任何已有的会议与新会议时间重叠。如果没有冲突，返回 `true`，否则返回 `false`。
+ `**addMeeting(Meeting meeting)**`** 方法**：将新的会议添加到会议列表中。

---

```java
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/meetings")
public class MeetingController {
    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    /**
     * 检查会议室是否在指定的时间段内可用，并根据可用性预订会议。
     *
     * @param meeting 通过请求体传入的会议对象，包含会议的日期和时间信息。
     * @return 如果会议室可用，返回 HTTP 状态码 200（OK）和成功消息；
     *         如果不可用，返回 HTTP 状态码 409（Conflict）和失败消息。
     */
    @PostMapping("/check")
    public ResponseEntity<String> checkAvailability(@RequestBody Meeting meeting) {
        if (meetingService.isRoomAvailable(meeting)) {
            meetingService.addMeeting(meeting);
            return ResponseEntity.ok("会议室可用，会议已预订！");
        } else {
            return ResponseEntity.status(409).body("会议室不可用！");
        }
    }
}

```

+ `**@RestController**`** 注解**：标记该类为 REST 控制器，处理 HTTP 请求并返回 JSON 或字符串响应。
+ `**@PostMapping("/check")**`：处理 POST 请求，URL 为 `/meetings/check`。请求体中包含 `Meeting` 对象的 JSON 数据。
+ `**checkAvailability(@RequestBody Meeting meeting)**`：
  - 从请求体中获取 `Meeting` 对象。
  - 调用 `meetingService.isRoomAvailable()` 检查会议室是否可用。
  - 如果可用，添加会议并返回成功消息；如果不可用，返回 HTTP 状态码 `409 Conflict` 和失败消息。

<h3 id="ZE8De"> 使⽤ Stream API实现简单的⽤户过滤功能 </h3>

> **Stream API** 提供了一种简洁且高效的方式来处理集合数据。它能够通过链式操作完成过滤、映射、收集等操作。
>
> **filter** 主要用于根据条件过滤数据，**map** 则用于转换数据结构（例如从 `User` 对象中提取名字）。
>
> 通过 Spring Boot 控制器暴露 REST API，可以方便地提供数据过滤功能。

```java
@Service
public class UserService {
    private final List<User> users = List.of(
        new User(1L, "张三", 22),
        new User(2L, "张三丰", 17),
        new User(3L, "张三疯", 19),
        new User(4L, "张三风", 16),
        new User(5L, "张三峰", 25)
    );

    public List<String> getAdultUserNames() {
        return users.stream()
                    // 过滤年龄大于18岁的用户
                    .filter(user -> user.getAge() > 18)
                    // 提取用户名字
                    .map(User::getName)
                    // 收集到列表中
                    .collect(Collectors.toList());
    }
}

```

+ `**@Service**`** 注解**：标记 `UserService` 为 Spring 的服务类，Spring 会自动管理这个类的生命周期。
+ `**users**`** 列表**：创建了一个包含多个 `User` 对象的不可变列表，模拟用户数据源。
+ `**getAdultUserNames**`** 方法**：
+ 使用 **Stream API** 进行链式操作。
+ `**filter**`：用于过滤年龄大于 18 岁的用户。
+ `**map(User::getName)**`：提取符合条件的用户名字。
+ `**collect(Collectors.toList())**`：将结果收集为一个列表并返回。

---

```java
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/adults")
    public List<String> getAdultUserNames() {
        return userService.getAdultUserNames();
    }
}

```

+ `**@RestController**`** 注解**：标记该类为 REST 控制器，用于处理 HTTP 请求并返回数据响应。
+ `**@RequestMapping("/users")**`：定义了 URL 路径的基础部分为 `/users`。
+ `**@GetMapping("/adults")**`：定义了一个 GET 请求的端点，路径为 `/users/adults`。当用户访问该 URL 时，会调用 `getAdultUserNames` 方法。
+ `**getAdultUserNames()**`：
  - 调用 `UserService` 中的 `getAdultUserNames` 方法，获取符合条件的用户名字列表并返回。  

