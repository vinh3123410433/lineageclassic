/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, Menu, X, Globe, User } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: "VI" | "KR";
  toggleLanguage: () => void;
  onSearchRequest?: (term: string) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  language,
  toggleLanguage,
  onSearchRequest
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchRequest) {
      onSearchRequest(searchVal);
    }
    setSearchOpen(false);
  };

  const navItems = [
    { key: "home", label: "Home" },
    { key: "items", label: "Items" },
    { key: "monsters", label: "Monsters" },
    { key: "skills", label: "Skills" },
    { key: "map", label: "Map" },
    { key: "guide", label: "Guide" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 h-20">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick("home")}
          className="font-sans text-2xl font-black tracking-tighter cursor-pointer active:scale-95 transition-all select-none uppercase"
        >
          LVE&trade;
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`transition-all duration-200 cursor-pointer text-[10px] uppercase font-semibold tracking-[0.2em] hover:line-through ${
                  isActive
                    ? "text-primary font-black line-through"
                    : "text-on-surface/60 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Aden Clock Decoration */}
        <div className="hidden lg:block text-[10px] uppercase tracking-widest opacity-50 font-mono">
          ADEN &mdash; 18:21 KST
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Quick Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-surface-container border border-outline-variant rounded-md overflow-hidden w-64 md:w-80 shadow-2xl transition-all duration-300">
                <input
                  type="text"
                  placeholder="Tìm nhanh..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-transparent border-0 ring-0 focus:ring-0 text-on-surface text-sm px-3 py-2 w-full outline-none"
                  autoFocus
                />
                <button type="submit" className="px-3 text-primary border-l border-outline-variant/50 hover:bg-primary/10 transition-colors">
                  <Search size={16} />
                </button>
                <button type="button" onClick={() => setSearchOpen(false)} className="px-2 text-on-surface-variant/70 hover:text-primary">
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-primary hover:text-primary/70 transition-colors cursor-pointer p-1"
                title="Tìm kiếm nhanh"
              >
                <Search size={22} className="stroke-[1.8]" />
              </button>
            )}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-primary font-label-sm text-xs uppercase tracking-widest cursor-pointer hover:text-primary-fixed-dim transition-all border border-outline-variant/40 px-2 py-1 rounded hover:bg-primary/5 active:scale-95"
            title="Đổi ngôn ngữ hiển thị"
          >
            {language === "VI" ? "KR / VI" : "VI / KR"}
          </button>

          {/* Profile Badge */}
          <div className="h-10 w-10 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors text-primary active:scale-95">
            <User size={18} className="stroke-[2]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/40 py-6 px-6 z-40 transition-all shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`text-left py-2 font-body-md text-lg transition-colors ${
                    isActive ? "text-primary font-semibold pl-2 border-l-2 border-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
