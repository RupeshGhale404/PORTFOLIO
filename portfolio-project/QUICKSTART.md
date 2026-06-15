# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Backend Dependencies
```powershell
cd backend
composer install
```

### Step 2: Set Up Database
```powershell
php artisan key:generate
touch database/database.sqlite
php artisan migrate
php artisan db:seed
```

### Step 3: Install Frontend Dependencies
```powershell
cd ../frontend
npm install
```

### Step 4: Start Both Servers
From project root:
```powershell
.\start-portfolio.ps1
```

Or manually:
- **Terminal 1**: `cd backend && php artisan serve`
- **Terminal 2**: `cd frontend && npm run dev`

### Step 5: Open in Browser
Visit: http://localhost:5173

---

## 📝 Default Login Credentials

- **Email**: admin@example.com
- **Password**: password

---

## 🎨 Your Portfolio Features

✅ **Public Pages:**
- Hero section
- About section
- Skills showcase with progress bars
- Project portfolio
- Contact form

✅ **Admin Dashboard:**
- Create, edit, delete skills
- Create, edit, delete projects
- Manage education info

✅ **API Features:**
- Sanctum authentication
- RESTful endpoints
- SQLite database
- CORS enabled for local development

---

## 📋 What's Configured

- ✅ Backend: Laravel with Sanctum authentication
- ✅ Frontend: React + Vite + Tailwind CSS
- ✅ Database: SQLite with migrations
- ✅ API Routes: All endpoints configured
- ✅ Models: User, Skill, Project, Education, Contact
- ✅ Controllers: API and Contact controllers
- ✅ Environment: Development configuration ready

---

## 🔧 Key Files

| File | Purpose |
|------|---------|
| `backend/.env` | Backend configuration (database, app settings) |
| `frontend/.env` | Frontend configuration (API URL) |
| `backend/routes/api.php` | API endpoint definitions |
| `backend/database/seeders/DatabaseSeeder.php` | Demo data |
| `frontend/src/App.jsx` | Main React component |
| `start-portfolio.ps1` | Auto-start script |

---

## ⚠️ Troubleshooting

**Issue**: "PHP is not recognized"
- Install PHP or add it to your PATH
- Run `php --version` to verify

**Issue**: "npm is not recognized"
- Install Node.js from https://nodejs.org
- Run `npm --version` to verify

**Issue**: Database errors
```powershell
cd backend
rm database/database.sqlite
php artisan migrate
php artisan db:seed
```

---

## 📚 Full Setup Guide
See [SETUP.md](SETUP.md) for detailed configuration and troubleshooting.
