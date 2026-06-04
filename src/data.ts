/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Item, Monster, Skill } from "./types";

export const ITEMS_DATA: Item[] = [
  {
    id: "katana",
    nameVi: "Katana (Đao Nhật Bản)",
    nameKr: "Katana (일본도)",
    category: "Vũ khí",
    subCategory: "Kiếm một tay",
    stats: "Chính xác cận chiến +1 | Sát thương: 12/10",
    weight: 40,
    grade: "DRAFT",
    description: "Một thanh katana rèn tinh xảo, phản chiếu ánh hào quang mờ ảo của rồng thần. Gia tăng đáng kể độ chính xác.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJhLmCP2JoPvSO6hqUEWUZRW-sXC0irLGE-0hqvPc4_KRkEzgsfLlqCG0KPozjNwfXfKN87o07llYHWj6jZeD9yl5Lu__mo_oaYWYiDQhyKEJY9k18ftAeVS7RysyQ8tDarzDZo8TCPrxlIkcIpc84bsPu0bGjjbFrGd632PjyXyRAWE82bo_RKFYuutYHOGmY4sUtmweQQr5CsN8obJoG5R3Wk_M7ok8nWU59XzVZ9-k1kFXDjNfa1Qb6RG978NRG868bkM5jws4",
    details: {
      "Sát thương nhỏ/lớn": "12 / 10",
      "Độ chính xác": "+1",
      "Số tay yêu cầu": "1 tay",
      "Nghề nghiệp sử dụng": "Kỵ sĩ, Quân chủ",
      "Vật liệu rèn": "Sắt cao cấp"
    }
  },
  {
    id: "broadsword",
    nameVi: "Broadsword (Kiếm Bản Rộng)",
    nameKr: "Broadsword (브로드소드)",
    category: "Vũ khí",
    subCategory: "Kiếm một tay",
    stats: "Sát thương: 10/12",
    weight: 45,
    grade: "FINAL",
    description: "Thanh kiếm bản rộng truyền thống nặng trịch của các kỵ binh hoàng gia, thích hợp đập vỡ khiên đối phương.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHUwMA8chVDpHL2b7NrlHNciBX-1ky4z69lzDk6ngRl-3f8V33fUYbdSq884eNe6bYqMa4lHKrXHOA2trEUl2z4t0XpIflGPIPlKW6cLCefZQkxHV0dtAnwMG3p3vWAzfVmI-nvS8s8Uf1GzJRKNQVdaebLscOHNIABDweBWVefTtOQRQ3eJrsCMn4_uKDJyHp5rhSJynolvmlKyNxTA-OxD9ii9pWbD6KxeQXXSLl_4xSYxotxop0bfpDJfZWoM2bJHo1VG1sDCM",
    details: {
      "Sát thương": "10 / 12",
      "Độ nặng": "45",
      "Chất liệu": "Thép rèn rỉ",
      "Phổ biến": "Cao"
    }
  },
  {
    id: "plate-mail",
    nameVi: "Plate Mail (Giáp Tấm Thép)",
    nameKr: "Plate Mail (판금 갑옷)",
    category: "Giáp trụ",
    subCategory: "Áo giáp nặng",
    stats: "Phòng thủ: -7 AC",
    weight: 250,
    grade: "REVIEW",
    description: "Bộ giáp thép nguyên tấm bao phủ toàn thân, đem lại khả năng hộ vệ kiên cố bậc nhất nhưng vô cùng cồng kềnh.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH4Z_nY_MNTXLA7AA1vAb9R6NYq720burLUDDriIpUr59l1N76RE2BJiyFo-1W2mZdE1Ig3m7uXcEsy-fLZ-qsWmmh2TO6DTUjC6uuU7IJU3bI5XHNx9Jtl52aHUek0BoE_ImYDzuAGQl3ppRMIv-1gTZS-9mtV815FbnTh23-Z5oBMsfmux-wPIzOUIECELMAbNMynVG4JgOxVM6yGcEdraIJnNrjZDjeXk5Z7fvtmvX1pVDauWzewDlk38lKSaHuFbth1Qtw474",
    details: {
      "Hệ số AC": "-7",
      "Độ nặng": "250",
      "Loại giáp": "Giáp tấm hạng nặng",
      "Nhân vật khuyên dùng": "Kỵ sĩ, Quân chủ"
    }
  },
  {
    id: "long-bow",
    nameVi: "Cung Dài Thần Sầu",
    nameKr: "Long Bow (장궁)",
    category: "Vũ khí",
    subCategory: "Cung",
    stats: "Sát thương: 3/3 | Tầm bắn +4",
    weight: 30,
    grade: "DRAFT",
    description: "Cung tầm xa của các xạ thủ rành nghề thuộc Tiên tộc, chế tác bằng gỗ cổ thụ vùng Elven.",
    image: "https://images.unsplash.com/photo-1511078573431-c2759acbcacb?auto=format&fit=crop&w=400&q=80",
    details: {
      "Sát thương": "3 / 3",
      "Hạn chế": "Cần hai tay sử dụng",
      "Tầm xa thụ động": "+4 ô"
    }
  },
  {
    id: "orcish-dagger",
    nameVi: "Dao Găm Của Orc",
    nameKr: "Orcish Dagger (오크 단검)",
    category: "Vũ khí",
    subCategory: "Dao găm",
    stats: "Tốc độc cực nhanh | Sát thương: 4/4",
    weight: 15,
    grade: "DRAFT",
    description: "Một con dao sắt múp ròn phong cách dã dại, được rèn bởi các đầu tể và thợ rèn Orc khéo tay.",
    image: "https://images.unsplash.com/photo-1594412229235-8575a7c2e911?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "red-potion",
    nameVi: "Tiểu Dịch HP (Bình Máu Đỏ)",
    nameKr: "Red Potion (빨간 물약)",
    category: "Đồ tiêu thụ",
    subCategory: "Dược phẩm",
    stats: "Hồi phục: 15-25 HP",
    weight: 5,
    grade: "FINAL",
    description: "Bình máu cơ bản phổ thông nhất trong mọi trận chiến của đại lục Aden. Hồi ngay một lượng sinh mệnh tức thời.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "great-sword",
    nameVi: "Trọng Kiếm Cổ Đại",
    nameKr: "Great Sword (양손검)",
    category: "Vũ khí",
    subCategory: "Kiếm hai tay",
    stats: "Sát thương: 18/22 | Sức mạnh +2",
    weight: 95,
    grade: "REVIEW",
    description: "Cực kiếm khổng lồ hủy diệt mọi loại phòng thủ vững chãi nhất. Có khả năng kích phát sát thương cao đối với quái khổng lồ.",
    image: "https://images.unsplash.com/photo-1589703530050-8043640b3d8f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "mage-staff",
    nameVi: "Gậy Phép Thuật Sư",
    nameKr: "Mage Staff (마법사의 지팡이)",
    category: "Vũ khí",
    subCategory: "Gậy phép",
    stats: "Duy trì Mana Regen +2",
    weight: 20,
    grade: "DRAFT",
    description: "Vũ khí ma pháp cốt lõi cho các Pháp sư tập sự học viện phong ấn ma pháp cổ xưa.",
    image: "https://images.unsplash.com/photo-1512149673953-ad9867946979?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "leather-boots",
    nameVi: "Giày Da Chiến Thừa",
    nameKr: "Leather Boots (가죽 장화)",
    category: "Giáp trụ",
    subCategory: "Giày",
    stats: "Phòng phòng ngự AC: -1 | Kháng sét +1%",
    weight: 12,
    grade: "DRAFT",
    description: "Đôi giày làm bằng da thú sấy khô nhiều lần, chống chịu bùn lầy gió cát và dẻo dai một cách bất ngờ.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "scroll-escape",
    nameVi: "Cuộn Giấy Khứ Hồi (귀환 주문서)",
    nameKr: "Scroll of Escape (귀환 주문서)",
    category: "Cuộn giấy",
    subCategory: "Ma thuật",
    stats: "Dịch chuyển tức thời về thành",
    weight: 2,
    grade: "FINAL",
    description: "Vật phẩm sinh tử của các mạo hiểm giả để dịch chuyển tức thời trở về làng an toàn khi cận kề cái chết.",
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "iron-helmet",
    nameVi: "Mũ Sắt Chiến Binh",
    nameKr: "Iron Helmet (철 투구)",
    category: "Giáp trụ",
    subCategory: "Mũ",
    stats: "Phòng ngự: -3 AC",
    weight: 35,
    grade: "REVIEW",
    description: "Mũ bảo hộ gia công dập từ tinh quặng thô, bảo vệ phần sọ khỏi những cú đòn của dã nhân.",
    image: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "bastard-sword",
    nameVi: "Lai Kiếm Bastard Sword",
    nameKr: "Bastard Sword (바스타드 소드)",
    category: "Vũ khí",
    subCategory: "Kiếm một tay",
    stats: "Sát thương: 14/12",
    weight: 55,
    grade: "DRAFT",
    description: "Sự kết hợp hoàn hảo giữa kiếm một tay và kiếm hai tay, vừa gia tăng sát thương mà không mất đi sự lanh lợi.",
    image: "https://images.unsplash.com/photo-1599140849279-1014532882fe?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "shield-aden",
    nameVi: "Tấm Khiên Của Aden",
    nameKr: "Aden Shield (아덴의 방패)",
    category: "Giáp trụ",
    subCategory: "Khiên",
    stats: "Phòng thủ: 35 | Cấp độ yêu cầu: 50",
    weight: 80,
    grade: "FINAL",
    description: "Khiên hoàng kim đúc bằng thép cứng của kỵ sĩ Aden cổ.",
    image: "https://images.unsplash.com/photo-1583160427711-2191776b4b91?auto=format&fit=crop&w=400&q=80"
  }
];

