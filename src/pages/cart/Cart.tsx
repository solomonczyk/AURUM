import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { mockProducts } from '../../data/mockData';

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQty, cartTotal } = useApp();
  const navigate = useNavigate();

  const shipping = 25;
  const insurance = 15;
  const estimatedTax = cartTotal * 0.08; // 8% illustrative only

  if (cartItems.length === 0) return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🛒</div>
          <h2 style={{ marginBottom: 12 }}>Your Cart is Empty</h2>
          <p style={{ marginBottom: 24 }}>Browse our gold catalog to find the right product for you.</p>
          <button onClick={() => navigate('/buy')} className="btn btn-primary">Browse Products</button>
        </div>
      </section>
    </main>
  );

  return (
    <main>
      <section style={{ padding: '40px 0 24px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem' }}>Your Cart</h1>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }}>
            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cartItems.map(item => {
                const p = mockProducts.find(pr => pr.id === item.productId);
                if (!p) return null;
                return (
                  <div key={item.productId} className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 80, height: 80, minWidth: 80, background: `linear-gradient(135deg, ${p.imageColor}22, ${p.imageColor}44)`,
                      borderRadius: 6, border: '1px solid var(--color-outline-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 48, height: 28, background: p.imageColor, borderRadius: 3 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p className="label-caps" style={{ fontSize: 10, marginBottom: 4 }}>{p.purity} · {p.weightLabel}</p>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, marginBottom: 8 }}>{p.name}</h4>
                      <div style={{ fontSize: 13, color: 'var(--color-outline)' }}>{p.shippingNote}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-gold)' }}>${(p.price * item.quantity).toLocaleString()}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <button onClick={() => updateCartQty(item.productId, item.quantity - 1)} className="btn btn-ghost btn-sm" style={{ padding: '4px 10px' }}>−</button>
                        <span style={{ fontSize: 14, minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => updateCartQty(item.productId, item.quantity + 1)} className="btn btn-ghost btn-sm" style={{ padding: '4px 10px' }}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.productId)} style={{ fontSize: 12, color: 'var(--color-error)', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </div>
                );
              })}

              <div className="disclosure-box">
                <strong>⚠ Price Notice</strong>
                Prices shown are indicative based on simulated spot price data. Final price is confirmed at order placement and may differ. 
                Gold prices fluctuate continuously. Spread, shipping, insurance, and taxes are added at checkout.
              </div>
            </div>

            {/* Summary */}
            <div className="card" style={{ position: 'sticky', top: 110 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: 20, fontSize: '1.1rem' }}>Order Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20, fontSize: 14 }}>
                {[
                  ['Product Subtotal', `$${cartTotal.toLocaleString()}`],
                  ['Shipping (Insured)', `$${shipping.toFixed(2)}`],
                  ['Insurance', `$${insurance.toFixed(2)}`],
                  ['Est. Tax (illustrative ~8%)', `$${estimatedTax.toFixed(2)}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex-between">
                    <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
                <div className="divider" />
                <div className="flex-between" style={{ fontWeight: 700, fontSize: 18 }}>
                  <span>Total (Est.)</span>
                  <span style={{ color: 'var(--color-gold)' }}>${(cartTotal + shipping + insurance + estimatedTax).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="info-box" style={{ fontSize: 11, marginBottom: 16 }}>
                Tax is illustrative only. Actual tax depends on your state, product type, and applicable exemptions. Final total confirmed at checkout.
              </div>
              <button onClick={() => navigate('/checkout')} className="btn btn-primary w-full" style={{ justifyContent: 'center', padding: '14px' }}>
                Proceed to Checkout
              </button>
              <button onClick={() => navigate('/buy')} className="btn btn-ghost w-full" style={{ justifyContent: 'center', marginTop: 8 }}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
