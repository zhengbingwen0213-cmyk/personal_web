import { useEffect, useMemo, useState } from 'react';
import SplashCursor from './components/SplashCursor';
import TrueFocus from './components/TrueFocus';

const profile = {
  zh: {
    nav: ['首页', '关于', '经历', '项目', '技能', '联系'],
    language: 'EN',
    name: '郑秉文',
    brandName: '个人网站',
    monogram: 'ZB',
    role: 'AI Agent 产品经理',
    intro: '嗨，我是',
    heroTitle: 'Hello',
    heroSubtitle: '郑秉文｜AI 产品经理',
    summary:
      '具备 2 年以上 AI 产品与需求验证经验，聚焦建筑设计、安全巡检等垂直行业 Agent 产品，从业务场景拆解、知识工程到 MVP 验证和上线迭代。',
    primaryAction: '联系我',
    secondaryAction: '查看项目',
    focusLabel: '当前焦点',
    focusSentence: 'AI Agent Product',
    heroMeta: ['AI Agent', 'RAG Knowledge', 'Evaluation Loop'],
    stats: [
      { value: '2Y+', label: 'AI 产品经验' },
      { value: '4000+', label: '知识资产治理' },
      { value: '1000+', label: '评测集沉淀' },
    ],
    aboutTitle: '关于我',
    aboutText:
      '我是一名 AI Agent 产品经理，关注智能体如何进入真实业务场景。熟悉意图识别、槽位提取、任务拆解、工具调用、短期记忆与上下文管理，也擅长专业知识库建设、文档治理、元数据设计、知识检索、来源追溯和内容审核流程。',
    resumeSummaryTitle: '个人总结',
    resumeSummaryClosed: '展开',
    resumeSummaryOpen: '收起',
    resumeSummary: [
      {
        title: 'AI Agent 产品经验',
        body:
          '具备约 2 年以上 AI 产品与需求验证经验，主导或参与建筑设计、安全巡检等垂直行业 Agent 产品建设，能够从业务痛点出发拆解场景、设计能力边界、推动 MVP 验证和上线迭代。',
      },
      {
        title: '垂直知识工程能力',
        body:
          '熟悉专业知识库建设、文档治理、元数据设计、知识检索、来源追溯和内容审核流程，能将专家经验和行业规范转化为 AI 可检索、可评估、可持续运营的数据资产。',
      },
      {
        title: 'Agent 能力设计',
        body:
          '理解大模型能力边界，熟悉意图识别、槽位提取、任务拆解、工具调用、短期记忆和上下文管理等 Agent 产品模块，能把技术能力转化为用户可感知的稳定工作流。',
      },
      {
        title: '敏捷交付能力',
        body:
          '具备基于 Vibe Coding / Coding Agent（Codex/Claude Code/Cursor）的快速原型落地能力，能够将中等复杂需求拆解为可执行任务，完成 POC / MVP 级代码实现、调试验证与迭代优化。',
      },
      {
        title: '评测与闭环意识',
        body:
          '建立以 North Star Metrics 为核心的指标体系，搭建过金标数据评测集、人机协作评测、Badcase 回流机制，关注召回、准确率、幻觉率、工具调用成功率、自助率等指标。',
      },
    ],
    experienceTitle: '经历',
    experiences: [
      {
        period: '2026.04 - 至今',
        title: '宇泛智能科技股份有限公司｜AI Agent 产品经理',
        description:
          '围绕园区、工地等施工场景的安全巡检 Agent，设计节点指标与端到端评测体系，推动自动化评测平台、图集样本管理、Badcase 归因、隐患问答与短期记忆能力建设。',
      },
      {
        period: '2023.10 - 2026.01',
        title: 'Office for Metropolitan Architecture｜AI 产品经理',
        description:
          '主导内部建筑设计助手 Agent 从 0 到 1，覆盖需求验证、产品规划、知识库治理、智能问答、文案生成、工具调用、效果评测与上线迭代，推动多个内部场景快速 POC。',
      },
    ],
    projectExperienceTitle: '工作经历',
    projectExperienceClosed: '展开工作经历',
    projectExperienceOpen: '收起工作经历',
    projectExperiences: [
      {
        title: '宇泛智能科技股份有限公司｜AI Agent 产品经理',
        period: '2026.04 - 至今',
        positioning:
          '围绕园区、工地等施工场景的安全隐患巡检 Agent，负责评测体系、样本治理、Badcase 归因、知识问答与短期记忆等能力建设。',
        groups: [
          {
            title: '安全巡检 Agent 评测',
            items: [
              '围绕面向园区、工地等施工场景的安全隐患巡检 Agent，梳理多来源识别结果口径。',
              '设计 Agent 节点指标与端到端指标，构建评测体系并推动自动化评测平台建设。',
              '主导评测集按照不同场景、不同用途进行体系化构建。',
            ],
          },
          {
            title: '样本治理与 Badcase 归因',
            items: [
              '主导图集样本管理平台建设，推进真实样本接入。',
              '支持人工标注复核、样本排除、图集管理、标签管理等功能。',
              '推动样本沉淀、人工复核与 Badcase 归因进入持续优化链路。',
            ],
          },
          {
            title: '知识问答与记忆机制',
            items: [
              '参与安全施工知识库、短期记忆能力设计。',
              '主导隐患问答建设，支持巡检人员围绕隐患定义、整改建议、误判原因和复核依据进行查询。',
              '围绕巡检上下文保留当前任务、隐患类型与复核信息，辅助连续追问和现场判断。',
            ],
          },
        ],
      },
      {
        title: 'Office for Metropolitan Architecture｜AI 产品经理',
        period: '2023.10 - 2026.01',
        positioning:
          '主导内部建筑设计助手 Agent 建设，覆盖需求验证、产品规划、知识库治理、智能问答、文案生成、工具调用、效果评测与上线迭代。',
        groups: [
          {
            title: 'AI Agent 产品从 0 到 1',
            items: [
              '主导内部建筑设计助手 Agent 建设。',
              '覆盖需求验证、产品规划、知识库治理、智能问答、文案生成、工具调用、效果评测与上线迭代。',
            ],
          },
          {
            title: '需求验证与场景立项',
            items: [
              '访谈 50+ 名资深设计师与管理层。',
              '归纳传统规范检索、设计说明撰写和合规校验痛点。',
              '完成 AI 替代可行性分析和本地化部署立项。',
            ],
          },
          {
            title: '知识工程与评测闭环',
            items: [
              '治理 4000+ 份建筑规范、设计文档和历史方案资料。',
              '沉淀 1000+ 条评测集。',
              '建立“人工评审 + 模型辅助评测”的质量评估机制。',
            ],
          },
          {
            title: '跨场景复用',
            items: [
              '推动知识库、检索链路、Prompt 模板和 Agent 编排能力模块化。',
              '支持财务、法律、行政培训等内部场景快速验证。',
              '将新业务 POC 周期从约 2 个月缩短至 2 周。',
            ],
          },
        ],
      },
    ],
    workTitle: '项目',
    works: [
      {
        title: '安全巡检 Agent',
        type: 'AI 智能巡检平台',
        period: '2026.04 - 至今',
        description:
          '面向园区、工地等施工与生产场景，融合视频监控、AI 分析盒子、云端算法与隐患整改流程。负责评测体系、样本治理、Badcase 闭环、知识问答和记忆机制设计。',
        detailLabel: '查看完整项目经历',
        details: [
          {
            title: '项目定位',
            body:
              '面向园区、工地等施工与生产场景的 AI 智能巡检平台，融合视频监控、AI 分析盒子、云端算法与隐患整改流程，实现任务下发、摄像头抓拍、AI 识别、告警生成、隐患处置和复查闭环，用于提升安全巡检效率并降低人工漏检风险。',
          },
          {
            title: '安全巡检 Agent 评测体系构建',
            items: [
              '梳理开放式多隐患识别与指定隐患判定两类评测场景。',
              '设计样本级、隐患级混淆矩阵，以及命中、漏检、多报、误报等核心指标口径。',
              '明确多图、多隐患、无隐患样本的统计规则，推动评测逻辑沉淀为平台化能力。',
              '支撑数据集回放、Trace 评测、结果看板与后续模型迭代。',
            ],
          },
          {
            title: '样本治理与 Badcase 闭环',
            items: [
              '设计“回流样本拉取 - 人工标注 - 批次详情 - 同步图集”的样本治理流程。',
              '支持模型识别结果进入人工复核、样本沉淀和训练/测试回流链路。',
              '规划隐患排除、忽略图片、排除样本池等机制，降低低价值样本干扰。',
              '按隐患类型、业务来源和误漏报原因归因典型 Badcase，为 Prompt 优化、图集补充和模型迭代提供依据。',
            ],
          },
          {
            title: '知识问答与记忆机制',
            items: [
              '参与安全巡检知识库设计，整理隐患定义、识别标准、整改建议、巡检规则和常见误判原因。',
              '设计“隐患问题 - 知识检索 - 答案生成 - 来源追溯”的问答链路。',
              '保留当前任务、隐患类型、图片判断结果和复核上下文，支持连续追问与复核辅助。',
              '形成“评测发现问题 - Badcase 归因 - 知识库补充 - 问答辅助复核”的持续优化闭环。',
            ],
          },
          {
            title: '项目成果',
            items: [
              '搭建安全巡检 Agent 的自动评测平台与 Badcase 治理闭环。',
              '统一多来源巡检样本的评测口径，支持按来源模块和隐患类型分析误报、漏报和无法判断样本。',
              '沉淀评估采纳、样本排除、移动巡检多图判断、知识问答等方案，为后续模型优化和业务人员复核提供基础能力。',
            ],
          },
        ],
      },
      {
        title: '建筑设计助手 Agent',
        type: 'LLM + RAG + Agent',
        period: '2024.07 - 2025.12',
        description:
          '面向建筑设计中的规范检索与文案撰写任务，主导知识库治理、检索链路、智能问答、文案生成、工具调用与评测闭环。检索召回率提升至 95%，NDCG@5 达 0.91。',
        detailLabel: '查看完整项目经历',
        details: [
          {
            title: '项目背景',
            body:
              '针对建筑设计中知识检索与文案撰写这类高频、强合规的知识密集型任务，解决传统关键词检索召回率低、规范跨版本冲突、文案撰写耗时长和合规风险高等痛点。以“可溯源、可复用、可迭代”为原则，主导研发基于 LLM + RAG + Agent 架构的建筑设计助手。',
          },
          {
            title: '产品规划与场景拆解',
            items: [
              '组织 50+ 名设计师与管理层访谈，结合问卷和线下访谈梳理高频任务。',
              '确认“规范检索”和“设计说明撰写”为首批核心场景。',
              '制定从 MVP 到正式版本的三阶段 Roadmap，先验证问答召回和来源追溯，再扩展到文案生成、合规反查和工具调用。',
              '将需求拆解为知识检索、答案生成、原文溯源、结构化写作、指标计算和结果校核等能力模块。',
            ],
          },
          {
            title: '建筑行业知识库与检索链路',
            items: [
              '治理 4000+ 份建筑规范、设计文档、表格、图片和历史方案资料。',
              '建立专业分类、地域、法规层级、版本时效等元数据体系，支持权限控制、版本过滤和来源追溯。',
              '设计“语义分块 + 结构化分块”方案，使条文、表格、章节标题和适用范围能够稳定召回。',
              '通过 Query 改写、版本号锚定、混合检索和重排序优化召回效果。',
            ],
          },
          {
            title: '智能问答与文案生成工作流',
            items: [
              '设计“问题理解 - 检索 - 答案生成 - 原文溯源 - 追问补全”的问答流程。',
              '面向设计说明、合规报告、技术建议书等场景，设计“大纲规划 - 分段生成 - 规范反查 - 结果校核”的写作流程。',
              '针对强格式、强合规内容采用参数化模板和结构化数据填充。',
              '在编辑器内集成 AI 助手，支持规范反查、内容改写、语气优化和来源确认。',
            ],
          },
          {
            title: 'Agent 任务链与工具调用设计',
            items: [
              '定义 14 类核心业务意图，设计意图边界、槽位字段和承接动作。',
              '设计多工具调用链路，使 Agent 在知识库、结构化数据库、计算工具和搜索工具之间稳定切换。',
              '引入基于 Session 的短期记忆，保存用户当前项目、地区、专业类型和已选规范版本等上下文信息。',
              '推动工具能力标准化封装，将规范检索、指标计算、数据库查询等能力拆成可复用模块。',
            ],
          },
          {
            title: 'Prompt 模板与评测闭环',
            items: [
              '沉淀 11 类标准化 Prompt 模板，覆盖 Query 改写、意图识别、槽位提取、文本生成、结构化输出和结果后处理等节点。',
              '沉淀 1000+ 条金标集，覆盖建筑全专业领域的高频问答、规范判断、文案生成和工具调用场景。',
              '建立“人工评审 + 模型辅助评测”的双层评测机制。',
              '通过用户反馈、埋点日志和评测结果进行问题归因，推动检索、意图识别和指令遵循策略迭代。',
            ],
          },
          {
            title: '项目成果',
            items: [
              'RAG 检索：意图识别准确率 96%，Query 改写准确率 93%，检索召回率 95%，NDCG@5 0.91。',
              'Agent 执行：关键槽位填充成功率 90%，任务拆解成功率 94%，工具调用成功率 93%，生成质量评分 4.5/5.0。',
              '业务效率：规范检索耗时降低约 90%；单份文案撰写时间由约 1.5 小时缩短至 25 分钟。',
              '能力复用：沉淀知识库治理、检索链路、Prompt 模板、评测集和 Agent 编排方案，支持财务、法律、行政培训等内部场景快速 POC。',
            ],
          },
        ],
      },
    ],
    skillsTitle: '技能',
    skills: [
      'AI Agent 产品',
      '场景拆解',
      '意图体系',
      '槽位设计',
      '任务链编排',
      '工具调用',
      '短期记忆',
      'RAG 与知识库',
      '语义分块',
      '混合检索',
      '来源追溯',
      '评测体系',
      'Badcase 归因',
      'PRD',
      '用户访谈',
      'Roadmap',
    ],
    skillGroups: [
      {
        title: 'AI Agent 产品',
        items: ['场景拆解', '意图体系', '槽位设计', '任务链编排', '工具调用', '记忆机制', 'Harness Engineering'],
      },
      {
        title: 'RAG 与知识库',
        items: ['知识抽取', '文档治理', '语义分块', '元数据与标签体系', '混合检索', '重排序', '来源追溯', '内容审核'],
      },
      {
        title: '评测与数据闭环',
        items: ['评测集构建', '评测体系设计', 'Badcase 归因'],
      },
      {
        title: '产品与协作',
        items: ['PRD', '原型设计', '用户访谈', '需求优先级', 'Roadmap', '跨部门协同'],
      },
    ],
    contactTitle: '联系',
    contactHeadline: '一起把复杂的 AI 能力做成清晰、可用、可验证的产品体验。',
    contactText: '欢迎通过电话、微信或邮箱联系我。',
    contacts: [
      { label: '电话', value: '19068536105', href: 'tel:19068536105' },
      { label: '微信', value: '19068536105', href: '#contact' },
      { label: '邮箱', value: '19068536105@163.com', href: 'mailto:19068536105@163.com' },
    ],
    footer: 'Built for the agentic era.',
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Work', 'Skills', 'Contact'],
    language: '中',
    name: 'Bingwen Zheng',
    brandName: 'Personal Website',
    monogram: 'ZB',
    role: 'AI Agent Product Manager',
    intro: 'Hi, I am',
    heroTitle: 'Hello',
    heroSubtitle: 'Bingwen Zheng | AI Product Manager',
    summary:
      'I have 2+ years of AI product and requirement validation experience, with a focus on vertical AI Agent products for architecture design and safety inspection.',
    primaryAction: 'Contact',
    secondaryAction: 'View Projects',
    focusLabel: 'Current Focus',
    focusSentence: 'AI Agent Product',
    heroMeta: ['AI Agent', 'RAG Knowledge', 'Evaluation Loop'],
    stats: [
      { value: '2Y+', label: 'AI Product Experience' },
      { value: '4000+', label: 'Knowledge Assets' },
      { value: '1000+', label: 'Evaluation Cases' },
    ],
    aboutTitle: 'About',
    aboutText:
      'I design AI Agent products for real business scenarios. My work spans intent recognition, slot extraction, task decomposition, tool calling, short-term memory, context management, knowledge base governance, metadata design, retrieval, source tracing, and evaluation loops.',
    resumeSummaryTitle: 'Personal Summary',
    resumeSummaryClosed: 'Open',
    resumeSummaryOpen: 'Close',
    resumeSummary: [
      {
        title: 'AI Agent Product Experience',
        body:
          'I have about 2+ years of AI product and requirement validation experience, leading or contributing to vertical Agent products in architecture design and safety inspection, from pain-point discovery to MVP validation and launch iteration.',
      },
      {
        title: 'Vertical Knowledge Engineering',
        body:
          'I am familiar with knowledge base construction, document governance, metadata design, retrieval, source tracing, and content review, turning expert experience and industry standards into searchable, evaluable, and operable AI data assets.',
      },
      {
        title: 'Agent Capability Design',
        body:
          'I understand LLM capability boundaries and design modules such as intent recognition, slot extraction, task decomposition, tool calling, short-term memory, and context management as stable user-facing workflows.',
      },
      {
        title: 'Agile Delivery',
        body:
          'I can use Vibe Coding / Coding Agent workflows with Codex, Claude Code, and Cursor to break medium-complexity requirements into executable tasks and deliver POC / MVP-level prototypes, debugging, validation, and iteration.',
      },
      {
        title: 'Evaluation And Closed Loops',
        body:
          'I build metric systems around North Star Metrics, including golden evaluation sets, human-AI review, and Badcase feedback loops, with attention to recall, accuracy, hallucination rate, tool-call success, and self-service rate.',
      },
    ],
    experienceTitle: 'Experience',
    experiences: [
      {
        period: '2026.04 - Present',
        title: 'Uniview Smart Technology｜AI Agent Product Manager',
        description:
          'Designed evaluation metrics and automated assessment workflows for a safety inspection Agent across industrial parks and construction sites, while driving sample governance, Badcase attribution, hazard Q&A, and memory capabilities.',
      },
      {
        period: '2023.10 - 2026.01',
        title: 'Office for Metropolitan Architecture｜AI Product Manager',
        description:
          'Led an internal architecture design assistant Agent from 0 to 1, covering requirement validation, product planning, knowledge base governance, intelligent Q&A, copy generation, tool calling, evaluation, launch, and iteration.',
      },
    ],
    projectExperienceTitle: 'Work Experience',
    projectExperienceClosed: 'Open Work Details',
    projectExperienceOpen: 'Close Work Details',
    projectExperiences: [
      {
        title: 'Uniview Smart Technology｜AI Agent Product Manager',
        period: '2026.04 - Present',
        positioning:
          'Worked on safety inspection Agent products for industrial parks and construction scenarios, spanning evaluation, sample governance, Badcase attribution, hazard Q&A, and short-term memory.',
        groups: [
          {
            title: 'Safety Inspection Agent Evaluation',
            items: [
              'Clarified result definitions across multiple recognition sources for safety hazard inspection Agent workflows.',
              'Designed Agent node metrics and end-to-end metrics, built the evaluation framework, and pushed automated evaluation platform development.',
              'Led evaluation set construction by scenario and usage type.',
            ],
          },
          {
            title: 'Sample Governance And Badcase Attribution',
            items: [
              'Led gallery sample management platform construction and promoted real sample ingestion.',
              'Supported manual annotation review, sample exclusion, gallery management, and tag management features.',
              'Connected sample accumulation, manual review, and Badcase attribution into the optimization loop.',
            ],
          },
          {
            title: 'Knowledge Q&A And Memory',
            items: [
              'Contributed to safety construction knowledge base and short-term memory design.',
              'Led hazard Q&A capability construction so inspectors can query hazard definitions, remediation advice, false-positive reasons, and review evidence.',
              'Preserved task, hazard type, and review context to support follow-up questions and on-site judgment.',
            ],
          },
        ],
      },
      {
        title: 'Office for Metropolitan Architecture｜AI Product Manager',
        period: '2023.10 - 2026.01',
        positioning:
          'Led an internal architecture design assistant Agent from 0 to 1, covering validation, planning, knowledge governance, Q&A, writing, tool calling, evaluation, launch, and iteration.',
        groups: [
          {
            title: 'AI Agent Product From 0 To 1',
            items: [
              'Led the internal architecture design assistant Agent initiative.',
              'Covered requirement validation, product planning, knowledge governance, intelligent Q&A, copy generation, tool calling, evaluation, launch, and iteration.',
            ],
          },
          {
            title: 'Requirement Validation And Scenario Initiation',
            items: [
              'Interviewed 50+ senior designers and managers.',
              'Identified pain points in traditional specification retrieval, design-description writing, and compliance checking.',
              'Completed AI replacement feasibility analysis and local deployment initiation.',
            ],
          },
          {
            title: 'Knowledge Engineering And Evaluation Loop',
            items: [
              'Governed 4000+ architecture specifications, design documents, and historical proposal materials.',
              'Created 1000+ evaluation cases.',
              'Established a quality evaluation mechanism combining human review and model-assisted evaluation.',
            ],
          },
          {
            title: 'Cross-scenario Reuse',
            items: [
              'Modularized knowledge base, retrieval chain, Prompt templates, and Agent orchestration capabilities.',
              'Supported quick validation for internal finance, legal, and administrative training scenarios.',
              'Reduced new-business POC cycles from about 2 months to 2 weeks.',
            ],
          },
        ],
      },
    ],
    workTitle: 'Projects',
    works: [
      {
        title: 'Safety Inspection Agent',
        type: 'AI Inspection Platform',
        period: '2026.04 - Present',
        description:
          'An AI inspection platform for industrial parks and construction scenarios. I worked on evaluation design, sample governance, Badcase loops, hazard Q&A, and task memory.',
        detailLabel: 'View full project',
        details: [
          {
            title: 'Positioning',
            body:
              'An AI inspection platform for industrial parks, construction sites, and production scenarios, connecting camera capture, cloud algorithms, alerts, hazard handling, and re-inspection workflows.',
          },
          {
            title: 'Core Work',
            items: [
              'Designed node-level and end-to-end evaluation metrics for safety inspection Agent workflows.',
              'Built sample governance flows for returned samples, human annotation, batch review, and gallery synchronization.',
              'Planned Badcase attribution mechanisms across hazard type, business source, false positives, and missed detections.',
              'Designed hazard Q&A and short-term memory capabilities for continuous review support.',
            ],
          },
          {
            title: 'Outcomes',
            items: [
              'Created the foundation for automated evaluation and Badcase governance.',
              'Unified evaluation definitions across multiple sample sources and hazard categories.',
              'Delivered reusable schemes for sample exclusion, multi-image mobile inspection, and knowledge-assisted review.',
            ],
          },
        ],
      },
      {
        title: 'Architecture Design Assistant Agent',
        type: 'LLM + RAG + Agent',
        period: '2024.07 - 2025.12',
        description:
          'A design assistant for specification retrieval and technical writing. I led knowledge governance, retrieval workflows, Q&A, copy generation, tool calling, and evaluation. Retrieval recall reached 95%, with NDCG@5 at 0.91.',
        detailLabel: 'View full project',
        details: [
          {
            title: 'Background',
            body:
              'A LLM + RAG + Agent assistant for knowledge-intensive architectural design tasks, especially specification retrieval and technical writing.',
          },
          {
            title: 'Core Work',
            items: [
              'Interviewed 50+ designers and managers to identify specification retrieval and design writing as first MVP scenarios.',
              'Governed 4000+ architecture specifications, design documents, tables, images, and historical proposal materials.',
              'Designed semantic and structured chunking, metadata, hybrid retrieval, reranking, source tracing, and version filtering.',
              'Built Q&A, writing, tool-calling, session memory, standardized prompts, and evaluation loops.',
            ],
          },
          {
            title: 'Outcomes',
            items: [
              'RAG retrieval recall reached 95%, with NDCG@5 at 0.91.',
              'Intent recognition reached 96%, Query rewrite accuracy reached 93%, and tool calling success reached 93%.',
              'Specification retrieval time decreased by about 90%; single document writing time dropped from about 1.5 hours to 25 minutes.',
            ],
          },
        ],
      },
    ],
    skillsTitle: 'Skills',
    skills: [
      'AI Agent Product',
      'Scenario Decomposition',
      'Intent System',
      'Slot Design',
      'Task Orchestration',
      'Tool Calling',
      'Short-term Memory',
      'RAG',
      'Knowledge Base',
      'Semantic Chunking',
      'Hybrid Search',
      'Source Tracing',
      'Evaluation System',
      'Badcase Attribution',
      'PRD',
      'User Interview',
      'Roadmap',
    ],
    skillGroups: [
      {
        title: 'AI Agent Product',
        items: ['Scenario Decomposition', 'Intent System', 'Slot Design', 'Task Orchestration', 'Tool Calling', 'Memory Mechanism', 'Harness Engineering'],
      },
      {
        title: 'RAG And Knowledge Base',
        items: ['Knowledge Extraction', 'Document Governance', 'Semantic Chunking', 'Metadata And Tags', 'Hybrid Retrieval', 'Reranking', 'Source Tracing', 'Content Review'],
      },
      {
        title: 'Evaluation And Data Loop',
        items: ['Evaluation Set Construction', 'Evaluation System Design', 'Badcase Attribution'],
      },
      {
        title: 'Product And Collaboration',
        items: ['PRD', 'Prototype Design', 'User Interviews', 'Requirement Priority', 'Roadmap', 'Cross-functional Collaboration'],
      },
    ],
    contactTitle: 'Contact',
    contactHeadline: 'Let us turn complex AI capability into clear, useful, and measurable product experience.',
    contactText: 'Reach me by phone, WeChat, or email.',
    contacts: [
      { label: 'Phone', value: '19068536105', href: 'tel:19068536105' },
      { label: 'WeChat', value: '19068536105', href: '#contact' },
      { label: 'Email', value: '19068536105@163.com', href: 'mailto:19068536105@163.com' },
    ],
    footer: 'Built for the agentic era.',
  },
};

