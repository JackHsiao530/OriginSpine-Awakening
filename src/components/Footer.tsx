import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { PAGES, PageType } from '../constants';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="bg-[#111] text-white pt-24 pb-12 border-t border-white/10">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-12 md:gap-24 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-none">
            REDEFINING<br />
            <span className="text-[#C5A059]">BODY CONTROL.</span>
          </h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            我們致力於將醫療級的脊椎照護科學帶入職場與專業領域。透過教育與訓練，打造更具韌性的健康文化。
          </p>
        </div>
        
        <div>
          <h5 className="font-display font-bold text-lg tracking-widest mb-6 border-b border-white/20 pb-2">SITEMAP</h5>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><button onClick={() => onNavigate(PAGES.HOME)} className="hover:text-white transition-colors uppercase tracking-wider">Home</button></li>
            <li><button onClick={() => onNavigate(PAGES.ABOUT)} className="hover:text-white transition-colors uppercase tracking-wider">Philosophy</button></li>
            <li><button onClick={() => onNavigate(PAGES.CORPORATE)} className="hover:text-white transition-colors uppercase tracking-wider">Corporate</button></li>
            <li><button onClick={() => onNavigate(PAGES.PROFESSIONAL)} className="hover:text-white transition-colors uppercase tracking-wider">Professional</button></li>
          </ul>
        </div>

        <div>
           <h5 className="font-display font-bold text-lg tracking-widest mb-6 border-b border-white/20 pb-2">CONTACT</h5>
           <ul className="space-y-4 text-gray-400 text-sm">
             <li className="flex items-start gap-4">
                <MapPin size={16} className="mt-1 text-[#C5A059]" />
                <span>台北市信義區...<br/>(Appointment Only)</span>
             </li>
             <li className="flex items-center gap-4">
                <Mail size={16} className="text-[#C5A059]" />
                <span>service@hinomethod.com.tw</span>
             </li>
             <li className="flex items-center gap-4">
                <Phone size={16} className="text-[#C5A059]" />
                <span>02-1234-5678</span>
             </li>
           </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/10 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 ORIGIN SPINE. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
