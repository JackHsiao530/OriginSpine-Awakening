import React from 'react';
import { Activity, Award, Building2 } from 'lucide-react';
import { Button } from '../components/Button';
import { PageType } from '../constants';

interface ProfessionalPageProps {
  onNavigate: (page: PageType) => void;
}

export const ProfessionalPage = ({ onNavigate }: ProfessionalPageProps) => (
  <div className="min-h-screen pt-24 bg-[#111] text-white fade-in">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <div className="relative border-b border-white/20 pb-12 mb-24">
         <div className="absolute top-0 right-0 p-4 border border-white/20 rounded-full animate-spin-slow hidden md:block">
            <Activity size={24} className="text-[#C5A059]" />
         </div>
         <h1 className="text-5xl md:text-8xl font-display font-bold mb-4">
            MASTER<br/>THE <span className="text-[#C5A059]">ORIGIN.</span>
         </h1>
         <p className="text-gray-400 text-lg max-w-2xl">
            賦能健身教練與物理治療師。掌握「脊源覺醒」的力學奧義，為您的學員提供更精準的動作優化與疼痛管理方案。
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
         <div className="group border border-white/10 p-12 hover:bg-white/5 transition-colors">
            <Award className="text-[#C5A059] w-12 h-12 mb-8" />
            <h3 className="text-3xl font-bold mb-4">CERTIFICATION</h3>
            <p className="text-gray-400 mb-8 leading-relaxed h-24">
               深入解析脊椎中軸對四肢發力的影響，學習如何透過「微調中軸」瞬間提升運動表現。
            </p>
            <ul className="space-y-4 mb-12 text-sm text-gray-300">
               <li className="flex gap-4 border-b border-white/10 pb-2"><span className="text-[#C5A059]">01</span> Origin Spine L1 動作指導員認證</li>
               <li className="flex gap-4 border-b border-white/10 pb-2"><span className="text-[#C5A059]">02</span> 脊椎力學與代償修正工作坊 (CEUs)</li>
            </ul>
            <Button variant="white" onClick={() => onNavigate('contact')}>APPLY NOW</Button>
         </div>

         <div className="group border border-white/10 p-12 hover:bg-white/5 transition-colors">
            <Building2 className="text-[#C5A059] w-12 h-12 mb-8" />
            <h3 className="text-3xl font-bold mb-4">PARTNERSHIP</h3>
            <p className="text-gray-400 mb-8 leading-relaxed h-24">
               將「脊源覺醒」系統導入您的健身房或物理治療所。我們提供完整的課程模組與行銷素材。
            </p>
            <ul className="space-y-4 mb-12 text-sm text-gray-300">
               <li className="flex gap-4 border-b border-white/10 pb-2"><span className="text-[#C5A059]">01</span> 品牌授權與行銷資源共享</li>
               <li className="flex gap-4 border-b border-white/10 pb-2"><span className="text-[#C5A059]">02</span> 定期駐點課程與內部培訓</li>
            </ul>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick={() => onNavigate('contact')}>LEARN MORE</Button>
         </div>
      </div>
    </div>
  </div>
);
