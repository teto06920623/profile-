import { useState } from 'react';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import { PROJECTS } from '../utils/constants';
import './Projects.css';

const categories = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-page__header">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of projects I&apos;ve built with love and dedication
          </p>
        </div>

        <div className="projects-page__controls">
          <div className="projects-page__search">
            <FiSearch className="projects-page__search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="projects-page__search-input"
            />
          </div>

          <div className="projects-page__filters">
            {categories.slice(0, 8).map((cat) => (
              <button
                key={cat}
                className={`projects-page__filter ${activeFilter === cat ? 'projects-page__filter--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-page__grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-card__image">
                <span className="project-card__emoji">{project.image}</span>
                {project.featured && <span className="project-card__badge">Featured</span>}
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
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-page__empty">
            <span className="projects-page__empty-emoji">🔍</span>
            <p>No projects found matching your criteria</p>
            <button onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
