import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { STATUS_LABELS, STATUS_BADGE_TYPES } from '../../data/mockData';

export default function DashboardOverview() {
  const { user, orders, quotes, kycStatus } = useApp();
  const navigate = useNavigate();

  const recentOrders = orders.slice(0, 3);
  const recentQuotes = quotes.slice(0, 2);

  const kycInfo = {
    not_started: { msg: 'Complete identity verification to unlock buying and selling.', action: 'Start Verification', cls: 'badge-neutral', color: 'var(--color-text-muted)' },
    pending: { msg: 'Your identity documents are under review. We\'ll notify you when complete.', action: 'View Status', cls: 'badge-warning', color: 'var(--color-warning)' },
    verified: { msg: 'Your identity is verified. You can buy and sell gold.', action: 'View Account', cls: 'badge-success', color: 'var(--color-success)' },
    action_required: { msg: 'Action required on your identity verification. Please review.', action: 'Take Action', cls: 'badge-error', color: 'var(--color-error)' },
  }[kycStatus];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Welcome back, {user?.firstName}.</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>Account overview and recent activity.</p>
      </div>

      {/* KYC Banner */}
      <div style={{
        border: `1px solid ${kycInfo.color}33`, background: `${kycInfo.color}0D`,
        borderRadius: 'var(--radius-lg)', padding: '16px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, marginBottom: 28, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className={`badge ${kycInfo.cls}`}>KYC / Identity</span>
          <span style={{ fontSize: 14, color: 'var(--color-text-dim)' }}>{kycInfo.msg}</span>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/dashboard/documents')}>{kycInfo.action}</button>
      </div>

      {/* Summary cards */}
      <div className="grid-3" style={{ marginBottom: 32, gap: 16 }}>
        {[
          { label: 'Available Credit', value: `$${user?.accountBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, sub: 'Account credit balance', note: 'Simulated — not real funds', color: 'var(--color-gold)' },
          { label: 'Pending Settlement', value: `$${user?.pendingSettlement.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, sub: 'Awaiting settlement', note: 'Simulated', color: 'var(--color-warning)' },
          { label: 'Gold Holdings', value: `${user?.goldHoldingsOz} troy oz`, sub: 'Approximate physical holdings', note: 'Placeholder — no real custody', color: 'var(--color-text)' },
        ].map(c => (
          <div key={c.label} className="card">
            <p className="label-caps" style={{ fontSize: 10, marginBottom: 8 }}>{c.label}</p>
            <div style={{ fontSize: 28, fontWeight: 700, color: c.color, fontFamily: 'var(--font-sans)', marginBottom: 4 }}>{c.value}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{c.sub}</div>
            <div style={{ fontSize: 10, color: 'var(--color-outline)', marginTop: 6 }}>⚠ {c.note}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div style={{ marginBottom: 32 }}>
        <div className="flex-between" style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Recent Orders</h3>
          <button onClick={() => navigate('/dashboard/orders')} className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-outline-dim)' }}>
                {['Order ID', 'Product', 'Type', 'Amount', 'Status'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-outline)', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id} style={{ borderBottom: '1px solid var(--color-outline-dim)', cursor: 'pointer' }} onClick={() => navigate('/dashboard/orders')}>
                  <td style={{ padding: '12px 16px', color: 'var(--color-gold)', fontWeight: 500 }}>{o.id}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--color-text-dim)' }}>{o.productName}</td>
                  <td style={{ padding: '12px 16px' }}><span className={`badge ${o.type === 'buy' ? 'badge-gold' : 'badge-neutral'}`}>{o.type.toUpperCase()}</span></td>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{o.amount > 0 ? `$${o.amount.toLocaleString()}` : '—'}</td>
                  <td style={{ padding: '12px 16px' }}><span className={`badge badge-${STATUS_BADGE_TYPES[o.status]}`}>{STATUS_LABELS[o.status]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Quotes */}
      <div>
        <div className="flex-between" style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Recent Quotes</h3>
          <button onClick={() => navigate('/dashboard/quotes')} className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {recentQuotes.map(q => (
            <div key={q.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{q.id} — {q.itemType}</div>
                <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{q.weight} · {q.purity} · Submitted {q.submittedAt}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {q.estimatedValue !== null && (
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: 'var(--color-outline)' }}>Indicative Estimate</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-gold)' }}>${q.estimatedValue.toLocaleString()}</div>
                  </div>
                )}
                <span className={`badge badge-${STATUS_BADGE_TYPES[q.status]}`}>{STATUS_LABELS[q.status]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
