/**
 * MangaStats Hub - Main Application Controller
 */

import {
  fetchMangaList,
  POPULAR_GENRES,
  getMangaTitle,
  getMangaSubtitle,
  formatChapters,
  getOriginMeta,
  getStatusMeta
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
  sort: 'CHAPTERS_DESC', // Default: Cao xuống thấp
  genres: new Set(),
  search: '',
  country: 'ALL',
  status: 'ALL',
  chapterTier: 'ALL',
  viewMode: 'grid', // 'grid' | 'table'
  activeTab: 'explore', // 'explore' | 'analytics' | 'library'
  items: [],
  pageInfo: null,
  isLoading: false,
  detailCache: new Map()
};

// DOM Elements
const elements = {
  navTabs: document.querySelectorAll('.nav-tab-btn'),
  tabViews: {
    explore: document.getElementById('exploreView'),
    analytics: document.getElementById('analyticsView'),
    library: document.getElementById('libraryView')
  },
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  sortSelect: document.getElementById('sortSelect'),
  countrySelect: document.getElementById('countrySelect'),
  statusSelect: document.getElementById('statusSelect'),
  viewBtns: document.querySelectorAll('.view-btn'),
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
  modalStatsStrip: document.getElementById('modalStatsStrip'),
  modalDescription: document.getElementById('modalDescription'),
  modalActionFavBtn: document.getElementById('modalActionFavBtn'),
  modalAniListLink: document.getElementById('modalAniListLink'),
  modalMangaDexLink: document.getElementById('modalMangaDexLink'),

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
  bindEvents();
  updateLibraryBadge();
  loadMangaData();
}

/**
 * Render Genre Filter Pill Badges
 */
function renderGenrePills() {
  elements.genresContainer.innerHTML = POPULAR_GENRES.map(genre => `
    <button class="genre-tag ${state.genres.has(genre) ? 'active' : ''}" data-genre="${genre}">
      ${genre}
    </button>
  `).join('');
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

  // Genre selection
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

  if (tabId === 'analytics') {
    renderAnalyticsView();
  } else if (tabId === 'library') {
    renderLibraryView();
  }
}

/**
 * Fetch and Load Manga Data from AniList
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
      genres: Array.from(state.genres),
      search: state.search,
      country: state.country,
      status: state.status
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
          ⚠️ Không thể tải dữ liệu từ máy chủ AniList
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
  elements.resultsCount.innerHTML = `Hiển thị <strong>${filtered.length}</strong> / ${state.pageInfo ? state.pageInfo.total.toLocaleString('vi-VN') : filtered.length} bộ truyện`;

  if (filtered.length === 0) {
    elements.resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-xl);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
        <h3 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.25rem;">Không tìm thấy truyện phù hợp</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Hãy thử nới lỏng bộ lọc thể loại hoặc khoảng số chap nhé.</p>
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
 * Render Manga Cards Grid View
 */
