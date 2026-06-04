/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Item {
  id: string;
  nameVi: string;
  nameKr: string;
  category: "Vũ khí" | "Giáp trụ" | "Đồ tiêu thụ" | "Cuộn giấy";
  subCategory: string;
  stats: string;
  weight: number;
  grade: "DRAFT" | "REVIEW" | "FINAL";
  description?: string;
  image: string;
  details?: Record<string, string | number>;
}

export interface Monster {
  id: string;
  nameVi: string;
  nameKr: string;
  level: number;
  type: "Normal" | "Elite" | "Boss";
  regions: string[];
  image: string;
  description: string;
  drops: {
    name: string;
    category: "Weapon" | "Armor" | "Currency" | "Food" | "Quest";
    icon: string;
  }[];
}

export interface Skill {
  id: string;
  nameVi: string;
  nameKr: string;
  nameEn: string;
  type: "Instant" | "Duration" | "Passive";
  classes: ("Quân chủ" | "Kỵ sĩ" | "Tiên tộc" | "Pháp sư")[];
  mpCost: number;
  hpCost: number;
  effect: string; // e.g. "Hồi phục HP", "Tốc độ di chuyển", "+2 AC"
  duration?: string; // e.g. "300s", "180s"
  icon: string; // lucide class icon keyword
}
