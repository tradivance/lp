"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { ButtonPrimary } from '@/components/ui/UiParts';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md h-16' : 'bg-white h-20'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md z-10 relative">K</div>
            <div className="absolute inset-0 bg-primary rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-text-main leading-none font-english">KIKI</span>
            <span className="text-[10px] text-text-sub tracking-widest font-bold">HOT YOGA STUDIO</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {['はじめての方へ', '店舗を探す', '料金', 'プログラム'].map((item) => (
            <a key={item} href="#" className="text-text-main hover:text-primary font-bold text-sm transition-all relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex gap-3">
             <a href="#" className="border border-text-main text-text-main hover:bg-gray-100 font-bold py-2 px-4 rounded-full text-xs transition-colors">
              会員様ログイン
            </a>
            <a href="#" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1">
              体験予約 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>

        <button className="lg:hidden text-text-main p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-2 px-4">
          {['はじめての方へ', '店舗を探す', '料金', 'プログラム', '会員様ログイン', 'よくある質問'].map((item, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              <a href="#" className="block py-4 px-2 text-text-main font-bold hover:bg-orange-50 flex justify-between items-center transition-colors rounded-lg">
                {item}
                <ChevronRight size={16} className="text-primary" />
              </a>
            </li>
          ))}
          <li className="p-4 mt-2 pb-8">
            <ButtonPrimary className="w-full text-base shadow-lg">0円体験を予約する</ButtonPrimary>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-text-main text-white pt-20 pb-24 md:pb-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-700 pb-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg">L</div>
            <span className="text-2xl font-bold font-english">KIKI</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            ホットヨガスタジオKIKIは、<br/>
            「ヨガを通して、ひとりでも多くの人を幸せに」<br/>
            という想いをこめて、質の高いレッスン・心を込めたサービスを提供します。
          </p>
          <div className="flex gap-4">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-10 h-10 bg-gray-700 rounded-full hover:bg-primary transition-colors cursor-pointer flex items-center justify-center">
                 <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 text-sm">
          <div>
            <h5 className="font-bold text-white mb-4 text-base border-b border-primary inline-block pb-1">KIKIについて</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">はじめての方へ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">KIKIの想い</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">会社概要</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4 text-base border-b border-primary inline-block pb-1">プログラム</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">ホットヨガ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">マシンピラティス</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">スペシャルプログラム</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4 text-base border-b border-primary inline-block pb-1">会員様向け</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">レッスンスケジュール</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">オンラインストア</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">マイページ</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-white transition-colors">サイトご利用上の注意</a>
        </div>
        <p className="font-english">&copy; 2024 HOT YOGA STUDIO KIKI Clone.</p>
      </div>
    </div>
  </footer>
);

export const FixedFooter = () => (
  <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-50 shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)] pb-safe animate-slide-up">
    <ButtonPrimary className="w-full text-base py-3.5 shadow-lg">0円体験を予約する</ButtonPrimary>
  </div>
);