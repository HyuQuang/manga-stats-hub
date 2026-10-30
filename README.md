# MangaStats Hub 📚

Ứng dụng web tra cứu, lọc và thống kê truyện tranh toàn cầu (Manga, Manhwa, Manhua) theo số chương (chapters), thể loại và trạng thái phát hành.

Dữ liệu được kết nối trực tiếp theo thời gian thực (Real-time) từ **AniList GraphQL API**.

---

## ✨ Tính Năng Nổi Bật

1. **Sắp xếp theo số chương (Chapter Sorting)**:
   - 🔽 Số chap: Cao nhất -> Thấp nhất (Khám phá các bộ kỷ lục hàng nghìn chap)
   - 🔼 Số chap: Ít nhất -> Nhiều nhất
   - ⭐ Điểm đánh giá cao nhất
   - 🔥 Độ phổ biến & Thịnh hành

2. **Bộ lọc đa thể loại (Multi-genre Filtering)**:
   - Chọn đồng thời nhiều thể loại: *Action, Adventure, Comedy, Fantasy, Romance, Sci-Fi, Slice of Life, Mystery, Thriller...*
   - Lọc nhanh theo các phân khúc độ dài: *Siêu dài (≥1.000 chap), Dài (500-999 chap), Vừa (100-499 chap), Đoản thiên (<100 chap)*.
   - Lọc theo quốc gia: *Nhật Bản (Manga), Hàn Quốc (Manhwa), Trung Quốc (Manhua)*.

3. **Chế độ hiển thị kép**:
   - **Lưới thẻ (Grid View)**: Poster sắc nét, huy hiệu số chap nổi bật.
   - **Bảng số liệu (Data Table)**: So sánh thứ hạng, số tập (volumes), điểm số, click tiêu đề cột để đảo chiều sort.

4. **Tủ truyện & Theo dõi tiến độ đọc cá nhân**:
   - Lưu trữ truyện vào LocalStorage trình duyệt.
   - Đánh dấu số chap đã đọc, tự động tính `% tiến độ` và hiển thị thanh tiến trình.
   - Hỗ trợ **Xuất / Nhập file JSON** để sao lưu dữ liệu cá nhân.

5. **Phân tích số liệu (Analytics Dashboard)**:
   - Biểu đồ phân bổ tỷ lệ các khoảng số chương và trạng thái phát hành.

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local)

Chỉ cần Python 3:

```bash
chmod +x start.sh
./start.sh 8080
```

Mở trình duyệt tại: `http://localhost:8080`

---

## 🌐 Triển Khai Lên GitHub Pages Tự Động

Dự án đã tích hợp sẵn GitHub Actions tại `.github/workflows/deploy.yml`.

Khi bạn đẩy (push) code lên GitHub:
1. Vào **Settings** của repository trên GitHub.
2. Chọn mục **Pages** (ở menu bên trái).
3. Tại phần **Source**, chọn **GitHub Actions**.
4. GitHub sẽ tự động build và cung cấp link trang web công khai miễn phí trọn đời dạng:
   `https://<tên-user>.github.io/<tên-repo>/`

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: HTML5 Semantic, Modern CSS3 (Variables, Glassmorphism, Responsive Grid), Vanilla JavaScript (ES6+ Modules).
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*).
- **API**: AniList GraphQL API (Direct Client-side Fetch with Cache).
- **Storage**: Browser LocalStorage & JSON Export/Import.
