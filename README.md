# LocalWriter

Aplikasi menulis novel yang ringan, simpel, dan bisa dipakai **offline** di HP. Tanpa akun, tanpa server, tanpa iklan. Tulisanmu tersimpan di perangkatmu sendiri.

**Buka aplikasinya:** https://panda-jj.github.io/LocalWriter/index.html

## Fitur

- **Pustaka novel dan bab.** Satu novel punya banyak bab, bisa diurutkan, diganti nama, dan dicari.
- **Editor teks polos yang ringan.** Penghitung kata, karakter (dengan spasi), dan paragraf tampil langsung di bawah tulisan.
- **Penyimpanan otomatis yang tidak mengganggu.** Tulisan disimpan setelah kamu berhenti mengetik sebentar, saat pindah bab, dan saat aplikasi ditutup, bukan setiap kata.
- **Mode Fokus** untuk menulis tanpa tombol.
- **Pengaturan teks:** font (Merriweather, Tinos, Lato, Sans-serif, Monospace), ukuran, jarak baris, perataan, dan tema terang, gelap, atau sistem.
- **Cari & Ganti** per bab dengan sorotan langsung di editor (ganti satu per satu atau semua di bab itu, bisa diurungkan), plus pencarian dan penggantian di semua bab.
- **Riwayat versi** per bab (maksimal 5 versi terakhir), bisa dikembalikan kapan saja.
- **Novel Notes:** daftar karakter (nama dan usia), catatan dunia dan lokasi, serta catatan teks bebas untuk tiap novel.
- **Backup dan ekspor:**
  - ZIP per novel (satu file `.txt` per bab) atau semua novel sekaligus.
  - Satu file `.txt` untuk seluruh novel, atau satu bab saja.
  - Impor ZIP untuk memulihkan novel.
  - Pengingat backup kalau sudah lebih dari 7 hari belum ekspor.

## Cara pasang di HP

Aplikasi ini adalah PWA, jadi dipasang dari browser tanpa toko aplikasi.

**Android (Chrome):**
1. Buka link aplikasi di atas.
2. Ketuk menu ⋮, lalu pilih **Instal aplikasi** atau **Tambahkan ke layar utama**.
3. Buka dari ikon di layar utama. Setelah itu aplikasi bisa dipakai tanpa internet.

**iPhone (Safari):** ketuk **Bagikan**, lalu **Tambahkan ke Layar Utama**. Belum diuji di iPhone, jadi kabari kalau ada masalah.

## Penting: data tersimpan di perangkatmu

Semua tulisan disimpan di dalam browser perangkatmu (IndexedDB), tidak di server. Artinya:

- **Menghapus "data situs" atau "data penjelajahan" di browser akan menghapus semua novelmu.** Menghapus cache saja tidak menghapusnya, tapi hati-hati dengan pilihan yang menyertakan data situs.
- Data **tidak tersinkron** antar perangkat atau antar browser. Untuk memindahkan, ekspor ZIP lalu impor di perangkat lain.
- Memori HP yang sangat penuh bisa membuat browser membersihkan data situs yang belum berstatus permanen. Status penyimpanan permanen bisa dilihat di layar **Berkas & Cadangan**.
- Jangan membuka aplikasi di dua jendela sekaligus (misalnya aplikasi terpasang dan tab Chrome), karena tulisan bisa saling menimpa.

**Kebiasaan yang aman: ekspor ZIP secara rutin** dan simpan di Google Drive atau memori HP. File ZIP tidak dienkripsi, jadi simpan di tempat yang aman.

## Privasi

- Tidak ada akun, pelacakan, iklan, atau pengiriman data ke server mana pun.
- Aplikasi tidak memuat script atau font dari luar. Semua file ada di repo ini.
- Tulisan keluar dari perangkat hanya lewat tombol ekspor yang kamu tekan sendiri.
- Aplikasi tidak memiliki kunci PIN atau enkripsi. Siapa pun yang membuka HP-mu yang tidak terkunci bisa membaca tulisanmu.

## Batasan saat ini

- Editor teks polos. Belum ada huruf tebal atau miring.
- Hanya bahasa Indonesia untuk tampilan aplikasi.
- Belum ada sinkronisasi antar perangkat dan belum ada tempat sampah untuk bab yang dihapus.

## Memperbarui aplikasi

Biasanya versi baru terpasang sendiri saat aplikasi dibuka, selama ada internet. Kalau versi lama masih tampil, buka **Berkas & Cadangan** lalu ketuk **Perbarui Aplikasi**. Tombol itu tidak menghapus novelmu.

## Untuk developer

Tanpa build dan tanpa dependensi. Semua kode ada di satu file `index.html`.

```
index.html          # aplikasi (HTML, CSS, JavaScript)
sw.js               # service worker untuk mode offline
manifest.json       # manifest PWA
icon.svg, icon-*.png
fonts/              # Merriweather, Tinos, Lato (+ lisensinya)
```

Untuk menjalankan sendiri, taruh semua file di hosting statis dengan HTTPS (misalnya GitHub Pages). Kalau mengubah file aplikasi, naikkan nomor versi `V` di `sw.js` supaya perangkat yang sudah terpasang mengambil versi baru.

## Masukan

Punya ide atau menemukan masalah? Buka [Issues](https://github.com/panda-jj/LocalWriter/issues). Sebutkan HP dan browser yang dipakai kalau melaporkan bug.

## Lisensi

Kode LocalWriter memakai lisensi [MIT](LICENSE). Font di folder `fonts/` memakai lisensinya masing-masing: Merriweather, Lato, dan Tinos berlisensi SIL Open Font License. Teks lisensinya ada di folder yang sama.
