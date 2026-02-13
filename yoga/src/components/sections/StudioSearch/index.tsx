"use client";

import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const StudioSearch = () => (
    <section className="py-12 md:pt-20 md:pb-[188px] bg-white relative">
        {/* Studio Image - Desktop Position matching reference */}
        <div className="absolute hidden md:block top-[-100px] left-[50%] w-[550px] h-[310px] z-0">
            <img
                src="https://spark-mule-706.notion.site/image/attachment%3A8ee7339a-8d10-4e72-a641-9132df306dd9%3AGenerated_Image_December_09_2025_-_1_07PM.jpeg?id=2c4eedb4-bf7a-8042-86a7-d9287ed7775b&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                alt="Studio Atmosphere"
                className="w-full h-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
            />
        </div>
        {/* Studio Image - Mobile Position (Simplified adaptation) */}
        <div className="md:hidden relative w-full h-[200px] mb-8 overflow-hidden rounded-r-[50px] ml-[-20px] w-[90%]">
            <img
                src="https://spark-mule-706.notion.site/image/attachment%3A8ee7339a-8d10-4e72-a641-9132df306dd9%3AGenerated_Image_December_09_2025_-_1_07PM.jpeg?id=2c4eedb4-bf7a-8042-86a7-d9287ed7775b&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                alt="Studio Atmosphere"
                className="w-full h-full object-cover"
            />
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="w-full md:w-[55%] text-center md:text-left mb-12 md:pl-24">
                <span className="relative inline-block md:block pl-[25px] mb-[16px] font-montserrat text-[18px] font-semibold text-[var(--color-orange3)] tracking-widest before:content-[''] before:absolute before:top-[0.4em] before:left-0 before:w-[8px] before:h-[8px] before:bg-[var(--color-orange2)] before:blur-[3px]">
                    STUDIO
                </span>
                <h2 className="text-[30px] md:text-[40px] font-bold tracking-wider leading-[1.3] text-text-main mb-8">
                    KIKIの店舗一覧
                </h2>

                <div className="text-text-main font-bold leading-relaxed mb-4">
                    <p className="text-xl md:text-2xl mb-2">
                        店舗数業界<span className="text-primary text-3xl md:text-4xl font-english mx-2 relative top-1 font-black">No.1</span><sup className="text-xs">※1</sup>
                    </p>
                    <p className="text-xl md:text-2xl">
                        全国選べる<span className="text-primary text-3xl md:text-4xl font-english mx-2 relative top-1 font-black">450店舗！</span>
                    </p>
                </div>

                <p className="text-[10px] text-gray-500 leading-tight md:max-w-md">
                    ※1 東京商工リサーチ調べ（2025年3月）
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-3 rounded-full shadow-xl flex items-center mb-16 border border-gray-200 transition-all hover:shadow-2xl focus-within:ring-4 focus-within:ring-orange-100 focus-within:border-primary">
                <Search className="text-gray-400 ml-4 w-6 h-6" />
                <input
                    type="text"
                    placeholder="店舗名・駅名で探す（例：新宿、渋谷）"
                    className="flex-1 px-4 py-3 outline-none text-text-main placeholder-gray-400 text-base bg-transparent"
                />
                <button className="bg-text-main hover:bg-gray-700 text-white font-bold py-3 px-10 rounded-full transition-colors shadow-md whitespace-nowrap">
                    検索
                </button>
            </div>
            <div className="max-w-5xl mx-auto">
                <h3 className="text-lg font-bold text-text-main mb-6 pl-2 border-l-4 border-primary">エリアから探す</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {['関東', '北海道・東北', '中部', '関西', '中国・四国', '九州・沖縄'].map((area, idx) => (
                        <button key={idx} className="bg-white hover:bg-orange-50 hover:border-orange-200 hover:text-primary py-4 px-4 rounded-xl shadow-sm border border-gray-200 font-bold text-text-main text-sm flex flex-col items-center justify-center gap-2 group transition-all duration-300 h-24">
                            <MapPin className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors mb-1" />
                            <span>{area}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default StudioSearch;
