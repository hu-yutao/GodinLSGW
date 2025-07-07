export const pricingPlans = [
  {
    id: "basic",
    name: "基础版",
    price: "免费",
    period: "",
    description: "适合个人用户和小型企业",
    features: [
      "每月100次AI咨询",
      "基础合同模板",
      "法律法规查询",
      "邮件支持",
      "基础案例检索"
    ],
    limitations: [
      "功能有限",
      "咨询次数限制",
      "无高级功能"
    ],
    buttonText: "免费试用",
    popular: false,
    color: "gray"
  },
  {
    id: "professional",
    name: "专业版",
    price: "¥2,999",
    period: "/月",
    description: "适合中小型律所和企业法务部门",
    features: [
      "无限AI法律咨询",
      "高级合同审查",
      "智能文书生成",
      "案例深度分析",
      "风险评估报告",
      "7x24小时客服",
      "API接口调用",
      "团队协作功能"
    ],
    limitations: [],
    buttonText: "立即购买",
    popular: true,
    color: "black",
    savings: "年付可省20%"
  },
  {
    id: "enterprise",
    name: "企业版",
    price: "¥9,999",
    period: "/月",
    description: "适合大型企业和律师事务所",
    features: [
      "专业版所有功能",
      "定制化AI模型",
      "私有化部署选项",
      "专属客户经理",
      "数据安全加密",
      "高级分析报告",
      "无限团队成员",
      "优先技术支持",
      "培训服务",
      "SLA保障"
    ],
    limitations: [],
    buttonText: "联系销售",
    popular: false,
    color: "black"
  },
  {
    id: "custom",
    name: "定制版",
    price: "联系我们",
    period: "",
    description: "为大型机构提供完全定制化解决方案",
    features: [
      "完全定制化功能",
      "专属AI模型训练",
      "本地化部署",
      "专业实施团队",
      "24/7技术支持",
      "数据迁移服务",
      "合规性保障",
      "定期业务回顾",
      "专业培训计划"
    ],
    limitations: [],
    buttonText: "预约咨询",
    popular: false,
    color: "gradient"
  }
]

export const comparisonFeatures = [
  {
    category: "基础功能",
    features: [
      {
        name: "AI法律咨询",
        basic: "100次/月",
        professional: "无限",
        enterprise: "无限",
        custom: "无限"
      },
      {
        name: "合同审查",
        basic: "基础模板",
        professional: "高级审查",
        enterprise: "深度分析",
        custom: "定制模型"
      },
      {
        name: "文书生成",
        basic: "❌",
        professional: "✅",
        enterprise: "✅",
        custom: "✅"
      }
    ]
  },
  {
    category: "高级功能",
    features: [
      {
        name: "风险评估",
        basic: "❌",
        professional: "✅",
        enterprise: "高级版",
        custom: "定制版"
      },
      {
        name: "API接口",
        basic: "❌",
        professional: "标准API",
        enterprise: "高级API",
        custom: "定制API"
      },
      {
        name: "数据分析",
        basic: "❌",
        professional: "基础报告",
        enterprise: "高级分析",
        custom: "定制分析"
      }
    ]
  },
  {
    category: "支持服务",
    features: [
      {
        name: "客户支持",
        basic: "邮件",
        professional: "7x24客服",
        enterprise: "专属客户经理",
        custom: "专业团队"
      },
      {
        name: "培训服务",
        basic: "❌",
        professional: "在线培训",
        enterprise: "专业培训",
        custom: "定制培训"
      },
      {
        name: "技术支持",
        basic: "基础",
        professional: "优先支持",
        enterprise: "专业支持",
        custom: "24/7专属"
      }
    ]
  }
] 