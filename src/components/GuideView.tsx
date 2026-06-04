/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Award, Users, Swords, Cpu, ChevronRight, HelpCircle, Flame, Gift } from "lucide-react";

export default function GuideView() {
  const steps = [
    {
      title: "Armor Class (AC) là gì?",
      desc: "Trọng hệ phòng thủ trong Lineage Classic tính theo chỉ số âm. Trị số AC càng âm thì khả năng né đòn vật lý của bạn càng tốt. Mục tiêu Kỵ sĩ lý tưởng là đạt AC -60 đến -80."
    },
    {
      title: "Trọng lượng mang vác",
      desc: "Nếu mang quá 50% tải trọng vật phẩm, cơ thể bạn sẽ dừng tự động hồi phục máu (HP) và năng lượng (MP). Trên 82% bạn sẽ không thể ra đòn tấn công. Hãy mang tẩu thoát cuộn giấy để khứ hồi kịp lúc."
    },
    {
      title: "Cường hóa trang bị (Enchanting)",
      desc: "Sử dụng cuộn giấy hồi quang ma lực để đập giáp (+4 an toàn) và đập kiếm (+6 an toàn). Đập vượt an toàn có tỷ lệ bốc hơi khói bay mất hoàn toàn trang bị."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs opacity-80 uppercase tracking-widest">
        <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
        <ChevronRight size={12} className="opacity-40" />
        <span className="text-primary font-medium">Bí kíp Hướng dẫn</span>
      </nav>

      <header className="border-l-4 border-primary pl-6 py-2">
        <h1 className="font-display-lg text-4xl text-primary font-bold">
          Cẩm nang Đại lục Lineage Classic
        </h1>
        <p className="text-on-surface-variant font-body-md max-w-2xl text-sm italic">
          Bản hướng dẫn kiến thức nền tảng và cơ chế chỉ số của Lineage phiên bản sơ khai độc quyền bằng tiếng Việt.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Mechanics */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-headline-lg text-2xl text-on-surface flex items-center gap-3">
            <Swords className="text-[#CD7F32]" size={24} />
            Cơ chế game cốt lõi
          </h2>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-surface-container border border-outline-variant/30 p-5 rounded-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#CD7F32]"></div>
                <h3 className="font-headline-md text-base sm:text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm font-body-md leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Server Specs & Community */}
        <div className="bg-surface-container border border-outline/30 p-6 rounded shadow-xl space-y-6">
          <h2 className="font-headline-lg text-xl text-primary border-b border-outline-variant/30 pb-3 flex items-center gap-2">
            <Users className="text-primary" size={20} />
            Đội ngũ đóng góp
          </h2>

          <div className="space-y-4 text-sm font-body-md leading-relaxed text-on-surface-variant">
            <p>
              Dự án dịch thuật <strong className="text-on-surface">Lineage Vietnamese Encyclopedia (LVE)</strong> được phát động từ tháng 12 năm 2024 bởi cộng đồng yêu mến Lineage Classic tại Việt Nam.
            </p>
            
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/20 space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-on-surface">Chủ nhiệm dự án:</span>
                <span className="text-primary">Lão Hạc Lính Thủy</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-on-surface">Biên phiên âm:</span>
                <span className="text-primary">Tiền bối Aden KR</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-on-surface">Lập trình cơ sở:</span>
                <span className="text-primary">Gemini AI Studio Core</span>
              </div>
            </div>

            <p className="text-xs">
              Mọi ý kiến đóng góp xin gửi về Group chat Discord hoặc Diễn đàn Lineage Việt để chúng tôi tinh chỉnh thuật ngữ sát nhất với bản gốc Hàn Quốc NCSoft.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
