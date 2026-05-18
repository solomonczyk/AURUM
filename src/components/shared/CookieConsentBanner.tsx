import { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function CookieConsentBanner() {
  const { cookieConsent, setCookieConsent } = useApp();
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  if (cookieConsent !== null) return null;

  return (
    <>
      {/* Banner */}
      <div role="dialog" aria-label="Cookie consent" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
        background: 'var(--color-surface-lo)',
        borderTop: '1px solid var(--color-outline-dim)',
        padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
        boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
      }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{ fontSize: 13, color: 'var(--color-text-dim)', margin: 0 }}>
            <strong style={{ color: 'var(--color-text)' }}>We use cookies</strong> to improve your experience. 
            Essential cookies are required for the site to function. We use analytics cookies to understand usage.
            {' '}<a href="/legal/cookies" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Cookie Policy</a>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button onClick={() => setShowPrefs(true)} className="btn btn-ghost btn-sm">Manage Preferences</button>
          <button onClick={() => setCookieConsent(false)} className="btn btn-ghost btn-sm">Reject Optional</button>
          <button onClick={() => setCookieConsent(true)} className="btn btn-primary btn-sm">Accept All</button>
        </div>
      </div>

      {/* Preferences modal */}
      {showPrefs && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1001,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
        }}>
          <div style={{
            background: 'var(--color-surface-mid)', border: '1px solid var(--color-outline-dim)',
            borderRadius: 'var(--radius-xl)', padding: 32, maxWidth: 480, width: '100%',
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 8 }}>Cookie Preferences</h3>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 24 }}>
              Manage your cookie preferences. Essential cookies cannot be disabled.
            </p>

            {[
              { key: 'essential', label: 'Essential Cookies', desc: 'Required for site functionality (login, cart, security). Cannot be disabled.', locked: true },
              { key: 'analytics', label: 'Analytics Cookies', desc: 'Help us understand how visitors use the site. No personal data shared with third parties.', locked: false },
              { key: 'marketing', label: 'Marketing Cookies', desc: 'Used to show relevant advertising and track campaign performance.', locked: false },
            ].map(c => (
              <div key={c.key} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '14px 0', borderBottom: '1px solid var(--color-outline-dim)',
              }}>
                <div style={{ flex: 1, marginRight: 16 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{c.desc}</div>
                </div>
                <div style={{
                  width: 44, height: 24, borderRadius: 12, cursor: c.locked ? 'default' : 'pointer',
                  background: (c.locked || prefs[c.key as 'analytics' | 'marketing']) ? 'var(--color-gold)' : 'var(--color-charcoal)',
                  position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                }} onClick={() => !c.locked && setPrefs(p => ({ ...p, [c.key]: !p[c.key as 'analytics' | 'marketing'] }))}>
                  <div style={{
                    position: 'absolute', top: 3,
                    left: (c.locked || prefs[c.key as 'analytics' | 'marketing']) ? 23 : 3,
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'white', transition: 'left 0.2s',
                  }} />
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => { setCookieConsent(prefs.analytics || prefs.marketing); setShowPrefs(false); }} className="btn btn-primary" style={{ flex: 1 }}>
                Save Preferences
              </button>
              <button onClick={() => setShowPrefs(false)} className="btn btn-ghost">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
