/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Sparkles, Heart, Sun, Shield, Award, Zap, Flame, Skull, Shuffle, ChevronRight, Play, Info, AlertTriangle, BookOpen, Scaling, X } from "lucide-react";
import { SKILLS_DATA } from "../data";
import { Skill } from "../types";

// Class icon index helper
const selectClassIcon = (className: string) => {
  switch (className) {
    case "Quân chủ": return BookOpen;
    case "Kỵ sĩ": return Shield;
    case "Tiên tộc": return Sparkles;
    case "Pháp sư": return Flame;
    default: return Award;
  }
};

// Skill icon mapper helper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "Heart": return Heart;
    case "Sun": return Sun;
    case "Shield": return Shield;
    case "Scale": return Scaling;
    case "Zap": return Zap;
    case "Flame": return Flame;
    case "Skull": return Skull;
    case "Shuffle": return Shuffle;
    default: return Sparkles;
  }
};

export default function SkillsView() {
  const [selectedClass, setSelectedClass] = useState<string | null>("Tiên tộc"); // Matched back to Screen 3 default 'Tiên tộc' active
  const [mpFilter, setMpFilter] = useState("Tất cả");
  const [typeFilter, setTypeFilter] = useState("Tất cả");
  const [skillsLimit, setSkillsLimit] = useState(8);
  const [searchVal, setSearchVal] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Filter skills based on state variables
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      // 1. Text Search
      if (searchVal.trim()) {
        const query = searchVal.toLowerCase();
        const matchVi = skill.nameVi.toLowerCase().includes(query);
        const matchKr = skill.nameKr.toLowerCase().includes(query);
        const matchEn = skill.nameEn.toLowerCase().includes(query);
        if (!matchVi && !matchKr && !matchEn) return false;
      }

      // 2. Class filter buttons
      if (selectedClass) {
        if (!skill.classes.includes(selectedClass as any)) return false;
      }

      // 3. MP Cost Filter
      if (mpFilter !== "Tất cả") {
        if (mpFilter === "Dưới 20 MP" && skill.mpCost >= 20) return false;
        if (mpFilter === "21 - 50 MP" && (skill.mpCost < 21 || skill.mpCost > 50)) return false;
        if (mpFilter === "Trên 50 MP" && skill.mpCost <= 50) return false;
      }

      // 4. Action Type Filter
      if (typeFilter !== "Tất cả") {
        const key = typeFilter === "Tức thời (Instant)" ? "Instant" : typeFilter === "Duy trì (Duration)" ? "Duration" : "Passive";
        if (skill.type !== key) return false;
      }

      return true;
    });
  }, [selectedClass, mpFilter, typeFilter, searchVal]);

  const visibleSkills = filteredSkills.slice(0, skillsLimit);

  // Extend list size (Simulate 'Xem thêm' button)
  const handleLoadMore = () => {
    setSkillsLimit((prev) => prev + 4);
  };

  return (
    <div className="space-y-12">
      
      {/* Breadcrumb navigation */}
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs opacity-80 uppercase tracking-widest">
        <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
        <ChevronRight size={12} className="opacity-40" />
        <span className="text-primary font-medium">Kỹ năng</span>
      </nav>

      {/* Screen header matched to Screen 3 design */}
      <header className="border-l-4 border-primary pl-6 py-2">
        <h1 className="font-display-lg text-4xl sm:text-5xl text-primary font-bold mb-2">
          Danh sách Kỹ năng
        </h1>
        <p className="text-on-surface-variant font-body-md max-w-2xl italic opacity-85 text-sm sm:text-base leading-relaxed">
          Khám phá các bí kíp võ học và phép thuật cổ xưa của đại lục Aden. Nơi sức mạnh được định hình qua kỷ luật và ý chí kiên định.
        </p>
      </header>

      {/* Primary search bar & filters */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 p-6 relative overflow-hidden rounded-md shadow-lg">
        
        {/* Aesthetic magic glyph backdrop */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-[#CD7F32]">
          <BookOpen size={120} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-end relative z-10">
          
          {/* Class filter button row inside 4-grid */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-3">
              <label className="block font-label-sm text-xs text-primary uppercase tracking-tighter">
                Phân loại lớp nhân vật
              </label>
              {selectedClass && (
                <button 
                  onClick={() => setSelectedClass(null)} 
                  className="text-xs text-secondary hover:text-primary cursor-pointer transition-colors"
                >
                  (Xem tất cả các hệ)
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Quân chủ", "Kỵ sĩ", "Tiên tộc", "Pháp sư"].map((cls) => {
                const isActive = selectedClass === cls;
                const ClassIcon = selectClassIcon(cls);
                
                return (
                  <button
                    key={cls}
                    onClick={() => {
                      setSelectedClass(cls);
                      setSkillsLimit(8);
                    }}
                    className={`flex items-center justify-center gap-2 py-3 border rounded transition-all text-sm font-body-md cursor-pointer active:scale-95 group ${
                      isActive
                        ? "border-primary bg-primary text-on-primary font-black"
                        : "bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    <ClassIcon size={16} className={isActive ? "text-on-primary" : "text-on-surface-variant/70 group-hover:text-primary"} />
                    <span>{cls}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Select Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 select-none">
            <div className="flex-1 lg:w-48">
              <label className="block font-label-sm text-xs text-primary mb-3 uppercase tracking-tighter">
                Tiêu hao MP
              </label>
              <select
                value={mpFilter}
                onChange={(e) => { setMpFilter(e.target.value); setSkillsLimit(8); }}
                className="w-full bg-surface-container border border-outline-variant/60 rounded px-4 py-2.5 text-on-surface text-sm font-body-md focus:border-primary outline-none transition-all cursor-pointer"
              >
                <option value="Tất cả">Tất cả chi phí</option>
                <option value="Dưới 20 MP">Dưới 20 MP</option>
                <option value="21 - 50 MP">21 - 50 MP</option>
                <option value="Trên 50 MP">Trên 50 MP</option>
              </select>
            </div>

            <div className="flex-1 lg:w-48">
              <label className="block font-label-sm text-xs text-primary mb-3 uppercase tracking-tighter">
                Loại tác động
              </label>
              <select
                value={typeFilter}
                onChange={(e) => { setTypeFilter(e.target.value); setSkillsLimit(8); }}
                className="w-full bg-surface-container border border-outline-variant/60 rounded px-4 py-2.5 text-on-surface text-sm font-body-md focus:border-primary outline-none transition-all cursor-pointer"
              >
                <option value="Tất cả">Tất cả tác động</option>
                <option value="Tức thời (Instant)">Tức thời (Instant)</option>
                <option value="Duy trì (Duration)">Duy trì (Duration)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Extra text search for quick refine */}
        <div className="mt-4 pt-4 border-t border-outline-variant/20 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            className="w-full md:w-80 bg-surface-container border border-outline-variant/40 rounded px-4 py-2 text-sm text-on-surface outline-none focus:border-primary/50 placeholder:text-on-surface-variant/40"
            placeholder="Gõ nhanh mã hoặc tên bí kíp..."
            value={searchVal}
            onChange={(e) => { setSearchVal(e.target.value); setSkillsLimit(8); }}
          />
          <div className="text-on-surface-variant/60 text-xs font-label-sm">
            Hệ thống: <span className="text-primary font-bold">{selectedClass || "Tất cả"}</span> • MP: <span className="text-primary font-bold">{mpFilter}</span>
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      {visibleSkills.length === 0 ? (
        <div className="text-center p-12 border border-outline-variant/30 rounded bg-surface-container/20 max-w-xl mx-auto space-y-3">
          <AlertTriangle size={36} className="text-[#CD7F32] mx-auto opacity-70 animate-bounce" />
          <h4 className="font-headline-md text-lg text-primary">Không có pháp môn ma pháp phù hợp</h4>
          <p className="text-on-surface-variant text-sm">
            Không tìm thấy phong ấn võ kỹ nào khớp với bộ chọn hệ phái hoặc tiêu hao MP hiện thời của bạn.
          </p>
          <button
            onClick={() => { setSelectedClass(null); setMpFilter("Tất cả"); setTypeFilter("Tất cả"); setSearchVal(""); }}
            className="px-4 py-1.5 border border-primary text-primary hover:bg-primary/5 rounded font-label-sm text-xs uppercase"
          >
            Khôi phục mặc định
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleSkills.map((skill) => {
            const ActiveIcon = getSkillIcon(skill.icon);
            
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="bg-surface-container border border-outline-variant/30 p-5 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col justify-between"
              >
                {/* Upper row header */}
                <div className="flex items-start justify-between mb-4">
                  
                  {/* Skill magic glyph frame box */}
                  <div className="w-16 h-16 bg-surface-container-lowest border border-primary/20 flex items-center justify-center relative overflow-hidden rounded shadow-[inset_0_0_15px_rgba(242,202,80,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                    <ActiveIcon className="text-primary group-hover:scale-110 transition-transform duration-500 scale-100" size={32} />
                    
                    {/* Tiny corner bracket frames */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40"></div>
                  </div>

                  {/* Right-side properties, tags matching exact columns of mockups and grade frames */}
                  <div className="flex flex-col items-end gap-1 select-none">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-label-sm font-bold border ${
                      skill.type === "Instant" 
                        ? "bg-on-tertiary-container/30 text-tertiary border-tertiary/20" 
                        : "bg-secondary-container/30 text-secondary border-secondary/20"
                    }`}>
                      {skill.type}
                    </span>
                    
                    {/* Render mini indicators for classes matching usage */}
                    <div className="flex gap-1 mt-1 text-primary-fixed-dim shrink-0 opacity-70">
                      {skill.classes.map((cls, idx) => {
                        const MiniIcon = selectClassIcon(cls);
                        return (
                          <MiniIcon 
                            key={idx} 
                            size={14} 
                            title={`Sử dụng bởi ${cls}`}
                            className="stroke-[1.8]" 
                          />
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Typography of skill */}
                <div className="space-y-1">
                  <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {skill.nameVi}
                  </h3>
                  <p className="font-label-sm text-[11px] text-on-surface-variant/60 uppercase tracking-wider line-clamp-1">
                    {skill.nameKr}
                  </p>
                </div>

                {/* Resource cost basements */}
                <div className="grid grid-cols-2 gap-4 pt-3 mt-4 border-t border-outline-variant/20 text-xs">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest font-label-sm">
                      Tiêu hao MP
                    </span>
                    <span className="text-primary font-bold">{skill.mpCost} MP</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest font-label-sm">
                      {skill.duration ? "Thời gian" : "Tiêu hao HP"}
                    </span>
                    <span className="text-on-surface-variant font-medium">
                      {skill.duration ? skill.duration : `${skill.hpCost} HP`}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Load More Button matching bottom loading bar in Screen 3 mockup */}
      {filteredSkills.length > visibleSkills.length && (
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={handleLoadMore}
            className="relative overflow-hidden group py-4 px-12 bg-gradient-to-b from-[#CD7F32] to-[#722F37] text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(114,47,55,0.4)] cursor-pointer rounded"
          >
            <span className="relative z-10">Xem thêm kỹ năng</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
          <p className="mt-4 font-label-sm text-on-surface-variant/40 text-[10px] tracking-widest">
            Hiển thị {visibleSkills.length} trên tổng số {filteredSkills.length} bí quyết võ công
          </p>
        </div>
      )}

      {/* Skill Detailed Info Popup */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-surface-container border border-outline/40 rounded p-6 max-w-md w-full shadow-2xl relative animate-fade-in text-on-surface">
            
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-surface-container-lowest border border-primary/30 flex items-center justify-center rounded">
                {React.createElement(getSkillIcon(selectedSkill.icon), { className: "text-primary", size: 28 })}
              </div>
              <div>
                <span className="bg-[#722F37] text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Bí kíp • {selectedSkill.type}
                </span>
                <h3 className="font-display-lg text-xl text-primary mt-1">{selectedSkill.nameVi}</h3>
              </div>
            </div>

            <div className="border-t border-outline-variant/30 pt-4 space-y-3">
              <p className="text-on-surface-variant text-sm italic">
                Tài liệu nghiên cứu ma lực: {selectedSkill.nameKr} ({selectedSkill.nameEn})
              </p>
              
              <div className="bg-surface-container-low p-4 rounded text-sm space-y-2 border border-outline-variant/10">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Lớp nhân vật học được:</span>
                  <span className="font-bold text-primary">{selectedSkill.classes.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Chi phí MP:</span>
                  <span className="font-mono font-bold text-primary">{selectedSkill.mpCost} MP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-body-md">Trạng thái phát động:</span>
                  <span className="text-on-surface font-medium">{selectedSkill.effect}</span>
                </div>
                {selectedSkill.duration && (
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Duy trì hiệu quả:</span>
                    <span className="font-mono font-bold text-tertiary">{selectedSkill.duration}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="mt-6 w-full py-2.5 bg-zinc-700 hover:bg-zinc-600 rounded font-bold text-xs text-white uppercase tracking-wider cursor-pointer transition-all active:scale-95"
            >
              Hiểu rõ tâm pháp
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
