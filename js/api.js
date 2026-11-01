/**
 * MangaStats Hub - Multi-Country Official Origins & Extensive Genre/Tag System
 */

const ANILIST_API_URL = 'https://graphql.anilist.co';

import {
  OFFICIAL_GENRES,
  GENRE_CATEGORIES,
  ALL_GENRES_AND_TAGS,
  GENRE_ICONS,
  GENRE_KEYWORDS
} from './genres_data.js';

export {
  OFFICIAL_GENRES,
  GENRE_CATEGORIES,
  ALL_GENRES_AND_TAGS,
  GENRE_ICONS,
  GENRE_KEYWORDS
};

/**
 * Bảng ánh xạ tên truyện Tiếng Việt ➔ Tên Quốc tế / Romaji trên hệ thống
 */
export const VIETNAMESE_TITLE_MAP = {
  // Manhua Tu Tiên / Đô Thị (Trung Quốc)
  'vo luyen dinh phong': 'Martial Peak',
  'dai quan gia la ma hoang': 'The Devil Butler',
  'ma hoang dai quan gia': 'The Devil Butler',
  'ta la ta de': 'I am an evil god',
  'dau pha thuong khung': 'Battle Through the Heavens',
  'dau la dai luc': 'Douluo Dalu',
  'nguyen ton': 'Yuan Zun',
  'yeu than ky': 'Tales of Demons and Gods',
  'trong sinh do thi tu tien': 'Rebirth of the Urban Immortal Cultivator',
  'tuyet the duong mon': 'Douluo Dalu 2',
  'pham nhan tu tien': 'A Record of a Mortal',
  'nhat niem vinh hang': 'A Will Eternal',
  'than dao dan ton': 'God of Martial Arts',
  'vo than chua te': 'The Lord of No God',
  'yeu dao chi vuong': 'Monster Kingdom',
  'nghich thien ta than': 'Against the Gods',
  'linh vu thien ha': 'Spirit Realm',
  'co chan nhan': 'Reverend Insanity',

  // Manhwa (Hàn Quốc)
  'toan tri doc gia': 'Omniscient Reader',
  'doc gia toan tri': 'Omniscient Reader',
  'toi thang cap mot minh': 'Solo Leveling',
  'hoi quy phat tai': 'Solo Leveling',
  'bac thay thiet ke dien trang': 'The Greatest Estate Developer',
  'su tro lai cua phap su cap tham hoa': 'The Return of the Disaster-Class Hero',
  'su tro lai cua anh hung cap tham hoa': 'The Return of the Disaster-Class Hero',
  'phap su cap tham hoa': 'The Return of the Disaster-Class Hero',
  'chua te thap': 'Tower of God',
  'toa thap dau bo': 'Tower of God',
  'ke bien hinh': 'Lookism',
  'hoc sinh ca biet': 'Mercenary Enrollment',
  'su song con cua hoc sinh trung hoc': 'Mercenary Enrollment',
  'hoa son tai xuat': 'Return of the Mount Hua Sect',
  'kiem than hoa son': 'Return of the Mount Hua Sect',
  'kiem su hoa son': 'Return of the Mount Hua Sect',
  'login vao vo lam': 'Murim Login',
  'tay dua gio': 'Wind Breaker',
  'nanomachine': 'Nano Machine',
  'bac thay kiem ma': 'The Swordmaster’s Son',

  // Manga (Nhật Bản)
  'dao hai tac': 'One Piece',
  'vua hai tac': 'One Piece',
  'hai tac': 'One Piece',
  'tham tu lung danh conan': 'Detective Conan',
  'conan': 'Detective Conan',
  'chu thuat hoi chien': 'Jujutsu Kaisen',
  'thanh guom diet quy': 'Demon Slayer',
  'diet quy cuu sinh': 'Demon Slayer',
  'dai chien titan': 'Attack on Titan',
  'tho san ti hon': 'Hunter x Hunter',
  'hoc vien sieu anh hung': 'My Hero Academia',
  'gia dinh diep vien': 'Spy x Family',
  'mot quyen sieu nhan': 'One Punch Man',
  'bay vien ngoc rong': 'Dragon Ball',
  'songoku': 'Dragon Ball',
  'do re mon': 'Doraemon',
  'doraemon': 'Doraemon',
  'vua tro choi': 'Yu-Gi-Oh!',
  'gia kim thuat su': 'Fullmetal Alchemist',
  'quyen so thien menh': 'Death Note',
  'duong dan den khung thanh': 'Kattobi Itto',
  'jindo': 'Kattobi Itto',
  'hiep khach giang ho': 'The Ruler of the Land',
  'cao thu bong ro': 'Slam Dunk',
  'khoa blue': 'Blue Lock',
  'quai vat so 8': 'Kaiju No. 8',
  'phap su tien tri frieren': 'Sousou no Frieren'
};

/**
 * Số chap thực tế thời gian thực cho các bộ truyện Ongoing siêu dài
 */
export const ONGOING_CHAPTERS_MAP = {
  30013: 1135, // One Piece
  31061: 1140, // Detective Conan
  30009: 1475, // Hajime no Ippo
  46765: 825,  // Kingdom
  104494: 3780, // Martial Peak (Võ Luyện Đỉnh Phong)
  116353: 620,  // The Devil Butler (Đại Quản Gia Là Ma Hoàng)
  85143: 645,   // Tower of God
  86337: 535,   // Lookism
  111244: 245,  // Omniscient Reader
  118228: 240,  // Nano Machine
  111364: 525,  // Wind Breaker
  85294: 495,   // Tales of Demons and Gods (Yêu Thần Ký)
  116238: 515,  // I'm an evil god (Ta Là Tà Đế)
  100688: 980,  // Rebirth of the Urban Immortal Cultivator
  138541: 175,  // The Greatest Estate Developer
  30026: 405,   // Hunter x Hunter
  30002: 376,   // Berserk
  128682: 220,  // Mercenary Enrollment
  108399: 335,  // Eleceed
  138676: 155,  // Return of the Mount Hua Sect
  122264: 200,  // Murim Login
  108345: 195,  // The Beginning After the End
};

export function removeVietnameseTones(str) {
  if (!str) return '';
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  str = str.replace(/\u02C6|\u0306|\u031B/g, '');
  return str.trim();
}

