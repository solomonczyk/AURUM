import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useApp();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const spread = ((product.price - product.spotPricePerOz * product.weightOz) / (product.spotPricePerOz * product.weightOz) * 100).toFixed(1);

  const availabilityBadge = {
    in_stock: { label: 'In Stock', cls: 'badge-success' },
    low_stock: { label: 'Low Stock', cls: 'badge-warning' },
    out_of_stock: { label: 'Out of Stock', cls: 'badge-error' },
  }[product.availability];

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0, overflow: 'hidden' }}>
      {/* Image placeholder */}
      <div
        onClick={() => navigate(`/buy/${product.id}`)}
        style={{
          height: 200, background: `linear-gradient(135deg, ${product.imageColor}22, ${product.imageColor}44)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderBottom: '1px solid var(--color-outline-dim)', cursor: 'pointer',
          position: 'relative',
        }}>
        <div style={{
          width: 100, height: 60, background: product.imageColor,
          borderRadius: 4, boxShadow: `0 8px 32px ${product.imageColor}66`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1A1000', fontSize: 12,
        }}>
          {product.category === 'bar' ? '▬ BAR' : product.category === 'coin' ? '⊙ COIN' : '◈ SCRAP'}
        </div>
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <span className={`badge ${availabilityBadge.cls}`}>{availabilityBadge.label}</span>
        </div>
      </div>

      <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div>
          <p className="label-caps" style={{ fontSize: 10, marginBottom: 4 }}>{product.purity} · {product.weightLabel}</p>
          <h4 style={{ fontSize: 16, fontFamily: 'var(--font-serif)', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => navigate(`/buy/${product.id}`)}>
            {product.name}
          </h4>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="flex-between">
            <span style={{ fontSize: 12, color: 'var(--color-outline)' }}>
              Indicative Price <span className="indicative-label">est.</span>
            </span>
            <strong style={{ fontSize: 18, color: 'var(--color-gold)', fontFamily: 'var(--font-sans)' }}>
              ${product.price.toLocaleString()}
            </strong>
          </div>
          <div className="flex-between">
            <span style={{ fontSize: 11, color: 'var(--color-outline)' }}>Premium over spot</span>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>+{spread}% ({product.premiumPct}%)</span>
          </div>
        </div>

        <div style={{ fontSize: 11, color: 'var(--color-outline)', display: 'flex', alignItems: 'center', gap: 4 }}>
          🚚 {product.shippingNote}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 8 }}>
          <button
            onClick={handleAdd}
            disabled={product.availability === 'out_of_stock'}
            className="btn btn-primary btn-sm"
            style={{ flex: 1 }}>
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
          <button onClick={() => navigate(`/buy/${product.id}`)} className="btn btn-ghost btn-sm">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
