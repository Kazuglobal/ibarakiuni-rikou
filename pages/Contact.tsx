
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { Send, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { getSiteAssistance } from '../services/geminiService';

const Contact: React.FC = () => {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await getSiteAssistance(query);
    setAiResponse(res || "回答を取得できませんでした。");
    setLoading(false);
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          お問い合わせ
        </h2>

        {/* AI Assistant Feature */}
        <div className="bg-gradient-to-br from-[#1B4D3E]/10 to-transparent p-8 rounded-2xl border-2 border-primary/20 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary p-2 rounded-lg text-white mr-3" style={{ backgroundColor: COLORS.primary }}>
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold">AIアシスタント（スマート質問）</h3>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            同窓会の会費納入方法、住所変更、支部活動などについてAIが即座にお答えします。
          </p>
          
          <form onSubmit={handleAiAsk} className="flex flex-col sm:flex-row gap-2 mb-6">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="例: 会費はいくらですか？ / 住所変更はどうすればいい？"
              className="flex-grow px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center disabled:opacity-50 hover:bg-gold transition-all"
              style={{ backgroundColor: COLORS.primary }}
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <MessageSquare className="mr-2" />}
              質問する
            </button>
          </form>

          {aiResponse && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10 animate-fade-in">
              <p className="text-xs font-bold text-primary mb-2 flex items-center">
                <Sparkles size={12} className="mr-1" />
                AIによる回答
              </p>
              <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">
                {aiResponse}
              </div>
            </div>
          )}
        </div>

        {/* Traditional Form */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-8">お問い合わせフォーム</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">カテゴリ</label>
              <select className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary">
                <option>会費について</option>
                <option>住所変更・異動通知</option>
                <option>会報・原稿について</option>
                <option>支部活動・交流について</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
              <textarea className="w-full px-4 py-2 border rounded-lg h-40 outline-none focus:ring-2 focus:ring-primary" required></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" required />
              <label htmlFor="privacy" className="text-sm text-gray-600">プライバシーポリシーに同意します</label>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary text-white px-12 py-4 rounded-full font-bold hover:shadow-lg transition-all" style={{ backgroundColor: COLORS.primary }}>
                <Send className="inline mr-2" />
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
