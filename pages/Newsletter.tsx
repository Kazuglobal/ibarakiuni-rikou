
import React from 'react';
import { COLORS } from '../constants';
import { FileText, Download, ExternalLink } from 'lucide-react';

const Newsletter: React.FC = () => {
  const issues = [
    { no: '第27号', date: '2024年12月発行', pages: '50ページ', status: '公開中' },
    { no: '第26号', date: '2023年11月発行', pages: '60ページ', status: '公開中' },
    { no: '第25号', date: '2022年10月発行', pages: '55ページ', status: '公開中' },
    { no: '第24号', date: '2021年11月発行', pages: '48ページ', status: '公開中' },
    { no: '第23号', date: '2020年12月発行', pages: '52ページ', status: '公開中' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          会報バックナンバー
        </h2>
        <p className="mb-8 leading-relaxed text-gray-600">
          茨城大学理学部同窓会では、年に一度、会報を発行しています。
          これまでに発行された会報のデジタル版（PDF）をこちらでご覧いただけます。
        </p>

        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm uppercase">
                <th className="px-6 py-4 font-bold border-b">号数</th>
                <th className="px-6 py-4 font-bold border-b">発行年月日</th>
                <th className="px-6 py-4 font-bold border-b">内容</th>
                <th className="px-6 py-4 font-bold border-b text-center">閲覧・DL</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                  <td className="px-6 py-4 font-bold text-gray-800">{issue.no}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{issue.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{issue.pages}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-gold transition-colors" style={{ backgroundColor: COLORS.primary }}>
                      <Download className="w-3 h-3 mr-2" />
                      PDF表示
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl border-t-4" style={{ borderTopColor: COLORS.accent }}>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <FileText className="mr-2 text-accent" />
          原稿募集について
        </h3>
        <p className="mb-6 leading-relaxed">
          同窓会会報では、会員の皆様からの原稿を随時募集しております。
          学生時代の思い出、近況報告、同期会の報告など、内容は何でも構いません。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="font-bold text-gray-400 mb-1">文字数目安</p>
            <p className="text-lg">1,500字程度</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="font-bold text-gray-400 mb-1">締め切り</p>
            <p className="text-lg">毎年6月30日</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="font-bold text-gray-400 mb-1">送付先</p>
            <p className="text-lg">同窓会事務局まで</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
            原稿を投稿・相談する
          </button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
