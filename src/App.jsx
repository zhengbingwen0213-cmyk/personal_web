import { useMemo, useState } from 'react';
import SplashCursor from './components/SplashCursor';
import TrueFocus from './components/TrueFocus';

const profile = {
  zh: {
    nav: ['首页', '关于', '经历', '项目', '技能', '联系'],
    language: 'EN',
    name: '牢Bing',
    monogram: 'LB',
    role: 'Agent 产品经理',
    intro: '嗨，我是',
    summary:
      '专注于 Agent 产品设计、用户需求洞察与 AI 工作流体验。这里将作为我的个人主页，用来展示履历、项目作品与联系方式。',
    primaryAction: '联系我',
    secondaryAction: '查看作品',
    emailAction: '联系我',
    focusLabel: '当前焦点',
    focusSentence: 'Agent Product Design',
    heroMeta: ['Agent Product', 'User Insight', 'AI Workflow'],
    stats: [
      { value: 'Agent', label: '产品方向' },
      { value: 'AI', label: '关注领域' },
      { value: 'PM', label: '职业身份' },
    ],
    aboutTitle: '关于我',
    aboutText:
      '我是一名 Agent 产品经理，关注智能体如何进入真实业务场景，并把复杂能力转化为清晰、可用、可信赖的产品体验。',
    experienceTitle: '经历',
    experiences: [
      {
        period: '当前',
        title: 'xx智能有限公司',
        description: '现任 Agent 产品经理，负责 Agent 产品规划、需求分析与产品迭代。',
      },
      {
        period: '硕士',
        title: 'xx理工大学',
        description: '硕士阶段经历，研究方向与代表成果待补充。',
      },
    ],
    workTitle: '项目与作品',
    works: [
      {
        title: 'xxx',
        type: '项目作品',
        description: '项目背景、职责范围、关键成果与链接待补充。',
      },
      {
        title: 'xxx',
        type: '个人博客',
        description: '文章方向、主题栏目与代表内容待补充。',
      },
    ],
    skillsTitle: '技能',
    skills: ['xxx', 'Agent 产品设计', '需求分析', 'AI 工作流', '产品迭代'],
    contactTitle: '联系',
    contactHeadline: '一起把复杂的 AI 能力做成清晰可用的产品体验。',
    contactText: '欢迎通过以下方式联系我。',
    contacts: ['xxx'],
    footer: 'Built for the agentic era.',
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Work', 'Skills', 'Contact'],
    language: '中',
    name: 'LaoBing',
    monogram: 'LB',
    role: 'Agent Product Manager',
    intro: 'Hi, I am',
    summary:
      'I focus on Agent product design, user insight, and AI workflow experiences. This site presents my profile, work, and contact information.',
    primaryAction: 'Contact',
    secondaryAction: 'View Work',
    emailAction: 'Email Me',
    focusLabel: 'Current Focus',
    focusSentence: 'Agent Product Design',
    heroMeta: ['Agent Product', 'User Insight', 'AI Workflow'],
    stats: [
      { value: 'Agent', label: 'Product Focus' },
      { value: 'AI', label: 'Domain' },
      { value: 'PM', label: 'Role' },
    ],
    aboutTitle: 'About',
    aboutText:
      'I am an Agent Product Manager interested in turning advanced AI capabilities into clear, useful, and trustworthy product experiences.',
    experienceTitle: 'Experience',
    experiences: [
      {
        period: 'Now',
        title: 'xx Intelligence Co., Ltd.',
        description:
          'Currently working as an Agent Product Manager, responsible for product planning, requirements, and iteration.',
      },
      {
        period: 'Master',
        title: 'xx University of Technology',
        description: 'Graduate education, research direction, and key outcomes to be updated.',
      },
    ],
    workTitle: 'Projects & Writing',
    works: [
      {
        title: 'xxx',
        type: 'Project',
        description: 'Project background, responsibilities, outcomes, and links to be updated.',
      },
      {
        title: 'xxx',
        type: 'Blog',
        description: 'Writing topics, columns, and representative articles to be updated.',
      },
    ],
    skillsTitle: 'Skills',
    skills: ['xxx', 'Agent Product Design', 'Requirement Analysis', 'AI Workflow', 'Product Iteration'],
    contactTitle: 'Contact',
    contactHeadline: 'Let us turn complex AI capability into clear product experience.',
    contactText: 'Feel free to reach out through the contact below.',
    contacts: ['xxx'],
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

function contactHref(item) {
  return item.includes('@') ? `mailto:${item}` : '#contact';
}

export default function App() {
  const [language, setLanguage] = useState('zh');
  const content = profile[language];
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  const navItems = useMemo(
    () => content.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [content.nav],
  );

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
            <span className="brand-mark">{content.monogram}</span>
            <span className="brand-name">{content.name}</span>
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
              <p className="eyebrow">{content.role}</p>
              <h1>
                <span>{content.intro}</span>
                <span>{content.name}</span>
              </h1>
              <p className="hero-summary">{content.summary}</p>

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

            <aside className="identity-panel" aria-label={`${content.name} identity panel`}>
              <div className="identity-panel-top">
                <span>001</span>
                <span>Personal Index</span>
              </div>
              <div className="poster-frame">
                <span>{content.monogram}</span>
              </div>
              <div className="identity-meta">
                {content.heroMeta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <span className="poster-square" aria-hidden="true" />
            </aside>
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
                <a className="work-card" href="#contact" key={`${item.type}-${item.title}`}>
                  <div className="work-card-meta">
                    <span>{item.type}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
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
                  <a className="button button-primary" href={contactHref(item)} key={item}>
                    {content.emailAction}
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-grid">
          <strong>{content.monogram}</strong>
          <p>© 2026 {content.name}. {content.footer}</p>
          <div className="footer-links" aria-label="External links">
            <a href="#contact">Instagram ↗</a>
            <a href="#contact">LinkedIn ↗</a>
            <a href="#contact">ReadCV ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
