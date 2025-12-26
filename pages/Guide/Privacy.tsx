
import React from 'react';
import { COLORS } from '../../constants';

const Privacy: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          個人情報保護方針
        </h2>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>茨城大学理学部同窓会（以下、「本会」という）は、会員の個人情報を適切に保護することが本会の事業活動の基本であるとともに、本会の社会的責務であると考え、以下の通り個人情報保護方針を定め、個人情報の保護に努めます。</p>

          <section className="bg-gray-50 p-8 rounded-xl border-l-4" style={{ borderColor: COLORS.primary }}>
            <h3 className="text-xl font-bold mb-4">共同利用について【重要なお知らせ】</h3>
            <p className="mb-4">本会は、会員の利便性向上および同窓会活動の活性化のため、茨城大学と同窓会名簿情報を共同利用しております。</p>
            <div className="space-y-4 text-sm">
              <p><strong>共同利用開始日：</strong>2025年7月25日</p>
              <p><strong>共同利用する個人情報の項目：</strong>氏名、住所、電話番号、メールアドレス、卒業学部・学科、卒業年等</p>
              <p><strong>共同利用者の範囲：</strong>国立大学法人茨城大学、茨城大学同窓会連合会</p>
              <p><strong>利用目的：</strong>大学からの広報誌発送、イベント案内、寄付金の募集、名簿の作成・管理等</p>
              <p><strong>管理責任者：</strong>茨城大学理学部同窓会事務局長</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold">1. 個人情報の収集</h3>
            <p>本会は、適正かつ公正な手段によって、個人情報を取得します。</p>

            <h3 className="text-xl font-bold">2. 利用目的</h3>
            <p>取得した個人情報は、会報の発送、会費納入の確認、総会等の案内など、本会の目的達成のために必要な範囲で利用します。</p>

            <h3 className="text-xl font-bold">3. 第三者提供の制限</h3>
            <p>本会は、法令に定める場合を除き、個人情報を事前に本人の同意を得ることなく、第三者に提供しません。</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
