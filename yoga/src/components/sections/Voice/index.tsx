"use client";

import React from 'react';
import { User } from 'lucide-react';
import { ButtonOutline, SectionTitle } from '@/components/ui/UiParts';

export const Voice = () => {
    const allVoices = [
        { age: "20代 女性", title: "友達から「痩せた？」と\n言われることが増えた", text: "腰回りがくびれて背肉が取れ、顔周りもスッキリしました！一年継続したことで、会う友達から『痩せた？』とよく聞かれています。", tags: ["#ダイエット", "#くびれ"] },
        { age: "30代 女性", title: "肩こり・頭痛が改善し\n身体スッキリ", text: "明らかに始めたてよりも身体が柔らかく、すっきりとしました！前は肩こりから頭痛があったのですが、今は頭痛がほとんどありません！！", tags: ["#肩こり解消", "#リフレッシュ"] },
        { age: "40代 女性", title: "肌の保水力がアップし、\n乾燥しにくくなりました", text: "冬はいつも乾燥で肌がカサカサしてしまうのですが、保水力が増した気がします。それと、レッスンを受けた日はぐっすり深い睡眠がとれます。", tags: ["#美肌", "#睡眠改善"] },
        { age: "30代 女性", title: "体重が5kg減って\n体が軽くなった", text: "週3回通い始めて3ヶ月で5kg減量に成功！代謝が上がったのか、食事制限なしでこの結果に驚いています。", tags: ["#ダイエット", "#代謝UP"] },
        { age: "20代 女性", title: "姿勢が良くなり\n自信が持てるように", text: "デスクワークで猫背気味でしたが、ヨガを始めてから背筋がピンと伸びるようになりました。周りからも姿勢を褒められます。", tags: ["#姿勢改善", "#自信"] },
        { age: "40代 女性", title: "更年期の不調が\n和らぎました", text: "ホットフラッシュや不眠に悩んでいましたが、ヨガを続けることで症状が軽減。心身ともに安定してきました。", tags: ["#更年期", "#リラックス"] },
        { age: "50代 女性", title: "膝の痛みが軽減し\n動きやすくなった", text: "膝の痛みで階段の上り下りが辛かったのですが、筋力がついて痛みが減りました。日常生活が楽になりました。", tags: ["#膝痛改善", "#筋力UP"] },
        { age: "30代 女性", title: "ストレス解消になり\n毎日が楽しい", text: "仕事のストレスで悩んでいましたが、ヨガの時間が心のリセットに。レッスン後は気分がスッキリして前向きになれます。", tags: ["#ストレス解消", "#メンタルケア"] },
    ];

    // スマホ用: 最初は先頭3つ、クライアント側でランダム化
    const [mobileVoices, setMobileVoices] = React.useState(allVoices.slice(0, 3));

    React.useEffect(() => {
        // クライアント側でのみランダムに3つ選択
        const shuffled = [...allVoices].sort(() => 0.5 - Math.random());
        setMobileVoices(shuffled.slice(0, 3));
    }, []);

    return (
        <section className="py-12 md:py-20 bg-bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionTitle en="Voice" ja="会員様の声" />

                {/* PC: 自動横スクロール */}
                <div className="hidden md:block relative">
                    <div className="flex gap-6 animate-scroll">
                        {[...allVoices, ...allVoices].map((voice, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col min-w-[350px] hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <User className="text-gray-400 w-8 h-8" />
                                    </div>
                                    <span className="font-bold text-text-main text-sm">{voice.age}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3 text-text-main whitespace-pre-line min-h-[3.5rem]">{voice.title}</h3>
                                <p className="text-sm text-text-sub leading-relaxed mb-6 flex-grow">{voice.text}</p>
                                <div className="flex gap-2 flex-wrap mt-auto">
                                    {voice.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* スマホ: ランダム3つ固定表示 */}
                <div className="md:hidden grid grid-cols-1 gap-6">
                    {mobileVoices.map((voice, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <User className="text-gray-400 w-8 h-8" />
                                </div>
                                <span className="font-bold text-text-main text-sm">{voice.age}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-text-main whitespace-pre-line min-h-[3.5rem]">{voice.title}</h3>
                            <p className="text-sm text-text-sub leading-relaxed mb-6 flex-grow">{voice.text}</p>
                            <div className="flex gap-2 flex-wrap mt-auto">
                                {voice.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded font-bold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <ButtonOutline>他の会員様の声を見る</ButtonOutline>
                </div>
            </div>
        </section>
    );
};

export default Voice;
