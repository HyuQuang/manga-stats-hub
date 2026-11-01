/**
 * MangaStats Hub - Multi-Country Official Origins & API Client
 * Tích hợp nguồn gốc xuất bản từ Nhật Bản 🇯🇵, Hàn Quốc 🇰🇷, Trung Quốc 🇨🇳
 */

const ANILIST_API_URL = 'https://graphql.anilist.co';

export const POPULAR_GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mecha',
  'Mystery',
  'Psychological',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Thriller'
];

/**
 * Danh sách các Nhà Xuất Bản & Nền Tảng Gốc Lớn Nhất Theo Quốc Gia
 */
export const OFFICIAL_PLATFORMS = [
  {
    id: 'ALL',
    name: 'Tất cả nền tảng gốc',
    country: 'ALL',
    flag: '🌐'
  },
  // Nhật Bản 🇯🇵
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
  // Hàn Quốc 🇰🇷
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
    desc: 'Nền tảng Webtoon trưởng thành và tâm lý hàng đầu Hàn Quốc'
  },
  // Trung Quốc 🇨🇳
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

// Cache layer
const apiCache = new Map();

/**
 * Fetch manga list with dynamic filters, including externalLinks from raw publishers
 */
export async function fetchMangaList({
  page = 1,
  perPage = 24,
  sort = 'CHAPTERS_DESC',
  genres = [],
  search = '',
  country = 'ALL',
  status = 'ALL',
  platform = 'ALL'
}) {
  const cacheKey = JSON.stringify({ page, perPage, sort, genres, search, country, status, platform });
  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  const query = `
    query (
      $page: Int,
      $perPage: Int,
      $sort: [MediaSort],
      $genre_in: [String],
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

  // Auto-detect country if specific platform selected
  let targetCountry = country;
  if (platform !== 'ALL') {
    const platObj = OFFICIAL_PLATFORMS.find(p => p.id === platform);
    if (platObj && platObj.country !== 'ALL') {
      targetCountry = platObj.country;
    }
  }

  const variables = {
    page,
    perPage: platform !== 'ALL' ? 50 : perPage, // Fetch larger batch when filtering by publisher
    sort: [sort]
  };

  if (genres && genres.length > 0) {
    variables.genre_in = genres;
  }
  if (search && search.trim() !== '') {
    variables.search = search.trim();
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

    // Filter by official platform if specified
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

  // 1. Kiểm tra Hàn Quốc 🇰🇷
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

    // Default Manhwa Fallback: Naver Webtoon Search
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

  // 2. Kiểm tra Nhật Bản 🇯🇵
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

    const piccomaLink = links.find(l => l.url && l.url.includes('piccoma.com'));
    if (piccomaLink) {
      return {
        platformId: 'PICCOMA',
        name: 'Piccoma JP (ピッコマ)',
        publisher: 'Kakao Piccoma',
        flag: '🇯🇵',
        badgeClass: 'badge-piccoma',
        color: '#f97316',
        rawUrl: piccomaLink.url,
        hasRawLink: true,
        homeUrl: 'https://piccoma.com/',
        searchUrl: `https://piccoma.com/web/search/result?word=${encodeURIComponent(nativeTitle)}`
      };
    }

    // Default Manga Fallback: Shonen Jump+ / Shueisha Search
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

  // 3. Kiểm tra Trung Quốc 🇨🇳
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

    // Default Manhua Fallback: Kuaikan Manhua Search
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

/**
 * Lấy danh sách Webtoon trực tiếp từ Naver Webtoon Hàn Quốc (Raw API)
 */
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

/**
 * Format title with primary display preference (Tên gốc native ưu tiên hàng đầu)
 */
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

/**
 * Format chapter count
 */
export function formatChapters(chapters, status) {
  if (chapters !== null && chapters !== undefined) {
    return `${chapters.toLocaleString('vi-VN')} chap`;
  }
  if (status === 'RELEASING') {
    return 'Đang ra (Ongoing)';
  }
  return 'Chưa rõ số chap';
}

/**
 * Vietnamese labels for origins
 */
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

/**
 * Status translation & styling
 */
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
