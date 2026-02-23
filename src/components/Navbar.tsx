import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PAGES, PageType } from '../constants';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightPage = ([PAGES.ABOUT, PAGES.CORPORATE, PAGES.CONTACT] as PageType[]).includes(currentPage);
  const isDarkText = isScrolled || isLightPage || mobileMenuOpen;
  
  const textColorClass = isDarkText ? 'text-[#1A2B48]' : 'text-white';
  const subTextColorClass = isDarkText ? 'text-gray-500' : 'text-white/80';
  const logoSubTextColorClass = isDarkText ? 'text-gray-500' : 'text-white/80';
  const buttonClass = isDarkText 
    ? 'border-[#1A2B48] text-[#1A2B48] hover:bg-[#1A2B48] hover:text-white' 
    : 'border-white text-white hover:bg-white hover:text-[#1A2B48]';

  const navLinks = [
    { name: 'HOME', ch: '首頁', target: PAGES.HOME },
    { name: 'ABOUT', ch: '關於我們', target: PAGES.ABOUT },
    { name: 'CORPORATE', ch: '企業方案', target: PAGES.CORPORATE },
    { name: 'PROFESSIONAL', ch: '專業培訓', target: PAGES.PROFESSIONAL },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => onNavigate(PAGES.HOME)}
          >
            <span className={`text-2xl font-display font-bold tracking-tighter leading-none ${isDarkText ? 'text-[#1A2B48]' : 'text-white'}`}>
              ORIGIN SPINE
            </span>
            <span className={`text-xs tracking-[0.3em] font-light ${logoSubTextColorClass}`}>
              AWAKENING
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <button 
                key={link.target} 
                onClick={() => onNavigate(link.target)}
                className="group flex flex-col items-center"
              >
                <span className={`font-display text-sm font-medium tracking-widest ${textColorClass} group-hover:text-[#C5A059] transition-colors`}>
                  {link.name}
                </span>
                <span className={`text-[10px] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${subTextColorClass}`}>
                  {link.ch}
                </span>
              </button>
            ))}
            <button 
              onClick={() => onNavigate(PAGES.CONTACT)}
              className={`border px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white ${buttonClass}`}
            >
              Contact
            </button>
          </div>

          <button 
            className={`lg:hidden z-50 p-2 ${textColorClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center`}>
         <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <button 
                key={link.target} 
                onClick={() => { onNavigate(link.target); setMobileMenuOpen(false); }}
                className="text-4xl font-display font-bold text-[#1A2B48] hover:text-[#C5A059] transition-colors"
              >
                {link.name}
                <span className="block text-sm font-sans font-normal text-gray-400 mt-2 tracking-widest">{link.ch}</span>
              </button>
            ))}
            <button 
                onClick={() => { onNavigate(PAGES.CONTACT); setMobileMenuOpen(false); }}
                className="text-4xl font-display font-bold text-[#1A2B48] hover:text-[#C5A059] transition-colors"
              >
                CONTACT
                <span className="block text-sm font-sans font-normal text-gray-400 mt-2 tracking-widest">聯絡我們</span>
            </button>
         </div>
      </div>
    </>
  );
};
