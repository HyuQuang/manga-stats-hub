/**
 * MangaStats Hub - Main Application Controller with Official Multi-Country Origins
 */

import {
  fetchMangaList,
  fetchNaverOfficialWebtoons,
  OFFICIAL_PLATFORMS,
  GENRE_CATEGORIES,
  ALL_GENRES_AND_TAGS,
  getMangaTitle,
  getMangaNativeTitle,
  getMangaSubtitle,
  getOfficialSourceMeta,
  formatChapters,
  getOriginMeta,
  getStatusMeta,
  removeVietnameseTones
} from './api.js';

import {
  getLibrary,
  isInLibrary,
  toggleFavorite,
  updateProgress,
  removeFavorite,
  getLibraryStats,
  exportLibraryAsFile,
  importLibraryFromFile
} from './storage.js';

// Application State
const state = {
  page: 1,
  perPage: 24,
  sort: 'CHAPTERS_DESC',
  genres: new Set(),
  currentGenreCategory: 'POPULAR',
  genreSearchQuery: '',
  search: '',
  country: 'ALL',
  status: 'ALL',
  platform: 'ALL',
  chapterTier: 'ALL',
  viewMode: 'grid', // 'grid' | 'table'
  activeTab: 'explore', // 'explore' | 'naverLive' | 'directory' | 'analytics' | 'library'
  items: [],
  pageInfo: null,
  isLoading: false,
  detailCache: new Map(),
  naverData: null,
  naverCurrentDay: 'MON',
  currentGenreSuggestions: [],
  activeSuggestionIndex: -1
};

