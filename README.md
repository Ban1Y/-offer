# 心Offer - 大学生心理健康与职业发展支持平台

一款面向大学生及求职者群体的心理健康支持平台，提供心理测评、AI/专家心理咨询、情绪调节训练、职业规划指导、匿名社区等全方位服务，帮助用户缓解就业焦虑、提升心理韧性、明确职业方向。

---

## 项目简介

心Offer致力于解决大学生在求职就业过程中面临的心理压力问题。通过科学的心理测评工具、专业的咨询渠道、实用的情绪调节方法以及温暖的社区支持，为用户提供一站式的心理健康服务。

### 核心价值

- **科学测评**：基于心理学理论的标准化评估工具
- **即时支持**：7×24小时AI心理咨询助手
- **专业服务**：签约心理咨询师一对一预约
- **成长激励**：打卡系统与成就徽章激励机制
- **匿名社区**：安全的树洞倾诉与互助平台

---

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 前端框架 | Vue.js | 3.2.38 |
| 构建工具 | Vite | 3.0.9 |
| 路由管理 | Vue Router | 4.1.5 |
| UI 组件库 | Element Plus | 2.4.4 |
| 图标库 | @element-plus/icons-vue | 2.3.2 |
| HTTP 客户端 | Axios | 1.7.2 |
| 代码规范 | ESLint + Prettier | - |

---

## 项目结构

```
heart-off-main/
├── public/
│   └── favicon.ico                 # 网站图标
├── src/
│   ├── assets/
│   │   └── main.css                # 全局样式文件
│   ├── router/
│   │   └── index.js                # 路由配置
│   ├── utils/
│   │   └── request.js              # Axios 封装（请求/响应拦截器）
│   ├── views/
│   │   ├── assessment/             # 测评模块
│   │   │   └── SuicideTest.vue     # 心理安全评估页面
│   │   ├── consult/                # 咨询模块
│   │   │   ├── ConsultationRecord.vue  # 咨询记录
│   │   │   └── ExpertConsultation.vue  # 专家咨询预约
│   │   └── index/                  # 主页面模块
│   │       ├── AIConsult.vue       # AI 智能咨询
│   │       ├── EmotionRegulation.vue   # 情绪调节方法学习
│   │       ├── cognition.vue       # 认知评估结果展示
│   │       ├── community.vue       # 社区树洞
│   │       ├── emotion.vue         # 情绪状态分析
│   │       ├── explore.vue         # 探索地图导航
│   │       ├── garden.vue          # 家园成长打卡
│   │       ├── hollandAssessment.vue   # 霍兰德职业兴趣测评
│   │       ├── home.vue            # 首页
│   │       ├── layout.vue          # 布局组件（底部导航栏）
│   │       ├── mine.vue            # 个人中心
│   │       └── occupation.vue      # 职业测评结果
│   ├── App.vue                     # 根组件
│   └── main.js                     # 应用入口
├── index.html                      # HTML 入口
├── package.json                    # 项目配置
├── vite.config.js                  # Vite 配置
├── .eslintrc.cjs                   # ESLint 配置
├── .prettierrc.json                # Prettier 配置
└── .gitignore                      # Git 忽略配置
```

---

## 功能模块详解

### 1. 首页模块 ([home.vue](src/views/index/home.vue))

首页作为用户进入应用的第一界面，提供以下功能：

- **用户欢迎区**：显示用户昵称与励志寄语
- **打卡签到**：每日心理成长打卡功能
- **预约提醒**：咨询预约时间提醒通知
- **心理测评入口**：
  - 情绪测评：焦虑、抑郁、压力、心理韧性
  - 认知测评：自我认知、职业认知、职业决策
  - 职业测评：职业兴趣匹配、职业能力倾向
  - 自杀意念专项评估（特殊入口）
- **心理支持入口**：
  - AI 咨询（7×24小时即时响应）
  - 情绪调节方法学习

### 2. 心理测评模块

#### 情绪状态分析 ([emotion.vue](src/views/index/emotion.vue))

- 综合情绪评分展示
- 焦虑、抑郁、压力三维柱状图分析
- 个性化调节建议
- 快捷操作入口：正念练习、焦虑管理、压力释放、心理咨询

#### 认知评估 ([cognition.vue](src/views/index/cognition.vue))

- 自我认知清晰度评分
- 职业决策信心评估
- 发展建议标签：职业锚测评、决策训练、自我反思、生涯咨询

#### 职业测评 ([occupation.vue](src/views/index/occupation.vue))

- 霍兰德职业兴趣类型识别（RIASEC模型）
- 六维雷达图可视化展示
- 职业性格描述
- 推荐职业领域标签

#### 心理安全评估 ([SuicideTest.vue](src/views/assessment/SuicideTest.vue))

- 温馨提示与关怀引导
- 紧急联系方式展示（全国心理援助热线、地方心理学会）
- 一键联系咨询师功能

### 3. 心理支持模块

#### AI 智能咨询 ([AIConsult.vue](src/views/index/AIConsult.vue))

- AI 咨询助手在线状态显示
- 智能对话交互界面
- 快捷回复标签：压力倾诉、职业迷茫、面试困扰
- 专业咨询引导提示

#### 专家咨询预约 ([ExpertConsultation.vue](src/views/consult/ExpertConsultation.vue))

- 签约专家列表展示
- 专家信息：姓名、评分、资质标签、擅长领域、咨询费用
- 预约确认弹窗
- 预约成功提示
- 广州市心理学会官方合作标识

