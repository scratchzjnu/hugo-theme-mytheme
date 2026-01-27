/**
 * json-render 主入口文件
 * 整合组件和配置
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider, ActionProvider, Renderer } from '@json-render/react';

// 导入配置和组件
import catalog from './config.js';
import components from './components.js';

// 默认数据
const defaultData = {
  site: {
    title: 'My Theme',
    description: 'A clean and modern Hugo theme',
    author: 'Your Name'
  },
  user: {
    name: 'Visitor',
    isLoggedIn: false
  },
  stats: {
    posts: 42,
    pages: 15,
    categories: 8,
    tags: 36
  }
};

// 默认动作
const defaultActions = {
  navigate: (params) => {
    window.location.href = params.url || '#';
  },
  show_message: (params) => {
    alert(params.message || 'Message');
  },
  submit_form: (params) => {
    console.log('Form submitted:', params.formData);
    alert('Form submitted successfully!');
  },
  toggle_theme: () => {
    document.body.classList.toggle('dark-mode');
  }
};

// 渲染函数
export function renderJsonUI(containerId, jsonTree, options = {}) {
  const {
    data = defaultData,
    actions = defaultActions
  } = options;

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <DataProvider initialData={data}>
        <ActionProvider actions={actions}>
          <Renderer tree={jsonTree} components={components} />
        </ActionProvider>
      </DataProvider>
    </React.StrictMode>
  );
}

// 示例JSON树
export const exampleJsonTree = {
  type: 'Container',
  props: {
    className: 'p-4'
  },
  children: [
    {
      type: 'Heading',
      props: {
        level: 'h1',
        text: 'Welcome to My Theme',
        className: 'text-center mb-4'
      }
    },
    {
      type: 'Paragraph',
      props: {
        text: 'This is a demonstration of json-render integration with Hugo theme. You can generate UI components using AI, constrained to the components defined in the catalog.',
        className: 'text-center mb-6'
      }
    },
    {
      type: 'Grid',
      props: {
        columns: 3,
        gap: '2rem',
        className: 'mb-6'
      },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Theme Features',
            className: 'h-100'
          },
          children: [
            {
              type: 'List',
              props: {
                type: 'ul',
                className: 'list-unstyled'
              },
              children: [
                {
                  type: 'ListItem',
                  props: {
                    text: 'Responsive Design'
                  }
                },
                {
                  type: 'ListItem',
                  props: {
                    text: 'Dark Mode Support'
                  }
                },
                {
                  type: 'ListItem',
                  props: {
                    text: 'Social Media Integration'
                  }
                },
                {
                  type: 'ListItem',
                  props: {
                    text: 'Search Functionality'
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'Card',
          props: {
            title: 'Site Stats',
            className: 'h-100'
          },
          children: [
            {
              type: 'Paragraph',
              props: {
                text: `Total Posts: ${defaultData.stats.posts}`
              }
            },
            {
              type: 'Paragraph',
              props: {
                text: `Total Pages: ${defaultData.stats.pages}`
              }
            },
            {
              type: 'Paragraph',
              props: {
                text: `Categories: ${defaultData.stats.categories}`
              }
            },
            {
              type: 'Paragraph',
              props: {
                text: `Tags: ${defaultData.stats.tags}`
              }
            }
          ]
        },
        {
          type: 'Card',
          props: {
            title: 'Actions',
            className: 'h-100'
          },
          children: [
            {
              type: 'Button',
              props: {
                label: 'Toggle Dark Mode',
                variant: 'primary',
                action: {
                  type: 'toggle_theme'
                },
                className: 'w-100 mb-2'
              }
            },
            {
              type: 'Button',
              props: {
                label: 'Visit GitHub',
                variant: 'secondary',
                action: {
                  type: 'navigate',
                  payload: {
                    url: 'https://github.com'
                  }
                },
                className: 'w-100 mb-2'
              }
            },
            {
              type: 'Button',
              props: {
                label: 'Show Message',
                variant: 'outline',
                action: {
                  type: 'show_message',
                  payload: {
                    message: 'Hello from json-render!',
                    type: 'info'
                  }
                },
                className: 'w-100'
              }
            }
          ]
        }
      ]
    },
    {
      type: 'Divider',
      props: {
        className: 'my-6'
      }
    },
    {
      type: 'Heading',
      props: {
        level: 'h2',
        text: 'Contact Form',
        className: 'mb-4'
      }
    },
    {
      type: 'Container',
      props: {
        className: 'max-w-md mx-auto'
      },
      children: [
        {
          type: 'TextField',
          props: {
            label: 'Name',
            placeholder: 'Your name'
          }
        },
        {
          type: 'TextField',
          props: {
            label: 'Email',
            placeholder: 'your.email@example.com'
          }
        },
        {
          type: 'TextField',
          props: {
            label: 'Message',
            placeholder: 'Your message'
          }
        },
        {
          type: 'Button',
          props: {
            label: 'Submit',
            variant: 'primary',
            size: 'lg',
            action: {
              type: 'submit_form',
              payload: {
                formData: {
                  name: 'John Doe',
                  email: 'john@example.com',
                  message: 'Hello!' 
                }
              }
            },
            className: 'w-100'
          }
        }
      ]
    }
  ]
};

// 自动渲染函数
if (typeof window !== 'undefined') {
  window.jsonRender = {
    render: renderJsonUI,
    exampleTree: exampleJsonTree,
    catalog: catalog
  };
  
  // 当DOM加载完成后自动渲染示例
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('json-render-example');
    if (container) {
      renderJsonUI('json-render-example', exampleJsonTree);
    }
  });
}