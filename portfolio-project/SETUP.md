# Portfolio Setup & Run Guide

## Overview
This is a full-stack portfolio application with:
- **Backend**: Laravel API (PHP, Sanctum authentication)
- **Frontend**: React + Vite with Tailwind CSS

## Prerequisites
- PHP 8.2+ with extensions: sqlite3, xml, curl
- Node.js 18+ and npm
- Composer (for PHP dependencies)
- SQLite (included with PHP)

## Initial Setup

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

**Install PHP dependencies:**
```bash
composer install
```

**Generate application key:**
```bash
php artisan key:generate
```

**Create database:**
```bash
touch database/database.sqlite
```

**Run migrations:**
```bash
php artisan migrate
```

**Seed database with demo data:**
```bash
php artisan db:seed
```

### 2. Frontend Setup

Navigate to the frontend directory:
```bash
cd frontend
```

**Install Node dependencies:**
```bash
npm install
```

## Running the Application

### Option 1: Using PowerShell Script (Windows)
From the project root:
```powershell
.\start-portfolio.ps1
```

This will open two PowerShell windows:
- Backend: `php artisan serve` (runs on http://localhost:8000)
- Frontend: `npm run dev` (runs on http://localhost:5173)

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
php artisan serve
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## API Endpoints

### Public Endpoints
- `GET /api/portfolio` - Get all portfolio data (education, skills, projects)
- `POST /api/contact` - Submit contact form

### Authentication
- `POST /api/login` - Login and get API token
  - Request: `{ "email": "admin@example.com", "password": "password" }`
  - Response: `{ "token": "...", "user": {...} }`

### Protected Endpoints (require Sanctum token)
- `POST /api/logout` - Logout
- `POST /api/skills` - Create skill
- `PUT /api/skills/{id}` - Update skill
- `DELETE /api/skills/{id}` - Delete skill
- `POST /api/projects` - Create project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

## Database Models

### Users
- id, name, email, password, timestamps

### Skills
- id, name, percentage (0-100), timestamps

### Projects
- id, title, description, tech_stack (JSON array), github, live_url, timestamps

### Education
- id, degree, institution, start_year, end_year, focus, description, timestamps

### Contacts
- id, name, email, subject, message, timestamps

## Default Credentials

**Admin Login:**
- Email: `admin@example.com`
- Password: `password`

## Environment Configuration

### Backend (.env)
Already configured with:
- SQLite database
- Local development settings
- API token (Sanctum) for authentication

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Backend Optimization
```bash
cd backend
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Troubleshooting

### "PHP not found"
- Ensure PHP is installed and in your PATH
- Run `php --version` to verify

### "npm not found"
- Ensure Node.js and npm are installed
- Run `npm --version` to verify

### Database errors
- Delete `backend/database/database.sqlite`
- Run migrations again: `php artisan migrate`
- Seed again: `php artisan db:seed`

### Frontend won't connect to backend
- Ensure backend is running on http://localhost:8000
- Check CORS configuration in `backend/config/cors.php`
- Verify `.env` file has correct `VITE_API_BASE_URL`

### CORS errors
CORS is already configured in `backend/config/cors.php` for local development.

## Project Structure

```
portfolio-project/
├── backend/                 # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   └── API/        # API controllers
│   │   └── Models/         # Database models
│   ├── database/
│   │   ├── migrations/     # Database migrations
│   │   └── seeders/        # Database seeders
│   ├── routes/
│   │   └── api.php         # API routes
│   ├── config/
│   ├── .env                # Environment file
│   └── composer.json
│
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── sections/       # Page sections
│   │   ├── dashboard/      # Admin dashboard
│   │   ├── api/            # API utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── start-portfolio.ps1     # Startup script
```

## Next Steps

1. ✅ Initial setup complete
2. Start both servers
3. Visit http://localhost:5173 to see the portfolio
4. Use admin credentials to login and manage content
5. Customize with your information:
   - Update `.env` files with your details
   - Modify seed data in `database/seeders/DatabaseSeeder.php`
   - Update component text and styling as needed

## Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
