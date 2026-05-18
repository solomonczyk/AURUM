import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { STATUS_LABELS, STATUS_BADGE_TYPES } from '../../data/mockData';

const ORDER_STATUSES = ['draft','awaiting_payment','payment_received','awaiting_shipment','in_inspection','offer_issued','customer_accepted','paid','shipped','delivered','cancelled'];

export default function Orders() {
  const { orders } = useApp();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === 'all' ? orders : orders.filter(o => filter === 'buy' ? o.type === 'buy' : o.type === 'sell');
  const selectedOrder = orders.find(o => o.id === selected);

  const stepsDone = (status: string) => {
    const idx = ORDER_STATUSES.indexOf(status);
    return ORDER_STATUSES.slice(0, idx + 1);
  };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Orders</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>All your buy and sell orders.</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {[['all', 'All Orders'], ['buy', 'Buy Orders'], ['sell', 'Sell Orders']].map(([v, l]) => (
          <button key={v} onClick={() => setFilter(v)} className={`btn btn-sm ${filter === v ? 'btn-primary' : 'btn-ghost'}`}>{l}</button>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 24 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-outline-dim)' }}>
              {['Order ID', 'Product', 'Type', 'Qty', 'Amount', 'Status', 'Date', ''].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-outline)', fontWeight: 600, fontSize: 11, textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id} style={{ borderBottom: '1px solid var(--color-outline-dim)' }}>
                <td style={{ padding: '12px 16px', color: 'var(--color-gold)', fontWeight: 500 }}>{o.id}</td>
                <td style={{ padding: '12px 16px', color: 'var(--color-text-dim)' }}>{o.productName}</td>
                <td style={{ padding: '12px 16px' }}><span className={`badge ${o.type === 'buy' ? 'badge-gold' : 'badge-neutral'}`}>{o.type.toUpperCase()}</span></td>
                <td style={{ padding: '12px 16px' }}>{o.quantity}</td>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>{o.amount > 0 ? `$${o.amount.toLocaleString()}` : '—'}</td>
                <td style={{ padding: '12px 16px' }}><span className={`badge badge-${STATUS_BADGE_TYPES[o.status]}`}>{STATUS_LABELS[o.status]}</span></td>
                <td style={{ padding: '12px 16px', color: 'var(--color-outline)', whiteSpace: 'nowrap' }}>{o.createdAt}</td>
                <td style={{ padding: '12px 16px' }}><button onClick={() => setSelected(o.id)} className="btn btn-ghost btn-sm">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order detail modal */}
      {selectedOrder && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
        }}>
          <div style={{ background: 'var(--color-surface-mid)', border: '1px solid var(--color-outline-dim)', borderRadius: 'var(--radius-xl)', padding: 32, maxWidth: 560, width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex-between" style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)' }}>Order {selectedOrder.id}</h3>
              <button onClick={() => setSelected(null)} style={{ fontSize: 20, color: 'var(--color-outline)', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, fontSize: 14 }}>
              {[
                ['Product', selectedOrder.productName],
                ['Type', selectedOrder.type.toUpperCase()],
                ['Quantity', String(selectedOrder.quantity)],
                ['Amount', selectedOrder.amount > 0 ? `$${selectedOrder.amount.toLocaleString()}` : 'To be determined'],
                ['Status', STATUS_LABELS[selectedOrder.status]],
                ['Created', selectedOrder.createdAt],
                ['Updated', selectedOrder.updatedAt],
                ...(selectedOrder.trackingNumber ? [['Tracking', selectedOrder.trackingNumber]] : []),
              ].map(([k, v]) => (
                <div key={k} className="flex-between" style={{ padding: '8px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
                  <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Status timeline */}
            <div style={{ marginBottom: 20 }}>
              <p className="label-caps" style={{ fontSize: 10, marginBottom: 12 }}>Status Timeline</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ORDER_STATUSES.slice(0, selectedOrder.type === 'buy' ? 8 : ORDER_STATUSES.length).map(s => {
                  const done = stepsDone(selectedOrder.status).includes(s);
                  const current = s === selectedOrder.status;
                  return (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                        background: current ? 'var(--color-gold)' : done ? 'var(--color-success)' : 'var(--color-charcoal)',
                        border: current ? '2px solid var(--color-gold-light)' : 'none',
                      }} />
                      <span style={{ fontSize: 13, color: done ? 'var(--color-text-dim)' : 'var(--color-charcoal)', fontWeight: current ? 600 : 400 }}>
                        {STATUS_LABELS[s]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button onClick={() => setSelected(null)} className="btn btn-ghost w-full" style={{ justifyContent: 'center' }}>Close</button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
