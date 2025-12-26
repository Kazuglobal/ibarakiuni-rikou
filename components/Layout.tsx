
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COLORS, NAVIGATION_ITEMS, OFFICE_INFO } from '../constants';
import { Menu, X, ChevronDown, ChevronRight, Search, MapPin, Mail, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: COLORS.primary }}>
              <span className="text-lg md:text-xl font-bold">茨</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl xl:text-2xl font-bold tracking-tight whitespace-nowrap" style={{ color: COLORS.primary }}>
                茨城大学理学部同窓会
              </h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest hidden xl:block">
                Ibaraki University Faculty of Science Alumni Association
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 overflow-x-hidden">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button 
                    className="px-2 xl:px-4 py-2 text-sm font-medium hover:text-gold transition-colors flex items-center whitespace-nowrap"
                    style={{ color: location.pathname.startsWith(item.path) && item.path !== '/' ? COLORS.accent : 'inherit' }}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4 shrink-0" />
                  </button>
                ) : (
                  <Link 
                    to={item.path}
                    className="px-2 xl:px-4 py-2 text-sm font-medium hover:text-gold transition-colors whitespace-nowrap"
                    style={{ color: location.pathname === item.path ? COLORS.accent : 'inherit' }}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl border rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
                        style={{ borderLeft: location.pathname === child.path ? `3px solid ${COLORS.accent}` : '3px solid transparent' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20 overflow-y-auto">
          <div className="p-4 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button 
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between p-3 text-lg font-bold border-b"
                    >
                      {item.label}
                      <ChevronDown className={`transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubmenu === item.label && (
                      <div className="bg-gray-50 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-6 py-2 text-gray-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block p-3 text-lg font-bold border-b"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content & Sidebar */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {children}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Quick Links */}
            <section className="bg-gray-50 p-6 rounded-lg border-t-4" style={{ borderTopColor: COLORS.primary }}>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Menu className="mr-2 w-5 h-5" />
                MENU
              </h3>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-gray-600 hover:text-gold flex items-center transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Office Info */}
            <section className="bg-[#1B4D3E] text-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center border-b border-white/20 pb-2">
                <MapPin className="mr-2 w-5 h-5" />
                事務局情報
              </h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>{OFFICE_INFO.address}</p>
                <p>{OFFICE_INFO.location}</p>
                <div className="pt-2 space-y-2">
                  <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-white text-dark-green rounded-md font-bold text-xs hover:bg-gold hover:text-white transition-all" style={{ color: COLORS.primary }}>
                    <Mail className="mr-2 w-4 h-4" />
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </section>

            {/* External Links */}
            <section className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-4 border-b pb-2">関連リンク</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="https://www.ibaraki.ac.jp/" target="_blank" rel="noopener" className="text-gray-600 hover:text-primary underline">茨城大学</a></li>
                <li><a href="https://www.sci.ibaraki.ac.jp/" target="_blank" rel="noopener" className="text-gray-600 hover:text-primary underline">茨城大学理学部</a></li>
                <li><a href="https://www.kikin.ibaraki.ac.jp/" target="_blank" rel="noopener" className="text-gray-600 hover:text-primary underline">茨城大学基金</a></li>
              </ul>
            </section>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-lg font-bold" style={{ color: COLORS.primary }}>茨城大学理学部同窓会</h2>
              <p className="text-sm">〒310-0056 水戸市文京２－１－１<br />茨城大学理学部事務部内</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">コンテンツ</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li><Link to="/guide/greeting" className="hover:text-primary">会長挨拶</Link></li>
                <li><Link to="/guide/payment" className="hover:text-primary">会費納入</Link></li>
                <li><Link to="/newsletter/archive" className="hover:text-primary">会報</Link></li>
                <li><Link to="/guide/privacy" className="hover:text-primary">プライバシー</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <Link to="/contact" className="block text-sm text-primary font-medium hover:underline">
                お問い合わせフォームはこちら
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 茨城大学理学部同窓会 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
