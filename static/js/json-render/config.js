/**
 * json-render 配置文件
 * 定义AI可以使用的组件和动作
 */

import { createCatalog } from '@json-render/core';
import { z } from 'zod';

// 创建组件目录
const catalog = createCatalog({
  components: {
    // 卡片组件
    Card: {
      props: z.object({
        title: z.string().optional(),
        className: z.string().optional()
      }),
      hasChildren: true,
    },
    
    // 标题组件
    Heading: {
      props: z.object({
        level: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).default('h2'),
        text: z.string(),
        className: z.string().optional()
      }),
    },
    
    // 段落组件
    Paragraph: {
      props: z.object({
        text: z.string(),
        className: z.string().optional()
      }),
    },
    
    // 按钮组件
    Button: {
      props: z.object({
        label: z.string(),
        variant: z.enum(['primary', 'secondary', 'outline']).default('primary'),
        size: z.enum(['sm', 'md', 'lg']).default('md'),
        className: z.string().optional(),
        action: z.object({
          type: z.string(),
          payload: z.any().optional()
        }).optional()
      }),
    },
    
    // 文本输入组件
    TextField: {
      props: z.object({
        label: z.string(),
        placeholder: z.string().optional(),
        value: z.string().optional(),
        className: z.string().optional()
      }),
    },
    
    // 网格布局组件
    Grid: {
      props: z.object({
        columns: z.number().default(2),
        gap: z.string().default('1rem'),
        className: z.string().optional()
      }),
      hasChildren: true,
    },
    
    // 图片组件
    Image: {
      props: z.object({
        src: z.string(),
        alt: z.string().optional(),
        className: z.string().optional()
      }),
    },
    
    // 链接组件
    Link: {
      props: z.object({
        href: z.string(),
        text: z.string(),
        target: z.enum(['_blank', '_self']).default('_self'),
        className: z.string().optional()
      }),
    },
    
    // 列表组件
    List: {
      props: z.object({
        type: z.enum(['ul', 'ol']).default('ul'),
        className: z.string().optional()
      }),
      hasChildren: true,
    },
    
    // 列表项组件
    ListItem: {
      props: z.object({
        text: z.string().optional(),
        className: z.string().optional()
      }),
      hasChildren: true,
    },
    
    // 分隔线组件
    Divider: {
      props: z.object({
        className: z.string().optional()
      }),
    },
    
    // 容器组件
    Container: {
      props: z.object({
        className: z.string().optional()
      }),
      hasChildren: true,
    }
  },
  
  // 定义动作
  actions: {
    // 页面导航
    navigate: {
      description: '导航到指定页面',
      params: z.object({
        url: z.string()
      })
    },
    
    // 显示消息
    show_message: {
      description: '显示通知消息',
      params: z.object({
        message: z.string(),
        type: z.enum(['info', 'success', 'warning', 'error']).default('info')
      })
    },
    
    // 提交表单
    submit_form: {
      description: '提交表单数据',
      params: z.object({
        formData: z.any()
      })
    },
    
    // 切换主题
    toggle_theme: {
      description: '切换深色/浅色主题'
    }
  }
});

export default catalog;