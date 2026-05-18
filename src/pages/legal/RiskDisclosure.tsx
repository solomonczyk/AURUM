const SECTIONS = [
  { title: '1. Nature of Gold as an Asset', body: 'Gold is a commodity whose price fluctuates continuously based on global supply and demand, central bank policies, geopolitical events, currency movements, interest rates, and investor sentiment. The price of gold can fall as well as rise. You may receive less than you paid.' },
  { title: '2. No Guaranteed Returns', body: 'We make no representation or warranty regarding the future price or value of gold. Past price performance does not guarantee future results. Physical gold is not a risk-free investment and should not be treated as one.' },
  { title: '3. Liquidity Risk', body: 'Physical gold is generally less liquid than financial instruments. The ability to sell gold quickly at a favorable price is not guaranteed. Our buy-back prices (when you sell to us) will reflect market conditions and include our spread, which will be below your purchase price at the time of sale in many market conditions.' },
  { title: '4. Spread and Costs', body: 'When you buy gold, you pay a premium above spot price. When you sell, we offer below spot price. This spread means you may not recoup your full purchase cost even if the spot price remains unchanged. Shipping, insurance, assay, and other fees further affect net return.' },
  { title: '5. Storage and Security Risk', body: 'Physical gold delivered to you becomes your sole responsibility. We are not liable for loss, theft, or damage to gold once it has been delivered and signed for. You are responsible for arranging appropriate storage and insurance for physical gold you hold.' },
  { title: '6. Regulatory and Tax Risk', body: 'Regulations applicable to gold transactions may change. Tax treatment of gold transactions (capital gains, sales tax) is complex, varies by jurisdiction, and may change. You are solely responsible for your tax obligations. Consult a qualified tax professional.' },
  { title: '7. Counterparty Risk', body: 'This is a prototype demonstration. In a production environment, using any dealer or exchange involves counterparty risk — the risk that the other party fails to perform. Investigate any precious metals dealer thoroughly before transacting.' },
  { title: '8. No Investment Advice', body: 'Nothing on this website, in these documents, or communicated by our staff constitutes investment advice, financial advice, tax advice, or legal advice. All information is for general informational purposes only. You make all investment decisions independently and at your own risk.' },
  { title: '9. Verification of Information', body: 'We strive for accuracy, but all prices shown are indicative and may not reflect current market conditions. Always verify current spot prices from multiple independent sources before making a transaction decision.' },
];

export default function RiskDisclosure() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-warning)', display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Risk Disclosure</h1>
          <div className="disclosure-box" style={{ maxWidth: 720 }}>
            <strong>⚠ READ CAREFULLY BEFORE TRANSACTING</strong>
            Gold investment involves real financial risk. Please read this disclosure in full before purchasing or selling gold.
            This is a prototype template — final version requires attorney review.
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {SECTIONS.map(s => (
              <div key={s.title}>
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: '1.1rem' }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="disclosure-box" style={{ marginTop: 40 }}>
            <strong>⚠ Summary:</strong> Gold prices fluctuate. You can lose money. Spreads and fees apply. This is not investment advice. Consult qualified professionals before making financial decisions.
          </div>
          <div className="info-box" style={{ marginTop: 20 }}>Last updated: Demo · Version 0.1.0-prototype · Attorney review required.</div>
        </div>
      </section>
    </main>
  );
}