// DOM Elements
const elements = {
  navTabs: document.querySelectorAll('.nav-tab-btn'),
  tabViews: {
    explore: document.getElementById('exploreView'),
    naverLive: document.getElementById('naverLiveView'),
    directory: document.getElementById('directoryView'),
    analytics: document.getElementById('analyticsView'),
    library: document.getElementById('libraryView')
  },
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  sortSelect: document.getElementById('sortSelect'),
  platformSelect: document.getElementById('platformSelect'),
  countrySelect: document.getElementById('countrySelect'),
  statusSelect: document.getElementById('statusSelect'),
  viewBtns: document.querySelectorAll('.view-btn'),
  genreCatNav: document.getElementById('genreCatNav'),
  genreSearchInput: document.getElementById('genreSearchInput'),
  clearGenreSearchBtn: document.getElementById('clearGenreSearchBtn'),
  genreSuggestionsDropdown: document.getElementById('genreSuggestionsDropdown'),
  selectedGenresCountBadge: document.getElementById('selectedGenresCountBadge'),
  genresContainer: document.getElementById('genresContainer'),
  clearGenresBtn: document.getElementById('clearGenresBtn'),
  tierPills: document.querySelectorAll('.tier-pill'),
  resultsContainer: document.getElementById('resultsContainer'),
  resultsCount: document.getElementById('resultsCount'),
  activeFiltersList: document.getElementById('activeFiltersList'),
  paginationContainer: document.getElementById('paginationContainer'),
  
  // Hero Stats
  heroTotalCount: document.getElementById('heroTotalCount'),
  heroTopChapters: document.getElementById('heroTopChapters'),
  heroAvgChapters: document.getElementById('heroAvgChapters'),
  libraryCountBadge: document.getElementById('libraryCountBadge'),

  // Modal
  modalOverlay: document.getElementById('mangaModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalBannerImg: document.getElementById('modalBannerImg'),
  modalCoverImg: document.getElementById('modalCoverImg'),
  modalTitle: document.getElementById('modalTitle'),
  modalSubtitle: document.getElementById('modalSubtitle'),
  modalOfficialSourceBadge: document.getElementById('modalOfficialSourceBadge'),
  modalStatsStrip: document.getElementById('modalStatsStrip'),
  modalDescription: document.getElementById('modalDescription'),
  modalActionFavBtn: document.getElementById('modalActionFavBtn'),
  modalRawLink: document.getElementById('modalRawLink'),
  modalAniListLink: document.getElementById('modalAniListLink'),

  // Naver Live View Elements
  naverWeekdayNav: document.getElementById('naverWeekdayNav'),
  naverResultsContainer: document.getElementById('naverResultsContainer'),

  // Directory View
  platformGridContainer: document.getElementById('platformGridContainer'),

  // Analytics View Elements
  analyticsTotalManga: document.getElementById('analyticsTotalManga'),
  analyticsMaxChap: document.getElementById('analyticsMaxChap'),
  analyticsAvgChap: document.getElementById('analyticsAvgChap'),
  tierDistributionBars: document.getElementById('tierDistributionBars'),
  statusDistributionBars: document.getElementById('statusDistributionBars'),

  // Library View Elements
  libraryGrid: document.getElementById('libraryGrid'),
  libStatTotal: document.getElementById('libStatTotal'),
  libStatRead: document.getElementById('libStatRead'),
  libStatHours: document.getElementById('libStatHours'),
  exportLibBtn: document.getElementById('exportLibBtn'),
  importLibInput: document.getElementById('importLibInput'),
  importLibBtn: document.getElementById('importLibBtn'),

  // Toast
  toast: document.getElementById('toastNotification')
};

/**
 * Initialize Application
 */
export function initApp() {
  renderGenrePills();
  renderDirectory();
  bindEvents();
  updateLibraryBadge();
  loadMangaData();
}

/**
 * Helper to escape HTML characters in dynamic strings
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Biểu tượng cảm xúc trực quan cho từng thể loại & tag
 */
const GENRE_ICONS = {
  Action: '⚔️',
  Adventure: '🧭',
  Fantasy: '🔮',
  Isekai: '🌀',
  Reincarnation: '⏳',
  Cultivation: '🧘‍♂️',
  'Martial Arts': '🥋',
  Wuxia: '🗡️',
  Magic: '✨',
  Dungeon: '🏰',
  Gods: '⚡',
  Demons: '😈',
  'Monster Girls': '🐾',
  'Mahou Shoujo': '🪄',
  'Super Power': '💥',
  Survival: '⛺',
  Revenge: '🔥',
  'Time Manipulation': '⏰',
  Military: '🪖',
  Crime: '🕶️',
  Thriller: '😱',
  Gore: '🩸',
  'Anti-Hero': '🦇',
  Romance: '❤️',
  School: '🏫',
  Harem: '👑',
  Ecchi: '🔞',
  Villainess: '👸',
  'Otome Game': '🎮',
  'Family Life': '🏡',
  Cooking: '🍳',
  Comedy: '🤣',
  Tragedy: '🥀',
  Shounen: '👦',
  Seinen: '🧑',
  Shoujo: '👧',
  Josei: '👩',
  Historical: '📜',
  'Sci-Fi': '🚀',
  Mecha: '🤖',
  'Virtual World': '🌐',
  'Video Games': '👾',
  Cyberpunk: '🏙️',
  'Post-Apocalyptic': '☢️',
  Zombies: '🧟',
  Vampire: '🧛',
  Space: '🪐',
  Drama: '🎭',
  'Slice of Life': '☕',
  Supernatural: '👻',
  Mystery: '🕵️',
  Horror: '🩸',
  Psychological: '🧠',
  Sports: '⚽'
};

function getGenreIcon(id) {
  return GENRE_ICONS[id] || '🏷️';
}

/**
 * Bảng từ khóa tiếng Việt tìm kiếm nhanh cho thể loại
 */
const GENRE_KEYWORDS = {
  Cultivation: ['tu tien', 'tu chan', 'dao gia', 'phi thang', 'tien hiep', 'dan ton', 'chan nhan', 'tien ton', 'kiem tien', 'luyen khi', 'truc co', 'kim dan', 'nguyen anh'],
  Isekai: ['chuyen sinh', 'xuyen khong', 'di gioi', 'the gioi khac', 'tai sinh di gioi'],
  Reincarnation: ['trong sinh', 'tai sinh', 'song lai', 'hoi quy', 'tro ve qua khu'],
  'Martial Arts': ['vo thuat', 'dau khi', 'vo hiep', 'kiem hiep', 'quyen cuoc', 'chan khi', 'noi cong', 'kungfu'],
  Wuxia: ['vo hiep', 'giang ho', 'kiem hiep', 'co phong', 'kiem khach'],
  Dungeon: ['ham nguc', 'pho ban', 'thap', 'tower', 'boss', 'nguoi thuc tinh', 'gate'],
  'Video Games': ['he thong', 'game thu', 'tro choi', 'level', 'thang cap', 'chi so', 'rpg', 'mmo'],
  'Virtual World': ['the gioi ao', 'vr', 'game online', 'thuc te ao'],
  Magic: ['ma phap', 'phep thuat', 'phap su', 'ma thuat', 'nguyen to', 'phu thuy'],
  Villainess: ['nu phu', 'phan dien', 'ac nu', 'nhan vat phan dien'],
  Harem: ['nhieu nu', 'hau cung', 'da the', 'nhieu vo'],
  School: ['hoc duong', 'truong hoc', 'hoc sinh', 'lop hoc', 'cap ba', 'dai hoc'],
  Romance: ['tinh cam', 'lang man', 'ngon tinh', 'yeu duong', 'hen ho'],
  Action: ['hanh dong', 'danh nhau', 'chien dau', 'danh dam', 'vo luc'],
  Adventure: ['phieu luu', 'kham pha', 'hanh trinh'],
  Fantasy: ['ky ao', 'huyen ao', 'ma ao'],
  Comedy: ['hai huoc', 'hai bua', 'vui nhon', 'cuoi'],
  Drama: ['kich tinh', 'tam ly', 'xuc dong'],
  'Slice of Life': ['doi thuong', 'hang ngay', 'binh yen', 'nhe nhang'],
  Supernatural: ['sieu nhien', 'huyen bi', 'tam linh'],
  Mystery: ['bi an', 'pha an', 'trinh tham', 'dieu tra'],
  Horror: ['kinh di', 'ma', 'rung ron', 'am anh', 'ma quy'],
  Psychological: ['tam ly', 'xoan nao', 'dau tri'],
  Sports: ['the thao', 'bong da', 'bong ro', 'cau long', 'dien kinh'],
  'Super Power': ['sieu nang luc', 'nang luc dac biet', 'dps'],
  Survival: ['sinh ton', 'song con', 'hoang dao'],
  Revenge: ['bao thu', 'tra thu', 'phuc thu'],
  'Time Manipulation': ['thoi gian', 'du hanh thoi gian', 'quay nguoc thoi gian', 'ngung dong thoi gian'],
  Military: ['quan su', 'chien tranh', 'quan doi', 'vu khi'],
  Crime: ['toi pham', 'yakuza', 'xa hoi den', 'mafia'],
  Thriller: ['giat gan', 'hoi hop', 'nghet tho'],
  Gore: ['mau me', 'tan khoc', 'kinh di mau'],
  'Anti-Hero': ['phan anh hung', 'chinh ta'],
  Ecchi: ['goi cam', 'ecchi', 'nong bong', '16+'],
  'Otome Game': ['game hen ho', 'game otome'],
  'Family Life': ['gia dinh', 'nuoi con', 'cha con', 'me con'],
  Cooking: ['nau an', 'am thuc', 'dau bep', 'mon an'],
  Tragedy: ['bi kich', 'nuoc mat', 'dau thuong'],
  Shounen: ['thieu nien', 'nam', 'shonen'],
  Seinen: ['thanh nien', 'truong thanh', '18+'],
  Shoujo: ['thieu nu', 'nu', 'shojo'],
  Josei: ['phu nu', 'quy co'],
  Historical: ['lich su', 'co dai', 'trieu dinh', 'hoang gia', 'xuyen ve co dai'],
  'Sci-Fi': ['khoa hoc', 'vien tuong', 'tuong lai', 'sci-fi'],
  Mecha: ['nguoi may', 'robot', 'co giap', 'gundam'],
  Cyberpunk: ['cong nghe cao', 'tuong lai tam toi', 'cyberpunk'],
  'Post-Apocalyptic': ['hau tan the', 'tan the', 'ngay tan the'],
  Zombies: ['xac song', 'zombie', 'tang thi', 'xac song biet di'],
  Vampire: ['ma ca rong', 'hut mau', 'huyet toc'],
  Space: ['vu tru', 'khong gian', 'hanh tinh', 'phi thuyen']
};

/**
 * Tìm kiếm các thể loại phù hợp nhất dựa trên từ khóa người dùng nhập
 */
function filterGenreSuggestions(query) {
  if (!query || !query.trim()) return [];
  const rawQ = query.trim().toLowerCase();
  const cleanQ = removeVietnameseTones(rawQ);

  const scored = [];

  for (const item of ALL_GENRES_AND_TAGS) {
    const rawName = (item.name || '').toLowerCase();
    const cleanName = removeVietnameseTones(rawName);
    const rawId = (item.id || '').toLowerCase();
    const cleanId = removeVietnameseTones(rawId);

    let score = 0;

    // So khớp trực tiếp tên & ID
    if (rawId === rawQ || cleanId === cleanQ) score = 100;
    else if (rawName.startsWith(rawQ) || cleanName.startsWith(cleanQ)) score = 85;
    else if (rawId.startsWith(rawQ) || cleanId.startsWith(cleanQ)) score = 75;
    else if (rawName.includes(rawQ) || cleanName.includes(cleanQ)) score = 55;
    else if (rawId.includes(rawQ) || cleanId.includes(cleanQ)) score = 45;

    // So khớp từ khóa đồng nghĩa tiếng Việt
    const aliases = GENRE_KEYWORDS[item.id] || [];
    for (const alias of aliases) {
      const cleanAlias = removeVietnameseTones(alias).toLowerCase();
      if (cleanAlias === cleanQ) {
        score = Math.max(score, 95);
      } else if (cleanAlias.startsWith(cleanQ)) {
        score = Math.max(score, 80);
      } else if (cleanAlias.includes(cleanQ) || cleanQ.includes(cleanAlias)) {
        score = Math.max(score, 65);
      }
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name));
  return scored.slice(0, 10).map(s => s.item);
}

/**
 * Hiển thị danh sách gợi ý thể loại trong dropdown thả xuống
 */
function renderGenreSuggestions(suggestions, query) {
  if (!elements.genreSuggestionsDropdown) return;

  if (!query) {
    hideGenreSuggestions();
    return;
  }

  if (suggestions.length === 0) {
    elements.genreSuggestionsDropdown.innerHTML = `
      <div class="genre-suggestion-empty">
        <div>🔍 Không tìm thấy thể loại khớp với "<strong>${escapeHtml(query)}</strong>"</div>
        <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem;">
          Thử tìm: <em>tu tiên, isekai, trọng sinh, võ thuật, hầm ngục, học đường...</em>
        </div>
      </div>
    `;
    elements.genreSuggestionsDropdown.style.display = 'block';
    state.currentGenreSuggestions = [];
    state.activeSuggestionIndex = -1;
    return;
  }

  state.currentGenreSuggestions = suggestions;
  state.activeSuggestionIndex = 0; // Tự động chọn mục đầu tiên

  elements.genreSuggestionsDropdown.innerHTML = suggestions.map((item, idx) => {
    const isSelected = state.genres.has(item.id);
    const icon = getGenreIcon(item.id);
    return `
      <div class="genre-suggestion-item ${idx === 0 ? 'active-item' : ''} ${isSelected ? 'is-selected' : ''}" data-genre-id="${item.id}" data-index="${idx}">
        <div class="genre-suggestion-left">
          <span class="genre-suggestion-icon">${icon}</span>
          <div>
            <div class="genre-suggestion-name">${escapeHtml(item.name)}</div>
            <div class="genre-suggestion-sub">👉 Hiện các truyện thể loại này (Bấm hoặc Enter)</div>
          </div>
        </div>
        <div class="genre-suggestion-right" style="display: flex; align-items: center; gap: 0.45rem;">
          ${isSelected ? '<span class="genre-suggestion-badge" style="background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-weight: 700;">Đang lọc ✓</span>' : ''}
          <span class="genre-suggestion-btn">Xem truyện ➔</span>
        </div>
      </div>
    `;
  }).join('');

  elements.genreSuggestionsDropdown.style.display = 'block';
}

/**
 * Cập nhật đường viền/màu nền của mục đang được chọn bằng bàn phím (Arrow Up/Down)
 */
function updateSuggestionHighlight() {
  if (!elements.genreSuggestionsDropdown) return;
  const items = elements.genreSuggestionsDropdown.querySelectorAll('.genre-suggestion-item');
  items.forEach((item, idx) => {
    if (idx === state.activeSuggestionIndex) {
      item.classList.add('active-item');
      item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else {
      item.classList.remove('active-item');
    }
  });
}

/**
 * Khi người dùng chọn một thể loại từ dropdown hoặc bấm Enter
 * -> Lọc ngay các truyện thuộc thể loại đó
 */
function selectGenreSuggestion(genreId) {
  const item = ALL_GENRES_AND_TAGS.find(t => t.id === genreId);
  if (!item) return;

  // Lọc duy nhất theo thể loại vừa chọn
  state.genres.clear();
  state.genres.add(genreId);

  // Hiển thị tên thể loại trong ô tìm kiếm để người dùng biết đang lọc gì
  if (elements.genreSearchInput) {
    elements.genreSearchInput.value = item.name;
  }
  if (elements.clearGenreSearchBtn) {
    elements.clearGenreSearchBtn.style.display = 'block';
  }
  state.genreSearchQuery = '';
  hideGenreSuggestions();

  // Cập nhật giao diện huy hiệu và pills
  renderGenrePills();
  updateActiveFilterBadges();

  // Reset trang và nạp dữ liệu truyện theo thể loại vừa chọn
  state.page = 1;
  loadMangaData();

  // Thông báo phản hồi cho người dùng
  showToast(`📚 Đang hiển thị các truyện thể loại: ${item.name}`);
}

/**
 * Ẩn dropdown gợi ý
 */
function hideGenreSuggestions() {
  if (elements.genreSuggestionsDropdown) {
    elements.genreSuggestionsDropdown.style.display = 'none';
  }
  state.currentGenreSuggestions = [];
  state.activeSuggestionIndex = -1;
}

/**
 * Render Genre & Tag Filter Badges with Category Navigation and Live Search
 */
function renderGenrePills() {
  let list = [];
  if (state.currentGenreCategory === 'ALL_TAGS') {
    list = ALL_GENRES_AND_TAGS;
  } else if (GENRE_CATEGORIES[state.currentGenreCategory]) {
    list = GENRE_CATEGORIES[state.currentGenreCategory].items;
  } else {
    list = GENRE_CATEGORIES.POPULAR.items;
  }

  // Đảm bảo các thể loại đang được chọn luôn xuất hiện ở đầu để người dùng dễ nhìn thấy
  const listIds = new Set(list.map(i => i.id));
  const activeExtra = [];
  state.genres.forEach(gId => {
    if (!listIds.has(gId)) {
      const match = ALL_GENRES_AND_TAGS.find(i => i.id === gId);
      if (match) activeExtra.push(match);
    }
  });
  list = [...activeExtra, ...list];

  // Lọc theo từ khóa tìm kiếm thể loại (nếu có)
  if (state.genreSearchQuery) {
    const q = state.genreSearchQuery.toLowerCase();
    const cleanQ = removeVietnameseTones(q);
    list = ALL_GENRES_AND_TAGS.filter(item => {
      const n = item.name.toLowerCase();
      const cn = removeVietnameseTones(n);
      const id = item.id.toLowerCase();
      return n.includes(q) || cn.includes(cleanQ) || id.includes(q);
    });
  }

  if (list.length === 0) {
    elements.genresContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted); padding: 0.5rem;">Không tìm thấy thể loại khớp với "${escapeHtml(state.genreSearchQuery)}"</span>`;
    return;
  }

  elements.genresContainer.innerHTML = list.map(item => `
    <button class="genre-tag ${state.genres.has(item.id) ? 'active' : ''}" data-genre="${item.id}" title="${item.name}">
      ${getGenreIcon(item.id)} ${item.name}
    </button>
  `).join('');

  if (elements.selectedGenresCountBadge) {
    if (state.genres.size > 0) {
      elements.selectedGenresCountBadge.style.display = 'inline-block';
      elements.selectedGenresCountBadge.textContent = `Đã chọn: ${state.genres.size}`;
    } else {
      elements.selectedGenresCountBadge.style.display = 'none';
    }
  }
}

/**
 * Bind DOM Event Listeners
 */
function bindEvents() {
  // Navigation Tabs
  elements.navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      switchTab(target);
    });
  });

  // Search with debounce
  let searchTimeout = null;
  elements.searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    elements.clearSearchBtn.style.display = val ? 'block' : 'none';
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.search = val.trim();
      state.page = 1;
      loadMangaData();
    }, 400);
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    elements.clearSearchBtn.style.display = 'none';
    state.search = '';
    state.page = 1;
    loadMangaData();
  });

  // Sort Selection
  elements.sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    state.page = 1;
    loadMangaData();
  });

  // Platform / Publisher Selection (KEY USER REQUIREMENT)
  elements.platformSelect.addEventListener('change', (e) => {
    state.platform = e.target.value;
    state.page = 1;
    loadMangaData();
  });

  // Country Selection
  elements.countrySelect.addEventListener('change', (e) => {
    state.country = e.target.value;
    state.page = 1;
    loadMangaData();
  });

  // Status Selection
  elements.statusSelect.addEventListener('change', (e) => {
    state.status = e.target.value;
    state.page = 1;
    loadMangaData();
  });

  // Genre Category Navigation Tab Switcher
  if (elements.genreCatNav) {
    elements.genreCatNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.genre-cat-btn');
      if (!btn) return;
      elements.genreCatNav.querySelectorAll('.genre-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentGenreCategory = btn.dataset.cat;
      state.genreSearchQuery = '';
      if (elements.genreSearchInput) elements.genreSearchInput.value = '';
      hideGenreSuggestions();
      renderGenrePills();
    });
  }

  // Genre Autocomplete & Live Search Input with Suggestion Dropdown
  if (elements.genreSearchInput && elements.genreSuggestionsDropdown) {
    let genreAutoFilterTimeout = null;

    elements.genreSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      const trimmed = val.trim();
      state.genreSearchQuery = trimmed;

      if (elements.clearGenreSearchBtn) {
        elements.clearGenreSearchBtn.style.display = trimmed ? 'block' : 'none';
      }

      const suggestions = filterGenreSuggestions(trimmed);
      renderGenreSuggestions(suggestions, trimmed);
      renderGenrePills();

      // Khi người dùng dừng gõ 450ms ("ghi xong") -> Tự động nạp truyện thể loại khớp nhất!
      clearTimeout(genreAutoFilterTimeout);
      genreAutoFilterTimeout = setTimeout(() => {
        if (trimmed) {
          const matches = filterGenreSuggestions(trimmed);
          if (matches.length > 0) {
            const topMatch = matches[0];
            if (!state.genres.has(topMatch.id) || state.genres.size !== 1) {
              state.genres.clear();
              state.genres.add(topMatch.id);
              renderGenrePills();
              updateActiveFilterBadges();
              state.page = 1;
              loadMangaData();
              showToast(`🏷️ Tự động lọc các truyện: ${topMatch.name}`);
            }
          }
        }
      }, 450);
    });

    // Nút Xóa nhanh thể loại đã tìm (✕)
    if (elements.clearGenreSearchBtn) {
      elements.clearGenreSearchBtn.addEventListener('click', () => {
        clearTimeout(genreAutoFilterTimeout);
        elements.genreSearchInput.value = '';
        elements.clearGenreSearchBtn.style.display = 'none';
        state.genreSearchQuery = '';
        hideGenreSuggestions();
        state.genres.clear();
        renderGenrePills();
        updateActiveFilterBadges();
        state.page = 1;
        loadMangaData();
        showToast('Đã xóa bộ lọc thể loại');
      });
    }

    elements.genreSearchInput.addEventListener('keydown', (e) => {
      const dropdownOpen = elements.genreSuggestionsDropdown.style.display === 'block';

      if (e.key === 'ArrowDown') {
        if (dropdownOpen && state.currentGenreSuggestions.length > 0) {
          e.preventDefault();
          state.activeSuggestionIndex = (state.activeSuggestionIndex + 1) % state.currentGenreSuggestions.length;
          updateSuggestionHighlight();
        }
      } else if (e.key === 'ArrowUp') {
        if (dropdownOpen && state.currentGenreSuggestions.length > 0) {
          e.preventDefault();
          state.activeSuggestionIndex = (state.activeSuggestionIndex - 1 + state.currentGenreSuggestions.length) % state.currentGenreSuggestions.length;
          updateSuggestionHighlight();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(genreAutoFilterTimeout);
        const val = elements.genreSearchInput.value.trim();
        if (dropdownOpen && state.activeSuggestionIndex >= 0 && state.activeSuggestionIndex < state.currentGenreSuggestions.length) {
          selectGenreSuggestion(state.currentGenreSuggestions[state.activeSuggestionIndex].id);
        } else if (state.currentGenreSuggestions.length > 0) {
          selectGenreSuggestion(state.currentGenreSuggestions[0].id);
        } else if (val) {
          const matches = filterGenreSuggestions(val);
          if (matches.length > 0) {
            selectGenreSuggestion(matches[0].id);
          }
        }
      } else if (e.key === 'Escape') {
        hideGenreSuggestions();
      }
    });

    elements.genreSearchInput.addEventListener('focus', (e) => {
      const val = e.target.value.trim();
      if (val) {
        const suggestions = filterGenreSuggestions(val);
        renderGenreSuggestions(suggestions, val);
      }
    });

    // Delegate click on suggestions dropdown item
    elements.genreSuggestionsDropdown.addEventListener('click', (e) => {
      const itemEl = e.target.closest('.genre-suggestion-item');
      if (!itemEl) return;
      const genreId = itemEl.dataset.genreId;
      if (genreId) {
        clearTimeout(genreAutoFilterTimeout);
        selectGenreSuggestion(genreId);
      }
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      const wrapper = document.getElementById('genreSearchWrapper');
      if (wrapper && !wrapper.contains(e.target)) {
        hideGenreSuggestions();
      }
    });
  }

  // Genre selection toggle
  elements.genresContainer.addEventListener('click', (e) => {
    const tag = e.target.closest('.genre-tag');
    if (!tag) return;
    const genre = tag.dataset.genre;
    if (state.genres.has(genre)) {
      state.genres.delete(genre);
      tag.classList.remove('active');
    } else {
      state.genres.add(genre);
      tag.classList.add('active');
    }
    renderGenrePills();
    state.page = 1;
    updateActiveFilterBadges();
    loadMangaData();
  });

  elements.clearGenresBtn.addEventListener('click', () => {
    state.genres.clear();
    renderGenrePills();
    updateActiveFilterBadges();
    state.page = 1;
    loadMangaData();
  });

  // Chapter Tier Pills
  elements.tierPills.forEach(pill => {
    pill.addEventListener('click', () => {
      elements.tierPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.chapterTier = pill.dataset.tier;
      renderCurrentView();
    });
  });

  // View Mode Switcher
  elements.viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.viewMode = btn.dataset.view;
      renderCurrentView();
    });
  });

  // Modal events
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === '/' && document.activeElement !== elements.searchInput) {
      e.preventDefault();
      elements.searchInput.focus();
    }
  });

  // Naver Live Weekday Nav
  if (elements.naverWeekdayNav) {
    elements.naverWeekdayNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.weekday-btn');
      if (!btn) return;
      elements.naverWeekdayNav.querySelectorAll('.weekday-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.naverCurrentDay = btn.dataset.day;
      renderNaverLiveView();
    });
  }

  // Library export & import
  elements.exportLibBtn.addEventListener('click', () => {
    exportLibraryAsFile();
    showToast('💾 Đã tải về tệp sao lưu Tủ truyện!');
  });

  elements.importLibBtn.addEventListener('click', () => {
    elements.importLibInput.click();
  });

  elements.importLibInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      importLibraryFromFile(file, (err) => {
        if (err) {
          showToast('❌ Lỗi định dạng tệp sao lưu!', true);
        } else {
          showToast('✅ Đã khôi phục dữ liệu Tủ truyện thành công!');
          updateLibraryBadge();
          renderLibraryView();
        }
      });
    }
  });
}

