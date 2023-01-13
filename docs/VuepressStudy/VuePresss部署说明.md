---
title: VuePresss部署说明
autoGroup-2: Vuepress
---

## 前言

作为一个程序员，没有折腾过个人博客是不算完整的。技术文章的输出是我们程序员能力的一种体现，也是一种非常好的个人总结。

市面上有很多搭建个人博客的工具或框架，包括hexo、wordpress等等。不可否认，市面上有些博客系统做得很好，博客主题也很丰富，但是往往存在一个问题：比较重。

作为一个Vue程序员，我就比较推荐使用vuepress搭建个人博客，因为它毕竟是Vue出品的，大家熟知的vue官方就是利用vuepress搭建的。

本篇文章就从零开始教大家搭建一个免费的博客，零基础小白也可以学习哦！

## 1. 什么是Vuepress？

Vuepress是官方出品的一款极简静态网站生成器，它的初衷就是为了用于方便快速的撰写文档。

它主要包含了以下几个特点：

- 非常简洁
- 良好的SEO
- 加载性能很高
- 可自定义主题
- 可以在markdown中写vue组件

上面几点主要是Vuepress比较突出的几个特点。对于博客网站SEO无疑是非常重要的，要是我们写的文章没人看，很容易失去动力的，Vuepress有着良好的SEO，除此之外，它对于有Vue基础的小伙伴是很友好的，我们自定义主题或者组件都是非常方便的，市面上的一些博客系统虽然也支持自定义主题，但是往往改起来比较费劲，需要下功夫学习。

我们来看下Vuepress官网：[Vuepress](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fvuepress.vuejs.org%2Fzh%2F)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dee2889d696423b8379fecaad3ad939~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 2. 准备工作

今天我们搭建的这个博客无需花费一分钱，全程免费！所需要准备的东西也是很少的！

**基础环境：**

- 电脑安装了git
- 电脑具有Node环境
- VScode编辑器（可选）
- gitee账号

我们的准备工作非常的简单，如果你是程序员，上面的几个环境和软件相信我不用多说，可以直接跳到第3节去。如果你是小白，那么我们先把环境搭建好即可。

**环境搭建步骤：**

### 2.1 node安装

去Node官网下载安装包：[Node官网](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttp%3A%2F%2Fnodejs.cn%2Fdownload%2F)

选择自己电脑合适的版本安装即可，安装过程一直下一步。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e3defe8603e42a6bdc36e5ce1e7e9c3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 2.2 git安装

去git官网下载安装包：[git官网](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fgit-scm.com%2F)

选择自己电脑合适的版本安装即可，安装过程一直下一步。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/495d331916cc4d2f89d0690bd35939bb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 2.3 gitee账号注册

到gitee官网注册一个账号一个，待会儿我们会把博客网站部署到gitee上面：[git官网](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fgitee.com%2F)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4de6132a9124420d997ef562e038d7e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 3. 搭建步骤

### 3.1 初始化Vuepress

**第一步：**

在电脑任意位置创建文件夹，用于存放我们的博客系统，我这里新建了一个blog文件夹，如下图：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/292e6d3570834a2380f73a3b5df307d8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

**第二步：**

在blog文件夹下打开命令行工具，如果安装了git，鼠标右键菜单里面会有git菜单，点击git bash here：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc449bd5fa2543a3a208ceeb7713ae22~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55ec42580df541c2a50e06ff2d71e79f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

**第三步：**

先检查下node是否安装好，执行命令：

```
node -v
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b6049029eda4103b61898313d6eb95a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

出现版本号则安装成功。

然后在blog文件夹下利用npm初始化，执行命令：

```csharp
npm init -y
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ce8dedb284749c38ecf56c0c18aa618~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87e4c7eb31664768895ecf97cd2a198b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

**第三步：**

安装vuepress，执行命令：

