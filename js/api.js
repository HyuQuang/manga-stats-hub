/**
 * MangaStats Hub - AniList GraphQL API Client
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

// In-memory query cache
const apiCache = new Map();

/**
 * Fetch manga list with dynamic filters and sorting
 */
export async function fetchMangaList({
  page = 1,
  perPage = 24,
  sort = 'CHAPTERS_DESC',
  genres = [],
  search = '',
  country = '',
  status = ''
}) {
  const cacheKey = JSON.stringify({ page, perPage, sort, genres, search, country, status });
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
        }
      }
    }
  `;

  const variables = {
    page,
    perPage,
    sort: [sort]
  };

  if (genres && genres.length > 0) {
    variables.genre_in = genres;
  }
  if (search && search.trim() !== '') {
    variables.search = search.trim();
  }
  if (country && country !== 'ALL') {
    variables.countryOfOrigin = country;
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
    apiCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching manga list from AniList:', error);
    throw error;
  }
}

/**
 * Format title with primary display preference
 */
export function getMangaTitle(media) {
  if (!media || !media.title) return 'Chưa có tên';
  return media.title.english || media.title.romaji || media.title.native || 'Không tên';
}

export function getMangaSubtitle(media) {
  if (!media || !media.title) return '';
  if (media.title.english && media.title.romaji && media.title.english !== media.title.romaji) {
    return media.title.romaji;
  }
  return media.title.native || '';
}

/**
 * Format chapter count
 */
export function formatChapters(chapters, status) {
  if (chapters !== null && chapters !== undefined) {
    return `${chapters.toLocaleString('vi-VN')} chap`;
  }
  if (status === 'RELEASING') {
    return 'Đang ra (chưa rõ)';
  }
  return 'Chưa rõ';
}

/**
 * Vietnamese labels for origins
 */
export function getOriginMeta(countryCode) {
  switch (countryCode) {
    case 'JP':
      return { label: 'Manga', flag: '🇯🇵', full: 'Nhật Bản' };
    case 'KR':
      return { label: 'Manhwa', flag: '🇰🇷', full: 'Hàn Quốc' };
    case 'CN':
      return { label: 'Manhua', flag: '🇨🇳', full: 'Trung Quốc' };
    default:
      return { label: 'Comic', flag: '🌐', full: 'Quốc tế' };
  }
}

/**
 * Status translation & styling
 */
export function getStatusMeta(status) {
  switch (status) {
    case 'FINISHED':
      return { label: 'Hoàn thành', className: 'status-finished' };
    case 'RELEASING':
      return { label: 'Đang phát hành', className: 'status-releasing' };
    case 'HIATUS':
      return { label: 'Tạm ngưng', className: 'status-hiatus' };
    case 'CANCELLED':
      return { label: 'Đã hủy', className: 'status-hiatus' };
    default:
      return { label: 'Chưa rõ', className: 'status-finished' };
  }
}
