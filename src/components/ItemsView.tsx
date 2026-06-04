/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Search, Filter, Shield, Swords, Sparkles, AlertCircle, Trash2, ChevronLeft, ChevronRight, Scale, Clock, Globe, X } from "lucide-react";
import { ITEMS_DATA } from "../data";
import { Item } from "../types";

interface ItemsViewProps {
  initialSearch?: string;
  selectedItemId?: string | null;
  onClearSelectedItem?: () => void;
}

export default function ItemsView({ initialSearch = "", selectedItemId = null, onClearSelectedItem }: ItemsViewProps) {
  // Filters state
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [weaponSubCategory, setWeaponSubCategory] = useState("Tất cả");
  const [selectedGrade, setSelectedGrade] = useState<"ALL" | "DRAFT" | "REVIEW" | "FINAL">("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [detailedItem, setDetailedItem] = useState<Item | null>(null);

  // Auto-focus selected item if routed from home
  React.useEffect(() => {
    if (selectedItemId) {
      const match = ITEMS_DATA.find(i => i.id === selectedItemId);
      if (match) {
        setDetailedItem(match);
      }
    }
  }, [selectedItemId]);

  // Handle category checkbox toggle
  const handleCategoryToggle = (categoryName: string) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
    setCurrentPage(1);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setWeaponSubCategory("Tất cả");
    setSelectedGrade("ALL");
    setCurrentPage(1);
  };

  // Perform filtering
  const filteredItems = useMemo(() => {
    return ITEMS_DATA.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesVi = item.nameVi.toLowerCase().includes(query);
        const matchesKr = item.nameKr.toLowerCase().includes(query);
        const matchesSub = item.subCategory?.toLowerCase().includes(query);
        if (!matchesVi && !matchesKr && !matchesSub) return false;
      }

      // 2. Category Checkboxes
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(item.category)) return false;
      }

      // 3. SubCategory Dropdown (only makes sense if Vũ khí filters or general search)
      if (weaponSubCategory !== "Tất cả") {
        if (item.subCategory !== weaponSubCategory) return false;
      }

      // 4. Grade Buttons
      if (selectedGrade !== "ALL") {
        if (item.grade !== selectedGrade) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, weaponSubCategory, selectedGrade]);

  // Pagination Logic (6 items per page for gorgeous layouts)
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb & Screen Title */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs mb-4">
          <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
          <ChevronRight size={12} className="opacity-50" />
          <span className="text-primary/70">Vật phẩm</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/20">
          <div>
            <h1 className="font-display-lg text-4xl text-primary font-bold">
              Danh sách Vật phẩm
            </h1>
            <p className="text-on-surface-variant text-sm mt-1">Tra cứu vũ khí, giáp pháp sư và vật phẩm hỗ trợ dã ngoại đại lục.</p>
          </div>

          {/* Inline search input */}
          <div className="relative w-full md:w-96 select-none">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-surface-container-lowest border-b-2 border-primary/30 text-on-surface px-4 py-3 pr-10 focus:outline-none focus:border-primary transition-all font-body-md text-base rounded-t"
              placeholder="Tìm kiếm tên VI/KR..."
            />
            <Search className="absolute right-3 top-3 text-primary/60 shrink-0" size={18} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar Filter Section */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          <div className="p-6 bg-surface-container-low border border-outline/30 rounded ornate-border shadow-xl">
            <h3 className="font-headline-md text-xl text-primary mb-6 border-b border-outline-variant/30 pb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Bộ lọc
              </span>
              {(selectedCategories.length > 0 || weaponSubCategory !== "Tất cả" || selectedGrade !== "ALL" || searchQuery) && (
                <button 
                  onClick={handleResetFilters}
                  className="text-xs text-secondary hover:text-primary cursor-pointer transition-colors flex items-center gap-1"
                  title="Xóa tất cả bộ lọc"
                >
                  <Trash2 size={12} />
                  Xóa
                </button>
              )}
            </h3>

            {/* Category selection */}
            <div className="mb-8">
              <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider mb-4">
                Loại vật phẩm
              </p>
              <div className="space-y-3">
                {["Vũ khí", "Giáp trụ", "Đồ tiêu thụ", "Cuộn giấy"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group select-none">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                      className="form-checkbox h-4 w-4 rounded-sm bg-transparent border-outline-variant text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="font-body-md text-sm md:text-base text-on-surface/80 group-hover:text-primary transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Weapon Subcategory Dropdown */}
            <div className="mb-8 p-1">
              <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                Phân loại vũ khí
              </p>
              <select
                value={weaponSubCategory}
                onChange={(e) => {
                  setWeaponSubCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-surface-container border border-outline-variant/60 rounded px-3 py-2 text-on-surface font-body-md text-sm md:text-base focus:border-primary outline-none transition-all cursor-pointer"
              >
                <option value="Tất cả">Tất cả vũ khí</option>
                <option value="Kiếm một tay">Kiếm một tay</option>
                <option value="Kiếm hai tay">Kiếm hai tay</option>
                <option value="Cung">Mộc cung dã tộc</option>
                <option value="Gậy phép">Trượng pháp sư</option>
              </select>
            </div>

            {/* Translation Status Pill Buttons */}
            <div className="mb-8">
              <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider mb-4">
                Trạng thái dịch
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setSelectedGrade("ALL"); setCurrentPage(1); }}
                  className={`px-3 py-1 rounded-full text-xs font-label-sm transition-all border cursor-pointer ${
                    selectedGrade === "ALL"
                      ? "border-primary text-primary bg-primary/5 shadow-[0_0_8px_rgba(242,202,80,0.1)]"
                      : "border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => { setSelectedGrade("DRAFT"); setCurrentPage(1); }}
                  className={`px-3 py-1 rounded-full text-xs font-label-sm transition-all border cursor-pointer ${
                    selectedGrade === "DRAFT"
                      ? "border-primary text-primary bg-primary/5"
                      : "border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  Draft
                </button>
                <button
                  onClick={() => { setSelectedGrade("REVIEW"); setCurrentPage(1); }}
                  className={`px-3 py-1 rounded-full text-xs font-label-sm transition-all border cursor-pointer ${
                    selectedGrade === "REVIEW"
                      ? "border-primary text-primary bg-primary/5"
                      : "border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  Review
                </button>
                <button
                  onClick={() => { setSelectedGrade("FINAL"); setCurrentPage(1); }}
                  className={`px-3 py-1 rounded-full text-xs font-label-sm transition-all border cursor-pointer ${
                    selectedGrade === "FINAL"
                      ? "border-primary text-primary bg-primary/5"
                      : "border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  Final
                </button>
              </div>
            </div>

            {/* Filter execution action buttons */}
            <button
              onClick={handleResetFilters}
              className="w-full py-3 bg-primary hover:bg-primary/95 text-on-primary font-bold uppercase tracking-widest active:scale-98 transition-all rounded text-xs cursor-pointer text-center"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        </aside>

        {/* Main Content: Grid & Pagination */}
        <div className="flex-grow space-y-8">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 border border-outline-variant/30 rounded bg-surface-container/30 text-center space-y-4">
              <AlertCircle size={48} className="text-secondary opacity-60" />
              <h4 className="font-headline-md text-lg text-primary">Không tìm thấy vật phẩm nào</h4>
              <p className="text-on-surface-variant text-sm max-w-md">
                Bộ lọc hiện tại không trả về kết quả nào tương ứng. Vui lòng bấm xóa bộ lọc để thử lại.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 border border-primary text-primary hover:bg-primary/5 text-xs font-label-sm uppercase tracking-widest cursor-pointer transition-all"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          ) : (
            <>
              {/* Product cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item) => {
                  // Setup grade colors
                  const gradeColor = 
                    item.grade === "DRAFT" 
                      ? "border border-[#9F2B36]/35 text-[#9F2B36] bg-[#9F2B36]/10" 
                      : item.grade === "REVIEW" 
                      ? "border border-emerald-600/35 text-emerald-700 bg-emerald-50" 
                      : "border border-[#8C7853]/35 text-[#8C7853] bg-[#8C7853]/10";

                  return (
                    <div
                      key={item.id}
                      onClick={() => setDetailedItem(item)}
                      className="bg-surface-container border border-outline-variant p-5 rounded hover:border-primary/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm flex flex-col justify-between"
                    >
                      <div>
                        {/* Upper image component frame with notch corners */}
                        <div className="relative mb-4 aspect-square bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/30 rounded-sm">
                          <img
                            src={item.image}
                            alt={item.nameVi}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                            referrerPolicy="no-referrer"
                          />
                          <div className={`absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter rounded-sm ${gradeColor}`}>
                            {item.grade}
                          </div>
                        </div>

                        {/* Mid metadata strings */}
                        <p className="font-label-sm text-[11px] text-primary/70 uppercase mb-1">
                          {item.subCategory || item.category}
                        </p>
                        <h3 className="font-headline-md text-base text-primary mb-2 line-clamp-1 group-hover:text-primary-fixed duration-200">
                          {item.nameVi}
                        </h3>
                        <p className="text-on-surface-variant font-label-sm text-xs italic mb-3 line-clamp-1">
                          {item.nameKr}
                        </p>
                      </div>

                      {/* Stat summary at basement */}
                      <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-xs">
                          {item.category === "Vũ khí" ? (
                            <Swords size={14} className="text-secondary shrink-0" />
                          ) : (
                            <Shield size={14} className="text-secondary shrink-0" />
                          )}
                          <span className="line-clamp-1">{item.stats}</span>
                        </div>
                        {item.weight > 0 && (
                          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-xs">
                            <Scale size={14} className="text-secondary shrink-0" />
                            <span>Trọng lượng: {item.weight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Unique pagination system matched to the layout mockups */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-3">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-10 w-10 flex items-center justify-center border border-outline-variant rounded text-on-surface-variant hover:text-primary transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      const isActive = currentPage === page;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`h-10 w-10 flex items-center justify-center font-bold text-sm transition-all rounded cursor-pointer ${
                            isActive
                              ? "bg-primary text-on-primary font-black"
                              : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-10 w-10 flex items-center justify-center border border-outline-variant rounded text-on-surface-variant hover:text-primary transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Item info/details overlay modal popup */}
      {detailedItem && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-surface-container border border-outline/40 rounded-lg p-6 max-w-2xl w-full shadow-2xl relative animate-fade-in text-on-surface max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => {
                setDetailedItem(null);
                if (onClearSelectedItem) onClearSelectedItem();
              }}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Header profile of item */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-32 h-32 bg-surface-container-highest border border-outline-variant/50 rounded-md overflow-hidden relative shrink-0 flex items-center justify-center">
                <img
                  src={detailedItem.image}
                  alt={detailedItem.nameVi}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <span className="bg-[#722F37] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  {detailedItem.category} • {detailedItem.subCategory}
                </span>
                <h2 className="font-display-lg text-2xl sm:text-3xl text-primary">{detailedItem.nameVi}</h2>
                <h4 className="font-label-sm text-sm text-on-surface-variant italic">{detailedItem.nameKr}</h4>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed py-1">
                  {detailedItem.description || "Vật phẩm bảo khí rèn thô sơ mộc dã thuộc dải đất Lineage Classic cổ xưa vĩ đại."}
                </p>
              </div>
            </div>

            {/* Deep metrics detailed list */}
            <div className="border-t border-outline-variant/30 pt-6 space-y-4">
              <h4 className="font-label-sm text-xs text-primary uppercase tracking-widest">
                Chỉ số chi tiết kỹ thuật (Database Stats)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-surface-container-low p-4 rounded border border-outline-variant/20">
                <div className="flex justify-between border-b border-outline-variant/10 pb-1.5 text-sm">
                  <span className="text-on-surface-variant">Hệ thống phân loại:</span>
                  <span className="font-mono text-primary font-medium">{detailedItem.subCategory || detailedItem.category}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1.5 text-sm">
                  <span className="text-on-surface-variant">Tác dụng chính:</span>
                  <span className="font-mono text-primary font-medium">{detailedItem.stats}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1.5 text-sm">
                  <span className="text-on-surface-variant">Tải trọng nén:</span>
                  <span className="font-mono text-primary font-medium">{detailedItem.weight} Slot</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1.5 text-sm">
                  <span className="text-on-surface-variant">Tiêu chuẩn dịch:</span>
                  <span className="font-mono text-[#2F7237] font-bold uppercase">{detailedItem.grade}</span>
                </div>
                
                {detailedItem.details && Object.entries(detailedItem.details).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-outline-variant/10 pb-1.5 text-sm col-span-1 sm:col-span-2">
                    <span className="text-on-surface-variant">{k}:</span>
                    <span className="font-bold text-on-surface">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal actions footer */}
            <div className="mt-8 pt-4 border-t border-outline-variant/25 flex justify-end">
              <button
                onClick={() => {
                  setDetailedItem(null);
                  if (onClearSelectedItem) onClearSelectedItem();
                }}
                className="bg-zinc-700 hover:bg-zinc-600 font-bold px-6 py-2.5 rounded text-sm text-white cursor-pointer active:scale-95 transition-all"
              >
                Đóng thông tin
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
