import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/orders.css'

const statusEmoji = {
  pending: '⏳', confirmed: '✅',
  delivered: '✔️', cancelled: '✖️'
}

function cap(s) { return s[0].toUpperCase() + s.slice(1) }

export default function Orders({ orders }) {
  const [filter, setFilter] = useState('all')
  const [query,  setQuery]  = useState('')

  const visible = orders.filter(o => {
    const matchFilter = filter === 'all' || o.status === filter
    const matchQuery  = o.customerName.toLowerCase().includes(query.toLowerCase())
    return matchFilter && matchQuery
  })

  return (
    <div>
      <div className="filter-bar">
        {['all','pending','confirmed','delivered','cancelled'].map(f => (
          <button
            key={f}
            className={'filter-btn' + (filter === f ? ' active' : '')}
            onClick={() => setFilter(f)}
          >
            {cap(f)}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search by customer name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="orders-list">
        {visible.length === 0 ? (
          <div className="empty-state">No orders found</div>
        ) : visible.map(o => (
          <Link to={`/orders/${o.id}`} className="order-card" key={o.id}>
            <div className={`order-avatar ${o.status}`}>
              {o.customerName[0]}
              <div className="avatar-badge">{statusEmoji[o.status]}</div>
            </div>
            <div className="order-info">
              <div className="order-name">{o.customerName}</div>
              <div className="order-item">🛍️ {o.item}</div>
            </div>
            <div className="order-meta">
              <span className={`badge ${o.status}`}>{cap(o.status)}</span>
              <div className="order-date">{o.date}</div>
            </div>
            <div className="order-arrow">›</div>
          </Link>
        ))}
      </div>
    </div>
  )
}