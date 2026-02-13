"use client";

import React from 'react';
import { ButtonPrimary } from '@/components/ui/UiParts';

export const Hero = () => (
    <section className="relative pt-20">
        <div className="relative w-full h-[600px] md:h-[700px] bg-gray-100 overflow-hidden group">
            <img
                src="https://spark-mule-706.notion.site/image/attachment%3Ac22e76f7-2730-4e78-9aa7-91562df788bf%3AGenerated_Image_December_09_2025_-_2_52PM.jpeg?id=2c4eedb4-bf7a-80ff-9f5b-e343ef9d090c&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                alt="Hero Background"
                className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="max-w-xl space-y-6 animate-fade-in">
                        <h1 className="text-text-main font-bold leading-tight drop-shadow-sm">
                            <span className="block text-primary text-xl md:text-3xl mb-4 font-english tracking-widest">
                                HOT YOGA STUDIO KIKI
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl mb-2">
                                それは、<br />人生のための
                            </span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl text-primary">
                                1時間。
                            </span>
                        </h1>
                        <p className="text-text-main text-base md:text-xl font-medium leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm md:bg-transparent md:backdrop-blur-none md:p-0 md:border-none md:shadow-none">
                            全国<span className="text-primary font-bold text-2xl mx-1">450</span>店舗以上展開。<br className="md:hidden" />
                            <span className="font-bold">80%以上</span>が未経験からスタート。<br />
                            今なら<span className="font-bold text-primary border-b-2 border-primary">手ぶら体験0円</span>キャンペーン実施中！
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <ButtonPrimary className="w-full sm:w-auto px-16 py-5 text-xl shadow-xl ring-4 ring-orange-100 animate-pulse-slow">
                                0円体験を予約する
                            </ButtonPrimary>
                        </div>
                        <p className="text-xs text-text-sub font-medium bg-white/80 inline-block px-3 py-1.5 rounded shadow-sm">
                            ※キャンペーン期間: 2025年12月31日まで
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
