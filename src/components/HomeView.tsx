/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, Compass, Swords, Shield, Heart, Skull, Zap, ChevronRight, Award, Flame, User, Map } from "lucide-react";
import { ITEMS_DATA, MONSTERS_DATA } from "../data";
import { Item, Monster } from "../types";

interface HomeViewProps {
  onNavigate: (tab: string, searchQuery?: string) => void;
  onMonsterSelect: (monsterId: string) => void;
  onItemSelect: (itemId: string) => void;
}

export default function HomeView({ onNavigate, onMonsterSelect, onItemSelect }: HomeViewProps) {
  const [localSearch, setLocalSearch] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      // Intelligently route search query to either Items or Monsters
      // By default redirect to Items with the searchQuery
      onNavigate("items", localSearch.trim());
    }
  };

  // Static stats matching mockups
  const stats = [
    { value: "465", label: "Vật phẩm", query: "items" },
    { value: "231", label: "Quái vật / NPC", query: "monsters" },
    { value: "103", label: "Kỹ năng", query: "skills" }
  ];

  // Base categories matching Screen 1 image cards
  const categories = [
    {
      key: "items",
      title: "Items",
      desc: "Vũ khí, giáp trụ và vật phẩm tiêu hao chiến tộc.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBZD9LRVhhCD82mYKKkrPI0CyoHSQdgyzAFwzXPZ9ibYrnugihpVqpLLdWdM3LD4F6ajqs1P0IbWD6A-ZX2i6m3kueiQitndDAKAeRkpECrJ1lyMEWRfLBwvWzozb_thaB03SQ7RzrpCrLtfgAbNuAHoZCZNPUhoM3PDX1RPcg-RyUrsL8ZavAzhoYr-gTP9SbcdOHTiOMen4S4I-tFcun5q3fuFD_nCCXadLhJAjuMiIM_w0Xph41C1z8-rZEADfT6IEn6pZeJ3M",
      icon: Swords,
      color: "text-secondary"
    },
    {
      key: "monsters",
      title: "Monsters",
      desc: "Chỉ số, cấp độ quái vật và chiến lợi phẩm rơi.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZFJssyITc74Y912qp7R02sa_yVzg8e3pMjYl_D-5TEvPU5PkxH5NU32wxDk-Ogz6cjpkheHbXUlIomlIpUcbNOcTjJmnYp80ywfnnkzJgGGlgqccT-gBKK1lg78acTStbXACXnfexzR7JZzvTPljGn09WDkEvABYtAup37cQ-d3CfLOrhbJHY0lfYpsEl5d_SPmSsxbYxuCp0QKuXaoWTkfC-aUiimT-jl2p9kxtEiRU0v0TvijsGSB4vXqXjrQcwbzlFDgqdI6s",
      icon: Skull,
      color: "text-error"
    },
    {
      key: "skills",
      title: "Skills",
      desc: "Bí kíp pháp môn, ma pháp và võ học thần sầu.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHUxi9rbguAHJRwjTU-orCyGvlOipp5FQo1GvJnzp3fs1N6_85kZdHfEZMT1it-b408T4F8wGjyMAXqQKgKzhpakjn9e1gsykQYJWBX0-12dukGY7zE10nYd0Gh5RIWb9iYth-V8RWq1hGb6hKvZz090nv5DNN8O0Ps9A45jqYEKWkmOq25y5UX6dRtXu8-H1GLeJ49bycukgikoSa5tuIuXSYjqtZj0bvgFPkIQt8KsvSZJa9gfoovjgcNikUPdjU6QT0i39qk1Y",
      icon: Flame,
      color: "text-primary"
    },
    {
      key: "map",
      title: "Map & Guide",
      desc: "Lãnh thổ thế giới Aden và các hầm ngục cổ vương.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfFNOOG3bEHmqa8hPXIqUSw39OhzsUR749Y4nEBXyRUAtlYAagrMRwxlDH0OR3PZ3xORz2vLo8RpPv1s1WFMe6x8GQuh2YSQwncM00hmW_PHe3CDV1xqJH7uzLStsYzdxKAK1DjRYTrRvBFRIhGpS-B0gTJ0VgeaU8IE_2_9ZvBuRAyng9O_OWZTFxdbKO2GeTDSX8f_JwDQA44uMBjmKJDiwWOBqgDgMsoDrPa0BMmTK4DefOIl7IX56fClhBIY9-bsTGjiM3Mrw",
      icon: Map,
      color: "text-tertiary"
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[580px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 overflow-hidden -mt-20 border-b border-outline-variant/20 pb-16">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.06]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx47xK4QIY7OqjvZr0N3Qpo9PxAiSKSwGK25a3K0AVLkHkRHo_Hu36QCU_JZVPVzwHYNl86TjGuVr0ONo72M_Szhbyp9TkadOSUYKuO3VCrCCIycCtu_XEXwoX7zw5LUfuyLPmJe2geTNjQPDG5VAmjE1ejfbyVbPXsObQTBM-sdoT9W0IKU0vbH5D7qxApD0F8giCs_Irtq9slY3kQLDtTDKdE5Fye_3JnXHRK52dBwICIWnM6yFvch10teXc9eFK8nRVvZcI49o"
            alt="Ancient Library Background"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        {/* Vertical Detail Rail */}
        <div className="col-span-1 hidden md:flex flex-col justify-between py-6 h-full min-h-[300px] z-10 self-stretch border-r border-outline-variant/30 pr-4">
          <div className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[0.4em] font-medium text-on-surface-variant/50">
            Aden Chronicles / Classic Database
          </div>
          <div className="w-px h-16 bg-outline-variant/40 mx-auto my-4"></div>
          <div className="text-[12px] font-serif italic text-center text-on-surface-variant/60">
            &copy;26
          </div>
        </div>

        {/* Central Typographic Focus + Search bar */}
        <div className="col-span-11 relative z-10 max-w-4xl space-y-6 md:pl-8 text-left">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-primary">
            Lineage<br/>
            <span className="md:ml-12 font-serif italic font-light lowercase text-secondary">Vietnamese</span><br/>
            Encyclopedia
          </h1>
          
          <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Kho dữ liệu Lineage Classic Hàn Quốc dành cho cộng đồng game thủ Việt. Hãy tra cứu hệ thống của đại lục bảo tàng di sản Aden cổ xưa.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mt-8">
            <div className="bg-surface-container-low border border-outline-variant p-1 shadow-sm rounded flex items-center group focus-within:border-primary transition-all">
              <Search className="text-secondary ml-4 shrink-0" size={20} />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full bg-transparent border-0 focus:ring-0 text-on-surface font-body-lg text-base py-3.5 px-4 placeholder:text-on-surface-variant/40 outline-none"
                placeholder="Tìm vật phẩm, quái vật, kỹ năng..."
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/95 text-on-primary font-bold px-6 py-3 rounded text-xs uppercase tracking-widest cursor-pointer transition-all active:scale-95 shrink-0"
              >
                TRUY VẤN
              </button>
            </div>
          </form>

          {/* Quick Access Tokens */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            <button 
              onClick={() => onNavigate("items")}
              className="px-4 py-1.5 border border-outline-variant hover:border-primary rounded-full text-on-surface-variant hover:text-primary font-label-sm text-[10px] uppercase tracking-widest transition-all cursor-pointer hover:bg-surface-container"
            >
              Tra vật phẩm
            </button>
            <button 
              onClick={() => onNavigate("monsters")}
              className="px-4 py-1.5 border border-outline-variant hover:border-primary rounded-full text-on-surface-variant hover:text-primary font-label-sm text-[10px] uppercase tracking-widest transition-all cursor-pointer hover:bg-surface-container"
            >
              Tra quái vật
            </button>
            <button 
              onClick={() => onNavigate("skills")}
              className="px-4 py-1.5 border border-outline-variant hover:border-primary rounded-full text-on-surface-variant hover:text-primary font-label-sm text-[10px] uppercase tracking-widest transition-all cursor-pointer hover:bg-surface-container"
            >
              Tra kỹ năng
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(stat.query)}
              className="border border-outline-variant/60 bg-surface-container-low p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group active:scale-98 hover:bg-surface-container"
            >
              <span className="font-sans text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid (Danh Mục Căn Bản) */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        <h2 className="font-sans text-xs uppercase tracking-[0.25em] font-black text-on-surface mb-8 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-outline-variant/40"></span>
          Danh Mục Căn Bản
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.key}
                onClick={() => onNavigate(cat.key === "map" ? "map" : cat.key)}
                className="group relative aspect-[3/4] border border-outline-variant/40 overflow-hidden cursor-pointer flex flex-col justify-end transition-all hover:border-primary"
              >
                {/* Background Shadow Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all z-10 duration-300"></div>
                <img
                  src={cat.bgImage}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />
                
                {/* Text Context */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent z-20">
                  <IconComponent className={`${cat.color} mb-3 group-hover:animate-pulse`} size={44} />
                  <h3 className="font-display-lg text-2xl text-white">{cat.title}</h3>
                  <p className="text-zinc-300 font-body-md text-xs sm:text-sm mt-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Section (Khu vực nổi bật) */}
      <section className="bg-surface-container-low border-y border-outline-variant/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="font-sans text-xs uppercase tracking-[0.25em] font-black text-primary">Khu vực nổi bật</h2>
              <p className="text-on-surface-variant font-body-md text-xs mt-1.5 opacity-80">Dữ liệu bối cảnh và mạo hiểm được truy cập nhiều nhất tuần qua.</p>
            </div>
            <button 
              onClick={() => onNavigate("items")}
              className="text-primary font-label-sm text-[11px] uppercase tracking-widest hover:line-through cursor-pointer flex items-center gap-1 active:translate-x-1 transition-transform"
            >
              Xem tất cả &mdash;
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Featured Items Left */}
            <div className="space-y-6">
              <h3 className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest border-l-2 border-primary pl-4">
                Vật phẩm mới cập nhật
              </h3>
              
              <div className="space-y-4">
                {/* Shield of Aden card */}
                <div 
                  onClick={() => {
                    const item = ITEMS_DATA.find(i => i.id === "shield-aden") || ITEMS_DATA[2];
                    onItemSelect(item.id);
                  }}
                  className="flex items-center gap-4 p-4 border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-secondary-container/20 flex items-center justify-center text-secondary border border-outline-variant/20">
                    <Shield size={28} className="stroke-[1.5]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors text-base">
                        Tấm khiên của Aden
                      </h4>
                      <span className="border border-[#9F2B36]/20 text-[#9F2B36] font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider">
                        ARMOR
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                      Phòng thủ: 35 | Cấp độ yêu cầu: 50
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Katana card */}
                <div 
                  onClick={() => {
                    const item = ITEMS_DATA.find(i => i.id === "katana") || ITEMS_DATA[0];
                    onItemSelect(item.id);
                  }}
                  className="flex items-center gap-4 p-4 border border-outline-variant/30 rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-secondary-container/20 flex items-center justify-center text-secondary border border-outline-variant/20">
                    <Swords size={28} className="stroke-[1.5]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors text-base">
                        Katana (Đao Nhật Bản)
                      </h4>
                      <span className="border border-[#9F2B36]/20 text-[#9F2B36] font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider">
                        WEAPON
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                      Chính xác cận chiến +1 | Sát thương: 12/10
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>

            {/* Featured Monsters Right */}
            <div className="space-y-6">
              <h3 className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest border-l-2 border-[#9F2B36] pl-4">
                Quái vật huyền thoại
              </h3>
              
              <div className="space-y-4">
                {/* Antharas */}
                <div 
                  onClick={() => onMonsterSelect("antharas")}
                  className="flex items-center gap-4 p-4 border border-outline-variant/30 rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-error-container/10 flex items-center justify-center text-[#9F2B36] border border-outline-variant/20">
                    <Award size={28} className="stroke-[1.5]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors text-base">
                        Antharas (An-ta-ras)
                      </h4>
                      <span className="border border-[#9F2B36]/20 text-[#9F2B36] font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider">
                        BOSS
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                      Địa điểm: Dragon Valley | Cấp độ: 80+ cổ long
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Orc (or Sói Tuyết) */}
                <div 
                  onClick={() => onMonsterSelect("orc")}
                  className="flex items-center gap-4 p-4 border border-outline-variant/30 rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-outline-variant/10 flex items-center justify-center text-on-surface-variant border border-outline-variant/20">
                    <Skull size={28} className="stroke-[1.5]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors text-base">
                        Quái Nhân Orc
                      </h4>
                      <span className="border border-outline-variant/50 text-on-surface-variant font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider">
                        ELITE
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                      Địa điểm: Đảo Nói Chuyện | Cấp độ: Lv 2 phổ thông
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
