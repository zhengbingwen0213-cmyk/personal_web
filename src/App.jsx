import { useMemo, useState } from 'react';
import { ArrowRight, Check, Menu, X } from 'lucide-react';

const profile = {
  zh: {
    nav: ['首页', '关于', '经历', '项目', '技能', '联系'],
    language: 'EN',
    name: '牢Bing',
    role: 'Agent 产品经理',
    intro: '嗨，我是牢Bing',
    summary:
      '专注于 Agent 产品设计、用户需求洞察与 AI 工作流体验。这里将作为我的个人主页，用来展示履历、项目作品与联系方式。',
    primaryAction: '联系我',
    secondaryAction: '看经历',
    stats: [
      { value: 'Agent', label: '产品方向' },
      { value: 'AI', label: '关注领域' },
      { value: 'PM', label: '职业身份' },
      { value: 'Now', label: '持续更新' },
    ],
    aboutTitle: '关于我',
    aboutLabel: 'Profile / 01',
    aboutText:
      '我是一名 Agent 产品经理，关注智能体如何进入真实业务场景，并把复杂能力转化为清晰、可用、可信赖的产品体验。',
    experienceTitle: '经历',
    experienceLabel: 'Resume / 02',
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
    workLabel: 'Work / 03',
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
    skillsLabel: 'System / 04',
    skills: ['xxx', 'Agent 产品设计', '需求分析', 'AI 工作流', '产品迭代'],
    contactTitle: '联系',
    contactLabel: 'Contact / 05',
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
    primaryAction: 'Contact',
    secondaryAction: 'Experience',
    stats: [
      { value: 'Agent', label: 'Product Focus' },
      { value: 'AI', label: 'Domain' },
      { value: 'PM', label: 'Role' },
      { value: 'Now', label: 'In Progress' },
    ],
    aboutTitle: 'About',
    aboutLabel: 'Profile / 01',
    aboutText:
      'I am an Agent Product Manager interested in turning advanced AI capabilities into clear, useful, and trustworthy product experiences.',
    experienceTitle: 'Experience',
    experienceLabel: 'Resume / 02',
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
    workLabel: 'Work / 03',
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
    skillsLabel: 'System / 04',
    skills: ['xxx', 'Agent Product Design', 'Requirement Analysis', 'AI Workflow', 'Product Iteration'],
    contactTitle: 'Contact',
    contactLabel: 'Contact / 05',
    contactText: 'Feel free to reach out through the contact below.',
    contacts: ['xxx'],
  },
};

const sectionIds = ['home', 'about', 'experience', 'work', 'skills', 'contact'];
const shapeClasses = ['shape-dot shape-red', 'shape-square shape-blue', 'shape-triangle shape-yellow'];

function GeometricLogo() {
  return (
    <span className="geo-logo" aria-hidden="true">
      <span className="geo-logo-circle" />
      <span className="geo-logo-square" />
      <span className="geo-logo-triangle" />
    </span>
  );
}

function SectionHeading({ eyebrow, title, inverted = false }) {
  return (
    <div className={`section-heading${inverted ? ' section-heading-inverted' : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function contactHref(item) {
  return item.includes('@') ? `mailto:${item}` : '#contact';
}

export default function App() {
  const [language, setLanguage] = useState('zh');
  const [menuOpen, setMenuOpen] = useState(false);
  const content = profile[language];
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  const navItems = useMemo(
    () => content.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [content.nav],
  );

  const switchLanguage = () => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  };

  return (
    <div className="bauhaus-site">
      <header className="site-header">
        <a className="brand" href="#home" aria-label={content.name} onClick={() => setMenuOpen(false)}>
          <GeometricLogo />
          <span className="brand-copy">
            <strong>{content.name}</strong>
            <small>{content.role}</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="language-toggle nav-language" type="button" onClick={switchLanguage}>
            {content.language}
          </button>
        </nav>

        <button className="language-toggle header-language" type="button" onClick={switchLanguage}>
          {content.language}
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{content.role}</p>
            <h1>{content.intro}</h1>
            <p className="hero-summary">{content.summary}</p>
            <div className="hero-actions">
              <a className="button button-red" href="#contact">
                {content.primaryAction}
                <ArrowRight size={22} strokeWidth={3} />
              </a>
              <a className="button button-outline" href="#experience">
                {content.secondaryAction}
              </a>
            </div>
          </div>

          <div className="hero-art-panel" aria-label={content.name}>
            <div className="hero-art" aria-hidden="true">
              <span className="art-circle" />
              <span className="art-square" />
              <span className="art-bar" />
              <span className="art-card">LB</span>
              <span className="art-triangle" />
            </div>
            <p>{content.role}</p>
          </div>
        </section>

        <section className="profile-section" id="about">
          <div className="profile-copy">
            <SectionHeading eyebrow={content.aboutLabel} title={content.aboutTitle} />
            <p>{content.aboutText}</p>
          </div>

          <div className="stat-grid" aria-label={content.aboutTitle}>
            {content.stats.map((item, index) => (
              <article className="stat-card" key={item.label}>
                <span className={shapeClasses[index % shapeClasses.length]} aria-hidden="true" />
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block experience-section" id="experience">
          <SectionHeading eyebrow={content.experienceLabel} title={content.experienceTitle} />
          <div className="timeline">
            {content.experiences.map((item, index) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <time>
                  <span>
                    <em>{String(index + 1).padStart(2, '0')}</em>
                  </span>
                  {item.period}
                </time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block work-section" id="work">
          <SectionHeading eyebrow={content.workLabel} title={content.workTitle} inverted />
          <div className="work-grid">
            {content.works.map((item, index) => (
              <article className="work-card" key={`${item.type}-${item.title}`}>
                <span className={shapeClasses[(index + 1) % shapeClasses.length]} aria-hidden="true" />
                <p className="card-label">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" aria-label={`${item.title} contact`}>
                  <ArrowRight size={24} strokeWidth={3} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block skills-section" id="skills">
          <SectionHeading eyebrow={content.skillsLabel} title={content.skillsTitle} inverted />
          <ul className="skill-list">
            {content.skills.map((skill) => (
              <li key={skill}>
                <span>
                  <Check size={18} strokeWidth={4} />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <SectionHeading eyebrow={content.contactLabel} title={content.contactTitle} />
            <p>{content.contactText}</p>
            <div className="contact-list">
              {content.contacts.map((item) => (
                <a className="button button-blue" href={contactHref(item)} key={item}>
                  {item}
                  <ArrowRight size={22} strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-shapes" aria-hidden="true">
            <span className="contact-circle" />
            <span className="contact-square" />
            <span className="contact-triangle" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <GeometricLogo />
        <p>{content.name}</p>
      </footer>
    </div>
  );
}
