import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { PAGES, PageType } from '../constants';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const [activeCoach, setActiveCoach] = useState<number | null>(null);

  const coaches = [
    { 
      name: "Edward 周家慶", 
      title: "日野脊椎回復永和總店店長", 
      tags: "Store Manager",
      image: "https://hinomethod.com.tw/wp-content/uploads/elementor/thumbs/%E6%95%99%E7%B7%B4%E7%85%A7%E7%89%87_ed-qwaysc9lsrztllznurorc13lfdxjwcdvuw62rcz9nk.jpg",
      bio: ["日野脊椎回復術 高級教練認證", "專長：結構調整與深層放鬆", "豐富的店務管理與臨床經驗"]
    },
    { 
      name: "Sahrina 徐惠貞", 
      title: "日野脊椎回復術初階教練認證", 
      tags: "L1 Coach",
      image: "https://hinomethod.com.tw/wp-content/uploads/elementor/thumbs/%E6%95%99%E7%B7%B4%E7%85%A7%E7%89%87_sb-qwaysd7fzm13x7yapa3dwiv20rsx41hm70tk8mxvhc.jpg",
      bio: ["專注於初階脊椎回復技術", "協助學員改善日常姿勢不良", "細心且具備同理心的指導風格"]
    },
    { 
      name: "Olivia", 
      title: "日野脊椎回復術初階教練認證", 
      tags: "L1 Coach",
      image: "https://hinomethod.com.tw/wp-content/uploads/elementor/thumbs/%E6%95%99%E7%B7%B4%E7%85%A7%E7%89%87_06-qwk2xygexty1281xmrpmielo7o4ccymgev5ypqt9k0.jpg",
      bio: ["整合瑜伽與脊椎力學", "擅長引導呼吸與身體覺察", "針對女性族群的柔軟度與力量平衡"]
    },
    { 
      name: "Vivian 林妍儀", 
      title: "教練培訓部門主任", 
      tags: "L2 Coach / Director",
      image: "https://hinomethod.com.tw/wp-content/uploads/elementor/thumbs/%E6%95%99%E7%B7%B4%E7%85%A7%E7%89%87_05-qwk2ufk7b74biv697quznsmg0nhshtmoxf3exe1ew0.jpg",
      bio: ["日野脊椎回復術 中階個人顧問認證教練", "負責內部教練培訓與考核", "專長：高階動作控制與教學法"]
    },
    { 
      name: "TIM", 
      title: "日野脊椎回復術初階教練認證", 
      tags: "L1 Coach",
      image: "https://hinomethod.com.tw/wp-content/uploads/elementor/thumbs/%E6%95%99%E7%B7%B4%E7%85%A7%E7%89%87_04-qwk2xxikqzwqqm3as9azxwu7ma8z59iq2qih8gunq8.jpg",
      bio: ["運動科學背景出身", "結合肌力訓練與脊椎保健", "擅長幫助運動愛好者預防傷害"]
    },
  ];

  return (
    <div className="fade-in">
      <div className="relative h-screen w-full overflow-hidden bg-[#F0F2F5]">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
             alt="Hero Background" 
             className="w-full h-full object-cover filter grayscale contrast-125 opacity-90"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B48]/90 via-[#1A2B48]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col justify-center">
           <div className="max-w-4xl space-y-6 fade-in fade-in-delay-1">
             <div className="inline-block px-3 py-1 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
                Medical x Performance
             </div>
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter">
                ORIGIN<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SPINE.</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg leading-relaxed pl-2 border-l-4 border-[#C5A059]">
                驅動效能的根源。<br/>
                <span className="text-sm md:text-base text-gray-400 mt-2 block">
                  我們協助企業打造高韌性團隊，並賦能專業人士掌握脊椎力學的奧義。
                </span>
             </p>
           </div>
           
           <div className="absolute bottom-12 right-6 md:right-12 flex gap-4 text-white/50 text-xs font-mono tracking-widest rotate-0 md:rotate-0">
              <span>SCROLL TO EXPLORE</span>
              <span className="animate-bounce">↓</span>
           </div>
        </div>
      </div>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
             <div className="lg:col-span-7 relative">
                <SectionTitle en="PHILOSOPHY" ch="核心理念" />
                <p className="text-gray-600 text-lg leading-relaxed mb-20">
                  大多數的慢性疼痛都源於「失去中軸」。我們不是創造新的運動，而是喚醒身體本自具足的能力。透過重建大腦對脊椎中軸的感知，讓每一次的呼吸、每一個動作，都回到最省力、最高效的軌道上。
                </p>

                <div className="mb-16">
                   <h3 className="text-2xl md:text-3xl font-bold text-[#1A2B48] mb-4 tracking-widest">健康脊椎、自我調理三步驟</h3>
                   <p className="text-gray-500 mb-16 leading-relaxed">
                      讓脊椎回到原廠設定，恢復身體的自動修復功能，讓各種症狀得到改善
                   </p>

                   <div className="grid sm:grid-cols-3 gap-8 md:gap-6 text-left">
                      <div className="relative mt-8 sm:mt-0">
                         <div className="absolute -top-14 left-4 bg-white px-3 z-10">
                            <span className="text-[80px] md:text-[100px] font-display font-bold text-[#C5A059] leading-none">1</span>
                         </div>
                         <div className="border border-gray-300 rounded-xl p-6 pt-16 h-full relative z-0">
                            <h4 className="text-xl font-bold text-[#1A2B48] mb-3">舒緩</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">放鬆肌肉韌帶組織、擴張關節可動區域</p>
                         </div>
                      </div>
                      
                      <div className="relative mt-16 sm:mt-0">
                         <div className="absolute -top-14 left-4 bg-white px-3 z-10">
                            <span className="text-[80px] md:text-[100px] font-display font-bold text-[#C5A059] leading-none">2</span>
                         </div>
                         <div className="border border-gray-300 rounded-xl p-6 pt-16 h-full relative z-0">
                            <h4 className="text-xl font-bold text-[#1A2B48] mb-3">矯正</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">透過運動、使各脊骨回到原廠設定</p>
                         </div>
                      </div>

                      <div className="relative mt-16 sm:mt-0">
                         <div className="absolute -top-14 left-4 bg-white px-3 z-10">
                            <span className="text-[80px] md:text-[100px] font-display font-bold text-[#C5A059] leading-none">3</span>
                         </div>
                         <div className="border border-gray-300 rounded-xl p-6 pt-16 h-full relative z-0">
                            <h4 className="text-xl font-bold text-[#1A2B48] mb-3">肌力訓練</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">強化椎骨周圍肌群、維持脊椎正位、解決肌少問題。</p>
                         </div>
                      </div>
                   </div>
                </div>

                <Button variant="outline" className="w-fit" onClick={() => onNavigate(PAGES.ABOUT)}>
                  READ OUR STORY <ArrowRight size={16} />
                </Button>
             </div>

             <div className="lg:col-span-5 h-full relative mt-12 lg:mt-0">
                <div className="lg:sticky lg:top-32 w-full h-[50vh] lg:h-[calc(100vh-16rem)] min-h-[500px] image-hover-zoom">
                   <img 
                     src="https://hinomethod.com.tw/wp-content/uploads/2024/10/20240923_%E6%97%A5%E9%87%8E%E5%AE%98%E7%B6%B2_banner-03.jpg" 
                     alt="Philosophy" 
                     className="w-full h-full object-cover object-right"
                     referrerPolicy="no-referrer"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 min-h-[80vh]">
         <div 
           className="relative group overflow-hidden bg-gray-100 cursor-pointer h-[50vh] md:h-auto"
           onClick={() => onNavigate(PAGES.CORPORATE)}
         >
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-50"
             alt="Corporate"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-[#1A2B48]/10 group-hover:bg-[#1A2B48]/60 transition-colors duration-300"></div>
           <div className="relative h-full flex flex-col justify-center items-center text-center p-12 z-20">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-[#1A2B48] group-hover:text-white transition-colors mb-4">
                FOR BUSINESS
              </h3>
              <p className="text-[#1A2B48] group-hover:text-gray-200 tracking-widest uppercase text-sm font-bold border-t border-current pt-4">
                企業解決方案
              </p>
              <ArrowUpRight className="mt-8 opacity-0 group-hover:opacity-100 transition-all text-[#C5A059]" size={48} />
           </div>
         </div>

         <div 
           className="relative group overflow-hidden bg-[#1A2B48] cursor-pointer h-[50vh] md:h-auto"
           onClick={() => onNavigate(PAGES.PROFESSIONAL)}
         >
            <img 
             src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-30"
             alt="Professional"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
           <div className="relative h-full flex flex-col justify-center items-center text-center p-12 z-20">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                FOR PROS
              </h3>
              <p className="text-gray-400 group-hover:text-[#C5A059] tracking-widest uppercase text-sm font-bold border-t border-current pt-4">
                專業培訓認證
              </p>
              <ArrowUpRight className="mt-8 opacity-0 group-hover:opacity-100 transition-all text-[#C5A059]" size={48} />
           </div>
         </div>
      </section>

      <section className="py-24 bg-white">
         <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
               <div className="py-8 md:py-0">
                  <span className="block text-6xl md:text-7xl font-display font-bold text-[#1A2B48] mb-2">92%</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">疼痛緩解率</span>
               </div>
               <div className="py-8 md:py-0">
                  <span className="block text-6xl md:text-7xl font-display font-bold text-[#1A2B48] mb-2">3x</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">投資回報率 (ROI)</span>
               </div>
               <div className="py-8 md:py-0">
                  <span className="block text-6xl md:text-7xl font-display font-bold text-[#1A2B48] mb-2">500+</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">專業認證教練</span>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-[#F9F9F9] border-t border-gray-200">
         <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <SectionTitle en="SPECIALISTS" ch="特約專家" />
            <p className="text-gray-500 mb-8 max-w-2xl">
               我們由物理治療師、運動科學家與資深教練組成的跨領域團隊。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {coaches.map((coach, idx) => {
                 const isExpanded = activeCoach === idx;
                 return (
                   <div 
                    key={idx} 
                    className="relative group cursor-pointer"
                   >
                      <div 
                        className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            setActiveCoach(isExpanded ? null : idx);
                          }
                        }}
                      >
                         <img 
                            src={coach.image} 
                            alt={coach.name} 
                            className="w-full h-full object-cover object-top transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                         />
                         
                         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1A2B48] via-[#1A2B48]/80 to-transparent p-6 pt-12 text-white transition-opacity duration-300 group-hover:opacity-0 md:group-hover:opacity-0">
                            <span className="text-xs font-bold text-[#C5A059] mb-1 block tracking-widest uppercase">{coach.tags}</span>
                            <h4 className="text-xl font-bold">{coach.name}</h4>
                            <p className="text-sm text-gray-300 line-clamp-1">{coach.title}</p>
                            <div className="md:hidden absolute bottom-6 right-6">
                               {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                         </div>

                         <div className="hidden md:flex absolute inset-0 bg-[#1A2B48]/95 flex-col justify-center items-center text-center p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                             <span className="text-xs font-bold text-[#C5A059] mb-2 block tracking-widest uppercase">{coach.tags}</span>
                             <h4 className="text-2xl font-bold text-white mb-2">{coach.name}</h4>
                             <p className="text-sm text-gray-300 mb-6">{coach.title}</p>
                             <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                {coach.bio.map((item, i) => (
                                   <li key={i}>{item}</li>
                                ))}
                             </ul>
                             <span className="text-xs font-bold text-white border-b border-[#C5A059] pb-1">VIEW PROFILE</span>
                         </div>
                      </div>

                      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h5 className="font-bold text-[#1A2B48] mb-3 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Professional Bio</h5>
                             <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                                {coach.bio.map((item, i) => (
                                   <li key={i}>{item}</li>
                                ))}
                             </ul>
                         </div>
                      </div>
                   </div>
                 );
               })}
            </div>
         </div>
      </section>
    </div>
  );
};
