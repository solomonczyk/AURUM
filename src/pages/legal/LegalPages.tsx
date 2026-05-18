const makeLegal = (title: string, desc: string, sections: [string, string][]) => () => (
  <main>
    <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
      <div className="container">
        <span className="label-caps" style={{ color: 'var(--color-warning)', display: 'block', marginBottom: 12 }}>Legal</span>
        <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>{title}</h1>
        <div className="disclosure-box" style={{ maxWidth: 720 }}>
          <strong>⚠ PROTOTYPE TEMPLATE — NOT A FINAL LEGAL DOCUMENT</strong>
          {desc}
        </div>
      </div>
    </section>
    <section className="section-sm">
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {sections.map(([t, b]) => (
            <div key={t}>
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: '1.1rem' }}>{t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>{b}</p>
            </div>
          ))}
        </div>
        <div className="info-box" style={{ marginTop: 40 }}>Last updated: Demo · Version 0.1.0-prototype · Attorney review required.</div>
      </div>
    </section>
  </main>
);

export const FeesDisclosure = makeLegal(
  'Pricing & Fees Disclosure',
  'This disclosure outlines our fee structure. It is a template requiring review.',
  [
    ['Premium / Spread', 'All buy orders include a premium above spot price. This premium varies by product type and weight. Premiums are disclosed on each product page and in your cart before checkout.'],
    ['Shipping & Insurance', 'Standard insured shipping: $25 flat rate for orders up to 2 oz; $40 for 2–10 oz. Larger orders quoted separately. Sell orders include a free prepaid insured shipping kit.'],
    ['Assay / Testing Fee (Sell Orders)', '$15–$35, deducted from sale proceeds. Covers purity verification by our certified assayers.'],
    ['Processing Fee (Sell Orders)', '1–2% of final accepted sale value.'],
    ['Return Shipping (Declined Sell Offers)', '$15–$25 per shipment if you decline our offer and request your gold returned.'],
    ['Cancellation / Restocking', 'Orders cancelled after payment confirmation: 2% restocking fee or $50 minimum, due to market exposure.'],
    ['Sales Tax', 'Varies by state and product type. Some states exempt certain gold bullion. Estimated tax shown at checkout is illustrative only. Final tax confirmed at order processing.'],
    ['No Hidden Fees', 'All fees are disclosed before you commit. We do not charge fees not listed in this disclosure without advance notice.'],
  ]
);

export const AmlKyc = makeLegal(
  'AML / KYC Policy',
  'Anti-Money Laundering and Know Your Customer policy template. Requires attorney and compliance review.',
  [
    ['Purpose', 'AurumGold is designed with awareness of FinCEN regulations applicable to precious metals dealers under the Bank Secrecy Act (BSA). This policy outlines our approach to AML/KYC compliance. This is a prototype — actual compliance implementation requires a qualified compliance officer and legal review.'],
    ['Identity Verification', 'All customers must provide valid government-issued photo identification before completing any transaction. We may also request proof of address and source-of-funds documentation for certain transactions.'],
    ['Transaction Monitoring', 'We apply risk-based transaction monitoring. Unusual or suspicious activity may be reviewed by our compliance team. Transactions that trigger reporting thresholds will be handled in accordance with applicable BSA requirements.'],
    ['Suspicious Activity Reporting', 'We reserve the right and may be obligated to file Suspicious Activity Reports (SARs) with FinCEN for transactions we suspect involve money laundering, fraud, or other illegal activity. We are prohibited by law from informing customers of SARs filed.'],
    ['Currency Transaction Reports', 'Cash transactions in excess of $10,000 may require Currency Transaction Reports (CTR) as required by BSA regulations.'],
    ['Recordkeeping', 'We maintain customer identification records and transaction records for periods required by applicable law, typically 5 years.'],
    ['High-Risk Customers', 'We may decline to onboard or transact with customers who pose elevated AML risk, including those from high-risk jurisdictions, politically exposed persons (PEPs), or those who fail identity verification.'],
  ]
);

export const CookiePolicy = makeLegal(
  'Cookie Policy',
  'Cookie usage disclosure. Template requiring review.',
  [
    ['What Are Cookies', 'Cookies are small text files stored on your device by your browser. We use cookies to ensure the Platform functions correctly and to understand how it is used.'],
    ['Essential Cookies', 'Required for the Platform to function. Cannot be disabled. Examples: session management, authentication, security.'],
    ['Analytics Cookies', 'Optional. Used to understand how users interact with the Platform (page views, navigation paths). No personally identifiable information is shared with analytics providers. You may opt out.'],
    ['Marketing Cookies', 'Optional. Used to deliver relevant advertising and measure campaign effectiveness. Currently disabled by default.'],
    ['Managing Cookies', 'You can manage cookie preferences through our Cookie Consent Manager (accessible via the banner on first visit or through Account Settings). You can also control cookies through your browser settings.'],
    ['Third-Party Cookies', 'Some cookies may be set by third-party services we use. We are not responsible for third-party cookie practices.'],
  ]
);

