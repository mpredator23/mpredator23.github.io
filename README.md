# mpredator23.github.io

Situs portofolio pribadi **Miftahul Ulum, S.Kom.** — Sarjana Sistem Informasi,
Universitas Sains dan Teknologi Indonesia.

Dibangun dengan HTML, CSS, dan JavaScript murni tanpa *build step*.
Di-hosting melalui GitHub Pages.

## Struktur

```
.
├── index.html                      # halaman utama
├── projects/
│   └── smart-hajj-monitor.html     # studi kasus proyek skripsi
├── assets/
│   ├── css/style.css               # gaya halaman utama
│   ├── css/case.css                # gaya halaman studi kasus
│   ├── js/main.js                  # navigasi & animasi scroll
│   ├── img/                        # logo, favicon, banner
│   ├── img/screenshots/            # tangkapan layar aplikasi
│   ├── abstrak.pdf                 # abstrak skripsi
│   └── CV_Miftahul_Ulum.pdf        # curriculum vitae
└── .nojekyll                       # menonaktifkan pemrosesan Jekyll
```

## Menjalankan secara lokal

Cukup buka `index.html` di peramban, atau jalankan server statis:

```bash
python -m http.server 8000
```

lalu akses <http://localhost:8000>.

## Lisensi

Kode situs ini bebas digunakan. Isi, teks, dan gambar adalah milik penulis.
