## Fungsi `kategoriNilai`

Fungsi ini digunakan untuk menentukan kategori nilai berdasarkan nilai numerik yang diberikan dengan rentang 0-100.

### Parameter

- `nilai` (number): Nilai numerik yang akan dikonversi menjadi kategori nilai. Rentang nilai yang diterima adalah 0 hingga 100.

### Kategori Nilai

- **A**: Rentang nilai 86-100.
- **B**: Rentang nilai 71-85.
- **C**: Rentang nilai 56-70.
- **D**: Rentang nilai 41-55.
- **E**: Rentang nilai 0-40.

### Contoh Penggunaan

```javascript
console.log(kategoriNilai(90)); // Output: A
console.log(kategoriNilai(65)); // Output: C
console.log(kategoriNilai(20)); // Output: E
```

lalu jalankan dengan menggunakan perintah node index.js di terminal
