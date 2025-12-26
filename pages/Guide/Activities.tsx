
import React from 'react';
import { COLORS } from '../../constants';
import { Briefcase, Users, Calendar, FileText, Globe, GraduationCap, Calculator, Settings } from 'lucide-react';

const Activities: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          主な活動・会務
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Activities Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center border-l-4 pl-4" style={{ borderColor: COLORS.accent }}>
              <Users className="mr-2" size={20} />
              主な活動
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">（１）母校行事への協力等</h4>
                <p className="text-sm text-gray-600 leading-relaxed">茨城大学および理学部が主催する各種行事への支援や、母校のさらなる発展のための協力体制を構築しています。</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">（２）支部等との交流</h4>
                <p className="text-sm text-gray-600 leading-relaxed">東京支部（京水会）や水戸支部（理水会）をはじめとする各支部活動の支援および、支部間・同窓生間の交流を促進しています。</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">（３）総会、幹事会の開催</h4>
                <p className="text-sm text-gray-600 leading-relaxed">定期的な総会および幹事会を開催し、同窓会の運営方針や事業計画の策定、報告を行っています。</p>
              </div>
            </div>
          </div>

          {/* Standing Committee Affairs Section */}
          <div className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold flex items-center mb-6" style={{ color: COLORS.primary }}>
              <Briefcase className="mr-2" size={20} />
              常任幹事会の主な会務
            </h3>
            <p className="text-sm mb-6 text-gray-600">年4回開催される常任幹事会では、以下の会務を円滑に進めるための具体的な協議と実施を担っています。</p>
            
            <ul className="space-y-4">
              {[
                { icon: <Calendar size={16} />, text: "総会、幹事会の事務局運営" },
                { icon: <FileText size={16} />, text: "会報の発行" },
                { icon: <Users size={16} />, text: "会員名簿の管理・運用" },
                { icon: <Globe size={16} />, text: "ホームページの管理・運用" },
                { icon: <GraduationCap size={16} />, text: "在学生との交流推進" },
                { icon: <Calculator size={16} />, text: "会計事務（会費・寄付金管理）" },
                { icon: <Settings size={16} />, text: "会の運営全般に関わる事項" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-primary/5">
                  <span className="text-accent" style={{ color: COLORS.accent }}>{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">◆ {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl text-center">
          <p className="text-sm text-gray-500">
            同窓会活動についてのご提案やご質問は、
            <a href="#/contact" className="text-primary font-bold hover:underline mx-1" style={{ color: COLORS.primary }}>
              お問い合わせフォーム
            </a>
            よりお気軽にお寄せください。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Activities;
