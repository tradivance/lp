"use client";

import React, { useState } from 'react';
import { Header, Footer, FixedFooter } from '@/components/layout/HeaderFooter';

// Sections
import Hero from '@/components/sections/Hero';
import Campaign from '@/components/sections/Campaign';
import Plan from '@/components/sections/Plan';
import StudioSearch from '@/components/sections/StudioSearch';
import Reason from '@/components/sections/Reason';
import Voice from '@/components/sections/Voice';
import TrialFlow from '@/components/sections/TrialFlow';

const sectionMap: { [key: string]: React.ComponentType<any> } = {
    Hero,
    Campaign,
    Plan,
    StudioSearch,
    Reason,
    Voice,
    TrialFlow,
};

export default function Playground() {
    const [selectedSections, setSelectedSections] = useState<string[]>(Object.keys(sectionMap));

    const toggleSection = (name: string) => {
        setSelectedSections(prev =>
            prev.includes(name)
                ? prev.filter(s => s !== name)
                : [...prev, name] // Simple append, but sorting might be needed to maintain order
        );
    };

    // Sort selected sections based on original definition order
    const sortedSections = Object.keys(sectionMap).filter(key => selectedSections.includes(key));

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-text-main antialiased pb-safe flex">
            {/* Sidebar Controls */}
            <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-50 p-4 shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-primary">Playground</h2>
                <p className="text-xs text-gray-500 mb-6">Select sections to display</p>

                <div className="space-y-3">
                    {Object.keys(sectionMap).map(name => (
                        <label key={name} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors">
                            <input
                                type="checkbox"
                                checked={selectedSections.includes(name)}
                                onChange={() => toggleSection(name)}
                                className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-sm font-medium">{name}</span>
                        </label>
                    ))}
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 ml-64">
                {/* Preview Content */}
                <div className="bg-white min-h-screen shadow-xl mx-auto max-w-[100%]">
                    <Header />
                    <main>
                        {sortedSections.map(name => {
                            const Component = sectionMap[name];
                            return <Component key={name} />;
                        })}
                    </main>
                    <Footer />
                    <FixedFooter />
                </div>
            </div>
        </div>
    );
}
