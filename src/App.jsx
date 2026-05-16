import { useMemo, useState } from 'react';

const profile = {
  zh: {
    nav: ['首页', '关于', '经历', '项目', '技能', '联系'],
    language: 'EN',
    name: '牢Bing',
    role: 'Agent 产品经理',
    intro: '嗨，我是牢Bing',
    summary:
      '专注于 Agent 产品设计、用户需求洞察与 AI 工作流体验。这里将作为我的个人主页，用来展示履历、项目作品与联系方式。',
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
        period: '硕士',
        title: 'xx理工大学',
        description: '硕士阶段经历，研究方向与代表成果待补充。',
      },
      {
        period: '当前',
        title: 'xx智能有限公司',
        description: '现任 Agent 产品经理，负责 Agent 产品规划、需求分析与产品迭代。',
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
    contactText: '欢迎通过以下方式联系我。',
    contacts: ['xxx'],
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Work', 'Skills', 'Contact'],
    language: '中',
    name: 'LaoBing',
    role: 'Agent Product Manager',
    intro: 'Hi, I am LaoBing',
    summary:
      'I focus on Agent product design, user insight, and AI workflow experiences. This site presents my profile, work, and contact information.',
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
        period: 'Master',
        title: 'xx University of Technology',
        description: 'Graduate education, research direction, and key outcomes to be updated.',
      },
      {
        period: 'Now',
        title: 'xx Intelligence Co., Ltd.',
        description:
          'Currently working as an Agent Product Manager, responsible for product planning, requirements, and iteration.',
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
    contactText: 'Feel free to reach out through the contact below.',
    contacts: ['xxx'],
  },
};

const sectionIds = ['home', 'about', 'experience', 'work', 'skills', 'contact'];

export default function App() {
  const [language, setLanguage] = useState('zh');
  const content = profile[language];
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  const navItems = useMemo(
    () => content.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [content.nav],
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label={content.name}>
          <span className="brand-mark">LB</span>
          <span>{content.name}</span>
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
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{content.role}</p>
            <h1>{content.intro}</h1>
            <p className="hero-summary">{content.summary}</p>
          </div>

          <div className="identity-panel" aria-label={content.name}>
            <div className="portrait-mark">
              <span>LB</span>
            </div>
            <div className="identity-line" />
            <p>{content.role}</p>
          </div>
        </section>

        <section className="section about-layout" id="about">
          <div>
            <p className="section-index">01</p>
            <h2>{content.aboutTitle}</h2>
          </div>
          <div className="section-body">
            <p>{content.aboutText}</p>
            <div className="stat-grid">
              {content.stats.map((item) => (
                <div className="stat-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-index">02</p>
            <h2>{content.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {content.experiences.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="section-index">03</p>
            <h2>{content.workTitle}</h2>
          </div>
          <div className="work-grid">
            {content.works.map((item) => (
              <article className="work-card" key={`${item.type}-${item.title}`}>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-layout" id="skills">
          <div>
            <p className="section-index">04</p>
            <h2>{content.skillsTitle}</h2>
          </div>
          <ul className="skill-list">
            {content.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section contact-section" id="contact">
          <p className="section-index">05</p>
          <h2>{content.contactTitle}</h2>
          <p>{content.contactText}</p>
          <div className="contact-list">
            {content.contacts.map((item) => (
              <a href={`mailto:${item}`} key={item}>
                {item}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
