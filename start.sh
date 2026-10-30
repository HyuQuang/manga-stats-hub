#!/usr/bin/env bash
# MangaStats Hub Quick Launcher
PORT=${1:-8080}
echo "🚀 Khởi động MangaStats Hub tại http://localhost:${PORT} ..."
cd "$(dirname "$0")" || exit
python3 -m http.server "$PORT"
