import { customers } from '../data/dummyData'
import '../styles/customers.css'

export default function Customers() {
  return (
    <div className="customers-table">
      <div className="table-header">
        <div>Customer</div>
        <div>Phone</div>
        <div>Orders</div>
        <div>Last Order</div>
      </div>
      {customers.map(c => (
        <div className="table-row" key={c.phone}>
          <div className="customer-cell">
            <div className="customer-avatar">{c.name[0]}</div>
            <div>
              <div className="customer-name">{c.name}</div>
              <div className="customer-phone">{c.phone}</div>
            </div>
          </div>
          <div className="table-cell muted">{c.phone}</div>
          <div className="table-cell">
            <span className="orders-count">{c.totalOrders}</span>
          </div>
          <div className="table-cell muted">{c.lastOrder}</div>
        </div>
      ))}
    </div>
  )
}