```
npm install -D vuepress
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c5341d467c34a7688da0b40ed132c0f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

由于网络可能安装会比较慢，耐心等待即可，失败的话重新多安装几次，出现上述界面则代表安装成功。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f76db8cf9be24050a143d76b2f74326b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 3.2 初始化目录

**第一步：**

在blog文件夹下新建docs目录，然后在目录下新建README.md文件作为我们博客的首页，doc目录用于存放我们的文章和相关配置文件。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2a86781e5f646678bd99b91ee6658b6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

然后修改README.md内容，具体的配置项目可参考官网：[配置项](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fconfig%2F%23description)

```yaml
---
home: true
heroText: 一个分享各类资源的地方
tagline: 公众号：资料分享大师
actionText: 查看资源 →
actionLink: /软件资源/软件资源
features:
- title: 网盘资源
  details: 所有网盘资源均来自互联网，本网站不生产任何网盘资源，网盘资源是否失效需要自行判断。
- title: 黑科技软件
  details: 主要分享一些实用性的工具类、影视类、音乐类等等各种软件，均由互联网大佬提供。
- title: 教程资源
  details: 分享各类教程，包括编程、各类证书考试资源等等，本网站所有教程资源均来自互联网，若涉及侵权立马删除！
footer: 科技趣玩 | 资料分享大师
---
复制代码
```

**第二步：**

修改package.json文件，该文件用于我们项目的打包和运行，修改后的代码如下：

```json
{
  "name": "blog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vuepress": "^1.9.7"
  }
}
复制代码
```

**第三步：**

执行命令，将博客运行起来看看效果，执行命令：

```arduino
npm run dev
复制代码
```

出现如下界面则代表运行成功：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8dd89c67cf6b433287d544df4d52e370~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

点击链接访问：[http://localhost:8080/](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttp%3A%2F%2Flocalhost%3A8080%2F)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d6cdc890bd84aeba7000e6cdd1ea6fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

我们一个最简单的博客就搭建成功了。

### 3.3 编写文章

大家可以仔细看看README.md文件内容中有一个actionLink字段，这表示我们点击首页的按钮跳转到哪个页面。

在docs目录下新建”软件资源“文件夹，然后在文件夹内新建”软件资源.md“文件，然后编写内容：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/314cd740155d4f0a83ea57a9a0189989~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 3.4 添加侧边栏

虽然我们文章添加了，但是没有侧边栏，我们需要修改一些配置文件。

在docs文件夹下新建.vuepress文件夹，然后在此文件夹下新建config.js，用于配置我们的博客相关配置，编写代码如下：

```scss
// docs/.vuepress/config.js
module.exports = {
  title: "科技趣玩",
  description: "分享各类资源、教程、黑科技软件、工具等等",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      {
        title: '软件资源',
        children: ['/软件资源/软件资源' ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      }
    ]
  },
};
复制代码
```

其中themeConfig属性中的sidebar字段就是用来配置我们的侧边栏的，具体配置项可参考官网。

**效果如下：**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b7307d768354df0aa352e415f64380a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

虽然侧边栏有了，但是似乎标题不大对劲，这是因为侧边栏取的是文章的标题，因为我们的文章没有写标题，所以稍微改造一下软件资源.md：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/605eea366f134fb3bc6bf78169aaa549~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

**效果如下：**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68df967a27214fdc8e50a28201463419~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 4. 更换主题

上面的步骤已经让我们搭建出了一个最简单的博客系统了，就和Vue官网长得差不多，可能有些小伙伴不太喜欢，所以我们可以取网上找一个好看的主题改一下。

比如我们就是用下图的这种主题：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47a2402508624efaaec8f43c62ead9ce~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

主题官网：[主题](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fvuepress-theme-reco.recoluan.com%2F)

在blog目录下执行命令：

```css
npm install vuepress-theme-reco --save-dev
复制代码
```

然后在.vuepress/config.js文件中配置主题，代码如下：

```ruby
module.exports = {
  title: "科技趣玩",
  description: "分享各类资源、教程、黑科技软件、工具等等",
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  // themeConfig: {
  //   sidebar: [
  //     {
  //       title: '软件资源',
  //       children: ['/软件资源/软件资源' ],
  //       initialOpenGroupIndex: 1 // 可选的, 默认值是 0
  //     }
  //   ]
  // },
};
复制代码
```

这个时候我们的博客就好看了一些了，当然了，如果还要更加个性化，建议去主题的官网认真查看各种配置规则。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6117ba4e78e045d28e33dbcd35423370~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 5. 部署到gitee

我们本地把博客大致弄好之后，就要去部署了，让所有人都可以访问，这里我们就借助gitee来实现这一步。

### 5.1 新建仓库

在gitee上面我们新建一个仓库，用于存放我们的博客系统。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bfc2bb1977047469cbf65b68ed751b2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

这里有一点两点需要注意：

- 仓库名称建议与个人空间地址保持一致，这样就可以就可以通过个人[空间地址.[gitee.io](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttp%3A%2F%2Fgitee.io)]的形式访问了。
- 仓库私有或者共有根据个人情况而定。

个人空间地址设置：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea4b278a95b94ca292a311198d1cea69~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

仓库创建成功后如下图：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86bf21355bef4e21b0d8bf54a85005d5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 5.2 推送至gitee

仓库建好后，就需要将我们本地的博客系统推送至仓库。

**第一步：**

进入blog目录，打开打开gitbash命令行工具，打包博客，执行命令：

```arduino
npm run build
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d12ce1eebaa41f2ab2099c5c9a24ef5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

