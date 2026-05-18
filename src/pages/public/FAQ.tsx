const FAQS = [
  { cat: 'Pricing', q: 'Is the price guaranteed?', a: 'No. All prices displayed on this website are indicative only and are based on simulated spot price data. The final price is confirmed only at the moment of order placement, and may differ from the displayed price. Gold prices fluctuate continuously.' },
  { cat: 'Pricing', q: 'What is a premium or spread?', a: 'A premium (or spread) is the amount above the gold spot price that we charge when selling gold to you. It covers our costs including sourcing, storage, insurance, certification, and operations. When buying gold from you, we offer a price below spot for similar reasons. All premiums and fees are disclosed before you commit.' },
  { cat: 'Pricing', q: 'Are there hidden fees?', a: 'No. We disclose all fees before you place an order: product premium, shipping, insurance, and estimated tax. For sell orders, assay/testing fees and processing fees are disclosed upfront and deducted from sale proceeds.' },
  { cat: 'Verification', q: 'How is gold verified?', a: 'All gold we purchase undergoes multi-stage verification by certified assayers. This includes XRF (X-ray fluorescence) purity analysis, weight verification on calibrated scales, and visual inspection for authenticity markers.' },
  { cat: 'Verification', q: 'What purity levels do you accept for selling?', a: 'We accept gold items from 10K (41.7%) and above, including fine gold bars and coins. Items of unknown purity are accepted but will be tested — the final offer reflects the verified purity. Plated or filled items are not accepted.' },
  { cat: 'Verification', q: 'What documents are required?', a: 'To complete a transaction, you will need to provide valid government-issued photo ID (driver\'s license or passport). Transactions above certain thresholds may require additional documentation including source-of-funds information. Identity verification is required before your first transaction.' },
  { cat: 'Shipping', q: 'Is shipping insured?', a: 'Yes. Every shipment is fully insured for the declared value of the gold. All deliveries require a signature upon receipt. If your shipment is lost or damaged in transit, the insurance claim process will be initiated on your behalf.' },
  { cat: 'Shipping', q: 'How do I ship gold to sell?', a: 'Once your quote is accepted and you decide to proceed, we send you a prepaid, insured shipping kit. Follow the included instructions to pack and seal your items. Drop off at the designated carrier location. Do not disclose the contents on the outer packaging.' },
  { cat: 'Orders', q: 'Can I cancel an order?', a: 'Orders may be cancelled before payment confirmation at no charge. Orders cancelled after payment confirmation are subject to a 2% restocking fee (minimum $50) due to market price exposure. For sell orders, you may decline the final offer and request your gold returned — return shipping fees apply.' },
  { cat: 'Orders', q: 'How long does delivery take?', a: 'Most orders ship within 1–3 business days of payment confirmation. Delivery typically takes 2–5 business days via insured carrier, depending on your location and order size.' },
  { cat: 'Account & Wallet', q: 'How does the account wallet/ledger work?', a: 'Your account ledger is a simulated record of your transactions and credits for demonstration purposes. This is NOT a real stored-value wallet, NOT real money transmission, and NOT a real custody account. Any production implementation of wallet or ledger features requires licensed payment, custody, AML/KYC, tax, and legal review.' },
  { cat: 'Account & Wallet', q: 'Is my money held by AurumGold?', a: 'This is a prototype. In a real implementation, any funds held would require compliance with applicable money transmission laws, which vary by state. This platform does not hold, transmit, or store real funds. Consult qualified legal counsel before any production implementation.' },
  { cat: 'Tax & Legal', q: 'Are there taxes on gold purchases?', a: 'Sales tax treatment of gold bullion varies significantly by state. Some states exempt certain gold bullion from sales tax; others do not. Customers are solely responsible for their own tax obligations. We are not tax advisors. Please consult a qualified tax professional for guidance specific to your situation and state.' },
  { cat: 'Tax & Legal', q: 'Is this investment advice?', a: 'No. Nothing on this website constitutes investment advice, financial advice, tax advice, or legal advice. We provide information about buying and selling physical gold but make no representations about future prices, returns, or suitability for any investment purpose. Consult a qualified financial advisor.' },
  { cat: 'Tax & Legal', q: 'Do you report transactions to the IRS?', a: 'Certain gold transactions may be reportable under IRS rules, potentially requiring Form 1099-B. The reporting requirements depend on the type, quantity, and value of gold sold. Consult a qualified tax professional. AurumGold\'s reporting obligations in a production environment require legal and accounting review.' },
];

export default function FAQ() {
  const cats = [...new Set(FAQS.map(f => f.cat))];
  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>FAQ</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Frequently Asked Questions</h1>
          <p style={{ maxWidth: 560 }}>Clear answers to common questions about buying, selling, pricing, compliance, and account management.</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          {cats.map(cat => (
            <div key={cat} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 24, color: 'var(--color-gold)', borderBottom: '1px solid var(--color-outline-dim)', paddingBottom: 12 }}>{cat}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {FAQS.filter(f => f.cat === cat).map(faq => (
                  <div key={faq.q} className="card">
                    <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: 17 }}>{faq.q}</h4>
                    <p style={{ fontSize: 14 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="disclosure-box" style={{ marginTop: 16 }}>
            <strong>⚠ Disclaimer</strong>
            Answers above are for informational purposes only and do not constitute legal, tax, or financial advice. 
            Laws and regulations vary by jurisdiction and may change. Consult qualified professionals for advice specific to your situation.
          </div>
        </div>
      </section>
    </main>
  );
}
