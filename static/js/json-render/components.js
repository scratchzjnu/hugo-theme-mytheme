/**
 * json-render 组件注册表
 * 定义每个组件如何渲染到DOM中
 */

import React from 'react';

// 创建组件注册表
const components = {
  // 卡片组件
  Card: ({ element, children }) => {
    const { title, className } = element.props;
    return (
      <div className={`card ${className || ''}`}>
        {title && <div className="card-header">{title}</div>}
        <div className="card-body">
          {children}
        </div>
      </div>
    );
  },
  
  // 标题组件
  Heading: ({ element }) => {
    const { level, text, className } = element.props;
    const HeadingTag = level;
    return (
      <HeadingTag className={className}>
        {text}
      </HeadingTag>
    );
  },
  
  // 段落组件
  Paragraph: ({ element }) => {
    const { text, className } = element.props;
    return (
      <p className={className}>
        {text}
      </p>
    );
  },
  
  // 按钮组件
  Button: ({ element }) => {
    const { label, variant, size, className, action } = element.props;
    
    const handleClick = () => {
      if (action) {
        console.log('Button action:', action);
        // 这里可以根据action类型执行相应的操作
        switch (action.type) {
          case 'navigate':
            window.location.href = action.payload?.url || '#';
            break;
          case 'show_message':
            alert(action.payload?.message || 'Message');
            break;
          case 'toggle_theme':
            document.body.classList.toggle('dark-mode');
            break;
          default:
            console.log('Unknown action:', action.type);
        }
      }
    };
    
    return (
      <button
        className={`btn btn-${variant} btn-${size} ${className || ''}`}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  },
  
  // 文本输入组件
  TextField: ({ element }) => {
    const { label, placeholder, value, className } = element.props;
    return (
      <div className={`mb-3 ${className || ''}`}>
        {label && <label className="form-label">{label}</label>}
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>
    );
  },
  
  // 网格布局组件
  Grid: ({ element, children }) => {
    const { columns, gap, className } = element.props;
    return (
      <div
        className={`grid ${className || ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: gap
        }}
      >
        {children}
      </div>
    );
  },
  
  // 图片组件
  Image: ({ element }) => {
    const { src, alt, className } = element.props;
    return (
      <img
        src={src}
        alt={alt}
        className={`img-fluid ${className || ''}`}
      />
    );
  },
  
  // 链接组件
  Link: ({ element }) => {
    const { href, text, target, className } = element.props;
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {text}
      </a>
    );
  },
  
  // 列表组件
  List: ({ element, children }) => {
    const { type, className } = element.props;
    const ListTag = type;
    return (
      <ListTag className={className}>
        {children}
      </ListTag>
    );
  },
  
  // 列表项组件
  ListItem: ({ element, children }) => {
    const { text, className } = element.props;
    return (
      <li className={className}>
        {text || children}
      </li>
    );
  },
  
  // 分隔线组件
  Divider: ({ element }) => {
    const { className } = element.props;
    return (
      <hr className={className} />
    );
  },
  
  // 容器组件
  Container: ({ element, children }) => {
    const { className } = element.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
};

export default components;