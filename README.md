# My Theme for Hugo

一款基于 Hugo 静态站点生成器的现代化、响应式主题，具有简洁美观的界面和丰富的功能。

## 特性

- 📱 **响应式设计**：适配桌面端、平板和移动设备
- 🎨 **现代美观**：简洁优雅的界面，支持自定义颜色方案
- 📄 **灵活布局**：首页双栏布局，左侧特色图片，右侧最新文章
- 🏷️ **完善的文章功能**：支持分类、标签、日期和摘要
- 🔍 **良好的SEO支持**：自动生成元数据和结构化数据
- 📱 **社交媒体集成**：支持微信二维码展示
- 📝 **版权声明**：内置版权信息展示
- 💾 **轻量级**：优化的代码结构，快速加载速度

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
cp themes/my-theme/exampleSite/config.toml .
```

编辑 `config.toml` 文件，根据你的需求修改以下内容：

```toml
baseURL = "https://your-site.com/"
languageCode = "zh-cn"
title = "你的站点标题"

[params]
  description = "你的站点描述"
  author = "你的名字"
  email = "your-email@example.com"
  
  # 主菜单
  [[params.menu]]
    name = "首页"
    url = "/"
    weight = 1
  
  [[params.menu]]
    name = "文章"
    url = "/posts/"
    weight = 2
  
  [[params.menu]]
    name = "关于"
    url = "/about/"
    weight = 3
```

### 2. 创建首页特色图片

在 `static/images/` 目录下添加 `feature.jpg` 文件，这将显示在首页左侧。

### 3. 创建文章

使用 Hugo 命令创建新文章：

```bash
hugo new posts/my-first-post.md
```

编辑生成的 Markdown 文件，添加文章内容：

```markdown
+++
title = "我的第一篇文章"
date = 2026-01-24T10:00:00+08:00
draft = false
tags = ["教程", "Hugo"]
categories = ["技术"]
+++

这里是文章内容...
```

### 4. 本地预览

启动 Hugo 开发服务器：

```bash
hugo server -D
```

在浏览器中访问 `http://localhost:1313/` 查看站点效果。

### 5. 构建站点

当你准备好部署站点时，执行以下命令：

```bash
hugo
```

生成的静态文件会保存在 `public` 目录中，你可以将这些文件部署到任何静态网站托管服务。

## 配置选项

### 站点参数

在 `config.toml` 文件的 `[params]` 部分，你可以配置以下选项：

| 选项 | 描述 | 默认值 |
|------|------|--------|
| `description` | 站点描述，用于 SEO | "" |
| `author` | 站点作者 | "" |
| `email` | 联系邮箱 | "" |
| `social` | 社交媒体链接 | [] |

### 菜单配置

通过 `[[params.menu]]` 配置站点菜单：

```toml
[[params.menu]]
  name = "首页"    # 菜单名称
  url = "/"       # 链接地址
  weight = 1      # 排序权重
```

### 微信二维码

在 `static/images/` 目录下添加 `wechat-qr.jpg` 文件，二维码会自动显示在页脚。

## 布局说明

### 首页布局

- **左侧栏（55%）**：显示特色图片 `feature.jpg` 和说明文字
- **右侧栏（45%）**：显示最新的 3 篇文章，包含标题、日期和 100 字摘要

### 文章列表页

- 显示所有文章，按日期倒序排列
- 每篇文章显示日期、标题和 80 字摘要
- 文章之间有水平分隔线
- 鼠标悬停时显示高亮效果

### 单页布局

- 文章标题和发布日期
- 文章元数据（分类、标签）
- 文章内容
- 上一篇/下一篇文章导航
- 版权声明

## 自定义样式

### 修改主题颜色

编辑 `static/css/styles.css` 文件，修改 `:root` 中的 CSS 变量：

```css
:root {
  --primary-color: #1d4ed8;       /* 主要颜色 */
  --secondary-color: #3b82f6;     /* 次要颜色 */
  --text-color: #1e293b;          /* 文本颜色 */
  --background-color: #ffffff;    /* 背景颜色 */
  --border-color: #e2e8f0;        /* 边框颜色 */
}
```

### 修改首页特色图片说明

编辑 `layouts/index.html` 文件，修改特色图片下方的描述文字：

```html
<div class="feature-description">
  <p>这里是feature.jpg图片的说明文字，可以根据需要进行修改。</p>
</div>
```

## 示例站点

查看 `exampleSite` 目录，了解如何配置和使用主题。

## 常见问题

### 1. 首页特色图片不显示

- 确保图片文件名为 `feature.jpg`
- 确保图片位于 `static/images/` 目录
- 检查 Hugo 服务器是否正在运行，或重新启动服务器

### 2. 页脚微信二维码不显示

- 确保图片文件名为 `wechat-qr.jpg`
- 确保图片位于 `static/images/` 目录

### 3. 文章摘要不显示

- 确保文章中包含 `<!--more-->` 分隔符，或在前置元数据中设置 `summary` 字段
- 主题会自动截取文章前 100 字作为摘要（首页）或 80 字（列表页）

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个主题！

## 许可证

本主题采用 [MIT 许可证](LICENSE)。

## 鸣谢

- [Hugo](https://gohugo.io/) - 优秀的静态站点生成器
- [Bootstrap](https://getbootstrap.com/) - 前端框架
- [Font Awesome](https://fontawesome.com/) - 图标库

---

**享受使用 My Theme 构建你的网站！** 🎉
