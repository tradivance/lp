import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const ButtonPrimary = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void; }) => (
  <button 
    onClick={onClick}
    className={`
      bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-dark
      text-white font-bold py-4 px-10 rounded-full shadow-lg 
      transition-all duration-300 flex items-center justify-center gap-2 
      transform hover:scale-105 active:scale-95 text-lg tracking-wide
      ${className}
    `}
  >
    {children}
    <div className="bg-white/20 rounded-full p-1">
      <ArrowRight className="w-5 h-5" />
    </div>
  </button>
);

export const ButtonOutline = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void; }) => (
  <button 
    onClick={onClick}
    className={`
      bg-white border-2 border-primary text-primary hover:bg-orange-50 
      font-bold py-3.5 px-8 rounded-full shadow-sm 
      transition-all duration-300 flex items-center justify-center gap-2 
      transform active:scale-95 ${className}
    `}
  >
    {children}
    <ChevronRight className="w-5 h-5" />
  </button>
);

export const SectionTitle = ({ en, ja, center = true }: { en: string; ja: string; center?: boolean; }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <span className="block font-sans text-primary text-sm md:text-base tracking-[0.2em] font-bold mb-2 font-english">
      {en.toUpperCase()}
    </span>
    <h2 className="text-2xl md:text-4xl font-bold text-text-main leading-relaxed">
      {ja}
    </h2>
    {center && <div className="w-16 h-1 bg-primary mx-auto mt-5 rounded-full opacity-80"></div>}
  </div>
);

export const Badge = ({ text }: { text: string }) => (
  <span className="bg-secondary text-white text-xs md:text-sm font-bold px-3 py-1 rounded-sm shadow-sm inline-block mb-2">
    {text}
  </span>
);