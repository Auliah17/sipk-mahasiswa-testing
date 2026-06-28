
# 🎓 SIPK (Sistem Informasi Pendaftaran Kegiatan Mahasiswa)

SIPK adalah aplikasi berbasis web yang digunakan untuk mengelola kegiatan mahasiswa. Sistem ini terdiri dari frontend berbasis React dan backend berbasis Express.js dengan database MySQL.

---

# 👥 Anggota Kelompok

• Qhaylha Sahara Putri  
• Auliah Handayani Tahir  
• Siti Nurhaliza   
( 231011012 ) IK 23-A 
( 231011023 ) IK 23-A 
( 231011057 ) IK 23-A 

---

# 🛠️ Teknologi yang Digunakan

## Frontend
- React JS
- Vite
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication

## Testing
- Jest
- GitHub Actions (CI/CD)

---

# 📂 Struktur Project

```
sipk-mahasiswa
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Cara Install Project

## 1. Clone Repository

```bash
git clone https://github.com/Auliah17/sipk-mahasiswa.git
```

Masuk ke folder project

```bash
cd sipk-mahasiswa
```

---

## 2. Install Backend

```bash
cd backend
npm install
```

---

## 3. Install Frontend

Buka terminal baru

```bash
cd frontend
npm install
```

---

# ▶️ Menjalankan Project

## Menjalankan Backend

Masuk ke folder backend

```bash
cd backend
```

Jalankan server

```bash
npm run dev
```

Server akan berjalan pada

```
http://localhost:5000
```

---

## Menjalankan Frontend

Masuk ke folder frontend

```bash
cd frontend
```

Jalankan aplikasi

```bash
npm run dev
```

Frontend akan berjalan pada

```
http://localhost:5173
```

---

# 🧪 Menjalankan Unit Testing

Masuk ke folder backend

```bash
cd backend
```

Kemudian jalankan

```bash
npm test
```

Apabila berhasil akan muncul tampilan seperti berikut

```
PASS tests/validation.test.js
PASS tests/user.test.js
PASS tests/kegiatan.test.js
PASS tests/admin.kegiatan.test.js

Test Suites: 4 passed
Tests: 16 passed
```

---

# 📊 Melihat Code Coverage

Masuk ke folder backend

```bash
npm test -- --coverage
```

Contoh hasil

```
Statements : 100%
Branches   : 100%
Functions  : 100%
Lines       : 100%
```

---

# 🔄 Continuous Integration (CI/CD)

Project ini menggunakan **GitHub Actions** untuk menjalankan pengujian secara otomatis setiap kali ada perubahan pada repository.

Workflow akan:

- Install dependency
- Menjalankan Unit Test
- Menampilkan status PASS/FAILED

---

# 📌 Fitur Sistem

## Mahasiswa

- Registrasi
- Login
- Melihat kegiatan
- Detail kegiatan
- Mendaftar kegiatan
- Melihat riwayat pendaftaran
- Mengajukan kegiatan

## Admin

- Login
- Kelola kegiatan
- Verifikasi kegiatan
- Kelola peserta
- Verifikasi peserta
- Laporan kegiatan

---

# 📷 Dokumentasi Pengujian

Project telah dilakukan beberapa jenis pengujian:

- ✅ Unit Testing
- ✅ Validation Testing
- ✅ Regression Testing
- ✅ Code Coverage
- ✅ Automation Testing
- ✅ GitHub Actions CI/CD

---

# 📄 Lisensi

Project ini dibuat untuk memenuhi tugas mata kuliah **Pengujian dan Kualitas Perangkat Lunak**.
