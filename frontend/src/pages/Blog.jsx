import { BLOG_POSTS } from '../utils/constants';
import { formatDate } from '../utils/helpers';
import './Blog.css';

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-page__header">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="blog-page__grid">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.id}
              className="blog-card animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="blog-card__emoji-wrapper">
                <span className="blog-card__emoji">{post.emoji}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__category">{post.category}</span>
                  <span className="blog-card__dot">•</span>
                  <span className="blog-card__date">{formatDate(post.date)}</span>
                  <span className="blog-card__dot">•</span>
                  <span className="blog-card__read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__link">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
