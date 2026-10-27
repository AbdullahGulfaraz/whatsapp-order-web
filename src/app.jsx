import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Customers from './pages/Customers'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { orders as initialOrders } from './data/dummyData'
import './styles/global.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [orders, setOrders] = useState(initialOrders)
  const [toast, setToast] = useState(null)

  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  function updateOrderStatus(id, newStatus) {
    setOrders(prev =>
      prev.map(o => o.id === id ? { ...o, status: newStatus } : o)
    )
    showToast(`Order marked as ${newStatus}`)
  }

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar onLogout={() => setIsLoggedIn(false)} />
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px', background: 'var(--bg)' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard orders={orders} />} />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route
              path="/orders/:id"
              element={
                <OrderDetail
                  orders={orders}
                  onUpdateStatus={updateOrderStatus}
                  showToast={showToast}
                />
              }
            />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>

      {toast && (
        <div style={{
          position: 'fixed', bottom: '28px', right: '28px',
          background: '#1a2e28', color: '#fff',
          padding: '14px 20px', borderRadius: '12px',
          fontSize: '13px', fontWeight: '600',
          boxShadow: '0 8px 24px rgba(0,0,0,.3)',
          display: 'flex', alignItems: 'center', gap: '10px',
          borderLeft: '3px solid var(--g2)',
          zIndex: 999,
          animation: 'none'
        }}>
          ✅ {toast}
        </div>
      )}
    </div>
  )
}