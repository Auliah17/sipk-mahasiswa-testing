# 🎓 SIPK (Sistem Informasi Pendaftaran Kegiatan Mahasiswa)

SIPK merupakan aplikasi berbasis web yang digunakan untuk mengelola kegiatan mahasiswa. Sistem ini terdiri dari frontend berbasis React dan backend berbasis Express.js dengan database MySQL. Selain menyediakan fitur manajemen kegiatan, project ini juga menerapkan pengujian perangkat lunak menggunakan Jest, Code Coverage, Regression Testing, dan Continuous Integration (CI/CD) melalui GitHub Actions.

---

# 👥 Anggota Kelompok

| Nama | NIM | Kelas |
|------|------|------|
| Qhaylha Sahara Putri | 231011012 | IK 23-A |
| Auliah Handayani Tahir | 231011023 | IK 23-A |
| Siti Nurhaliza | 231011057 | IK 23-A |

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
- Supertest
- GitHub Actions (CI/CD)

---

# 📂 Struktur Project

```
sipk-mahasiswa
│
├── .github/
│   └── workflows/
│       └── test.yml
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Cara Clone Repository

```bash
git clone https://github.com/Auliah17/sipk-mahasiswa-testing.git
```

Masuk ke folder project

```bash
cd sipk-mahasiswa
```

---

# 📦 Instalasi Backend

Masuk ke folder backend

```bash
cd backend
```

Install dependency

```bash
npm install
```

---

# 📦 Instalasi Frontend

Buka terminal baru

```bash
cd frontend
```

Install dependency

```bash
npm install
```

---

# ▶️ Menjalankan Backend

```bash
cd backend
npm run dev
```

Server berjalan pada

```
http://localhost:5000
```

---

# ▶️ Menjalankan Frontend

```bash
cd frontend
npm run dev
```

Frontend berjalan pada

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

Contoh hasil

```
PASS tests/validation.test.js
PASS tests/user.test.js
PASS tests/kegiatan.test.js
PASS tests/admin.kegiatan.test.js

Test Suites: 4 passed
Tests: 16 passed
Snapshots: 0 total
```

---

# 📊 Menjalankan Code Coverage

Masuk ke folder backend

```bash
npm test -- --coverage
```

Contoh hasil

```
----------------|---------|----------|---------|---------|
File            | % Stmts | % Branch | % Funcs | % Lines |
----------------|---------|----------|---------|---------|
All files       |   100   |   100    |   100   |   100   |
----------------|---------|----------|---------|---------|
```

---

# 🔄 Regression Testing

Regression testing dilakukan dengan cara mengubah logika validasi pada fungsi `validation.js`.

Contoh perubahan:

```javascript
if (!name || !value)
```

diubah menjadi

```javascript
if (!name)
```

Kemudian jalankan kembali

```bash
npm test
```

Hasil pengujian menunjukkan terdapat test yang gagal (FAILED), yang membuktikan bahwa pengujian mampu mendeteksi perubahan logika program.

Setelah kode dikembalikan seperti semula, seluruh test kembali berstatus **PASS**.

---

# 🌐 API Testing

Project telah menerapkan pengujian terhadap beberapa controller menggunakan **Jest**.

Controller yang telah diuji antara lain:

- Register User
- Login User
- Forgot Password
- Reset Password
- Get Profile
- Update Profile
- Change Password
- Get Kegiatan
- Get Detail Kegiatan
- Create Pengajuan Kegiatan
- Get Data Kegiatan Admin
- Update Kegiatan
- Verifikasi Kegiatan
- Delete Kegiatan

Seluruh pengujian berhasil dijalankan dengan status **PASS**.

---

# 🤖 Continuous Integration (CI/CD)

Project menggunakan **GitHub Actions** untuk melakukan otomatisasi pengujian.

Workflow akan berjalan setiap kali terdapat:

- Push ke branch main
- Pull Request

Tahapan workflow meliputi:

- Checkout Repository
- Setup Node.js
- Install Dependencies
- Menjalankan Unit Test
- Menampilkan hasil PASS atau FAILED

File workflow berada pada

```
.github/workflows/test.yml
```

---

# 📌 Fitur Sistem

## Mahasiswa

- Registrasi akun
- Login
- Melihat daftar kegiatan
- Detail kegiatan
- Mendaftar kegiatan
- Melihat riwayat pendaftaran
- Mengajukan kegiatan

## Admin

- Login
- Mengelola kegiatan
- Verifikasi kegiatan
- Mengelola peserta
- Verifikasi peserta
- Melihat laporan kegiatan

---

# 📷 Dokumentasi Pengujian

Jenis pengujian yang telah dilakukan:

- ✅ Unit Testing
- ✅ API Controller Testing
- ✅ Validation Testing
- ✅ Regression Testing
- ✅ Automation Testing
- ✅ Code Coverage
- ✅ Continuous Integration (GitHub Actions)

---

# 📄 Lisensi

Project ini dikembangkan sebagai tugas mata kuliah **Pengujian dan Kualitas Perangkat Lunak** Program Studi Informatika.
