import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

export const ContactPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen pt-32 bg-white overflow-hidden">
       <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-24">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <SectionTitle en="CONTACT" ch="聯絡我們" />
                <p className="text-gray-500 mb-12 text-lg">
                   無論是企業內訓需求或專業課程諮詢，我們都樂意為您服務。請填寫右側表單，專員將於 24 小時內與您聯繫。
                </p>
                
                <div className="space-y-8">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#F0F2F5] flex items-center justify-center shrink-0">
                         <MapPin className="text-[#1A2B48]" />
                      </div>
                      <div>
                         <h4 className="font-bold text-[#1A2B48] mb-1">VISIT US</h4>
                         <p className="text-gray-500 text-sm">台北市信義區...<br/>(採預約制)</p>
                      </div>
                   </div>
                   
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#F0F2F5] flex items-center justify-center shrink-0">
                         <Mail className="text-[#1A2B48]" />
                      </div>
                      <div>
                         <h4 className="font-bold text-[#1A2B48] mb-1">EMAIL US</h4>
                         <p className="text-gray-500 text-sm">service@hinomethod.com.tw</p>
                      </div>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="bg-[#F9F9F9] p-12"
             >
                <form className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#1A2B48] uppercase tracking-widest">Name</label>
                         <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#1A2B48] outline-none transition-colors" placeholder="您的姓名" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-[#1A2B48] uppercase tracking-widest">Email</label>
                         <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#1A2B48] outline-none transition-colors" placeholder="電子郵件" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1A2B48] uppercase tracking-widest">Subject</label>
                      <select className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#1A2B48] outline-none transition-colors">
                         <option>企業健康方案 (Workshop)</option>
                         <option>專業教練認證 (Certification)</option>
                         <option>其他合作 (Others)</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1A2B48] uppercase tracking-widest">Message</label>
                      <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#1A2B48] outline-none transition-colors resize-none" placeholder="請輸入您的訊息..."></textarea>
                   </div>
                   <Button type="submit" className="w-full">SEND MESSAGE</Button>
                </form>
             </motion.div>
          </div>
       </div>
    </div>
  );
};
