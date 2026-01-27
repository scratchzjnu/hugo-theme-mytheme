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

### v1.2.0 (2026-01-27)

- **样式优化**：修改首页特色图片卡片为无边框设计，优化文字样式为更大更醒目
- **分页导航**：改进分页按钮样式，使用圆角矩形，保持较大间隔，按钮始终显示并在不适用时禁用
- **禁用状态**：优化禁用状态的按钮样式，确保鼠标悬停时不再变色，保持一致的灰色显示
- **布局调整**：统一文章页面、列表页面和分类/标签页面的布局风格
- **CSS 管理**：合并 styles.css 到 custom.css，清理未使用的 CSS 文件
- **配置优化**：重新组织 hugo.toml 配置文件，按功能模块进行顺序编码，添加详细注释
- **功能增强**：添加文章分类和热门标签侧边栏到列表页面
- **代码清理**：删除未使用的 theme.toml 和 hugo.toml 文件，清理冗余代码

### v1.1.0 (2026-01-27)

- 集成 json-render 支持
- 添加本地 Bootstrap 6.4.0 和 Font Awesome 6.4.0
- 优化主题文件结构
- 修复字体文件路径问题

### v1.0.0 (2026-01-25)

- 初始发布
- 响应式设计
- 蓝色渐变主题
- 首页双栏布局
- 社交媒体集成
- 微信公众号二维码支持
- 版权声明

## JSON Render 集成

my-theme 主题集成了 Vercel Labs 的 json-render 库，允许你通过 JSON 结构生成 UI 组件，支持 AI 生成 UI 的约束性生成。

### 特性

- **有护栏** — AI 只能使用你目录中的组件
- **可预测** — JSON 输出始终符合你的模式
- **快速** — 随着模型响应，流式传输并逐步渲染

### 可用组件

- **Card** — 卡片组件
- **Heading** — 标题组件（h1-h6）
- **Paragraph** — 段落组件
- **Button** — 按钮组件
- **TextField** — 文本输入组件
- **Grid** — 网格布局组件
- **Image** — 图片组件
- **Link** — 链接组件
- **List** — 列表组件（ul/ol）
- **ListItem** — 列表项组件
- **Divider** — 分隔线组件
- **Container** — 容器组件

### 可用动作

- **navigate** — 导航到指定页面
- **show_message** — 显示通知消息
- **submit_form** — 提交表单数据
- **toggle_theme** — 切换深色/浅色主题

### 如何使用

1. **查看示例**：访问 `/json-render/` 页面查看完整示例

2. **引入脚本**：在你的页面中引入必要的脚本

   ```html
   <!-- 在页面底部引入 -->
   <script type="module" src="{{ "js/json-render/index.js" | absURL }}"></script>
   ```

3. **创建容器**：在你的页面中创建一个容器元素

   ```html
   <div id="json-render-container"></div>
   ```

4. **渲染 UI**：使用 `jsonRender.render()` 函数来渲染 JSON 树

   ```javascript
   // 示例 JSON 树
   const jsonTree = {
     type: 'Card',
     props: {
       title: 'Hello json-render',
       className: 'mb-4'
     },
     children: [
       {
         type: 'Paragraph',
         props: {
           text: 'This is a demonstration of json-render in my-theme.'
         }
       },
       {
         type: 'Button',
         props: {
           label: 'Click Me',
           variant: 'primary',
           action: {
             type: 'show_message',
             payload: {
               message: 'Button clicked!'
             }
           }
         }
       }
     ]
   };

   // 渲染到容器
   jsonRender.render('json-render-container', jsonTree);
   ```

### 自定义配置

- **修改组件**：编辑 `static/js/json-render/config.js` 文件，定义你的组件和动作
- **修改渲染**：编辑 `static/js/json-render/components.js` 文件，实现组件的渲染逻辑

## 技术栈

- **前端框架**：Hugo + Bootstrap 6.4.0
- **图标库**：Font Awesome 6.4.0（本地）
- **AI 工具**：json-render
- **样式**：CSS3 + 响应式设计
- **部署**：支持 Vercel 部署

## 终端用户使用与配置方法

### 基本使用

1. **安装主题**：按照上文的安装方法将主题安装到你的 Hugo 站点
2. **配置站点**：复制 `samplesite/hugo.toml` 到你的站点根目录，并根据需要修改配置
3. **创建内容**：在 `content/posts` 目录创建你的文章
4. **启动服务器**：执行 `hugo server -D` 启动本地开发服务器
5. **访问站点**：打开浏览器访问 `http://localhost:1313/` 查看你的站点

### 配置方法

主题的配置文件 `hugo.toml` 按照功能模块进行了顺序编码，方便管理和维护：

1. **站点基本配置**：设置站点的基础信息，如 baseURL、languageCode、title 等
2. **主题配置**：启用主题，设置 `theme = "my-theme"`
3. **分页配置**：设置每页显示的文章数量和分页路径
4. **菜单配置**：配置主导航菜单，包括名称、链接和权重
5. **全局参数配置**：设置站点的全局参数，如描述、作者信息等
6. **社交媒体配置**：配置社交媒体链接，包括 Twitter、GitHub、LinkedIn、微博等
7. **首页配置**：配置首页的特色图片和描述

### 自定义样式

主题的样式文件位于 `static/css/` 目录：

- **custom.css**：主题的主要样式文件，包含了所有的自定义样式

如果需要修改样式，可以编辑 `custom.css` 文件，或者在你的站点根目录创建 `static/css/custom.css` 文件来覆盖主题的样式。

## 后续开发注意事项

### 代码结构

- **模板文件**：位于 `layouts/` 目录，按照功能模块组织
- **样式文件**：位于 `static/css/` 目录，主要使用 `custom.css`
- **静态资源**：位于 `static/` 目录，包括图片、JavaScript 文件等
- **配置文件**：主题的配置文件已经移除，使用站点根目录的 `hugo.toml` 文件

### 开发建议

1. **样式管理**：所有的自定义样式都应该放在 `custom.css` 文件中，避免使用多个样式文件
2. **模板修改**：修改模板文件时，应该保持与 Bootstrap 6.4.0 的兼容性
3. **响应式设计**：确保修改后的代码在不同设备上都能正常显示
4. **性能优化**：避免使用过多的 JavaScript 和 CSS，确保站点加载速度快
5. **无障碍性**：确保修改后的代码符合无障碍性标准，方便所有用户使用

### 注意事项

1. **主题依赖**：主题依赖于 Bootstrap 6.4.0 和 Font Awesome 6.4.0，确保这些依赖项可用
2. **文件路径**：使用绝对路径引用静态资源，避免路径错误
3. **配置参数**：确保所有的配置参数都有合理的默认值，避免配置错误导致站点无法正常运行
4. **版本兼容性**：确保修改后的代码与 Hugo 的最新版本兼容
5. **测试**：修改代码后，应该在不同设备和浏览器上测试站点，确保所有功能都能正常工作

### 未来计划

- **深色模式**：添加深色模式支持
- **更多组件**：添加更多的 UI 组件和模板
- **性能优化**：进一步优化站点加载速度
- **文档完善**：完善主题文档，添加更多的使用示例
- **社区支持**：建立社区支持渠道，收集用户反馈和建议
