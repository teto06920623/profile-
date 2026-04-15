import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-page container">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>12</h3>
          <p>Orders</p>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <p>Wishlist</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Reviews</p>
        </div>
        <div className="stat-card">
          <h3>1</h3>
          <p>Messages</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
