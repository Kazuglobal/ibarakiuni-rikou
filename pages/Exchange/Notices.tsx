
import React from 'react';
import { COLORS } from '../../constants';
import { Info, CheckCircle, Clock, MapPin } from 'lucide-react';

const ExchangeNotices: React.FC = () => {
  const notices = [
    {
      title: '第８回茨城大学理学部同窓会水戸支部（理水会）懇親会を実施しました',
      date: '2018年10月20日',
      sender: '「理水会」事務局',
      content: '2018年10月20日にみまつホテルにおいて平成３０年度・第８回理学部同窓会水戸支部（理水会）総会・懇親会を実施いたしました。理水会会長挨拶、同窓会会長挨拶、記念撮影、乾杯の後、懇談に移り盛会のうちに終了することが出来ました。今後ますます理水会が発展することを祈念いたします。'
    },
    {
      title: '第５回茨城大学理学部同窓会水戸支部（理水会）懇親会を実施しました',
      date: '2015年10月17日',
      sender: '「理水会」事務局',
      content: '2015年10月17日にみまつアネックスにおいて平成２７年度・第５回理学部同窓会水戸支部（理水会）総会・懇親会を実施いたしました。第３期理水会役員の承認も行われ、盛会のうちに終了いたしました。'
    },
    {
      title: '第４回茨城大学理学部同窓会水戸支部（理水会）懇親会を実施しました',
      date: '2014年10月11日',
      sender: '「理水会」事務局',
      content: '2014年10月11日にみまつホテルにおいて実施いたしました。恩師の先生方を交え、旧交を温める貴重な時間となりました。'
    },
    {
      title: '第３回茨城大学理学部同窓会水戸支部（理水会）総会・懇親会を実施しました',
      date: '2013年9月7日',
      sender: '「理水会」事務局',
      content: '第２期役員案が全会一致で承認されました。また、次年度より開催日程を「10月第３土曜日」とすることが決定いたしました。'
    },
    {
      title: '講演会開催のお知らせ',
      date: '2012年1月29日',
      sender: 'ホームページ管理者',
      content: '放送大学ライブラリー講演会として、大橋 弘三郎氏（昭和４１年度卒業）による講演会が開催されます。テーマは「私達の日常生活を支えるレアメタル」です。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」設立総会を実施しました',
      date: '2011年6月12日',
      sender: '「理水会」設立世話人会',
      content: '2011年6月12日に三の丸ホテルにおいて「理水会」設立総会を開催いたしました。震災を乗り越え、ようやく水戸支部が発足いたしました。'
    },
    {
      title: '茨城大学理学部同窓会水戸支部「理水会」設立について（趣旨）',
      date: '2011年1月27日',
      sender: '「理水会」設立世話人会',
      content: '代表：久保田益充、副代表：大橋弘三郎ほか、18名の世話人により、地元水戸での同窓会活動の活性化を目指して設立を呼びかけました。'
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          連絡事項・活動報告
        </h2>
        
        <div className="space-y-8">
          {notices.map((notice, idx) => (
            <div key={idx} className="relative pl-8 border-l-2" style={{ borderColor: COLORS.accent }}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2" style={{ borderColor: COLORS.accent }}></div>
              <div className="mb-1 flex items-center space-x-3">
                <span className="text-sm font-bold text-primary" style={{ color: COLORS.primary }}>{notice.date}</span>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{notice.sender}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{notice.title}</h3>
              <div className="bg-gray-50 p-6 rounded-2xl text-gray-700 leading-relaxed text-sm">
                {notice.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border-2 border-dashed rounded-xl text-center">
          <p className="text-gray-500 mb-4 text-sm">※過去の記録（2011年〜2018年）を整理して掲載しております。</p>
          <p className="text-sm font-bold text-primary" style={{ color: COLORS.primary }}>
            現在の活動状況については「行事予定」ページも併せてご確認ください。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExchangeNotices;
