
import React from 'react';
import { COLORS } from '../../constants';
import { Book } from 'lucide-react';

const MemberBooks: React.FC = () => {
  const books = [
    {
      title: '抽象化物理学の勧め－数学・物理学・電気工学の共通学習',
      author: '深井 文宣（ふかい ふみのぶ）',
      grad: '理学部・物理昭４５年度卒',
      date: '2013年10月10日',
      publisher: '株式会社ＰＨＰパブリッシング',
      price: '￥1,200（税抜き）',
      description: '物理学や電気工学には学習者が越えなければならない壁がある。この本の最大の注目点は電気工学の法則をどう理解するかであり、「キルヒホッフの法則」の解釈と関連問題の新しい解き方を提供しました。'
    },
    {
      title: '焼き鳥はなぜ串に刺さっているのか?－儲けるために知っておきたい生産管理の基礎知識',
      author: '初鹿野 浩明（はつかの ひろあき）',
      grad: '理学部・化学昭５７年度卒',
      date: '2008年10月3日',
      publisher: 'PHP研究所',
      price: '-',
      description: '商売繁盛のカギは「焼き鳥屋」に学べ！知らないと損する生産管理の考え方をわかりやすく解説。'
    },
    {
      title: 'スマートグリッドがわかる',
      author: '本橋 恵一（もとはし けいいち）',
      grad: '理学部・生物昭５８年度卒',
      date: '2011年11月16日',
      publisher: '日本経済新聞出版社',
      price: '￥872',
      description: '東日本大震災により日本の電力送電の脆弱性が露呈、スマートグリッドへの注目が高まっている。各社が投資に力をいれる新しい送電網とは何か、そのしくみと可能性をわかりやすく紹介。'
    },
    {
      title: '理系教科書補助教材－これを知らないと損をする',
      author: '深井 文宣（ふかい ふみのぶ）',
      grad: '理学部・物理昭４５年度卒',
      date: '2011年7月5日',
      publisher: '株式会社ＰＨＰパブリッシング',
      price: '￥1,260',
      description: '「論理図解」という筆者が考案した数式等の解説方法を使って、算数、数学、化学、物理学の学習内容を最小のページ数で解説。'
    },
    {
      title: '微積分学の大革命－文字を使う表計算で積分法は心から納得できる',
      author: '深井 文宣（ふかい ふみのぶ）',
      grad: '理学部・物理昭４５年度卒',
      date: '2000年2月15日',
      publisher: '株式会社文芸社',
      price: '￥1,050',
      description: '納得できる新しい積分法！積分を納得してもらうために、今までの積分法とは異なる新積分法をコンピュータの助けで楽しんでもらうのが本書の目的である。'
    },
    {
      title: '製品開発に役立つ プラスチック材料入門',
      author: '舊橋 章（ふるはし あきら）',
      grad: '文理・化学昭３０年度卒',
      date: '2005年9月30日',
      publisher: '日刊工業新聞社',
      price: '￥2,800',
      description: '20年以上にわたって年２回「プラスチック材料入門講座」と題する講習会を続けてきたが、その内容を元に受講者の希望や質問を参考にまとめたもの。'
    },
    {
      title: '実践 高付加価値プラスチック成形法',
      author: '舊橋 章（ふるはし あきら）',
      grad: '文理・化学昭３０年度卒',
      date: '2008年3月25日',
      publisher: '日刊工業新聞社',
      price: '￥2,800',
      description: '1989年から約20年にわたってアメリカプラスチック工業連盟の年会に参加、その間のプラスチック製品の高付加価値化の流れを取材し紹介したもの。'
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          会員の出版物
        </h2>
        <div className="bg-[#F5F5F0] p-6 rounded-xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            茨城大学理学部同窓会の会員による出版物一覧です。同窓生の皆様が執筆・出版された書籍をご紹介しています。
            掲載をご希望の方は、事務局までご連絡ください。
          </p>
        </div>

        <div className="space-y-8">
          {books.map((book, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
              <div className="w-full md:w-32 h-48 bg-gray-50 flex items-center justify-center rounded-lg shadow-inner border border-gray-100 flex-shrink-0">
                <Book size={48} className="text-gray-300" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight" style={{ color: COLORS.primary }}>
                  {book.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">著者</p>
                    <p className="text-sm font-bold text-gray-800">{book.author}</p>
                    <p className="text-xs text-accent font-medium" style={{ color: COLORS.accent }}>{book.grad}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">出版情報</p>
                    <p className="text-sm text-gray-700">{book.publisher}</p>
                    <p className="text-xs text-gray-500">{book.date} 発行 / 価格: {book.price}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">概要</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MemberBooks;
