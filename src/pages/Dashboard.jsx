import '../styles/dashboard.css'

export default function Dashboard({ orders }) {
  const count = s => orders.filter(o => o.status === s).length
  const pct   = Math.round((count('delivered') / orders.length) * 100)

  return (
    <div>
      <div className="hero-card">
        <div className="hero-label">💬 WhatsApp Bot</div>
        <div className="hero-num">{orders.length}</div>
        <div className="hero-sub">Total Orders Received</div>
        <div className="hero-icon">📦</div>
      </div>

      <div className="section-label">Order Overview</div>
      <div className="stats-grid">
        {[
          { key: 'pending',   icon: '⏰', label: 'Pending'   },
          { key: 'confirmed', icon: '✅', label: 'Confirmed' },
          { key: 'delivered', icon: '✔️', label: 'Delivered' },
          { key: 'cancelled', icon: '❌', label: 'Cancelled' },
        ].map(({ key, icon, label }) => (
          <div className="stat-card" key={key}>
            <div className="stat-header">
              <div className={`stat-icon ${key}`}>{icon}</div>
              <div className={`stat-dot ${key}`}/>
            </div>
            <div className="stat-num">{count(key)}</div>
            <div className="stat-name">{label}</div>
          </div>
        ))}
      </div>

      <div className="fulfillment-card">
        <div className="fulfillment-header">
          <h3>Fulfillment Rate</h3>
          <div className="fulfillment-pct">{pct}%</div>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }}/>
        </div>
        <div className="fulfillment-foot">
          <div className="bot-dot"/>
          Bot Connected &amp; Running
        </div>
      </div>
    </div>
  )
}