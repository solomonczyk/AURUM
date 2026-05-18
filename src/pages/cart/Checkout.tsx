import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { mockProducts } from '../../data/mockData';

const STEPS = ['Details', 'Review', 'Confirmation'];

export default function Checkout() {
  const { cartItems, cartTotal, clearCart, isLoggedIn } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [checks, setChecks] = useState({ terms: false, risk: false, age: false });
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: '' });
  const [orderId] = useState(`ORD-${Date.now().toString().slice(-6)}`);

  const shipping = 25, insurance = 15;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + insurance + tax;

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  if (!isLoggedIn) return (
    <main><section className="section"><div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
      <h2 style={{ marginBottom: 12 }}>Sign In Required</h2>
      <p style={{ marginBottom: 24 }}>Please sign in or create an account to complete your purchase.</p>
      <button onClick={() => navigate('/auth')} className="btn btn-primary">Sign In / Register</button>
    </div></section></main>
  );

  if (cartItems.length === 0 && step < 2) return (
    <main><section className="section"><div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
      <h2 style={{ marginBottom: 12 }}>Cart is Empty</h2>
      <button onClick={() => navigate('/buy')} className="btn btn-primary">Browse Products</button>
    </div></section></main>
  );

  // Confirmation step
  if (step === 2) return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
          <h1 style={{ fontSize: '2rem', marginBottom: 12 }}>Order Placed — Demo Mode</h1>
          <p style={{ marginBottom: 8 }}>Order reference: <strong style={{ color: 'var(--color-gold)' }}>{orderId}</strong></p>
          <p style={{ marginBottom: 24 }}>You'll receive a confirmation email at {form.email || 'your email address'}.</p>
          <div className="disclosure-box" style={{ textAlign: 'left', marginBottom: 24 }}>
            <strong>⚠ Demo Confirmation — No Real Order Placed</strong>
            This is a prototype demonstration. No real order was placed, no payment was processed, 
            no gold was purchased, and no real transaction has occurred. This confirmation is for demonstration purposes only.
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={() => navigate('/dashboard/orders')} className="btn btn-primary">View Dashboard</button>
            <button onClick={() => navigate('/buy')} className="btn btn-ghost">Continue Shopping</button>
          </div>
        </div>
      </section>
    </main>
  );

  return (
    <main>
      <section style={{ padding: '40px 0 24px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', marginBottom: 16 }}>Checkout</h1>
          {/* Step indicator */}
          <div style={{ display: 'flex', gap: 0 }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700,
                    background: i === step ? 'var(--color-gold)' : i < step ? 'var(--color-success)' : 'var(--color-charcoal)',
                    color: i === step ? '#1A1000' : 'white',
                  }}>{i < step ? '✓' : i + 1}</div>
                  <span style={{ fontSize: 13, fontWeight: i === step ? 600 : 400, color: i === step ? 'var(--color-text)' : 'var(--color-outline)' }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ width: 40, height: 1, background: 'var(--color-outline-dim)', margin: '0 12px' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }}>
            {/* Main form area */}
            <div>
              {step === 0 && (
                <div className="card">
                  <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20 }}>Delivery Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="grid-2" style={{ gap: 14 }}>
                      <div className="form-group"><label className="form-label" htmlFor="firstName">First Name *</label><input id="firstName" name="firstName" className="form-input" required value={form.firstName} onChange={change} /></div>
                      <div className="form-group"><label className="form-label" htmlFor="lastName">Last Name *</label><input id="lastName" name="lastName" className="form-input" required value={form.lastName} onChange={change} /></div>
                    </div>
                    <div className="grid-2" style={{ gap: 14 }}>
                      <div className="form-group"><label className="form-label" htmlFor="chkEmail">Email *</label><input id="chkEmail" name="email" type="email" className="form-input" required value={form.email} onChange={change} /></div>
                      <div className="form-group"><label className="form-label" htmlFor="chkPhone">Phone *</label><input id="chkPhone" name="phone" type="tel" className="form-input" required value={form.phone} onChange={change} /></div>
                    </div>
                    <div className="form-group"><label className="form-label" htmlFor="address">Street Address *</label><input id="address" name="address" className="form-input" required value={form.address} onChange={change} placeholder="123 Main St" /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 100px', gap: 14 }}>
                      <div className="form-group"><label className="form-label" htmlFor="city">City *</label><input id="city" name="city" className="form-input" required value={form.city} onChange={change} /></div>
                      <div className="form-group"><label className="form-label" htmlFor="state">State *</label><input id="state" name="state" className="form-input" required value={form.state} onChange={change} placeholder="NY" maxLength={2} /></div>
                      <div className="form-group"><label className="form-label" htmlFor="zip">ZIP *</label><input id="zip" name="zip" className="form-input" required value={form.zip} onChange={change} /></div>
                    </div>
                  </div>

                  {/* Payment placeholder */}
                  <div className="divider" style={{ margin: '24px 0' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 12, fontSize: '1rem' }}>Payment Method</h3>
                  <div style={{
                    border: '2px dashed var(--color-charcoal)', borderRadius: 'var(--radius-md)', padding: '24px',
                    textAlign: 'center', color: 'var(--color-outline)', fontSize: 14,
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>💳</div>
                    <strong style={{ display: 'block', marginBottom: 4 }}>DEMO MODE — No Real Payment Processing</strong>
                    In a production environment, a licensed payment processor (e.g., Stripe) would be integrated here.
                    No card details are required or stored in this demonstration.
                  </div>

                  {/* Required checkboxes */}
                  <div className="divider" style={{ margin: '24px 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <label className="checkbox-label">
                      <input type="checkbox" checked={checks.terms} onChange={e => setChecks(p => ({ ...p, terms: e.target.checked }))} />
                      I have read and accept the <a href="/legal/terms" target="_blank" style={{ color: 'var(--color-gold)' }}>Terms of Service</a> and understand the cancellation policy. *
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" checked={checks.risk} onChange={e => setChecks(p => ({ ...p, risk: e.target.checked }))} />
                      I have read the <a href="/legal/risk-disclosure" target="_blank" style={{ color: 'var(--color-gold)' }}>Risk Disclosure</a> and understand that gold prices fluctuate, spreads apply, and past performance does not guarantee future results. This is not investment advice. *
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" checked={checks.age} onChange={e => setChecks(p => ({ ...p, age: e.target.checked }))} />
                      I confirm I am 18 years of age or older and legally authorized to make this purchase in the United States. *
                    </label>
                  </div>

                  <div className="disclosure-box" style={{ marginTop: 20 }}>
                    <strong>⚠ Price Change Notice</strong>
                    Gold prices may change between now and order confirmation. The final price is locked only when payment is confirmed. You will be shown the final price before committing.
                  </div>

                  <button
                    onClick={() => { if (checks.terms && checks.risk && checks.age) setStep(1); }}
                    disabled={!checks.terms || !checks.risk || !checks.age}
                    className="btn btn-primary" style={{ marginTop: 20, padding: '14px 40px' }}>
                    Review Order →
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="card">
                  <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20 }}>Review Your Order</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 20 }}>Please review all details carefully before placing your order.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                    {cartItems.map(item => {
                      const p = mockProducts.find(pr => pr.id === item.productId);
                      if (!p) return null;
                      return (
                        <div key={item.productId} className="flex-between" style={{ padding: '12px 0', borderBottom: '1px solid var(--color-outline-dim)', fontSize: 14 }}>
                          <span style={{ color: 'var(--color-text-dim)' }}>{p.name} × {item.quantity}</span>
                          <strong>${(p.price * item.quantity).toLocaleString()}</strong>
                        </div>
                      );
                    })}
                  </div>
                  <div className="disclosure-box" style={{ marginBottom: 20 }}>
                    <strong>⚠ Final Confirmation</strong>
                    Clicking "Place Order (Demo)" confirms your intent to purchase in this demonstration.
                    No real payment will be charged. No real gold will be shipped. This is a prototype only.
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={() => { clearCart(); setStep(2); }} className="btn btn-primary" style={{ padding: '14px 32px' }}>
                      Place Order (Demo)
                    </button>
                    <button onClick={() => setStep(0)} className="btn btn-ghost">← Back</button>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="card" style={{ position: 'sticky', top: 110 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.1rem' }}>Order Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16, fontSize: 13 }}>
                {[
                  ['Product Subtotal', `$${cartTotal.toLocaleString()}`],
                  ['Shipping (Insured)', `$${shipping}`],
                  ['Insurance', `$${insurance}`],
                  ['Est. Tax (~8% illustrative)', `$${tax.toFixed(2)}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex-between">
                    <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
                <div className="divider" />
                <div className="flex-between" style={{ fontWeight: 700, fontSize: 17 }}>
                  <span>Total (Est.)</span>
                  <span style={{ color: 'var(--color-gold)' }}>${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="info-box" style={{ fontSize: 11 }}>
                Estimated tax is illustrative only. Actual sales tax depends on your state, product type, and applicable exemptions.
                Final total confirmed before payment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
