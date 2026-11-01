/**
 * MangaStats Hub - Local Storage & Personal Reading Tracker Manager with Folders & Categories
 */

const STORAGE_KEY = 'manga_stats_library_v1';
const CUSTOM_CATEGORIES_KEY = 'manga_stats_custom_categories_v1';

export const DEFAULT_CATEGORIES = [
  { id: 'reading', name: 'Đang đọc', icon: '📖', color: '#38bdf8', isDefault: true },
  { id: 'completed', name: 'Đã đọc xong', icon: '✅', color: '#10b981', isDefault: true },
  { id: 'plan_to_read', name: 'Dự định đọc', icon: '📌', color: '#f59e0b', isDefault: true },
  { id: 'on_hold', name: 'Tạm dừng / Chờ chap', icon: '⏸️', color: '#a855f7', isDefault: true },
  { id: 'favorite', name: 'Yêu thích đặc biệt', icon: '💖', color: '#f43f5e', isDefault: true }
];

export function getCustomCategories() {
  try {
    const raw = localStorage.getItem(CUSTOM_CATEGORIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load custom categories', e);
    return [];
  }
}

export function saveCustomCategories(cats) {
  try {
    localStorage.setItem(CUSTOM_CATEGORIES_KEY, JSON.stringify(cats));
  } catch (e) {
    console.error('Failed to save custom categories', e);
  }
}

export function getAllCategories() {
  return [...DEFAULT_CATEGORIES, ...getCustomCategories()];
}

export function addCustomCategory(name, icon = '📁', color = '#818cf8') {
  const trimmed = (name || '').trim();
  if (!trimmed) throw new Error('Vui lòng nhập tên mục lưu trữ!');
  
  const all = getAllCategories();
  if (all.some(c => c.name.toLowerCase() === trimmed.toLowerCase())) {
    throw new Error('Mục lưu trữ này đã tồn tại!');
  }

  const customCats = getCustomCategories();
  const newCat = {
    id: 'cat_' + Date.now(),
    name: trimmed,
    icon: icon || '📁',
    color: color || '#818cf8',
    isDefault: false
  };

  customCats.push(newCat);
  saveCustomCategories(customCats);
  return newCat;
}

export function deleteCustomCategory(categoryId) {
  const customCats = getCustomCategories().filter(c => c.id !== categoryId);
  saveCustomCategories(customCats);

  // Move items in this category back to 'reading'
  const list = getLibrary();
  let modified = false;
  list.forEach(item => {
    if (item.category === categoryId) {
      item.category = 'reading';
      modified = true;
    }
  });
  if (modified) saveLibrary(list);
}

export function getLibrary() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    // Ensure all items have valid category
    return list.map(item => {
      if (!item.category) {
        if (item.readChapters && item.totalChapters && item.readChapters >= item.totalChapters) {
          item.category = 'completed';
        } else {
          item.category = 'reading';
        }
      }
      return item;
    });
  } catch (e) {
    console.error('Failed to load library from localStorage', e);
    return [];
  }
}

export function saveLibrary(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save library to localStorage', e);
  }
}

export function isInLibrary(mangaId) {
  const list = getLibrary();
  return list.some(item => item.id === mangaId);
}

export function getLibraryItem(mangaId) {
  const list = getLibrary();
  return list.find(item => item.id === mangaId);
}

export function toggleFavorite(manga, targetCategory = 'reading') {
  const list = getLibrary();
  const index = list.findIndex(item => item.id === manga.id);

  if (index >= 0) {
    list.splice(index, 1);
    saveLibrary(list);
    return false; // Removed
  } else {
    const newItem = {
      id: manga.id,
      title: manga.title.english || manga.title.romaji || manga.title.native,
      nativeTitle: manga.title.native || manga.title.romaji || '',
      cover: manga.coverImage?.large || manga.coverImage?.extraLarge || '',
      totalChapters: manga.chapters || 0,
      readChapters: 0,
      category: targetCategory || 'reading',
      status: manga.status || 'UNKNOWN',
      genres: manga.genres || [],
      countryOfOrigin: manga.countryOfOrigin || 'JP',
      format: manga.format || 'MANGA',
      isAdult: Boolean(manga.isAdult || (manga.genres && manga.genres.includes('Hentai'))),
      addedAt: new Date().toISOString()
    };
    list.unshift(newItem);
    saveLibrary(list);
    return true; // Added
  }
}

export function updateItemCategory(mangaId, categoryId) {
  const list = getLibrary();
  const item = list.find(it => it.id === mangaId);
  if (item) {
    item.category = categoryId;
    item.updatedAt = new Date().toISOString();
    saveLibrary(list);
  }
}

export function updateProgress(mangaId, readChapters) {
  const list = getLibrary();
  const item = list.find(it => it.id === mangaId);
  if (item) {
    const val = Math.max(0, parseInt(readChapters, 10) || 0);
    item.readChapters = val;
    item.updatedAt = new Date().toISOString();

    // Auto mark as completed if read all available chapters
    if (item.totalChapters > 0 && val >= item.totalChapters && item.category === 'reading') {
      item.category = 'completed';
    } else if (item.totalChapters > 0 && val < item.totalChapters && item.category === 'completed') {
      item.category = 'reading';
    }

    saveLibrary(list);
  }
}

export function removeFavorite(mangaId) {
  const list = getLibrary().filter(item => item.id !== mangaId);
  saveLibrary(list);
}

export function getLibraryStats(activeCategory = 'ALL') {
  const allList = getLibrary();
  const allCategories = getAllCategories();

  const categoryCounts = { ALL: allList.length };
  allCategories.forEach(cat => {
    categoryCounts[cat.id] = allList.filter(it => it.category === cat.id).length;
  });

  const filteredList = activeCategory === 'ALL' 
    ? allList 
    : allList.filter(it => it.category === activeCategory);

  const totalManga = filteredList.length;
  const totalReadChapters = filteredList.reduce((sum, item) => sum + (item.readChapters || 0), 0);
  const totalAvailableChapters = filteredList.reduce((sum, item) => sum + (item.totalChapters || 0), 0);
  const estimatedHours = Math.round((totalReadChapters * 6) / 60);

  return {
    totalManga,
    totalReadChapters,
    totalAvailableChapters,
    estimatedHours,
    categoryCounts
  };
}

export function exportLibraryAsFile() {
  const data = JSON.stringify({
    library: getLibrary(),
    customCategories: getCustomCategories(),
    exportedAt: new Date().toISOString()
  }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mangastats_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importLibraryFromFile(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (Array.isArray(parsed)) {
        // Legacy format
        saveLibrary(parsed);
        callback(null, parsed);
      } else if (parsed && Array.isArray(parsed.library)) {
        saveLibrary(parsed.library);
        if (Array.isArray(parsed.customCategories)) {
          saveCustomCategories(parsed.customCategories);
        }
        callback(null, parsed.library);
      } else {
        callback(new Error('Định dạng tệp không hợp lệ!'));
      }
    } catch (err) {
      callback(err);
    }
  };
  reader.readAsText(file);
}
