import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload, FiCode, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';
import Button from '../components/common/Button';
import { SKILLS, PROJECTS, EXPERIENCES, SITE_CONFIG, SOCIAL_LINKS } from '../utils/constants';
import './Home.css';

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="home">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>

        <div className="hero__content container">
          <div className="hero__text">
            <div className="hero__badge animate-fadeInUp">
              <FiCode /> Available for Freelance
            </div>
            <h1 className="hero__title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Hi, I&apos;m <span className="hero__name">TAHA</span>
              <br />
              <span className="hero__role">{SITE_CONFIG.title}</span>
            </h1>
            <p className="hero__description animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              I craft beautiful, performant web experiences that solve real problems.
              Passionate about clean code, modern design, and pushing the boundaries
              of what&apos;s possible on the web.
            </p>
            <div className="hero__actions animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <Button variant="primary" size="lg" icon={<FiArrowRight />} href="/projects">
                View My Work
              </Button>
              <Button variant="secondary" size="lg" icon={<FiDownload />} href="/contact">
                Get In Touch
              </Button>
            </div>
            <div className="hero__socials animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            </div>
          </div>

          <div className="hero__visual animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="hero__avatar">
              <div className="hero__avatar-ring" />
              <div className="hero__avatar-inner">
                <span className="hero__avatar-emoji">👨‍💻</span>
              </div>
              <div className="hero__avatar-status" />
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">3+</span>
                <span className="hero__stat-label">Years Exp.</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">20+</span>
                <span className="hero__stat-label">Projects</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">15+</span>
                <span className="hero__stat-label">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="about section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me a little better</p>

          <div className="about__grid">
            <div className="about__info">
              <p className="about__text">
                I&apos;m a passionate full-stack developer with a love for creating elegant
                solutions to complex problems. With experience spanning frontend frameworks,
                backend systems, and cloud infrastructure, I bring ideas to life with
                clean, maintainable code.
              </p>
              <p className="about__text">
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge through
                blog posts and mentoring.
              </p>
              <div className="about__highlights">
                <div className="about__highlight">
                  <FiCode className="about__highlight-icon" />
                  <div>
                    <h4>Clean Code</h4>
                    <p>Writing readable, maintainable code</p>
                  </div>
                </div>
                <div className="about__highlight">
                  <FiLayers className="about__highlight-icon" />
                  <div>
                    <h4>Full-Stack</h4>
                    <p>Frontend to backend expertise</p>
                  </div>
                </div>
                <div className="about__highlight">
                  <FiDatabase className="about__highlight-icon" />
                  <div>
                    <h4>Databases</h4>
                    <p>SQL & NoSQL proficiency</p>
                  </div>
                </div>
                <div className="about__highlight">
                  <FiCpu className="about__highlight-icon" />
                  <div>
                    <h4>Performance</h4>
                    <p>Optimized & scalable solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__experience">
              <h3 className="about__exp-title">Experience</h3>
              <div className="about__timeline">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="about__timeline-item">
                    <div className="about__timeline-dot" />
                    <div className="about__timeline-content">
                      <span className="about__timeline-period">{exp.period}</span>
                      <h4>{exp.role}</h4>
                      <p className="about__timeline-company">{exp.company}</p>
                      <p className="about__timeline-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section className="skills section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with on a daily basis</p>

          <div className="skills__grid">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-card__category">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="featured section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>

          <div className="featured__grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card project-card--featured">
                <div className="project-card__image">
                  <span className="project-card__emoji">{project.image}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FiArrowRight /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="featured__cta">
            <Link to="/projects">
              <Button variant="secondary" icon={<FiArrowRight />}>
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="cta section">
        <div className="container">
          <div className="cta__box">
            <div className="cta__glow" />
            <h2 className="cta__title">Let&apos;s Build Something Amazing</h2>
            <p className="cta__text">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s work together
              to bring your ideas to life.
            </p>
            <Button variant="primary" size="lg" icon={<FiArrowRight />} href="/contact">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
