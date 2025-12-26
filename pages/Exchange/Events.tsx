
import React from 'react';
import { COLORS } from '../../constants';
import { Megaphone, Calendar, User } from 'lucide-react';

const ExchangeEvents: React.FC = () => {
  const eventAnnouncements = [
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 第７回懇親会・総会開催のご案内',
      date: '2017年9月12日',
      sender: '「理水会」事務局',
      content: '秋冷の候、会員の皆様におかれましては、益々ご清祥のこととお慶び申し上げます。さて、本年度の「理水会」総会及び懇親会を下記の通り開催いたします。万障お繰り合わせの上、ご出席くださいますようご案内申し上げます。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 第６回懇親会開催のご案内',
      date: '2016年9月12日',
      sender: '「理水会」事務局',
      content: '初秋の候、皆様におかれましては益々ご健勝のこととお慶び申し上げます。恒例となりました親睦会を本年も開催する運びとなりました。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 第５回総会・懇親会開催のご案内',
      date: '2015年9月14日',
      sender: '「理水会」事務局',
      content: '今年度は役員改選の時期にあたります。総会にて次期役員の承認をいただいた後、和やかに懇談の場を持ちたいと考えております。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 第３回総会・懇親会開催のご案内',
      date: '2013年7月22日',
      sender: '「理水会」事務局',
      content: '設立から3年目を迎え、組織の充実を図るべく総会を開催いたします。水戸近郊在住の皆様の積極的なご参加をお待ちしております。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 第２回懇親会開催のご案内',
      date: '2012年7月19日',
      sender: '「理水会」事務局',
      content: '昨年の設立総会に続き、第2回目となる交流の場を設けました。恩師の先生方もお招きしております。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」 設立総会及び懇親会のご案内',
      date: '2011年5月6日',
      sender: '「理水会」設立世話人会',
      content: '震災の影響で延期しておりました設立総会を、6月12日に開催することと致しました。水戸支部の新たな門出に是非お立ち会いください。'
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          開催通知（アーカイブ）
        </h2>
        <p className="mb-10 text-gray-600">
          水戸支部「理水会」を中心とした、過去の行事・会合の開催案内を掲載しています。
        </p>

        <div className="space-y-6">
          {eventAnnouncements.map((item, idx) => (
            <div key={idx} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </span>
                <span className="text-xs text-primary font-bold flex items-center" style={{ color: COLORS.primary }}>
                  <User size={14} className="mr-1" />
                  {item.sender}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 flex items-start">
                  <Megaphone className="mr-2 text-accent flex-shrink-0 mt-1" size={18} style={{ color: COLORS.accent }} />
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExchangeEvents;
