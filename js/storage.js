/**
 * MangaStats Hub - Local Storage & Personal Reading Tracker Manager
 */

const STORAGE_KEY = 'manga_stats_library_v1';

export function getLibrary() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
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

export function toggleFavorite(manga) {
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
      cover: manga.coverImage?.large || manga.coverImage?.extraLarge || '',
      totalChapters: manga.chapters || 0,
      readChapters: 0,
      status: manga.status || 'UNKNOWN',
      genres: manga.genres || [],
      countryOfOrigin: manga.countryOfOrigin || 'JP',
      addedAt: new Date().toISOString()
    };
    list.unshift(newItem);
    saveLibrary(list);
    return true; // Added
  }
}

export function updateProgress(mangaId, readChapters) {
  const list = getLibrary();
  const item = list.find(it => it.id === mangaId);
  if (item) {
    item.readChapters = Math.max(0, parseInt(readChapters, 10) || 0);
    item.updatedAt = new Date().toISOString();
    saveLibrary(list);
  }
}

export function removeFavorite(mangaId) {
  const list = getLibrary().filter(item => item.id !== mangaId);
  saveLibrary(list);
}

export function getLibraryStats() {
  const list = getLibrary();
  const totalManga = list.length;
  const totalReadChapters = list.reduce((sum, item) => sum + (item.readChapters || 0), 0);
  const totalAvailableChapters = list.reduce((sum, item) => sum + (item.totalChapters || 0), 0);
  const estimatedHours = Math.round((totalReadChapters * 6) / 60); // ~6 minutes per chap

  return {
    totalManga,
    totalReadChapters,
    totalAvailableChapters,
    estimatedHours
  };
}

export function exportLibraryAsFile() {
  const data = JSON.stringify(getLibrary(), null, 2);
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
      const items = JSON.parse(e.target.result);
      if (Array.isArray(items)) {
        saveLibrary(items);
        callback(null, items);
      } else {
        callback(new Error('Định dạng tệp không hợp lệ!'));
      }
    } catch (err) {
      callback(err);
    }
  };
  reader.readAsText(file);
}
