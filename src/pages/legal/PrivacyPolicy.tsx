export default function PrivacyPolicy() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-warning)', display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Privacy Policy</h1>
          <div className="disclosure-box" style={{ maxWidth: 720 }}>
            <strong>⚠ PROTOTYPE TEMPLATE — NOT A FINAL LEGAL DOCUMENT</strong>
            This Privacy Policy is a structural template for demonstration purposes only. It has not been reviewed by a privacy attorney. 
            Before commercial operation, this must be drafted by qualified legal counsel familiar with applicable U.S. federal and state privacy laws (including CCPA, VCDPA, and others).
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              ['1. Information We Collect', 'We collect information you provide directly (name, address, email, phone, government ID for KYC), information collected automatically (IP address, browser type, usage data), and information from third parties (identity verification services). This is a prototype — no real data is collected or stored.'],
              ['2. How We Use Your Information', 'We use collected information to: process transactions, verify your identity (KYC compliance), comply with AML and legal obligations, provide customer support, send transactional communications, improve the Platform, and comply with applicable law.'],
              ['3. How We Share Your Information', 'We do not sell your personal data. We may share information with: service providers (KYC/identity verification, payment processors, shipping carriers), regulators and law enforcement as required by law, and successors in the event of a business transfer.'],
              ['4. Data Retention', 'We retain your personal information for as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations (including AML record-keeping requirements, which may be up to 5 years or more), and to resolve disputes.'],
              ['5. Your Rights', 'Depending on your state of residence, you may have rights to: access, correct, or delete your personal data; opt out of certain data uses; and non-discrimination for exercising privacy rights. Contact us to exercise these rights. Response times and available rights vary by jurisdiction.'],
              ['6. California Privacy Rights (CCPA)', 'California residents have additional rights under the California Consumer Privacy Act. [Full CCPA disclosure requires attorney drafting.]'],
              ['7. Security', 'We implement reasonable technical and organizational measures to protect your information. No system is 100% secure. In the event of a data breach we will notify affected users as required by law.'],
              ['8. Cookies', 'We use essential cookies required for Platform operation, and optional analytics/marketing cookies that you may decline. See our Cookie Policy.'],
              ['9. Children\'s Privacy', 'This Platform is not directed at individuals under 18. We do not knowingly collect personal information from minors.'],
              ['10. Contact', 'Privacy inquiries: privacy@aurumgold.demo (placeholder — not a real email).'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: '1.1rem' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: 40 }}>
            Last updated: Demo · Version 0.1.0-prototype · Attorney review required.
          </div>
        </div>
      </section>
    </main>
  );
}
