"use client";

import React from 'react';

export const TrialFlow = () => (
    <section className="relative pt-[120px] pb-[70px] md:pb-[100px] mb-[40px] md:mb-[0] bg-gradient-to-br from-[#fff7e6] to-[#fff] rounded-tl-[100px] mt-[120px]">
        {/* 装飾フィギュア (参考CSSにあるが画像がないため、配置だけ再現して非表示状態にするか、placeholder) */}
        {/* 
    <div className="absolute top-[-100px] left-[50%] w-[650px] height-[370px] bg-[url(/images/figure-trial.webp)] bg-cover rounded-tl-[50px] rounded-bl-[50px] z-10 md:block hidden"></div>
     */}

        <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
            <div className="text-center mb-[64px]">
                <span className="relative block mb-4 pl-[25px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:absolute before:top-[0.4em] before:left-0 before:block before:content-[''] before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
                    Trial Flow
                </span>
                <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main">
                    体験レッスンの流れ
                </h2>
                <p className="mt-4 font-medium text-[16px] md:text-[18px] leading-[1.8]">
                    初めてでも安心！<br className="md:hidden" />60分でホットヨガの魅力を体験できます
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[12px] mb-[64px]">
                {[
                    {
                        step: "01",
                        title: "WEBで予約",
                        text: (
                            <>
                                PC・スマートフォンから<span className="text-[var(--color-orange3)] font-bold">24時間いつでも予約可能</span>です。
                            </>
                        ),
                        img: "https://spark-mule-706.notion.site/image/attachment%3A15f3d657-13e9-46b9-91dc-2dce2eda2b13%3AGenerated_Image_December_10_2025_-_2_23PM.jpeg?id=2c5eedb4-bf7a-8063-8db7-f1465d0c5d9c&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    },
                    {
                        step: "02",
                        title: "来店・受付",
                        text: (
                            <>
                                <span className="text-[var(--color-orange3)] font-bold">レッスン30分前</span>のご来店をお願いいたします。レッスンの説明と簡単なカウンセリングをさせていただきます。
                            </>
                        ),
                        img: "https://spark-mule-706.notion.site/image/attachment%3A1c1b29f1-831b-4116-b7b9-5017ee57578e%3AGenerated_Image_December_10_2025_-_2_04PM.jpeg?id=2c5eedb4-bf7a-80c2-95b1-ece6caf90e53&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    },
                    {
                        step: "03",
                        title: "レッスン参加",
                        text: (
                            <>
                                <span className="text-[var(--color-orange3)] font-bold">ヨガ初心者の方がほとんど</span>。体が硬い方、体力に自信がない方でも無理のない内容のため安心です。
                            </>
                        ),
                        img: "https://spark-mule-706.notion.site/image/attachment%3A703a7ef0-8e6a-4982-b9b0-14ee0939b78d%3AGenerated_Image_December_10_2025_-_2_01PM.jpeg?id=2c5eedb4-bf7a-80bb-8cd5-f942fada18ad&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    },
                    {
                        step: "04",
                        title: "レッスン終了後",
                        text: (
                            <>
                                汗をかいて<span className="text-[var(--color-orange3)] font-bold">心も体もスッキリ</span>。パウダールーム・ロッカールームとシャワーをご利用いただけます。
                            </>
                        ),
                        img: "https://spark-mule-706.notion.site/image/attachment%3A682620cf-1137-470d-a61f-d59bff8c0109%3AGenerated_Image_December_10_2025_-_2_16PM.jpeg?id=2c5eedb4-bf7a-8071-a7d8-e9a1db6cb5a3&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    }
                ].map((item, idx) => (
                    <div key={idx} className={`flex md:block md:flex-1 gap-[32px] md:gap-0 group md:hover:-translate-y-2 transition-transform duration-700`}>
                        {/* Step Number */}
                        <div className={`
              relative text-[var(--color-orange3)] mb-[15px]
              before:content-[''] before:absolute before:bg-[var(--color-orange3)]
              md:before:right-0 md:before:bottom-[10px] md:before:w-[82%] md:before:h-[1px]
              max-md:before:left-[13px] max-md:before:bottom-[0] max-md:before:w-[1px] max-md:before:h-[88%]
              ${idx === 3 ? 'md:before:hidden max-md:before:hidden' : ''}
            `}>
                            <span className="flex flex-col items-start font-english text-[24px] font-semibold leading-[1] w-[35px] md:w-[35px]">
                                <small className="block mb-[3px] text-[10px]">STEP</small>
                                {item.step}
                            </span>
                        </div>

                        <div className="flex-1 md:pr-[7px]">
                            <div className="bg-white rounded-[20px] overflow-hidden flex md:block">
                                <div className="w-[100px] md:w-full h-[100px] md:h-auto md:aspect-[432/280] leading-[0]">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 p-[16px] md:p-[20px] md:min-h-[170px]">
                                    <h3 className="text-[16px] md:text-[18px] font-bold text-[var(--color-orange3)] mb-[8px] md:mb-[15px] md:text-center leading-[1.35]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[13px] md:text-[14px] leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[64px]">
                <div className="flex flex-col items-center justify-center w-full">
                    <a
                        href="#reservation"
                        className="relative flex justify-center items-center w-full md:w-auto min-w-[250px] md:min-w-[250px] h-[48px] px-[25px] py-[11px] mb-[16px] text-[16px] font-bold bg-white outline outline-1 outline-[var(--color-orange3)] rounded-[50px] text-[var(--color-orange3)] cursor-pointer transition-colors duration-600 hover:bg-[#ffe0b2] group"
                    >
                        <span className="relative inline-block pr-[20px] before:absolute before:top-1/2 before:right-0 before:w-[10px] before:h-[10px] before:mt-[-6px] before:border-t-2 before:border-r-2 before:border-[var(--color-orange3)] before:rotate-45 before:transition-all before:duration-600 group-hover:before:right-[-5px]">
                            今すぐ体験予約する
                        </span>
                    </a>
                    <p className="mt-4 text-xs text-text-sub">※体験レッスンはお一人様1回限り</p>
                </div>
            </div>
        </div>
    </section>
);

export default TrialFlow;