function renderGrid(items) {
  elements.resultsContainer.className = 'manga-grid';
  elements.resultsContainer.innerHTML = items.map(manga => {
    const title = getMangaTitle(manga);
    const subtitle = getMangaSubtitle(manga);
    const chaps = manga.chapters;
    const origin = getOriginMeta(manga.countryOfOrigin);
    const status = getStatusMeta(manga.status);
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
          ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ''}
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
          <th>Truyện tranh</th>
          <th>Loại</th>
          <th class="sortable ${isSortedByChapDesc || isSortedByChapAsc ? 'sorted' : ''}" id="tableSortChapBtn" title="Bấm để đảo chiều sắp xếp số chap">
            Số chương ${isSortedByChapDesc ? '▼ (Cao -> Thấp)' : isSortedByChapAsc ? '▲ (Thấp -> Cao)' : '↕'}
          </th>
          <th>Số tập (Vol)</th>
          <th>Đánh giá</th>
          <th>Trạng thái</th>
          <th>Tủ truyện</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((manga, index) => {
          const rank = (state.page - 1) * state.perPage + index + 1;
          const title = getMangaTitle(manga);
          const chaps = manga.chapters;
          const origin = getOriginMeta(manga.countryOfOrigin);
          const status = getStatusMeta(manga.status);
          const isSaved = isInLibrary(manga.id);

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
                    <p>${(manga.genres || []).slice(0, 3).join(', ')}</p>
                  </div>
                </div>
              </td>
              <td><span style="font-weight: 600;">${origin.flag} ${origin.label}</span></td>
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
                <button class="card-action-btn ${isSaved ? 'saved' : ''}" data-action="fav" data-id="${manga.id}" title="${isSaved ? 'Xóa khỏi tủ' : 'Lưu vào tủ'}">
                  ${isSaved ? '❤️' : '🤍'}
                </button>
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
  // Click on cards or rows to open modal
  const clickTargets = elements.resultsContainer.querySelectorAll('.manga-card, .stats-table tbody tr');
  clickTargets.forEach(el => {
    el.addEventListener('click', (e) => {
      // Ignore if clicking the fav button directly
      if (e.target.closest('[data-action="fav"]')) return;
      const id = parseInt(el.dataset.id, 10);
      if (id) openModal(id);
    });
  });

  // Favorite toggle buttons
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
  const avgChap = validChaps.length ? Math.round(validChaps.reduce((a, b) => a + b, 0) / validChaps.length) : 0;

  if (state.pageInfo && elements.heroTotalCount) {
    elements.heroTotalCount.textContent = state.pageInfo.total.toLocaleString('vi-VN');
  }
  if (elements.heroTopChapters) {
    elements.heroTopChapters.textContent = `${maxChap.toLocaleString('vi-VN')} chap`;
  }
  if (elements.heroAvgChapters) {
    elements.heroAvgChapters.textContent = `${avgChap.toLocaleString('vi-VN')} chap`;
  }
}

/**
 * Render Active Filter Badges Strip
 */
function updateActiveFilterBadges() {
  const badges = [];

  if (state.search) {
    badges.push(`Tìm: "${state.search}"`);
  }
  if (state.country !== 'ALL') {
    const meta = getOriginMeta(state.country);
    badges.push(`${meta.flag} ${meta.label}`);
  }
  if (state.status !== 'ALL') {
    const meta = getStatusMeta(state.status);
    badges.push(`${meta.label}`);
  }
  state.genres.forEach(g => badges.push(`Thể loại: ${g}`));

  elements.activeFiltersList.innerHTML = badges.map(b => `
    <span class="filter-badge-item">
      ${b}
    </span>
  `).join('');
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
 * Open Manga Detail Modal
 */
function openModal(mangaId) {
  const manga = state.detailCache.get(mangaId);
  if (!manga) return;

  const title = getMangaTitle(manga);
  const subtitle = getMangaSubtitle(manga);
  const origin = getOriginMeta(manga.countryOfOrigin);
  const status = getStatusMeta(manga.status);
  const isSaved = isInLibrary(manga.id);

  elements.modalBannerImg.src = manga.bannerImage || manga.coverImage?.extraLarge || manga.coverImage?.large || '';
  elements.modalCoverImg.src = manga.coverImage?.large || manga.coverImage?.extraLarge || '';
  elements.modalTitle.textContent = title;
  elements.modalSubtitle.textContent = subtitle || `${origin.full} • Bắt đầu: ${manga.startDate?.year || 'Chưa rõ'}`;

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

  // Strip raw HTML tags from AniList description
  const cleanDesc = (manga.description || 'Chưa có thông tin tóm tắt nội dung.')
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<[^>]+>/gi, '');
  elements.modalDescription.textContent = cleanDesc;

  // Favorite button in modal
  elements.modalActionFavBtn.innerHTML = isSaved ? '❤️ Đã lưu trong Tủ truyện' : '🤍 Lưu vào Tủ truyện';
  elements.modalActionFavBtn.onclick = () => {
    const added = toggleFavorite(manga);
    elements.modalActionFavBtn.innerHTML = added ? '❤️ Đã lưu trong Tủ truyện' : '🤍 Lưu vào Tủ truyện';
    updateLibraryBadge();
    showToast(added ? `❤️ Đã lưu "${title}" vào Tủ truyện` : `Đã bỏ lưu "${title}"`);
    renderCurrentView();
  };

  // External Links
  elements.modalAniListLink.href = `https://anilist.co/manga/${manga.id}`;
  elements.modalMangaDexLink.href = `https://mangadex.org/search?q=${encodeURIComponent(title)}`;

  elements.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
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

  // Chapter tier distribution
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

  // Status breakdown
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

  // Progress change listener
  elements.libraryGrid.querySelectorAll('[data-lib-input]').forEach(input => {
    input.addEventListener('change', (e) => {
      const id = parseInt(input.dataset.libInput, 10);
      const val = parseInt(e.target.value, 10) || 0;
      updateProgress(id, val);
      renderLibraryView();
      showToast('Đã lưu tiến độ đọc!');
    });
  });

  // Remove from library
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
