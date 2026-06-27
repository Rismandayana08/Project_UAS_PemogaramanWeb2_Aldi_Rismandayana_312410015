# Dokumentasi Struktur Direktori Backend API (CodeIgniter 4)
**Proyek UAS Pemrograman Web 2 - Aldi Rismandayana (312410015)**

## 1. File Konfigurasi Utama (Root Directory)
* **`.env`**: Menyimpan konfigurasi environment seperti kredensial database (MySQL) dan *base URL* aplikasi.
* **`composer.json`**: Daftar *library* atau dependensi pihak ketiga yang dikelola melalui Composer.
* **`spark`**: *Command-line tool* bawaan CI4 untuk menjalankan server lokal (`php spark serve`) atau eksekusi migrasi database.

## 2. Direktori `app/` (Logika Utama Aplikasi)
Pusat pengembangan RESTful API dengan arsitektur MVC (Model-View-Controller):
* **`Controllers/Api/`**: Memproses HTTP *request*.
  * `Auth.php`: Endpoint untuk otentikasi/login API.
  * `Barang.php`, `Kategori.php`, `Supplier.php`: Endpoint pengolahan *Master Data* inventaris.
  * `Histori.php`: Endpoint untuk pencatatan riwayat aktivitas/transaksi barang.
* **`Models/`**: Kelas yang berinteraksi langsung dengan tabel database (`BarangModel.php`, `KategoriModel.php`, `SupplierModel.php`, `HistoriModel.php`, `UserModel.php`).
* **`Filters/`**: Berisi `ApiAuthFilter.php` yang bertindak sebagai *middleware* untuk memvalidasi token keamanan sebelum *request* diizinkan mengakses *controller*.
* **`Config/`**: Pengaturan perilaku aplikasi seperti koneksi database (`Database.php`), rute *endpoint* (`Routes.php`), konfigurasi *middleware* (`Filters.php`), dan pengaturan akses lintas domain (`Cors.php`).

## 3. Direktori `public/` (Web Root)
Folder yang diatur sebagai *Document Root* pada web server dan dapat diakses publik.
* **`index.php`**: *Front controller*, titik masuk utama untuk semua *request* ke dalam aplikasi API.
* **`.htaccess`**: Konfigurasi web server (Apache) untuk *URL rewriting* agar URL *endpoint* API menjadi bersih (tanpa `index.php`).

## 4. Direktori `system/` (Core Framework)
Berisi *source code* murni bawaan dari CodeIgniter 4 yang mengelola fungsi dasar *framework* (HTTP, *Security*, *Database Drivers*). Isi folder ini merupakan sistem *core* dan tidak perlu dimodifikasi.

## 5. Direktori `writable/` (Penyimpanan Dinamis)
Folder ini membutuhkan hak akses tulis (write) oleh *server*. Digunakan oleh aplikasi untuk menyimpan *file* sementara yang dihasilkan sistem saat berjalan, seperti *cache*, *log error*, data *session*, dan *file* debugbar.
