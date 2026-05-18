import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Settings() {
  const { user } = useApp();
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Account Settings</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>Manage your personal information, security, and preferences.</p>
      </div>

      {/* Personal Info */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.1rem' }}>Personal Information</h3>
        <div className="grid-2" style={{ gap: 16 }}>
          {[['First Name', user?.firstName || ''], ['Last Name', user?.lastName || ''], ['Email Address', user?.email || ''], ['Phone Number', user?.phone || '']].map(([l, v]) => (
            <div key={l} className="form-group">
              <label className="form-label">{l}</label>
              <input className="form-input" defaultValue={v} />
            </div>
          ))}
        </div>
        <button onClick={save} className="btn btn-primary btn-sm" style={{ marginTop: 16 }}>
          {saved ? '✓ Saved' : 'Save Changes'}
        </button>
      </div>

      {/* Security */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.1rem' }}>Password & Security</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          {['Current Password', 'New Password', 'Confirm New Password'].map(l => (
            <div key={l} className="form-group">
              <label className="form-label">{l}</label>
              <input type="password" className="form-input" placeholder="••••••••" />
            </div>
          ))}
          <button className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>Update Password</button>
        </div>
        <div className="divider" style={{ margin: '20px 0' }} />
        <div className="flex-between">
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Two-Factor Authentication</div>
            <div style={{ fontSize: 13, color: 'var(--color-outline)' }}>Add an extra layer of security. Currently disabled.</div>
          </div>
          <button className="btn btn-ghost btn-sm" disabled style={{ opacity: 0.5 }}>Enable 2FA (Coming Soon)</button>
        </div>
      </div>

      {/* Notification prefs */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.1rem' }}>Notification Preferences</h3>
        {[
          ['Order status updates', true], ['Quote responses', true], ['Price alerts', false],
          ['Promotional emails', false], ['Security alerts', true],
        ].map(([label, def]) => (
          <div key={String(label)} className="flex-between" style={{ padding: '10px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
            <span style={{ fontSize: 14 }}>{label}</span>
            <input type="checkbox" defaultChecked={!!def} style={{ accentColor: 'var(--color-gold)', width: 16, height: 16 }} />
          </div>
        ))}
      </div>

      {/* Cookie prefs */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 12, fontSize: '1.1rem' }}>Cookie & Privacy Preferences</h3>
        <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 16 }}>
          Essential cookies are required. Optional cookies can be managed here.
          See our <a href="/legal/cookies" style={{ color: 'var(--color-gold)' }}>Cookie Policy</a>.
        </p>
        {[['Analytics Cookies', false], ['Marketing Cookies', false]].map(([l, d]) => (
          <div key={String(l)} className="flex-between" style={{ padding: '10px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
            <span style={{ fontSize: 14 }}>{l}</span>
            <input type="checkbox" defaultChecked={!!d} style={{ accentColor: 'var(--color-gold)', width: 16, height: 16 }} />
          </div>
        ))}
      </div>

      {/* Danger zone */}
      <div className="card" style={{ border: '1px solid rgba(255,180,171,0.3)' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 12, fontSize: '1.1rem', color: 'var(--color-error)' }}>Danger Zone</h3>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>
          Requesting account deletion will initiate a review process. Pending orders must be resolved before deletion can be completed. Data retention requirements may prevent immediate deletion.
        </p>
        <button className="btn btn-ghost btn-sm" style={{ borderColor: 'rgba(255,180,171,0.4)', color: 'var(--color-error)' }}>
          Request Account Deletion
        </button>
      </div>
    </DashboardLayout>
  );
}
