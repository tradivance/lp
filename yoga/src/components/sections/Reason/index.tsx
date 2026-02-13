"use client";

import React from 'react';

export const Reason = () => (
    <section className="py-12 md:py-20 bg-white relative">
        {/* Reason Image - Desktop (Matching Studio Layout) */}
        <div className="absolute hidden md:block top-[-100px] left-[50%] w-[550px] h-[310px] z-0">
            <img
                src="https://spark-mule-706.notion.site/image/attachment%3A637291ab-abcf-40c4-8b31-8e2e76eb6ce8%3AGenerated_Image_December_09_2025_-_1_28PM.jpeg?id=2c4eedb4-bf7a-8095-a27c-e18ee2461772&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                alt="Reason Atmosphere"
                className="w-full h-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
            />
        </div>
        {/* Reason Image - Mobile */}
        <div className="md:hidden relative w-full h-[200px] mb-8 overflow-hidden rounded-r-[50px] ml-[-20px] w-[90%]">
            <img
                src="https://spark-mule-706.notion.site/image/attachment%3A637291ab-abcf-40c4-8b31-8e2e76eb6ce8%3AGenerated_Image_December_09_2025_-_1_28PM.jpeg?id=2c4eedb4-bf7a-8095-a27c-e18ee2461772&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                alt="Reason Atmosphere"
                className="w-full h-full object-cover"
            />
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
            <div className="w-full md:w-[55%] text-center md:text-left mb-16 md:pl-24">
                <span className="relative inline-block md:block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
                    THE REASON WHY
                </span>
                <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main mt-2 mb-4">
                    KIKIが<span className="text-primary">選ばれる理由</span>
                </h2>
                <p className="text-text-sub text-[16px] md:text-[18px] font-medium leading-relaxed">
                    初心者でも安心。無理なく続けられる環境があります。
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        no: "01",
                        title: "駅徒歩3分以内で\nアクセス抜群！",
                        desc: "ほとんどの店舗が駅近だから、仕事帰りや買い物のついでに気軽に通えます。",
                        img: "https://spark-mule-706.notion.site/image/attachment%3A063c8fea-b60b-4989-a411-63ea0c9e5caf%3Akiki_yoga_studio.png?id=2c5eedb4-bf7a-80a7-bb7a-d612f4f27d32&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    },
                    {
                        no: "02",
                        title: "80%以上が\n未経験スタート",
                        desc: "インストラクターが丁寧にサポート。体が硬くても、運動が苦手でも大丈夫。",
                        img: "https://spark-mule-706.notion.site/image/attachment%3Aa2e83983-2fe4-4d2b-a258-7823a6e69767%3AGenerated_Image_December_10_2025_-_1_09PM.jpeg?id=2c5eedb4-bf7a-80ca-9ee4-f1daf4535657&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    },
                    {
                        no: "03",
                        title: "30種類以上の\n多彩なプログラム",
                        desc: "リラックス系からパワー系まで。その日の気分や目的に合わせて選べます。",
                        img: "https://spark-mule-706.notion.site/image/attachment%3Aeffeb0eb-3342-4c60-a7fe-a3ea45096dc8%3AGenerated_Image_December_10_2025_-_1_15PM.jpeg?id=2c4eedb4-bf7a-80ea-964b-fb34b290fd12&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    }
                ].map((item, idx) => (
                    <div key={idx} className="group cursor-default">
                        <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                            <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${idx < 2 ? 'opacity-80' : ''}`} />
                            <div className="absolute top-0 left-0 bg-primary text-white font-english font-bold text-xl px-4 py-3 rounded-br-2xl shadow-md">
                                POINT {item.no}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-3 whitespace-pre-line leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-text-sub text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Reason;
