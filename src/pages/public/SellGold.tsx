import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellGold() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ itemType: '', weight: '', weightUnit: 'grams', purity: '', zip: '', name: '', email: '', phone: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 24 }}>✓</div>
            <h1 style={{ fontSize: '2rem', marginBottom: 16 }}>Quote Request Submitted</h1>
            <p style={{ marginBottom: 24 }}>
              Thank you! We've received your quote request. Our team will review your submission and contact you within 1–2 business days.
            </p>
            <div className="disclosure-box" style={{ textAlign: 'left', marginBottom: 32 }}>
              <strong>⚠ Important Reminder</strong>
              This is not a final offer. The quote provided is an estimate only. Final price depends on 
              physical inspection, current market price at time of receipt, purity verification, weight, 
              condition, and applicable fees.
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={() => navigate('/dashboard/quotes')} className="btn btn-primary">View My Quotes</button>
              <button onClick={() => { setSubmitted(false); setForm({ itemType: '', weight: '', weightUnit: 'grams', purity: '', zip: '', name: '', email: '', phone: '', notes: '' }); }} className="btn btn-ghost">Submit Another</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Sell Gold</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Get a Gold Quote</h1>
          <p style={{ maxWidth: 560 }}>Submit your gold details below for an estimate. Our team will review and contact you with next steps. No commitment required.</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>
            {/* Form */}
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 24 }}>Tell Us About Your Gold</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="itemType">Item Type *</label>
                  <select id="itemType" name="itemType" className="form-select" value={form.itemType} onChange={handleChange} required>
                    <option value="">Select item type</option>
                    <option>Gold Bar</option>
                    <option>Gold Coin</option>
                    <option>Gold Jewelry</option>
                    <option>Gold Scrap</option>
                    <option>Gold Nugget</option>
                    <option>Other / Unknown</option>
                  </select>
                </div>

                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="weight">Approximate Weight *</label>
                    <input id="weight" name="weight" type="number" min="0.1" step="0.1" className="form-input" placeholder="e.g. 31.1" value={form.weight} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="weightUnit">Unit</label>
                    <select id="weightUnit" name="weightUnit" className="form-select" value={form.weightUnit} onChange={handleChange}>
                      <option value="grams">Grams</option>
                      <option value="troy_oz">Troy Ounces</option>
                      <option value="dwt">Pennyweight (dwt)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="purity">Purity / Karat *</label>
                  <select id="purity" name="purity" className="form-select" value={form.purity} onChange={handleChange} required>
                    <option value="">Select purity</option>
                    <option>24K / 99.99% Fine Gold</option>
                    <option>22K / 91.67%</option>
                    <option>18K / 75%</option>
                    <option>14K / 58.3%</option>
                    <option>10K / 41.7%</option>
                    <option>Unknown — needs testing</option>
                  </select>
                </div>

                {/* Photo upload placeholder */}
                <div>
                  <label className="form-label" style={{ display: 'block', marginBottom: 8 }}>Photos (Optional)</label>
                  <div style={{
                    border: '2px dashed var(--color-charcoal)', borderRadius: 'var(--radius-md)',
                    padding: '32px 20px', textAlign: 'center', cursor: 'pointer',
                    color: 'var(--color-outline)', fontSize: 14,
                    background: 'var(--color-surface-lo)',
                    transition: 'border-color 0.2s',
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
                    <p style={{ color: 'var(--color-outline)' }}>Drag & drop photos here, or click to browse</p>
                    <p style={{ fontSize: 12, marginTop: 4 }}>JPG, PNG, HEIC up to 10MB each · Demo only — no files stored</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="zip">Shipping ZIP Code *</label>
                  <input id="zip" name="zip" className="form-input" placeholder="e.g. 10001" value={form.zip} onChange={handleChange} required maxLength={10} />
                </div>

                <div className="divider" />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16 }}>Your Contact Information</h4>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" className="form-input" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="form-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Additional Notes</label>
                  <textarea id="notes" name="notes" className="form-textarea" placeholder="Any additional details about condition, documentation, or provenance..." value={form.notes} onChange={handleChange} />
                </div>

                <div className="disclosure-box">
                  <strong>⚠ Estimate — Not a Final Offer</strong>
                  Any estimate provided is indicative only. The final offer price depends on: physical inspection, 
                  current market gold spot price at time of receipt, verified purity and weight, item condition, 
                  and applicable assay/testing, processing, and shipping fees. You will have the opportunity to 
                  accept or decline the final offer before any payment is made.
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '14px 40px' }}>
                  Submit Quote Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 120 }}>
              {/* Process */}
              <div className="card">
                <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16, fontSize: 16 }}>How the Sell Process Works</h4>
                {[
                  ['1', 'Submit Quote', 'Tell us about your gold and submit photos.'],
                  ['2', 'Receive Estimate', 'We provide an indicative estimate within 1–2 business days.'],
                  ['3', 'Ship Your Gold', 'If interested, use our prepaid insured shipping kit.'],
                  ['4', 'Inspection & Final Offer', 'Our certified assayers verify purity and weight.'],
                  ['5', 'Accept or Decline', 'You review the final offer and choose to proceed or have your gold returned.'],
                  ['6', 'Get Paid', 'Approved funds are credited to your account upon acceptance.'],
                ].map(([n, t, d]) => (
                  <div key={n} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                    <div style={{
                      width: 24, height: 24, minWidth: 24, background: 'rgba(212,175,55,0.15)',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: 'var(--color-gold)',
                    }}>{n}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{t}</div>
                      <div style={{ fontSize: 12, color: 'var(--color-outline)' }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fees */}
              <div className="info-box">
                <p className="label-caps" style={{ fontSize: 10, marginBottom: 10 }}>Applicable Fees</p>
                {[
                  ['Assay/Testing Fee', '$15–$35'],
                  ['Shipping (Prepaid Kit)', 'Free'],
                  ['Processing Fee', '1–2% of final value'],
                  ['Return Shipping (if declined)', '$15–$25'],
                ].map(([k, v]) => (
                  <div key={k} className="flex-between" style={{ fontSize: 12, marginBottom: 8 }}>
                    <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                    <span style={{ color: 'var(--color-text-dim)' }}>{v}</span>
                  </div>
                ))}
                <a href="/legal/fees" style={{ fontSize: 11, color: 'var(--color-gold)', textDecoration: 'underline', display: 'block', marginTop: 10 }}>
                  Full Pricing & Fees Disclosure →
                </a>
              </div>

              <div className="disclosure-box">
                <strong>⚠ Final Offer After Inspection</strong>
                The final purchase price is only determined after physical receipt and inspection. 
                Market prices fluctuate — the spot price at time of inspection may differ from today's estimate.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
