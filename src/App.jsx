import { useEffect, useState } from 'react'

const navItems = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Research', '#research'],
  ['Experience', '#experience'],
]

const skills = [
  { icon: 'code', title: 'Frontend', text: 'React.js · Vite · JavaScript · HTML · CSS' },
  { icon: 'server', title: 'Backend & APIs', text: 'Node.js · Express.js · FastAPI · REST APIs' },
  { icon: 'database', title: 'Data', text: 'PostgreSQL · MySQL · MongoDB · Prisma ORM · Neon' },
  { icon: 'brain', title: 'AI / ML', text: 'XGBoost · Transfer Learning · Weka · Pandas' },
  { icon: 'cloud', title: 'DevOps', text: 'Git · GitHub · Docker · Vercel · Render · Railway' },
  { icon: 'terminal', title: 'Languages', text: 'JavaScript · Python · C · C++ · Java' },
]

const projects = [
  {
    number: '01',
    type: 'Hackathon · AI/ML',
    title: 'Ki Bazaar Korbo',
    description: 'An AI grocery price intelligence platform for Bangladesh with forecasting, fair-price checking, basket optimization, and market comparison.',
    stack: ['React', 'FastAPI', 'XGBoost', 'Groq API', 'Docker'],
    tone: 'blue',
    github: 'https://github.com/Atandrila/KiBazaarKorbo',
    live: 'https://ki-bazaar-korbo.vercel.app/',
  },
  {
    number: '02',
    type: 'Internship · Full stack',
    title: 'CV Forge',
    description: 'A role-aware CV management system with reusable profile data, position-specific resumes, and workflows for candidates, recruiters, and administrators.',
    stack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    tone: 'coral',
    github: 'https://github.com/Atandrila/cv-management-system',
    live: 'https://cv-forge-wkrw.onrender.com/',
  },
  {
    number: '03',
    type: 'Web application',
    title: 'Travel Platform',
    description: 'A full-stack travel experience featuring place recommendations, hotel booking workflows, and curated tour-package exploration.',
    stack: ['React', 'MongoDB', 'Full stack'],
    tone: 'green',
    github: 'https://github.com/Atandrila/WanderHub-web',
  },
  {
    number: '04',
    type: 'Product ecosystem',
    title: 'Cat Adoption & Journal',
    description: 'A C# and ASP.NET platform combining pet adoption management, online product browsing, and an editorial journal.',
    stack: ['C#', 'ASP.NET', 'Product design'],
    tone: 'violet',
    github: 'https://github.com/Atandrila/CatZy-web',
  },
]

