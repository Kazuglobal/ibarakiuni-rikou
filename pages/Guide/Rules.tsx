
import React from 'react';
import { COLORS } from '../../constants';

const Rules: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="serif-font text-3xl font-bold mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
          茨城大学理学部同窓会会則
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h3 className="text-xl font-bold border-l-4 pl-4 mb-4" style={{ borderColor: COLORS.accent }}>第1章 総則</h3>
            <div className="space-y-4">
              <p><strong>第1条</strong> 本会は、茨城大学理学部同窓会と称し、事務局を茨城大学理学部内に置く。</p>
              <p><strong>第2条</strong> 本会は、会員相互の親睦を厚くし、母校の発展に寄与することを目的とする。</p>
              <p><strong>第3条</strong> 本会は、前条の目的を達成するため、次の事業を行う。</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>会報、名簿等の発行</li>
                <li>総会、懇親会等の開催</li>
                <li>母校、学生に対する支援</li>
                <li>その他、目的達成に必要な事業</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold border-l-4 pl-4 mb-4" style={{ borderColor: COLORS.accent }}>第2章 会員及び役員</h3>
            <div className="space-y-4">
              <p><strong>第4条</strong> 本会は、次の会員をもって組織する。</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>正会員：茨城大学文理学部理学科、理学部、理学研究科等の卒業生</li>
                <li>準会員：理学部、大学院理工学研究科等の在学生</li>
                <li>特別会員：理学部教員、元専任教官等</li>
              </ul>
              <p><strong>第5条</strong> 本会に次の役員を置く。</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>会長 1名</li>
                <li>副会長 若干名</li>
                <li>幹事 若干名</li>
                <li>会計 2名</li>
                <li>監事 2名</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg text-sm italic">
            <p>※詳細な会則全文については、事務局にて閲覧いただけます。</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Rules;