export function resolveSearchTerm(keyword) {
  if (!keyword) return '';
  const clean = removeVietnameseTones(keyword).toLowerCase();
  if (VIETNAMESE_TITLE_MAP[clean]) {
    return VIETNAMESE_TITLE_MAP[clean];
  }
  for (const [key, value] of Object.entries(VIETNAMESE_TITLE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return value;
    }
  }
  return keyword.trim();
}

export const OFFICIAL_PLATFORMS = [
  { id: 'ALL', name: '🌐 Tất cả nền tảng gốc', country: 'ALL', flag: '🌐', type: 'ALL', category: 'Tất cả' },
  
  // --- Manga / Truyện tranh NXB Gốc ---
  {
    id: 'SHUEISHA_JUMP',
    name: 'Shueisha / Shonen Jump+ 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'MANGA',
    category: 'Manga Gốc',
    publisher: 'Shueisha (集英社)',
    siteUrl: 'https://shonenjumpplus.com/',
    color: '#ff3e24',
    desc: 'Nhà xuất bản manga số 1 Nhật Bản (One Piece, Chainsaw Man, Jujutsu Kaisen, Spy x Family, Dragon Ball, Naruto)'
  },
  {
    id: 'KODANSHA',
    name: 'Kodansha / Magazine Pocket 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'MANGA',
    category: 'Manga Gốc',
    publisher: 'Kodansha (講談社)',
    siteUrl: 'https://pocket.shonenmagazine.com/',
    color: '#005bac',
    desc: 'Nhà xuất bản Kodansha (Attack on Titan, Blue Lock, Fairy Tail, Tokyo Revengers, Rent-a-Girlfriend)'
  },
  {
    id: 'SHOGAKUKAN',
    name: 'Shogakukan / Sunday Webry 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'MANGA',
    category: 'Manga Gốc',
    publisher: 'Shogakukan (小学館)',
    siteUrl: 'https://www.sunday-webry.com/',
    color: '#e50012',
    desc: 'Nhà xuất bản Shogakukan (Thám tử Conan, Frieren, Inuyasha, Komi-san, Magi)'
  },
  {
    id: 'KADOKAWA',
    name: 'Kadokawa / ComicWalker 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'MANGA',
    category: 'Manga Gốc',
    publisher: 'Kadokawa (KADOKAWA / 角川)',
    siteUrl: 'https://comic-walker.com/',
    color: '#003e7e',
    desc: 'Đế chế Isekai & Manga chuyển thể (Sword Art Online, Re:Zero, Mushoku Tensei, Kage no Jitsuryokusha)'
  },
  {
    id: 'SQUARE_ENIX',
    name: 'Square Enix / Gangan Online 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'MANGA',
    category: 'Manga Gốc',
    publisher: 'Square Enix (スクウェア・エニックス)',
    siteUrl: 'https://www.ganganonline.com/',
    color: '#a855f7',
    desc: 'NXB Manga Square Enix (Fullmetal Alchemist, Soul Eater, Horimiya, My Dress-Up Darling)'
  },
  {
    id: 'NAVER_WEBTOON',
    name: 'Naver Webtoon (네이버 웹툰) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'MANGA',
    category: 'Manhwa Gốc',
    publisher: 'Naver Webtoon Corp',
    siteUrl: 'https://comic.naver.com/',
    color: '#03c75a',
    desc: 'Nền tảng Webtoon số 1 Hàn Quốc (Tower of God, Lookism, Nano Machine, True Beauty, Omniscient Reader)'
  },
  {
    id: 'KAKAO_PAGE',
    name: 'KakaoPage / Kakao Webtoon 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'MANGA',
    category: 'Manhwa Gốc',
    publisher: 'Kakao Entertainment',
    siteUrl: 'https://page.kakao.com/',
    color: '#ffcd00',
    desc: 'Nơi khai sinh Solo Leveling, Overgeared, SSS-Class Revival Hunter, Return of Mount Hua Sect'
  },
  {
    id: 'LEZHIN',
    name: 'Lezhin Comics (레진) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'MANGA',
    category: 'Manhwa Gốc',
    publisher: 'Lezhin Entertainment',
    siteUrl: 'https://www.lezhin.com/',
    color: '#e52528',
    desc: 'Nền tảng Webtoon chính kịch, lãng mạn & phong cách độc đáo hàng đầu Hàn Quốc'
  },
  {
    id: 'KUAIKAN',
    name: 'Kuaikan Manhua (快看漫画) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'MANGA',
    category: 'Manhua Gốc',
    publisher: 'Kuaikan World Beijing Technology',
    siteUrl: 'https://www.kuaikanmanhua.com/',
    color: '#ffdd00',
    desc: 'App truyện tranh số 1 Trung Quốc, sở hữu hàng triệu tác phẩm tu tiên, ngôn tình & đô thị'
  },
  {
    id: 'BILIBILI_MANHUA',
    name: 'Bilibili Manhua (哔哩哔哩漫画) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'MANGA',
    category: 'Manhua Gốc',
    publisher: 'Bilibili Inc.',
    siteUrl: 'https://manga.bilibili.com/',
    color: '#00a1d6',
    desc: 'Cổng truyện tranh chính thức có bản quyền gốc của đế chế Bilibili Trung Quốc'
  },
  {
    id: 'TENCENT_DONGMAN',
    name: 'Tencent Dongman (腾讯动漫) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'MANGA',
    category: 'Manhua Gốc',
    publisher: 'Tencent Animation & Comics',
    siteUrl: 'https://ac.qq.com/',
    color: '#12b7f5',
    desc: 'Nền tảng truyện của Tencent (Đại Quản Gia Là Ma Hoàng, Toàn Chức Pháp Sư, Hồ Yêu Tiểu Hồng Nương)'
  },

  // --- Tiểu thuyết chữ / Light Novel & Web Novel Gốc ---
  {
    id: 'SYOSETU',
    name: 'Shousetsuka ni Narou (小説家になろう) 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'HinaProject Inc. (Syosetu)',
    siteUrl: 'https://syosetu.com/',
    color: '#10b981',
    desc: 'Cái nôi tiểu thuyết Web Novel lớn nhất thế giới, nguồn gốc của hơn 90% siêu phẩm Isekai (Mushoku Tensei, Slime, Re:Zero, Overlord, Kumo desu ga)'
  },
  {
    id: 'KAKUYOMU',
    name: 'Kakuyomu (カクヨム - Kadokawa) 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'KADOKAWA / Hatena',
    siteUrl: 'https://kakuyomu.jp/',
    color: '#3b82f6',
    desc: 'Nền tảng tiểu thuyết mạng web novel chính thức của tập đoàn Kadokawa (Kage no Jitsuryokusha, Higehiro)'
  },
  {
    id: 'BOOKWALKER_NOVEL',
    name: 'BookWalker / Dengeki Bunko (電撃文庫) 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Kadokawa / ASCII Media Works',
    siteUrl: 'https://dengekibunko.jp/',
    color: '#f97316',
    desc: 'Nhãn Light Novel huyền thoại Nhật Bản (Sword Art Online, Mahouka Koukou no Rettousei, 86 Eighty-Six, Toradora)'
  },
  {
    id: 'OVERLAP_NOVEL',
    name: 'Overlap Bunko (オーバーラップ文庫) 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Overlap Inc.',
    siteUrl: 'https://over-lap.co.jp/bunko/',
    color: '#06b6d4',
    desc: 'NXB Light Novel chuyển sinh danh tiếng (Arifureta Shokugyou de Sekai Saikyou, Skeleton Knight in Another World)'
  },
  {
    id: 'MUNPIA',
    name: 'Munpia (문피아 - Webnovel) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Munpia Inc. (Naver Affiliate)',
    siteUrl: 'https://www.munpia.com/',
    color: '#2563eb',
    desc: 'Thánh địa Webnovel chữ số 1 Hàn Quốc, nơi khởi nguồn của thể loại Hunter/Tháp/Hệ thống (Toàn Trí Độc Giả - ORV, The Novel\'s Extra)'
  },
  {
    id: 'NAVER_SERIES_NOVEL',
    name: 'Naver Series Novel (네이버 시리즈) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Naver Corp.',
    siteUrl: 'https://series.naver.com/novel/home.series',
    color: '#059669',
    desc: 'Kho tiểu thuyết chữ gốc chính thức của Naver (Hoa Sơn Tái Xuất novel, Nano Machine novel, Remarried Empress)'
  },
  {
    id: 'KAKAOPAGE_NOVEL',
    name: 'KakaoPage Novel (카카오페이지 소설) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Kakao Entertainment',
    siteUrl: 'https://page.kakao.com/menu/11',
    color: '#eab308',
    desc: 'Kho tiểu thuyết chữ độc quyền gốc bản quyền (Solo Leveling Novel gốc của tác giả Chugong, Overgeared novel)'
  },
  {
    id: 'QIDIAN',
    name: 'Qidian (起点中文网 - China Literature) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'China Literature / Tencent (阅文集团)',
    siteUrl: 'https://www.qidian.com/',
    color: '#dc2626',
    desc: 'Nền tảng tiểu thuyết chữ Tu Tiên & Huyền Huyễn lớn nhất hành tinh (Võ Luyện Đỉnh Phong novel, Toàn Chức Cao Thủ, Đấu La Đại Lục, Phàm Nhân Tu Tiên)'
  },
  {
    id: 'ZONGHENG',
    name: 'Zongheng (纵横中文网) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Baidu / Zongheng Literature',
    siteUrl: 'https://www.zongheng.com/',
    color: '#b91c1c',
    desc: 'Nền tảng tiểu thuyết mạng danh tiếng Trung Quốc (Kiếm Lai novel của Phong Hỏa Hí Chư Hầu, Tuyết Trung Hãn Đao Hành)'
  },
  {
    id: 'JJWXC',
    name: 'Jinjiang Literature (晋江文学城 - Tấn Giang) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    type: 'NOVEL',
    category: 'Tiểu thuyết chữ',
    publisher: 'Jinjiang Literature City',
    siteUrl: 'https://www.jjwxc.net/',
    color: '#ec4899',
    desc: 'Cái nôi tiểu thuyết ngôn tình, tình cảm, xuyên không & đam mỹ số 1 Trung Quốc (Ma Đạo Tổ Sư, Thiên Quan Tứ Phúc)'
  },

  // --- Hentai & 18+ Adult (NXB & Nền tảng Bản quyền Gốc) ---
  {
    id: 'FAKKU',
    name: 'FAKKU Books (Bản quyền chính thức) 🇯🇵🇺🇸',
    country: 'JP',
    flag: '🔞',
    type: 'HENTAI',
    category: '18+ Adult Bản Quyền',
    publisher: 'FAKKU Publishing LLC',
    siteUrl: 'https://www.fakku.net/',
    color: '#e11d48',
    desc: 'Nhà xuất bản Manga 18+ / Hentai bản quyền hợp pháp chính ngạch lớn nhất thế giới, đối tác chính thức của Wani Magazine, Core Magazine, Kuma'
  },
  {
    id: 'DLSITE',
    name: 'DLsite Official (ディーエルサイト) 🇯🇵',
    country: 'JP',
    flag: '🔞',
    type: 'HENTAI',
    category: '18+ Adult Bản Quyền',
    publisher: 'EISYS, Inc. / Geo Holdings',
    siteUrl: 'https://www.dlsite.com/maniax/',
    color: '#be123c',
    desc: 'Chợ truyện tranh 18+, Doujinshi và tác phẩm độc lập có bản quyền lớn nhất thế giới của Nhật Bản với hàng triệu tác phẩm'
  },
  {
    id: 'FANZA',
    name: 'FANZA / DMM Books (ファンザ) 🇯🇵',
    country: 'JP',
    flag: '🔞',
    type: 'HENTAI',
    category: '18+ Adult Bản Quyền',
    publisher: 'DMM.com / Digital Media Mart',
    siteUrl: 'https://book.dmm.co.jp/',
    color: '#881337',
    desc: 'Đế chế truyện tranh, tạp chí & Doujinshi 18+ bản quyền số 1 Nhật Bản, phân phối trực tiếp từ các NXB truyện người lớn uy tín'
  },
  {
    id: 'TOPTOON_ADULT',
    name: 'Toptoon Adult (탑툰 성인 18+) 🇰🇷',
    country: 'KR',
    flag: '🔞',
    type: 'HENTAI',
    category: '18+ Adult Bản Quyền',
    publisher: 'Topco Co., Ltd.',
    siteUrl: 'https://toptoon.com/',
    color: '#f43f5e',
    desc: 'Nền tảng Manhwa 18+ (Adult Webtoon) số 1 Hàn Quốc, nơi phát hành hàng trăm bộ truyện người lớn ăn khách toàn cầu'
  },
  {
    id: 'LEZHIN_ADULT',
    name: 'Lezhin Adult (레진 18+) 🇰🇷',
    country: 'KR',
    flag: '🔞',
    type: 'HENTAI',
    category: '18+ Adult Bản Quyền',
    publisher: 'KidariStudio / Lezhin',
    siteUrl: 'https://www.lezhin.com/ko/adult',
    color: '#e11d48',
    desc: 'Kênh truyện tranh 18+ bản quyền chất lượng cao của Lezhin Comics dành cho độc giả trưởng thành'
  }
];

