import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { PageType } from '../constants';

interface CorporatePageProps {
  onNavigate: (page: PageType) => void;
}

export const CorporatePage = ({ onNavigate }: CorporatePageProps) => (
  <div className="min-h-screen pt-24 bg-[#F0F2F5] fade-in">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-gray-300">
         <div>
            <span className="text-[#1A2B48] font-bold tracking-widest uppercase text-xs mb-2 block">Corporate Solutions</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-[#1A2B48]">WORKPLACE<br/>WELLNESS.</h1>
         </div>
         <p className="text-gray-500 max-w-md text-right md:text-left mt-8 md:mt-0">
            分層級的精準健康策略，滿足不同職級的生理與心理需求。從基層疼痛緩解，到高階決策效能優化。
         </p>
      </div>

      <div className="space-y-4">
        {[
          { title: "WORKSHOP", ch: "員工集體講座", target: "For All Employees", desc: "人體工學基礎教育 / 辦公室微運動教學" },
          { title: "CORE TRAINING", ch: "中階主管核心班", target: "For Managers", desc: "抗壓姿勢調整 / 精力管理與恢復" },
          { title: "EXECUTIVE", ch: "高階客製顧問", target: "For C-Level", desc: "隱私健康檢測 / 專屬復位運動處方" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-[#C5A059]">
             <div className="flex items-center gap-8 w-full md:w-1/2">
                <span className="text-4xl font-display font-bold text-gray-200 group-hover:text-[#1A2B48] transition-colors">0{idx+1}</span>
                <div>
                   <h3 className="text-2xl md:text-3xl font-bold text-[#1A2B48]">{item.title}</h3>
                   <span className="text-sm text-gray-500 tracking-wider uppercase">{item.ch}</span>
                </div>
             </div>
             <div className="w-full md:w-1/3 mt-4 md:mt-0">
                <p className="text-gray-500 text-sm border-l border-gray-200 pl-4">{item.desc}</p>
             </div>
             <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-end">
                <div className="w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center group-hover:bg-[#1A2B48] group-hover:text-white transition-colors">
                   <ArrowRight size={20} />
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-[#1A2B48] p-12 md:p-24 text-center text-white">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your team?</h2>
         <p className="text-gray-400 mb-8 max-w-xl mx-auto">我們提供免費的企業健康需求評估，協助您找出最適合的導入模式。</p>
         <Button variant="gold" className="mx-auto" onClick={() => onNavigate('contact')}>
            BOOK A CONSULTATION
         </Button>
      </div>
    </div>
  </div>
);
