import { Link } from 'react-router-dom';

const LEGAL_LINKS = [
  { label: 'Terms of Service', to: '/legal/terms' },
  { label: 'Privacy Policy', to: '/legal/privacy' },
  { label: 'Cookie Policy', to: '/legal/cookies' },
  { label: 'AML/KYC Policy', to: '/legal/aml-kyc' },
  { label: 'Risk Disclosure', to: '/legal/risk-disclosure' },
  { label: 'Pricing & Fees', to: '/legal/fees' },
  { label: 'Shipping & Returns', to: '/legal/shipping' },
  { label: 'Tax Notice', to: '/legal/tax' },
  { label: 'Accessibility', to: '/legal/accessibility' },
  { label: 'Disclaimer', to: '/legal/disclaimer' },
];

const NAV_LINKS = [
  { label: 'Buy Gold', to: '/buy' },
  { label: 'Sell Gold', to: '/sell' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface-lo)',
      borderTop: '1px solid var(--color-outline-dim)',
      paddingTop: 60, paddingBottom: 24,
    }}>
      {/* Compliance notice */}
      <div className="container" style={{ marginBottom: 48 }}>
        <div style={{
          border: '1px solid var(--color-outline-dim)',
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          fontSize: 12,
          color: 'var(--color-outline)',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: 4 }}>
            ⚠ IMPORTANT DISCLOSURES
          </strong>
          AurumGold is a prototype demonstration platform. All prices shown are indicative simulated data and do not reflect real market prices. 
          No real gold transactions, payments, or custody services are provided. This website does not constitute investment advice, tax advice, or legal advice. 
          Gold prices fluctuate and past performance does not guarantee future results. This platform is not production-ready and requires qualified U.S. legal, 
          AML/KYC, tax, and compliance review before any commercial launch.
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 28, height: 28, background: 'var(--color-gold)',
                borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 14
              }}>A</div>
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18 }}>
                Aurum<span style={{ color: 'var(--color-gold)' }}>Gold</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: 'var(--color-outline)', lineHeight: 1.7 }}>
              A U.S.-focused gold buying and selling platform. Premium, secure, and transparent.
            </p>
            <p style={{ fontSize: 11, color: 'var(--color-charcoal)', marginTop: 12 }}>
              © {new Date().getFullYear()} AurumGold LLC (Demo). All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="label-caps" style={{ marginBottom: 16, fontSize: 10 }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ fontSize: 14, color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="label-caps" style={{ marginBottom: 16, fontSize: 10 }}>Legal & Compliance</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LEGAL_LINKS.slice(0, 5).map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ fontSize: 13, color: 'var(--color-outline)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-outline)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Legal */}
          <div>
            <h4 className="label-caps" style={{ marginBottom: 16, fontSize: 10, color: 'transparent' }}>.</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LEGAL_LINKS.slice(5).map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ fontSize: 13, color: 'var(--color-outline)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-outline)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" />
        <div className="flex-between" style={{ paddingTop: 20, flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 11, color: 'var(--color-charcoal)' }}>
            PROTOTYPE · Not production-ready · Legal review required before launch
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/legal/privacy" style={{ fontSize: 11, color: 'var(--color-charcoal)' }}>Privacy</Link>
            <Link to="/legal/terms" style={{ fontSize: 11, color: 'var(--color-charcoal)' }}>Terms</Link>
            <Link to="/legal/cookies" style={{ fontSize: 11, color: 'var(--color-charcoal)' }}>Cookies</Link>
            <Link to="/legal/accessibility" style={{ fontSize: 11, color: 'var(--color-charcoal)' }}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
