# My Theme for Hugo

一款基于 Hugo 静态站点生成器的现代化、响应式主题，具有简洁美观的界面和丰富的功能。

## 特性

- 📱 **响应式设计**：适配桌面端、平板和移动设备
- 🎨 **现代美观**：简洁优雅的界面，蓝色渐变主题
- 📄 **灵活布局**：首页双栏布局，左侧特色图片，右侧最新文章
- 🏷️ **完善的文章功能**：支持分类、标签、日期和摘要
- 🔍 **良好的SEO支持**：自动生成元数据和结构化数据
- 📱 **社交媒体集成**：支持微信二维码展示和社交媒体图标
- 📝 **版权声明**：内置版权信息展示
- 💾 **轻量级**：优化的代码结构，快速加载速度
- 🎯 **可配置性**：通过 `hugo.toml` 配置站点参数

## 文件结构

```
my-theme/
├── archetypes/          # 内容模板
├── assets/              # 资源文件（CSS/JS）
├── content/             # 示例内容
├── exampleSite/         # 示例站点
├── layouts/             # 页面模板
│   ├── _default/        # 默认模板
│   ├── partials/        # 可重用模板片段
│   ├── index.html       # 首页模板
│   └── 404.html         # 404页面
├── static/              # 静态资源
│   ├── css/             # 样式文件
│   ├── js/              # JavaScript文件
│   ├── images/          # 图片资源
│   └── favicon.ico      # 网站图标
├── README.md            # 主题文档
├── theme.toml           # 主题配置
└── hugo.toml            # 主题默认配置
```

## 样式特点

### 颜色方案

- **主色调**：蓝色渐变 (`#1e40af` 到 `#1d4ed8`)
- **辅助色**：浅蓝色 (`#3b82f6`)
- **背景色**：白色 (`#ffffff`) 和浅蓝灰色 (`#f0f9ff`)
- **文本色**：深灰色 (`#374151`)、中灰色 (`#64748b`)

### 布局特点

- **首页布局**：55% 宽度的左侧特色图片区域，45% 宽度的右侧最新文章区域
- **导航栏**：蓝色渐变背景，响应式设计
- **页脚**：白色背景，顶部蓝色渐变横线，社交媒体图标居中
- **文章列表**：悬停效果（浅蓝色背景，轻微上移，移除圆角）
- **文章页面**：居中的元数据（发布日期、分类、标签）

### 响应式设计

- **桌面端** (> 1400px)：最大宽度 1366px，居中布局
- **平板端** (900px - 1365px)：适配宽度，隐藏搜索框
- **移动端** (< 900px)：垂直菜单，优化布局

## 配置方法

### 基本配置

在你的站点根目录创建或修改 `hugo.toml` 文件：

```toml
baseURL = "https://your-site.com/"
languageCode = "zh-CN"
title = "你的站点标题"
description = "你的站点描述"

# 启用主题
theme = "my-theme"

# 分页配置
[pagination]
pagerSize = 3
path = "page"

# 菜单配置
[[menu.main]]
name = "首页"
url = "/"
weight = 10

[[menu.main]]
name = "博客"
url = "/posts/"
weight = 20

[[menu.main]]
name = "关于"
url = "/about/"
weight = 30
```

### 社交媒体配置

```toml
# 社交媒体配置
[params.social]
twitter = "https://twitter.com/example"
github = "https://github.com/example"
linkedin = "https://linkedin.com/in/example"
weibo = "https://weibo.com/example"
email = "your-email@example.com"
wechat_official_1 = true  # 显示第一个微信公众号二维码
wechat_official_2 = false # 显示第二个微信公众号二维码
```

### 首页配置

```toml
# 首页配置
[params]
description = "欢迎来到我的网站"  # 站点描述
mainSections = ["posts"]           # 主要内容部分
logo = true                         # 显示logo

# 首页Feature配置
[params.feature]
feature_img = "images/feature.jpg"  # 特色图片路径
feature_description = "这里是特色图片的说明文字，可以根据需要进行修改。"  # 特色图片描述
```

## 安装

### 方法一：使用 Git 子模块（推荐）

在你的 Hugo 站点根目录执行以下命令：

```bash
git submodule add https://github.com/scratchzjnu/hugo-theme-mytheme.git themes/my-theme
```

### 方法二：直接下载

1. 访问 [GitHub 仓库](https://github.com/scratchzjnu/hugo-theme-mytheme)
2. 点击 "Code" 按钮，选择 "Download ZIP"
3. 将下载的 ZIP 文件解压到 `themes/my-theme` 目录

## 快速开始

### 1. 配置站点

复制主题的示例配置文件到你的站点根目录：

```bash
cp themes/my-theme/exampleSite/hugo.toml .
```

### 2. 创建内容

在 `content/posts` 目录创建你的第一篇文章：

```bash
mkdir -p content/posts
touch content/posts/my-first-post.md
```

编辑 `my-first-post.md` 文件：

```yaml
---
title: "我的第一篇文章"
date: 2026-01-25T10:00:00+08:00
draft: false
categories:
  - 技术
tags:
  - Hugo
  - 静态站点
---

这是我的第一篇文章内容...
```

### 3. 启动开发服务器

在你的站点根目录执行以下命令：

```bash
hugo server -D
```

访问 `http://localhost:1313/` 查看你的站点。

## 自定义选项

### 1. 替换Logo

将你的Logo图片命名为 `logo.png`，并放置在 `static/images/` 目录。

### 2. 替换特色图片

将你的特色图片命名为 `feature.jpg`，并放置在 `static/images/` 目录。

### 3. 微信公众号二维码

将你的微信公众号二维码图片命名为 `wechat_offiicial_1.png` 和 `wechat_offiicial_2.png`，并放置在 `static/images/` 目录。

### 4. 修改样式

编辑 `static/css/styles.css` 文件，自定义主题样式。

## 响应式设计

主题采用移动优先的响应式设计，在不同设备上都能提供良好的用户体验：

- **桌面端**：双栏布局，完整功能
- **平板端**：适配宽度，优化布局
- **移动端**：单栏布局，汉堡菜单

## 社交媒体集成

主题支持集成多种社交媒体平台：

- Twitter
- GitHub
- LinkedIn
- 微博
- 电子邮件
- 微信公众号（二维码）

## 常见问题

### Q: 如何修改导航菜单？

A: 在 `hugo.toml` 文件中修改 `[menu.main]` 部分。

### Q: 如何隐藏Logo？

A: 在 `hugo.toml` 文件中设置 `logo = false`。

### Q: 如何修改特色图片？

A: 将你的图片命名为 `feature.jpg` 并放置在 `static/images/` 目录，或在 `hugo.toml` 中修改 `feature_img` 参数。

### Q: 如何添加新的社交媒体链接？

A: 在 `hugo.toml` 文件中的 `[params.social]` 部分添加新的链接。

## 示例站点

主题包含一个示例站点，位于 `exampleSite/` 目录，你可以参考它来了解如何配置和使用主题。

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个主题！

## 更新日志

### v1.0.0 (2026-01-25)

- 初始发布
- 响应式设计
- 蓝色渐变主题
- 首页双栏布局
- 社交媒体集成
- 微信公众号二维码支持
- 版权声明
