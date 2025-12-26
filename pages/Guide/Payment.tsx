
import React from 'react';
import { COLORS } from '../../constants';
import { AlertTriangle, CreditCard, CheckCircle } from 'lucide-react';

const Payment: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          会費納入について
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="text-red-500 mr-4 w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-800 mb-2">【重要】終身会費制について</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                本同窓会は「終身会費制」を採用しております。一度納入いただければ、その後の年会費等は不要です。
                未納の方は、円滑な運営のため早めのご協力をお願い申し上げます。
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4" style={{ color: COLORS.accent }}>
              <CreditCard size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">終身会費額</h3>
            <p className="text-4xl font-black text-primary mb-4" style={{ color: COLORS.primary }}>
              10,000<span className="text-xl">円</span>
            </p>
            <p className="text-sm text-gray-500">※一度のお支払いで永久会員となります。</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <CheckCircle className="mr-2 text-green-600" />
              振込先口座情報
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">口座番号</span>
                <span className="font-bold">00120-6-72581</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">加入者名</span>
                <span className="font-bold">茨城大学理学部同窓会</span>
              </div>
              <div className="text-xs text-gray-400 mt-4 leading-relaxed">
                ※ ゆうちょ銀行（郵便局）備え付けの「払込取扱票」をご利用ください。
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="font-bold text-xl mb-6">通信欄への記載事項について</h3>
          <p className="mb-6 leading-relaxed">払込取扱票の通信欄には、以下の内容を必ずご記入ください。正確な照合のためご協力をお願いします。</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '入学年度・卒業年度',
              '卒業学科・コース',
              '氏名（旧姓がある場合は併記）',
              '現住所・電話番号',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white text-xs flex items-center justify-center rounded-full" style={{ backgroundColor: COLORS.primary }}>{idx + 1}</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Payment;
