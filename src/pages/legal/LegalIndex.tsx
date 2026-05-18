const PAGES = [
  { path: '/legal/terms', title: 'Terms of Service', summary: 'Binding agreement governing use of the platform.' },
  { path: '/legal/privacy', title: 'Privacy Policy', summary: 'How we collect, use, and protect your personal data.' },
  { path: '/legal/risk-disclosure', title: 'Risk Disclosure', summary: 'Material risks associated with buying and selling gold.' },
  { path: '/legal/fees', title: 'Pricing & Fees Disclosure', summary: 'Full schedule of premiums, spreads, shipping, and other charges.' },
  { path: '/legal/aml-kyc', title: 'AML / KYC Policy', summary: 'Anti-money laundering and identity verification requirements.' },
  { path: '/legal/cookies', title: 'Cookie Policy', summary: 'Types of cookies used and your consent options.' },
  { path: '/legal/shipping', title: 'Shipping & Insurance Policy', summary: 'Delivery methods, insurance, and claims procedures.' },
  { path: '/legal/tax', title: 'Tax Notice', summary: 'Tax implications of gold transactions in the United States.' },
  { path: '/legal/accessibility', title: 'Accessibility Statement', summary: 'Our commitment to WCAG 2.1 AA accessibility.' },
  { path: '/legal/disclaimer', title: 'General Disclaimer', summary: 'Limitations of liability and information accuracy.' },
];

export default function LegalIndex() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-warning)', display: 'block', marginBottom: 12 }}>Legal Center</span>
          <h1 style={{ fontSize: '2rem', marginBottom: 12 }}>Legal Documents & Disclosures</h1>
          <p style={{ maxWidth: 560 }}>All legal documents governing your use of the AurumGold platform. Read each document relevant to your activities.</p>
          <div className="disclosure-box" style={{ marginTop: 20, maxWidth: 720 }}>
            <strong>⚠ All Documents Are Prototype Templates</strong>
            Every legal document on this platform is a structural prototype template created for demonstration purposes only. 
            None have been drafted or reviewed by attorneys. None are binding legal documents. Complete professional legal review is required before any commercial use.
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PAGES.map(p => (
              <a key={p.path} href={p.path} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'border-color 0.2s' }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-gold)', marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{p.summary}</div>
                  </div>
                  <span style={{ color: 'var(--color-outline)', fontSize: 18 }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
