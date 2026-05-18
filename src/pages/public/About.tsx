export default function About() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>About Us</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Our Commitment to Integrity.</h1>
          <p style={{ maxWidth: 600 }}>AurumGold was built on a simple belief: precious metals transactions should be transparent, secure, and free of hidden costs.</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 64 }}>
            <div>
              <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 16 }}>Our Story</span>
              <h2 style={{ marginBottom: 24, fontSize: '2rem' }}>Founded on Transparency.</h2>
              <p style={{ marginBottom: 16 }}>
                AurumGold was founded with a single mission: to create a gold trading platform that puts the customer first. Too many precious metals dealers obscure their fees, use misleading spot-price claims, or make unrealistic promises about investment returns.
              </p>
              <p style={{ marginBottom: 16 }}>
                We do none of that. Every spread, every fee, every cost is disclosed before you commit to a transaction. We don't promise investment returns because gold is not a guaranteed investment — and we believe you deserve to know that.
              </p>
              <p>
                Our operations are designed around security, compliance, and integrity. We verify every piece of gold we purchase. We insure every shipment we send. And we never tell you more than we know.
              </p>
              <div className="disclosure-box" style={{ marginTop: 24 }}>
                <strong>⚠ Prototype Notice</strong>
                This is a demonstration website. No real gold transactions are conducted. This platform requires qualified U.S. legal, AML/KYC, tax, and compliance review before any commercial operation.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '🔒', title: 'Security-First Operations', desc: 'All customer data is handled with bank-grade security protocols. We maintain strict access controls and audit trails across all systems.' },
                { icon: '📋', title: 'Compliance-First Culture', desc: 'We operate with awareness of FinCEN AML/KYC obligations for precious metals dealers, FTC advertising guidelines, and applicable state regulations.' },
                { icon: '🔬', title: 'Expert Verification', desc: 'Every transaction involves certified assayers using XRF analysis and precision weighing to verify purity and weight accurately.' },
                { icon: '⚖️', title: 'Legal Transparency', desc: 'All legal documents on this platform are clearly marked as templates requiring attorney review. We do not claim legal compliance without review.' },
              ].map(item => (
                <div key={item.title} className="card" style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 8, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ fontSize: 14 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust stats */}
          <div style={{ background: 'var(--color-surface-lo)', border: '1px solid var(--color-outline-dim)', borderRadius: 'var(--radius-xl)', padding: 48, marginBottom: 48 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: 40 }}>Our Operating Standards</h3>
            <div className="grid-4" style={{ textAlign: 'center' }}>
              {[
                { val: '99.99%', label: 'Purity Accuracy', sub: 'XRF verified' },
                { val: '100%', label: 'Shipments Insured', sub: 'Lloyd\'s-style coverage' },
                { val: '$0', label: 'Hidden Fees', sub: 'Full cost disclosed upfront' },
                { val: '24/7', label: 'Account Access', sub: 'Dashboard always available' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: 8 }}>{s.val}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance awareness */}
          <div className="card">
            <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20 }}>Compliance Awareness</h3>
            <p style={{ marginBottom: 16 }}>AurumGold is designed with awareness of the regulatory environment for U.S. precious metals dealers. We recognize the following compliance areas are relevant to our operations:</p>
            <div className="grid-2" style={{ gap: 16 }}>
              {[
                ['FinCEN AML/KYC', 'Precious metals dealers may be subject to Bank Secrecy Act obligations. Identity verification and suspicious activity monitoring are core to our design.'],
                ['FTC Jewelry Guides', 'All product descriptions use accurate purity and weight claims consistent with FTC guidelines for precious metals advertising.'],
                ['IRS Reporting', 'Certain transactions may require Form 1099-B reporting. Tax obligations are the customer\'s responsibility. We consult tax professionals.'],
                ['State Regulations', 'Gold sales tax treatment varies by state. We surface this complexity and recommend customers consult tax advisors.'],
                ['Privacy Law', 'We design for compliance with applicable U.S. privacy laws. Our Privacy Policy template covers key required disclosures.'],
                ['ADA Accessibility', 'We aim for WCAG 2.1 AA compliance. Accessible design is a priority, not an afterthought.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ padding: '16px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-gold)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{desc}</div>
                </div>
              ))}
            </div>
            <div className="disclosure-box" style={{ marginTop: 24 }}>
              <strong>⚠ Attorney Review Required</strong>
              This compliance awareness overview is not legal advice and does not constitute a compliance certification. All operations require review by qualified U.S. legal counsel and a compliance professional before production launch.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
