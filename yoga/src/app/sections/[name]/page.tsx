"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';

// Sections
import Hero from '@/components/sections/Hero';
import Campaign from '@/components/sections/Campaign';
import Plan from '@/components/sections/Plan';
import StudioSearch from '@/components/sections/StudioSearch';
import Reason from '@/components/sections/Reason';
import Voice from '@/components/sections/Voice';
import TrialFlow from '@/components/sections/TrialFlow';

const sections: { [key: string]: React.ComponentType<any> } = {
    Hero,
    Campaign,
    Plan,
    StudioSearch,
    Reason,
    Voice,
    TrialFlow,
};

export default function SectionPreview({ params }: { params: Promise<{ name: string }> }) {
    const { name } = use(params);

    const SectionComponent = sections[name];

    if (!SectionComponent) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <SectionComponent />
        </main>
    );
}
