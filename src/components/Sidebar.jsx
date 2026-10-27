import { NavLink } from 'react-router-dom'
import '../styles/sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo">💬</div>
          <div>
            <div className="sidebar-brand-name">WA Orders</div>
            <div className="sidebar-brand-sub">Business Dashboard</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0
              2-2V7a2 2 0 0 0-2-2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="1"/>
            <line x1="9" y1="12" x2="15" y2="12"/>
            <line x1="9" y1="16" x2="13" y2="16"/>
          </svg>
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>Customers</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="bot-status">
          <div className="bot-dot"></div>
          <div className="bot-status-text">Bot Connected</div>
        </div>
      </div>
    </aside>
  )
}