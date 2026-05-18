// ─── MOCK DATA ──────────────────────────────────────────────────────────────
// All data is SIMULATED / MOCK. No real prices, transactions, or users.

export const mockUser = {
  id: 'usr_001',
  firstName: 'Alexandra',
  lastName: 'Sterling',
  email: 'alex.sterling@example.com',
  phone: '+1 (555) 012-3456',
  address: { street: '123 Bullion Ave', city: 'New York', state: 'NY', zip: '10001' },
  joinedDate: '2023-09-15',
  accountBalance: 12450.00,
  pendingSettlement: 2100.00,
  goldHoldingsOz: 2.5,
  kycStatus: 'verified',
  twoFactorEnabled: false,
};

export interface Product {
  id: string;
  name: string;
  category: 'bar' | 'coin' | 'jewelry';
  purity: string;
  weightOz: number;
  weightLabel: string;
  spotPricePerOz: number;
  premiumPct: number;
  price: number;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  shippingNote: string;
  description: string;
  specs: Record<string, string>;
  imageColor: string;
}

// INDICATIVE PRICES ONLY - mock data, not real market prices
const SPOT = 2042.50; // Simulated spot price

export const mockProducts: Product[] = [
  { id: 'p001', name: '1 oz Gold Bar', category: 'bar', purity: '99.99% Fine Gold', weightOz: 1, weightLabel: '1 Troy Oz', spotPricePerOz: SPOT, premiumPct: 3.5, price: Math.round(SPOT * 1.035), availability: 'in_stock', shippingNote: 'Insured delivery, signature required', description: 'A precision-minted 1 troy ounce gold bar of 99.99% purity. Comes in assay card with serial number.', specs: { Purity: '99.99% (24K)', Weight: '1 Troy Oz (31.1g)', Dimensions: '50mm × 28mm × 3mm', Mint: 'Assayed & Certified', 'Serial Number': 'Yes' }, imageColor: '#B8962E' },
  { id: 'p002', name: '10 oz Gold Bar', category: 'bar', purity: '99.99% Fine Gold', weightOz: 10, weightLabel: '10 Troy Oz', spotPricePerOz: SPOT, premiumPct: 2.2, price: Math.round(SPOT * 10 * 1.022), availability: 'in_stock', shippingNote: 'Insured delivery, signature required', description: 'A 10 troy ounce gold bar of 99.99% purity. Ideal for bulk investment. Fully assayed.', specs: { Purity: '99.99% (24K)', Weight: '10 Troy Oz (311g)', Mint: 'Assayed & Certified', 'Serial Number': 'Yes' }, imageColor: '#C9A227' },
  { id: 'p003', name: '1 kg Gold Bar', category: 'bar', purity: '99.99% Fine Gold', weightOz: 32.15, weightLabel: '1 Kilogram', spotPricePerOz: SPOT, premiumPct: 1.8, price: Math.round(SPOT * 32.15 * 1.018), availability: 'low_stock', shippingNote: 'Insured vault delivery, wire transfer required', description: 'One kilogram of 99.99% fine gold. The institutional standard. Delivered via insured vault-to-vault transfer.', specs: { Purity: '99.99% (24K)', Weight: '1 kg (32.15 Troy Oz)', Mint: 'LBMA-approved refiner', 'Serial Number': 'Yes' }, imageColor: '#D4AF37' },
  { id: 'p004', name: 'American Gold Eagle 1 oz', category: 'coin', purity: '91.67% Gold (22K)', weightOz: 1.0909, weightLabel: '1 Troy Oz (Gold)', spotPricePerOz: SPOT, premiumPct: 5.5, price: Math.round(SPOT * 1.0909 * 1.055), availability: 'in_stock', shippingNote: 'Insured delivery, signature required', description: 'The official US gold bullion coin. Contains 1 troy oz of gold in 22K alloy. Legal tender. Highly liquid.', specs: { Purity: '91.67% Gold (22K)', 'Gold Content': '1 Troy Oz', 'Total Weight': '33.93g', Issuer: 'U.S. Mint', 'Face Value': '$50 USD' }, imageColor: '#E8C84A' },
  { id: 'p005', name: 'Canadian Maple Leaf 1 oz', category: 'coin', purity: '99.99% Fine Gold', weightOz: 1, weightLabel: '1 Troy Oz', spotPricePerOz: SPOT, premiumPct: 5.0, price: Math.round(SPOT * 1.05), availability: 'in_stock', shippingNote: 'Insured delivery, signature required', description: 'One of the world\'s purest gold coins at 99.99% fine gold. Issued by the Royal Canadian Mint.', specs: { Purity: '99.99% Fine Gold (24K)', Weight: '1 Troy Oz (31.1g)', Issuer: 'Royal Canadian Mint', 'Face Value': 'C$50' }, imageColor: '#F0C030' },
  { id: 'p006', name: 'South African Krugerrand 1 oz', category: 'coin', purity: '91.67% Gold (22K)', weightOz: 1.0909, weightLabel: '1 Troy Oz (Gold)', spotPricePerOz: SPOT, premiumPct: 4.8, price: Math.round(SPOT * 1.0909 * 1.048), availability: 'in_stock', shippingNote: 'Insured delivery, signature required', description: 'The world\'s first bullion coin. Contains 1 troy oz of gold in a durable 22K copper alloy.', specs: { Purity: '91.67% Gold (22K)', 'Gold Content': '1 Troy Oz', 'Total Weight': '33.93g', Issuer: 'South African Mint' }, imageColor: '#D4A017' },
];