const sectionIds = ['home', 'about', 'experience', 'work', 'skills', 'contact'];

function SectionHeader({ index, title, inverted = false }) {
  return (
    <div className={`section-header${inverted ? ' section-header-inverted' : ''}`}>
      <span className="section-rule" aria-hidden="true" />
      <p className="section-index">{index} /</p>
      <h2>{title}</h2>
    </div>
  );
}

function WorkDetailModal({ work, onClose }) {
  if (!work) {
    return null;
  }

  return (
    <div className="work-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="work-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="work-modal-header">
          <div>
            <p className="work-modal-type">{work.type}</p>
            <p className="work-modal-period">{work.period}</p>
            <h3 id="work-modal-title">{work.title}</h3>
          </div>
          <button className="work-modal-close" type="button" onClick={onClose} aria-label="关闭项目详情">
            ×
          </button>
        </div>

        <div className="work-modal-body">
          <p className="work-modal-summary">{work.description}</p>
          {work.details.map((section) => (
            <article className="work-detail-section" key={section.title}>
              <h4>{section.title}</h4>
              {section.body ? <p>{section.body}</p> : null}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('zh');
  const [selectedWork, setSelectedWork] = useState(null);
  const content = profile[language];
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  const navItems = useMemo(
    () => content.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [content.nav],
  );

  useEffect(() => {
    if (!selectedWork) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedWork(null);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [selectedWork]);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#FFFFFF"
      />

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#home" aria-label={content.name}>
            <span className="brand-name">{content.brandName}</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <button className="language-toggle" type="button" onClick={() => setLanguage(nextLanguage)}>
            {content.language}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <div className="hero-focus" aria-label={content.focusLabel}>
                <span>{content.focusLabel}</span>
                <TrueFocus
                  sentence={content.focusSentence}
                  manualMode={false}
                  blurAmount={4}
                  borderColor="#000000"
                  glowColor="rgba(0, 0, 0, 0.22)"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </div>

              <div className="hero-main">
                <h1>
                  <span>{content.heroTitle}</span>
                </h1>
                <p className="hero-subtitle">{content.heroSubtitle}</p>
                <p className="hero-summary">{content.summary}</p>

                <div className="hero-actions" aria-label="Primary actions">
                  <a className="button button-primary" href="#contact">
                    {content.primaryAction}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a className="button button-ghost" href="#work">
                    {content.secondaryAction}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section about-section" id="about">
          <div className="section-inner editorial-grid">
            <SectionHeader index="01" title={content.aboutTitle} />
            <div className="section-body">
              <p className="lead-copy">{content.aboutText}</p>
              <details className="resume-summary">
                <summary>
                  <span>{content.resumeSummaryTitle}</span>
                  <span className="resume-summary-state resume-summary-state-closed">
                    {content.resumeSummaryClosed}
                  </span>
                  <span className="resume-summary-state resume-summary-state-open">{content.resumeSummaryOpen}</span>
                </summary>
                <div className="resume-summary-list">
                  {content.resumeSummary.map((item) => (
                    <article className="resume-summary-item" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </details>
              <div className="stat-grid" aria-label={content.aboutTitle}>
                {content.stats.map((item) => (
                  <article className="stat-item" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section experience-section" id="experience">
          <div className="section-inner">
            <SectionHeader index="02" title={content.experienceTitle} />
            <div className="timeline">
              {content.experiences.map((item, index) => {
                const workDetail = content.projectExperiences[index];
                const [companyName, roleName] = item.title.split('｜');

                return (
                  <details className="timeline-item timeline-item-expandable" key={`${item.period}-${item.title}`}>
                    <summary className="timeline-summary">
                      <time>{item.period}</time>
                      <div className="timeline-summary-main">
                        <h3>{companyName || item.title}</h3>
                        {roleName ? <p className="timeline-role">{roleName}</p> : null}
                        <p className="timeline-description">{item.description}</p>
                        {workDetail ? (
                          <span className="timeline-expand-label">
                            <span className="resume-summary-state resume-summary-state-closed">
                              {content.projectExperienceClosed}
                            </span>
                            <span className="resume-summary-state resume-summary-state-open">
                              {content.projectExperienceOpen}
                            </span>
                          </span>
                        ) : null}
                      </div>
                    </summary>
                    {workDetail ? (
                      <div className="timeline-project-panel">
                        <article className="project-experience-card" key={`${workDetail.title}-${workDetail.period}`}>
                          <div className="project-experience-content">
                            {workDetail.groups.map((group) => (
                              <section className="project-experience-group" key={`${workDetail.title}-${group.title}`}>
                                <h4>{group.title}</h4>
                                <ul>
                                  {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </section>
                            ))}
                            {workDetail.outcomes?.length ? (
                              <section className="project-experience-group project-experience-outcomes">
                                <h4>{language === 'zh' ? '项目成果' : 'Outcomes'}</h4>
                                <ul>
                                  {workDetail.outcomes.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </section>
                            ) : null}
                          </div>
                        </article>
                      </div>
                    ) : null}
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <section className="page-section work-section" id="work">
          <div className="section-inner">
            <SectionHeader index="03" title={content.workTitle} />
            <div className="work-grid">
              {content.works.map((item) => (
                <details className="work-card" key={`${item.type}-${item.title}`}>
                  <summary className="work-card-summary">
                    <div className="work-card-meta">
                      <span>{item.type}</span>
                      <span>{item.period}</span>
                    </div>
                    <div className="work-card-main">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <span className="work-card-action">
                      <span className="resume-summary-state resume-summary-state-closed">{item.detailLabel}</span>
                      <span className="resume-summary-state resume-summary-state-open">
                        {language === 'zh' ? '收起项目经历' : 'Close project'}
                      </span>
                    </span>
                  </summary>
                  <div className="work-card-detail">
                    {item.details.map((section) => (
                      <section className="work-card-detail-section" key={`${item.title}-${section.title}`}>
                        <h4>{section.title}</h4>
                        {section.body ? <p>{section.body}</p> : null}
                        {section.items ? (
                          <ul>
                            {section.items.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section skills-section" id="skills">
          <div className="section-inner editorial-grid">
            <SectionHeader index="04" title={content.skillsTitle} inverted />
            <div className="skill-group-grid">
              {content.skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section contact-section" id="contact">
          <div className="section-inner contact-grid">
            <SectionHeader index="05" title={content.contactTitle} />
            <div className="contact-copy">
              <p className="contact-headline">{content.contactHeadline}</p>
              <p>{content.contactText}</p>
              <div className="contact-list">
                {content.contacts.map((item) => (
                  <a className="button button-primary" href={item.href} key={`${item.label}-${item.value}`}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />

      <footer className="site-footer">
        <div className="section-inner footer-grid">
          <p>© 2026 {content.name}. {content.footer}</p>
          <div className="footer-links" aria-label="External links">
            {content.contacts.map((item) => (
              <a href={item.href} key={`${item.label}-footer`}>
                {item.label} ↗
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
