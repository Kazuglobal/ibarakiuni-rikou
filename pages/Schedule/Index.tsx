
import React from 'react';
import { COLORS } from '../../constants';
import { Calendar } from 'lucide-react';

const Schedule: React.FC = () => {
  const events = [
    { date: '2025年11月8日(土)', title: '京水会（東京支部）総会・懇親会', place: '東京都内', status: '予定' },
    { date: '2025年6月28日(土)', title: '同窓会第8期 定期総会', place: '水戸キャンパス', status: '予定' },
    { date: '2024年11月15日(金)', title: '理学部創立記念講演会', place: '理学部講義棟', status: '実績' },
    { date: '2024年12月1日(日)', title: '理水会（水戸支部）忘年会', place: '水戸駅近郊', status: '実績' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          行事予定・実績
        </h2>

        <div className="space-y-8">
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#1B4D3E] text-white p-4 flex items-center">
              <Calendar className="mr-2" />
              <h3 className="font-bold">行事カレンダー</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-xs font-bold text-gray-400 uppercase">
                    <th className="px-6 py-4 border-b">開催日</th>
                    <th className="px-6 py-4 border-b">行事名称</th>
                    <th className="px-6 py-4 border-b">場所</th>
                    <th className="px-6 py-4 border-b text-center">区分</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 border-b last:border-0">
                      <td className="px-6 py-4 font-bold">{ev.date}</td>
                      <td className="px-6 py-4">{ev.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{ev.place}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-[10px] px-2 py-1 rounded-full border font-bold ${ev.status === '予定' ? 'border-primary text-primary' : 'border-gray-300 text-gray-400'}`}>
                          {ev.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
