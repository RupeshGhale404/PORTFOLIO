# Portfolio Project

A full-stack portfolio application built with **React + Vite** (frontend) and **Laravel** (backend API).

## 🎯 Features

### Frontend (React + Vite)
- Modern, responsive design with Tailwind CSS
- Smooth scrolling navigation
- Dynamic content from API
- Contact form with validation
- Mobile-friendly UI

### Backend (Laravel API)
- RESTful API with Laravel
- Sanctum authentication for admin features
- SQLite database with migrations
- Contact form submission handling
- Skills, projects, and education management

## 🚀 Quick Start

### 1. Install Dependencies

**Backend:**
```bash
cd backend
composer install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Setup Database

```bash
cd backend
php artisan key:generate
touch database/database.sqlite
php artisan migrate
php artisan db:seed
```

### 3. Run Servers

**Option A: Use the startup script (Windows)**
```powershell
.\start-portfolio.ps1
```

**Option B: Manual start**

Terminal 1:
```bash
cd backend
php artisan serve
```

Terminal 2:
```bash
cd frontend
npm run dev
```

### 4. Access Your Portfolio

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API**: http://localhost:8000/api

## 📝 Default Admin Credentials

```
Email: admin@example.com
Password: password
```

## 📚 API Endpoints

### Public
- `GET /api/portfolio` - Get all portfolio data
- `POST /api/contact` - Submit contact form

### Authentication
- `POST /api/login` - Login (returns token)
- `POST /api/logout` - Logout (requires auth)

### Protected (require token)
- `POST /api/skills` - Create skill
- `PUT /api/skills/{id}` - Update skill
- `DELETE /api/skills/{id}` - Delete skill
- `POST /api/projects` - Create project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

## 🗄️ Database Models

- **Users**: Admin accounts with authentication
- **Skills**: Technical skills with proficiency percentage
- **Projects**: Portfolio projects with tech stack
- **Education**: Educational background
- **Contacts**: Contact form submissions

## 📁 Project Structure

```
portfolio-project/
├── backend/              # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/API/
│   │   │   └── Controllers/ContactController.php
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   │   └── api.php
│   ├── .env
│   └── composer.json
│
├── frontend/             # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── dashboard/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── SETUP.md              # Detailed setup guide
├── QUICKSTART.md         # Quick start guide
└── start-portfolio.ps1   # Windows startup script
```

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router (optional)
- Axios

**Backend:**
- Laravel 12
- Sanctum (API authentication)
- SQLite

**Tools:**
- Composer
- npm
- PHP 8.2+

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get running in 5 minutes
- **[SETUP.md](SETUP.md)** - Detailed configuration and troubleshooting

## 🔍 Configuration

### Backend (.env)
- Already configured for local development
- Uses SQLite database
- Local mail driver (logs to file)

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## 📦 Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
php artisan config:cache
php artisan route:cache
```

## 🐛 Troubleshooting

**PHP not found?**
- Install PHP 8.2+ from https://windows.php.net
- Add PHP to your PATH

**npm not found?**
- Install Node.js from https://nodejs.org

**Database errors?**
- Delete `backend/database/database.sqlite`
- Run `php artisan migrate && php artisan db:seed`

**CORS issues?**
- Ensure backend is running on `http://localhost:8000`
- Check `backend/config/cors.php`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Getting Help

- Check [SETUP.md](SETUP.md) for detailed troubleshooting
- Review Laravel docs: https://laravel.com/docs
- Review React docs: https://react.dev

