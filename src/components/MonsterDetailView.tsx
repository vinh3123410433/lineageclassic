/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Swords, MapPin, Copy, Share2, Shield, Info, Check, ChevronRight, MessageSquare, Play, Coins, UserCheck, Flame, Gift } from "lucide-react";
import { MONSTERS_DATA } from "../data";
import { Monster } from "../types";

interface MonsterDetailViewProps {
  initialMonsterId?: string | null;
  onClearSelectedItem?: () => void;
}

export default function MonsterDetailView({ initialMonsterId, onClearSelectedItem }: MonsterDetailViewProps) {
  // Current viewed monster
  const [selectedMonsterId, setSelectedMonsterId] = useState<string>(initialMonsterId || "orc");
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Match the active monster in the dataset
  const currentMonster = MONSTERS_DATA.find(m => m.id === selectedMonsterId) || MONSTERS_DATA[0];

  const handleCopyKorean = () => {
    // Extract the Korean name between parentheses or use the raw string
    const match = currentMonster.nameKr.match(/\(([^)]+)\)/);
    const krName = match ? match[1] : currentMonster.nameKr;
    
    navigator.clipboard.writeText(krName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  // Select drop icon component to match style
  const getDropCategoryIcon = (category: string) => {
    switch (category) {
      case "Weapon": return Swords;
      case "Armor": return Shield;
      case "Currency": return Coins;
      case "Food": return Flame;
      default: return Gift;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Breadcrumb row */}
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs justify-between">
        <div className="flex items-center gap-2">
          <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
          <ChevronRight size={12} className="opacity-50" />
          <span className="hover:text-primary transition-colors cursor-pointer">Quái vật</span>
          <ChevronRight size={12} className="opacity-50" />
          <span className="text-primary font-medium">{currentMonster.nameVi.split(" ").pop()}</span>
        </div>
        
        {/* Monster quick switcher */}
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 border border-outline-variant/30 rounded select-none">
          <span className="text-[11px] text-on-surface-variant/70 font-label-sm">Đổi quái:</span>
          <select 
            value={selectedMonsterId}
            onChange={(e) => {
              setSelectedMonsterId(e.target.value);
              if (onClearSelectedItem) onClearSelectedItem();
            }}
            className="bg-transparent text-primary text-xs font-bold outline-none cursor-pointer"
          >
            {MONSTERS_DATA.map(m => (
              <option key={m.id} value={m.id} className="bg-background text-on-surface">
                {m.nameVi}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Main Monster Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
        
        {/* LEFT COLUMN: Large Ornate Monster Frame */}
        <div className="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative z-10 p-4 border border-outline-variant/50 bg-surface-container-low shadow-2xl rounded-sm">
            
            {/* Skeuomorphic Golden Corner Hooks */}
            <div className="absolute top-[-2px] left-[-2px] w-5 h-5 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-[-2px] right-[-2px] w-5 h-5 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-b-2 border-r-2 border-primary"></div>

            <div className="aspect-[4/5] overflow-hidden bg-surface-container-highest relative rounded-sm">
              <img
                src={currentMonster.image}
                alt={currentMonster.nameVi}
                className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1] hover:scale-105 hover:grayscale-0 duration-700 transition-all pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-surface-container-low/40 shadow-inner"></div>
            </div>
          </div>
          
          <div className="absolute -inset-2 bg-primary/5 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
        </div>

        {/* RIGHT COLUMN: Monster Stats & Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-sm text-xs tracking-widest uppercase rounded">
                MONSTER INDEX
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/40 to-transparent"></div>
            </div>
            
            <div>
              <h1 className="font-display-lg text-4xl sm:text-5xl text-primary font-bold tracking-tight">
                {currentMonster.nameVi} ({currentMonster.nameKr.replace(/Orc \(오크\)/, "오크")})
              </h1>
              <p className="text-on-surface-variant font-body-md text-base italic leading-relaxed pt-2">
                {currentMonster.description}
              </p>
            </div>
          </header>

          {/* Golden/Bronze Parchment detail panel card */}
          <div className="relative bg-surface-container p-6 border border-outline-variant/30 rounded shadow-lg overflow-hidden">
            {/* Background shimmer lines */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 animate-[shimmer_5s_infinite]"></div>
            
            <div className="grid grid-cols-2 gap-y-6 relative z-10">
              
              <div className="space-y-1">
                <span className="font-label-sm text-xs text-outline uppercase tracking-widest">Level</span>
                <div className="font-headline-lg text-3xl font-bold text-on-surface">
                  {currentMonster.level}
                </div>
              </div>
              
              <div className="space-y-1">
                <span className="font-label-sm text-xs text-outline uppercase tracking-widest">Type</span>
                <div className="flex items-center gap-2">
                  <Swords size={20} className="text-primary" />
                  <div className="font-headline-lg text-2xl font-bold text-on-surface">
                    {currentMonster.type}
                  </div>
                </div>
              </div>

              <div className="col-span-2 space-y-2 border-t border-outline-variant/20 pt-4">
                <span className="font-label-sm text-xs text-outline uppercase tracking-widest">Region (Đại lục cư ngụ)</span>
                <div className="font-body-lg text-sm sm:text-base text-on-surface flex items-center gap-2">
                  <MapPin size={18} className="text-tertiary shrink-0" />
                  <span>{currentMonster.regions.join(" — ")}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Action buttons matching exact mockups with feedback loops */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCopyKorean}
              className="flex-grow md:flex-grow-0 px-8 h-12 border border-primary text-primary font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(242,202,80,0.1)] cursor-pointer hover:shadow-[0_0_15px_rgba(242,202,80,0.3)] active:scale-95"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-emerald-400">Đã copy tên!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="shrink-0" />
                  <span>Copy tên tiếng Hàn</span>
                </>
              )}
            </button>
            
            <button
              onClick={handleShare}
              className="w-12 h-12 border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary transition-all active:scale-95 flex items-center justify-center cursor-pointer"
              title="Chia sẻ thông tin quái"
            >
              <Share2 size={18} className={shared ? "text-primary animate-ping" : ""} />
            </button>
            {shared && (
              <span className="text-xs text-primary font-label-sm self-center animate-fade-in">Link đã lưu vào clipboard!</span>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Drop List Section */}
      <section className="mt-16 space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="font-display-lg text-2xl sm:text-3xl text-primary font-bold shrink-0">
            Vật phẩm rơi (Drops)
          </h2>
          <div className="h-[1.5px] flex-grow bg-gradient-to-r from-outline-variant/40 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {currentMonster.drops.map((drop, idx) => {
            const DropIcon = getDropCategoryIcon(drop.category);
            
            return (
              <div 
                key={idx}
                className="bg-surface-container p-4 border border-outline-variant/20 rounded-md group hover:border-primary/50 transition-all duration-300 cursor-pointer shadow flex flex-col justify-between"
              >
                <div className="aspect-square bg-surface-container-highest mb-4 relative overflow-hidden flex items-center justify-center border border-outline-variant/30 rounded">
                  <DropIcon size={34} className="text-primary/70 group-hover:scale-110 duration-300 transition-transform" />
                  
                  {/* Subtle lower gradient overlay info on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 justify-center">
                    <span className="font-label-sm text-[10px] text-primary uppercase tracking-widest">
                      {drop.category} CLASS
                    </span>
                  </div>
                </div>
                
                <h3 className="font-body-md text-sm sm:text-base text-on-surface font-semibold group-hover:text-primary transition-colors text-center line-clamp-1">
                  {drop.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community review footnote from mockup */}
      <footer className="mt-12 pt-6 border-t border-outline-variant/20">
        <div className="flex items-center gap-3 text-on-surface-variant text-sm font-body-md select-none">
          <Info size={16} className="text-primary shrink-0 animate-pulse" />
          <p>Bản dịch thuật ngữ, chỉ số và khu vực phân phối đang được cộng đồng kiểm duyệt rà soát.</p>
        </div>
      </footer>

    </div>
  );
}
