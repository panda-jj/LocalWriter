# LocalWriter

Aplikasi menulis novel yang ringan, simpel, dan bisa dipakai **offline** di HP. Tanpa akun, tanpa server, tanpa iklan. Tulisanmu tersimpan di perangkatmu sendiri.

**Buka aplikasinya:** https://panda-jj.github.io/LocalWriter/index.html

## Fitur

- **Pustaka novel.** Mengetuk novel membuka **Daftar Bab** dulu, bukan langsung editor. Di Pustaka ada kartu **Lanjutkan menulis** untuk kembali ke bab terakhir yang kamu buka.
- **Daftar Bab.** Bab bisa diurutkan, diganti nama, dicari, dan dihapus. Tiap bab menampilkan jumlah katanya.
- **Tempat Sampah untuk bab.** Bab yang dihapus dipindah ke Tempat Sampah, bisa dipulihkan dengan isi dan riwayat versinya, atau dihapus permanen.
- **Editor teks polos yang ringan.** Penghitung kata, karakter (dengan spasi), dan paragraf tampil langsung di bawah tulisan.
- **Penyimpanan otomatis yang tidak mengganggu.** Tulisan disimpan 1 detik setelah kamu berhenti mengetik (2 detik untuk bab yang sangat panjang), paling lambat 8 detik walau kamu mengetik terus, saat pindah bab, dan saat aplikasi disembunyikan atau ditutup. Catatan novel memakai aturan yang sama.
- **Mode Fokus** untuk menulis tanpa tombol.
- **Pengaturan teks:** font (Merriweather, Tinos, Lato, Sans-serif, Monospace), ukuran, jarak baris, perataan, dan tema terang, gelap, atau sistem.
- **Cari & Ganti** per bab dengan sorotan langsung di editor (ganti satu per satu atau semua di bab itu, bisa diurungkan), plus pencarian dan penggantian di semua bab.
- **Riwayat versi** per bab (maksimal 5 versi terakhir), bisa dikembalikan kapan saja.
- **Novel Notes:** daftar karakter, catatan dunia dan lokasi, serta catatan teks bebas untuk tiap novel. Tiap karakter punya kolom **Nama, Panggilan, Usia, Penampilan, Catatan**, dan kotak **Lacak di Wiki**.
- **Wiki Karakter.** Lihat di bawah.
- **Backup dan ekspor:**
  - ZIP per novel (satu file `.txt` per bab) atau semua novel sekaligus.
  - Satu file `.txt` untuk seluruh novel, atau satu bab saja.
  - Impor ZIP untuk memulihkan novel, dengan pilihan **Lewati**, **Timpa**, atau **Simpan sebagai salinan** kalau novelnya sudah ada.
  - Pengingat backup kalau sudah lebih dari 7 hari belum ekspor.

### Wiki Karakter

Wiki membantu kamu mengingat siapa saja yang muncul di sebuah bab, tanpa meninggalkan editor.

1. Isi karakter di **Novel Notes**. Isi **Panggilan** (pisahkan dengan koma) kalau tulisanmu sering memakai nama pendek, misalnya "Andi Pratama" yang di cerita ditulis "Andi" atau "Ndi".
2. Di editor, ketuk ikon **Wiki** di baris tombol bawah. Ikon ini hanya muncul kalau novel punya minimal satu karakter yang dilacak.
3. Keyboard turun dan panel naik. Panel menampilkan karakter yang muncul di bab itu, bisa digeser. Ketuk satu nama untuk melihat detailnya, dan **Lihat di Novel Notes** untuk membukanya di Novel Notes.
4. Di bagian bawah detail ada daftar **bab tempat karakter itu muncul** beserta jumlah kemunculannya. Ketuk bab untuk langsung membukanya.
5. Ketuk **X** atau tombol Back untuk menutup. Keyboard dan kursor kembali ke posisi terakhir.

Cara pelacakan: aplikasi mencari nama lengkap, nama depan, dan panggilan sebagai kata utuh, tanpa membedakan huruf besar-kecil. Akhiran *-nya*, *-lah*, *-kah*, dan *-pun* tetap terhitung, jadi "Andinya" terhitung sebagai Andi tapi "Sarimi" bukan Sari. Kalau dua karakter punya nama depan yang sama, nama depan itu tidak dipakai untuk melacak supaya tidak salah hitung (nama lengkap dan panggilan tetap dipakai). Matikan **Lacak di Wiki** untuk karakter yang namanya juga kata biasa.

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
- Memori HP yang sangat penuh bisa membuat browser membersihkan data situs yang belum berstatus permanen. Status penyimpanan permanen bisa dilihat di layar **Berkas & Cadangan**, bersama perkiraan ukuran data yang terpakai dan jatah dari browser. Jatah itu batas dari browser, bukan sisa memori HP, jadi bisa lebih besar dari ruang kosong HP-mu.
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
- Belum ada sinkronisasi antar perangkat.
- Tempat Sampah hanya untuk bab. Menghapus novel bersifat permanen, dan bab di Tempat Sampah tidak ikut backup ZIP.
- Backup ZIP berisi teks bab, catatan, dan Novel Notes. Riwayat versi dan pengaturan tampilan tidak ikut. ZIP belum dikompresi, jadi ukurannya sama dengan teks aslinya.
- Wiki Karakter hanya menampilkan karakter yang namanya muncul di bab yang sedang dibuka.
- Impor ZIP dibatasi untuk keamanan: berkas ZIP maksimal 50 MB, 3.000 berkas, 5 MB per berkas, 80 MB total setelah dibuka, dan 200 novel. ZIP yang terenkripsi atau berformat ZIP64 tidak didukung.

