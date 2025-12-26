
import React from 'react';
import { COLORS } from '../../constants';

const Greeting: React.FC = () => {
  return (
    <article className="prose prose-slate lg:prose-lg max-w-none">
      <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
        第8期・同窓会会長就任にあたって
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-2/3 space-y-6">
          <p className="leading-relaxed">
            茨城大学理学部同窓会の会員の皆様、こんにちは。このたび第8期会長を拝命いたしました鈴木忠和でございます。
          </p>
          <p className="leading-relaxed">
            私たちの母校である茨城大学理学部は、創設以来多くの有能な人材を社会に送り出してきました。
            同窓会の役割は、単なる卒業生の親睦に留まらず、母校の現役学生への支援や、大学全体の発展に寄与することにあると考えております。
          </p>
          <p className="leading-relaxed">
            昨今の社会情勢の変化に伴い、同窓会の在り方も新しい形を模索する必要があります。
            デジタル技術を活用した情報発信の強化や、若手会員の皆様が気軽に参加できるような交流の場づくりに注力してまいる所存です。
          </p>
          <p className="leading-relaxed">
            会員の皆様におかれましては、今後とも変わらぬご支援とご協力をお願い申し上げます。
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-inner">
            <img src="https://picsum.photos/seed/president/400/500" alt="会長写真" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="p-4 bg-[#1B4D3E] text-white">
              <p className="text-sm opacity-80">理学部同窓会会長</p>
              <p className="text-lg font-bold">鈴木 忠和</p>
              <p className="text-xs mt-1">昭和41年度（文理数学）卒業</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-right">
        <p className="font-bold">2022年10月1日</p>
        <p className="text-xl font-bold serif-font">理学部同窓会会長 鈴木 忠和</p>
      </div>
    </article>
  );
};

export default Greeting;
