import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const NAV_LINKS = [
  { label: 'Buy Gold', to: '/buy' },
  { label: 'Sell Gold', to: '/sell' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, logout, cartCount } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to;

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(18,20,20,0.97)',
      borderBottom: '1px solid var(--color-outline-dim)',
      backdropFilter: 'blur(12px)',
    }}>
      {/* Price ticker */}
      <div style={{ background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)', padding: '6px 0' }}>
        <div className="container flex-between" style={{ flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', fontSize: 12 }}>
            <span className="label-caps" style={{ fontSize: 10 }}>Indicative Prices Only</span>
            <span style={{ color: 'var(--color-text-muted)' }}>
              XAU/USD <strong style={{ color: 'var(--color-gold)' }}>$2,042.50 /oz</strong>
              <span style={{ color: 'var(--color-success)', marginLeft: 6 }}>▲ +$8.75 (+0.43%)</span>
            </span>
            <span style={{ color: 'var(--color-text-muted)' }} className="hide-mobile">
              XAG/USD <strong style={{ color: 'var(--color-text-dim)' }}>$23.18 /oz</strong>
            </span>
          </div>
          <span style={{ fontSize: 11, color: 'var(--color-outline)' }} className="hide-mobile">
            ⚠ Simulated data · Not real-time market prices
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ padding: '0', position: 'relative' }}>
        <div className="container flex-between" style={{ height: 64 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 32, height: 32, background: 'var(--color-gold)',
              borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 16
            }}>A</div>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>
              Aurum<span style={{ color: 'var(--color-gold)' }}>Gold</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hide-mobile" style={{ display: 'flex', gap: 4, margin: 0 }}>
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} style={{
                  padding: '8px 14px', borderRadius: 4, fontSize: 14, fontWeight: 500,
                  color: isActive(l.to) ? 'var(--color-gold)' : 'var(--color-text-dim)',
                  background: isActive(l.to) ? 'rgba(212,175,55,0.1)' : 'transparent',
                  transition: 'all 0.2s', display: 'block',
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex hide-mobile" style={{ gap: 8, alignItems: 'center' }}>
            <button onClick={() => navigate('/cart')} style={{
              position: 'relative', padding: '8px 12px', background: 'transparent',
              border: '1px solid var(--color-outline-dim)', borderRadius: 4,
              color: 'var(--color-text-dim)', fontSize: 14, cursor: 'pointer',
            }}>
              🛒 Cart
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: -6, right: -6, background: 'var(--color-gold)',
                  color: '#1A1000', borderRadius: '50%', width: 18, height: 18,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700
                }}>{cartCount}</span>
              )}
            </button>
            {isLoggedIn ? (
              <>
                <button onClick={() => navigate('/dashboard')} className="btn btn-ghost btn-sm">Dashboard</button>
                <button onClick={logout} className="btn btn-ghost btn-sm">Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/auth')} className="btn btn-ghost btn-sm">Sign In</button>
                <button onClick={() => navigate('/auth?mode=register')} className="btn btn-primary btn-sm">Get Started</button>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ padding: 8, color: 'var(--color-text)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 22 }}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'var(--color-surface-lo)',
            borderBottom: '1px solid var(--color-outline-dim)',
            padding: '16px 20px 24px',
            display: 'flex', flexDirection: 'column', gap: 4,
            zIndex: 200,
          }}>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} style={{
                padding: '12px 16px', borderRadius: 6, fontSize: 15, fontWeight: 500,
                color: isActive(l.to) ? 'var(--color-gold)' : 'var(--color-text-dim)',
                background: isActive(l.to) ? 'rgba(212,175,55,0.1)' : 'transparent',
              }}>
                {l.label}
              </Link>
            ))}
            <div className="divider" style={{ margin: '12px 0' }} />
            <button onClick={() => { navigate('/cart'); setMobileOpen(false); }} className="btn btn-ghost w-full" style={{ justifyContent: 'center', marginBottom: 8 }}>
              🛒 Cart {cartCount > 0 && `(${cartCount})`}
            </button>
            {isLoggedIn ? (
              <>
                <button onClick={() => { navigate('/dashboard'); setMobileOpen(false); }} className="btn btn-ghost w-full" style={{ justifyContent: 'center', marginBottom: 8 }}>Dashboard</button>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="btn btn-ghost w-full" style={{ justifyContent: 'center' }}>Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={() => { navigate('/auth'); setMobileOpen(false); }} className="btn btn-secondary w-full" style={{ justifyContent: 'center', marginBottom: 8 }}>Sign In</button>
                <button onClick={() => { navigate('/auth?mode=register'); setMobileOpen(false); }} className="btn btn-primary w-full" style={{ justifyContent: 'center' }}>Get Started</button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