export const ShippingPolicy = makeLegal(
  'Shipping & Insurance Policy',
  'Shipping and insurance terms template. Requires review.',
  [
    ['Insured Delivery (Buy Orders)', 'All gold purchased through AurumGold is shipped via insured carrier. Standard shipments are insured for the full purchase value. Signature is required upon delivery.'],
    ['Delivery Timeframes', 'Most orders ship within 1–3 business days of payment confirmation. Delivery typically takes 2–5 business days depending on location and carrier availability.'],
    ['Insured Receive Kit (Sell Orders)', 'We provide a prepaid insured shipping kit for gold you are sending to us. Follow included instructions precisely. Do not disclose contents on outer packaging.'],
    ['Insurance Claims', 'If your shipment is damaged or lost in transit, contact us immediately. We will initiate the insurance claim process. Do not discard packaging materials — they may be required for the claim.'],
    ['Packaging Requirements', 'All shipments must be professionally packed to prevent damage. Improperly packed items that arrive damaged may affect the claim outcome and our ability to accept the shipment.'],
    ['International Shipping', 'International shipping is not currently available. This Platform serves customers in the United States only.'],
  ]
);

export const TaxNotice = makeLegal(
  'Tax Notice',
  'Tax information for U.S. gold transactions. Not tax advice. Requires CPA and attorney review.',
  [
    ['Important Disclaimer', 'This Tax Notice is for general informational purposes only. It is NOT tax advice. Tax laws are complex, vary by state and individual circumstances, and change frequently. Consult a qualified tax professional for advice specific to your situation.'],
    ['Capital Gains Tax', 'Physical gold is generally treated as a collectible by the IRS and may be subject to capital gains tax when sold at a profit. The applicable rate depends on your holding period, income level, and tax bracket. Long-term gains on collectibles may be taxed at rates up to 28%.'],
    ['Sales Tax', 'Sales tax treatment of gold bullion varies significantly by state. Some states (e.g., California, New York) tax gold bullion purchases. Others (e.g., Texas, Montana) exempt bullion above certain thresholds. You are responsible for understanding the applicable rules in your state.'],
    ['IRS Form 1099-B', 'Certain gold transactions may require us to file Form 1099-B with the IRS and provide you a copy. Reportable transactions typically include the sale of specific gold bullion types above certain quantity thresholds. Consult a tax advisor.'],
    ['Customer Responsibility', 'You are solely responsible for all tax obligations arising from your transactions. We are not your tax advisor and are not responsible for your tax compliance.'],
    ['Record Keeping', 'Maintain records of all gold purchase prices, sale prices, dates, and associated costs. These records are essential for accurate tax reporting.'],
  ]
);

export const AccessibilityStatement = makeLegal(
  'Accessibility Statement',
  'Accessibility commitment and current status.',
  [
    ['Our Commitment', 'AurumGold is committed to ensuring digital accessibility for people with disabilities. We aim to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.'],
    ['Current Status', 'This is a prototype and has not undergone formal accessibility audit. Known areas requiring review: screen reader compatibility, keyboard navigation, color contrast ratios, and ARIA labeling.'],
    ['Assistive Technologies', 'We aim to support compatibility with common assistive technologies including screen readers (JAWS, NVDA, VoiceOver), keyboard-only navigation, and high-contrast display modes.'],
    ['Feedback', 'If you experience accessibility barriers, please contact us at accessibility@aurumgold.demo (placeholder). We welcome feedback and will work to address issues.'],
    ['Formal Audit', 'A formal accessibility audit is required before commercial launch. This statement will be updated following audit completion.'],
  ]
);

export const Disclaimer = makeLegal(
  'General Disclaimer',
  'General disclaimer of liability and accuracy.',
  [
    ['Information Accuracy', 'While we strive for accuracy, all information on this Platform — including prices, product descriptions, fee estimates, and legal documents — is provided "as is" without warranties of any kind, express or implied.'],
    ['No Investment Advice', 'Nothing on this Platform constitutes investment advice, financial advice, tax advice, or legal advice. All information is for general informational purposes only. You are solely responsible for your decisions.'],
    ['Price Information', 'All prices displayed are indicative only and are based on simulated data in this prototype. In a production environment, all pricing information is subject to change without notice and confirmed only at transaction completion.'],
    ['Third-Party Links', 'Links to third-party websites are provided for convenience only. We do not endorse and are not responsible for the content, privacy practices, or accuracy of third-party websites.'],
    ['Limitation of Liability', 'To the maximum extent permitted by applicable law, AurumGold shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from your use of this Platform or any transactions conducted through it.'],
    ['Prototype Notice', 'This entire Platform is a prototype demonstration. No real gold transactions are conducted. No real funds are held. No real legal obligations are created by using this prototype.'],
  ]
);