/**
 * Switch Active View Tab
 */
function switchTab(tabId) {
  state.activeTab = tabId;
  elements.navTabs.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });

  Object.keys(elements.tabViews).forEach(key => {
    if (elements.tabViews[key]) {
      elements.tabViews[key].style.display = key === tabId ? 'block' : 'none';
    }
  });

  if (tabId === 'naverLive') {
    loadNaverData();
  } else if (tabId === 'analytics') {
    renderAnalyticsView();
  } else if (tabId === 'library') {
    renderLibraryView();
  }
}

/**
 * Fetch and Load Manga Data from AniList with Raw Publisher Data
 */
async function loadMangaData() {
  if (state.isLoading) return;
  state.isLoading = true;
  renderLoadingSkeleton();

  try {
    const data = await fetchMangaList({
      page: state.page,
      perPage: state.perPage,
      sort: state.sort,
      selectedFilters: Array.from(state.genres),
      search: state.search,
      country: state.country,
      status: state.status,
      platform: state.platform
    });

    state.items = data.media || [];
    state.pageInfo = data.pageInfo || null;

    // Cache items for detail view
    state.items.forEach(item => state.detailCache.set(item.id, item));

    updateHeroStats();
    updateActiveFilterBadges();
    renderCurrentView();
    renderPagination();
  } catch (error) {
    elements.resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-xl);">
        <p style="color: var(--accent-rose); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">
          ⚠️ Không thể tải dữ liệu truyện
        </p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
          ${error.message || 'Vui lòng kiểm tra lại kết nối mạng hoặc thử lại.'}
        </p>
        <button class="btn-primary" onclick="window.location.reload()" style="margin: 0 auto;">
          🔄 Tải lại trang
        </button>
      </div>
    `;
  } finally {
    state.isLoading = false;
  }
}

/**
 * Filter items according to the local chapter tier
 */
function getFilteredItems() {
  if (state.chapterTier === 'ALL') return state.items;

  return state.items.filter(item => {
    const chaps = item.chapters || 0;
    switch (state.chapterTier) {
      case 'EPIC_1000':
        return chaps >= 1000;
      case 'LONG_500':
        return chaps >= 500 && chaps < 1000;
      case 'MED_100':
        return chaps >= 100 && chaps < 500;
      case 'SHORT':
        return chaps > 0 && chaps < 100;
      default:
        return true;
    }
  });
}

/**
 * Render Current View (Grid or Table)
 */
function renderCurrentView() {
  const filtered = getFilteredItems();
  let genreInfo = '';
  if (state.genres.size > 0) {
    const genreNames = Array.from(state.genres).map(g => {
      const match = ALL_GENRES_AND_TAGS.find(i => i.id === g);
      return match ? match.name : g;
    }).join(', ');
    genreInfo = ` — Đang lọc theo: <span style="color: #a5b4fc; font-weight: 700;">🏷️ ${genreNames}</span>`;
  }
  elements.resultsCount.innerHTML = `Hiển thị <strong>${filtered.length}</strong> / ${state.pageInfo ? state.pageInfo.total.toLocaleString('vi-VN') : filtered.length} tác phẩm${genreInfo}`;

  if (filtered.length === 0) {
    const rawSearchUrlJP = `https://shonenjumpplus.com/search?q=${encodeURIComponent(state.search)}`;
    const rawSearchUrlKR = `https://comic.naver.com/search?keyword=${encodeURIComponent(state.search)}`;
    const rawSearchUrlCN = `https://www.kuaikanmanhua.com/s/result/${encodeURIComponent(state.search)}`;

    elements.resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</p>
        <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 0.5rem;">
          ${state.search ? `Không tìm thấy kết quả cho "${state.search}"` : 'Không có tác phẩm nào phù hợp'}
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.5;">
          ${state.search ? 'Hệ thống đã tự động dịch tên tiếng Việt và tra cứu. Nếu truyện quá mới hoặc chưa cập nhật, bạn có thể bấm thẳng vào các nút bên dưới để tra cứu trực tiếp trên các web mẹ của từng nước:' : 'Hãy thử nới lỏng bộ lọc thể loại, nền tảng gốc hoặc khoảng số chap nhé.'}
        </p>
        ${state.search ? `
          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <a href="${rawSearchUrlJP}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="border-color: #ef4444; color: #f87171; font-weight: 600;">
              🇯🇵 Tìm trên Shonen Jump+ (Nhật) ↗
            </a>
            <a href="${rawSearchUrlKR}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="border-color: #22c55e; color: #86efac; font-weight: 600;">
              🇰🇷 Tìm trên Naver Webtoon (Hàn) ↗
            </a>
            <a href="${rawSearchUrlCN}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="border-color: #eab308; color: #fde047; font-weight: 600;">
              🇨🇳 Tìm trên Kuaikan Manhua (Trung) ↗
            </a>
          </div>
        ` : ''}
      </div>
    `;
    return;
  }

  if (state.viewMode === 'grid') {
    renderGrid(filtered);
  } else {
    renderTable(filtered);
  }
}

/**
 * Render Manga Cards Grid View with Official Origin Badges
 */
function renderGrid(items) {
  elements.resultsContainer.className = 'manga-grid';
  elements.resultsContainer.innerHTML = items.map(manga => {
    const title = getMangaTitle(manga);
    const nativeTitle = getMangaNativeTitle(manga);
    const chaps = manga.chapters;
    const origin = getOriginMeta(manga.countryOfOrigin);
    const status = getStatusMeta(manga.status);
    const sourceMeta = getOfficialSourceMeta(manga);
    const isSaved = isInLibrary(manga.id);

    let chapBadgeClass = 'badge-chapters';
    if (chaps >= 1000) chapBadgeClass += ' highlight-huge';
    else if (chaps >= 500) chapBadgeClass += ' highlight-high';

    return `
      <div class="manga-card" data-id="${manga.id}">
        <div class="card-poster-wrap">
          <img class="card-poster" src="${manga.coverImage?.large || ''}" alt="${title}" loading="lazy" />
          <div class="${chapBadgeClass}">
            📖 ${formatChapters(chaps, manga.status)}
          </div>
          <div class="badge-origin">
            ${origin.flag} ${origin.label}
          </div>
          ${manga.averageScore ? `
            <div class="badge-score">
              ★ ${(manga.averageScore / 10).toFixed(1)}
            </div>
          ` : ''}
        </div>
        <div class="card-body">
          <h3 class="card-title" title="${title}">${title}</h3>
          ${nativeTitle ? `<div class="card-native-title" title="Tên gốc: ${nativeTitle}">📌 ${nativeTitle}</div>` : ''}
          
          <div style="margin-bottom: 0.65rem;">
            <a href="${sourceMeta.rawUrl || sourceMeta.searchUrl}" target="_blank" rel="noopener noreferrer" class="badge-official-source ${sourceMeta.badgeClass}" title="Nền tảng xuất bản gốc: ${sourceMeta.name}">
              🏢 ${sourceMeta.name} ↗
            </a>
          </div>

          <div class="card-genres">
            ${(manga.genres || []).slice(0, 3).map(g => `<span class="card-genre-pill">${g}</span>`).join('')}
          </div>
          <div class="card-footer">
            <span class="card-status ${status.className}">
              <span class="status-dot"></span>
              ${status.label}
            </span>
            <button class="card-action-btn ${isSaved ? 'saved' : ''}" data-action="fav" data-id="${manga.id}" title="${isSaved ? 'Xóa khỏi tủ truyện' : 'Lưu vào tủ truyện'}">
              ${isSaved ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  attachCardEvents();
}

/**
 * Render Manga Stats Table View
 */
function renderTable(items) {
  elements.resultsContainer.className = 'table-view-container';
  const isSortedByChapDesc = state.sort === 'CHAPTERS_DESC';
  const isSortedByChapAsc = state.sort === 'CHAPTERS';

  elements.resultsContainer.innerHTML = `
    <table class="stats-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tác phẩm & Tên gốc</th>
          <th>Nền tảng xuất bản gốc</th>
          <th class="sortable ${isSortedByChapDesc || isSortedByChapAsc ? 'sorted' : ''}" id="tableSortChapBtn" title="Bấm để đảo chiều sắp xếp số chap">
            Số chương ${isSortedByChapDesc ? '▼ (Cao -> Thấp)' : isSortedByChapAsc ? '▲ (Thấp -> Cao)' : '↕'}
          </th>
          <th>Số tập</th>
          <th>Đánh giá</th>
          <th>Trạng thái</th>
          <th>Web Gốc</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((manga, index) => {
          const rank = (state.page - 1) * state.perPage + index + 1;
          const title = getMangaTitle(manga);
          const nativeTitle = getMangaNativeTitle(manga);
          const chaps = manga.chapters;
          const status = getStatusMeta(manga.status);
          const sourceMeta = getOfficialSourceMeta(manga);

          return `
            <tr data-id="${manga.id}" style="cursor: pointer;">
              <td class="table-rank ${rank === 1 ? 'top-1' : rank === 2 ? 'top-2' : rank === 3 ? 'top-3' : ''}">
                ${rank <= 3 ? `🏆 ${rank}` : rank}
              </td>
              <td>
                <div class="table-manga-cell">
                  <img class="table-manga-thumb" src="${manga.coverImage?.large || ''}" alt="${title}" loading="lazy" />
                  <div class="table-manga-info">
                    <h4>${title}</h4>
                    ${nativeTitle ? `<p style="color: #a5b4fc; font-weight: 600;">${nativeTitle}</p>` : ''}
                    <p>${(manga.genres || []).slice(0, 3).join(', ')}</p>
                  </div>
                </div>
              </td>
              <td>
                <a href="${sourceMeta.rawUrl || sourceMeta.searchUrl}" target="_blank" rel="noopener noreferrer" class="badge-official-source ${sourceMeta.badgeClass}">
                  ${sourceMeta.flag} ${sourceMeta.name}
                </a>
              </td>
              <td>
                <span class="table-chapters-badge ${chaps >= 500 ? 'high' : ''}">
                  ${chaps !== null && chaps !== undefined ? chaps.toLocaleString('vi-VN') + ' chap' : 'Đang cập nhật'}
                </span>
              </td>
              <td>${manga.volumes ? `${manga.volumes} vol` : '-'}</td>
              <td>
                ${manga.averageScore ? `
                  <span style="color: #fbbf24; font-weight: 700;">
                    ★ ${(manga.averageScore / 10).toFixed(1)}
                  </span>
                ` : '-'}
              </td>
              <td>
                <span class="card-status ${status.className}">
                  <span class="status-dot"></span>
                  ${status.label}
                </span>
              </td>
              <td>
                <a href="${sourceMeta.rawUrl || sourceMeta.searchUrl}" target="_blank" rel="noopener noreferrer" class="btn-text-link" style="color: #22c55e; font-weight: 700;">
                  Đọc Raw ↗
                </a>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  // Attach table header sort click
  const tableSortChapBtn = document.getElementById('tableSortChapBtn');
  if (tableSortChapBtn) {
    tableSortChapBtn.addEventListener('click', () => {
      if (state.sort === 'CHAPTERS_DESC') {
        state.sort = 'CHAPTERS';
        elements.sortSelect.value = 'CHAPTERS';
      } else {
        state.sort = 'CHAPTERS_DESC';
        elements.sortSelect.value = 'CHAPTERS_DESC';
      }
      state.page = 1;
      loadMangaData();
    });
  }

  attachCardEvents();
}

/**
 * Attach Card & Table Click Events
 */
function attachCardEvents() {
  const clickTargets = elements.resultsContainer.querySelectorAll('.manga-card, .stats-table tbody tr');
  clickTargets.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="fav"]') || e.target.closest('a')) return;
      const id = parseInt(el.dataset.id, 10);
      if (id) openModal(id);
    });
  });

  const favBtns = elements.resultsContainer.querySelectorAll('[data-action="fav"]');
  favBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      const manga = state.detailCache.get(id);
      if (manga) {
        const added = toggleFavorite(manga);
        btn.classList.toggle('saved', added);
        btn.innerHTML = added ? '❤️' : '🤍';
        updateLibraryBadge();
        showToast(added ? `❤️ Đã lưu "${getMangaTitle(manga)}" vào Tủ truyện` : `Đã bỏ lưu "${getMangaTitle(manga)}"`);
      }
    });
  });
}

