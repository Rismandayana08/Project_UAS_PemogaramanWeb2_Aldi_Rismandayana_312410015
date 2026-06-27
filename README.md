# Project_UAS_PemrogramanWeb2_Aldi_Rismandayana_312410015


#  Aplikasi E-Inventory Berbasis Web (Single Page Application)

##  Deskripsi Singkat Tema Studi Kasus
Proyek ini mengusung tema **Manajemen Inventaris Barang (E-Inventory)**. Sistem ini dirancang sepenuhnya sebagai platform berbasis web (bukan aplikasi *mobile*), yang mengimplementasikan arsitektur *Single Page Application* (SPA). 

Pemisahan antara sisi *Client* dan *Server* diterapkan secara tegas:
*   **Frontend:** Dibangun menggunakan kerangka kerja **Vue.js 3** yang dikombinasikan dengan utilitas **Tailwind CSS** untuk menghasilkan antarmuka pengguna yang bersih, responsif, dan interaktif tanpa perlu melakukan *reload* halaman utuh.
*   **Backend:** Ditangani oleh RESTful API yang dibangun menggunakan framework **CodeIgniter 4**, yang bertugas mengatur logika bisnis, validasi, keamanan, dan manajemen operasi *database* MySQL.

---

##  Skema Relasi Tabel Database
Berikut adalah desain struktur database (dieksplorasi melalui desainer phpMyAdmin) yang mengatur tata kelola data barang, kategori, entitas *supplier*, serta pencatatan histori transaksi masuk dan keluar. Visualisasi disajikan dengan format *box and arrow* yang minimalis agar alur kardinalitas tabel lebih mudah dipahami.

<img width="2861" height="1601" alt="Screenshot 2026-06-21 083018" src="https://github.com/user-attachments/assets/c9489434-b277-4d26-bf02-b94d9c5faa0d" />




---

##  Uji Coba Proteksi API (Postman)
Untuk mengamankan fungsionalitas sistem, rute REST API di bagian backend telah dilindungi oleh *middleware* berbasis token otorisasi. Di bawah ini adalah bukti *screenshot* pengujian *endpoint* API (melalui Postman) yang menunjukkan bahwa sistem dengan tepat menolak akses dan mengembalikan respons **Error 401 Unauthorized** dengan format JSON apabila *request* dikirim tanpa melampirkan token akses yang valid.

<img width="2127" height="1546" alt="Screenshot 2026-06-21 075830" src="https://github.com/user-attachments/assets/f1d1bdac-4aba-4a63-987c-397b01e1d0c2" />


<img width="2110" height="1494" alt="Screenshot 2026-06-21 075639" src="https://github.com/user-attachments/assets/3c761fd3-f800-4a21-b7a5-7d6a82d926b7" />


---

## Tampilan Code Program 

```

```

##  Antarmuka Aplikasi (User Interface)
Berikut adalah visualisasi dari berbagai halaman utama aplikasi. Antarmuka dirancang dengan *layout* yang rapi berkat implementasi kelas utilitas dari Tailwind CSS:

### 1. Halaman Login
<img width="2861" height="1539" alt="Screenshot 2026-06-21 080943" src="https://github.com/user-attachments/assets/8b35b67c-1412-494b-9aa7-b7337b1a0e96" />



### 2. Halaman Dashboard Admin
<img width="2861" height="1520" alt="Screenshot 2026-06-21 080958" src="https://github.com/user-attachments/assets/35442136-61f6-49e7-bdcd-a711b7efa928" />



### 3. Tampilan Form Modal (Tambah/Edit Data)
Implementasi pengisian data menggunakan komponen *Modal* agar interaksi terasa lebih mulus tanpa berpindah halaman.
<img width="2861" height="1559" alt="Screenshot 2026-06-21 081526" src="https://github.com/user-attachments/assets/acbe67b7-87fd-451e-b254-413368429685" />



### 4. Visualisasi Data Berbasis Tabel
Data inventaris dan histori disajikan dalam format tabel fungsional yang padat informasi.
<img width="2858" height="1502" alt="Screenshot 2026-06-21 081440" src="https://github.com/user-attachments/assets/e2a9b32f-9572-4356-a050-1bb60818bfb8" />

### 5. Data Suplier 
<img width="2855" height="1510" alt="Screenshot 2026-06-21 081421" src="https://github.com/user-attachments/assets/ca2484ba-9a25-4a72-967a-1126888cf881" />



---

##  Petunjuk Instalasi Lokal
Untuk meninjau dan menjalankan proyek ini di lingkungan pengembangan lokal (*localhost*), silakan ikuti petunjuk berikut:

### Konfigurasi Backend (CodeIgniter 4 REST API)
1. Buka terminal, lalu arahkan direktori ke folder `backend`.
2. Pastikan *service* Apache dan MySQL (XAMPP/Laragon) dalam keadaan aktif.
3. Buat database baru di phpMyAdmin, kemudian *import* file `.sql` yang telah disediakan.
4. Salin file `env` menjadi `.env`. Buka file tersebut, aktifkan pengaturan lingkungan (*remove comment*), dan sesuaikan kredensial `database.default.database` dengan nama database Anda.
5. Jalankan server pengembangan internal CodeIgniter dengan perintah:
```bash
   php spark serve

```
### Link Demonstrasi YouTube
[https://youtu.be/XYM21Gb4YaE?si=D9jX7gkctv5GWNNp](https://youtu.be/OfJkIi8dfr8?si=dXS1R7uIKgc2tBLL)
