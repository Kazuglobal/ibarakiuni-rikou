
import React from 'react';
import { COLORS } from '../../constants';

const Officers: React.FC = () => {
  const officers = [
    { role: '会長', name: '鈴木 忠和', grad: '昭和41年度（文理数学）' },
    { role: '副会長', name: '大前 順子', grad: '昭和47年度（理学数学）' },
    { role: '副会長', name: '小林 英寿郎', grad: '昭和51年度（理学化学）' },
    { role: '副会長', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
    { role: '常任幹事', name: '木下 勝', grad: '昭和58年度（理学生物）' },
    { role: '常任幹事', name: '高橋 秀行', grad: '昭和60年度（理学地学）' },
    { role: '会計', name: '渡辺 浩子', grad: '昭和55年度（理学物理）' },
    { role: '監事', name: '佐藤 健', grad: '昭和49年度（理学化学）' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          役員一覧
        </h2>
        <p className="mb-6">第8期役員（2023年6月現在）</p>

        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1B4D3E] text-white">
                <th className="px-6 py-4 font-bold border-b">役職</th>
                <th className="px-6 py-4 font-bold border-b">氏名</th>
                <th className="px-6 py-4 font-bold border-b">卒業・修了年度</th>
              </tr>
            </thead>
            <tbody>
              {officers.map((officer, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                  <td className="px-6 py-4 font-bold text-gray-800">{officer.role}</td>
                  <td className="px-6 py-4">{officer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{officer.grad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Officers;
