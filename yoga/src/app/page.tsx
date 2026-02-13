import React from 'react';
import { Header, Footer, FixedFooter } from '@/components/layout/HeaderFooter';
import Hero from '@/components/sections/Hero';
import Campaign from '@/components/sections/Campaign';
import Plan from '@/components/sections/Plan';
import StudioSearch from '@/components/sections/StudioSearch';
import Reason from '@/components/sections/Reason';
import Voice from '@/components/sections/Voice';
import TrialFlow from '@/components/sections/TrialFlow';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-main antialiased pb-safe">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Campaign />
        <Plan />
        <StudioSearch />
        <Reason />
        <Voice />
        <TrialFlow />
      </main>
      <Footer />
      <FixedFooter />
    </div>
  );
}