/**
 * Render Skeleton Loading
 */
function renderLoadingSkeleton() {
  elements.resultsContainer.className = 'manga-grid';
  elements.resultsContainer.innerHTML = Array(12).fill(0).map(() => `
    <div class="skeleton-card"></div>
  `).join('');
}

/**
 * Update Top Hero Statistics
 */
function updateHeroStats() {
  if (!state.items.length) return;

  const validChaps = state.items.map(it => it.chapters || 0).filter(c => c > 0);
  const maxChap = validChaps.length ? Math.max(...validChaps) : 0;

  if (state.pageInfo && elements.heroTotalCount) {
    elements.heroTotalCount.textContent = state.pageInfo.total.toLocaleString('vi-VN');
  }
  if (elements.heroTopChapters) {
    elements.heroTopChapters.textContent = `${maxChap.toLocaleString('vi-VN')} chap`;
  }
}

/**
 * Render Active Filter Badges Strip
 */
function updateActiveFilterBadges() {
  const badges = [];

  if (state.search) {
    badges.push({ text: `🔍 Tìm: "${state.search}"` });
  }
  if (state.platform !== 'ALL') {
    const plat = OFFICIAL_PLATFORMS.find(p => p.id === state.platform);
    if (plat) badges.push({ text: `🏢 NXB: ${plat.name}` });
  }
  if (state.country !== 'ALL') {
    const meta = getOriginMeta(state.country);
    badges.push({ text: `${meta.flag} ${meta.label}` });
  }
  if (state.status !== 'ALL') {
    const meta = getStatusMeta(state.status);
    badges.push({ text: `${meta.label}` });
  }
  state.genres.forEach(g => {
    const item = ALL_GENRES_AND_TAGS.find(t => t.id === g);
    badges.push({ text: `🏷️ ${item ? item.name : g}`, genreId: g });
  });

  elements.activeFiltersList.innerHTML = badges.map(b => `
    <span class="filter-badge-item ${b.genreId ? 'clickable' : ''}" ${b.genreId ? `data-remove-genre="${b.genreId}" title="Bấm để bỏ thể loại này" style="cursor: pointer;"` : ''}>
      ${b.text} ${b.genreId ? '<span style="opacity: 0.8; margin-left: 5px; font-weight: 700;">✕</span>' : ''}
    </span>
  `).join('');

  // Gắn sự kiện click để xóa nhanh từng thể loại
  elements.activeFiltersList.querySelectorAll('[data-remove-genre]').forEach(el => {
    el.addEventListener('click', () => {
      const gId = el.dataset.removeGenre;
      state.genres.delete(gId);
      if (elements.genreSearchInput) elements.genreSearchInput.value = '';
      if (elements.clearGenreSearchBtn) elements.clearGenreSearchBtn.style.display = 'none';
      renderGenrePills();
      updateActiveFilterBadges();
      state.page = 1;
      loadMangaData();
    });
  });
}

