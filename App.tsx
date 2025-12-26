
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Greeting from './pages/Guide/Greeting';
import Payment from './pages/Guide/Payment';
import Rules from './pages/Guide/Rules';
import Officers from './pages/Guide/Officers';
import Activities from './pages/Guide/Activities';
import Publications from './pages/Guide/Publications';
import Privacy from './pages/Guide/Privacy';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';
import ChangeAddress from './pages/Members/ChangeAddress';
import Kyosuikai from './pages/Branches/Kyosuikai';
import Risuikai from './pages/Branches/Risuikai';
import Schedule from './pages/Schedule/Index';
import ExchangeIndex from './pages/Exchange/Index';
import MemberBooks from './pages/Exchange/MemberBooks';
import ExchangeEvents from './pages/Exchange/Events';
import ExchangeNotices from './pages/Exchange/Notices';

// Placeholder components for very specific minor subpages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-20 text-center bg-gray-50 rounded-xl">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>このページは現在準備中です。今しばらくお待ちください。</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Guide Section */}
          <Route path="/guide/greeting" element={<Greeting />} />
          <Route path="/guide/payment" element={<Payment />} />
          <Route path="/guide/rules" element={<Rules />} />
          <Route path="/guide/officers" element={<Officers />} />
          <Route path="/guide/activities" element={<Activities />} />
          <Route path="/guide/publications" element={<Publications />} />
          <Route path="/guide/privacy" element={<Privacy />} />

          {/* Newsletter Section */}
          <Route path="/newsletter/archive" element={<Newsletter />} />
          <Route path="/newsletter/submission" element={<PlaceholderPage title="原稿募集について" />} />
          
          {/* Members Section */}
          <Route path="/members/change" element={<ChangeAddress />} />
          <Route path="/members/other" element={<PlaceholderPage title="訃報等ご連絡" />} />

          {/* Exchange Section */}
          <Route path="/exchange" element={<ExchangeIndex />} />
          <Route path="/exchange/events" element={<ExchangeEvents />} />
          <Route path="/exchange/notices" element={<ExchangeNotices />} />
          <Route path="/exchange/books" element={<MemberBooks />} />

          {/* Branches Section */}
          <Route path="/branches/kyosuikai" element={<Kyosuikai />} />
          <Route path="/branches/risuikai" element={<Risuikai />} />

          {/* Others */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<div className="py-20 text-center"><h2 className="text-4xl font-bold">404</h2><p>ページが見つかりません。</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
