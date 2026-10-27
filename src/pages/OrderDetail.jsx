import { Link, useParams, useNavigate } from 'react-router-dom'
import '../styles/orderdetail.css'

function cap(s) { return s[0].toUpperCase() + s.slice(1) }

export default function OrderDetail({ orders, onUpdateStatus, showToast }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const order = orders.find(o => o.id === id)

  if (!order) return (
    <div>
      <Link to="/orders" className="back-btn">← Back to Orders</Link>
      <div style={{ color: 'var(--text3)', padding: 40 }}>Order not found.</div>
    </div>
  )

  function handleUpdate(status) {
    onUpdateStatus(order.id, status)
    showToast(`Order marked as ${status}`)
    navigate('/orders')
  }

  return (
    <div>
      <Link to="/orders" className="back-btn">← Back to Orders</Link>

      <div className="detail-grid">
        <div className="detail-card">
          <div className="detail-card-title">Order Information</div>
          {[
            ['Order ID',  order.id],
            ['Customer',  order.customerName],
            ['Item',      order.item],
            ['Address',   order.address],
            ['Phone',     order.phone],
            ['Date',      order.date],
          ].map(([label, value]) => (
            <div className="detail-row" key={label}>
              <div className="detail-label">{label}</div>
              <div className="detail-value">{value}</div>
            </div>
          ))}
          <div className="detail-row">
            <div className="detail-label">Status</div>
            <div className="detail-value">
              <span className={`badge ${order.status}`}>{cap(order.status)}</span>
            </div>
          </div>
        </div>

        <div className="status-card">
          <div className="detail-card-title">Update Status</div>
          <div className="status-btn-group">
            <button className="status-btn confirm" onClick={() => handleUpdate('confirmed')}>
              ✅ Mark as Confirmed
            </button>
            <button className="status-btn deliver" onClick={() => handleUpdate('delivered')}>
              🚚 Mark as Delivered
            </button>
            <button className="status-btn cancel" onClick={() => handleUpdate('cancelled')}>
              ❌ Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}