/**
 * Render Pagination Controls
 */
function renderPagination() {
  if (!state.pageInfo) {
    elements.paginationContainer.innerHTML = '';
    return;
  }

  const { currentPage, hasNextPage, lastPage } = state.pageInfo;

  elements.paginationContainer.innerHTML = `
    <button class="page-btn" id="prevPageBtn" ${currentPage <= 1 ? 'disabled' : ''}>
      ← Trang trước
    </button>
    <span class="page-info">
      Trang <strong>${currentPage}</strong> / ${lastPage || '?'}
    </span>
    <button class="page-btn" id="nextPageBtn" ${!hasNextPage ? 'disabled' : ''}>
      Trang sau →
    </button>
  `;

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.page > 1) {
        state.page--;
        window.scrollTo({ top: 400, behavior: 'smooth' });
        loadMangaData();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (state.pageInfo.hasNextPage) {
        state.page++;
        window.scrollTo({ top: 400, behavior: 'smooth' });
        loadMangaData();
      }
    });
  }
}

/**
 * Open Manga Detail Modal with Official Links
 */
function openModal(mangaId) {
  const manga = state.detailCache.get(mangaId);
  if (!manga) return;

  const title = getMangaTitle(manga);
  const nativeTitle = getMangaNativeTitle(manga);
  const origin = getOriginMeta(manga.countryOfOrigin);
  const status = getStatusMeta(manga.status);
  const sourceMeta = getOfficialSourceMeta(manga);
  const isSaved = isInLibrary(manga.id);

  elements.modalBannerImg.src = manga.bannerImage || manga.coverImage?.extraLarge || manga.coverImage?.large || '';
  elements.modalCoverImg.src = manga.coverImage?.large || manga.coverImage?.extraLarge || '';
  elements.modalTitle.textContent = title;
  elements.modalSubtitle.textContent = nativeTitle ? `Tên gốc bản địa: ${nativeTitle}` : `${origin.full} • Bắt đầu: ${manga.startDate?.year || 'Chưa rõ'}`;

  elements.modalOfficialSourceBadge.innerHTML = `
    <a href="${sourceMeta.rawUrl || sourceMeta.searchUrl}" target="_blank" rel="noopener noreferrer" class="badge-official-source ${sourceMeta.badgeClass}" style="font-size: 0.88rem; padding: 0.35rem 0.8rem;">
      🏢 Nền tảng gốc: ${sourceMeta.name} ↗
    </a>
  `;

  elements.modalStatsStrip.innerHTML = `
    <div class="modal-stat-badge">
      <strong>${formatChapters(manga.chapters, manga.status)}</strong>
      <span>Tổng số chương</span>
    </div>
    <div class="modal-stat-badge">
      <strong>${manga.volumes ? `${manga.volumes} tập` : 'Chưa rõ'}</strong>
      <span>Số tập (Vol)</span>
    </div>
    <div class="modal-stat-badge">
      <strong>${origin.flag} ${origin.label}</strong>
      <span>Quốc gia</span>
    </div>
    <div class="modal-stat-badge">
      <strong>${status.label}</strong>
      <span>Trạng thái</span>
    </div>
    ${manga.averageScore ? `
      <div class="modal-stat-badge">
        <strong style="color: #fbbf24;">★ ${(manga.averageScore / 10).toFixed(1)} / 10</strong>
        <span>Đánh giá</span>
      </div>
    ` : ''}
  `;

  const cleanDesc = (manga.description || 'Chưa có thông tin tóm tắt nội dung.')
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<[^>]+>/gi, '');
  elements.modalDescription.textContent = cleanDesc;

  elements.modalActionFavBtn.innerHTML = isSaved ? '❤️ Đã lưu trong Tủ truyện' : '🤍 Lưu vào Tủ truyện';
  elements.modalActionFavBtn.onclick = () => {
    const added = toggleFavorite(manga);
    elements.modalActionFavBtn.innerHTML = added ? '❤️ Đã lưu trong Tủ truyện' : '🤍 Lưu vào Tủ truyện';
    updateLibraryBadge();
    showToast(added ? `❤️ Đã lưu "${title}" vào Tủ truyện` : `Đã bỏ lưu "${title}"`);
    renderCurrentView();
  };

  // Direct Raw link button
  elements.modalRawLink.href = sourceMeta.rawUrl || sourceMeta.searchUrl;
  elements.modalRawLink.innerHTML = `📖 Đọc tại ${sourceMeta.publisher || 'Web Gốc'} ↗`;

  elements.modalAniListLink.href = `https://anilist.co/manga/${manga.id}`;

  elements.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Load & Render Naver Webtoon Live Korean Data
 */