const apiCache = new Map();

/**
 * Fetch manga list combining standard Genres, granular Tags, Formats (Manga/Novel/Hentai), and Live Sync
 */
export async function fetchMangaList({
  page = 1,
  perPage = 24,
  sort = 'CHAPTERS_DESC',
  selectedFilters = [], // Mảng các thể loại hoặc tag đã chọn
  search = '',
  country = 'ALL',
  status = 'ALL',
  platform = 'ALL',
  format = 'ALL', // 'ALL' | 'MANGA' | 'NOVEL' | 'HENTAI'
  isAdult = null, // boolean | null
  bypassCache = false // Tự động làm mới khi Auto-sync
}) {
  const isSearching = search && search.trim() !== '';
  const resolvedSearch = isSearching ? resolveSearchTerm(search) : '';

  const cacheKey = JSON.stringify({
    page,
    perPage,
    sort,
    selectedFilters: Array.from(selectedFilters).sort(),
    search: resolvedSearch,
    country,
    status,
    platform,
    format,
    isAdult
  });

  if (!bypassCache && apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  const query = `
    query (
      $page: Int,
      $perPage: Int,
      $sort: [MediaSort],
      $genre_in: [String],
      $tag_in: [String],
      $search: String,
      $countryOfOrigin: CountryCode,
      $status: MediaStatus,
      $format: MediaFormat,
      $isAdult: Boolean
    ) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(
          type: MANGA,
          sort: $sort,
          genre_in: $genre_in,
          tag_in: $tag_in,
          search: $search,
          countryOfOrigin: $countryOfOrigin,
          status: $status,
          format: $format,
          isAdult: $isAdult
        ) {
          id
          title {
            romaji
            english
            native
          }
          format
          countryOfOrigin
          chapters
          volumes
          status
          isAdult
          updatedAt
          genres
          tags {
            name
          }
          coverImage {
            large
            extraLarge
            color
          }
          bannerImage
          averageScore
          popularity
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
          }
          externalLinks {
            id
            url
            site
            type
            language
          }
        }
      }
    }
  `;

  let targetCountry = country;
  let targetFormat = null;
  let targetIsAdult = isAdult;

  // Lọc theo Nền tảng gốc nếu được chọn
  if (platform !== 'ALL') {
    const platObj = OFFICIAL_PLATFORMS.find(p => p.id === platform);
    if (platObj) {
      if (platObj.country !== 'ALL') targetCountry = platObj.country;
      if (platObj.type === 'NOVEL') targetFormat = 'NOVEL';
      if (platObj.type === 'HENTAI') targetIsAdult = true;
    }
  }

  // Xử lý bộ lọc định dạng Format (Manga vs Novel vs Hentai)
  if (format === 'NOVEL') {
    targetFormat = 'NOVEL';
    if (targetIsAdult === null) targetIsAdult = false;
  } else if (format === 'MANGA') {
    targetFormat = 'MANGA';
    if (targetIsAdult === null) targetIsAdult = false;
  } else if (format === 'HENTAI') {
    targetIsAdult = true;
  }

  let targetSort = [sort];
  if (isSearching) {
    if (sort === 'CHAPTERS_DESC' || sort === 'CHAPTERS') {
      targetSort = ['SEARCH_MATCH'];
    }
  }

  const variables = {
    page,
    perPage: platform !== 'ALL' ? 50 : perPage,
    sort: targetSort
  };

  if (targetFormat) {
    variables.format = targetFormat;
  }
  if (targetIsAdult !== null && targetIsAdult !== undefined) {
    variables.isAdult = targetIsAdult;
  }

  // Tách biệt giữa Thể loại chuẩn (genre) và Thẻ phân loại (tag)
  const genreList = [];
  const tagList = [];
  (selectedFilters || []).forEach(f => {
    if (OFFICIAL_GENRES.has(f)) {
      genreList.push(f);
      if (f === 'Hentai') {
        variables.isAdult = true;
      }
    } else {
      tagList.push(f);
    }
  });

  if (genreList.length > 0) variables.genre_in = genreList;
  if (tagList.length > 0) variables.tag_in = tagList;

  if (isSearching) {
    variables.search = resolvedSearch;
    targetCountry = 'ALL';
  }
  if (targetCountry && targetCountry !== 'ALL') {
    variables.countryOfOrigin = targetCountry;
  }
  if (status && status !== 'ALL') {
    variables.status = status;
  }

  try {
    const response = await fetch(ANILIST_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.errors) {
      throw new Error(data.errors.map(e => e.message).join(', '));
    }

    const result = data.data.Page;

    if (result.media) {
      result.media.forEach(item => {
        if (ONGOING_CHAPTERS_MAP[item.id]) {
          item.chapters = ONGOING_CHAPTERS_MAP[item.id];
          item.isOngoingEstimated = true;
        }
      });
    }

    if (platform !== 'ALL') {
      result.media = (result.media || []).filter(item => {
        const meta = getOfficialSourceMeta(item);
        return meta.platformId === platform;
      });
    }

    apiCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching manga list from AniList:', error);
    throw error;
  }
}

/**
 * Phân tích & Trích xuất Nhà Xuất Bản / Nền Tảng Gốc Chính Thức
 */
/**
 * Phân tích & Trích xuất Nhà Xuất Bản / Nền Tảng Gốc Chính Thức
 */
export function getOfficialSourceMeta(media) {
  if (!media) return { name: 'Chưa rõ nguồn', flag: '🌐', color: '#6366f1', rawUrl: null, hasRawLink: false };

  const country = media.countryOfOrigin || 'JP';
  const links = media.externalLinks || [];
  const nativeTitle = media.title?.native || media.title?.romaji || '';
  const isAdult = media.isAdult || (media.genres && media.genres.includes('Hentai'));
  const isNovel = media.format === 'NOVEL';

  // 1. XỬ LÝ NỀN TẢNG 18+ / HENTAI BẢN QUYỀN GỐC
  if (isAdult) {
    const fakkuLink = links.find(l => 
      (l.url && l.url.includes('fakku.net')) ||
      (l.site && l.site.toLowerCase().includes('fakku'))
    );
    if (fakkuLink) {
      return {
        platformId: 'FAKKU',
        name: 'FAKKU (Bản quyền 18+)',
        publisher: 'FAKKU Publishing',
        flag: '🔞',
        badgeClass: 'badge-fakku',
        color: '#e11d48',
        rawUrl: fakkuLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.fakku.net/',
        searchUrl: `https://www.fakku.net/search/${encodeURIComponent(nativeTitle)}`
      };
    }

    const dlsiteLink = links.find(l => 
      (l.url && l.url.includes('dlsite.com')) ||
      (l.site && l.site.toLowerCase().includes('dlsite'))
    );
    if (dlsiteLink) {
      return {
        platformId: 'DLSITE',
        name: 'DLsite Official (18+ Gốc)',
        publisher: 'EISYS Inc.',
        flag: '🔞',
        badgeClass: 'badge-dlsite',
        color: '#be123c',
        rawUrl: dlsiteLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.dlsite.com/maniax/',
        searchUrl: `https://www.dlsite.com/maniax/fsr/=/keyword/${encodeURIComponent(nativeTitle)}`
      };
    }

    const fanzaLink = links.find(l => 
      (l.url && (l.url.includes('dmm.co.jp') || l.url.includes('fanza'))) ||
      (l.site && (l.site.toLowerCase().includes('dmm') || l.site.toLowerCase().includes('fanza')))
    );
    if (fanzaLink) {
      return {
        platformId: 'FANZA',
        name: 'FANZA / DMM Books (18+)',
        publisher: 'DMM.com',
        flag: '🔞',
        badgeClass: 'badge-fanza',
        color: '#881337',
        rawUrl: fanzaLink.url,
        hasRawLink: true,
        homeUrl: 'https://book.dmm.co.jp/',
        searchUrl: `https://book.dmm.co.jp/search/?searchstr=${encodeURIComponent(nativeTitle)}`
      };
    }

    const toptoonLink = links.find(l => 
      (l.url && l.url.includes('toptoon.com')) ||
      (l.site && l.site.toLowerCase().includes('toptoon'))
    );
    if (toptoonLink) {
      return {
        platformId: 'TOPTOON_ADULT',
        name: 'Toptoon Adult (탑툰 18+)',
        publisher: 'Topco Co., Ltd.',
        flag: '🔞',
        badgeClass: 'badge-toptoon',
        color: '#f43f5e',
        rawUrl: toptoonLink.url,
        hasRawLink: true,
        homeUrl: 'https://toptoon.com/',
        searchUrl: `https://toptoon.com/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    const lezhinAdultLink = links.find(l => l.site && l.site.toLowerCase().includes('lezhin'));
    if (lezhinAdultLink) {
      return {
        platformId: 'LEZHIN_ADULT',
        name: 'Lezhin Adult (레진 18+)',
        publisher: 'Lezhin Entertainment',
        flag: '🔞',
        badgeClass: 'badge-lezhin-adult',
        color: '#e11d48',
        rawUrl: lezhinAdultLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.lezhin.com/ko/adult',
        searchUrl: `https://www.lezhin.com/ko/search?q=${encodeURIComponent(nativeTitle)}`
      };
    }

    // Fallback cho truyện 18+ dựa trên quốc gia
    if (country === 'KR') {
      return {
        platformId: 'TOPTOON_ADULT',
        name: 'Toptoon / Lezhin 18+ 🇰🇷',
        publisher: 'Topco / Lezhin',
        flag: '🔞',
        badgeClass: 'badge-toptoon',
        color: '#f43f5e',
        rawUrl: `https://toptoon.com/search?keyword=${encodeURIComponent(nativeTitle)}`,
        hasRawLink: false,
        homeUrl: 'https://toptoon.com/',
        searchUrl: `https://toptoon.com/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    return {
      platformId: 'FAKKU',
      name: 'NXB 18+ Bản Quyền Gốc 🇯🇵',
      publisher: 'FAKKU / DLsite / FANZA',
      flag: '🔞',
      badgeClass: 'badge-fakku',
      color: '#e11d48',
      rawUrl: `https://www.dlsite.com/maniax/fsr/=/keyword/${encodeURIComponent(nativeTitle)}`,
      hasRawLink: false,
      homeUrl: 'https://www.fakku.net/',
      searchUrl: `https://www.dlsite.com/maniax/fsr/=/keyword/${encodeURIComponent(nativeTitle)}`
    };
  }

  // 2. XỬ LÝ NỀN TẢNG TIỂU THUYẾT CHỮ / LIGHT NOVEL & WEB NOVEL GỐC
  if (isNovel) {
    const syosetuLink = links.find(l => 
      (l.url && (l.url.includes('syosetu.com') || l.url.includes('ncode.syosetu.com'))) ||
      (l.site && l.site.toLowerCase().includes('syosetu'))
    );
    if (syosetuLink) {
      return {
        platformId: 'SYOSETU',
        name: 'Syosetu (小説家になろう)',
        publisher: 'HinaProject Inc.',
        flag: '📝',
        badgeClass: 'badge-syosetu',
        color: '#10b981',
        rawUrl: syosetuLink.url,
        hasRawLink: true,
        homeUrl: 'https://syosetu.com/',
        searchUrl: `https://yomou.syosetu.com/search.php?word=${encodeURIComponent(nativeTitle)}`
      };
    }

    const kakuyomuLink = links.find(l => 
      (l.url && l.url.includes('kakuyomu.jp')) ||
      (l.site && l.site.toLowerCase().includes('kakuyomu'))
    );
    if (kakuyomuLink) {
      return {
        platformId: 'KAKUYOMU',
        name: 'Kakuyomu (カクヨム)',
        publisher: 'KADOKAWA / Hatena',
        flag: '📝',
        badgeClass: 'badge-kakuyomu',
        color: '#3b82f6',
        rawUrl: kakuyomuLink.url,
        hasRawLink: true,
        homeUrl: 'https://kakuyomu.jp/',
        searchUrl: `https://kakuyomu.jp/search?q=${encodeURIComponent(nativeTitle)}`
      };
    }

    const dengekiLink = links.find(l => 
      l.url && (l.url.includes('dengekibunko.jp') || l.url.includes('sneakerbunko') || l.url.includes('mfbunkoj.jp'))
    );
    if (dengekiLink) {
      return {
        platformId: 'BOOKWALKER_NOVEL',
        name: 'Dengeki / MF Bunko (電撃文庫)',
        publisher: 'Kadokawa Media Works',
        flag: '📝',
        badgeClass: 'badge-dengeki',
        color: '#f97316',
        rawUrl: dengekiLink.url,
        hasRawLink: true,
        homeUrl: 'https://dengekibunko.jp/',
        searchUrl: `https://dengekibunko.jp/product/search/?word=${encodeURIComponent(nativeTitle)}`
      };
    }

    const munpiaLink = links.find(l => 
      (l.url && l.url.includes('munpia.com')) ||
      (l.site && l.site.toLowerCase().includes('munpia'))
    );
    if (munpiaLink) {
      return {
        platformId: 'MUNPIA',
        name: 'Munpia Webnovel (문피아)',
        publisher: 'Munpia Inc.',
        flag: '📝',
        badgeClass: 'badge-munpia',
        color: '#2563eb',
        rawUrl: munpiaLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.munpia.com/',
        searchUrl: `https://www.munpia.com/page/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    const naverSeriesNovelLink = links.find(l => 
      l.url && l.url.includes('series.naver.com/novel')
    );
    if (naverSeriesNovelLink) {
      return {
        platformId: 'NAVER_SERIES_NOVEL',
        name: 'Naver Series Novel (네이버)',
        publisher: 'Naver Corp.',
        flag: '📝',
        badgeClass: 'badge-naver-series',
        color: '#059669',
        rawUrl: naverSeriesNovelLink.url,
        hasRawLink: true,
        homeUrl: 'https://series.naver.com/novel/home.series',
        searchUrl: `https://series.naver.com/search/search.series?t=novel&q=${encodeURIComponent(nativeTitle)}`
      };
    }

    const qidianLink = links.find(l => 
      (l.url && (l.url.includes('qidian.com') || l.url.includes('webnovel.com'))) ||
      (l.site && (l.site.toLowerCase().includes('qidian') || l.site.toLowerCase().includes('webnovel')))
    );
    if (qidianLink) {
      return {
        platformId: 'QIDIAN',
        name: 'Qidian Tu Tiên (起点中文网)',
        publisher: 'China Literature / Tencent',
        flag: '📝',
        badgeClass: 'badge-qidian',
        color: '#dc2626',
        rawUrl: qidianLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.qidian.com/',
        searchUrl: `https://www.qidian.com/so/${encodeURIComponent(nativeTitle)}.html`
      };
    }

    // Fallback cho Novel theo quốc gia
    if (country === 'KR') {
      return {
        platformId: 'MUNPIA',
        name: 'Munpia / Naver Novel 🇰🇷',
        publisher: 'Munpia / Naver Series',
        flag: '📝',
        badgeClass: 'badge-munpia',
        color: '#2563eb',
        rawUrl: `https://series.naver.com/search/search.series?t=novel&q=${encodeURIComponent(nativeTitle)}`,
        hasRawLink: false,
        homeUrl: 'https://www.munpia.com/',
        searchUrl: `https://series.naver.com/search/search.series?t=novel&q=${encodeURIComponent(nativeTitle)}`
      };
    }
    if (country === 'CN') {
      return {
        platformId: 'QIDIAN',
        name: 'Qidian Tu Tiên Gốc 🇨🇳',
        publisher: 'Qidian / China Literature',
        flag: '📝',
        badgeClass: 'badge-qidian',
        color: '#dc2626',
        rawUrl: `https://www.qidian.com/so/${encodeURIComponent(nativeTitle)}.html`,
        hasRawLink: false,
        homeUrl: 'https://www.qidian.com/',
        searchUrl: `https://www.qidian.com/so/${encodeURIComponent(nativeTitle)}.html`
      };
    }
    return {
      platformId: 'SYOSETU',
      name: 'Syosetu / Kadokawa Bunko 🇯🇵',
      publisher: 'Shousetsuka ni Narou / Kadokawa',
      flag: '📝',
      badgeClass: 'badge-syosetu',
      color: '#10b981',
      rawUrl: `https://yomou.syosetu.com/search.php?word=${encodeURIComponent(nativeTitle)}`,
      hasRawLink: false,
      homeUrl: 'https://syosetu.com/',
      searchUrl: `https://yomou.syosetu.com/search.php?word=${encodeURIComponent(nativeTitle)}`
    };
  }

  // 3. XỬ LÝ NỀN TẢNG TRUYỆN TRANH (MANGA / MANHWA / MANHUA)
  if (country === 'KR') {
    const naverLink = links.find(l => 
      (l.url && (l.url.includes('comic.naver.com') || l.url.includes('series.naver.com'))) ||
      (l.site && l.site.toLowerCase().includes('naver'))
    );
    if (naverLink) {
      return {
        platformId: 'NAVER_WEBTOON',
        name: 'Naver Webtoon (네이버)',
        publisher: 'Naver Corporation',
        flag: '🇰🇷',
        badgeClass: 'badge-naver',
        color: '#03c75a',
        rawUrl: naverLink.url,
        hasRawLink: true,
        homeUrl: 'https://comic.naver.com/',
        searchUrl: `https://comic.naver.com/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    const kakaoLink = links.find(l => 
      (l.url && (l.url.includes('page.kakao.com') || l.url.includes('webtoon.kakao.com'))) ||
      (l.site && l.site.toLowerCase().includes('kakao'))
    );
    if (kakaoLink) {
      return {
        platformId: 'KAKAO_PAGE',
        name: 'KakaoPage (카카오)',
        publisher: 'Kakao Entertainment',
        flag: '🇰🇷',
        badgeClass: 'badge-kakao',
        color: '#f59e0b',
        rawUrl: kakaoLink.url,
        hasRawLink: true,
        homeUrl: 'https://page.kakao.com/',
        searchUrl: `https://page.kakao.com/search/result?word=${encodeURIComponent(nativeTitle)}`
      };
    }

    const lezhinLink = links.find(l => l.site && l.site.toLowerCase().includes('lezhin'));
    if (lezhinLink) {
      return {
        platformId: 'LEZHIN',
        name: 'Lezhin Comics (레진)',
        publisher: 'Lezhin Entertainment',
        flag: '🇰🇷',
        badgeClass: 'badge-lezhin',
        color: '#e52528',
        rawUrl: lezhinLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.lezhin.com/',
        searchUrl: `https://www.lezhin.com/ko/search?q=${encodeURIComponent(nativeTitle)}`
      };
    }

    return {
      platformId: 'NAVER_WEBTOON',
      name: 'Webtoon Hàn Quốc 🇰🇷',
      publisher: 'Naver / Kakao',
      flag: '🇰🇷',
      badgeClass: 'badge-naver',
      color: '#03c75a',
      rawUrl: `https://comic.naver.com/search?keyword=${encodeURIComponent(nativeTitle)}`,
      hasRawLink: false,
      homeUrl: 'https://comic.naver.com/',
      searchUrl: `https://comic.naver.com/search?keyword=${encodeURIComponent(nativeTitle)}`
    };
  }

  if (country === 'JP') {
    const jumpLink = links.find(l => 
      (l.url && (l.url.includes('shonenjump') || l.url.includes('mangaplus'))) ||
      (l.site && (l.site.toLowerCase().includes('jump') || l.site.toLowerCase().includes('manga plus')))
    );
    if (jumpLink) {
      return {
        platformId: 'SHUEISHA_JUMP',
        name: 'Shueisha / Jump+ (集英社)',
        publisher: 'Shueisha',
        flag: '🇯🇵',
        badgeClass: 'badge-jump',
        color: '#ff3e24',
        rawUrl: jumpLink.url,
        hasRawLink: true,
        homeUrl: 'https://shonenjumpplus.com/',
        searchUrl: `https://shonenjumpplus.com/search?q=${encodeURIComponent(nativeTitle)}`
      };
    }

    const kadokawaLink = links.find(l => 
      (l.url && (l.url.includes('comic-walker') || l.url.includes('bookwalker') || l.url.includes('kadokawa'))) ||
      (l.site && l.site.toLowerCase().includes('comicwalker'))
    );
    if (kadokawaLink) {
      return {
        platformId: 'KADOKAWA',
        name: 'Kadokawa (角川)',
        publisher: 'Kadokawa Shoten',
        flag: '🇯🇵',
        badgeClass: 'badge-kadokawa',
        color: '#3b82f6',
        rawUrl: kadokawaLink.url,
        hasRawLink: true,
        homeUrl: 'https://comic-walker.com/',
        searchUrl: `https://comic-walker.com/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    const kodanshaLink = links.find(l => 
      l.url && (l.url.includes('shonenmagazine') || l.url.includes('kodansha'))
    );
    if (kodanshaLink) {
      return {
        platformId: 'KODANSHA',
        name: 'Kodansha (講談社)',
        publisher: 'Kodansha',
        flag: '🇯🇵',
        badgeClass: 'badge-kodansha',
        color: '#0284c7',
        rawUrl: kodanshaLink.url,
        hasRawLink: true,
        homeUrl: 'https://pocket.shonenmagazine.com/',
        searchUrl: `https://pocket.shonenmagazine.com/search?keyword=${encodeURIComponent(nativeTitle)}`
      };
    }

    const squareLink = links.find(l => 
      l.url && (l.url.includes('ganganonline') || l.url.includes('square-enix'))
    );
    if (squareLink) {
      return {
        platformId: 'SQUARE_ENIX',
        name: 'Square Enix (スクエニ)',
        publisher: 'Square Enix',
        flag: '🇯🇵',
        badgeClass: 'badge-kadokawa',
        color: '#a855f7',
        rawUrl: squareLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.ganganonline.com/',
        searchUrl: `https://www.ganganonline.com/`
      };
    }

    return {
      platformId: 'SHUEISHA_JUMP',
      name: 'Manga Gốc Nhật Bản 🇯🇵',
      publisher: 'Shueisha / Kodansha',
      flag: '🇯🇵',
      badgeClass: 'badge-jump',
      color: '#ff3e24',
      rawUrl: `https://shonenjumpplus.com/search?q=${encodeURIComponent(nativeTitle)}`,
      hasRawLink: false,
      homeUrl: 'https://shonenjumpplus.com/',
      searchUrl: `https://shonenjumpplus.com/search?q=${encodeURIComponent(nativeTitle)}`
    };
  }

  if (country === 'CN') {
    const kuaikanLink = links.find(l => 
      (l.url && l.url.includes('kuaikanmanhua.com')) ||
      (l.site && l.site.toLowerCase().includes('kuaikan'))
    );
    if (kuaikanLink) {
      return {
        platformId: 'KUAIKAN',
        name: 'Kuaikan Manhua (快看漫画)',
        publisher: 'Kuaikan World',
        flag: '🇨🇳',
        badgeClass: 'badge-kuaikan',
        color: '#eab308',
        rawUrl: kuaikanLink.url,
        hasRawLink: true,
        homeUrl: 'https://www.kuaikanmanhua.com/',
        searchUrl: `https://www.kuaikanmanhua.com/s/result/${encodeURIComponent(nativeTitle)}`
      };
    }

    const bilibiliLink = links.find(l => 
      (l.url && l.url.includes('bilibili')) ||
      (l.site && l.site.toLowerCase().includes('bilibili'))
    );
    if (bilibiliLink) {
      return {
        platformId: 'BILIBILI_MANHUA',
        name: 'Bilibili Manhua (哔哩哔哩)',
        publisher: 'Bilibili Media',
        flag: '🇨🇳',
        badgeClass: 'badge-bilibili',
        color: '#06b6d4',
        rawUrl: bilibiliLink.url,
        hasRawLink: true,
        homeUrl: 'https://manga.bilibili.com/',
        searchUrl: `https://manga.bilibili.com/search?word=${encodeURIComponent(nativeTitle)}`
      };
    }

    const tencentLink = links.find(l => l.url && (l.url.includes('ac.qq.com') || l.url.includes('tencent')));
    if (tencentLink) {
      return {
        platformId: 'TENCENT_DONGMAN',
        name: 'Tencent Dongman (腾讯动漫)',
        publisher: 'Tencent Games',
        flag: '🇨🇳',
        badgeClass: 'badge-bilibili',
        color: '#0ea5e9',
        rawUrl: tencentLink.url,
        hasRawLink: true,
        homeUrl: 'https://ac.qq.com/',
        searchUrl: `https://ac.qq.com/Comic/searchList/search/${encodeURIComponent(nativeTitle)}`
      };
    }

    return {
      platformId: 'KUAIKAN',
      name: 'Manhua Gốc Trung Quốc 🇨🇳',
      publisher: 'Kuaikan / Tencent',
      flag: '🇨🇳',
      badgeClass: 'badge-kuaikan',
      color: '#eab308',
      rawUrl: `https://www.kuaikanmanhua.com/s/result/${encodeURIComponent(nativeTitle)}`,
      hasRawLink: false,
      homeUrl: 'https://www.kuaikanmanhua.com/',
      searchUrl: `https://www.kuaikanmanhua.com/s/result/${encodeURIComponent(nativeTitle)}`
    };
  }

  return {
    platformId: 'OTHER',
    name: 'Nguồn quốc tế 🌐',
    flag: '🌐',
    badgeClass: 'badge-jump',
    color: '#6366f1',
    rawUrl: null,
    hasRawLink: false
  };
}

export async function fetchNaverOfficialWebtoons() {
  const cacheKey = 'naver_webtoons_live';
  if (apiCache.has(cacheKey)) return apiCache.get(cacheKey);

  try {
    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://comic.naver.com/api/webtoon/titlelist/weekday?order=view');
    const res = await fetch(proxyUrl);
    if (!res.ok) throw new Error('Không thể kết nối đến Naver API');
    const data = await res.json();
    apiCache.set(cacheKey, data.titleListMap || {});
    return data.titleListMap || {};
  } catch (e) {
    console.error('Lỗi tải Naver Webtoon Live:', e);
    return null;
  }
}

export function getMangaTitle(media) {
  if (!media || !media.title) return 'Chưa có tên';
  return media.title.english || media.title.romaji || media.title.native || 'Không tên';
}

export function getMangaNativeTitle(media) {
  if (!media || !media.title) return '';
  return media.title.native || '';
}

export function getMangaSubtitle(media) {
  if (!media || !media.title) return '';
  if (media.title.native && media.title.english) {
    return `${media.title.native} • ${media.title.romaji || ''}`;
  }
  return media.title.native || media.title.romaji || '';
}

export function formatChapters(chapters, status, format, volumes) {
  if (format === 'NOVEL') {
    if (volumes) {
      return `${volumes} Tập (${chapters ? chapters + ' chương' : 'Vol'})`;
    }
    if (chapters !== null && chapters !== undefined) {
      return `${chapters.toLocaleString('vi-VN')} chương chữ`;
    }
    return 'Tiểu thuyết đang ra';
  }

  if (chapters !== null && chapters !== undefined) {
    return `${chapters.toLocaleString('vi-VN')} chap`;
  }
  if (status === 'RELEASING') {
    return 'Đang ra (Ongoing)';
  }
  return 'Chưa rõ số chap';
}

export function getOriginMeta(countryCode, format, isAdult) {
  if (isAdult) {
    return { label: '18+ Adult', flag: '🔞', full: 'Bản quyền 18+ Adult Gốc' };
  }

  if (format === 'NOVEL') {
    switch (countryCode) {
      case 'JP':
        return { label: 'Light Novel', flag: '📝', full: 'Nhật Bản (Light Novel Gốc)' };
      case 'KR':
        return { label: 'Webnovel', flag: '📝', full: 'Hàn Quốc (Web Novel Chữ)' };
      case 'CN':
        return { label: 'Tiểu thuyết chữ', flag: '📝', full: 'Trung Quốc (Tu Tiên / Đô Thị Chữ)' };
      default:
        return { label: 'Tiểu thuyết chữ', flag: '📝', full: 'Tiểu thuyết chữ Quốc tế' };
    }
  }

  switch (countryCode) {
    case 'JP':
      return { label: 'Manga Gốc', flag: '🇯🇵', full: 'Nhật Bản (Manga Raw)' };
    case 'KR':
      return { label: 'Manhwa Gốc', flag: '🇰🇷', full: 'Hàn Quốc (Manhwa Raw)' };
    case 'CN':
      return { label: 'Manhua Gốc', flag: '🇨🇳', full: 'Trung Quốc (Manhua Raw)' };
    default:
      return { label: 'Truyện tranh', flag: '🌐', full: 'Quốc tế' };
  }
}

export function getStatusMeta(status) {
  switch (status) {
    case 'FINISHED':
      return { label: 'Đã hoàn thành (Full)', className: 'status-finished' };
    case 'RELEASING':
      return { label: 'Đang phát hành (Ongoing)', className: 'status-releasing' };
    case 'HIATUS':
      return { label: 'Tạm ngưng (Hiatus)', className: 'status-hiatus' };
    case 'CANCELLED':
      return { label: 'Đã ngưng xuất bản', className: 'status-hiatus' };
    default:
      return { label: 'Chưa rõ', className: 'status-finished' };
  }
}
