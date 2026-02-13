"use client";

import React from 'react';

export const Plan = () => {
    const plans = [
        {
            title: "マンスリー4",
            price: "6,800",
            desc: "週1ペースで\n通いたい方",
            features: ["1店舗限定", "月4回まで", "まずはここから"],
            recommend: false
        },
        {
            title: "プライムフリー",
            price: "16,800",
            desc: "KIKIを最大限\n楽しみたい方へ",
            features: ["全店舗利用OK", "通い放題", "バスタオル無料"],
            recommend: true,
            tag: "オススメ！"
        },
        {
            title: "ライトプラン",
            price: "6,800",
            desc: "決まった店舗で\nいつでも通いたい方",
            features: ["2店舗利用OK", "月4回まで", "自分のペースで"],
            recommend: false
        }
    ];

    return (
        <section className="py-12 md:pt-20 md:pb-[188px] bg-white relative overflow-hidden rounded-tl-[50px] md:rounded-tl-[100px]" id="price">
            {/* 背景画像 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://spark-mule-706.notion.site/image/attachment%3A9a8aac9e-5350-4192-b5c6-b95571da5276%3A3abaeff5-a909-41ea-a588-702ca8d01aa2.jpeg?id=2c4eedb4-bf7a-8003-9c48-f9003c61cb87&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                    alt="Studio Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-[800px] md:max-w-6xl">
                <div className="text-center mb-[64px]">
                    <span className="relative inline-block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
                        PLAN
                    </span>
                    <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main">
                        KIKIの選べる料金プラン
                    </h2>
                    <p className="mt-4 font-medium text-[16px] md:text-[18px] leading-[1.8]">
                        ライフスタイルに合わせて選べる<br className="md:hidden" />3つのプラン！
                    </p>
                </div>

                {/* プラン一覧 */}
                <div className="flex flex-col md:flex-row items-center md:items-end gap-[24px] md:gap-[28px] mb-[64px]">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`
                relative w-full md:flex-1 rounded-[20px] text-center overflow-hidden flex flex-row md:flex-col
                ${plan.recommend
                                    ? 'bg-[#fee2e3] border-[4px] border-[var(--color-red)] pt-[55px] md:pt-[60px] pb-[18px] px-[10px] md:px-[13px] order-first md:order-none'
                                    : 'bg-white border border-[var(--color-orange3)] px-[18px] md:px-[23px] py-[18px]'}
              `}
                        >
                            {/* オススメ！ラベル */}
                            {plan.recommend && (
                                <div className="absolute top-[10px] md:top-0 left-[10%] md:left-0 w-[80%] md:w-full bg-[var(--color-red)] text-white text-[14px] md:text-[20px] font-bold py-[3px] md:py-[7px] min-h-[30px] rounded-[20px] md:rounded-none z-10 shadow-sm leading-[1.3]">
                                    オススメ！
                                </div>
                            )}

                            {/* リード文 */}
                            <div className={`
                flex items-center justify-center font-bold text-[18px] leading-[1.4] whitespace-pre-wrap w-[50%] md:w-full px-1 md:px-0 border-b-0 md:border-b
                ${plan.recommend
                                    ? 'text-[var(--color-red)] border-[var(--color-red)] pb-0 md:pb-[12px] mb-0 md:mb-[12px] min-h-[auto] md:min-h-[5.5em]'
                                    : 'text-[var(--color-orange3)] border-[var(--color-orange3)] pb-0 md:pb-[12px] mb-0 md:mb-[12px] min-h-[5.5em]'}
              `}>
                                {plan.desc}
                            </div>

                            {/* ボディ (スマホレイアウト調整用: 全プラン統一) */}
                            <div className="flex flex-col md:flex-col items-center md:items-stretch w-[50%] md:w-full gap-2 md:gap-0">
                                {/* タイトル */}
                                <h3 className={`
                  flex items-center justify-center text-[14px] md:text-[16px] font-normal whitespace-pre-wrap leading-[1.1] mb-0 w-full md:w-full border-l ${plan.recommend ? 'border-[var(--color-red)]' : 'border-[var(--color-orange3)]'} md:border-none pl-[12px] md:pl-0 ml-[12px] md:ml-0 md:h-[3em] md:mb-0
                `}>
                                    {plan.title}
                                </h3>

                                {/* 価格エリア */}
                                <div className={`
                flex flex-col items-center justify-center w-full md:w-full h-auto md:h-[6em] gap-[4px] md:gap-0
              `}>
                                    <span className="block text-[12px]">月会費</span>
                                    <div className="flex items-center justify-end md:justify-center text-text-main leading-[1.3] text-[26px] md:text-[24px]">
                                        <span className="text-[16px]">¥</span>
                                        <span className="font-english font-bold tracking-tight">{plan.price}</span>
                                        <span className="text-[10px] md:text-[10px] font-normal ml-1 self-end mb-1">(税込)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ボタンエリア */}
                <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[64px]">
                    <div className="relative inline-block px-[20px] mb-[8px] text-[18px] font-medium text-[var(--color-orange3)] text-center leading-[140%] 
             before:content-[''] before:absolute before:bottom-[-4%] md:before:bottom-[-7%] before:left-0 before:w-[10px] before:h-[14px] before:bg-[url('/common/images/buttons-tittle-left.svg')] before:bg-cover before:translate-y-[-50%]
             after:content-[''] after:absolute after:bottom-[-4%] md:after:bottom-[-7%] after:right-0 after:w-[10px] after:h-[14px] after:bg-[url('/common/images/buttons-tittle-right.svg')] after:bg-cover after:translate-y-[-50%]">
                        入会後も自由にコース変更OK
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <a
                            href="#reservation"
                            className="relative flex justify-center items-center w-full md:w-auto min-w-[250px] md:min-w-[250px] h-[48px] px-[25px] py-[11px] mb-[16px] text-[16px] font-bold bg-white outline outline-1 outline-[var(--color-orange3)] rounded-[50px] text-[var(--color-orange3)] cursor-pointer transition-colors duration-600 hover:bg-[#ffe0b2] group"
                        >
                            <span className="relative inline-block pr-[20px] before:absolute before:top-1/2 before:right-0 before:w-[10px] before:h-[10px] before:mt-[-6px] before:border-t-2 before:border-r-2 before:border-[var(--color-orange3)] before:rotate-45 before:transition-all before:duration-600 group-hover:before:right-[-5px]">
                                0円体験を予約する
                            </span>
                        </a>
                        <a href="/price" className="text-text-sub hover:text-primary text-sm font-bold border-b border-text-sub hover:border-primary transition-colors pb-0.5">
                            料金プランを詳しく見る
                        </a>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Plan;
