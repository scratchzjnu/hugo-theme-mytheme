+++
title = "JSON Render 示例"
date = 2026-01-27T10:00:00+08:00
description = "展示 json-render 在 my-theme 主题中的使用"
tags = ["json-render", "AI", "UI", "example"]
categories = ["Demo"]
draft = false
+++

# JSON Render 示例

本页面展示了如何在 my-theme 主题中使用 json-render 来生成 UI 组件。

## 什么是 json-render？

json-render 是 Vercel Labs 开源的一个库，它允许用户通过提示词生成仪表盘、小部件、应用程序和数据可视化，同时安全地限制在你定义的组件范围内。

### 核心特性

- **有护栏** — AI 只能使用你目录中的组件
- **可预测** — JSON 输出始终符合你的模式
- **快速** — 随着模型响应，流式传输并逐步渲染

## 示例演示

下面是一个使用 json-render 生成的 UI 示例：

<div id="json-render-example" class="mt-6"></div>

## 如何使用

### 1. 引入 json-render

在你的页面中引入必要的脚本：

```html
<!-- 在页面底部引入 -->
<script type="module" src="{{ "js/json-render/index.js" | absURL }}"></script>
```

### 2. 创建渲染容器

在你的页面中创建一个容器元素：

```html
<div id="json-render-container"></div>
```

### 3. 渲染 JSON UI

使用 `jsonRender.render()` 函数来渲染 JSON 树：

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

## 可用组件

my-theme 主题中已经定义了以下组件：

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

## 可用动作

- **navigate** — 导航到指定页面
- **show_message** — 显示通知消息
- **submit_form** — 提交表单数据
- **toggle_theme** — 切换深色/浅色主题

## 自定义组件

你可以在 `static/js/json-render/config.js` 中定义自己的组件，然后在 `static/js/json-render/components.js` 中实现它们的渲染逻辑。

## 注意事项

- json-render 使用 ES 模块，需要在 `script` 标签中添加 `type="module"`
- 本主题使用的是 Bootstrap 6.4.0 版本的本地版本，所有组件都与 Bootstrap 样式兼容
- 为了获得最佳效果，建议在现代浏览器中使用
