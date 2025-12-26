
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSiteAssistance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `茨城大学理学部同窓会のWebサイトのAIアシスタントとして、以下の質問に答えてください。
      質問: ${query}
      
      文脈情報:
      - 住所: 〒310-0056 水戸市文京２－１－１ 茨城大学理学部事務部内
      - 会費: 10,000円 (終身会費)
      - 会長: 鈴木 忠和
      - 支部: 京水会(東京), 理水会(水戸)
      - 会報は年1回発行
      `,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在AIアシスタントは利用できません。";
  }
};
