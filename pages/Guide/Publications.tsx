
import React from 'react';
import { COLORS } from '../../constants';
import { BookOpen, Users, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Publications: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          同窓会の出版物
        </h2>

        <div className="space-y-10">
          {/* Newsletter Section */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#1B4D3E] text-white p-6 flex items-center">
              <FileText className="mr-3" size={24} />
              <h3 className="text-xl font-bold">（１）理学部同窓会会報</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                年1回発行され、会費納入者の皆様へ郵送にてお届けしております。
                母校の今を伝えるとともに、会員相互の絆を深めるための大切な情報源です。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-primary mb-2 flex items-center" style={{ color: COLORS.primary }}>
                    <Users size={16} className="mr-1" />
                    会員の広場
                  </h4>
                  <p className="text-xs text-gray-600">会員の声、近況報告、学生時代の思い出など、同窓生のリアルなメッセージを掲載。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-primary mb-2 flex items-center" style={{ color: COLORS.primary }}>
                    <BookOpen size={16} className="mr-1" />
                    大学・研究
                  </h4>
                  <p className="text-xs text-gray-600">大学の現状、新設された設備、各研究室の最新研究紹介など、母校の「今」を報告。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-primary mb-2 flex items-center" style={{ color: COLORS.primary }}>
                    <FileText size={16} className="mr-1" />
                    会務報告
                  </h4>
                  <p className="text-xs text-gray-600">同窓会の活動状況、総会・幹事会の報告、会計報告など、運営の透明性を確保。</p>
                </div>
              </div>
              
              <div className="text-right">
                <Link to="/newsletter/archive" className="inline-flex items-center text-primary font-bold hover:text-gold transition-colors" style={{ color: COLORS.primary }}>
                  会報バックナンバーを見る
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Directory Section */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gray-100 p-6 flex items-center border-b">
              <Users className="mr-3 text-primary" size={24} style={{ color: COLORS.primary }} />
              <h3 className="text-xl font-bold">（２）理学部同窓会会員名簿</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                不定期に刊行しており、会員の皆様に有料で頒布しております。
                会員相互の連絡や親睦、各学年・学科ごとのネットワーク維持にご活用ください。
              </p>
              <div className="bg-red-50 p-4 rounded-lg flex items-start">
                <div className="text-red-600 mr-2 mt-0.5 font-bold">!</div>
                <p className="text-xs text-red-800 leading-relaxed">
                  名簿は会員の個人情報を含むため、取り扱いには十分ご注意ください。
                  プライバシー保護の観点から、外部への漏洩や営利目的での利用は固く禁じております。
                </p>
              </div>
            </div>
          </div>

          {/* Link to Member Books */}
          <div className="bg-gold/5 border-2 border-gold/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gold p-3 rounded-full text-white" style={{ backgroundColor: COLORS.accent }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">会員の出版物</h3>
                <p className="text-sm text-gray-600">同窓生が執筆・出版された書籍はこちらで紹介しています。</p>
              </div>
            </div>
            <Link to="/exchange/books" className="bg-gold text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all whitespace-nowrap" style={{ backgroundColor: COLORS.accent }}>
              紹介ページへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
