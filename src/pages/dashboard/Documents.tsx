import DashboardLayout from '../../components/layout/DashboardLayout';

const DOCS = [
  { id: 'kyc-id', category: 'Identity Verification', title: 'Government-Issued ID', status: 'verified', date: '2023-09-15', note: 'Passport · Verified by our KYC team' },
  { id: 'kyc-poa', category: 'Identity Verification', title: 'Proof of Address', status: 'verified', date: '2023-09-15', note: 'Utility bill · Verified' },
  { id: 'tax-w9', category: 'Tax Documents', title: 'W-9 Form (Placeholder)', status: 'pending', date: null, note: 'Required for certain reportable transactions. Consult your tax advisor.' },
  { id: 'inv-001', category: 'Invoices', title: 'Invoice ORD-2024-001', status: 'available', date: '2024-01-15', note: '2× 1 oz Gold Bar — $4,226.00' },
  { id: 'inv-002', category: 'Invoices', title: 'Invoice ORD-2024-002', status: 'available', date: '2024-02-03', note: '1× American Gold Eagle — $2,184.00' },
  { id: 'stmt-q1', category: 'Statements', title: 'Account Statement Q1 2024', status: 'available', date: '2024-03-31', note: 'Quarterly account activity summary' },
];

const statusBadge: Record<string, string> = { verified: 'badge-success', available: 'badge-gold', pending: 'badge-warning', required: 'badge-error' };

export default function Documents() {
  const cats = [...new Set(DOCS.map(d => d.category))];
  return (
    <DashboardLayout>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Documents</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>Identity verification, tax documents, invoices, and account statements.</p>
      </div>
      <div className="info-box" style={{ marginBottom: 24, fontSize: 12 }}>
        Document downloads are disabled in demo mode. In production, documents would be securely stored and available for download.
        All identity data handling requires privacy law compliance, encryption at rest, and appropriate data retention policies.
      </div>
      {cats.map(cat => (
        <div key={cat} style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: 16, color: 'var(--color-gold)', borderBottom: '1px solid var(--color-outline-dim)', paddingBottom: 10 }}>{cat}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {DOCS.filter(d => d.category === cat).map(doc => (
              <div key={doc.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                  <span style={{ fontSize: 24 }}>📄</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{doc.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{doc.note}</div>
                    {doc.date && <div style={{ fontSize: 11, color: 'var(--color-charcoal)', marginTop: 2 }}>Date: {doc.date}</div>}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className={`badge ${statusBadge[doc.status] || 'badge-neutral'}`} style={{ textTransform: 'capitalize' }}>{doc.status}</span>
                  <button className="btn btn-ghost btn-sm" disabled style={{ opacity: 0.5 }}>Download (Demo)</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
}
