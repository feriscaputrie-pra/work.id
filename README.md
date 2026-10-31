# work.id — Portal Lowongan Kerja Pacitan & Sekitarnya
Proyek tugas kuliah Sistem Informasi. Buka `index.html` di browser (tanpa instalasi).

## Fitur
- Pencarian kata kunci + filter lokasi, tipe kerja, urutan
- 12 kategori berupa ikon yang bisa diklik (filter cepat)
- Detail lowongan (modal) + tombol lamar via WhatsApp/email
- Simpan lowongan (bookmark) — tersimpan di localStorage
- Form pasang lowongan (validasi + simpan di localStorage)
- Halaman "Tentang Sistem": aktor, basis data, alur proses

## Rancangan data (ERD sederhana)
KATEGORI (id, nama) 1—N LOWONGAN (id, judul, tipe, gaji, deskripsi, tanggal, kontak)
LOKASI (id, kabupaten, kecamatan — 12 kecamatan Kab. Pacitan) 1—N LOWONGAN
PERUSAHAAN (id, nama) 1—N LOWONGAN
PENGGUNA 1—N TERSIMPAN N—1 LOWONGAN

## Catatan
Data awal adalah data contoh (fiktif). Pengembangan lanjut: PHP/Node + MySQL, login, dashboard admin.
- Ikon: Font Awesome Free (CC BY 4.0), disimpan di icons.js
