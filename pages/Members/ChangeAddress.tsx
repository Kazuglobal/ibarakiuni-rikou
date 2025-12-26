
import React from 'react';
import { COLORS } from '../../constants';
import { Home, Mail, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChangeAddress: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          住所等変更（異動）の通知連絡
        </h2>

        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-lg">
            ご転居、勤務先の変更、ご結婚による氏名変更などがあった場合は、速やかに同窓会事務局までお知らせください。
            会報の発送や重要な連絡を確実にお届けするためにご協力をお願いいたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: COLORS.primary }}>
              <Mail className="mr-2" />
              連絡方法
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2" style={{ color: COLORS.primary }}>1.</span>
                <span><Link to="/contact" className="underline font-bold">お問い合わせフォーム</Link>より送信</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2" style={{ color: COLORS.primary }}>2.</span>
                <span>会報同封のハガキにて郵送</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2" style={{ color: COLORS.primary }}>3.</span>
                <span>事務局宛のメールまたはFAX</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: COLORS.primary }}>
              <FileCheck className="mr-2" />
              通知いただきたい項目
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>・氏名（旧姓）</li>
              <li>・卒業年・学科</li>
              <li>・現住所・郵便番号</li>
              <li>・電話番号</li>
              <li>・メールアドレス</li>
              <li>・勤務先名称</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h3 className="font-bold mb-4">東日本大震災で被災された会員の皆様へ</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            被災により連絡先が不明となっている方が多数いらっしゃいます。
            仮設住宅等へのご入居、または転居先が決まりましたら、ぜひご一報いただけますようお願い申し上げます。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChangeAddress;
