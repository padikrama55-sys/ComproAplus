# Website PT Aplus Multi Kreasi

Website statis ini siap digunakan di GitHub Pages tanpa proses instalasi.

## Struktur file

- `index.html` - struktur dan teks halaman
- `style.css` - warna, layout, responsivitas, dan animasi
- `script.js` - data portofolio, filter, pencarian, menu, dan modal
- `assets/images/` - seluruh gambar portofolio
- `assets/images/logo-aplus-*.png` - logo resmi versi hitam, merah, dan putih
- `assets/images/logogram-aplus-*.png` - logogram resmi versi merah dan putih
- `assets/images/cover-aplus-official.png` - cover utama pada bagian hero
- `assets/images/bg-line-*.png` - elemen garis grafis resmi untuk latar setiap bagian
- `assets/Company-Profile-Aplus-Multi-Kreasi.pdf` - company profile yang dapat dibuka client

## Cara upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload **isi folder ini** ke bagian paling atas repository.
3. Buka **Settings -> Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu beberapa menit hingga alamat website muncul.

## Mengganti teks

Buka `index.html`, cari kalimat yang ingin diubah, kemudian ganti teks di antara tag HTML-nya.

## Mengganti gambar

1. Masukkan gambar baru ke `assets/images/`.
2. Buka `script.js`.
3. Cari proyek yang ingin diganti pada bagian `portfolioItems`.
4. Ganti nilai `image`, misalnya menjadi `assets/images/proyek-baru.jpg`.

Rasio yang disarankan adalah 1200 x 507 px. Gunakan JPG atau WebP yang sudah dikompres agar website tetap cepat.

## Menambah proyek

Salin salah satu objek di dalam `portfolioItems`, lalu ubah `title`, `category`, `label`, `image`, dan `description`. Pilihan kategori: `event`, `creative`, `branding`, atau `production`.

## Mengubah warna brand

Buka `style.css`, lalu ubah variabel `--red`, `--red-dark`, `--ink`, dan `--paper` di bagian paling atas.

## Font

Website menggunakan **Anybody** untuk judul dan teks kapital, serta **Poppins** untuk subjudul dan isi. Font dimuat melalui Google Fonts pada bagian `<head>` di `index.html`.

Jika ingin mengganti logo pada header, pertahankan nama file `logo-aplus-white.png` dan `logo-aplus-black.png`, atau ubah alamat file gambarnya di `index.html`.

## Mengganti elemen grafis

Seluruh elemen grafis baru sudah dipisahkan di folder `assets/images/` agar mudah diganti:

- `cover-aplus-official.png` untuk gambar utama
- `bg-line-red-wide.png` dan `bg-line-red-corner.png` untuk bagian terang atau gelap
- `bg-line-white-simple.png` dan `bg-line-white-wide.png` untuk bagian gelap atau merah
- `bg-line-gray-simple.png` dan `bg-line-gray-wide.png` untuk aksen yang lebih lembut

Penempatan setiap elemen diatur melalui `background` dan `background-image` pada `style.css`.
