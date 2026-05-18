import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import type { ReactNode } from 'react';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieConsentBanner from './components/shared/CookieConsentBanner';

// Public pages
import Home from './pages/public/Home';
import BuyGold from './pages/public/BuyGold';
import SellGold from './pages/public/SellGold';
import Pricing from './pages/public/Pricing';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import FAQ from './pages/public/FAQ';

// Auth
import Auth from './pages/auth/Auth';

// Cart / Checkout
import Cart from './pages/cart/Cart';
import Checkout from './pages/cart/Checkout';

// Dashboard
import DashboardOverview from './pages/dashboard/Overview';
import Wallet from './pages/dashboard/Wallet';
import Orders from './pages/dashboard/Orders';
import Quotes from './pages/dashboard/Quotes';
import Documents from './pages/dashboard/Documents';
import Settings from './pages/dashboard/Settings';

// Legal
import LegalIndex from './pages/legal/LegalIndex';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RiskDisclosure from './pages/legal/RiskDisclosure';
import {
  FeesDisclosure, AmlKyc, CookiePolicy,
  ShippingPolicy, TaxNotice, AccessibilityStatement, Disclaimer,
} from './pages/legal/LegalPages';

// ── Protected route ──────────────────────────────────────────────────────────
function RequireAuth({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useApp();
  const location = useLocation();
  if (!isLoggedIn) return <Navigate to="/auth" state={{ from: location }} replace />;
  return <>{children}</>;
}

// ── Layout wrapper (header + footer) ─────────────────────────────────────────
function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 108px)' }}>{children}</div>
      <Footer />
      <CookieConsentBanner />
    </>
  );
}

// ── 404 ──────────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <Layout>
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>◈</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16 }}>Page Not Found</h1>
        <p style={{ marginBottom: 24 }}>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn btn-primary">Return Home</a>
      </section>
    </Layout>
  );
}

// ── Router ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/buy" element={<Layout><BuyGold /></Layout>} />
          <Route path="/buy/:productId" element={<Layout><BuyGold /></Layout>} />
          <Route path="/sell" element={<Layout><SellGold /></Layout>} />
          <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />

          {/* Auth */}
          <Route path="/auth" element={<Layout><Auth /></Layout>} />

          {/* Cart */}
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />

          {/* Dashboard — protected */}
          <Route path="/dashboard" element={<RequireAuth><Layout><DashboardOverview /></Layout></RequireAuth>} />
          <Route path="/dashboard/wallet" element={<RequireAuth><Layout><Wallet /></Layout></RequireAuth>} />
          <Route path="/dashboard/orders" element={<RequireAuth><Layout><Orders /></Layout></RequireAuth>} />
          <Route path="/dashboard/quotes" element={<RequireAuth><Layout><Quotes /></Layout></RequireAuth>} />
          <Route path="/dashboard/documents" element={<RequireAuth><Layout><Documents /></Layout></RequireAuth>} />
          <Route path="/dashboard/settings" element={<RequireAuth><Layout><Settings /></Layout></RequireAuth>} />

          {/* Legal */}
          <Route path="/legal" element={<Layout><LegalIndex /></Layout>} />
          <Route path="/legal/terms" element={<Layout><TermsOfService /></Layout>} />
          <Route path="/legal/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/legal/risk-disclosure" element={<Layout><RiskDisclosure /></Layout>} />
          <Route path="/legal/fees" element={<Layout><FeesDisclosure /></Layout>} />
          <Route path="/legal/aml-kyc" element={<Layout><AmlKyc /></Layout>} />
          <Route path="/legal/cookies" element={<Layout><CookiePolicy /></Layout>} />
          <Route path="/legal/shipping" element={<Layout><ShippingPolicy /></Layout>} />
          <Route path="/legal/tax" element={<Layout><TaxNotice /></Layout>} />
          <Route path="/legal/accessibility" element={<Layout><AccessibilityStatement /></Layout>} />
          <Route path="/legal/disclaimer" element={<Layout><Disclaimer /></Layout>} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
