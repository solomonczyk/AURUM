import type { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const NAV = [
  { to: '/dashboard', icon: '⊞', label: 'Overview' },
  { to: '/dashboard/wallet', icon: '◈', label: 'Wallet' },
  { to: '/dashboard/orders', icon: '📦', label: 'Orders' },
  { to: '/dashboard/quotes', icon: '💬', label: 'Quotes' },
  { to: '/dashboard/documents', icon: '📄', label: 'Documents' },
  { to: '/dashboard/settings', icon: '⚙', label: 'Settings' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, logout, kycStatus } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const kycBadge = {
    not_started: { label: 'KYC Not Started', cls: 'badge-neutral' },
    pending: { label: 'KYC Pending', cls: 'badge-warning' },
    verified: { label: 'Verified ✓', cls: 'badge-success' },
    action_required: { label: 'Action Required', cls: 'badge-error' },
  }[kycStatus];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 108px)' }}>
      {/* Sidebar */}
      <aside style={{
        width: 240, minWidth: 240, background: 'var(--color-surface-lo)',
        borderRight: '1px solid var(--color-outline-dim)',
        display: 'flex', flexDirection: 'column', padding: '24px 0',
      }} className="hide-mobile">
        {/* User info */}
        <div style={{ padding: '0 20px 20px', borderBottom: '1px solid var(--color-outline-dim)' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: 'var(--color-gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 18,
            marginBottom: 12,
          }}>
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{user?.firstName} {user?.lastName}</div>
          <div style={{ fontSize: 12, color: 'var(--color-outline)', marginBottom: 10 }}>{user?.email}</div>
          <span className={`badge ${kycBadge.cls}`} style={{ fontSize: 11 }}>{kycBadge.label}</span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {NAV.map(item => {
            const active = location.pathname === item.to;
            return (
              <Link key={item.to} to={item.to} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px',
                fontSize: 14, fontWeight: 500,
                color: active ? 'var(--color-gold)' : 'var(--color-text-muted)',
                background: active ? 'rgba(212,175,55,0.1)' : 'transparent',
                borderLeft: active ? '2px solid var(--color-gold)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
                <span style={{ fontSize: 16 }}>{item.icon}</span> {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--color-outline-dim)' }}>
          <button onClick={() => { navigate('/buy'); }} className="btn btn-primary btn-sm w-full" style={{ justifyContent: 'center', marginBottom: 8 }}>Buy Gold</button>
          <button onClick={() => { navigate('/sell'); }} className="btn btn-secondary btn-sm w-full" style={{ justifyContent: 'center', marginBottom: 16 }}>Sell Gold</button>
          <button onClick={logout} style={{ fontSize: 13, color: 'var(--color-outline)', background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
            Sign Out →
          </button>
        </div>
      </aside>

      {/* Mobile tabs */}
      <div className="hide-desktop" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        background: 'var(--color-surface-lo)', borderTop: '1px solid var(--color-outline-dim)',
        display: 'flex', overflowX: 'auto',
      }}>
        {NAV.map(item => {
          const active = location.pathname === item.to;
          return (
            <Link key={item.to} to={item.to} style={{
              flex: '0 0 auto', padding: '10px 14px', textAlign: 'center',
              color: active ? 'var(--color-gold)' : 'var(--color-outline)',
              borderTop: active ? '2px solid var(--color-gold)' : '2px solid transparent',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, fontSize: 18,
            }}>
              {item.icon}
              <span style={{ fontSize: 10, fontWeight: 600 }}>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Main content */}
      <main style={{ flex: 1, padding: '32px 32px 80px', overflowX: 'hidden' }}>
        {children}
      </main>
    </div>
  );
}
