import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function Auth() {
  const [params] = useSearchParams();
  const [mode, setMode] = useState<'login' | 'register'>(params.get('mode') === 'register' ? 'register' : 'login');
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '', agreeTerms: false, agreeAge: false });
  const [error, setError] = useState('');
  const { login, isLoggedIn } = useApp();
  const navigate = useNavigate();

  useEffect(() => { if (isLoggedIn) navigate('/dashboard'); }, [isLoggedIn]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(p => ({ ...p, [e.target.name]: val }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'register') {
      if (form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }
      if (!form.agreeTerms || !form.agreeAge) { setError('You must accept the Terms and confirm your age.'); return; }
    }
    const ok = login(form.email, form.password);
    if (!ok) setError('Invalid credentials. (Demo: any email/password works.)');
  };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '40px 20px' }}>
      <div style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 48, height: 48, background: 'var(--color-gold)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 24, margin: '0 auto 12px' }}>A</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>AurumGold</h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginTop: 4 }}>
            {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        <div className="card" style={{ padding: 32 }}>
          {/* Mode toggle */}
          <div style={{ display: 'flex', background: 'var(--color-surface-lo)', borderRadius: 'var(--radius)', padding: 4, marginBottom: 24 }}>
            {(['login', 'register'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '8px 0', borderRadius: 'calc(var(--radius) - 2px)',
                fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer',
                background: mode === m ? 'var(--color-surface-top)' : 'transparent',
                color: mode === m ? 'var(--color-text)' : 'var(--color-text-muted)',
                transition: 'all 0.2s',
              }}>
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {mode === 'register' && (
              <div className="grid-2" style={{ gap: 12 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" className="form-input" required value={form.firstName} onChange={change} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" className="form-input" required value={form.lastName} onChange={change} />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input id="email" name="email" type="email" className="form-input" required value={form.email} onChange={change} placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password *</label>
              <input id="password" name="password" type="password" className="form-input" required value={form.password} onChange={change} placeholder={mode === 'register' ? 'Minimum 8 characters' : '••••••••'} />
            </div>

            {mode === 'register' && (
              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password *</label>
                <input id="confirmPassword" name="confirmPassword" type="password" className="form-input" required value={form.confirmPassword} onChange={change} />
              </div>
            )}

            {error && <div style={{ padding: '10px 14px', background: 'rgba(255,180,171,0.1)', border: '1px solid rgba(255,180,171,0.3)', borderRadius: 4, fontSize: 13, color: 'var(--color-error)' }}>{error}</div>}

            {mode === 'register' && (
              <>
                <label className="checkbox-label">
                  <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={change} />
                  I agree to the <a href="/legal/terms" target="_blank" style={{ color: 'var(--color-gold)', marginLeft: 4 }}>Terms of Service</a>,{' '}
                  <a href="/legal/privacy" target="_blank" style={{ color: 'var(--color-gold)' }}>Privacy Policy</a>, and{' '}
                  <a href="/legal/risk-disclosure" target="_blank" style={{ color: 'var(--color-gold)' }}>Risk Disclosure</a>.
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="agreeAge" checked={form.agreeAge} onChange={change} />
                  I confirm I am 18 years of age or older and legally eligible to use this service in the United States.
                </label>
                <div className="info-box" style={{ fontSize: 12 }}>
                  Identity verification (KYC) is required before your first transaction. We may request a government-issued ID and additional documents.
                </div>
              </>
            )}

            {mode === 'login' && (
              <div style={{ textAlign: 'right' }}>
                <button type="button" style={{ fontSize: 13, color: 'var(--color-gold)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center', padding: '14px' }}>
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            <div className="info-box" style={{ fontSize: 12, textAlign: 'center' }}>
              🔒 Demo mode — no real authentication. Any email/password accepted.
            </div>
          </form>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} style={{ fontSize: 13, color: 'var(--color-gold)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
            {mode === 'login' ? 'Register →' : 'Sign In →'}
          </button>
        </div>
      </div>
    </main>
  );
}