export const MONSTERS_DATA: Monster[] = [
  {
    id: "orc",
    nameVi: "Quái Nhân Orc",
    nameKr: "Orc (오크)",
    level: 2,
    type: "Normal",
    regions: ["Đảo Nói Chuyện (Singing Island)", "Hầm Ngục Đảo Nói Chuyện"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDghfmWWLYJrPf3DxhzOIigW7izjBLHhqU7zOrWb759iM9224mKhTtdfwxQ1Hp2LoolY7BoDx8dUh7Mnh8nOWV3G_-ub3uO3aoXH3I3qi5JlyjGoSrEg8LoELddjwvUVaxhKNNXvZBVICpWA-9K4JwsYqfdckvx6D4xSv1ir65ftT2CGdw0UJ9bF7XY0bMd5C8sngm5ReXOIuHsgmsdfZjhL_ezskgIxcy4pI9cFCIOvM7d3Q_tFoHsx9l01a2XoELC36twipO2kf4",
    description: "Sinh vật da xanh lực lưỡng hung dữ, xuất hiện khắp Đảo Nói Chuyện. Là trở ngại đầu tiên của các hiệp sĩ trẻ măng mới gia nhập quân đội vương quốc.",
    drops: [
      { name: "Kiếm Orc", category: "Weapon", icon: "Sword" },
      { name: "Giáp Vòng Orc", category: "Armor", icon: "Shield" },
      { name: "Adena (Tiền vàng)", category: "Currency", icon: "Coins" },
      { name: "Thịt Sống", category: "Food", icon: "Beef" }
    ]
  },
  {
    id: "antharas",
    nameVi: "Rồng Đất Antharas",
    nameKr: "Antharas (안타라스)",
    level: 80,
    type: "Boss",
    regions: ["Bản đồ Dragon Valley (Valley of Dragons)", "Dragon Lair (Huyệt Rồng)"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZFJssyITc74Y912qp7R02sa_yVzg8e3pMjYl_D-5TEvPU5PkxH5NU32wxDk-Ogz6cjpkheHbXUlIomlIpUcbNOcTjJmnYp80ywfnnkzJgGGlgqccT-gBKK1lg78acTStbXACXnfexzR7JZzvTPljGn09WDkEvABYtAup37cQ-d3CfLOrhbJHY0lfYpsEl5d_SPmSsxbYxuCp0QKuXaoWTkfC-aUiimT-jl2p9kxtEiRU0v0TvijsGSB4vXqXjrQcwbzlFDgqdI6s", // Atmospheric dark dragon forest blend
    description: "Một trong sáu đại cổ long thống trị bầu trời và lòng đất đại lục Aden. Nổi giận và phun chất độc mòn đá rách giáp sắt.",
    drops: [
      { name: "Song Kiếm Cổ Đại", category: "Weapon", icon: "Sword" },
      { name: "Plate Mail", category: "Armor", icon: "Shield" },
      { name: "Bảo Tật Antharas", category: "Quest", icon: "Gem" },
      { name: "Adena (999.000)", category: "Currency", icon: "Coins" }
    ]
  },
  {
    id: "soi_tuyet_hoang",
    nameVi: "Sói Tuyết Hoang",
    nameKr: "Sói Tuyết Hoang",
    level: 65,
    type: "Elite",
    regions: ["Frozen Labyrinth (Mê cung đóng băng)"],
    image: "https://images.unsplash.com/photo-159042229235-8575a7c2e911?auto=format&fit=crop&w=400&q=80",
    description: "Loài sói dũng mãnh, sở hữu bộ lông tuyết cực dày và tốc độ săn mồi hớp hồn trong mê cung phía Bắc hoang vu dính tuyết quanh năm.",
    drops: [
      { name: "Nanh Vuốt Sói Hoang", category: "Weapon", icon: "Sword" },
      { name: "Thịt Đông Lạnh", category: "Food", icon: "Beef" },
      { name: "Adena", category: "Currency", icon: "Coins" }
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    id: "hoi-mau",
    nameVi: "Hồi Máu",
    nameKr: "Heal (힐)",
    nameEn: "Heal",
    type: "Instant",
    classes: ["Tiên tộc", "Pháp sư", "Quân chủ"],
    mpCost: 12,
    hpCost: 0,
    effect: "Hồi phục HP",
    icon: "Heart"
  },
  {
    id: "anh-sang",
    nameVi: "Ánh Sáng",
    nameKr: "Light (라이트)",
    nameEn: "Light",
    type: "Duration",
    classes: ["Tiên tộc", "Pháp sư"],
    mpCost: 5,
    hpCost: 0,
    effect: "Thắp sáng xung quanh",
    duration: "300s",
    icon: "Sun"
  },
  {
    id: "khien-bao-ve",
    nameVi: "Khiên Bảo Vệ",
    nameKr: "Shield (쉴드)",
    nameEn: "Shield",
    type: "Duration",
    classes: ["Kỵ sĩ", "Tiên tộc"],
    mpCost: 15,
    hpCost: 0,
    effect: "+2 AC phòng thủ",
    duration: "300s",
    icon: "Shield"
  },
  {
    id: "giam-trong-luong",
    nameVi: "Giảm Trọng Lượng",
    nameKr: "Decrease Weight (디크리즈 웨이트)",
    nameEn: "Decrease Weight",
    type: "Duration",
    classes: ["Tiên tộc"],
    mpCost: 20,
    hpCost: 0,
    effect: "Tăng tải trọng mang vác",
    duration: "180s",
    icon: "Scale"
  },
  {
    id: "tang-toc-do",
    nameVi: "Tăng Tốc Độ",
    nameKr: "Haste (헤이스트)",
    nameEn: "Haste",
    type: "Duration",
    classes: ["Tiên tộc", "Pháp sư"],
    mpCost: 40,
    hpCost: 0,
    effect: "Tăng mạnh tốc độ di chuyển",
    duration: "300s",
    icon: "Zap"
  },
  {
    id: "ho-tro-linh-hon",
    nameVi: "Hỗ Trợ Linh Hồn",
    nameKr: "Soul of Flame (소울 오브 프레임)",
    nameEn: "Soul of Flame",
    type: "Duration",
    classes: ["Tiên tộc"],
    mpCost: 30,
    hpCost: 10,
    effect: "Gây sát thương lửa liên tiếp",
    duration: "120s",
    icon: "Flame"
  },
  {
    id: "loi-nguyen-doc",
    nameVi: "Lời Nguyền Độc",
    nameKr: "Poison (포이즌)",
    nameEn: "Poison",
    type: "Instant",
    classes: ["Pháp sư"],
    mpCost: 15,
    hpCost: 0,
    effect: "Rây độc bòn rút HP đối thủ",
    icon: "Skull"
  },
  {
    id: "dich-chuyen",
    nameVi: "Dịch Chuyển Ký Trực",
    nameKr: "Teleport (텔레포트)",
    nameEn: "Teleport",
    type: "Instant",
    classes: ["Tiên tộc", "Pháp sư"],
    mpCost: 10,
    hpCost: 0,
    effect: "Dịch chuyển ngẫu nhiên bản đồ",
    icon: "Shuffle"
  }
];
