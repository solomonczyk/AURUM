import { mockSpotPrice } from '../../data/mockData';

export default function Pricing() {
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Pricing & Rates</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Transparent Pricing</h1>
          <p style={{ maxWidth: 580 }}>We believe in full transparency. Every cost is disclosed before you commit. Here is everything you need to know about our pricing structure.</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          {/* Indicative price widget */}
          <div className="card" style={{ marginBottom: 40, background: 'var(--color-surface-hi)', border: '1px solid rgba(212,175,55,0.3)' }}>
            <div className="flex-between" style={{ flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p className="label-caps" style={{ fontSize: 10, marginBottom: 8 }}>Indicative Spot Price · Simulated Data <span className="indicative-label">est.</span></p>
                <div style={{ fontSize: 40, fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                  ${mockSpotPrice.goldPerOz.toLocaleString()}
                </div>
                <div style={{ fontSize: 14, color: 'var(--color-text-muted)', marginTop: 4 }}>Per troy ounce · XAU/USD</div>
              </div>
              <div>
                <div style={{ fontSize: 18, color: 'var(--color-success)' }}>▲ +${mockSpotPrice.change24h} (+{mockSpotPrice.changePct24h}%)</div>
                <div style={{ fontSize: 12, color: 'var(--color-outline)', marginTop: 4 }}>24-hour change (simulated)</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="disclosure-box">
                  <strong>⚠ Not Real Market Data</strong>
                  Prices are simulated. Not real-time spot prices. Final transaction prices may differ.
                  No investment advice is provided.
                </div>
              </div>
            </div>
          </div>

          {/* Buy vs Sell comparison */}
          <div className="grid-2" style={{ marginBottom: 48 }}>
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16, color: 'var(--color-gold)' }}>Buy Price</h3>
              <p style={{ fontSize: 14, marginBottom: 16 }}>When you buy gold from us, you pay the spot price reference plus a premium/spread that covers our handling, sourcing, storage, and operational costs.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['1 oz Gold Bar (99.99%)', '+3.5% premium', '$2,112'],
                  ['1 oz Gold Coin (Eagle)', '+5.5% premium', '$2,156'],
                  ['10 oz Gold Bar', '+2.2% premium', '$20,867'],
                ].map(([p, pr, price]) => (
                  <div key={p} className="flex-between" style={{ fontSize: 13, padding: '10px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
                    <span style={{ color: 'var(--color-text-dim)' }}>{p}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--color-outline)', fontSize: 11 }}>{pr}</div>
                      <div style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16 }}>Sell / Quote Price</h3>
              <p style={{ fontSize: 14, marginBottom: 16 }}>When you sell gold to us, we offer a price below spot to account for verification costs, testing, processing, and market risk. The spread between buy and sell is normal and transparent.</p>
              <div className="disclosure-box">
                <strong>⚠ Sell prices are determined after inspection</strong>
                Indicative estimates are provided before shipping. The final offer is made after our assayers physically verify the gold's purity and weight. You must accept the final offer before any payment is made.
              </div>
            </div>
          </div>

          {/* Fee breakdown */}
          <h2 style={{ marginBottom: 32 }}>Complete Fee Schedule</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: 'Premium / Spread (Buy Orders)', items: [['Gold Bars — 1 oz', '3.5%'], ['Gold Bars — 10 oz', '2.2%'], ['Gold Bars — 1 kg', '1.8%'], ['Gold Coins (22K)', '4.8–5.5%'], ['Note: Premiums fluctuate with market conditions', '']] },
              { title: 'Shipping & Insurance', items: [['Insured Delivery (Buy)', '$25.00 flat (up to 2 oz); $40.00 (2–10 oz); quote for heavier'], ['Insured Receive Kit (Sell)', 'Free prepaid kit provided'], ['Delivery Confirmation', 'Signature required for all shipments'], ['Lost/Damaged in Transit', 'Covered by insurance; claim process applies']] },
              { title: 'Sell Order Fees', items: [['Assay / Testing Fee', '$15–$35 (deducted from sale proceeds)'], ['Processing Fee', '1–2% of final sale value'], ['Return Shipping (declined offer)', '$15–$25']] },
              { title: 'Tax', items: [['Sales Tax', 'Varies by state and product type. Certain gold bullion may be tax-exempt. Consult your tax advisor.'], ['IRS Reportable Transactions', 'Certain transactions may require Form 1099-B reporting. See Tax Notice.'], ['Customer Responsibility', 'Customers are solely responsible for their own tax obligations.']] },
              { title: 'Account & Processing', items: [['Account Opening', 'Free'], ['Identity Verification (KYC)', 'Required; no charge'], ['Wire Transfer Processing', 'Per your bank\'s wire fees; no additional charge from us'], ['Cancellation / Restocking', 'Orders cancelled after confirmation: 2% restocking fee or $50 min. Subject to market conditions.']] },
            ].map(section => (
              <div key={section.title} className="card">
                <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16, color: 'var(--color-gold)' }}>{section.title}</h4>
                <div>
                  {section.items.map(([k, v]) => (
                    <div key={k} className="flex-between" style={{ fontSize: 13, padding: '10px 0', borderBottom: '1px solid var(--color-outline-dim)', alignItems: 'flex-start', gap: 20 }}>
                      <span style={{ color: 'var(--color-text-dim)', flex: 1 }}>{k}</span>
                      {v && <span style={{ color: 'var(--color-outline)', flexShrink: 0 }}>{v}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="disclosure-box" style={{ marginTop: 40 }}>
            <strong>⚠ No Investment Advice</strong>
            Nothing on this page constitutes investment, financial, tax, or legal advice. Gold prices fluctuate and past performance does not indicate future results. 
            Spread and fees affect your effective cost and return. Liquidity and resale value of physical gold may vary. Consult a qualified financial advisor before making decisions.
            See our full <a href="/legal/risk-disclosure" style={{ color: 'var(--color-warning)', textDecoration: 'underline' }}>Risk Disclosure</a> and{' '}
            <a href="/legal/fees" style={{ color: 'var(--color-warning)', textDecoration: 'underline' }}>Pricing & Fees Disclosure</a>.
          </div>
        </div>
      </section>
    </main>
  );
}
