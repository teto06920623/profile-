import './Blog.css'

const samplePosts = [
  { id: 1, title: 'Getting Started with React', date: '2026-04-10', excerpt: 'Learn the fundamentals of React and start building modern web applications.' },
  { id: 2, title: 'Understanding Vite', date: '2026-04-08', excerpt: 'Discover why Vite is the fastest build tool for modern web development.' },
  { id: 3, title: 'CSS Best Practices', date: '2026-04-05', excerpt: 'Write maintainable and scalable CSS with these proven techniques.' },
]

function Blog() {
  return (
    <div className="blog-page container">
      <h2>Blog</h2>
      <div className="blog-list">
        {samplePosts.map((post) => (
          <article key={post.id} className="blog-card">
            <span className="blog-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog
