import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { mockUser, mockProducts, mockOrders, mockQuotes, mockTransactions } from '../data/mockData';

export type KycStatus = 'not_started' | 'pending' | 'verified' | 'action_required';

interface CartItem {
  productId: string;
  quantity: number;
}

interface AppContextType {
  isLoggedIn: boolean;
  user: typeof mockUser | null;
  kycStatus: KycStatus;
  cartItems: CartItem[];
  cookieConsent: boolean | null;
  products: typeof mockProducts;
  orders: typeof mockOrders;
  quotes: typeof mockQuotes;
  transactions: typeof mockTransactions;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCartItems: (items: CartItem[]) => void;
  setCookieConsent: (val: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<typeof mockUser | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cookieConsent, setCookieConsentState] = useState<boolean | null>(null);
  const kycStatus: KycStatus = 'verified';

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored !== null) setCookieConsentState(JSON.parse(stored));
    const cart = localStorage.getItem('cart');
    if (cart) setCartItems(JSON.parse(cart));
  }, []);

  const setCookieConsent = (val: boolean) => {
    setCookieConsentState(val);
    localStorage.setItem('cookieConsent', JSON.stringify(val));
  };

  const login = (email: string, _password: string): boolean => {
    if (email && _password) {
      setIsLoggedIn(true);
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => { setIsLoggedIn(false); setUser(null); };

  const addToCart = (productId: string, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.productId === productId);
      const updated = existing
        ? prev.map(i => i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i)
        : [...prev, { productId, quantity }];
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => { const updated = prev.filter(i => i.productId !== productId); localStorage.setItem('cart', JSON.stringify(updated)); return updated; });
  };

  const updateCartQty = (productId: string, quantity: number) => {
    if (quantity < 1) { removeFromCart(productId); return; }
    setCartItems(prev => { const updated = prev.map(i => i.productId === productId ? { ...i, quantity } : i); localStorage.setItem('cart', JSON.stringify(updated)); return updated; });
  };

  const clearCart = () => { setCartItems([]); localStorage.removeItem('cart'); };

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cartItems.reduce((s, i) => {
    const p = mockProducts.find(p => p.id === i.productId);
    return s + (p ? p.price * i.quantity : 0);
  }, 0);

  return (
    <AppContext.Provider value={{
      isLoggedIn, user, kycStatus, cartItems, cookieConsent,
      products: mockProducts, orders: mockOrders, quotes: mockQuotes, transactions: mockTransactions,
      login, logout, addToCart, removeFromCart, updateCartQty, clearCart, setCartItems,
      setCookieConsent, cartCount, cartTotal,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
