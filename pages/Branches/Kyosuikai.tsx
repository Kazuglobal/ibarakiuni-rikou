
import React from 'react';
import { COLORS } from '../../constants';
import { Info, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Kyosuikai: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img src="https://images.unsplash.com/photo-1540959733332-e94e1b389e78?auto=format&fit=crop&q=80&w=1200" alt="Tokyo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold serif-font tracking-wider">京水会（東京支部）</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* President Greeting Section */}
            <section className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 border-b-2 pb-2 flex items-center" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
                <User className="mr-3" />
                支部長挨拶
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  はじめに“東日本大震災”でお亡くなりになられた方々のご冥福をお祈りすると共に、災害に見舞われた地域及びそこに住まわれていた方々に、１日でも早い復興発展と、安定した生活を送られるよう心から願っております。
                </p>
                <p>
                  又、今度の災害が、効果的に政治の活性化を促し、長く低迷してきた日本経済の再発展につながってくれればと希っております。
                </p>
                <p>
                  さて私どもの在京同窓の集い”京水会“も顧みれば昭和３５年にスタートしてから早いものでもう半世紀経過、この間年毎に多くの人たちの参加と新たな出会いがあり、そして会員一人ひとり夫々に色々な良い思い出を残された事と思います。
                </p>
                <p>
                  この間年毎に会をコーディネートしてくれた幹事の皆様、本当にご苦労様でした。有意義な思い出を残せたことを会員の皆さんとともに心から感謝いたします。
                </p>
                <p>
                  そのお陰で今年が新たな半世紀のスタートの年となるのですが、大変幸いなことにタイミング良く新たなスタンスでスタート出来る事になりました。
                </p>
                <p>
                  と申しますのも実は昨年の“京水会総会”に鈴木昌友さんの代理として出席された、母校の理学部同窓会久保田会長の格別のご尽力により、私共の“京水会”が東京支部に、又新たに水戸支部の創設が計画され無事６月にスタートされたとの事です。従って母校の同窓会が新たな形での再スタートとなりました。
                </p>
                <p>
                  このような事情ですから、会員の皆様改めて気持ちを新たにして、より有意義な、より楽しい会になるようご一緒に邁進いたしましょう。
                </p>
                <p>
                  最後に長年に亘って”京水会”に最初から参加され色々と会の発展をサポートして下された鈴木昌友さんに皆様と共に心から感謝の意を表したいと存じます。
                </p>
                <p>
                  理学部卒業の方で東京近辺にお住まいの方、お勤めの方はできるだけ京水会に入会していただき年に一度開かれる総会・懇親会などを通じて情報交換を進め、協力し合って活力ある社会の構築に向け努力しようではありませんか。
                </p>
                <p>
                  京水会に入会（入会金不要）を希望される方は
                  <Link to="/contact" className="mx-1 text-primary font-bold hover:underline" style={{ color: COLORS.primary }}>
                    こちら
                  </Link>
                  から申し込みください。後ほど総会などのご案内をさせて頂きます。
                </p>

                <div className="mt-12 text-right pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold serif-font" style={{ color: COLORS.primary }}>京水会会長　手塚　誠光</p>
                  <p className="text-sm text-gray-500">（文理・物理昭２８年度卒）</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2" style={{ borderColor: COLORS.primary }}>京水会の歩み</h3>
              <p className="leading-relaxed text-gray-700">
                京水会は、東京近郊に在住・在勤する茨城大学理学部卒業生によって組織された支部です。
                昭和35年の発足以来、半世紀以上にわたって会員相互の交流と親睦を深めてまいりました。
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2" style={{ borderColor: COLORS.primary }}>主な活動</h3>
              <p className="mb-6 leading-relaxed">年に一度、定期総会と懇親会を開催しております。若手からベテランまで、幅広い世代の同窓生が集う温かい会です。卒業後のキャリア形成や、趣味の交流など、様々な目的で活用されています。</p>
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 shadow-sm" style={{ borderColor: COLORS.accent }}>
                <h4 className="font-bold text-lg mb-4 flex items-center" style={{ color: COLORS.primary }}>
                  次回の懇親会案内
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center"><span className="w-20 font-bold">日時：</span>2025年11月8日(土) 12:00〜</p>
                  <p className="flex items-center"><span className="w-20 font-bold">場所：</span>上野周辺 ホテル宴会場</p>
                  <p className="mt-4 text-sm bg-white p-3 rounded border border-gray-200 inline-block">※詳細は後日会報および本サイトにて告知いたします。</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl mb-6 flex items-center border-b border-white/20 pb-2">
                <Info className="mr-2" />
                入会について
              </h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>東京・千葉・埼玉・神奈川にお住まい、またはお勤めの方であればどなたでも参加いただけます。</p>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="font-bold text-gold text-center text-lg" style={{ color: COLORS.accent }}>入会金・年会費：無料</p>
                </div>
                <Link 
                  to="/contact" 
                  className="w-full bg-white text-dark-green py-3 rounded-full font-bold flex items-center justify-center hover:bg-gold hover:text-white transition-all shadow-md"
                  style={{ color: COLORS.primary }}
                >
                  入会申し込み
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-6 border rounded-2xl bg-gray-50">
              <h3 className="font-bold mb-4">お問い合わせ先</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                京水会の活動に関するお問い合わせや、連絡先の登録変更は事務局までお願いいたします。
              </p>
              <Link to="/contact" className="text-sm font-bold text-primary hover:underline" style={{ color: COLORS.primary }}>
                事務局へ連絡する
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kyosuikai;