#### 情绪调节学习 ([EmotionRegulation.vue](src/views/index/EmotionRegulation.vue))

- 学习进度追踪
- 三大调节方法：
  - 正念疗法：呼吸观察、身体感受觉察
  - 认知行为疗法：负面思维识别与调整
  - 放松技巧：渐进式肌肉放松、想象放松

### 4. 社区模块 ([community.vue](src/views/index/community.vue))

- **匿名发布**：心事倾诉输入框
- **分类筛选**：推荐、树洞、热门
- **帖子列表**：匿名发布、互动数据（点赞、评论、收藏）
- **热门标签**：HOT、NEW 状态标识
- **社区统计**：连续倾诉人数、树洞守护者、点赞榜单

### 5. 家园成长模块 ([garden.vue](src/views/index/garden.vue))

- **打卡系统**：连续打卡天数统计
- **成长阶段**：幼苗期 → 生长期 → 成熟期
- **成就徽章**：
  - 初露锋芒（首次打卡）
  - 持之以恒（连续7天）
  - 周活跃（本周5次）
- **用户信息**：昵称、UID展示

### 6. 探索模块 ([explore.vue](src/views/index/explore.vue))

- **可视化地图**：游戏化路径导航设计
- **功能节点**：心理测评、心理支持、社区、家园
- **装饰元素**：云朵、花瓣、蝴蝶、植物等治愈系动画
- **快捷入口**：商店、任务包

### 7. 个人中心 ([mine.vue](src/views/index/mine.vue))

- **用户信息**：头像、昵称、状态标签
- **数据统计**：树洞被赞、打卡天数、成就数量
- **功能菜单**：
  - 我的预约
  - 我的收藏
  - 树洞记录
  - 帮助与反馈
  - 设置

### 8. 布局导航 ([layout.vue](src/views/index/layout.vue))

- **底部导航栏**：首页、社区、探索（中央凸起）、家园、我的
- **页面切换动画**：平滑过渡效果
- **iPhone适配**：safe-area-inset-bottom 底部安全区

---

## 路由配置

| 路径 | 名称 | 组件 | 说明 |
|------|------|------|------|
| `/` | layout | LayoutView | 主布局（重定向至 /home） |
| `/home` | home | HomeView | 首页 |
| `/mine` | mine | MineView | 个人中心 |
| `/explore` | explore | ExploreView | 探索地图 |
| `/garden` | garden | GardenView | 家园成长 |
| `/community` | community | CommunityView | 社区树洞 |
| `/ai-consult` | ai-consult | AiConsultView | AI 咨询 |
| `/emotion-regulation` | emotion-regulation | EmotionRegulationView | 情绪调节 |
| `/emotion` | emotion | EmotionView | 情绪测评结果 |
| `/cognition` | cognition | CognitionView | 认知测评结果 |
| `/occupation` | occupation | OccupationView | 职业测评结果 |
| `/expert-consultation` | expert-consultation | ExpertConsultationView | 专家咨询 |
| `/suicide-test` | suicide-test | SuicideTestView | 心理安全评估 |
| `/consultation-record` | consultation-record | ConsultationRecordView | 咨询记录 |

---

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 pnpm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 开发运行

```bash
npm run dev
```

启动后访问 http://localhost:5173

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

---

## 开发配置

### Vite 配置 ([vite.config.js](vite.config.js))

```javascript
{
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

### API 请求封装 ([src/utils/request.js](src/utils/request.js))

- 基于 Axios 创建请求实例
- 请求拦截器：自动携带 Token
- 响应拦截器：统一错误处理（401 登录超时跳转）
- baseURL: `/api`
- timeout: 600000ms

---

## 设计特色

### 视觉风格

- **配色方案**：以浅蓝色 (#f8fbff) 为主背景，搭配橙色 (#ff9d42) 强调色
- **圆角设计**：大量使用 20-30px 圆角，营造柔和亲切感
- **卡片阴影**：轻柔阴影效果，层次分明
- **Emoji 图标**：使用表情符号作为功能图标，增强亲和力

### 交互体验

- **页面动画**：淡入淡出、浮动动画增强趣味性
- **触摸反馈**：按钮点击缩放效果
- **Toast 提示**：胶囊形状提示框，操作反馈清晰
- **底部导航**：中央凸起设计，视觉焦点明确

### 治愈系元素

- 探索页面的花瓣飘落、蝴蝶飞舞动画
- 家园页面的树木成长可视化
- 社区页面的温暖配色与匿名保护

---

## 后端接口约定

项目前端通过 `/api` 代理与后端服务通信，后端服务默认运行在 `http://localhost:8080`。

### 认证机制

- 登录成功后，Token 存储在 `localStorage.loginUser.token`
- 请求时自动在 Header 中携带 `token` 字段
- 401 响应自动跳转登录页

---

## 项目扩展建议

1. **接入真实 AI 服务**：集成大语言模型 API，实现智能对话
2. **完善测评问卷**：开发完整的心理测评量表与评分算法
3. **用户系统**：实现登录注册、个人信息管理
4. **数据持久化**：打卡记录、测评历史、咨询记录存储
5. **支付系统**：专家咨询预约支付功能
6. **消息推送**：预约提醒、社区互动通知

---

## 许可证

本项目仅供学习交流使用。

---

## 贡献指南

欢迎提交 Issue 和 Pull Request 参与项目改进。

---

## 联系方式

如有问题或建议，请通过 GitHub Issue 反馈。