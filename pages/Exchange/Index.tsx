
import React from 'react';
import { COLORS } from '../../constants';
import { Users, Send, CheckCircle } from 'lucide-react';

const ExchangeIndex: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          同窓会会員交流について
        </h2>
        
        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-lg">
            本ページは、茨城大学理学部の卒業生同士が、地域や世代を超えて交流し、親睦を深めるためのプラットフォームです。
            同期会や職域での集まり、趣味の会の開催通知、活動報告などを自由に掲載いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F5F5F0] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: COLORS.primary }}>
              <Send className="mr-2" />
              掲載依頼方法
            </h3>
            <p className="text-sm mb-4">掲載を希望される方は、お問い合わせフォームまたはメールにて事務局まで以下の情報をお送りください。</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" /> 開催日時・場所</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" /> 会合の名称・趣旨</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" /> 代表者名および連絡先</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" /> 掲載期間の指定（あれば）</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-dashed p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: COLORS.primary }}>
              <Users className="mr-2" />
              掲載条件
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>・茨城大学理学部卒業生が主体の集まりであること</li>
              <li>・政治的、宗教的、営利目的の活動ではないこと</li>
              <li>・公序良俗に反する内容ではないこと</li>
              <li>・会員相互の親睦を深める目的であること</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-red-50 rounded-lg text-xs text-red-800 leading-relaxed">
          <p className="font-bold mb-2">【免責事項】</p>
          <p>本ページに掲載された各イベントや会合の内容について、本会は一切の責任を負いかねます。参加にあたっては各主催者に詳細を確認し、自己責任でお願いいたします。</p>
        </div>
      </section>
    </div>
  );
};

export default ExchangeIndex;
