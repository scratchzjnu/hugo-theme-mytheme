+++
title = "欢迎使用My Theme"
date = 2026-01-25T10:00:00+08:00
draft = false
description = "这是一篇示例文章，展示My Theme的基本功能"
tags = ["示例", "主题", "Hugo"]
categories = ["技术"]
+++

## 介绍

欢迎使用My Theme！这是一个为Hugo静态网站生成器设计的现代、干净的主题。本主题具有响应式设计，蓝色渐变主题，并包含了丰富的功能，适合个人博客、作品集和企业网站。

## 主题特性

- **响应式设计**：适配各种屏幕尺寸，从手机到桌面设备
- **蓝色渐变主题**：现代美观的蓝色渐变设计
- **首页双栏布局**：左侧特色图片，右侧最新文章
- **完善的文章功能**：支持分类、标签、日期和摘要
- **社交媒体集成**：支持微信二维码展示
- **轻量级**：优化的代码结构，快速加载速度
- **易于定制**：通过配置文件和部分模板进行定制

## 如何使用

1. **安装主题**：将主题文件夹复制到您的Hugo站点的`themes`目录中
2. **配置主题**：在`hugo.toml`中设置`theme = "my-theme"`
3. **创建内容**：使用`hugo new content`命令创建新的内容文件
4. **启动服务器**：运行`hugo server -D`预览您的站点

## 配置选项

您可以通过修改`hugo.toml`文件来自定义主题的各种选项，包括：

- **基本配置**：网站标题、描述、语言等
- **菜单配置**：导航菜单的名称和链接
- **社交媒体配置**：Twitter、GitHub、LinkedIn、微博、电子邮件等
- **首页配置**：站点描述、主要内容部分、Logo显示
- **首页Feature配置**：特色图片路径和描述文字

## 示例配置

```toml
# 基本配置
baseURL = "https://your-site.com/"
languageCode = "zh-CN"
title = "您的站点标题"
description = "您的站点描述"

# 启用主题
theme = "my-theme"

# 菜单配置
[[menu.main]]
name = "首页"
url = "/"
weight = 10

# 社交媒体配置
[params.social]
twitter = "https://twitter.com/example"
github = "https://github.com/example"

# 首页配置
[params]
description = "欢迎来到您的网站"
mainSections = ["posts"]
logo = true

# 首页Feature配置
[params.feature]
feature_img = "images/feature.jpg"
feature_description = "这里是特色图片的说明文字"
```

## 支持

如果您在使用本主题时遇到任何问题，或者有任何建议，欢迎在GitHub上提交issue或Pull Request。

---

希望您喜欢使用My Theme！