/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Map, Pin, Crosshair, ChevronRight, Info, Compass, ShieldAlert, Sparkles, Navigation } from "lucide-react";

interface Location {
  id: string;
  nameVi: string;
  nameEn: string;
  desc: string;
  coords: { x: string; y: string };
  level: string;
  type: "Safe Zone" | "Combat Zone" | "Boss Zone";
  monsters: string[];
}

export default function MapView() {
  const [selectedLocId, setSelectedLocId] = useState("desert");

  const locations: Location[] = [
    {
      id: "talking-island",
      nameVi: "Đảo Nói Chuyện",
      nameEn: "Singing Island (Talking Island)",
      desc: "Vùng đất khởi đầu lịch sử của các tân thủ. Nơi có lâu đài học viện ma thuật hoàng gia cổ xưa.",
      coords: { x: "25%", y: "78%" },
      level: "Level 1 - 15",
      type: "Safe Zone",
      monsters: ["Quái Nhân Orc", "Nấm Độc dã ngoại", "Bùn lầy Tinh thể"]
    },
    {
      id: "valley-dragons",
      nameVi: "Thung lũng Rồng",
      nameEn: "Valley of Dragons (Dragon Valley)",
      desc: "Lãnh địa chết chóc của các loài dực long xương và lũ dũng sĩ nguyền rủa. Đây là huyệt trú ẩn của Rồng đất Antharas.",
      coords: { x: "65%", y: "42%" },
      level: "Level 60 - 80+",
      type: "Boss Zone",
      monsters: ["Antharas", "Dực Long Xương", "Kỵ Sĩ Hắc Ám"]
    },
    {
      id: "elven-forest",
      nameVi: "Rừng Elf Tiên Tộc",
      nameEn: "Elven Forest",
      desc: "Khu bảo rừng được che chở bởi Đại Thần Mộc (Mother Tree). Nơi an bình duy nhất mang lại ánh sáng ma thuật vô tận.",
      coords: { x: "42%", y: "25%" },
      level: "Level 1 - 45",
      type: "Safe Zone",
      monsters: ["Hộ Thuật Tinh Linh", "Tiên Hoa Hoang dã", "Thần thú râu bạc"]
    },
    {
      id: "oren-castle",
      nameVi: "Lâu Đài Oren & Đền Thần",
      nameEn: "Oren Castle Town",
      desc: "Thành lũy phía Bắc nổi tiếng ngập tuyết lạnh giá, trung tâm phòng tuyến chống quái vật viễn chinh biên cương.",
      coords: { x: "70%", y: "15%" },
      level: "Level 50 - 70",
      type: "Combat Zone",
      monsters: ["Sói Tuyết Hoang", "Người Tuyết Gấu", "Băng Ma Tinh"]
    }
  ];

  const activeLoc = locations.find(l => l.id === selectedLocId) || locations[0];

  return (
    <div className="space-y-12">
      
      {/* Breadcrumb & Title */}
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs opacity-80 uppercase tracking-widest">
        <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
        <ChevronRight size={12} className="opacity-40" />
        <span className="text-primary font-medium">Bản đồ Aden Atlas</span>
      </nav>

      <header className="border-l-4 border-tertiary pl-6 py-2">
        <h1 className="font-display-lg text-4xl text-primary font-bold">
          Bản đồ Thế giới Aden
        </h1>
        <p className="text-on-surface-variant font-body-md max-w-2xl text-sm italic">
          Địa dư khảo tả lãnh thổ đế quốc Aden cổ đại. Các cứ điểm dã ngoại thần tốc và khu vực săn tìm ma thú bí truyền.
        </p>
      </header>

      {/* Map Board Component Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT: Simulated Map Grid Visual */}
        <div className="lg:col-span-8 relative">
          <div className="aspect-[16/9] w-full bg-surface-container-low border border-outline-variant/40 rounded-lg p-3 relative overflow-hidden shadow-2xl">
            
            {/* Dark grid background style */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d2023_1px,transparent_1px),linear-gradient(to_bottom,#1d2023_1px,transparent_1px)] bg-[size:40px_40px] opacity-35"></div>
            
            {/* Golden radial light glow in center */}
            <div className="absolute inset-0 bg-radial-gradient from-tertiary/5 via-transparent to-transparent"></div>
            
            {/* World Land Mass outline aesthetic shapes */}
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[250px] bg-emerald-950/10 blur-xl rounded-full border border-emerald-500/5 rotate-12"></div>
            <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[200px] bg-stone-900/40 blur-xl rounded-full border border-primary/5 -rotate-12"></div>

            {/* Render Pins Overcoords */}
            {locations.map((loc) => {
              const isSelected = selectedLocId === loc.id;
              
              const pinColor = 
                loc.type === "Safe Zone" 
                  ? "bg-emerald-500 text-emerald-100" 
                  : loc.type === "Boss Zone" 
                  ? "bg-error text-white" 
                  : "bg-tertiary text-on-tertiary";

              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocId(loc.id)}
                  style={{ left: loc.coords.x, top: loc.coords.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
                >
                  <div className={`p-2 rounded-full absolute -inset-2 animate-ping opacity-25 bg-current ${
                    isSelected ? "text-primary" : "text-on-surface-variant/40"
                  }`} />
                  
                  <div className={`p-2 rounded-full border transition-all duration-300 ${pinColor} ${
                    isSelected ? "scale-125 ring-4 ring-primary/40 shadow-2xl" : "hover:scale-110"
                  }`}>
                    <Navigation size={14} className="rotate-45" />
                  </div>
                  
                  {/* Floating tooltip hover name */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-background border border-outline-variant p-2 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity z-40 w-max pointer-events-none text-[11px] font-bold">
                    {loc.nameVi} ({loc.level})
                  </div>
                </button>
              );
            })}

            {/* Compass label at lower left */}
            <div className="absolute bottom-6 left-6 text-on-surface-variant/40 font-label-sm text-xs flex items-center gap-2 select-none">
              <Compass className="animate-[spin_40s_linear_infinite]" size={28} />
              <div>
                <p className="font-bold tracking-widest text-[#CD7F32]">ADEN ATLAS</p>
                <p className="text-[10px]">COORDINATE RANGE GRIDS: SCALE 1:120000</p>
              </div>
            </div>

            {/* Safe zone indicators in legend */}
            <div className="absolute top-6 right-6 bg-surface-container/80 backdrop-blur border border-outline-variant/30 px-3 py-2 rounded text-[10px] space-y-1.5 select-none font-bold">
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>Safe Zone (Khu an toàn)</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-tertiary block"></span>Combat Zone (Hỗn chiến)</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-error block"></span>Boss Zone (Lãnh thổ thủ lĩnh)</div>
            </div>

          </div>
        </div>

        {/* RIGHT: Detailed location telemetry sidebar */}
        <div className="lg:col-span-4 bg-surface-container border border-outline/30 p-6 rounded shadow-xl flex flex-col justify-between">
          <div className="space-y-6">
            <header className="border-b border-outline-variant/30 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase ${
                  activeLoc.type === "Safe Zone" ? "bg-emerald-500/10 text-emerald-400" : "bg-error/10 text-error"
                }`}>
                  {activeLoc.type}
                </span>
                <span className="text-[#CD7F32] font-mono text-xs font-bold">{activeLoc.level}</span>
              </div>
              <h2 className="font-display-lg text-2xl text-primary">{activeLoc.nameVi}</h2>
              <p className="text-on-surface-variant font-label-sm text-xs italic">{activeLoc.nameEn}</p>
            </header>

            <div className="space-y-4">
              <p className="text-on-surface font-body-md text-sm leading-relaxed">
                {activeLoc.desc}
              </p>

              {/* Monster listings in region */}
              <div className="space-y-2 pt-2">
                <p className="font-label-sm text-xs text-primary uppercase tracking-widest">
                  Sinh vật dã thú cư ngụ tiêu biểu:
                </p>
                <div className="space-y-1.5">
                  {activeLoc.monsters.map((monster, i) => (
                    <div key={i} className="flex items-center gap-2 text-on-surface-variant font-body-md text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span>
                      <span>{monster}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant/30 mt-6 text-on-surface-variant/60 text-xs font-body-md flex items-center gap-2">
            <Info size={14} className="text-primary shrink-0" />
            <span>Sử dụng bản đồ để thám thính dã ngoại Aden Classic. Click chọn các ghim vị trí để cập nhật chi tiết.</span>
          </div>
        </div>

      </div>

    </div>
  );
}
