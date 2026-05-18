import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', category: '', message: '' });
  const [sent, setSent] = useState(false);
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  if (sent) return (
    <main><section className="section"><div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
      <h2 style={{ marginBottom: 12 }}>Message Sent</h2>
      <p style={{ marginBottom: 24 }}>Thank you for reaching out. We'll respond within 1–2 business days during business hours.</p>
      <button onClick={() => setSent(false)} className="btn btn-ghost">Send Another</button>
    </div></section></main>
  );

  return (
    <main>
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Contact</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Get in Touch</h1>
          <p style={{ maxWidth: 480 }}>Questions about buying, selling, your account, or compliance? Our team is here to help.</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: 'start' }}>
            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.4rem' }}>Contact Information</h3>
                {[
                  { icon: '📍', label: 'Address', val: '123 Bullion Avenue, Suite 400\nNew York, NY 10001\n(Placeholder — not a real address)' },
                  { icon: '📞', label: 'Phone', val: '+1 (800) 555-GOLD\nMon–Fri, 9:00 AM – 5:00 PM EST' },
                  { icon: '✉️', label: 'Email', val: 'support@aurumgold.demo\n(Placeholder — not a real email)' },
                  { icon: '🕐', label: 'Business Hours', val: 'Monday – Friday: 9:00 AM – 5:00 PM EST\nSaturday: 10:00 AM – 2:00 PM EST\nSunday & Holidays: Closed' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div className="label-caps" style={{ fontSize: 10, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: 'var(--color-text-dim)', whiteSpace: 'pre-line' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-box">
                <p className="label-caps" style={{ fontSize: 10, marginBottom: 10 }}>Support Categories</p>
                {['Buy Order Support', 'Sell Order & Quote Questions', 'Account & KYC Verification', 'Shipping & Delivery', 'Pricing & Fee Questions', 'Technical / Website Issues', 'Compliance & Legal Inquiries'].map(c => (
                  <div key={c} style={{ fontSize: 13, color: 'var(--color-text-muted)', padding: '6px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 24 }}>Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-name">Full Name *</label>
                  <input id="c-name" name="name" className="form-input" required value={form.name} onChange={change} placeholder="Jane Smith" />
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-email">Email *</label>
                    <input id="c-email" name="email" type="email" className="form-input" required value={form.email} onChange={change} placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-phone">Phone</label>
                    <input id="c-phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={change} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-cat">Support Category *</label>
                  <select id="c-cat" name="category" className="form-select" required value={form.category} onChange={change}>
                    <option value="">Select category</option>
                    <option>Buy Order Support</option>
                    <option>Sell Order & Quote Questions</option>
                    <option>Account & KYC Verification</option>
                    <option>Shipping & Delivery</option>
                    <option>Pricing & Fee Questions</option>
                    <option>Technical / Website Issues</option>
                    <option>Compliance & Legal Inquiries</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-msg">Message *</label>
                  <textarea id="c-msg" name="message" className="form-textarea" required value={form.message} onChange={change} placeholder="Please describe your question or issue in detail..." style={{ minHeight: 120 }} />
                </div>
                <div className="info-box" style={{ fontSize: 12 }}>
                  By submitting this form you agree to our <a href="/legal/privacy" style={{ color: 'var(--color-gold)' }}>Privacy Policy</a>. We will use your information only to respond to your inquiry.
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