export interface Order {
  id: string;
  type: 'buy' | 'sell';
  productName: string;
  weightLabel: string;
  quantity: number;
  amount: number;
  status: 'draft' | 'awaiting_payment' | 'payment_received' | 'awaiting_shipment' | 'in_inspection' | 'offer_issued' | 'customer_accepted' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
}

export const mockOrders: Order[] = [
  { id: 'ORD-2024-001', type: 'buy', productName: '1 oz Gold Bar', weightLabel: '1 Troy Oz', quantity: 2, amount: 4226.00, status: 'delivered', createdAt: '2024-01-15', updatedAt: '2024-01-22', trackingNumber: '1Z999AA10123456784' },
  { id: 'ORD-2024-002', type: 'buy', productName: 'American Gold Eagle 1 oz', weightLabel: '1 Troy Oz', quantity: 1, amount: 2184.00, status: 'shipped', createdAt: '2024-02-03', updatedAt: '2024-02-05', trackingNumber: '1Z999AA10123456785' },
  { id: 'ORD-2024-003', type: 'sell', productName: 'Gold Scrap 22K', weightLabel: '15.5g', quantity: 1, amount: 0, status: 'in_inspection', createdAt: '2024-02-10', updatedAt: '2024-02-12' },
  { id: 'ORD-2024-004', type: 'buy', productName: '10 oz Gold Bar', weightLabel: '10 Troy Oz', quantity: 1, amount: 20867.00, status: 'awaiting_payment', createdAt: '2024-02-18', updatedAt: '2024-02-18' },
];

export interface Quote {
  id: string;
  itemType: string;
  weight: string;
  purity: string;
  estimatedValue: number | null;
  status: 'submitted' | 'under_review' | 'offer_ready' | 'accepted' | 'declined' | 'expired';
  submittedAt: string;
  notes: string;
}

export const mockQuotes: Quote[] = [
  { id: 'QTE-2024-001', itemType: 'Gold Jewelry', weight: '24.3g', purity: '18K (75%)', estimatedValue: 1440, status: 'offer_ready', submittedAt: '2024-02-08', notes: 'Estimated based on current spot. Final offer subject to physical inspection.' },
  { id: 'QTE-2024-002', itemType: 'Gold Coin', weight: '31.1g (1 oz)', purity: '99.99% Fine', estimatedValue: null, status: 'under_review', submittedAt: '2024-02-14', notes: 'Photos received. Physical inspection pending.' },
];

export interface Transaction {
  id: string;
  date: string;
  description: string;
  type: 'deposit' | 'purchase' | 'sale' | 'fee' | 'refund' | 'withdrawal';
  amount: number;
  balance: number;
}

export const mockTransactions: Transaction[] = [
  { id: 'TXN-001', date: '2024-02-18', description: 'Account deposit (wire transfer)', type: 'deposit', amount: 25000, balance: 25000 },
  { id: 'TXN-002', date: '2024-01-15', description: 'Purchase: 2× 1 oz Gold Bar', type: 'purchase', amount: -4226, balance: 20774 },
  { id: 'TXN-003', date: '2024-01-15', description: 'Shipping & Insurance fee', type: 'fee', amount: -40, balance: 20734 },
  { id: 'TXN-004', date: '2024-02-03', description: 'Purchase: American Gold Eagle 1 oz', type: 'purchase', amount: -2184, balance: 18550 },
  { id: 'TXN-005', date: '2024-02-03', description: 'Shipping & Insurance fee', type: 'fee', amount: -40, balance: 18510 },
  { id: 'TXN-006', date: '2024-02-10', description: 'Sell quote proceeds (pending)', type: 'sale', amount: 2100, balance: 20610 },
  { id: 'TXN-007', date: '2024-02-18', description: 'Assay/testing fee', type: 'fee', amount: -25, balance: 20585 },
  { id: 'TXN-008', date: '2024-02-18', description: 'Processing fee', type: 'fee', amount: -15, balance: 20570 },
  { id: 'TXN-009', date: '2024-02-19', description: 'Partial refund – cancelled item', type: 'refund', amount: 145, balance: 20715 },
  { id: 'TXN-010', date: '2024-02-20', description: 'Account credit adjustment', type: 'deposit', amount: 1735, balance: 22450 },
];

// Indicative market data — SIMULATED, not real market data
export const mockSpotPrice = {
  goldPerOz: 2042.50,
  silverPerOz: 23.18,
  change24h: 8.75,
  changePct24h: 0.43,
  lastUpdated: new Date().toISOString(),
  note: 'Indicative only. Not real-time market data. Actual prices may differ.',
};

export const STATUS_LABELS: Record<string, string> = {
  draft: 'Draft',
  awaiting_payment: 'Awaiting Payment',
  payment_received: 'Payment Received',
  awaiting_shipment: 'Awaiting Shipment',
  in_inspection: 'In Inspection',
  offer_issued: 'Offer Issued',
  customer_accepted: 'Accepted',
  paid: 'Paid',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
  submitted: 'Submitted',
  under_review: 'Under Review',
  offer_ready: 'Offer Ready',
  declined: 'Declined',
  expired: 'Expired',
};

export const STATUS_BADGE_TYPES: Record<string, string> = {
  draft: 'neutral',
  awaiting_payment: 'warning',
  payment_received: 'gold',
  awaiting_shipment: 'gold',
  in_inspection: 'warning',
  offer_issued: 'gold',
  customer_accepted: 'success',
  paid: 'success',
  shipped: 'gold',
  delivered: 'success',
  cancelled: 'error',
  submitted: 'neutral',
  under_review: 'warning',
  offer_ready: 'gold',
  declined: 'error',
  expired: 'neutral',
};
