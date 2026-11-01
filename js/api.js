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
  { id: 'ALL', name: 'Tất cả nền tảng gốc', country: 'ALL', flag: '🌐' },
  {
    id: 'SHUEISHA_JUMP',
    name: 'Shueisha / Shonen Jump+ 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    publisher: 'Shueisha',
    siteUrl: 'https://shonenjumpplus.com/',
    color: '#ff3e24',
    desc: 'Nhà xuất bản số 1 Nhật Bản (One Piece, Chainsaw Man, Jujutsu Kaisen, Spy x Family)'
  },
  {
    id: 'KODANSHA',
    name: 'Kodansha / Magazine Pocket 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    publisher: 'Kodansha',
    siteUrl: 'https://pocket.shonenmagazine.com/',
    color: '#005bac',
    desc: 'Nhà xuất bản Kodansha (Attack on Titan, Blue Lock, Fairy Tail, Tokyo Revengers)'
  },
  {
    id: 'SHOGAKUKAN',
    name: 'Shogakukan / Sunday Webry 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    publisher: 'Shogakukan',
    siteUrl: 'https://www.sunday-webry.com/',
    color: '#e50012',
    desc: 'Nhà xuất bản Shogakukan (Thám tử Conan, Frieren, Inuyasha, Komi-san)'
  },
  {
    id: 'KADOKAWA',
    name: 'Kadokawa / ComicWalker 🇯🇵',
    country: 'JP',
    flag: '🇯🇵',
    publisher: 'Kadokawa',
    siteUrl: 'https://comic-walker.com/',
    color: '#003e7e',
    desc: 'Đế chế Isekai & Light Novel (Sword Art Online, Re:Zero, Mushoku Tensei)'
  },
  {
    id: 'NAVER_WEBTOON',
    name: 'Naver Webtoon (네이버 웹툰) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    publisher: 'Naver',
    siteUrl: 'https://comic.naver.com/',
    color: '#03c75a',
    desc: 'Nền tảng Webtoon số 1 Hàn Quốc (Tower of God, Lookism, Nano Machine, True Beauty)'
  },
  {
    id: 'KAKAO_PAGE',
    name: 'KakaoPage / Kakao Webtoon 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    publisher: 'Kakao',
    siteUrl: 'https://page.kakao.com/',
    color: '#ffcd00',
    desc: 'Nơi khai sinh Solo Leveling, Overgeared, SSS-Class Revival Hunter, A Returner\'s Magic'
  },
  {
    id: 'LEZHIN',
    name: 'Lezhin Comics (레진) 🇰🇷',
    country: 'KR',
    flag: '🇰🇷',
    publisher: 'Lezhin',
    siteUrl: 'https://www.lezhin.com/',
    color: '#e52528',
    desc: 'Nền tảng Webtoon tâm lý & 18+ hàng đầu Hàn Quốc'
  },
  {
    id: 'KUAIKAN',
    name: 'Kuaikan Manhua (快看漫画) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    publisher: 'Kuaikan',
    siteUrl: 'https://www.kuaikanmanhua.com/',
    color: '#ffdd00',
    desc: 'App truyện tranh số 1 Trung Quốc, sở hữu hàng triệu tác phẩm tu tiên & đô thị'
  },
  {
    id: 'BILIBILI_MANHUA',
    name: 'Bilibili Manhua (哔哩哔哩漫画) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    publisher: 'Bilibili',
    siteUrl: 'https://manga.bilibili.com/',
    color: '#00a1d6',
    desc: 'Cổng truyện tranh chính thức của đế chế Bilibili Trung Quốc'
  },
  {
    id: 'TENCENT_DONGMAN',
    name: 'Tencent Dongman (腾讯动漫) 🇨🇳',
    country: 'CN',
    flag: '🇨🇳',
    publisher: 'Tencent',
    siteUrl: 'https://ac.qq.com/',
    color: '#12b7f5',
    desc: 'Nền tảng truyện của Tencent (Đại Quản Gia Là Ma Hoàng, Toàn Chức Pháp Sư)'
  }
];

const apiCache = new Map();

/**
 * Fetch manga list combining standard Genres and granular Tags
 */
export async function fetchMangaList({
  page = 1,
  perPage = 24,
  sort = 'CHAPTERS_DESC',
  selectedFilters = [], // Mảng các thể loại hoặc tag đã chọn
  search = '',
  country = 'ALL',
  status = 'ALL',
  platform = 'ALL'
}) {
  const isSearching = search && search.trim() !== '';
  const resolvedSearch = isSearching ? resolveSearchTerm(search) : '';

  const cacheKey = JSON.stringify({ page, perPage, sort, selectedFilters: Array.from(selectedFilters).sort(), search: resolvedSearch, country, status, platform });
  if (apiCache.has(cacheKey)) {
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
      $status: MediaStatus
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
          status: $status
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
  if (platform !== 'ALL') {
    const platObj = OFFICIAL_PLATFORMS.find(p => p.id === platform);
    if (platObj && platObj.country !== 'ALL') {
      targetCountry = platObj.country;
    }
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

  // Tách biệt giữa Thể loại chuẩn (genre) và Thẻ phân loại (tag)
  const genreList = [];
  const tagList = [];
  (selectedFilters || []).forEach(f => {
    if (OFFICIAL_GENRES.has(f)) {
      genreList.push(f);
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
export function getOfficialSourceMeta(media) {
  if (!media) return { name: 'Chưa rõ nguồn', flag: '🌐', color: '#6366f1', rawUrl: null, hasRawLink: false };

  const country = media.countryOfOrigin || 'JP';
  const links = media.externalLinks || [];
  const nativeTitle = media.title?.native || media.title?.romaji || '';

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

export function formatChapters(chapters, status) {
  if (chapters !== null && chapters !== undefined) {
    return `${chapters.toLocaleString('vi-VN')} chap`;
  }
  if (status === 'RELEASING') {
    return 'Đang ra (Ongoing)';
  }
  return 'Chưa rõ số chap';
}

export function getOriginMeta(countryCode) {
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
