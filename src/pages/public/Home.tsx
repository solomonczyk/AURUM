import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const TRUST_ITEMS = [
  { icon: '🛡', title: 'Fully Insured Shipping', desc: 'Every shipment is covered end-to-end by Lloyd\'s of London policies. Signature required on delivery.' },
  { icon: '🔬', title: 'Expert Verification', desc: 'Multi-stage purity testing by certified assayers ensures every gram meets stated specifications.' },
  { icon: '📊', title: 'Transparent Pricing', desc: 'We publish all spreads, fees, and costs before you commit. No hidden charges. Ever.' },
  { icon: '🇺🇸', title: 'U.S.-Focused Service', desc: 'Serving customers across the United States, with domestic shipping and USD transactions only.' },
];

const HOW_STEPS = [
  { step: '01', title: 'Create Your Account', desc: 'Register and complete identity verification to access full buy/sell capabilities.' },
  { step: '02', title: 'Choose & Transact', desc: 'Browse our catalog to buy, or submit a quote request to sell your gold.' },
  { step: '03', title: 'Secure Delivery', desc: 'Receive fully insured, tracked delivery, or ship your gold using our prepaid insured packaging.' },
  { step: '04', title: 'Track in Dashboard', desc: 'Monitor all orders, quotes, and your account ledger in real time through your personal dashboard.' },
];

const WHY_GOLD = [
  { title: 'Store of Value', desc: 'Gold has maintained purchasing power across millennia, outlasting currencies and empires.' },
  { title: 'Portfolio Diversification', desc: 'Physical gold often moves independently of equities and bonds, offering genuine diversification.' },
  { title: 'Tangible Asset', desc: 'Unlike paper assets, physical gold is a real, verifiable commodity you can hold in your hands.' },
];

const FAQ_PREVIEW = [
  { q: 'Is the price guaranteed?', a: 'No. Prices shown are indicative only. The final price is confirmed at the time of order placement and may differ.' },
  { q: 'How is gold verified?', a: 'All gold we receive undergoes multi-stage purity testing including XRF analysis and weight verification by certified assayers.' },
  { q: 'Is shipping insured?', a: 'Yes. Every shipment is fully insured. You will receive tracking and must provide a signature upon delivery.' },
];