## Memperbarui aplikasi

Biasanya versi baru terpasang sendiri saat aplikasi dibuka, selama ada internet. Kalau versi lama masih tampil, buka **Berkas & Cadangan** lalu ketuk **Perbarui Aplikasi**. Tombol itu tidak menghapus novelmu.

## Riwayat perubahan

### v21.3
- Autosave dijamin jalan paling lambat 8 detik setelah ketikan pertama yang belum tersimpan, walau kamu belum berhenti mengetik. Sebelumnya, mengetik terus tanpa jeda 1 detik tidak menyimpan apa pun sampai berhenti. Berlaku juga untuk Catatan novel.
- Jeda simpan menyesuaikan ukuran bab: 1 detik untuk bab biasa, 2 detik untuk bab di atas sekitar 150 KB.
- Hasil hitung kata dipakai bersama oleh penghitung di layar dan penyimpanan, jadi bab panjang tidak dihitung ulang dua kali.

### v21.2
- **Penyimpanan lebih tahan saat aplikasi ditutup.** Teks bab dikirim ke database langsung tanpa menunggu pembacaan versi lama (riwayat versi memakai salinan di memori), jeda simpan dipersingkat dari 3 detik jadi 1 detik, dan transaksi dibatalkan kalau ada error di tengah penulisan supaya tidak meninggalkan data setengah jadi.
- **Impor ZIP diperkuat:** batas ukuran (lihat Batasan saat ini), pengaman terhadap ZIP bom, pengecekan CRC dan ukuran tiap berkas, validasi struktur arsip, penolakan ZIP terenkripsi/ZIP64/teks UTF-8 rusak, dan penulisan atomik (kalau satu novel gagal, tidak ada novel yang masuk). Pesan error sekarang menyebut alasannya. Nama folder kosong diganti "Novel impor".

### v21.1
- **Perbaikan risiko hilang data di Catatan novel.** Tulisan yang diketik di Catatan novel A bisa tersimpan sebagai catatan novel B kalau kamu pindah novel dalam 2 detik. Selain itu, ketikan terakhir bisa hilang saat aplikasi disembunyikan, diekspor, atau diperbarui sebelum sempat tersimpan. Semua jalur itu sekarang menyimpan Catatan dulu.
- Waktu **Diubah** pada novel sekarang ikut diperbarui setelah **Ganti semua** di semua bab selesai.

### v21
Perubahan sejak v20:
- **Daftar Bab dulu.** Mengetuk novel di Pustaka atau Berkas membuka Daftar Bab. Dari editor, panah kiri atau tombol Back kembali ke Daftar Bab, baru ke Pustaka. Novel baru tetap langsung membuka editor.
- **Kartu Lanjutkan menulis** di Pustaka.
- **Tempat Sampah** untuk bab yang dihapus.
- **Wiki Karakter** dan kolom karakter baru di Novel Notes (Panggilan, Penampilan, Catatan, Lacak di Wiki), termasuk daftar bab tempat karakter muncul.
- **Ikon perataan dipindah** dari baris bawah editor ke Pengaturan teks, supaya baris bawah muat untuk ikon Wiki.
- **Backup lebih aman.** Novel berjudul sama tidak lagi tercampur di ZIP (folder diberi nomor), setiap folder menyimpan `_Info.json` berisi ID novel dan judul asli novel dan bab (jadi judul bab tidak lagi berubah saat ekspor lalu impor), dan kolom karakter baru ikut tersimpan.
- **Pilihan saat impor:** Lewati, Timpa isi bab yang ada (dengan konfirmasi), atau Simpan sebagai salinan. Novel dikenali lewat ID. ZIP lama tanpa ID dikenali lewat judul.
- **Perbaikan keyboard di kolom Cari Pustaka.** Saat keyboard muncul, tombol Proyek Baru, tab bawah, dan kartu Lanjutkan disembunyikan sementara supaya tidak menimpa daftar novel.
- Teks penyimpanan di layar Berkas & Cadangan sekarang menampilkan jatah dari browser dengan keterangan yang jelas.

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
