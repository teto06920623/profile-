import { FiUser, FiFolder, FiBookOpen, FiActivity, FiTrendingUp, FiCalendar } from 'react-icons/fi';
import { PROJECTS, BLOG_POSTS, SKILLS } from '../utils/constants';
import './Dashboard.css';

export default function Dashboard() {
  const stats = [
    { label: 'Total Projects', value: PROJECTS.length, icon: <FiFolder />, color: 'var(--color-primary)' },
    { label: 'Blog Posts', value: BLOG_POSTS.length, icon: <FiBookOpen />, color: 'var(--color-accent)' },
    { label: 'Skills', value: SKILLS.length, icon: <FiActivity />, color: 'var(--color-success)' },
    { label: 'Avg Skill Level', value: `${Math.round(SKILLS.reduce((a, b) => a + b.level, 0) / SKILLS.length)}%`, icon: <FiTrendingUp />, color: 'var(--color-warning)' },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard__header">
          <div className="dashboard__welcome">
            <div className="dashboard__avatar">
              <FiUser />
            </div>
            <div>
              <h1 className="dashboard__title">Dashboard</h1>
              <p className="dashboard__subtitle">Welcome back, TAHA! Here&apos;s your portfolio overview.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="dashboard__stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="stat-card__icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="dashboard__sections">
          <div className="dashboard__section">
            <h2 className="dashboard__section-title">
              <FiFolder /> Recent Projects
            </h2>
            <div className="dashboard__list">
              {PROJECTS.slice(0, 4).map((project) => (
                <div key={project.id} className="dashboard__list-item">
                  <span className="dashboard__list-emoji">{project.image}</span>
                  <div className="dashboard__list-info">
                    <h4>{project.title}</h4>
                    <div className="dashboard__list-tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="dashboard__list-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {project.featured && <span className="dashboard__list-badge">Featured</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard__section">
            <h2 className="dashboard__section-title">
              <FiCalendar /> Recent Blog Posts
            </h2>
            <div className="dashboard__list">
              {BLOG_POSTS.slice(0, 4).map((post) => (
                <div key={post.id} className="dashboard__list-item">
                  <span className="dashboard__list-emoji">{post.emoji}</span>
                  <div className="dashboard__list-info">
                    <h4>{post.title}</h4>
                    <p className="dashboard__list-meta">
                      {post.category} • {post.readTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="dashboard__section dashboard__skills-section">
          <h2 className="dashboard__section-title">
            <FiActivity /> Skills Overview
          </h2>
          <div className="dashboard__skills-grid">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="dashboard__skill">
                <div className="dashboard__skill-header">
                  <span>{skill.name}</span>
                  <span className="dashboard__skill-level">{skill.level}%</span>
                </div>
                <div className="dashboard__skill-bar">
                  <div className="dashboard__skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
