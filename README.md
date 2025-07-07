# AI律师产品官网

基于React + TypeScript + Tailwind CSS + shadcn/ui构建的现代化AI律师产品官方网站。

## 项目特性

- 🎨 现代化设计风格，黑白灰主题
- 📱 完全响应式设计
- ⚡ 基于Vite构建，开发体验极佳
- 🎯 TypeScript支持，类型安全
- 💫 shadcn/ui组件库，美观实用
- 🎪 Tailwind CSS，样式灵活

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **图标**: Lucide React

## 项目结构

```
src/
├── components/
│   ├── ui/              # shadcn/ui基础组件
│   ├── layout/          # 布局组件 (Header, Footer)
│   └── sections/        # 页面组件 (Hero, Features, Pricing等)
├── data/               # 数据文件
├── styles/             # 样式文件
├── utils/              # 工具函数
└── App.tsx             # 主应用组件
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 页面功能

### 🏠 首页 (Hero)
- 产品介绍和价值主张
- 核心数据展示
- AI聊天界面演示
- 行动号召按钮

### ⚡ 产品功能 (Features)
- 智能法律咨询
- 合同智能审查
- 法律文书生成
- 案例智能检索
- 法律风险评估
- 法律法规检索

### 💰 定价方案 (Pricing)
- 基础版 (免费)
- 专业版 (¥2,999/月)
- 企业版 (¥9,999/月)
- 定制版 (联系我们)

## 公司信息

- **电话**: 13736333011
- **邮箱**: 626723063@qq.com
- **地址**: 浙江省杭州市滨江区长河街道滨安路1180号7幢3层371室

## 开发指南

### 添加新组件

1. 在相应目录创建组件文件
2. 使用TypeScript接口定义props
3. 遵循现有的命名规范
4. 添加适当的注释

### 样式指南

- 使用Tailwind CSS类名
- 遵循黑白灰主题色彩
- 确保响应式设计
- 使用自定义CSS变量

### 数据管理

- 静态数据存放在`src/data/`目录
- 使用TypeScript接口定义数据结构
- 保持数据的类型安全

## 部署

项目可以部署到任何支持静态网站的平台：

- Vercel
- Netlify
- GitHub Pages
- 阿里云OSS
- 腾讯云COS

## 许可证

MIT License

---

© 2024 AI律师. 保留所有权利. 