const research = [
  {
    eyebrow: 'B.Sc. Thesis · Ongoing',
    title: 'Blockchain-based disaster management',
    text: 'A transparent flood-fund distribution architecture using Fuzzy AHP for dynamic priority assessment and secure National ID linking logic.',
    stat: 'Fuzzy AHP',
    label: 'priority engine',
  },
  {
    eyebrow: 'Computer Vision · Completed',
    title: 'Multi-class eye disease detection',
    text: 'Evaluation of ResNet-50, DenseNet-121, and EfficientNet-B0 across 4,217 retinal fundus images, supported by a classical segmentation pipeline.',
    stat: '93.83%',
    label: 'DenseNet-121 accuracy',
    github: 'https://github.com/Atandrila/multi-class-eye-disease-detection-transfer-learning',
  },
  {
    eyebrow: 'Data Mining · Completed',
    title: 'Court hearing behavior prediction',
    text: 'An automated Java/Weka pipeline built from Bangladesh Judiciary Cause List records, comparing Random Forest, J48, and SVM models.',
    stat: '98.00%',
    label: 'classification accuracy',
    github: 'https://github.com/Atandrila/repetitive-hearing-prediction',
  },
]

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
    brain: <><path d="M12 5a3 3 0 1 0-5.5 1.7A4 4 0 0 0 5 14a4 4 0 0 0 7 3"/><path d="M12 5a3 3 0 1 1 5.5 1.7A4 4 0 0 1 19 14a4 4 0 0 1-7 3V5"/><path d="M8 11h4M16 9h-4"/></>,
    cloud: <path d="M17.5 19H7a5 5 0 1 1 1-9.9A6 6 0 0 1 19 12a3.5 3.5 0 0 1-1.5 7Z"/>,
    terminal: <><path d="m4 6 5 5-5 5"/><path d="M12 18h8"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.2 0S18 0 15 1.6a13.4 13.4 0 0 0-7 0C5 0 3.8 0 3.8 0a5.4 5.4 0 0 0-.1 3A5.8 5.8 0 0 0 2.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
    external: <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    close: <><path d="M18 6 6 18M6 6l12 12"/></>,
    menu: <><path d="M4 8h16M4 16h16"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Atandrila Pushpa home">
          <span className="brand-mark">AP</span>
          <span>Atandrila Pushpa</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy reveal">
            <div className="availability"><span /> Open to software engineering opportunities</div>
            <h1>I build thoughtful software for <em>people</em> and <em>progress.</em></h1>
            <p className="hero-lede">I&apos;m Atandrila — a full-stack developer and blockchain researcher who turns ambitious ideas into clear, scalable digital products.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <Icon name="arrow" size={18} /></a>
              <a className="button secondary" href="/assets/Atandrila_Pushpa_CV.pdf" download>Download CV <Icon name="download" size={18} /></a>
            </div>
            <div className="hero-meta">
              <span>Dhaka, Bangladesh</span><span>·</span><span>B.Sc. CSE · AUST</span><span>·</span><span>CGPA 3.49</span>
            </div>
          </div>
          <div className="portrait-wrap reveal">
            <div className="portrait-card">
              <img src="/assets/atandrila-pushpa.jpg" alt="Atandrila Pushpa" />
            </div>
          </div>
        </section>

        <section className="intro-band" id="about">
          <div className="section intro-grid reveal">
            <span className="section-label">About me</span>
            <h2>Engineering across the full stack, researching beyond it.</h2>
            <p>I&apos;m in my final semester at Ahsanullah University of Science and Technology. My work spans production-ready web systems, computer vision, data mining, and blockchain architecture — with a bias toward useful, human-centered outcomes.</p>
            <div className="intro-stat"><strong>4.2</strong><span>Current semester</span></div>
          </div>
        </section>

        <section className="section projects-section" id="work">
          <div className="section-heading reveal">
            <div><span className="section-label">Selected work</span><h2>Products built to solve real problems.</h2></div>
            <p>From AI-assisted market decisions to structured career tools, each project pairs practical engineering with a clear user need.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.tone} reveal`} key={project.title}>
                <div className="project-top"><span>{project.type}</span><span>{project.number}</span></div>
                <div className="project-visual" aria-hidden="true">
                  <span className="visual-ring ring-a"/><span className="visual-ring ring-b"/>
                  <span className="visual-glyph">{index === 0 ? '৳' : index === 1 ? 'CV' : index === 2 ? '↗' : '♡'}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a>
                  {project.live && <a className="live-link" href={project.live} target="_blank" rel="noreferrer"><Icon name="external" size={15}/> Live site</a>}
                </div>
                <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <a className="text-link" href="https://github.com/Atandrila" target="_blank" rel="noreferrer">See more projects on GitHub <Icon name="external" size={17}/></a>
        </section>

        <section className="skills-section">
          <div className="section">
            <div className="section-heading reveal">
              <div><span className="section-label">Capabilities</span><h2>My everyday toolkit.</h2></div>
              <p>A flexible stack for taking products from the first data model to a polished interface and reliable deployment.</p>
            </div>
            <div className="skills-grid">
              {skills.map(skill => <article className="skill-card reveal" key={skill.title}><div className="icon-box"><Icon name={skill.icon}/></div><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading reveal">
            <div><span className="section-label">Research</span><h2>Questions worth investigating.</h2></div>
            <p>I enjoy the point where rigorous experimentation meets systems that can make a measurable difference.</p>
          </div>
          <div className="research-list">
            {research.map((item, index) => (
              <article className="research-row reveal" key={item.title}>
                <span className="research-index">0{index + 1}</span>
                <div><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.text}</p>{item.github && <a className="research-link" href={item.github} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> View research repository</a>}</div>
                <div className="research-stat"><strong>{item.stat}</strong><span>{item.label}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section">
            <div className="section-heading reveal">
              <div><span className="section-label">Experience</span><h2>A trajectory of learning by building.</h2></div>
            </div>
            <div className="experience-card reveal">
              <div className="experience-brand">I</div>
              <div className="experience-title"><h3>Intern Developer — Frontend</h3><p>Itransition</p></div>
              <div className="experience-date"><strong>Jun — Jul 2026</strong><span>Internship</span></div>
              <p className="experience-copy">Completed five technical engineering modules and architected CV Forge, integrating a React frontend with Express, Prisma, MySQL/PostgreSQL, role-based access, and cloud deployment pipelines.</p>
            </div>
            <div className="education-grid">
              <article className="education-card reveal"><span>2022 — Present</span><h3>B.Sc. in Computer Science & Engineering</h3><p>Ahsanullah University of Science and Technology</p><strong>CGPA 3.49 · Semester 4.2</strong></article>
              <article className="education-card reveal"><span>2019 — 2021</span><h3>Higher Secondary Certificate</h3><p>Holy Cross College</p><strong>GPA 5.00</strong></article>
              <article className="education-card reveal"><span>2019</span><h3>Secondary School Certificate</h3><p>South Point School and College</p><strong>GPA 5.00</strong></article>
            </div>
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="section-heading reveal">
            <div><span className="section-label">Credentials</span><h2>Milestones along the way.</h2></div>
            <p>Selected recognition from industry learning and collaborative AI problem-solving.</p>
          </div>
          <div className="credentials-grid">
            <a className="credential-card reveal" href="/assets/AI035_Atandrila_Pushpa.pdf" target="_blank" rel="noreferrer">
              <div className="credential-badge">AI</div><div><span>Certificate of Achievement</span><h3>CUET AI Hackathon · SciBlitz 2.0</h3><p>Recognition for innovation, technical expertise, and collaborative problem-solving in AI-driven solutions.</p></div><Icon name="external"/>
            </a>
            <a className="credential-card reveal" href="/assets/Atandrila_Pushpa_JavaScript_Certificate.pdf" target="_blank" rel="noreferrer">
              <div className="credential-badge purple">JS</div><div><span>Internship Certificate · Aug 2026</span><h3>Frontend Developer Internship — Itransition</h3><p>Internship credential highlighting Commercial Software Development — JavaScript training at Itransition.</p></div><Icon name="external"/>
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-glow" />
            <span className="section-label light">Contact</span>
            <h2>Let&apos;s build something useful.</h2>
            <p>I&apos;m open to software engineering roles, research collaborations, and ambitious projects where thoughtful technology can have real impact.</p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:atandrilapushpa@gmail.com"><Icon name="mail" size={18}/> Email me</a>
              <a className="button ghost" href="https://www.linkedin.com/in/atandrila-pushpa-75002a264/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={18}/> LinkedIn</a>
            </div>
            <div className="contact-details">
              <a href="mailto:atandrilapushpa@gmail.com">atandrilapushpa@gmail.com</a>
              <a href="tel:+8801742684129">+88 01742 684129</a>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div><strong>Atandrila Pushpa</strong><span>Software Engineer · Full-Stack Developer · Blockchain Researcher</span></div>
        <div className="footer-links">
          <a href="https://github.com/Atandrila" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
          <a href="https://www.linkedin.com/in/atandrila-pushpa-75002a264/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
          <a href="mailto:atandrilapushpa@gmail.com" aria-label="Email"><Icon name="mail"/></a>
        </div>
        <span className="copyright">© 2026 Atandrila Pushpa</span>
      </footer>
    </div>
  )
}

export default App