export default function Home() {
  const navigate = useNavigate();
  const { } = useApp();

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '88vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0C0F0F 0%, #1A1C1C 40%, #121414 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)',
          width: 1, height: '60%', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)',
        }} />

        <div className="container" style={{ paddingTop: 80, paddingBottom: 80, position: 'relative' }}>
          <div style={{ maxWidth: 720 }}>
            <span className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: 24, display: 'block' }}>
              U.S. Gold Exchange · Est. 2023
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', marginBottom: 28, color: 'var(--color-text)',
            }}>
              The Gold Standard of<br />
              <span style={{ color: 'var(--color-gold)' }}>Modern Bullion</span> Trading.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: 40, maxWidth: 580, lineHeight: 1.7 }}>
              Secure, transparent, and U.S.-focused. Buy and sell physical gold with institutional-grade 
              verification, insured delivery, and full fee transparency. No hidden costs. No investment promises.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <button onClick={() => navigate('/buy')} className="btn btn-primary btn-lg">
                Buy Gold →
              </button>
              <button onClick={() => navigate('/sell')} className="btn btn-secondary btn-lg">
                Get a Sell Quote
              </button>
            </div>

            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {['Fully Insured Shipping', 'Expert Purity Testing', 'Transparent Fees', 'U.S. Customers Only'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--color-outline)' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price preview card */}
        <div style={{
          position: 'absolute', bottom: 40, right: '8%',
          background: 'var(--color-surface-mid)', border: '1px solid var(--color-outline-dim)',
          borderRadius: 'var(--radius-lg)', padding: '20px 24px', minWidth: 240,
        }} className="hide-mobile">
          <p className="label-caps" style={{ fontSize: 10, marginBottom: 8 }}>Indicative Price · Simulated</p>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-sans)' }}>
            $2,042.50
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>per troy ounce · XAU/USD</div>
          <div style={{ fontSize: 12, color: 'var(--color-success)', marginTop: 6 }}>▲ +$8.75 (+0.43%) today</div>
          <div style={{ fontSize: 10, color: 'var(--color-outline)', marginTop: 8 }}>
            ⚠ Not real market data. Indicative only.
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ background: 'var(--color-surface-lo)' }}>
        <div className="container">
          <div className="section-header centered">
            <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Why AurumGold</span>
            <h2>Built on Unwavering Trust.</h2>
            <p>Every aspect of our operation is designed to protect you — your gold, your money, and your personal information.</p>
          </div>
          <div className="grid-4">
            {TRUST_ITEMS.map(item => (
              <div key={item.title} className="card" style={{ textAlign: 'center', padding: 32 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: 18 }}>{item.title}</h4>
                <p style={{ fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Process</span>
            <h2>Your Journey to Physical Gold.</h2>
            <p>A clear, secure, and transparent process — from first click to delivery.</p>
          </div>
          <div className="grid-4">
            {HOW_STEPS.map((step, i) => (
              <div key={step.step} style={{ position: 'relative' }}>
                {i < HOW_STEPS.length - 1 && (
                  <div className="hide-mobile" style={{
                    position: 'absolute', top: 28, left: '60%', right: '-40%', height: 1,
                    background: 'var(--color-outline-dim)', zIndex: 0,
                  }} />
                )}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    border: '2px solid var(--color-gold)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                    fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-gold)', fontSize: 18,
                    background: 'var(--color-surface)',
                  }}>{step.step}</div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10 }}>{step.title}</h4>
                  <p style={{ fontSize: 14 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gold */}
      <section className="section" style={{ background: 'var(--color-surface-lo)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 16 }}>About Physical Gold</span>
              <h2 style={{ marginBottom: 24 }}>Why People Choose Physical Gold.</h2>
              <p style={{ marginBottom: 32, fontSize: '1.05rem' }}>
                Physical gold has been valued across cultures and centuries. Unlike paper currencies or digital assets, 
                it cannot be inflated away or defaulted on. It is a finite, verifiable, real-world asset.
              </p>
              <div className="disclosure-box" style={{ marginBottom: 32 }}>
                <strong>⚠ No Investment Advice</strong>
                This information is educational only. We do not provide investment, tax, or financial advice. 
                Physical gold carries risks including price volatility, liquidity limitations, and storage/insurance costs. 
                Consult a qualified financial advisor before making investment decisions.
              </div>
              <button onClick={() => navigate('/pricing')} className="btn btn-secondary">
                View Pricing & Fees
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {WHY_GOLD.map(item => (
                <div key={item.title} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36, height: 36, minWidth: 36, background: 'rgba(212,175,55,0.15)',
                    borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-gold)', fontWeight: 700, fontSize: 16,
                  }}>⬡</div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 6, fontSize: 17 }}>{item.title}</h4>
                    <p style={{ fontSize: 14 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Common Questions</span>
            <h2>Frequently Asked Questions.</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ_PREVIEW.map(faq => (
              <div key={faq.q} className="card">
                <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 10, fontSize: 17 }}>{faq.q}</h4>
                <p style={{ fontSize: 14 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button onClick={() => navigate('/faq')} className="btn btn-ghost">View All FAQs</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-surface-lo) 0%, rgba(212,175,55,0.08) 100%)',
        borderTop: '1px solid var(--color-outline-dim)', borderBottom: '1px solid var(--color-outline-dim)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 16 }}>Ready to Start?</h2>
          <p style={{ marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Create your account in minutes. Identity verification required for transactions. 
            All prices indicative — final pricing confirmed at order placement.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/auth?mode=register')} className="btn btn-primary btn-lg">
              Open Account
            </button>
            <button onClick={() => navigate('/buy')} className="btn btn-secondary btn-lg">
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
