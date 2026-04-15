import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Profile</h1>
          <p>Your one-stop platform for amazing products and content.</p>
        </div>
      </section>
      <section className="features container">
        <div className="feature-card">
          <h3>🛒 Products</h3>
          <p>Browse our wide range of products.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Blog</h3>
          <p>Read the latest articles and updates.</p>
        </div>
        <div className="feature-card">
          <h3>👤 Dashboard</h3>
          <p>Manage your account and preferences.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
