import { useState } from 'react'
import '../styles/login.css'

export default function Login({ onLogin }) {
  const [email, setEmail]       = useState('admin@test.com')
  const [password, setPassword] = useState('123456')
  const [error, setError]       = useState('')

  function handleLogin() {
    if (email === 'admin@test.com' && password === '123456') {
      onLogin()
    } else {
      setError('Invalid credentials. Use admin@test.com / 123456')
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">💬</div>
        <h1>Order Dashboard</h1>
        <p>Sign in to manage your WhatsApp orders</p>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKey}
            placeholder="admin@test.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKey}
            placeholder="••••••"
          />
        </div>

        {error && (
          <div style={{
            color: 'var(--cancelled)',
            fontSize: '13px',
            marginBottom: '12px',
            background: 'var(--cancelled-bg)',
            padding: '10px 14px',
            borderRadius: '8px'
          }}>
            {error}
          </div>
        )}

        <button className="btn-login" onClick={handleLogin}>
          Sign in
        </button>
        <div className="login-hint">Demo credentials are pre-filled</div>
      </div>
    </div>
  )
}