
import React from 'react';
import Carousel from '../components/Carousel';
import { COLORS } from '../constants';
import { ArrowRight, BookOpen, UserPlus, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <Carousel />

      <section className="bg-[#F5F5F0] p-8 md:p-12 rounded-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 serif-font" style={{ color: COLORS.primary }}>
            ご挨拶
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            茨城大学理学部同窓会は、卒業生の皆様の交流を深め、母校の発展に寄与することを目的として活動しています。
            最新の会報やイベント情報、事務手続きのご案内など、同窓生のための情報を随時更新してまいります。
          </p>
          <Link 
            to="/guide/greeting" 
            className="inline-flex items-center text-primary font-bold hover:text-gold transition-colors"
            style={{ color: COLORS.primary }}
          >
            会長からのメッセージを読む
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <BookOpen size={200} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 pb-2" style={{ borderColor: COLORS.primary }}>
            <h3 className="text-xl font-bold flex items-center">
              <Info className="mr-2 w-5 h-5 text-primary" />
              お知らせ
            </h3>
            <Link to="/notices" className="text-xs text-gray-500 hover:text-primary">すべて見る</Link>
          </div>
          <div className="space-y-4">
            {[
              { date: '2025.12.26', title: 'ホームページをリニューアルしました', category: '事務局' },
              { date: '2025.12.10', title: '2025年度同窓会総会のご案内', category: '行事' },
              { date: '2025.11.20', title: '【重要】住所変更のお手続きについて', category: '重要' },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors border-b border-gray-100 last:border-0">
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-xs text-gray-400 font-mono">{item.date}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-primary text-primary">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-medium group-hover:text-primary transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 pb-2" style={{ borderColor: COLORS.accent }}>
            <h3 className="text-xl font-bold flex items-center">
              <UserPlus className="mr-2 w-5 h-5 text-accent" />
              新着記事
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: '会報第27号を発行しました', date: '2024.12.01', img: 'https://picsum.photos/seed/art1/200/120' },
              { title: '理水会（水戸支部）活動報告', date: '2024.10.15', img: 'https://picsum.photos/seed/art2/200/120' },
            ].map((art, idx) => (
              <div key={idx} className="flex space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <img src={art.img} alt="" className="w-24 h-16 object-cover rounded shadow-sm" />
                <div>
                  <h4 className="font-bold text-sm leading-snug mb-1">{art.title}</h4>
                  <p className="text-xs text-gray-400">{art.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-[#1B4D3E] text-white p-10 rounded-2xl">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">会員のみなさまへ</h3>
          <p className="mb-8 text-white/80 leading-relaxed">
            同窓会では、会員相互の連絡を密にするため、住所等の異動があった場合には速やかな通知をお願いしております。
            また、終身会費の納入についても併せてご協力をお願い申し上げます。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/guide/payment" className="bg-gold hover:bg-white hover:text-primary text-white px-6 py-3 rounded-full font-bold transition-all" style={{ backgroundColor: COLORS.accent }}>
              会費納入について
            </Link>
            <Link to="/members/change" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-bold transition-all border border-white/30">
              住所変更の連絡
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
