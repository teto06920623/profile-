import { NavLink } from 'react-router-dom';
import { FiHome, FiFolder, FiBookOpen, FiMail, FiUser } from 'react-icons/fi';
import './Sidebar.css';

const sidebarLinks = [
  { path: '/', icon: <FiHome />, label: 'Home' },
  { path: '/projects', icon: <FiFolder />, label: 'Projects' },
  { path: '/blog', icon: <FiBookOpen />, label: 'Blog' },
  { path: '/contact', icon: <FiMail />, label: 'Contact' },
  { path: '/dashboard', icon: <FiUser />, label: 'Dashboard' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <span className="sidebar__title">Navigation</span>
        </div>
        <nav className="sidebar__nav">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
              onClick={onClose}
            >
              <span className="sidebar__link-icon">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
