
import { NavItem } from './types';

export const COLORS = {
  primary: '#1B4D3E', // Ibaraki University Dark Green
  secondary: '#2E7D5A',
  accent: '#D4A843', // Gold
  bgSection: '#F5F5F0',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'ホーム', path: '/' },
  { 
    label: 'ご案内', 
    path: '/guide',
    children: [
      { label: '会長挨拶', path: '/guide/greeting' },
      { label: '会則', path: '/guide/rules' },
      { label: '役員一覧', path: '/guide/officers' },
      { label: '活動・会務', path: '/guide/activities' },
      { label: '出版物', path: '/guide/publications' },
      { label: '会費納入', path: '/guide/payment' },
      { label: 'プライバシー', path: '/guide/privacy' },
    ]
  },
  { 
    label: '会報', 
    path: '/newsletter',
    children: [
      { label: 'バックナンバー', path: '/newsletter/archive' },
      { label: '原稿募集', path: '/newsletter/submission' },
    ]
  },
  { 
    label: '会員名簿', 
    path: '/members',
    children: [
      { label: '異動通知', path: '/members/change' },
      { label: 'その他連絡', path: '/members/other' },
    ]
  },
  { 
    label: '会員交流', 
    path: '/exchange',
    children: [
      { label: '交流について', path: '/exchange' },
      { label: '開催通知', path: '/exchange/events' },
      { label: '連絡事項', path: '/exchange/notices' },
      { label: '会員の出版物', path: '/exchange/books' },
    ]
  },
  { 
    label: '支部情報', 
    path: '/branches',
    children: [
      { label: '京水会(東京)', path: '/branches/kyosuikai' },
      { label: '理水会(水戸)', path: '/branches/risuikai' },
    ]
  },
  { label: '行事予定', path: '/schedule' },
  { label: 'お問い合わせ', path: '/contact' },
];

export const OFFICE_INFO = {
  address: "〒310-0056 水戸市文京２－１－１",
  location: "茨城大学理学部事務部内 理学部同窓会事務局",
  tel: "029-228-8xxx",
  email: "alumni-science@ml.ibaraki.ac.jp"
};
