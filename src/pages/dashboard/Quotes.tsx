import { useApp } from '../../context/AppContext';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { STATUS_LABELS, STATUS_BADGE_TYPES } from '../../data/mockData';

export default function Quotes() {
  const { quotes } = useApp();
  return (
    <DashboardLayout>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Sell Quotes</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>Your submitted quote requests and their current status.</p>
      </div>
      <div className="disclosure-box" style={{ marginBottom: 24 }}>
        <strong>⚠ Estimates Only</strong>
        Any estimate shown is indicative and not a final offer. Final price is determined after physical inspection by our certified assayers.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {quotes.map(q => (
          <div key={q.id} className="card">
            <div className="flex-between" style={{ marginBottom: 12, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-gold)', marginRight: 10 }}>{q.id}</span>
                <span className={`badge badge-${STATUS_BADGE_TYPES[q.status]}`}>{STATUS_LABELS[q.status]}</span>
              </div>
              <span style={{ fontSize: 12, color: 'var(--color-outline)' }}>Submitted: {q.submittedAt}</span>
            </div>
            <div className="grid-2" style={{ gap: 12, marginBottom: 12 }}>
              {[['Item Type', q.itemType], ['Weight', q.weight], ['Purity', q.purity]].map(([k, v]) => (
                <div key={k} style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--color-outline)' }}>{k}: </span>
                  <span style={{ color: 'var(--color-text-dim)' }}>{v}</span>
                </div>
              ))}
              {q.estimatedValue !== null && (
                <div style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--color-outline)' }}>Indicative Estimate: </span>
                  <strong style={{ color: 'var(--color-gold)' }}>${q.estimatedValue.toLocaleString()}</strong>
                  <span style={{ fontSize: 10, color: 'var(--color-outline)', marginLeft: 6 }}>(not final)</span>
                </div>
              )}
            </div>
            <div className="info-box" style={{ fontSize: 12 }}>{q.notes}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              {q.status === 'offer_ready' && <button className="btn btn-primary btn-sm">Accept Offer</button>}
              {q.status === 'offer_ready' && <button className="btn btn-ghost btn-sm">Decline / Return</button>}
              {q.status === 'under_review' && <span style={{ fontSize: 13, color: 'var(--color-outline)', padding: '6px 0' }}>Awaiting review — no action required</span>}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
