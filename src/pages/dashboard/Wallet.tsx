import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import DashboardLayout from '../../components/layout/DashboardLayout';

const TABS = ['All', 'Deposits', 'Purchases', 'Sales', 'Fees', 'Refunds'];

export default function Wallet() {
  const { user, transactions } = useApp();
  const [tab, setTab] = useState('All');

  const filtered = tab === 'All' ? transactions : transactions.filter(t => {
    if (tab === 'Deposits') return t.type === 'deposit';
    if (tab === 'Purchases') return t.type === 'purchase';
    if (tab === 'Sales') return t.type === 'sale';
    if (tab === 'Fees') return t.type === 'fee';
    if (tab === 'Refunds') return t.type === 'refund' || t.type === 'withdrawal';
    return true;
  });

  const typeColor: Record<string, string> = {
    deposit: 'var(--color-success)',
    sale: 'var(--color-success)',
    refund: 'var(--color-success)',
    purchase: 'var(--color-error)',
    fee: 'var(--color-error)',
    withdrawal: 'var(--color-warning)',
  };

  return (
    <DashboardLayout>
      {/* Prototype Warning */}
      <div className="disclosure-box" style={{ marginBottom: 28 }}>
        <strong>⚠ PROTOTYPE ACCOUNT LEDGER — NOT REAL FINANCIAL DATA</strong>
        This wallet screen is a prototype account ledger for demonstration purposes only. No real funds are held, 
        transmitted, stored, or managed by this platform. No real gold custody exists. Any production implementation 
        of wallet, stored-value, custody, withdrawal, or payment functionality requires licensed payment processors, 
        money transmission licenses (where applicable), AML/KYC compliance, tax and accounting review, and legal 
        approval before launch. Do not enter real financial information.
      </div>

      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: 4 }}>Wallet & Account Ledger</h2>
        <p style={{ fontSize: 14, color: 'var(--color-outline)' }}>Simulated transaction history and account balance overview.</p>
      </div>

      {/* Summary cards */}
      <div className="grid-3" style={{ marginBottom: 32, gap: 16 }}>
        <div className="card" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
          <p className="label-caps" style={{ fontSize: 10, marginBottom: 8, color: 'var(--color-gold)' }}>Available Credit</p>
          <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-sans)' }}>
            ${user?.accountBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-outline)', marginTop: 6 }}>⚠ Simulated balance — not real money</div>
        </div>
        <div className="card">
          <p className="label-caps" style={{ fontSize: 10, marginBottom: 8 }}>Pending Settlement</p>
          <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--color-warning)', fontFamily: 'var(--font-sans)' }}>
            ${user?.pendingSettlement.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-outline)', marginTop: 6 }}>Awaiting confirmation / inspection</div>
        </div>
        <div className="card">
          <p className="label-caps" style={{ fontSize: 10, marginBottom: 8 }}>Gold Holdings Summary</p>
          <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-sans)' }}>
            {user?.goldHoldingsOz} <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>troy oz</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-outline)', marginTop: 6 }}>⚠ Placeholder — no real custody</div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex-between" style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Transaction History</h3>
          <button className="btn btn-ghost btn-sm" disabled>Export CSV (Demo)</button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16, flexWrap: 'wrap' }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`btn btn-sm ${tab === t ? 'btn-primary' : 'btn-ghost'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-outline-dim)' }}>
                {['Date', 'Description', 'Type', 'Amount', 'Balance'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-outline)', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--color-outline)' }}>No transactions in this category.</td></tr>
              ) : filtered.map(t => (
                <tr key={t.id} style={{ borderBottom: '1px solid var(--color-outline-dim)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--color-outline)', whiteSpace: 'nowrap' }}>{t.date}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--color-text-dim)' }}>{t.description}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span className="badge badge-neutral" style={{ textTransform: 'capitalize', fontSize: 10 }}>{t.type}</span>
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: typeColor[t.type], whiteSpace: 'nowrap' }}>
                    {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </td>
                  <td style={{ padding: '12px 16px', color: 'var(--color-text-dim)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
                    {t.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="info-box" style={{ marginTop: 24, fontSize: 12 }}>
        All transactions above are simulated mock data for prototype demonstration. No real financial transactions have occurred.
        Withdrawal functionality is not implemented. Payment processing is not implemented.
        See <a href="/legal/terms" style={{ color: 'var(--color-gold)' }}>Terms of Service</a> and <a href="/legal/disclaimer" style={{ color: 'var(--color-gold)' }}>Disclaimer</a>.
      </div>
    </DashboardLayout>
  );
}
