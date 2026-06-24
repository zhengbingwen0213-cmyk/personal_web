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
    workTitle: '项目与作品',
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
    workTitle: 'Projects & Writing',
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
              {content.experiences.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <time>{item.period}</time>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section work-section" id="work">
          <div className="section-inner">
            <SectionHeader index="03" title={content.workTitle} />
            <div className="work-grid">
              {content.works.map((item) => (
                <button
                  className="work-card"
                  type="button"
                  key={`${item.type}-${item.title}`}
                  onClick={() => setSelectedWork(item)}
                >
                  <div className="work-card-meta">
                    <span>{item.type}</span>
                    <span>{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="work-card-action">{item.detailLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section skills-section" id="skills">
          <div className="section-inner editorial-grid">
            <SectionHeader index="04" title={content.skillsTitle} inverted />
            <ul className="skill-list">
              {content.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
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
