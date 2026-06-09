# 🖥️ INVOFEST Backend

Event Management System API - UTS Pemrograman Web 2

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-7.8.0-2D3748.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57.svg)

## 📋 Deskripsi

REST API backend untuk Sistem Manajemen Event INVOFEST yang dikembangkan sebagai tugas UTS Pemrograman Web 2. API ini menyediakan endpoint untuk mengelola kategori, narasumber, dan event dengan arsitektur RESTful.

## ✨ Fitur

- **Category Management** - CRUD untuk kategori event
- **Speaker Management** - CRUD untuk narasumber
- **Event Management** - CRUD untuk event
- **Database SQLite** - Lightweight database dengan Prisma ORM

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.2.1
- **ORM**: Prisma 7.8.0
- **Database**: SQLite (better-sqlite3)
- **Language**: TypeScript 5.6
- **API Style**: REST

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js 18+
- npm atau yarn

### Instalasi

```bash
# Install dependencies
npm install

# Generate Prisma Client
npm run db:generate

# Push schema ke database
npm run db:push

# (Opsional) Seed database
npm run db:seed

# Jalankan development server
npm run dev
```

### Build untuk Production

```bash
# Build TypeScript
npm run build

# Jalankan production server
npm start
```

### Variabel Lingkungan

Buat file `.env` jika diperlukan:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

## 📁 Struktur Proyek

```
backend/
├── prisma/
│   ├── schema.prisma      # Schema database
│   └── seed.ts            # Data seeding
├── src/
│   ├── index.ts           # Entry point
│   ├── db.ts              # Prisma client
│   ├── routes/            # API routes
│   └── generated/         # Prisma generated types
├── package.json
└── tsconfig.json
```

## 🌐 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/categories` | Ambil semua kategori |
| POST | `/api/categories` | Tambah kategori |
| PUT | `/api/categories/:id` | Update kategori |
| DELETE | `/api/categories/:id` | Hapus kategori |
| GET | `/api/pembicara` | Ambil semua narasumber |
| POST | `/api/pembicara` | Tambah narasumber |
| PUT | `/api/pembicara/:id` | Update narasumber |
| DELETE | `/api/pembicara/:id` | Hapus narasumber |
| GET | `/api/events` | Ambil semua event |
| POST | `/api/events` | Tambah event |
| PUT | `/api/events/:id` | Update event |
| DELETE | `/api/events/:id` | Hapus event |

## 👨‍💻 Author

**Maula adiba mufadol**
- **NIM**: 24090052
- **Prodi**: D4 Teknik Informatika
- **Kelas**: 4B
- **Mata Kuliah**: Pemrograman Web 2
- **Dosen Pengampu**: Jamal Apridi, S.Kom.

## 📄 Lisensi

ISC

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/sunrise-pixel/BackEnd_Invofest.git
cd uts-web-backend

# Install dependencies
npm install

# Generate Prisma Client
npm run db:generate

# Setup database
npm run db:push

# (Optional) Seed data
npm run db:seed

# Run development server
npm run dev
```

## 🚀 Cara Menjalankan

### Development
```bash
npm run dev
```
Server akan berjalan di `http://localhost:3001`

### Production
```bash
npm run build
npm start
```

## 📡 API Endpoints

### Health Check
```
GET /health
```

### Categories (Kategori)
```
GET    /api/categories        - Get all categories
GET    /api/categories/:id   - Get category by ID
POST   /api/categories       - Create new category
PUT    /api/categories/:id   - Update category
DELETE /api/categories/:id   - Delete category
```

### Speakers (Narasumber)
```
GET    /api/pembicara          - Get all speakers
GET    /api/pembicara/:id     - Get speaker by ID
POST   /api/pembicara         - Create new speaker
PUT    /api/pembicara/:id     - Update speaker
DELETE /api/pembicara/:id     - Delete speaker
```

### Events
```
GET    /api/events            - Get all events
GET    /api/events/:id       - Get event by ID
POST   /api/events           - Create new event
PUT    /api/events/:id       - Update event
DELETE /api/events/:id       - Delete event
```

## 📁 Struktur Project

```
backend/
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── dev.db           # SQLite database
├── src/
│   ├── db.ts           # Prisma client
│   ├── index.ts        # Main entry point
│   └── routes/         # API routes
│       ├── categories.ts
│       ├── events.ts
│       └── pembicara.ts
├── dist/                # Compiled output
├── package.json
└── tsconfig.json
```

## 🌐 Deploy ke VPS

### Menggunakan PM2 + Nginx

```bash
# Install PM2
npm install -g pm2

# Start dengan PM2
pm2 start dist/index.js --name uts-backend

# Setup startup
pm2 startup
pm2 save
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### SSL Certificate

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d api.yourdomain.com
```

## 🔒 Environment Variables

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3001
```

## 📝 Lisensi

Hak Cipta © 2026 - Maula adiba mufadol

## Expanding the ESLint configuration

Untuk production application, update ESLint configuration dengan type-aware lint rules sesuai dokumentasi resmi.
