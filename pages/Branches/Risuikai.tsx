
import React, { useState } from 'react';
import { COLORS } from '../../constants';
import { Info, User, History as HistoryIcon, Users, ChevronDown } from 'lucide-react';

const Risuikai: React.FC = () => {
  const [activeTerm, setActiveTerm] = useState<number>(6);

  const officerTerms = [
    {
      term: 6,
      date: '2023年11月11日現在',
      list: [
        { role: '支部長', name: '鹿島 恭子', grad: '昭和47年度（理学化学）', note: '新任' },
        { role: '副支部長', name: '大前 順子', grad: '昭和46年度（理学数学）' },
        { role: '副支部長', name: '小林 英寿郎', grad: '昭和51年度（理学化学）' },
        { role: '幹事', name: '久保田 益充', grad: '昭和36年度（文理化学）' },
        { role: '幹事', name: '海老沢 勝男', grad: '昭和35年度（文理化学）' },
        { role: '幹事', name: '大橋 弘三郎', grad: '昭和41年度（文理化学）' },
        { role: '幹事', name: '伊藤 剛', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '鈴木 正矩', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '鈴木 忠和', grad: '昭和41年度（文理数学）' },
        { role: '幹事', name: '吉武 和治郎', grad: '昭和42年度（文理生物）' },
        { role: '幹事', name: '勝間田 侑啓', grad: '昭和46年度（理学化学）' },
        { role: '幹事', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
        { role: '幹事', name: '萩谷 薫', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '太田 耕一', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '後藤 公彦', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '鈴木 正伸', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '中井 英一', grad: '昭和56年度（理学数学）' },
        { role: '幹事', name: '大場 和彦', grad: '昭和60年度（理学物理）' },
        { role: '会計', name: '舘山 律子', grad: '昭和52年度（理学化学）' },
      ]
    },
    {
      term: 4,
      date: '2017年10月21日現在',
      list: [
        { role: '支部長', name: '鈴木 忠和', grad: '昭和41年度（文理数学）', note: '新任' },
        { role: '副支部長', name: '富田 廣', grad: '昭和35年度（文理数学）' },
        { role: '副支部長', name: '大前 順子', grad: '昭和47年度（理学数学）' },
        { role: '副支部長', name: '小林 英寿郎', grad: '昭和51年度（理学化学）', note: '新任' },
        { role: '幹事', name: '久保田 益充', grad: '昭和36年度（文理化学）' },
        { role: '幹事', name: '海老沢 勝男', grad: '昭和35年度（文理化学）' },
        { role: '幹事', name: '大橋 弘三郎', grad: '昭和41年度（文理化学）' },
        { role: '幹事', name: '伊藤 剛', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '鈴木 正矩', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '吉武 和治郎', grad: '昭和42年度（文理生物）' },
        { role: '幹事', name: '勝間田 侑啓', grad: '昭和46年度（理学化学）' },
        { role: '幹事', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
        { role: '幹事', name: '萩谷 薫', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '太田 耕一', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '鈴木 正伸', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '大場 和彦', grad: '昭和60年度（理学物理）' },
        { role: '会計', name: '鹿島 恭子', grad: '昭和47年度（理学化学）' },
        { role: '会計', name: '舘山 律子', grad: '昭和52年度（理学化学）' },
      ]
    },
    {
      term: 3,
      date: '2015年10月17日現在',
      list: [
        { role: '支部長', name: '伊藤 剛', grad: '昭和41年度（文理物理）' },
        { role: '副支部長', name: '富田 廣', grad: '昭和35年度（文理数学）' },
        { role: '副支部長', name: '鈴木 正矩', grad: '昭和41年度（文理物理）', note: '新任' },
        { role: '副支部長', name: '大前 順子', grad: '昭和47年度（理学数学）', note: '新任' },
        { role: '幹事', name: '久保田 益充', grad: '昭和36年度（文理化学）' },
        { role: '幹事', name: '海老沢 勝男', grad: '昭和35年度（文理化学）' },
        { role: '幹事', name: '鈴木 忠和', grad: '昭和41年度（文理数学）' },
        { role: '幹事', name: '大橋 弘三郎', grad: '昭和41年度（文理化学）' },
        { role: '幹事', name: '吉武 和治郎', grad: '昭和42年度（文理生物）' },
        { role: '幹事', name: '勝間田 侑啓', grad: '昭和46年度（理学化学）' },
        { role: '幹事', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
        { role: '幹事', name: '萩谷 薫', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '太田 耕一', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '鈴木 正伸', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '小林 英寿郎', grad: '昭和51年度（理学化学）' },
        { role: '幹事', name: '大場 和彦', grad: '昭和60年度（理学物理）' },
        { role: '会計', name: '鹿島 恭子', grad: '昭和47年度（理学化学）' },
        { role: '会計', name: '舘山 律子', grad: '昭和52年度（理学化学）' },
      ]
    },
    {
      term: 2,
      date: '2013年9月7日現在',
      list: [
        { role: '支部長', name: '伊藤 剛', grad: '昭和41年度（文理物理）' },
        { role: '副支部長', name: '富田 廣', grad: '昭和35年度（文理数学）' },
        { role: '副支部長', name: '海老沢 勝男', grad: '昭和35年度（文理化学）' },
        { role: '副支部長', name: '桐原 幸一', grad: '昭和48年度（理学生物）' },
        { role: '幹事', name: '久保田 益充', grad: '昭和36年度（文理化学）' },
        { role: '幹事', name: '鈴木 忠和', grad: '昭和41年度（文理数学）' },
        { role: '幹事', name: '鈴木 正矩', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '大橋 弘三郎', grad: '昭和41年度（文理化学）' },
        { role: '幹事', name: '吉武 和治郎', grad: '昭和42年度（文理生物）' },
        { role: '幹事', name: '深作 昇', grad: '昭和45年度（理学化学）' },
        { role: '幹事', name: '勝間田 侑啓', grad: '昭和46年度（理学化学）' },
        { role: '幹事', name: '大前 順子', grad: '昭和47年度（理学数学）', note: '新任' },
        { role: '幹事', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
        { role: '幹事', name: '萩谷 薫', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '太田 耕一', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '鈴木 正伸', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '小林 英寿郎', grad: '昭和51年度（理学化学）' },
        { role: '幹事', name: '中井 英一', grad: '昭和56年度（理学数学）', note: '新任' },
        { role: '幹事', name: '大場 和彦', grad: '昭和60年度（理学物理）' },
        { role: '会計', name: '鹿島 恭子', grad: '昭和47年度（理学化学）' },
        { role: '会計', name: '舘山 律子', grad: '昭和52年度（理学化学）' },
      ]
    },
    {
      term: 1,
      date: '2011年6月12日現在',
      list: [
        { role: '支部長', name: '伊藤 剛', grad: '昭和41年度（文理物理）' },
        { role: '副支部長', name: '富田 廣', grad: '昭和35年度（文理数学）' },
        { role: '副支部長', name: '海老沢 勝男', grad: '昭和35年度（文理化学）' },
        { role: '副支部長', name: '桐原 幸一', grad: '昭和48年度（理学生物）' },
        { role: '幹事', name: '久保田 益充', grad: '昭和36年度（文理化学）' },
        { role: '幹事', name: '鈴木 忠和', grad: '昭和41年度（文理数学）' },
        { role: '幹事', name: '鈴木 正矩', grad: '昭和41年度（文理物理）' },
        { role: '幹事', name: '大橋 弘三郎', grad: '昭和41年度（文理化学）' },
        { role: '幹事', name: '吉武 和治郎', grad: '昭和42年度（文理生物）' },
        { role: '幹事', name: '深作 昇', grad: '昭和45年度（理学化学）' },
        { role: '幹事', name: '勝間田 侑啓', grad: '昭和46年度（理学化学）' },
        { role: '幹事', name: '佐久間 隆', grad: '昭和47年度（理学物理）' },
        { role: '幹事', name: '萩谷 薫', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '太田 耕一', grad: '昭和47年度（理学化学）' },
        { role: '幹事', name: '鈴木 正伸', grad: '昭和49年度（理学生物）' },
        { role: '幹事', name: '小林 英寿郎', grad: '昭和51年度（理学化学）' },
        { role: '幹事', name: '大場 和彦', grad: '昭和60年度（理学物理）' },
        { role: '会計', name: '鹿島 恭子', grad: '昭和47年度（理学化学）' },
        { role: '会計', name: '舘山 律子', grad: '昭和52年度（理学化学）' },
      ]
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img src="https://images.unsplash.com/photo-1590333746438-68d713203956?auto=format&fit=crop&q=80&w=1200" alt="Mito Kairakuen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold serif-font tracking-wider">理水会（水戸支部）</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Section */}
            <section id="overview">
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2 flex items-center" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
                <Info className="mr-3" />
                支部概要
              </h3>
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4 text-gray-700 leading-relaxed">
                <p>
                  「理水会」は茨城大学理学部同窓会の水戸支部として、2011年6月12日に発足しました。
                </p>
                <p>
                  対象とする会員は、茨城大学理学部同窓会会員のうち、水戸市とその近隣地区(*1)に在住・在勤している方、並びに支部長が特別に承認した方です。
                </p>
                <p className="text-sm border-t pt-4">
                  <span className="font-bold text-gray-500">(*1) 対象地区：</span><br />
                  水戸市、ひたちなか市、日立市、常陸太田市、那珂市、笠間市、小美玉市、東茨城郡
                </p>
                <p className="pt-4">
                  2011年6月12日に三の丸ホテルにおいて「理水会」設立総会を開催いたしました。
                  設立総会後、懇親会を実施し、親睦を深めることができました。
                </p>
              </div>
            </section>

            {/* President Greeting Section */}
            <section id="greeting">
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2 flex items-center" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
                <User className="mr-3" />
                支部長挨拶
              </h3>
              <div className="bg-white border rounded-2xl p-8 shadow-sm space-y-6 text-gray-700 leading-relaxed">
                <p>
                  今年６月に茨城大学理学部同窓会の水戸支部として理水会が発足いたしました。理水会の会員は同窓会会員の内、水戸市とその周辺に在住している方々で、集まりやすい方を対象に構成されております。会員の交流が今まで以上に活発になることが期待されております。会の発足にご尽力頂いた幹事の皆さんに改めて御礼申し上げます。
                </p>
                <p>
                  平成15年に国立大学法人法が施行され、それ以降、茨城大学に限らず国立大学を取り巻く環境は大きく変わっております。好むと好まずにかかわらず経済原理、競争原理社会の一員に組み込まれ研究成果を最優先に求められるようになっております。理学のような基礎研究には馴染まないのでは、と言う意見も多々ありますが評価が難しいところです。
                </p>
                <p>
                  さらに大学の役割が教育、研究だけの場ではなく市民や社会から信頼されるために地域連携と国際交流と言う役割を担うことが求められております。かつては学生が社会活動に参加することは反社会的学生運動と見なされ学外には出さないようにすることが学生の本分とされていたのですが、しかし今私達の在学時代とは社会状況が大きく変わってきております。大学と社会が一体となり、今、社会が何を求めているのかを的確に把握して研究テーマとし研究成果を早く社会に還元する事が求められております。新しい時代の大学の在り方を私達OBも共に考えていく必要があるのではないかと思います。会員の交流と大学への支援を含めてこの会が楽しい会になりますよう会員皆様のご支援、ご協力をお願い致しましてご挨拶といたします。
                </p>
                <div className="mt-12 text-right pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold serif-font" style={{ color: COLORS.primary }}>理水会会長　伊藤　剛</p>
                  <p className="text-sm text-gray-500">（文理・物理昭42年度卒）</p>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section id="history">
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2 flex items-center" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
                <HistoryIcon className="mr-3" />
                理水会設立の経緯
              </h3>
              <div className="prose prose-slate max-w-none bg-gray-50 p-8 rounded-2xl">
                <p className="text-sm text-gray-500 mb-6 font-bold">理学部同窓会副会長　大橋弘三郎</p>
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    昭和５５年（１９８０年）に理学部同窓会が発足し、今年で３１年目を迎えます。この間、歴代会長をはじめ常任幹事及び会員皆さんのご尽力により同窓会名簿の発行、会員名簿の管理、ホームページの運営、在学生との交流推進などの活動をとおして理学部同窓会は着実に発展してきました。昨年、会長に久保田益充が就任し、新たな活動の一つとして、水戸市とその近隣地区における同窓会会員同志のより一層の交流・親睦に向けて茨城大学理学部同窓会水戸支部「理水会」を設立することを計画しました。
                  </p>
                  <p>
                    平成２３年１月２２日に理学部同窓会の常任幹事会の下に理学部同窓会水戸支部「理水会」設立世話人会を設け、「理水会」規約、役員や設立総会などについて検討準備しました。設立総会を３月１３日（日）、三の丸ホテルで開催する旨の案内状を水戸支部会員になる予定者６８８名に郵送し、更にはホームページにより周知を図りました。
                  </p>
                  <p>
                    １３５名から回答があり、総会及び懇親会出席者はそれぞれ４２名、３９名が予定されていましたが、３月１１日の東日本大震災と福島原発事故により当初予定の総会と懇親会が６月１２日に延期されました。当初の出席予定者と都合により出席できない方に改めて案内状を送付し、総会に３４名の出席をいただき、設立世話人から提案された規約や役員が承認されました。
                  </p>
                  <p>
                    引き続き同会場で懇親会が盛大に行われました。理学部同窓会名誉会長の堀　良通理学部長、伊藤　剛（昭和４２年度卒、物理）理水会支部長の挨拶の後、荷見守助（昭和２９年度卒、数学、茨城大学名誉教授）の乾杯の音頭に引き続き、出席者全員から自己紹介が行われました。たいへん和やかな懇親会でした。
                  </p>
                  <p>
                    理水会の設立に向けて多くの会員の方々のご協力をいただきお礼と感謝と申し上げます。
                  </p>
                </div>
              </div>
            </section>

            {/* Officers Section */}
            <section id="officers">
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2 flex items-center" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
                <Users className="mr-3" />
                役員一覧
              </h3>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {[6, 4, 3, 2, 1].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTerm(t)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                      activeTerm === t 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                    style={activeTerm === t ? { backgroundColor: COLORS.primary } : {}}
                  >
                    第{t}期役員
                  </button>
                ))}
              </div>

              {officerTerms.filter(t => t.term === activeTerm).map((termData) => (
                <div key={termData.term} className="bg-white border rounded-xl overflow-hidden shadow-sm animate-fade-in">
                  <div className="bg-gray-100 px-6 py-3 border-b flex items-center justify-between">
                    <h4 className="font-bold text-gray-700">第{termData.term}期役員</h4>
                    <span className="text-xs text-gray-500">{termData.date}</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          <th className="px-6 py-3 border-b">役職</th>
                          <th className="px-6 py-3 border-b">氏名</th>
                          <th className="px-6 py-3 border-b">卒業・修了年度</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {termData.list.map((officer, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-3 text-sm font-bold text-gray-800">{officer.role}</td>
                            <td className="px-6 py-3 text-sm">
                              {officer.name}
                              {officer.note && (
                                <span className="ml-2 text-[10px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100">
                                  {officer.note}
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-3 text-xs text-gray-500">{officer.grad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-lg sticky top-24">
              <h3 className="font-bold text-xl mb-6 flex items-center border-b border-white/20 pb-2">
                目次
              </h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#overview" className="hover:text-gold transition-colors flex items-center"><ChevronDown className="mr-2 w-4 h-4 -rotate-90" /> 支部概要</a></li>
                <li><a href="#greeting" className="hover:text-gold transition-colors flex items-center"><ChevronDown className="mr-2 w-4 h-4 -rotate-90" /> 支部長挨拶</a></li>
                <li><a href="#history" className="hover:text-gold transition-colors flex items-center"><ChevronDown className="mr-2 w-4 h-4 -rotate-90" /> 設立の経緯</a></li>
                <li><a href="#officers" className="hover:text-gold transition-colors flex items-center"><ChevronDown className="mr-2 w-4 h-4 -rotate-90" /> 役員一覧</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Risuikai;
