export default function TermsOfService() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-warning)', display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Terms of Service</h1>
          <div className="disclosure-box" style={{ maxWidth: 720 }}>
            <strong>⚠ PROTOTYPE TEMPLATE — NOT A FINAL LEGAL DOCUMENT</strong>
            This Terms of Service is a structural template created for a prototype demonstration. It has not been drafted by an attorney, 
            has not been reviewed for legal compliance, and does not constitute a binding legal agreement. Before commercial operation, 
            this document requires complete redrafting by a qualified U.S. attorney experienced in e-commerce, precious metals, and applicable federal and state law.
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              ['1. Acceptance of Terms', 'By accessing or using the AurumGold platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Platform. These Terms are a prototype and not a final legal document.'],
              ['2. Nature of the Platform', 'This Platform is a prototype demonstration and is not a licensed dealer, financial institution, money transmitter, or investment advisor. No real gold transactions are conducted. No real funds are held or transmitted.'],
              ['3. Eligibility', 'You must be at least 18 years of age and legally authorized to conduct financial transactions in the United States to use this platform. By using the Platform you represent that you meet these requirements.'],
              ['4. Identity Verification (KYC)', 'Before completing any transaction on the production platform, identity verification will be required. We may request government-issued identification, proof of address, and additional documentation. Use of the Platform implies consent to identity verification processes required by applicable law.'],
              ['5. Pricing & Orders', 'All prices displayed are indicative only. Final prices are confirmed at order placement. Gold prices fluctuate continuously. Spreads, premiums, fees, taxes, and shipping costs apply. Confirmed orders may only be cancelled in accordance with our cancellation policy, and restocking fees may apply.'],
              ['6. Risk Disclosure', 'Gold prices fluctuate and investment in gold involves risk. You may lose money. Nothing on this Platform constitutes investment advice. See our separate Risk Disclosure document. You are solely responsible for your purchase decisions.'],
              ['7. Tax Obligations', 'You are solely responsible for all tax obligations arising from your use of the Platform, including but not limited to capital gains, sales tax, and IRS reporting requirements. We are not your tax advisor. Consult a qualified tax professional.'],
              ['8. AML/KYC Compliance', 'This Platform is designed with awareness of applicable Anti-Money Laundering ("AML") and Know Your Customer ("KYC") obligations for U.S. precious metals dealers. We reserve the right to refuse, reverse, or report any transaction we suspect is connected to illegal activity.'],
              ['9. No Investment Advice', 'Nothing on this Platform constitutes investment, financial, tax, or legal advice. All information is for informational purposes only.'],
              ['10. Limitation of Liability', 'To the maximum extent permitted by law, AurumGold shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Platform. Our total liability shall not exceed the amount of your last transaction.'],
              ['11. Governing Law', 'These Terms shall be governed by the laws of the State of [STATE TO BE DETERMINED BY ATTORNEY] without regard to conflict of laws principles.'],
              ['12. Changes to Terms', 'We reserve the right to modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance.'],
              ['13. Contact', 'Questions regarding these Terms should be directed to: legal@aurumgold.demo (placeholder).'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: '1.1rem' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: 40 }}>
            Last updated: Demo · Version 0.1.0-prototype · This document requires attorney review before use.
          </div>
        </div>
      </section>
    </main>
  );
}