**第二步：**

我们可以参考gitee仓库给我们的步骤操作，将代码推送到仓库。

逐行执行下列命令：

```csharp
git init
git add .
git commit -m "初始化"
git remote add origin https://gitee.com/sharemore52/myblog-demo.git
git push -u origin "master"
复制代码
```

执行完上面的命令后，我们的代码就推到了仓库中去：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c25d439fdf354d0b8ab5df31bf30982b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 5.3 部署

在仓库页面点击服务菜单，选择gitpage选项：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e82f41bfc094565bc1728b976b1d3ab~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

选择部署分支和部署目录，然后点击启动：

- 部署分支，不用改，默认master
- 部署目录，选择docs/.vuepress/dist文件夹，刚刚我们执行打包命令生成的。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fd09fa81d084d4c873a6c0b28b2c3d7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

部署好后就会出现一个我们的博客地址了，访问试试：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/237e34c0fd274be89245d0c29207defe~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 5.4 修改配置文件

可以看到我们上面访问的页面似乎出问题了，不要着急，只是我们项目配置的相关问题，我们在config.js文件中新增一段代码：

```csharp
base: "./"
复制代码
```

然后重新打包，部署，依次执行下面的命令：

```sql
npm run build
git add .
git commit -m "修改"
git push
复制代码
```

仓库中的代码更新后，我们重新进入gitpage目录，重新启动，这个时候就能正常访问了：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/264f5281458e40d28cb00be828b8a667~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 6. 常见问题解答

### 6.1 仓库是否可以私有？

可以的

### 6.2 博客地址为何多了一个路径？

```bash
像这种：https://sharemore52.gitee.io/myblog-demo/
复制代码
```

仓库名和个人空间地址一样即可

### 6.3 如何做侧边栏自动化生成？

可以使用插件：vuepress-plugin-autobar

官网：[官网](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fshanyuhai123.github.io%2Fvuepress-plugin-auto-sidebar%2Fzh%2F)

## 总结

到这里我们基本上就搭建好了个人博客，可以尽情的写文章了，总结一下大致分为以下几步：

1. 安装vuepress
2. 根据vuepress官网创建目录
3. 创建gitee仓库
4. 推送代码到gitee仓库
5. 使用giteepages部署

本篇文章只介绍了如何搭建博客，如果想要让自己的博客丰富起来，一点要去官网看各种配置项规则，包括vuepress和自定义主题的官网。



作者：小猪课堂
链接：https://juejin.cn/post/7077498041921437704
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。