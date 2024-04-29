# API Program

Ini adalah program API sederhana yang dikembangkan dengan menggunakan Express js dan MongoDB sebagai databasenya.

## Persiapan

Sebelum menjalankan program ini, pastikan Anda telah menginstal Node.js dan MongoDB di komputer Anda.

## Instalasi

1. Clone repositori ini ke komputer lokal Anda
2. Masuk ke direktori proyek
3. Install dependensi dengan npm

## Konfigurasi

Pastikan Anda telah mengonfigurasi file konfigurasi sesuai dengan database yang anda miliki. File konfigurasi terletak di `config/mongo.js`.

## Menjalankan Server

Untuk menjalankan server, Anda dapat menggunakan perintah berikut:
`node --watch app`

Server akan berjalan di port default `3000`.

## Penggunaan

Setelah server berjalan, Anda dapat menggunakan API ini dengan mengakses endpoint yang tersedia, dengan mengakses `http://localhost:3000/pasien` di postman atau di aplikasi lainnya
