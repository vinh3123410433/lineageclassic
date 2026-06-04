/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ItemsView from "./components/ItemsView";
import SkillsView from "./components/SkillsView";
import MonsterDetailView from "./components/MonsterDetailView";
import MapView from "./components/MapView";
import GuideView from "./components/GuideView";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [language, setLanguage] = useState<"VI" | "KR">("VI");
  
  // Shared navigation params (such as search queries and deep links)
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleNavigate = (tab: string, search?: string) => {
    setSearchQuery(search || "");
    setSelectedItemId(null);
    setSelectedMonsterId(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMonsterSelect = (monsterId: string) => {
    setSelectedMonsterId(monsterId);
    setActiveTab("monsters");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemSelect = (itemId: string) => {
    setSelectedItemId(itemId);
    setActiveTab("items");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "VI" ? "KR" : "VI"));
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            onNavigate={handleNavigate}
            onMonsterSelect={handleMonsterSelect}
            onItemSelect={handleItemSelect}
          />
        );
      case "items":
        return (
          <ItemsView
            initialSearch={searchQuery}
            selectedItemId={selectedItemId}
            onClearSelectedItem={() => setSelectedItemId(null)}
          />
        );
      case "monsters":
        return (
          <MonsterDetailView
            initialMonsterId={selectedMonsterId}
            onClearSelectedItem={() => setSelectedMonsterId(null)}
          />
        );
      case "skills":
        return <SkillsView />;
      case "map":
        return <MapView />;
      case "guide":
        return <GuideView />;
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onMonsterSelect={handleMonsterSelect}
            onItemSelect={handleItemSelect}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between selection:bg-primary selection:text-on-primary">
      {/* Dynamic Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        language={language}
        toggleLanguage={toggleLanguage}
        onSearchRequest={(term) => handleNavigate("items", term)}
      />

      {/* Primary Atmospheric Content container */}
      <main className="flex-grow pt-28 px-4 md:px-10 pb-16 max-w-7xl w-full mx-auto animate-fade-in">
        {renderActiveTab()}
      </main>

      {/* Persistent Atmospheric Footer */}
      <Footer setActiveTab={handleNavigate} />
    </div>
  );
}