async function loadNaverData() {
  if (state.naverData) {
    renderNaverLiveView();
    return;
  }

  elements.naverResultsContainer.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
      <p style="color: #22c55e; font-size: 1.1rem; font-weight: 700;">
        🔄 Đang kết nối trực tiếp đến máy chủ Naver Webtoon tại Seoul...
      </p>
    </div>
  `;

  const data = await fetchNaverOfficialWebtoons();
  if (data) {
    state.naverData = data;
    renderNaverLiveView();
  } else {
    elements.naverResultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-xl);">
        <p style="color: var(--accent-rose); font-weight: 700;">⚠️ Tạm thời không thể kết nối tới Naver API qua proxy.</p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Bạn có thể bấm vào nút "Truy cập comic.naver.com" ở góc trên để xem trực tiếp!</p>
      </div>
    `;
  }
}

function renderNaverLiveView() {
  if (!state.naverData) return;

  const dayMap = {
    MON: 'MONDAY',
    TUE: 'TUESDAY',
    WED: 'WEDNESDAY',
    THU: 'THURSDAY',
    FRI: 'FRIDAY',
    SAT: 'SATURDAY',
    SUN: 'SUNDAY'
  };

  const list = state.naverData[dayMap[state.naverCurrentDay]] || [];
  if (!list.length) {
    elements.naverResultsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Không có dữ liệu cho ngày này.</p>`;
    return;
  }

  elements.naverResultsContainer.innerHTML = list.map(item => `
    <div class="manga-card" style="border-color: rgba(3, 199, 90, 0.25);">
      <div class="card-poster-wrap">
        <img class="card-poster" src="${item.thumbnailUrl}" alt="${item.titleName}" loading="lazy" />
        <div class="badge-chapters" style="background: rgba(3, 199, 90, 0.9); color: black;">
          ★ ${item.starScore ? item.starScore.toFixed(2) : '9.8'}
        </div>
        <div class="badge-origin" style="background: #03c75a; color: black;">
          🇰🇷 Naver Raw
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title" title="${item.titleName}">${item.titleName}</h3>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem;">✍️ Tác giả: ${item.author || 'Chưa rõ'}</p>
        <div class="card-footer">
          <a href="https://comic.naver.com/webtoon/list?titleId=${item.titleId}" target="_blank" rel="noopener noreferrer" class="btn-text-link" style="color: #22c55e; font-weight: 700;">
            Đọc trên Naver ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Official Publishers Directory
 */
function renderDirectory() {
  if (!elements.platformGridContainer) return;

  const platforms = OFFICIAL_PLATFORMS.filter(p => p.id !== 'ALL');
  elements.platformGridContainer.innerHTML = platforms.map(plat => `
    <div class="platform-card">
      <div class="platform-card-header">
        <div class="platform-icon-box" style="background: ${plat.color}22; border: 1px solid ${plat.color}66; color: ${plat.color};">
          ${plat.flag}
        </div>
        <div>
          <h3 style="font-size: 1.1rem; color: var(--text-main); font-weight: 800;">${plat.name}</h3>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${plat.publisher}</span>
        </div>
      </div>
      <div class="platform-card-body">
        <p>${plat.desc}</p>
      </div>
      <div class="platform-card-footer">
        <button class="btn-primary" data-filter-platform="${plat.id}" style="font-size: 0.82rem; padding: 0.45rem 1rem;">
          🔍 Lọc truyện NXB này
        </button>
        <a href="${plat.siteUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="font-size: 0.82rem; padding: 0.45rem 0.9rem;">
          Web Gốc ↗
        </a>
      </div>
    </div>
  `).join('');

  elements.platformGridContainer.querySelectorAll('[data-filter-platform]').forEach(btn => {
    btn.addEventListener('click', () => {
      const platId = btn.dataset.filterPlatform;
      state.platform = platId;
      elements.platformSelect.value = platId;
      switchTab('explore');
      state.page = 1;
      loadMangaData();
    });
  });
}

/**
 * Render Analytics View Tab
 */
function renderAnalyticsView() {
  const items = state.items;
  if (!items.length) return;

  const validChaps = items.map(it => it.chapters || 0).filter(c => c > 0);
  const maxChap = validChaps.length ? Math.max(...validChaps) : 0;
  const avgChap = validChaps.length ? Math.round(validChaps.reduce((a, b) => a + b, 0) / validChaps.length) : 0;

  if (elements.analyticsTotalManga) elements.analyticsTotalManga.textContent = items.length;
  if (elements.analyticsMaxChap) elements.analyticsMaxChap.textContent = `${maxChap.toLocaleString('vi-VN')} chap`;
  if (elements.analyticsAvgChap) elements.analyticsAvgChap.textContent = `${avgChap.toLocaleString('vi-VN')} chap`;

  const tiers = {
    epic: { label: '🔥 Siêu trường thiên (≥ 1.000 chap)', count: 0, class: 'fill-purple' },
    long: { label: '📘 Truyện dài (500 - 999 chap)', count: 0, class: 'fill-cyan' },
    med: { label: '📗 Truyện vừa (100 - 499 chap)', count: 0, class: 'fill-gold' },
    short: { label: '📙 Đoản thiên (< 100 chap)', count: 0, class: 'fill-emerald' }
  };

  items.forEach(it => {
    const c = it.chapters || 0;
    if (c >= 1000) tiers.epic.count++;
    else if (c >= 500) tiers.long.count++;
    else if (c >= 100) tiers.med.count++;
    else if (c > 0) tiers.short.count++;
  });

  const totalTierCount = items.length || 1;
  elements.tierDistributionBars.innerHTML = Object.values(tiers).map(tier => {
    const pct = Math.round((tier.count / totalTierCount) * 100);
    return `
      <div class="tier-item">
        <div class="tier-item-info">
          <span class="tier-label">${tier.label}</span>
          <span class="tier-count">${tier.count} bộ (${pct}%)</span>
        </div>
        <div class="tier-bar-track">
          <div class="tier-bar-fill ${tier.class}" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  const finishedCount = items.filter(it => it.status === 'FINISHED').length;
  const releasingCount = items.filter(it => it.status === 'RELEASING').length;
  const hiatusCount = items.length - finishedCount - releasingCount;

  elements.statusDistributionBars.innerHTML = `
    <div class="tier-item">
      <div class="tier-item-info">
        <span class="tier-label">✅ Đã hoàn thành (Full chap)</span>
        <span class="tier-count">${finishedCount} bộ (${Math.round((finishedCount / totalTierCount) * 100)}%)</span>
      </div>
      <div class="tier-bar-track">
        <div class="tier-bar-fill fill-cyan" style="width: ${(finishedCount / totalTierCount) * 100}%"></div>
      </div>
    </div>
    <div class="tier-item" style="margin-top: 1rem;">
      <div class="tier-item-info">
        <span class="tier-label">⚡ Đang phát hành (Ongoing)</span>
        <span class="tier-count">${releasingCount} bộ (${Math.round((releasingCount / totalTierCount) * 100)}%)</span>
      </div>
      <div class="tier-bar-track">
        <div class="tier-bar-fill fill-emerald" style="width: ${(releasingCount / totalTierCount) * 100}%"></div>
      </div>
    </div>
    ${hiatusCount > 0 ? `
      <div class="tier-item" style="margin-top: 1rem;">
        <div class="tier-item-info">
          <span class="tier-label">⏸️ Tạm ngưng / Khác</span>
          <span class="tier-count">${hiatusCount} bộ (${Math.round((hiatusCount / totalTierCount) * 100)}%)</span>
        </div>
        <div class="tier-bar-track">
          <div class="tier-bar-fill fill-gold" style="width: ${(hiatusCount / totalTierCount) * 100}%"></div>
        </div>
      </div>
    ` : ''}
  `;
}

/**
 * Render Library / Reading Tracker View
 */
function renderLibraryView() {
  const library = getLibrary();
  const stats = getLibraryStats();

  elements.libStatTotal.textContent = stats.totalManga;
  elements.libStatRead.textContent = `${stats.totalReadChapters.toLocaleString('vi-VN')} chap`;
  elements.libStatHours.textContent = `~${stats.estimatedHours} giờ`;

  if (!library.length) {
    elements.libraryGrid.innerHTML = `
      <div class="library-empty-state" style="grid-column: 1/-1;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h3>Tủ truyện cá nhân đang trống</h3>
        <p>Bấm vào biểu tượng trái tim 🤍 ở bất kỳ bộ truyện nào để thêm vào theo dõi tiến độ đọc!</p>
      </div>
    `;
    return;
  }

  elements.libraryGrid.className = 'manga-grid';
  elements.libraryGrid.innerHTML = library.map(item => {
    const total = item.totalChapters || 1;
    const read = item.readChapters || 0;
    const pct = Math.min(100, Math.round((read / total) * 100));

    return `
      <div class="manga-card" data-lib-id="${item.id}">
        <div class="card-poster-wrap">
          <img class="card-poster" src="${item.cover}" alt="${item.title}" />
          <div class="badge-chapters">
            ${read}/${total} chap (${pct}%)
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <div class="reading-progress-wrap">
            <div class="reading-progress-bar">
              <div class="reading-progress-fill" style="width: ${pct}%"></div>
            </div>
            <div class="reading-inputs">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Đã đọc:</span>
              <input type="number" min="0" max="${total}" value="${read}" data-lib-input="${item.id}" />
              <span style="font-size: 0.75rem; color: var(--text-muted);">/ ${total}</span>
            </div>
          </div>
          <div class="card-footer" style="margin-top: 1rem;">
            <button class="btn-text-link" data-lib-remove="${item.id}" style="color: var(--accent-rose); font-size: 0.75rem;">
              🗑️ Xóa
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  elements.libraryGrid.querySelectorAll('[data-lib-input]').forEach(input => {
    input.addEventListener('change', (e) => {
      const id = parseInt(input.dataset.libInput, 10);
      const val = parseInt(e.target.value, 10) || 0;
      updateProgress(id, val);
      renderLibraryView();
      showToast('Đã lưu tiến độ đọc!');
    });
  });

  elements.libraryGrid.querySelectorAll('[data-lib-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.libRemove, 10);
      removeFavorite(id);
      updateLibraryBadge();
      renderLibraryView();
      showToast('Đã xóa truyện khỏi tủ!');
    });
  });
}

/**
 * Update Library Counter in Navigation
 */
function updateLibraryBadge() {
  const count = getLibrary().length;
  if (elements.libraryCountBadge) {
    elements.libraryCountBadge.textContent = count;
    elements.libraryCountBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

/**
 * Display Toast Notification
 */
let toastTimeout = null;
function showToast(message, isError = false) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.style.borderColor = isError ? 'var(--accent-rose)' : 'var(--accent-primary)';
  elements.toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2500);
}

// Start app once DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
