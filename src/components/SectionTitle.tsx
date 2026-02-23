import React from 'react';

interface SectionTitleProps {
  en: string;
  ch: string;
  color?: string;
  align?: 'left' | 'center';
}

export const SectionTitle = ({ en, ch, color = "text-[#1A2B48]", align = "left" }: SectionTitleProps) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-5xl md:text-7xl font-bold font-display uppercase opacity-10 mb-[-20px] md:mb-[-30px] ml-[-2px] ${color}`}>
      {en}
    </h2>
    <h3 className={`text-2xl md:text-3xl font-bold relative z-10 ${color}`}>
      {ch}
    </h3>
    <div className={`w-12 h-1 bg-[#C5A059] mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);
