import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
