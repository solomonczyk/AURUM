import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import ProductCard from '../../components/product/ProductCard';
import { mockProducts } from '../../data/mockData';

const CATEGORIES = ['All', 'Gold Bars', 'Gold Coins', 'Gold Jewelry'];
const WEIGHTS = ['Any Weight', 'Under 1 oz', '1 oz', '10 oz', '1 kg+'];
const PURITIES = ['Any Purity', '99.99% (24K)', '91.67% (22K)', '75% (18K)', 'Below 18K'];

export default function BuyGold() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [category, setCategory] = useState('All');
  const [added, setAdded] = useState(false);

  // Detail view
  if (productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return <div className="container section"><p>Product not found. <button onClick={() => navigate('/buy')} className="btn btn-ghost btn-sm">Back to catalog</button></p></div>;
    const spotCost = product.spotPricePerOz * product.weightOz;
    const premium = product.price - spotCost;

    return (
      <main>
        <section className="section-sm">
          <div className="container">
            <button onClick={() => navigate('/buy')} style={{ color: 'var(--color-outline)', fontSize: 13, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer' }}>
              ← Back to Catalog
            </button>
            <div className="grid-2" style={{ gap: 48, alignItems: 'start' }}>
              {/* Image */}
              <div style={{
                aspectRatio: '4/3', background: `linear-gradient(135deg, ${product.imageColor}15, ${product.imageColor}30)`,
                border: '1px solid var(--color-outline-dim)', borderRadius: 'var(--radius-lg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 160, height: 90, background: product.imageColor,
                  borderRadius: 6, boxShadow: `0 16px 48px ${product.imageColor}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 18
                }}>
                  {product.category === 'bar' ? '▬ GOLD BAR' : '⊙ GOLD COIN'}
                </div>
              </div>

              {/* Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <p className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: 8 }}>{product.purity} · {product.weightLabel}</p>
                  <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>{product.name}</h1>
                  <p style={{ fontSize: 14 }}>{product.description}</p>
                </div>

                <div className="card" style={{ padding: 20 }}>
                  <p className="label-caps" style={{ marginBottom: 12, fontSize: 10 }}>Indicative Pricing <span className="indicative-label">est.</span></p>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-sans)' }}>
                    ${product.price.toLocaleString()}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14, fontSize: 13 }}>
                    {[
                      ['Spot Price Reference', `$${product.spotPricePerOz.toLocaleString()} /oz × ${product.weightOz} oz`],
                      ['Spot Value', `$${Math.round(spotCost).toLocaleString()}`],
                      ['Premium / Spread', `$${Math.round(premium).toLocaleString()} (+${product.premiumPct}%)`],
                      ['Shipping & Insurance', '$25.00 – $40.00 (depending on location)'],
                      ['Estimated Sales Tax', 'Varies by state — see Tax Notice'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex-between">
                        <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                        <span style={{ color: 'var(--color-text-dim)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="disclosure-box">
                  <strong>⚠ Price Disclosure</strong>
                  Prices shown are indicative and based on simulated spot price data. 
                  Final price is confirmed at order placement and may differ. Spread and fees apply. 
                  This is not investment advice. Gold prices fluctuate.
                </div>

                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 12 }}>Specifications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="flex-between" style={{ fontSize: 14, padding: '8px 0', borderBottom: '1px solid var(--color-outline-dim)' }}>
                        <span style={{ color: 'var(--color-outline)' }}>{k}</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => { addToCart(product.id); setAdded(true); setTimeout(() => setAdded(false), 2000); }}
                    disabled={product.availability === 'out_of_stock'}
                    className="btn btn-primary"
                    style={{ flex: 1 }}>
                    {added ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                  <button onClick={() => navigate('/cart')} className="btn btn-secondary">View Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Catalog
  const filtered = mockProducts.filter(p => {
    if (category === 'All') return true;
    if (category === 'Gold Bars') return p.category === 'bar';
    if (category === 'Gold Coins') return p.category === 'coin';
    if (category === 'Gold Jewelry') return p.category === 'jewelry';
    return true;
  });

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '56px 0 40px', background: 'var(--color-surface-lo)', borderBottom: '1px solid var(--color-outline-dim)' }}>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 12 }}>Buy Gold</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Gold Bullion Catalog</h1>
          <p style={{ maxWidth: 560 }}>Browse our selection of gold bars and coins. All prices are indicative only. Final price confirmed at order placement.</p>
          <div className="disclosure-box" style={{ marginTop: 20, maxWidth: 640 }}>
            <strong>⚠ Indicative Prices Only</strong>
            All prices shown are based on simulated spot price data and include a premium/spread. Prices may change before order confirmation. 
            This is not investment advice. Spreads, shipping, insurance, and taxes apply — see our{' '}
            <a href="/legal/fees" style={{ color: 'var(--color-warning)', textDecoration: 'underline' }}>Pricing & Fees Disclosure</a>.
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40, alignItems: 'start' }}>
            {/* Sidebar filters */}
            <div className="hide-mobile">
              <div className="card" style={{ position: 'sticky', top: 120 }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16, fontSize: 16 }}>Filter Products</h4>

                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label className="form-label">Product Type</label>
                  {CATEGORIES.map(c => (
                    <label key={c} className="checkbox-label" style={{ marginTop: 10 }}>
                      <input type="radio" name="category" checked={category === c} onChange={() => setCategory(c)} style={{ accentColor: 'var(--color-gold)' }} />
                      {c}
                    </label>
                  ))}
                </div>

                <div className="divider" style={{ margin: '16px 0' }} />

                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label className="form-label">Weight</label>
                  <select className="form-select" style={{ marginTop: 8 }}>
                    {WEIGHTS.map(w => <option key={w}>{w}</option>)}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label className="form-label">Purity</label>
                  <select className="form-select" style={{ marginTop: 8 }}>
                    {PURITIES.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Price Range</label>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <input className="form-input" placeholder="Min" type="number" />
                    <input className="form-input" placeholder="Max" type="number" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile category tabs */}
            <div>
              <div className="hide-desktop" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCategory(c)} className={`btn btn-sm ${category === c ? 'btn-primary' : 'btn-ghost'}`}>{c}</button>
                ))}
              </div>

              <div className="flex-between" style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>{filtered.length} products</p>
                <select className="form-select" style={{ width: 'auto', fontSize: 13 }}>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Weight: Light to Heavy</option>
                </select>
              </div>

              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-outline)' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>📦</div>
                  <p>No products match your filters.</p>
                  <button onClick={() => setCategory('All')} className="btn btn-ghost btn-sm" style={{ marginTop: 16 }}>Clear Filters</button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
                  {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
