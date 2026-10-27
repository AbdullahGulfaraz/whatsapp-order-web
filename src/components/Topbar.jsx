import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../styles/topbar.css'

const titles = {
  '/dashboard': 'Dashboard',
  '/orders':    'Incoming Orders',
  '/customers': 'Customers',
}

export default function Topbar({ onLogout }) {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const title = location.pathname.startsWith('/orders/')
    ? 'Order Detail'
    : titles[location.pathname] || 'Dashboard'

  return (
    <div className="topbar">
      <div className="topbar-title">
        {title}
        <span className="topbar-live">
          <span style={{
            width: 7, height: 7,
            borderRadius: '50%',
            background: 'var(--g2)',
            display: 'inline-block'
          }}/>
          Live
        </span>
      </div>
      <div className="topbar-actions">
        <button className="btn-icon" onClick={toggleTheme} title="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button className="btn-icon" onClick={onLogout} title="Logout">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
        <div className="topbar-avatar">AB</div>
      </div>
    </div>
  )
}