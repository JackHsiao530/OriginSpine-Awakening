import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../components/SectionTitle';

export const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen pt-24 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-12 border-b border-gray-200 mb-12"
        >
           <h1 className="text-6xl md:text-9xl font-display font-bold text-[#1A2B48] opacity-10 uppercase">Philosophy</h1>
           <motion.div 
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="mt-[-40px] md:mt-[-80px] ml-2 md:ml-4"
           >
              <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Core Value</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A2B48]">喚醒原生軸，<br/>找回身體的初始設定。</h2>
           </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-32">
          <motion.div 
            {...fadeInUp}
            className="space-y-8 text-lg text-gray-600 leading-relaxed font-light"
          >
             <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#1A2B48]">
               在多年的臨床物理治療與運動訓練現場，我們觀察到一個普遍的現象：許多人在接受治療時症狀緩解，但回到職場或訓練場後，舊傷卻反覆發作。
             </p>
             <p>
               問題的根源往往不在患部本身，而是「身體的使用方式」出了問題。當脊椎中軸失去了應有的穩定性，四肢與關節就必須代償發力，久而久之形成了慢性的耗損。
             </p>
             <div className="p-8 bg-[#F9F9F9] border-l-4 border-[#1A2B48]">
                <h4 className="font-bold text-[#1A2B48] mb-2">THE HINO METHOD</h4>
                <p className="text-sm text-gray-500">
                  結合生物張拉整體 (Biotensegrity) 與神經傳導優化。我們不只放鬆肌肉，更透過「深層感覺」的喚醒，重建大腦與脊椎的連結路徑。
                </p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
             <div className="image-hover-zoom rounded-lg transform translate-y-12 shadow-lg z-10">
               <img 
                 src="https://hinomethod.com.tw/wp-content/uploads/2024/10/DSC_6320_%E4%BF%AE-e1730262104315.jpg" 
                 className="w-full h-[300px] md:h-[400px] object-cover"
                 alt="Philosophy 1" 
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="image-hover-zoom rounded-lg shadow-lg">
               <img 
                 src="https://hinomethod.com.tw/wp-content/uploads/2024/10/77318032-B80D-4095-B743-F2F7A58EDCB4-e1730092445901.jpg" 
                 className="w-full h-[300px] md:h-[400px] object-cover"
                 alt="Philosophy 2" 
                 referrerPolicy="no-referrer"
               />
             </div>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-0 border-t border-gray-200"
        >
           {[
             { num: "01", title: "AXIS", sub: "中軸穩定", desc: "脊椎不僅是支撐結構，更是力量傳導的高速公路。" },
             { num: "02", title: "TENSION", sub: "張拉整體", desc: "人體不是堆疊的磚塊，而是充滿張力的連續體。" },
             { num: "03", title: "SENSE", sub: "深層感覺", desc: "改變動作模式的關鍵在於大腦對身體的本體感覺。" }
           ].map((item, idx) => (
             <motion.div 
               key={idx} 
               variants={fadeInUp}
               className="p-12 border-r border-b border-gray-200 hover:bg-[#1A2B48] group transition-colors duration-500"
             >
                <span className="text-6xl font-display font-bold text-gray-100 group-hover:text-white/10 transition-colors">{item.num}</span>
                <h3 className="text-2xl font-bold text-[#1A2B48] mt-4 mb-2 group-hover:text-white">{item.title}</h3>
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-6">{item.sub}</span>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </motion.div>
      </div>

      <div className="bg-white py-24 border-t border-gray-200 text-[#1A2B48]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
           <motion.div {...fadeInUp}>
             <SectionTitle en="DISCOVERY" ch="革命性的發現" />
           </motion.div>
           
           <motion.div 
             {...fadeInUp}
             className="flex flex-col lg:flex-row gap-6 mb-12"
           >
              <div className="lg:w-2/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12">
                 <h3 className="text-2xl font-bold mb-6 tracking-wide">1.代償姿勢作用</h3>
                 <p className="text-[#4B5563] leading-relaxed text-justify">
                    薦骨是一大型三角形骨是整條脊椎的地基，連接腰椎第五，在我們出生時由5塊可動的薦椎所組成，在18至30歲，融合成一塊骨頭。30歲前容易因受傷或姿勢不良，造成地基偏移。若薦骨移位，在其上方的脊椎骨，為了保持平衡會跟著歪斜。薦骨若向後方偏移，上方的腰椎骨也會後移，頭部和肩膀會為了保持平衡而前傾，背部因此拱起造成駝背，這樣就稱為代償姿勢作用。
                 </p>
              </div>
              <div className="lg:w-1/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12 flex items-center justify-center gap-8 bg-gray-50">
                 <div className="text-2xl font-bold leading-snug tracking-widest">
                    代償姿勢<br/>作用
                 </div>
                 <svg viewBox="0 0 120 120" className="w-28 h-28">
                    <path d="M 30 100 C 30 60, 60 40, 60 40 C 75 30, 85 45, 80 55" fill="none" stroke="#4B5563" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="85" cy="35" r="16" fill="none" stroke="#4B5563" strokeWidth="6"/>
                    <path d="M 30 100 L 50 100 M 30 100 L 15 100" stroke="#4B5563" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="55" cy="50" r="3.5" fill="#C5A059"/>
                    <circle cx="48" cy="65" r="3.5" fill="#C5A059"/>
                    <circle cx="42" cy="80" r="3.5" fill="#C5A059"/>
                    <circle cx="38" cy="95" r="3.5" fill="#C5A059"/>
                    <path d="M 80 20 L 100 10 L 105 25 M 100 10 L 90 25" fill="#C5A059"/>
                    <path d="M 75 25 L 100 10" fill="none" stroke="#C5A059" strokeWidth="6" strokeLinecap="round"/>
                 </svg>
              </div>
           </motion.div>

           <motion.div 
             {...fadeInUp}
             className="flex flex-col-reverse lg:flex-row gap-6 mb-12"
           >
              <div className="lg:w-1/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12 flex items-center justify-center gap-8 bg-gray-50">
                 <div className="text-2xl font-bold leading-snug tracking-widest">
                    神經牽拉<br/>效應
                 </div>
                 <svg viewBox="0 0 120 120" className="w-28 h-28">
                    <rect x="40" y="25" width="35" height="18" rx="6" transform="rotate(-10 60 35)" fill="#6B7280"/>
                    <rect x="42" y="55" width="35" height="18" rx="6" transform="rotate(-5 62 65)" fill="#6B7280"/>
                    <rect x="45" y="85" width="35" height="18" rx="6" fill="#6B7280"/>
                    <rect x="48" y="115" width="30" height="15" rx="6" fill="#6B7280"/>
                    <path d="M 25 60 Q 45 50, 85 55" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M 90 35 Q 85 70, 95 100" fill="none" stroke="#D97706" strokeWidth="3"/>
                    <path d="M 100 30 L 75 40 L 90 50 Z" fill="#C5A059"/>
                    <path d="M 110 35 L 85 40" stroke="#C5A059" strokeWidth="10" strokeLinecap="square"/>
                 </svg>
              </div>
              <div className="lg:w-2/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12">
                 <h3 className="text-2xl font-bold mb-6 tracking-wide">2.神經牽拉效應</h3>
                 <p className="text-[#4B5563] leading-relaxed text-justify">
                    因薦骨偏移而造成的脊椎代償姿勢，會使得神經受拉扯，引發各種不適及併發症，不但會感到～痠麻痛～或活動不良，且無法將器官的狀況，反應給大腦進行有效的修復，我們稱為神經傳導異常。
                 </p>
              </div>
           </motion.div>

           <motion.div 
             {...fadeInUp}
             className="flex flex-col lg:flex-row gap-6 mb-32"
           >
              <div className="lg:w-2/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12">
                 <h3 className="text-2xl font-bold mb-6 tracking-wide">3.薦髂關節可動原理</h3>
                 <p className="text-[#4B5563] leading-relaxed text-justify">
                    西方醫學普遍認為成人的薦骨是無法移動的。但透過日野薦髂關節回復運動，可將歪斜的薦骨矯正回原廠位置，不但解除其他脊柱的代償偏移，同時修復因偏移所造成的神經牽拉傳導異常。除了消除所有疼痛，還能恢復身體自癒力。
                 </p>
              </div>
              <div className="lg:w-1/3 border border-[#D1D5DB] rounded-xl p-8 lg:p-12 flex items-center justify-center gap-8 bg-gray-50">
                 <div className="text-2xl font-bold leading-snug tracking-widest">
                    薦髂關節<br/>可動原理
                 </div>
                 <svg viewBox="0 0 120 120" className="w-28 h-28">
                    <path d="M 50 40 C 30 20, 10 30, 20 60 C 25 70, 15 85, 15 100 C 25 100, 30 85, 30 75 C 35 90, 40 85, 40 70 Z" fill="#C5A059"/>
                    <path d="M 70 40 C 90 20, 110 30, 100 60 C 95 70, 105 85, 105 100 C 95 100, 90 85, 90 75 C 85 90, 80 85, 80 70 Z" fill="#C5A059"/>
                    <path d="M 52 35 L 68 35 L 60 70 Z" fill="#C5A059"/>
                    <circle cx="60" cy="45" r="2" fill="#F9FAFB"/>
                    <circle cx="60" cy="55" r="2" fill="#F9FAFB"/>
                    <path d="M 48 35 Q 52 45, 52 55" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M 72 35 Q 68 45, 68 55" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M 45 20 Q 60 5, 75 20" fill="none" stroke="#6B7280" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M 75 20 L 65 15 M 75 20 L 70 28" fill="none" stroke="#6B7280" strokeWidth="4" strokeLinecap="round"/>
                 </svg>
              </div>
           </motion.div>

           <div className="mb-32">
              <motion.h3 
                {...fadeInUp}
                className="text-3xl font-bold text-center mb-16 tracking-widest"
              >
                健康脊椎自己矯，四大功能
              </motion.h3>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
              >
                 {[
                    { num: "1", text: "矯正薦骨偏移" },
                    { num: "2", text: "解除代償姿勢" },
                    { num: "3", text: "修復神經傳導" },
                    { num: "4", text: "強化椎圍肌力" }
                 ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className="relative mt-8 lg:mt-0"
                    >
                       <div className="absolute -top-12 left-6 bg-white px-3 z-10">
                          <span className="text-[80px] font-display font-bold text-[#C5A059] leading-none">{item.num}</span>
                       </div>
                       <div className="border border-[#D1D5DB] rounded-xl p-8 pt-16 pb-12 h-full relative z-0 flex items-center justify-center">
                          <h4 className="text-xl font-bold text-[#1A2B48]">{item.text}</h4>
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
              <motion.p 
                {...fadeInUp}
                className="mt-16 text-center text-[#4B5563] max-w-4xl mx-auto leading-relaxed"
              >
                 讓脊椎回到原廠設定，舒緩各種疼痛，恢復身體的自動修復功能，讓各種症狀得到改善，期待盡快能幫助您遠離身體痛苦，回復脊椎原廠設定，讓身心健康、延年益壽！
              </motion.p>
           </div>

           <div>
              <motion.h3 
                {...fadeInUp}
                className="text-3xl font-bold text-center mb-6 tracking-widest"
              >
                健康脊椎、自我調理三步驟
              </motion.h3>
              <motion.p 
                {...fadeInUp}
                className="text-center text-[#4B5563] mb-16 leading-relaxed"
              >
                 讓脊椎回到原廠設定，恢復身體的自動修復功能，讓各種症狀得到改善
              </motion.p>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
              >
                 {[
                    { num: "1", title: "舒緩", desc: "放鬆肌肉韌帶組織、擴張關節可動區域" },
                    { num: "2", title: "矯正", desc: "透過運動、使各脊骨回到原廠設定" },
                    { num: "3", title: "肌力訓練", desc: "強化椎骨周圍肌群、維持脊椎正位、解決肌少問題。" }
                 ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className="relative mt-12 md:mt-0"
                    >
                       <div className="absolute -top-12 left-6 bg-white px-3 z-10">
                          <span className="text-[80px] md:text-[100px] font-display font-bold text-[#C5A059] leading-none">{item.num}</span>
                       </div>
                       <div className="border border-[#D1D5DB] rounded-xl p-8 pt-16 pb-12 h-full relative z-0">
                          <h4 className="text-2xl font-bold text-[#1A2B48] mb-4">{item.title}</h4>
                          <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};
