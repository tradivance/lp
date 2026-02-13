"use client";

import React from 'react';

export const Campaign = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section className="py-6 md:py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <h2 className="text-lg md:text-xl font-bold text-text-main">開催中のキャンペーン</h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <a
                        href="#campaign"
                        className="block cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                        <img
                            src="https://spark-mule-706.notion.site/image/attachment%3A2ab9ec7c-0018-4b14-bc49-529f6c1aa705%3AGenerated_Image_December_09_2025_-_12_21AM.jpeg?id=2c3eedb4-bf7a-80d2-9e5c-cd817da700e6&table=block&spaceId=e3c35cc7-ca63-484d-b938-b247a18a3d59&width=2000&userId=&cache=v2"
                            alt="締切迫る！3ヶ月2,980円キャンペーン"
                            className="w-full h-auto rounded-3xl shadow-xl"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Campaign;
